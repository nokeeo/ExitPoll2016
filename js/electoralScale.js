function ElectoralScale(element, electoralData, uiData) {
	function __partyVoteDisplayData(share, color) {
		this.pct = share;
		this.color = color;
	}

	function __partyVoteDisplayDataForSlider(electoralData) {

		var dem = new __partyVoteDisplayData(electoralData.partyPct('D'), uiData.fillColors['D']);
		var other = new __partyVoteDisplayData(electoralData.remainingPct(), uiData.fillColors['other']);
		var rep = new __partyVoteDisplayData(electoralData.partyPct('R'), uiData.fillColors['R']);

		return [dem, other, rep];
	}

	function __percentString(dec) {
		return (Math.trunc(dec * 1000) / 10).toString();
	}

	function __appendElectoralScaleTopLabelContents(electoralData, element, partyName) {
		var votesAppend = function() {
				element.append('span')
				.attr('class', 'electoralScaleVotes')
				.style('color', uiData.fillColors[partyName])
				.text(electoralData.partyVotes(partyName));
			}

		var nameAppend = function() { 
			element.append('span')
			.attr('class', 'electoralScaleName')
			.style('color', uiData.fillColors[partyName])
			.text(electoralData.partyCandidateName(partyName));
		}

		if(partyName == 'D') {
			votesAppend();
			nameAppend();
		}
		else {
			nameAppend();
			votesAppend();
		}
	}

	function __appendElectoralScaleBottomLabelContent(electoralData, element, partyName) {
		element.append('span')
			.attr('class', 'subtleText electoralScalePercent')
			.text(__percentString(electoralData.partyPct(partyName)) + '%');
	}

	this.update = function(electoralData) {
		var totals = __partyVoteDisplayDataForSlider(electoralData);
		d3.select('#electoralScale')
			.selectAll('div')
			.data(totals)
				.style('width', function(partyData) { return (partyData.pct * 100).toString() + '%'; })
				.style('background', function(partyData) { return partyData.color; });

		d3.select('#electoralScaleTopDemLabel')
			.select('.electoralScaleVotes')
			.text(electoralData.partyVotes('D'));

		d3.select('#electoralScaleTopRepLabel')
			.select('.electoralScaleVotes')
			.text(electoralData.partyVotes('R'));

		d3.select('#electoralScaleBottomDemLabel')
			.select('span')
			.text(__percentString(electoralData.partyPct('D')) + '%');

		d3.select('#electoralScaleBottomRepLabel')
			.select('span')
			.text(__percentString(electoralData.partyPct('R')) + '%');
	}

	/*** Constructor ****/

	var totals = __partyVoteDisplayDataForSlider(electoralData);
	var electoralContainer = d3.select(element);

	// Dem Votes
	var demTopLabel = electoralContainer.append('div')
		.attr('class', 'electoralScaleSliderLabel')
		.attr('id', 'electoralScaleTopDemLabel')

	__appendElectoralScaleTopLabelContents(electoralData, demTopLabel, 'D');

	var repTopLabel = electoralContainer.append('div')
		.attr('class', 'electoralScaleSliderLabel')
		.attr('id', 'electoralScaleTopRepLabel')
		.style('float', 'right')

	__appendElectoralScaleTopLabelContents(electoralData, repTopLabel, 'R');
		
	electoralContainer.append('div')
		.attr('id', 'electoralScale')
		.selectAll('div')
		.data(totals)
		.enter().append('div')
			.attr('class', 'electoralSlider')
			.style('width', function(partyData) { return (partyData.pct * 100).toString() + '%'; })
			.style('background', function(partyData) { return partyData.color; });

	var demBottomLabel = electoralContainer.append('div')
		.attr('class', 'electoralScaleSliderLabel')
		.attr('id', 'electoralScaleBottomDemLabel');

	__appendElectoralScaleBottomLabelContent(electoralData, demBottomLabel, 'D');

	var repBottomLabel = electoralContainer.append('div')
		.attr('class', 'electoralScaleSliderLabel')
		.attr('id', 'electoralScaleBottomRepLabel')
		.style('float', 'right');

	__appendElectoralScaleBottomLabelContent(electoralData, repBottomLabel, 'R');
}