function ObjectKeyIterator(obj) {
	var i = 0;

	this.hasNext = function() {
		return i < Object.keys(obj).length;
	}

	this.next = function() {
		var keys = Object.keys(obj);
		var cand = obj[keys[i]];
		i += 1;
		return cand;
	}

	this.reset = function() {
		i = 0;
	}

	this.forEach = function(callback) {
		var keys = Object.keys(obj);
		for(var i = 0; i < keys.length; i++) {
			var key = keys[i]
			if(callback(key, obj[key])) {
				break;
			}
		}
	}
}

var VotingCalc = function() {

	function ElectoralData() {
		this.states = {};
		this.total = 538;
		this.candidateVoteTotals = {
			total : 0,
			candidates : {}
		};

		this.partyVotes = function(partyName) {
			var itr = new ObjectKeyIterator(this.candidateVoteTotals.candidates);
			while(itr.hasNext()) {
				var next = itr.next();
				if(partyName == next.candidate.party) {
					return next.eVotes;
				}
			}

			return 0;
		};

		this.remainingVotes = function() {
			var sum = 0;
			var itr = new ObjectKeyIterator(this.candidateVoteTotals.candidates);
			while(itr.hasNext()) {
				var next = itr.next();
				sum += next.eVotes;
			}

			return this.total - sum;
		};

		this.partyPct = function(partyName) {
			return this.partyVotes(partyName) / this.total;
		};

		this.remainingPct = function(partyName) {
			return this.remainingVotes(partyName) / this.total;
		}

		this.partyCandidateName = function(partyName) {
			var itr = new ObjectKeyIterator(this.candidateVoteTotals.candidates);
			while(itr.hasNext()) {
				var next = itr.next();
				if(next.candidate.party == partyName) {
					var cand = next.candidate;
					return cand.fname + ' ' + cand.lname;
				}
			}

			return '';
		}
	}

	function __pctToDecimal(pct) {
		return pct * 0.01;
	}

	function __decimalToPct(dec) {
		return dec * 100;
	}

	function __getNormalizedCandidateAnswers(answer) {
		var candAnswers = {}
		for(var i = 0; i < answer.candidateanswers.length; i++) {
			var candAnswer = answer.candidateanswers[i];
			candAnswers[candAnswer.id] = __pctToDecimal(answer.pct) * __pctToDecimal(candAnswer.pct);
		}

		return candAnswers;
	}

	function __mergeCandAnswers(cand1, cand2) {
		var cand2Keys = Object.keys(cand2); 
		for(var i = 0; i < cand2Keys.length; i++) {
			var key = cand2Keys[i];
			var val2 = cand2[key];
			if(cand1[key] != null) {
				cand1[key] += val2;
			}
			else {
				cand1[key] = val2;
			}
		}
	}

	function __candAnswersToArray(shares, candidates) {
		var arr = [];

		var ids = Object.keys(shares);
		for(var i = 0; i < ids.length; i++) {
			var id = ids[i];
			var share = shares[id];
			arr.push({
				id : id,
				pct : shares[id],
				candidate : candidates[id]
			})
		}
		return arr.sort(function(obj1, obj2) {
			return obj2.pct - obj1.pct;
		});
	}

	function __calcCandidateWinner(candidatesShares) {
		var leaderPct = 0;
		var leader = null; 
		for(var i = 0; i < candidatesShares.length; i++) {
			var share = candidatesShares[i]
			if(share.pct > leaderPct) {
				leaderPct = share.pct;
				leader = candidatesShares[i];
			}
		}
		return leader;
	}

	function __getStateElectoralVotes(stateName) {
		var state = votingData[stateName];
		if(state != null) {
			return state.evotes;
		}

		return 0;
	}

	function __totalShare(candidateShares) {
		var sum = 0;
		for(var i = 0; i < candidateShares.length; i++) {
			sum += candidateShares[i].pct;
		}

		return sum;
	}

	function __standardDeviation(values) {
		var mean = __mean(values);
		var normals = [];
		for(var i = 0; i < values.length; i++) {
			normals.push(Math.pow(values[i] - mean, 2))
		}

		var sd = __mean(normals);
		return Math.sqrt(sd);
	}

	function __mean(values) {
		if(values.length > 0) {
			var sum = 0
			for(var i = 0; i < values.length; i++) {
				sum += values[i];
			}

			return sum / values.length;
		}

		return 0;
	}

	function __haveDataForState(shares) {
		for(var i = 0; i < shares.length; i++) {
			if(shares[i].pct != 0) {
				return true;
			}
		}
		return false;
	}

	return {
		getCandidatesDistribution : function(topicName, demoNames) {
			var stateItr = new ObjectKeyIterator(votingData);
			var shares = {}
			stateItr.forEach(function(stateKey, state) {
				var topic = state.polls.topics[topicName];
				var totalShare = 0;
				if(topic != null) {
					var candidateShare = {};
					for(var k = 0; k < topic.answers.length; k++) {
						var answer = topic.answers[k];
						if(demoNames.indexOf(answer.answer) != -1) {
							totalShare += __pctToDecimal(answer.pct);
							__mergeCandAnswers(candidateShare, __getNormalizedCandidateAnswers(answer));
						}
					}

					var candidatesShares = __candAnswersToArray(candidateShare, state.polls.candidates);
					if(__haveDataForState(candidatesShares)) {
						shares[stateKey] = {
							shares :candidatesShares,
							totalPct : totalShare,
						};
					}
				}
			});

			return shares;
		},

		calcElectoralVotes : function(candidateDistribution) {
			var stateKeys = Object.keys(candidateDistribution);
			var electoralVotes = new ElectoralData();
			for(var i = 0; i < stateKeys.length; i++) {
				var stateName = stateKeys[i];
				var eVotes = __getStateElectoralVotes(stateName);
				var winnerShare = __calcCandidateWinner(candidateDistribution[stateName].shares);

				if(winnerShare != null) {
					electoralVotes.states[stateName] = {
						eVotes : eVotes,
						candidate : winnerShare.candidate
					};

					electoralVotes.candidateVoteTotals.total += eVotes;
					if(electoralVotes.candidateVoteTotals.candidates[winnerShare.id] != null) {
						electoralVotes.candidateVoteTotals.candidates[winnerShare.id].eVotes += eVotes;
					}
					else {
						electoralVotes.candidateVoteTotals.candidates[winnerShare.id] = {
							eVotes : eVotes,
							candidate : winnerShare.candidate
						};
					}
				}
			}

			return electoralVotes;
		},

		calcStatePctZScores: function(candidateDistribution) {
			var stateItr = new ObjectKeyIterator(candidateDistribution);
			var zScores = {};
			var stateTotals = [];
			stateItr.forEach(function(key, value) {
				stateTotals.push(value.totalPct);
			});

			var mean = __mean(stateTotals);
			var sd = __standardDeviation(stateTotals);

			stateItr.reset();
			stateItr.forEach(function(key, value) {
				if(value.totalPct != null) {
					zScores[key] = (sd > 0) ? ((value.totalPct - mean) / sd) : 0;
				}
			})
			return zScores;
		},

		calcCandidateWinner : __calcCandidateWinner
	}
}()