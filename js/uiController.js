var UIController = function() {

	var uiModel = {
		topic : '',
		groups : [],
		map : null,
		voterDistribution : null
	}

	function __htmlForGroupCheckBoxes(topic) {
		var templateString = '{{#answerCheckbox answers}}<label class="control control--checkbox">{{answer}}' +
			'<input type="checkbox" class="groupCheckbox" checked="checked" value="{{answer}}" onchange="UIController.groupCheckboxOnChange(this)"/>' +
			'<div class="control__indicator"></div>' + 
			'</label>{{/answerCheckbox}}';
		var template = Handlebars.compile(templateString);
		return template(topic);
	}

	function __update() {
		uiModel.voterDistribution = VotingCalc.getCandidatesDistribution(uiModel.topic, uiModel.groups);
		VotingCalc.updateMapForDistribution(uiModel.map, uiModel.voterDistribution);
	}

	function __updateSelect() {
		var select = document.getElementById('categorySelect');
		var checkboxDiv = document.getElementById('demographicContent');
		checkboxDiv.innerHTML = '';

		var selectedOption = select.options[select.selectedIndex];

		var topic= votingData['CA'].polls.topics[selectedOption.value];
		if(topic != null) {
			checkboxDiv.innerHTML = __htmlForGroupCheckBoxes(topic);
			uiModel.topic = selectedOption.value;
		}

		__updateCheckboxes();
	}

	function __updateCheckboxes() {
		var checkboxes = document.getElementById('demographicContent').getElementsByClassName('groupCheckbox');
		var groups = [];
		for(var i = 0; i < checkboxes.length; i++) {
			var checkbox = checkboxes[i];
			if(checkbox.checked) {
				groups.push(checkbox.value);
			}
		}

		uiModel.groups = groups;
	}

	function __categorySelectOnChange(e) {
		__updateSelect();
		__update();
	}

	function __groupCheckboxOnChange(e) {
		__updateCheckboxes();
		__update();
	}

	function __htmlForPopover(stateName) {
		var stateDistribution = uiModel.voterDistribution[stateName];
		if(stateDistribution != null) {
			console.log(stateDistribution);
			var templateString = '{{#popoverRow shares}}<tr>' + 
			'<td>{{candidate.fname}} {{candidate.lname}}</td>' +
			'<td>{{#partyAbbrev candidate.party}}{{/partyAbbrev}}</td>' +
			'<td class="popoverShare">{{#percent pct}}{{/percent}}</td>' +
			'</tr>{{/popoverRow}}';
			var template = Handlebars.compile(templateString);
			return template(stateDistribution);
		}

		return '';
	}

	function __getDefaultMapData(element) {
		return {
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
					return __htmlForPopover(geography.id);
				}
			}
		}
	}

	return {
		categorySelectOnChange : __categorySelectOnChange,

		groupCheckboxOnChange : __groupCheckboxOnChange,

		update : __update,

		setup : function() {
			uiModel.map = VotingCalc.prepareMap(__getDefaultMapData(document.getElementById('map')));

			window.addEventListener('resize', function() {
				uiModel.map.resize(); 
			});

			Handlebars.registerHelper('answerCheckbox', function(items, options) {
				var output = '';
				for(var i = 0; i < items.length; i++) {
					output += '<div class="checkboxContainer">' + options.fn(items[i]) + '</div>';
				}

				return output;
			});

			Handlebars.registerHelper('popoverRow', function(items, options) {
				var output = '<div class="hoverInfo"><table>';
				output += '<tr><th></th><th>Party</th><th>Pct.</th></tr>';
				for(var i = 0; i < items.length; i++) {
					output += options.fn(items[i]);
				}

				return output + '</table></div>';
			});

			Handlebars.registerHelper('percent', function(item, options) {
				return (Math.trunc(item * 10000) / 100).toString() + '%';
			});

			Handlebars.registerHelper('partyAbbrev', function(item, options) {
				switch(item) {
					case 'D':
						return 'Dem.';
					case 'R':
						return 'Rep.';
					case 'I':
						return 'Ind.';
					case 'LB':
						return 'Lib.';
					case 'GR':
						return 'Gr.';
					default:
						return '-';
				}
			})

			__categorySelectOnChange(null);
			__groupCheckboxOnChange(null);
		},
	}
}();