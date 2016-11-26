function StateZScoreMapRenderer(candidateDistribution) {
	var zScores = VotingCalc.calcStatePctZScores(candidateDistribution);
	this.distribution = candidateDistribution


	this.setCandidateDistribution = function(candidateDistribution) {
		this.distribution = candidateDistribution;
		zScores = VotingCalc.calcStatePctZScores(this.distribution);
	}

	function __fillColorForStateZScore(zScore) {
		if(zScore < -3.0) {
			return '#DDDDDD';
		}
		else if(zScore < -2.0) {
			return '#DDD4DD';
		}
		else if(zScore < -1.0) {
			return '#DDCBDD'
		}
		else if(zScore < 0) {
			return '#DDBCDD';
		}
		else if(zScore < 0.5) {
			return '#DDA6DD';
		}
		else if(zScore < 1.0) {
			return '#DD90DD';
		}
		else if(zScore < 1.5) {
			return '#DD63DD';
		}
		else if(zScore < 2.0) {
			return '#DD4DDD';
		}
		else {
			return '#DD37DD';
		}
	}
	
	this.fillColorForState = function(stateName) {
		var zScore = zScores[stateName];
		if(zScore != null) {
			return __fillColorForStateZScore(zScore);
		}
	}
}

function ElectoralVoteMapRenderer(candidateDistribution) {
	this.distribution = candidateDistribution;

	this.setCandidateDistribution = function(candidateDistribution) {
		this.distribution = candidateDistribution;
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

	function __concentrationForElectoralVotes(margin) {
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

	this.fillColorForState = function(stateName) {
		var state = this.distribution[stateName];
		var winnerShare = VotingCalc.calcCandidateWinner(state.shares);
		if(winnerShare != null) {
			var margin = __victoryMargin(winnerShare, state);
			return __fillColorForParty(winnerShare.candidate.party, __concentrationForElectoralVotes(margin));
		}

		return null;
	}
}

function MapController(element) {

	var renderer = null;

	function __htmlForPopover(stateObj) {
		var stateDistribution = renderer.distribution[stateObj.id];
		if(stateDistribution != null) {
			var templateString = '<div class="hoverInfo"><table>' +
				'<tr class="subtleText"><th>' + stateObj.properties.name + '</th><th>Party</th><th>Pct.*</th></tr>' + 
				'{{#each shares}}<tr>' + 
					'<td>{{this.candidate.fname}} {{this.candidate.lname}}</td>' +
					'<td>{{#partyAbbrev this.candidate.party}}{{/partyAbbrev}}</td>' +
					'<td class="popoverShare">{{#percent this.pct}}{{/percent}}</td>' +
				'</tr>{{/each}}' +
			'</table>' +
			'<p class="subtleText" style="margin: .2em">*Percent of total vote</p></div>';
			var template = Handlebars.compile(templateString);
			return template(stateDistribution);
		}

		return '';
	}

	function __fillMissingStates(updates, color) {
		for(var i = 0; i < stateNames.length; i++) {
			var stateName = stateNames[i];
			if(updates[stateName] == null) {
				updates[stateName] = color;
			}
		}
	}

	var mapData = {
		element: element, 
		scope: 'usa',
		responsive: true,
		fills : {
			defaultFill : '#dddddd',
		},
		geographyConfig : {
			highlightFillColor: 'rgba(.5, .5, .5, 0)',
			highlightBorderColor : '#1A1A1A', 
			highlightBorderWidth : 1,
			popupTemplate : function(geography, data) {
				return __htmlForPopover(geography);
			}
		}
	};

	var map = new Datamap(mapData);

	this.update = function(_renderer) {
		var updates = {};
		if(_renderer != null) {
			renderer = _renderer;
			var stateItr = new ObjectKeyIterator(renderer.distribution);

			stateItr.forEach(function(stateName, state) {			
				updates[stateName] = renderer.fillColorForState(stateName);
			});
		}

		__fillMissingStates(updates, {fillKey : 'defaultFill'})
		map.updateChoropleth(updates);
	}

	this.resize = function() {
		map.resize();
	}
}