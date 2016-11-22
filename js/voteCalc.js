var VotingCalc = function() {

	function __pctToDecimal(pct) {
		return pct * 0.01;
	}

	function __decimalToPct(dec) {
		return dec * 100;
	}

	function __genLabels() {
		var labels = {};
		for(var i = 0; i < stateNames.length; i++) {
			var stateName = stateNames[i];
			labels[stateName] = (__haveStateData(stateName)) ? stateName : ' '; 
		}

		return labels;
	}

	function __genData() {
		var data = {};
		for(var i = 0; i < stateNames.length; i++) {
			var stateName = stateNames[i];
			data[stateName] = {
				fillKey : 'defaultFill'
			}
		}

		return data;
	}

	function __haveStateData(stateName) {
		return votingData[stateName] != null;
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

	function __concentrationForMargin(margin) {
		if(margin < .05) {
			return 80;
		}
		else if(margin < .1) {
			return 60;
		}
		else if(margin < .15) {
			return 40;
		}
		else if(margin < .20) {
			return 30;
		}
		else if(margin < .25) {
			return 20;
		}
		else if(margin < .50) {
			return 10;
		}
		else if(margin < .75) {
			return 5;
		}
		else {
			return 0;
		}
	}

	function __fillColorForParty(party, concentration) {
		switch(party) {
			case 'R' : 
				return __lightenDarkenColor('#ff3f3f', concentration);
			case 'D' : 
				return __lightenDarkenColor('#3f8fff', concentration);
			case 'I' :
				return '#923fff';
			case 'GR' : 
				return '#238220';
			default :
				return '#dddddd';
		}
	}

	/**
	 * https://css-tricks.com/snippets/javascript/lighten-darken-color/
	 */
	function __lightenDarkenColor(col, amt) {
	    var usePound = false;
	  
	    if (col[0] == "#") {
	        col = col.slice(1);
	        usePound = true;
	    }
	 
	    var num = parseInt(col,16);
	 
	    var r = (num >> 16) + amt;
	 
	    if (r > 255) r = 255;
	    else if  (r < 0) r = 0;
	 
	    var b = ((num >> 8) & 0x00FF) + amt;
	 
	    if (b > 255) b = 255;
	    else if  (b < 0) b = 0;
	 
	    var g = (num & 0x0000FF) + amt;
	 
	    if (g > 255) g = 255;
	    else if (g < 0) g = 0;
	 
	    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
  
	}

	function __calcCandAnswerWinner(candidateShares) {
		var leaderPct = 0;
		var leader = null; 
		for(var i = 0; i < candidateShares.length; i++) {
			var share = candidateShares[i]
			if(share.pct > leaderPct) {
				leaderPct = share.pct;
				leader = candidateShares[i];
			}
		}
		return leader;
	}

	function __fillMissingStates(updates, color) {
		for(var i = 0; i < stateNames.length; i++) {
			var stateName = stateNames[i];
			if(updates[stateName] == null) {
				updates[stateName] = color;
			}
		}
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

	function __victoryMargin(winner, candidateDistribution) {
		var minMargin = 1;
		var totalPct = candidateDistribution.totalPct;
		for(var i = 0; i < candidateDistribution.shares.length; i++) {
			var candidate = candidateDistribution.shares[i];
			if(candidate.id != winner.id) {
				var curMargin = (winner.pct / totalPct)  - (candidate.pct / totalPct);
				minMargin = (curMargin < minMargin) ? curMargin : minMargin;
			}
		}

		return minMargin;
	}

	return {
		prepareMap : function(mapData) {
			mapData.data = __genData();
			return new Datamap(mapData);
		},

		getCandidatesDistribution : function(topicName, demoNames) {
			var stateKeys = Object.keys(votingData);
			var shares = {}
			for(var i = 0; i < stateKeys.length; i++) {
				var state = votingData[stateKeys[i]];
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
					shares[stateKeys[i]] = {
						shares : __candAnswersToArray(candidateShare, state.polls.candidates),
						totalPct : totalShare
					};
				}
			}

			return shares;
		},

		calcElectoralVotes : function(candidateDistribution) {
			var stateKeys = Object.keys(candidateDistribution.shares);
			var electoralVotes = {
				states : {},
				candidateVoteTotals : {
					total : 0,
					candidates : {}
				}
			};
			for(var i = 0; i < stateKeys.length; i++) {
				var stateName = stateKeys[i];
				var eVotes = __getStateElectoralVotes(stateName);
				var winnerShare = __calcCandAnswerWinner(candidateDistribution[stateName].shares);

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

		updateMapForDistribution : function(map, candidateStateDistributions) {
			var stateKeys = Object.keys(candidateStateDistributions);
			var updates = {};
			for(var i = 0; i < stateKeys.length; i++) {
				var stateName = stateKeys[i];
				var winnerShare = __calcCandAnswerWinner(candidateStateDistributions[stateName].shares);

				if(winnerShare != null) {
					// console.log(stateName);
					var margin = __victoryMargin(winnerShare, candidateStateDistributions[stateName]);
					updates[stateName] = __fillColorForParty(winnerShare.candidate.party, __concentrationForMargin(margin))
				}
			}

			__fillMissingStates(updates, {fillKey : 'defaultFill'})
			map.updateChoropleth(updates);
		}
	}
}()