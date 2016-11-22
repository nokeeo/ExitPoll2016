'use strict';

let fs = require('fs');

function parseInteger(int) {
	let parsed = parseInt(int);
	return (parsed == NaN) ? null : parsed
}

function formatAnswers(poll) {
	for(let answer of poll.answers) {
		let name = answer.answer;

		answer.pct = parseInteger(answer.pct);
		delete answer.rid;

		for(let candAnswer of answer.candidateanswers) {
			candAnswer.pct = parseInteger(candAnswer.pct);
		}
	}

	return poll.answers;
}

function formatPolls(polls) {
	let formatPolls = {
		candidates : {},
		topics : {}
	};

	for(let poll of polls) {
		poll.answers = formatAnswers(poll);

		for(let candidate of poll.candidates) {
			if(formatPolls.candidates[candidate.id] == null) {
				let canId = candidate.id;
				delete candidate.id;
				formatPolls.candidates[canId] = candidate;
			}
		}

		let pollName = poll.pollname;
		
		delete poll.candidates;
		delete poll.pollname;

		formatPolls.topics[pollName] = poll;
	}

	return formatPolls;
}

function inputFileName(state) {
	return './rawData/' + state + '.json';
}

function outputFileName(state) {
	return './data/' + state + '.json'
}

function writeCompletedResults(results) {
	fs.writeFile('./data/compiledResults.json', JSON.stringify(results, null, '\t'), error => {
		if(error) {
			console.error(error);
		}
		else {
			console.log('Complete Results written to disk')
		}
	})
}

let topics = ['AGE', 'RACE', 'RACE2B', 'SEXBYRACE', 'EDUC12R', 'EDUCCOLL', 'EDUCWHITE', 'EDUCWHITEBYSEX', 'INCOME16GEN', 'INCOME3', 'PARTY', 'PARTYGENDER', 'PHIL3', ]
let states = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];

let completeResults = {};
let resultCount = 0;
for(let state of states) {
	fs.readFile(inputFileName(state), 'utf8', (error, contents) => {
		if(error == null) {
			let stateData = JSON.parse(contents);

			stateData.polls = formatPolls(stateData.polls.filter(obj => {
				return topics.indexOf(obj.pollname) > -1;
			}));
			stateData.evotes = stateData.eVotes;
			delete stateData.eVotes;

			completeResults[state] = stateData;
			fs.writeFile(outputFileName(state), JSON.stringify(stateData, null, '\t'), error => {
				resultCount++
				if(error) {
					console.error('Error formatting state data to disk');
				}
				else {
					console.log('State data written to disk');
				}

				if(resultCount == states.length) {
					writeCompletedResults(completeResults);
				}
			});
		}
		else {
			resultCount++;
		}
	});
}