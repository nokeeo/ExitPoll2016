var UIController = function() {

	var uiModel = {
		topic : '',
		groups : [],
		map : null
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
		var candidateShares = VotingCalc.getCandidateSharesPerState(uiModel.topic, uiModel.groups);
		VotingCalc.updateMapForDemos(uiModel.map, candidateShares);
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

	return {
		categorySelectOnChange : __categorySelectOnChange,

		groupCheckboxOnChange : __groupCheckboxOnChange,

		update : __update,

		setup : function() {
			uiModel.map = VotingCalc.prepareMap(document.getElementById('map'));

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

			__categorySelectOnChange(null);
			__groupCheckboxOnChange(null);
		},
	}
}();