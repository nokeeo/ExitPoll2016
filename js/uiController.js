var UIController = function() {

	var uiModel = {
		topic : '',
		groups : [],
		map : null,
		scale : null,
		voterDistribution : null,
		partyColors : {
			'R' : '#ff3f3f',
			'D' : '#3f8fff',
			'other' : '#DEDEDE'
		}
	}

	function __htmlForGroupCheckBoxes(topic) {
		var templateString = '{{#each answers}}<div class="checkboxContainer"><label class="control control--checkbox">{{this.answer}}' +
			'<input type="checkbox" class="groupCheckbox" checked="checked" value="{{this.answer}}" onchange="UIController.groupCheckboxOnChange(this)"/>' +
			'<div class="control__indicator"></div>' + 
			'</label></div>{{/each}}';
		var template = Handlebars.compile(templateString);
		return template(topic);
	}

	function __update() {
		uiModel.voterDistribution = VotingCalc.getCandidatesDistribution(uiModel.topic, uiModel.groups);
		var electoralData = VotingCalc.calcElectoralVotes(uiModel.voterDistribution);

		uiModel.map.update(__getRenderer(uiModel.voterDistribution));
		uiModel.scale.update(VotingCalc.calcElectoralVotes(uiModel.voterDistribution));
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

	function __getNumCheckedCheckboxes(checkboxes) {
		var total = 0;
		for(var i = 0; i < checkboxes.length; i++) {
			total += (checkboxes[i].checked) ? 1 : 0
		}

		return total;
	}

	function __categorySelectOnChange(e) {
		__updateSelect();
		__update(uiModel.voterDistribution);
	}

	function __groupCheckboxOnChange(e) {
		__updateCheckboxes();
		__update(uiModel.voterDistribution);
	}

	function __modeChanged(e) {
		__update();
	} 

	function __rendererClassForName(name) {
		if(name == 'groupInfluence') {
			var demoCheckboxes = document.getElementById('demographicContent').getElementsByClassName('groupCheckbox');
			var numCheckedDemos = __getNumCheckedCheckboxes(demoCheckboxes);
			return (numCheckedDemos != demoCheckboxes.length && numCheckedDemos != 0) ? StateZScoreMapRenderer : null
		}
		else {
			return ElectoralVoteMapRenderer;
		}
	}

	function __getRenderer(candidateDistribution) {
		var modeElements = document.getElementById('modeSelector').getElementsByTagName('input');
		for(var i = 0; i < modeElements.length; i++) {
			var modeElement = modeElements[i];
			if(modeElement.checked) {
				var rendererClass = __rendererClassForName(modeElement.value);
				if(rendererClass != null) {
					return new rendererClass(candidateDistribution);
				}
				break;
			}
		}
		return null;
	}

	return {
		categorySelectOnChange : __categorySelectOnChange,

		groupCheckboxOnChange : __groupCheckboxOnChange,

		modeChanged : __modeChanged,

		update : __update,

		setup : function() {
			uiModel.map = new MapController(document.getElementById('map'));

			window.addEventListener('resize', function() {
				uiModel.map.resize(); 
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
						return '';
				}
			})

			__updateSelect()
			uiModel.voterDistribution = VotingCalc.getCandidatesDistribution(uiModel.topic, uiModel.groups);
			var electoralData = VotingCalc.calcElectoralVotes(uiModel.voterDistribution);

			var renderer = __getRenderer(uiModel.voterDistribution);
			uiModel.map.update(renderer);
			uiModel.scale = new ElectoralScale(document.getElementById('electoralContainer'), electoralData, {
				fillColors : uiModel.partyColors	
			});
		},
	}
}();