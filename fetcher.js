'use strict';

let fs = require('fs');
let request = require('request');

function urlForState(state) {
	return 'http://data.cnn.com/ELECTION/2016/' + state + '/xpoll/Pfull.json';
}

function fetchAndWriteState(state) {
	request(urlForState(state), (error, response, body) => {
		let outputFile = './rawData/' + state + '.json'
		if(!error && response.statusCode == 200) {
			let json = JSON.parse(body);
			let prettyJSON = JSON.stringify(json, null, '\t');
			fs.writeFile(outputFile, prettyJSON, error => {
				if(error) {
					console.log(error);
				}
				else {
					console.log('Finished writing ' + outputFile);
				}
			})
		}
		else {
			console.log('Could not fetch ' + state);
		}
	});
}

let states = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];

for(let state of states) {
	fetchAndWriteState(state);
}