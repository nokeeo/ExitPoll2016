var stateNames = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];

var votingData = {
	"AZ": {
		"polls": {
			"candidates": {
				"0": {
					"fname": " ",
					"lname": "Other/No Answer",
					"party": ""
				},
				"895": {
					"fname": "Jill",
					"lname": "Stein",
					"party": "GR"
				},
				"1746": {
					"fname": "Hillary",
					"lname": "Clinton",
					"party": "D"
				},
				"8639": {
					"fname": "Donald",
					"lname": "Trump",
					"party": "R"
				},
				"31708": {
					"fname": "Gary",
					"lname": "Johnson",
					"party": "LB"
				}
			},
			"topics": {
				"SEX": {
					"numrespondents": 1729,
					"qid": 279,
					"question": "Gender",
					"answers": [
						{
							"answer": "Male",
							"pct": 49,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 40,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 53,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Female",
							"pct": 51,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 49,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 45,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						}
					]
				},
				"AGE": {
					"numrespondents": 1729,
					"qid": 159,
					"question": "Age",
					"answers": [
						{
							"answer": "18-29",
							"pct": 14,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 53,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 35,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 8,
									"leader": false
								},
								{
									"id": 895,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "30-44",
							"pct": 24,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 47,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 41,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 6,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "45-64",
							"pct": 37,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 41,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 54,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "65 and older",
							"pct": 25,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 42,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 55,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						}
					]
				},
				"RACE": {
					"numrespondents": 1729,
					"qid": 260,
					"question": "Race",
					"answers": [
						{
							"answer": "White",
							"pct": 75,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 40,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 54,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "Black",
							"pct": 2,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino",
							"pct": 15,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 61,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 31,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Asian",
							"pct": 2,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Other race",
							"pct": 5,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"RACE2B": {
					"numrespondents": 1729,
					"qid": 3423,
					"question": "Race",
					"answers": [
						{
							"answer": "White",
							"pct": 75,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 40,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 54,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-white",
							"pct": 25,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 59,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 32,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						}
					]
				},
				"SEXBYRACE": {
					"numrespondents": 1729,
					"qid": 1602,
					"question": "Race and gender",
					"answers": [
						{
							"answer": "White men",
							"pct": 37,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 36,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 56,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "White women",
							"pct": 39,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 44,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 51,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "Black men",
							"pct": 1,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Black women",
							"pct": 1,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino men",
							"pct": 8,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 51,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 42,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino women",
							"pct": 7,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 73,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 17,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 7,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Others",
							"pct": 7,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"EDUC12R": {
					"numrespondents": 1729,
					"qid": 2500,
					"question": "Education",
					"answers": [
						{
							"answer": "High school or less",
							"pct": 19,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 44,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 52,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Some college",
							"pct": 30,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 43,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 49,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "College graduate",
							"pct": 36,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 41,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 51,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "Postgraduate",
							"pct": 15,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 58,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 39,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCCOLL": {
					"numrespondents": 1729,
					"qid": 1951,
					"question": "Are you a college graduate?",
					"answers": [
						{
							"answer": "Yes",
							"pct": 51,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 46,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 47,
									"leader": true
								},
								{
									"id": 0,
									"pct": 7,
									"leader": false
								}
							]
						},
						{
							"answer": "No",
							"pct": 49,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 43,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 50,
									"leader": true
								},
								{
									"id": 0,
									"pct": 7,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCWHITE": {
					"numrespondents": 1729,
					"qid": 1974,
					"question": "Education and race",
					"answers": [
						{
							"answer": "White college graduates",
							"pct": 40,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 44,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 50,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Whites no degree",
							"pct": 35,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 36,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 58,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites college grads",
							"pct": 11,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 57,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 35,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites no degree",
							"pct": 14,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 61,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 30,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCWHITEBYSEX": {
					"numrespondents": 1729,
					"qid": 3790,
					"question": "Education among whites by sex",
					"answers": [
						{
							"answer": "White college-grad women",
							"pct": 21,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 46,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 48,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "White non-college women",
							"pct": 18,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 40,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 55,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "White college-grad men",
							"pct": 19,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 41,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 53,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 6,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "White non-college men",
							"pct": 18,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 32,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 60,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites",
							"pct": 25,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 59,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 32,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						}
					]
				},
				"PARTY": {
					"numrespondents": 1729,
					"qid": 248,
					"question": "Party ID",
					"answers": [
						{
							"answer": "Democrats",
							"pct": 28,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 89,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 7,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Republicans",
							"pct": 32,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 7,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 88,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "Independents",
							"pct": 40,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 44,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 47,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						}
					]
				},
				"PARTYGENDER": {
					"numrespondents": 1729,
					"qid": 3784,
					"question": "Party by gender",
					"answers": [
						{
							"answer": "Democratic men",
							"pct": 10,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 89,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 6,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Democratic women",
							"pct": 18,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 89,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 7,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Republican men",
							"pct": 16,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 6,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 89,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Republican women",
							"pct": 17,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 8,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 88,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Independent men",
							"pct": 23,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 40,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 50,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 6,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "Independent women",
							"pct": 16,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 49,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 42,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						}
					]
				},
				"PHIL3": {
					"numrespondents": 1729,
					"qid": 251,
					"question": "Ideology",
					"answers": [
						{
							"answer": "Liberal",
							"pct": 27,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 80,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 12,
									"leader": false
								},
								{
									"id": 0,
									"pct": 8,
									"leader": false
								}
							]
						},
						{
							"answer": "Moderate",
							"pct": 32,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 55,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 38,
									"leader": false
								},
								{
									"id": 0,
									"pct": 7,
									"leader": false
								}
							]
						},
						{
							"answer": "Conservative",
							"pct": 41,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 13,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 82,
									"leader": true
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						}
					]
				},
				"INCOME16GEN": {
					"numrespondents": 1729,
					"qid": 3728,
					"question": "Income",
					"answers": [
						{
							"answer": "Under $30,000",
							"pct": 16,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 54,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 38,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "$30K-$49,999",
							"pct": 19,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 47,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 43,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 6,
									"leader": false
								},
								{
									"id": 895,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "$50K-$99,999",
							"pct": 33,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 48,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 48,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "$100K-$199,999",
							"pct": 23,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 40,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 54,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "$200K-$249,999",
							"pct": 4,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$250,000 or more",
							"pct": 4,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"INCOME3": {
					"numrespondents": 1729,
					"qid": 1948,
					"question": "Income",
					"answers": [
						{
							"answer": "Under $50K",
							"pct": 36,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 50,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 40,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "$50K-$100K",
							"pct": 33,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 48,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 48,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "$100K or more",
							"pct": 32,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 40,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 54,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						}
					]
				}
			}
		},
		"electiondate": "20161108",
		"evotes": 11
	},
	"CA": {
		"polls": {
			"candidates": {
				"0": {
					"fname": " ",
					"lname": "Other/No Answer",
					"party": ""
				},
				"895": {
					"fname": "Jill",
					"lname": "Stein",
					"party": "GR"
				},
				"1746": {
					"fname": "Hillary",
					"lname": "Clinton",
					"party": "D"
				},
				"8639": {
					"fname": "Donald",
					"lname": "Trump",
					"party": "R"
				},
				"31708": {
					"fname": "Gary",
					"lname": "Johnson",
					"party": "LB"
				}
			},
			"topics": {
				"SEX": {
					"numrespondents": 2469,
					"qid": 279,
					"question": "Gender",
					"answers": [
						{
							"answer": "Male",
							"pct": 49,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 57,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 36,
									"leader": false
								},
								{
									"id": 0,
									"pct": 7,
									"leader": false
								}
							]
						},
						{
							"answer": "Female",
							"pct": 51,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 66,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 30,
									"leader": false
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						}
					]
				},
				"AGE": {
					"numrespondents": 2469,
					"qid": 159,
					"question": "Age",
					"answers": [
						{
							"answer": "18-29",
							"pct": 20,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 66,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 23,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 6,
									"leader": false
								},
								{
									"id": 895,
									"pct": 5,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "30-44",
							"pct": 24,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 67,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 27,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "45-64",
							"pct": 38,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 57,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 39,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "65 and older",
							"pct": 18,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 61,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 36,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						}
					]
				},
				"RACE": {
					"numrespondents": 2469,
					"qid": 260,
					"question": "Race",
					"answers": [
						{
							"answer": "White",
							"pct": 48,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 50,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 45,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Black",
							"pct": 6,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 88,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 9,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino",
							"pct": 31,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 71,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 24,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Asian",
							"pct": 12,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 70,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 17,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 6,
									"leader": false
								},
								{
									"id": 895,
									"pct": 6,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Other race",
							"pct": 3,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"RACE2B": {
					"numrespondents": 2469,
					"qid": 3423,
					"question": "Race",
					"answers": [
						{
							"answer": "White",
							"pct": 48,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 50,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 45,
									"leader": false
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-white",
							"pct": 52,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 73,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 21,
									"leader": false
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						}
					]
				},
				"SEXBYRACE": {
					"numrespondents": 2469,
					"qid": 1602,
					"question": "Race and gender",
					"answers": [
						{
							"answer": "White men",
							"pct": 23,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 43,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 50,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "White women",
							"pct": 25,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 57,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 40,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Black men",
							"pct": 3,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Black women",
							"pct": 3,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino men",
							"pct": 13,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 68,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 27,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino women",
							"pct": 18,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 73,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 22,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Others",
							"pct": 15,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 70,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 20,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 5,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"EDUC12R": {
					"numrespondents": 2469,
					"qid": 2500,
					"question": "Education",
					"answers": [
						{
							"answer": "High school or less",
							"pct": 15,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 61,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 31,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Some college",
							"pct": 31,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 56,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 39,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "College graduate",
							"pct": 35,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 63,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 32,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Postgraduate",
							"pct": 19,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 67,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 27,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCCOLL": {
					"numrespondents": 2469,
					"qid": 1951,
					"question": "Are you a college graduate?",
					"answers": [
						{
							"answer": "Yes",
							"pct": 54,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 65,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 30,
									"leader": false
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						},
						{
							"answer": "No",
							"pct": 46,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 57,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 36,
									"leader": false
								},
								{
									"id": 0,
									"pct": 7,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCWHITE": {
					"numrespondents": 2469,
					"qid": 1974,
					"question": "Education and race",
					"answers": [
						{
							"answer": "White college graduates",
							"pct": 29,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 59,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 35,
									"leader": false
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						},
						{
							"answer": "Whites no degree",
							"pct": 19,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 36,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 59,
									"leader": true
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites college grads",
							"pct": 25,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 72,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 23,
									"leader": false
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites no degree",
							"pct": 27,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 73,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 20,
									"leader": false
								},
								{
									"id": 0,
									"pct": 7,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCWHITEBYSEX": {
					"numrespondents": 2469,
					"qid": 3790,
					"question": "Education among whites by sex",
					"answers": [
						{
							"answer": "White college-grad women",
							"pct": 15,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 67,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 30,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "White non-college women",
							"pct": 10,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 42,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 54,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "White college-grad men",
							"pct": 14,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 51,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 41,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "White non-college men",
							"pct": 9,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 29,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 64,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites",
							"pct": 52,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 72,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 21,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						}
					]
				},
				"INCOME16GEN": {
					"numrespondents": 2469,
					"qid": 3728,
					"question": "Income",
					"answers": [
						{
							"answer": "Under $30,000",
							"pct": 17,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 66,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 29,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$30K-$49,999",
							"pct": 20,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 75,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 20,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "$50K-$99,999",
							"pct": 26,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 67,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 26,
									"leader": false
								},
								{
									"id": 895,
									"pct": 5,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$100K-$199,999",
							"pct": 26,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 56,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 42,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$200K-$249,999",
							"pct": 7,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$250,000 or more",
							"pct": 4,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"INCOME3": {
					"numrespondents": 2469,
					"qid": 1948,
					"question": "Income",
					"answers": [
						{
							"answer": "Under $50K",
							"pct": 37,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 71,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 24,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "$50K-$100K",
							"pct": 26,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 67,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 26,
									"leader": false
								},
								{
									"id": 895,
									"pct": 5,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$100K or more",
							"pct": 37,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 57,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 40,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"PARTY": {
					"numrespondents": 2469,
					"qid": 248,
					"question": "Party ID",
					"answers": [
						{
							"answer": "Democrats",
							"pct": 47,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 92,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 5,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Republicans",
							"pct": 23,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 13,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 84,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Independents",
							"pct": 30,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 50,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 37,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 7,
									"leader": false
								},
								{
									"id": 895,
									"pct": 5,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						}
					]
				},
				"PARTYGENDER": {
					"numrespondents": 2469,
					"qid": 3784,
					"question": "Party by gender",
					"answers": [
						{
							"answer": "Democratic men",
							"pct": 19,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 90,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 5,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Democratic women",
							"pct": 28,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 93,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 5,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Republican men",
							"pct": 11,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 13,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 83,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Republican women",
							"pct": 11,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 12,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 85,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Independent men",
							"pct": 19,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 48,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 39,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 8,
									"leader": false
								},
								{
									"id": 895,
									"pct": 4,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Independent women",
							"pct": 11,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 54,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 35,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 6,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						}
					]
				},
				"PHIL3": {
					"numrespondents": 2469,
					"qid": 251,
					"question": "Ideology",
					"answers": [
						{
							"answer": "Liberal",
							"pct": 37,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 88,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 8,
									"leader": false
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "Moderate",
							"pct": 35,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 60,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 33,
									"leader": false
								},
								{
									"id": 0,
									"pct": 7,
									"leader": false
								}
							]
						},
						{
							"answer": "Conservative",
							"pct": 28,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 28,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 68,
									"leader": true
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						}
					]
				}
			}
		},
		"electiondate": "20161108",
		"evotes": 55
	},
	"CO": {
		"polls": {
			"candidates": {
				"0": {
					"fname": " ",
					"lname": "Other/No Answer",
					"party": ""
				},
				"895": {
					"fname": "Jill",
					"lname": "Stein",
					"party": "GR"
				},
				"1746": {
					"fname": "Hillary",
					"lname": "Clinton",
					"party": "D"
				},
				"8639": {
					"fname": "Donald",
					"lname": "Trump",
					"party": "R"
				},
				"31708": {
					"fname": "Gary",
					"lname": "Johnson",
					"party": "LB"
				}
			},
			"topics": {
				"SEX": {
					"numrespondents": 1335,
					"qid": 279,
					"question": "Gender",
					"answers": [
						{
							"answer": "Male",
							"pct": 49,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 41,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 49,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 7,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "Female",
							"pct": 51,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 55,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 39,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						}
					]
				},
				"AGE": {
					"numrespondents": 1335,
					"qid": 159,
					"question": "Age",
					"answers": [
						{
							"answer": "18-29",
							"pct": 19,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 50,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 36,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 11,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "30-44",
							"pct": 26,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 46,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 45,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "45-64",
							"pct": 38,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 49,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 45,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "65 and older",
							"pct": 17,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 49,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 48,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						}
					]
				},
				"RACE": {
					"numrespondents": 1335,
					"qid": 260,
					"question": "Race",
					"answers": [
						{
							"answer": "White",
							"pct": 78,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 45,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 47,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "Black",
							"pct": 4,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino",
							"pct": 12,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 67,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 30,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Asian",
							"pct": 3,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Other race",
							"pct": 4,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"RACE2B": {
					"numrespondents": 1335,
					"qid": 3423,
					"question": "Race",
					"answers": [
						{
							"answer": "White",
							"pct": 78,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 45,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 47,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-white",
							"pct": 22,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 62,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 31,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						}
					]
				},
				"SEXBYRACE": {
					"numrespondents": 1335,
					"qid": 1602,
					"question": "Race and gender",
					"answers": [
						{
							"answer": "White men",
							"pct": 38,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 38,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 50,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 8,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "White women",
							"pct": 40,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 50,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 44,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Black men",
							"pct": 2,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Black women",
							"pct": 2,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino men",
							"pct": 6,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino women",
							"pct": 5,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Others",
							"pct": 7,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"EDUC12R": {
					"numrespondents": 1335,
					"qid": 2500,
					"question": "Education",
					"answers": [
						{
							"answer": "High school or less",
							"pct": 19,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 40,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 51,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "Some college",
							"pct": 27,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 43,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 49,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "College graduate",
							"pct": 34,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 48,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 43,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 6,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "Postgraduate",
							"pct": 20,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 64,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 30,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCCOLL": {
					"numrespondents": 1335,
					"qid": 1951,
					"question": "Are you a college graduate?",
					"answers": [
						{
							"answer": "Yes",
							"pct": 54,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 54,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 38,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "No",
							"pct": 46,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 42,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 50,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCWHITE": {
					"numrespondents": 1335,
					"qid": 1974,
					"question": "Education and race",
					"answers": [
						{
							"answer": "White college graduates",
							"pct": 45,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 53,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 39,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "Whites no degree",
							"pct": 33,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 34,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 58,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 6,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites college grads",
							"pct": 10,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 61,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 34,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites no degree",
							"pct": 12,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 62,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 29,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCWHITEBYSEX": {
					"numrespondents": 1335,
					"qid": 3790,
					"question": "Education among whites by sex",
					"answers": [
						{
							"answer": "White college-grad women",
							"pct": 23,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 58,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 37,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "White non-college women",
							"pct": 18,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 40,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 53,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "White college-grad men",
							"pct": 22,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 47,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 41,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 8,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "White non-college men",
							"pct": 16,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 26,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 63,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 8,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites",
							"pct": 22,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 61,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 31,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						}
					]
				},
				"INCOME16GEN": {
					"numrespondents": 1335,
					"qid": 3728,
					"question": "Income",
					"answers": [
						{
							"answer": "Under $30,000",
							"pct": 13,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 44,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 38,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 8,
									"leader": false
								},
								{
									"id": 895,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": 7,
									"leader": false
								}
							]
						},
						{
							"answer": "$30K-$49,999",
							"pct": 22,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 46,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 43,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 6,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "$50K-$99,999",
							"pct": 32,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 52,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 44,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$100K-$199,999",
							"pct": 23,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 49,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 42,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 7,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "$200K-$249,999",
							"pct": 4,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$250,000 or more",
							"pct": 6,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"INCOME3": {
					"numrespondents": 1335,
					"qid": 1948,
					"question": "Income",
					"answers": [
						{
							"answer": "Under $50K",
							"pct": 36,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 46,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 41,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 7,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "$50K-$100K",
							"pct": 32,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 52,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 44,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$100K or more",
							"pct": 33,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 51,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 41,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 6,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						}
					]
				},
				"PARTY": {
					"numrespondents": 1335,
					"qid": 248,
					"question": "Party ID",
					"answers": [
						{
							"answer": "Democrats",
							"pct": 32,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 87,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 9,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "Republicans",
							"pct": 24,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 8,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 88,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Independents",
							"pct": 43,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 42,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 45,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 9,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						}
					]
				},
				"PARTYGENDER": {
					"numrespondents": 1335,
					"qid": 3784,
					"question": "Party by gender",
					"answers": [
						{
							"answer": "Democratic men",
							"pct": 12,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 82,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 12,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "Democratic women",
							"pct": 20,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 91,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 7,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Republican men",
							"pct": 12,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 11,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 84,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Republican women",
							"pct": 12,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 6,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 92,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Independent men",
							"pct": 25,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 36,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 50,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 11,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Independent women",
							"pct": 18,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 49,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 39,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 6,
									"leader": false
								},
								{
									"id": 895,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						}
					]
				},
				"PHIL3": {
					"numrespondents": 1335,
					"qid": 251,
					"question": "Ideology",
					"answers": [
						{
							"answer": "Liberal",
							"pct": 28,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 85,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 10,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Moderate",
							"pct": 37,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 53,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 36,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 7,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "Conservative",
							"pct": 35,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 16,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 80,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						}
					]
				}
			}
		},
		"electiondate": "20161108",
		"evotes": 9
	},
	"FL": {
		"polls": {
			"candidates": {
				"0": {
					"fname": " ",
					"lname": "Other/No Answer",
					"party": ""
				},
				"895": {
					"fname": "Jill",
					"lname": "Stein",
					"party": "GR"
				},
				"1746": {
					"fname": "Hillary",
					"lname": "Clinton",
					"party": "D"
				},
				"8639": {
					"fname": "Donald",
					"lname": "Trump",
					"party": "R"
				},
				"31708": {
					"fname": "Gary",
					"lname": "Johnson",
					"party": "LB"
				}
			},
			"topics": {
				"SEX": {
					"numrespondents": 3997,
					"qid": 279,
					"question": "Gender",
					"answers": [
						{
							"answer": "Male",
							"pct": 47,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 43,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 52,
									"leader": true
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						},
						{
							"answer": "Female",
							"pct": 53,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 50,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 46,
									"leader": false
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						}
					]
				},
				"AGE": {
					"numrespondents": 3997,
					"qid": 159,
					"question": "Age",
					"answers": [
						{
							"answer": "18-29",
							"pct": 17,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 54,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 36,
									"leader": false
								},
								{
									"id": 0,
									"pct": 10,
									"leader": false
								}
							]
						},
						{
							"answer": "30-44",
							"pct": 23,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 54,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 39,
									"leader": false
								},
								{
									"id": 0,
									"pct": 7,
									"leader": false
								}
							]
						},
						{
							"answer": "45-64",
							"pct": 38,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 43,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 56,
									"leader": true
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "65 and older",
							"pct": 21,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 40,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 57,
									"leader": true
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						}
					]
				},
				"RACE": {
					"numrespondents": 3997,
					"qid": 260,
					"question": "Race",
					"answers": [
						{
							"answer": "White",
							"pct": 62,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 32,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 64,
									"leader": true
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "Black",
							"pct": 14,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 84,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 8,
									"leader": false
								},
								{
									"id": 0,
									"pct": 8,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino",
							"pct": 18,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 62,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 35,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "Asian",
							"pct": 2,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Other race",
							"pct": 4,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 58,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 36,
									"leader": false
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						}
					]
				},
				"RACE2B": {
					"numrespondents": 3997,
					"qid": 3423,
					"question": "Race",
					"answers": [
						{
							"answer": "White",
							"pct": 62,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 32,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 64,
									"leader": true
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-white",
							"pct": 38,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 71,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 24,
									"leader": false
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						}
					]
				},
				"SEXBYRACE": {
					"numrespondents": 3997,
					"qid": 1602,
					"question": "Race and gender",
					"answers": [
						{
							"answer": "White men",
							"pct": 29,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 28,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 67,
									"leader": true
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "White women",
							"pct": 33,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 36,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 60,
									"leader": true
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Black men",
							"pct": 6,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 81,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 10,
									"leader": false
								},
								{
									"id": 895,
									"pct": 5,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "Black women",
							"pct": 8,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 87,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 6,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino men",
							"pct": 8,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 60,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 36,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino women",
							"pct": 10,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 63,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 34,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Others",
							"pct": 6,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 65,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 28,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						}
					]
				},
				"EDUC12R": {
					"numrespondents": 3997,
					"qid": 2500,
					"question": "Education",
					"answers": [
						{
							"answer": "High school or less",
							"pct": 18,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 51,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 46,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "Some college",
							"pct": 30,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 45,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 49,
									"leader": true
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						},
						{
							"answer": "College graduate",
							"pct": 36,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 42,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 54,
									"leader": true
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "Postgraduate",
							"pct": 16,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 56,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 39,
									"leader": false
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCCOLL": {
					"numrespondents": 3997,
					"qid": 1951,
					"question": "Are you a college graduate?",
					"answers": [
						{
							"answer": "Yes",
							"pct": 52,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 46,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 49,
									"leader": true
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						},
						{
							"answer": "No",
							"pct": 48,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 47,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 48,
									"leader": true
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCWHITE": {
					"numrespondents": 3997,
					"qid": 1974,
					"question": "Education and race",
					"answers": [
						{
							"answer": "White college graduates",
							"pct": 35,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 35,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 62,
									"leader": true
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "Whites no degree",
							"pct": 27,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 30,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 66,
									"leader": true
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites college grads",
							"pct": 18,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 69,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 24,
									"leader": false
								},
								{
									"id": 0,
									"pct": 7,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites no degree",
							"pct": 20,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 71,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 24,
									"leader": false
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCWHITEBYSEX": {
					"numrespondents": 3997,
					"qid": 3790,
					"question": "Education among whites by sex",
					"answers": [
						{
							"answer": "White college-grad women",
							"pct": 18,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 37,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 60,
									"leader": true
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "White non-college women",
							"pct": 15,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 33,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 62,
									"leader": true
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						},
						{
							"answer": "White college-grad men",
							"pct": 17,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 32,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 64,
									"leader": true
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "White non-college men",
							"pct": 12,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 25,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 70,
									"leader": true
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites",
							"pct": 38,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 70,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 24,
									"leader": false
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						}
					]
				},
				"INCOME16GEN": {
					"numrespondents": 3997,
					"qid": 3728,
					"question": "Income",
					"answers": [
						{
							"answer": "Under $30,000",
							"pct": 20,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 56,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 38,
									"leader": false
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						},
						{
							"answer": "$30K-$49,999",
							"pct": 19,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 51,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 46,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "$50K-$99,999",
							"pct": 32,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 45,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 52,
									"leader": true
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "$100K-$199,999",
							"pct": 21,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 42,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 54,
									"leader": true
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "$200K-$249,999",
							"pct": 3,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$250,000 or more",
							"pct": 5,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"INCOME3": {
					"numrespondents": 3997,
					"qid": 1948,
					"question": "Income",
					"answers": [
						{
							"answer": "Under $50K",
							"pct": 39,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 54,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 42,
									"leader": false
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "$50K-$100K",
							"pct": 32,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 45,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 52,
									"leader": true
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "$100K or more",
							"pct": 29,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 40,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 56,
									"leader": true
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						}
					]
				},
				"PARTY": {
					"numrespondents": 3997,
					"qid": 248,
					"question": "Party ID",
					"answers": [
						{
							"answer": "Democrats",
							"pct": 32,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 90,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 8,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 0,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Republicans",
							"pct": 33,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 8,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 89,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Independents",
							"pct": 34,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 43,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 47,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						}
					]
				},
				"PARTYGENDER": {
					"numrespondents": 3997,
					"qid": 3784,
					"question": "Party by gender",
					"answers": [
						{
							"answer": "Democratic men",
							"pct": 12,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 88,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 11,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Democratic women",
							"pct": 20,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 92,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 7,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 0,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Republican men",
							"pct": 15,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 9,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 88,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Republican women",
							"pct": 18,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 8,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 90,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Independent men",
							"pct": 19,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 42,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 49,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "Independent women",
							"pct": 15,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 45,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 45,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						}
					]
				},
				"PHIL3": {
					"numrespondents": 3997,
					"qid": 251,
					"question": "Ideology",
					"answers": [
						{
							"answer": "Liberal",
							"pct": 25,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 81,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 14,
									"leader": false
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						},
						{
							"answer": "Moderate",
							"pct": 38,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 51,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 43,
									"leader": false
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						},
						{
							"answer": "Conservative",
							"pct": 36,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 17,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 79,
									"leader": true
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						}
					]
				}
			}
		},
		"electiondate": "20161108",
		"evotes": 29
	},
	"GA": {
		"polls": {
			"candidates": {
				"0": {
					"fname": " ",
					"lname": "Other/No Answer",
					"party": ""
				},
				"1746": {
					"fname": "Hillary",
					"lname": "Clinton",
					"party": "D"
				},
				"8639": {
					"fname": "Donald",
					"lname": "Trump",
					"party": "R"
				},
				"31708": {
					"fname": "Gary",
					"lname": "Johnson",
					"party": "LB"
				}
			},
			"topics": {
				"SEX": {
					"numrespondents": 2767,
					"qid": 279,
					"question": "Gender",
					"answers": [
						{
							"answer": "Male",
							"pct": 45,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 37,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 60,
									"leader": true
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "Female",
							"pct": 55,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 54,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 43,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						}
					]
				},
				"AGE": {
					"numrespondents": 2767,
					"qid": 159,
					"question": "Age",
					"answers": [
						{
							"answer": "18-29",
							"pct": 18,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 63,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 33,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "30-44",
							"pct": 28,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 51,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 44,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "45-64",
							"pct": 38,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 41,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 57,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "65 and older",
							"pct": 16,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 31,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 67,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						}
					]
				},
				"RACE": {
					"numrespondents": 2767,
					"qid": 260,
					"question": "Race",
					"answers": [
						{
							"answer": "White",
							"pct": 60,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 21,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 75,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Black",
							"pct": 30,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 89,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 9,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino",
							"pct": 4,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 67,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 27,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 6,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Asian",
							"pct": 3,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Other race",
							"pct": 2,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"RACE2B": {
					"numrespondents": 2767,
					"qid": 3423,
					"question": "Race",
					"answers": [
						{
							"answer": "White",
							"pct": 60,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 21,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 75,
									"leader": true
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-white",
							"pct": 40,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 83,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 14,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						}
					]
				},
				"SEXBYRACE": {
					"numrespondents": 2767,
					"qid": 1602,
					"question": "Race and gender",
					"answers": [
						{
							"answer": "White men",
							"pct": 30,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 16,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 80,
									"leader": true
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "White women",
							"pct": 31,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 26,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 70,
									"leader": true
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "Black men",
							"pct": 12,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 83,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 15,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "Black women",
							"pct": 19,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 94,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 5,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino men",
							"pct": 2,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino women",
							"pct": 2,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Others",
							"pct": 5,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 63,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 36,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						}
					]
				},
				"EDUC12R": {
					"numrespondents": 2767,
					"qid": 2500,
					"question": "Education",
					"answers": [
						{
							"answer": "High school or less",
							"pct": 19,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 39,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 57,
									"leader": true
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "Some college",
							"pct": 31,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 46,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 51,
									"leader": true
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "College graduate",
							"pct": 34,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 49,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 49,
									"leader": true
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "Postgraduate",
							"pct": 17,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 50,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 47,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCCOLL": {
					"numrespondents": 2767,
					"qid": 1951,
					"question": "Are you a college graduate?",
					"answers": [
						{
							"answer": "Yes",
							"pct": 50,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 49,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 48,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "No",
							"pct": 50,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 43,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 54,
									"leader": true
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCWHITE": {
					"numrespondents": 2767,
					"qid": 1974,
					"question": "Education and race",
					"answers": [
						{
							"answer": "White college graduates",
							"pct": 30,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 28,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 69,
									"leader": true
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "Whites no degree",
							"pct": 30,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 15,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 81,
									"leader": true
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites college grads",
							"pct": 20,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 82,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 16,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites no degree",
							"pct": 20,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 85,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 13,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCWHITEBYSEX": {
					"numrespondents": 2767,
					"qid": 3790,
					"question": "Education among whites by sex",
					"answers": [
						{
							"answer": "White college-grad women",
							"pct": 16,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 34,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 63,
									"leader": true
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "White non-college women",
							"pct": 15,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 18,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 78,
									"leader": true
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "White college-grad men",
							"pct": 15,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 21,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 76,
									"leader": true
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "White non-college men",
							"pct": 15,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 11,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 85,
									"leader": true
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites",
							"pct": 40,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 83,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 14,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						}
					]
				},
				"INCOME16GEN": {
					"numrespondents": 2767,
					"qid": 3728,
					"question": "Income",
					"answers": [
						{
							"answer": "Under $30,000",
							"pct": 16,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 54,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 41,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$30K-$49,999",
							"pct": 20,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 40,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 53,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 7,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$50K-$99,999",
							"pct": 33,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 49,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 49,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$100K-$199,999",
							"pct": 21,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 41,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 57,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$200K-$249,999",
							"pct": 4,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$250,000 or more",
							"pct": 6,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"INCOME3": {
					"numrespondents": 2767,
					"qid": 1948,
					"question": "Income",
					"answers": [
						{
							"answer": "Under $50K",
							"pct": 36,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 47,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 48,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 6,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$50K-$100K",
							"pct": 33,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 49,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 49,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$100K or more",
							"pct": 32,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 42,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 56,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"PARTY": {
					"numrespondents": 2767,
					"qid": 248,
					"question": "Party ID",
					"answers": [
						{
							"answer": "Democrats",
							"pct": 34,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 94,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 5,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Republicans",
							"pct": 36,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 4,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 94,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Independents",
							"pct": 30,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 41,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 52,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 7,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"PARTYGENDER": {
					"numrespondents": 2767,
					"qid": 3784,
					"question": "Party by gender",
					"answers": [
						{
							"answer": "Democratic men",
							"pct": 11,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 94,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 5,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Democratic women",
							"pct": 23,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 94,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 5,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Republican men",
							"pct": 18,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 4,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 93,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Republican women",
							"pct": 18,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 4,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 95,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Independent men",
							"pct": 16,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 35,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 60,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Independent women",
							"pct": 14,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 49,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 42,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 9,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"PHIL3": {
					"numrespondents": 2767,
					"qid": 251,
					"question": "Ideology",
					"answers": [
						{
							"answer": "Liberal",
							"pct": 22,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 85,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 11,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Moderate",
							"pct": 36,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 57,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 38,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Conservative",
							"pct": 42,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 15,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 85,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				}
			}
		},
		"electiondate": "20161108",
		"evotes": 16
	},
	"IL": {
		"polls": {
			"candidates": {
				"0": {
					"fname": " ",
					"lname": "Other/No Answer",
					"party": ""
				},
				"895": {
					"fname": "Jill",
					"lname": "Stein",
					"party": "GR"
				},
				"1746": {
					"fname": "Hillary",
					"lname": "Clinton",
					"party": "D"
				},
				"8639": {
					"fname": "Donald",
					"lname": "Trump",
					"party": "R"
				},
				"31708": {
					"fname": "Gary",
					"lname": "Johnson",
					"party": "LB"
				}
			},
			"topics": {
				"SEX": {
					"numrespondents": 916,
					"qid": 279,
					"question": "Gender",
					"answers": [
						{
							"answer": "Male",
							"pct": 50,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 50,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 43,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Female",
							"pct": 50,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 60,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 36,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"AGE": {
					"numrespondents": 916,
					"qid": 159,
					"question": "Age",
					"answers": [
						{
							"answer": "18-29",
							"pct": 20,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 67,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 28,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "30-44",
							"pct": 27,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 59,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 33,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 6,
									"leader": false
								},
								{
									"id": 895,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "45-64",
							"pct": 41,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 53,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 43,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "65 and older",
							"pct": 12,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 35,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 61,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"RACE": {
					"numrespondents": 916,
					"qid": 260,
					"question": "Race",
					"answers": [
						{
							"answer": "White",
							"pct": 68,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 41,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 52,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Black",
							"pct": 16,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 87,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 12,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino",
							"pct": 11,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Asian",
							"pct": 3,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Other race",
							"pct": 2,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"RACE2B": {
					"numrespondents": 916,
					"qid": 3423,
					"question": "Race",
					"answers": [
						{
							"answer": "White",
							"pct": 68,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 41,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 52,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-white",
							"pct": 32,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 84,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 13,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						}
					]
				},
				"SEXBYRACE": {
					"numrespondents": 916,
					"qid": 1602,
					"question": "Race and gender",
					"answers": [
						{
							"answer": "White men",
							"pct": 35,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 37,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 54,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 6,
									"leader": false
								},
								{
									"id": 895,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "White women",
							"pct": 33,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 46,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 50,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Black men",
							"pct": 8,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Black women",
							"pct": 8,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino men",
							"pct": 4,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino women",
							"pct": 7,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Others",
							"pct": 5,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"EDUC12R": {
					"numrespondents": 916,
					"qid": 2500,
					"question": "Education",
					"answers": [
						{
							"answer": "High school or less",
							"pct": 18,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 59,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 39,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Some college",
							"pct": 33,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 50,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 43,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 6,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "College graduate",
							"pct": 31,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 57,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 38,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Postgraduate",
							"pct": 18,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 61,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 33,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCCOLL": {
					"numrespondents": 916,
					"qid": 1951,
					"question": "Are you a college graduate?",
					"answers": [
						{
							"answer": "Yes",
							"pct": 49,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 58,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 36,
									"leader": false
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						},
						{
							"answer": "No",
							"pct": 51,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 53,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 42,
									"leader": false
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCWHITE": {
					"numrespondents": 916,
					"qid": 1974,
					"question": "Education and race",
					"answers": [
						{
							"answer": "White college graduates",
							"pct": 35,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 50,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 43,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Whites no degree",
							"pct": 33,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 33,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 60,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 6,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites college grads",
							"pct": 13,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 80,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 17,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites no degree",
							"pct": 19,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 87,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 11,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCWHITEBYSEX": {
					"numrespondents": 916,
					"qid": 3790,
					"question": "Education among whites by sex",
					"answers": [
						{
							"answer": "White college-grad women",
							"pct": 18,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 61,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 36,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "White non-college women",
							"pct": 16,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 32,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 63,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "White college-grad men",
							"pct": 18,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 40,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 51,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 5,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "White non-college men",
							"pct": 17,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 34,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 57,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 7,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites",
							"pct": 32,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 84,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 13,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						}
					]
				},
				"INCOME16GEN": {
					"numrespondents": 916,
					"qid": 3728,
					"question": "Income",
					"answers": [
						{
							"answer": "Under $30,000",
							"pct": 15,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$30K-$49,999",
							"pct": 19,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$50K-$99,999",
							"pct": 36,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 61,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 36,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "$100K-$199,999",
							"pct": 22,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$200K-$249,999",
							"pct": 3,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$250,000 or more",
							"pct": 5,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"INCOME3": {
					"numrespondents": 916,
					"qid": 1948,
					"question": "Income",
					"answers": [
						{
							"answer": "Under $50K",
							"pct": 35,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 60,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 37,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "$50K-$100K",
							"pct": 36,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 61,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 36,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "$100K or more",
							"pct": 30,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 48,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 45,
									"leader": false
								},
								{
									"id": 0,
									"pct": 7,
									"leader": false
								}
							]
						}
					]
				},
				"PARTY": {
					"numrespondents": 916,
					"qid": 248,
					"question": "Party ID",
					"answers": [
						{
							"answer": "Democrats",
							"pct": 45,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 93,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 5,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Republicans",
							"pct": 30,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 8,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 88,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Independents",
							"pct": 25,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 44,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 43,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 9,
									"leader": false
								},
								{
									"id": 895,
									"pct": 4,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"PARTYGENDER": {
					"numrespondents": 916,
					"qid": 3784,
					"question": "Party by gender",
					"answers": [
						{
							"answer": "Democratic men",
							"pct": 19,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 94,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 3,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Democratic women",
							"pct": 26,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 93,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 7,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Republican men",
							"pct": 15,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 8,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 87,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Republican women",
							"pct": 15,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 9,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 88,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Independent men",
							"pct": 15,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 37,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 50,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 8,
									"leader": false
								},
								{
									"id": 895,
									"pct": 5,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Independent women",
							"pct": 10,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"PHIL3": {
					"numrespondents": 916,
					"qid": 251,
					"question": "Ideology",
					"answers": [
						{
							"answer": "Liberal",
							"pct": 27,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 87,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 8,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Moderate",
							"pct": 45,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 63,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 31,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Conservative",
							"pct": 28,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 14,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 83,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				}
			}
		},
		"electiondate": "20161108",
		"evotes": 20
	},
	"IN": {
		"polls": {
			"candidates": {
				"0": {
					"fname": " ",
					"lname": "Other/No Answer",
					"party": ""
				},
				"1746": {
					"fname": "Hillary",
					"lname": "Clinton",
					"party": "D"
				},
				"8639": {
					"fname": "Donald",
					"lname": "Trump",
					"party": "R"
				},
				"31708": {
					"fname": "Gary",
					"lname": "Johnson",
					"party": "LB"
				}
			},
			"topics": {
				"SEX": {
					"numrespondents": 1817,
					"qid": 279,
					"question": "Gender",
					"answers": [
						{
							"answer": "Male",
							"pct": 49,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 33,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 62,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								}
							]
						},
						{
							"answer": "Female",
							"pct": 51,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 42,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 53,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								}
							]
						}
					]
				},
				"AGE": {
					"numrespondents": 1817,
					"qid": 159,
					"question": "Age",
					"answers": [
						{
							"answer": "18-29",
							"pct": 19,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 46,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 46,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 8,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "30-44",
							"pct": 28,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 37,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 57,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 6,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "45-64",
							"pct": 38,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 34,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 63,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "65 and older",
							"pct": 14,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 39,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 58,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"RACE": {
					"numrespondents": 1817,
					"qid": 260,
					"question": "Race",
					"answers": [
						{
							"answer": "White",
							"pct": 83,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 32,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 64,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Black",
							"pct": 9,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 83,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 12,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino",
							"pct": 5,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Asian",
							"pct": 1,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Other race",
							"pct": 2,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"RACE2B": {
					"numrespondents": 1817,
					"qid": 3423,
					"question": "Race",
					"answers": [
						{
							"answer": "White",
							"pct": 83,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 32,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 64,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-white",
							"pct": 17,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 69,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 27,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								}
							]
						}
					]
				},
				"SEXBYRACE": {
					"numrespondents": 1817,
					"qid": 1602,
					"question": "Race and gender",
					"answers": [
						{
							"answer": "White men",
							"pct": 41,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 27,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 68,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "White women",
							"pct": 42,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 35,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 60,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Black men",
							"pct": 4,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Black women",
							"pct": 5,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 88,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 8,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino men",
							"pct": 3,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino women",
							"pct": 3,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Others",
							"pct": 3,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"EDUC12R": {
					"numrespondents": 1817,
					"qid": 2500,
					"question": "Education",
					"answers": [
						{
							"answer": "High school or less",
							"pct": 20,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 30,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 66,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Some college",
							"pct": 33,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 34,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 61,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "College graduate",
							"pct": 32,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 38,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 56,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 6,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Postgraduate",
							"pct": 15,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 54,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 41,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCCOLL": {
					"numrespondents": 1817,
					"qid": 1951,
					"question": "Are you a college graduate?",
					"answers": [
						{
							"answer": "Yes",
							"pct": 47,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 43,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 51,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 6,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "No",
							"pct": 53,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 33,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 63,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCWHITE": {
					"numrespondents": 1817,
					"qid": 1974,
					"question": "Education and race",
					"answers": [
						{
							"answer": "White college graduates",
							"pct": 40,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 37,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 57,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 6,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Whites no degree",
							"pct": 44,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 26,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 69,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites college grads",
							"pct": 7,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 75,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 21,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites no degree",
							"pct": 10,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 62,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 34,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCWHITEBYSEX": {
					"numrespondents": 1817,
					"qid": 3790,
					"question": "Education among whites by sex",
					"answers": [
						{
							"answer": "White college-grad women",
							"pct": 21,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 39,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 55,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 6,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "White non-college women",
							"pct": 22,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 30,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 65,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "White college-grad men",
							"pct": 19,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 34,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 60,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 6,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "White non-college men",
							"pct": 21,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 22,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 73,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites",
							"pct": 17,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 68,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 28,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"INCOME16GEN": {
					"numrespondents": 1817,
					"qid": 3728,
					"question": "Income",
					"answers": [
						{
							"answer": "Under $30,000",
							"pct": 15,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 41,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 49,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 10,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$30K-$49,999",
							"pct": 21,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 38,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 53,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 8,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "$50K-$99,999",
							"pct": 35,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 33,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 63,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$100K-$199,999",
							"pct": 22,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 31,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 63,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "$200K-$249,999",
							"pct": 3,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$250,000 or more",
							"pct": 3,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"INCOME3": {
					"numrespondents": 1817,
					"qid": 1948,
					"question": "Income",
					"answers": [
						{
							"answer": "Under $50K",
							"pct": 37,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 40,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 52,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 9,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$50K-$100K",
							"pct": 35,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 33,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 63,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$100K or more",
							"pct": 28,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 34,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 62,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"PARTY": {
					"numrespondents": 1817,
					"qid": 248,
					"question": "Party ID",
					"answers": [
						{
							"answer": "Democrats",
							"pct": 30,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 84,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 13,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Republicans",
							"pct": 42,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 6,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 92,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Independents",
							"pct": 28,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 36,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 53,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 11,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"PHIL3": {
					"numrespondents": 1817,
					"qid": 251,
					"question": "Ideology",
					"answers": [
						{
							"answer": "Liberal",
							"pct": 22,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 79,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 15,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Moderate",
							"pct": 40,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 41,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 53,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 6,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Conservative",
							"pct": 38,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 10,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 86,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"PARTYGENDER": {
					"numrespondents": 1817,
					"qid": 3784,
					"question": "Party by gender",
					"answers": [
						{
							"answer": "Democratic men",
							"pct": 12,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 85,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 15,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Democratic women",
							"pct": 18,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 84,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 13,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Republican men",
							"pct": 22,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 6,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 93,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Republican women",
							"pct": 21,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 6,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 91,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Independent men",
							"pct": 16,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 34,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 53,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 13,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Independent women",
							"pct": 12,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 39,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 52,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 9,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				}
			}
		},
		"electiondate": "20161108",
		"evotes": 11
	},
	"KY": {
		"polls": {
			"candidates": {
				"0": {
					"fname": " ",
					"lname": "Other/No Answer",
					"party": ""
				},
				"895": {
					"fname": "Jill",
					"lname": "Stein",
					"party": "GR"
				},
				"1746": {
					"fname": "Hillary",
					"lname": "Clinton",
					"party": "D"
				},
				"8639": {
					"fname": "Donald",
					"lname": "Trump",
					"party": "R"
				},
				"31708": {
					"fname": "Gary",
					"lname": "Johnson",
					"party": "LB"
				}
			},
			"topics": {
				"SEX": {
					"numrespondents": 1099,
					"qid": 279,
					"question": "Gender",
					"answers": [
						{
							"answer": "Male",
							"pct": 49,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 26,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 71,
									"leader": true
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "Female",
							"pct": 51,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 40,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 54,
									"leader": true
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						}
					]
				},
				"AGE": {
					"numrespondents": 1099,
					"qid": 159,
					"question": "Age",
					"answers": [
						{
							"answer": "18-29",
							"pct": 19,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 34,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 59,
									"leader": true
								},
								{
									"id": 0,
									"pct": 7,
									"leader": false
								}
							]
						},
						{
							"answer": "30-44",
							"pct": 23,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 29,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 66,
									"leader": true
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						},
						{
							"answer": "45-64",
							"pct": 42,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 33,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 63,
									"leader": true
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "65 and older",
							"pct": 17,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 37,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 61,
									"leader": true
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						}
					]
				},
				"RACE": {
					"numrespondents": 1099,
					"qid": 260,
					"question": "Race",
					"answers": [
						{
							"answer": "White",
							"pct": 88,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 27,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 68,
									"leader": true
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						},
						{
							"answer": "Black",
							"pct": 8,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino",
							"pct": 3,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Asian",
							"pct": 1,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Other race",
							"pct": 1,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"RACE2B": {
					"numrespondents": 1099,
					"qid": 3423,
					"question": "Race",
					"answers": [
						{
							"answer": "White",
							"pct": 88,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 27,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 68,
									"leader": true
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-white",
							"pct": 12,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 73,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 20,
									"leader": false
								},
								{
									"id": 0,
									"pct": 7,
									"leader": false
								}
							]
						}
					]
				},
				"SEXBYRACE": {
					"numrespondents": 1099,
					"qid": 1602,
					"question": "Race and gender",
					"answers": [
						{
							"answer": "White men",
							"pct": 43,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 20,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 77,
									"leader": true
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "White women",
							"pct": 44,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 35,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 60,
									"leader": true
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						},
						{
							"answer": "Black men",
							"pct": 4,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Black women",
							"pct": 4,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino men",
							"pct": 1,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino women",
							"pct": 1,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Others",
							"pct": 2,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"EDUC12R": {
					"numrespondents": 1099,
					"qid": 2500,
					"question": "Education",
					"answers": [
						{
							"answer": "High school or less",
							"pct": 25,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 28,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 66,
									"leader": true
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						},
						{
							"answer": "Some college",
							"pct": 36,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 33,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 64,
									"leader": true
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "College graduate",
							"pct": 24,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 28,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 67,
									"leader": true
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						},
						{
							"answer": "Postgraduate",
							"pct": 15,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 53,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 42,
									"leader": false
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCCOLL": {
					"numrespondents": 1099,
					"qid": 1951,
					"question": "Are you a college graduate?",
					"answers": [
						{
							"answer": "Yes",
							"pct": 40,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 38,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 58,
									"leader": true
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "No",
							"pct": 60,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 31,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 65,
									"leader": true
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCWHITE": {
					"numrespondents": 1099,
					"qid": 1974,
					"question": "Education and race",
					"answers": [
						{
							"answer": "White college graduates",
							"pct": 36,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 34,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 61,
									"leader": true
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						},
						{
							"answer": "Whites no degree",
							"pct": 52,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 23,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 73,
									"leader": true
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites college grads",
							"pct": 4,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites no degree",
							"pct": 9,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCWHITEBYSEX": {
					"numrespondents": 1099,
					"qid": 3790,
					"question": "Education among whites by sex",
					"answers": [
						{
							"answer": "White college-grad women",
							"pct": 19,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 42,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 52,
									"leader": true
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						},
						{
							"answer": "White non-college women",
							"pct": 26,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 28,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 66,
									"leader": true
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						},
						{
							"answer": "White college-grad men",
							"pct": 17,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 26,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 71,
									"leader": true
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "White non-college men",
							"pct": 26,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 18,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 80,
									"leader": true
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites",
							"pct": 13,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 74,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 18,
									"leader": false
								},
								{
									"id": 0,
									"pct": 8,
									"leader": false
								}
							]
						}
					]
				},
				"INCOME16GEN": {
					"numrespondents": 1099,
					"qid": 3728,
					"question": "Income",
					"answers": [
						{
							"answer": "Under $30,000",
							"pct": 17,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 36,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 55,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "$30K-$49,999",
							"pct": 23,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 33,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 60,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "$50K-$99,999",
							"pct": 33,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 32,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 65,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$100K-$199,999",
							"pct": 21,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 27,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 71,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "$200K-$249,999",
							"pct": 3,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$250,000 or more",
							"pct": 2,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"INCOME3": {
					"numrespondents": 1099,
					"qid": 1948,
					"question": "Income",
					"answers": [
						{
							"answer": "Under $50K",
							"pct": 41,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 34,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 58,
									"leader": true
								},
								{
									"id": 0,
									"pct": 8,
									"leader": false
								}
							]
						},
						{
							"answer": "$50K-$100K",
							"pct": 33,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 32,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 65,
									"leader": true
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "$100K or more",
							"pct": 26,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 30,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 68,
									"leader": true
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						}
					]
				},
				"PARTY": {
					"numrespondents": 1099,
					"qid": 248,
					"question": "Party ID",
					"answers": [
						{
							"answer": "Democrats",
							"pct": 38,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 75,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 22,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Republicans",
							"pct": 45,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 3,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 93,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "Independents",
							"pct": 18,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 23,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 67,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						}
					]
				},
				"PARTYGENDER": {
					"numrespondents": 1099,
					"qid": 3784,
					"question": "Party by gender",
					"answers": [
						{
							"answer": "Democratic men",
							"pct": 14,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 75,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 23,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "Democratic women",
							"pct": 24,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 75,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 21,
									"leader": false
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "Republican men",
							"pct": 25,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 2,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 96,
									"leader": true
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "Republican women",
							"pct": 20,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 4,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 90,
									"leader": true
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						},
						{
							"answer": "Independent men",
							"pct": 9,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Independent women",
							"pct": 9,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"PHIL3": {
					"numrespondents": 1099,
					"qid": 251,
					"question": "Ideology",
					"answers": [
						{
							"answer": "Liberal",
							"pct": 18,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 79,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 17,
									"leader": false
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "Moderate",
							"pct": 38,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 38,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 55,
									"leader": true
								},
								{
									"id": 0,
									"pct": 7,
									"leader": false
								}
							]
						},
						{
							"answer": "Conservative",
							"pct": 43,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 11,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 86,
									"leader": true
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						}
					]
				}
			}
		},
		"electiondate": "20161108",
		"evotes": 8
	},
	"IA": {
		"polls": {
			"candidates": {
				"0": {
					"fname": " ",
					"lname": "Other/No Answer",
					"party": ""
				},
				"895": {
					"fname": "Jill",
					"lname": "Stein",
					"party": "GR"
				},
				"1746": {
					"fname": "Hillary",
					"lname": "Clinton",
					"party": "D"
				},
				"8639": {
					"fname": "Donald",
					"lname": "Trump",
					"party": "R"
				},
				"31708": {
					"fname": "Gary",
					"lname": "Johnson",
					"party": "LB"
				}
			},
			"topics": {
				"SEX": {
					"numrespondents": 2972,
					"qid": 279,
					"question": "Gender",
					"answers": [
						{
							"answer": "Male",
							"pct": 47,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 33,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 61,
									"leader": true
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						},
						{
							"answer": "Female",
							"pct": 53,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 51,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 44,
									"leader": false
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						}
					]
				},
				"AGE": {
					"numrespondents": 2972,
					"qid": 159,
					"question": "Age",
					"answers": [
						{
							"answer": "18-29",
							"pct": 18,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 42,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 48,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 4,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "30-44",
							"pct": 23,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 38,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 52,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 6,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "45-64",
							"pct": 37,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 43,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 53,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "65 and older",
							"pct": 22,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 47,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 51,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						}
					]
				},
				"RACE": {
					"numrespondents": 2972,
					"qid": 260,
					"question": "Race",
					"answers": [
						{
							"answer": "White",
							"pct": 90,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 40,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 54,
									"leader": true
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "Black",
							"pct": 2,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino",
							"pct": 5,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 63,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 26,
									"leader": false
								},
								{
									"id": 895,
									"pct": 6,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Asian",
							"pct": 1,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Other race",
							"pct": 2,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"RACE2B": {
					"numrespondents": 2972,
					"qid": 3423,
					"question": "Race",
					"answers": [
						{
							"answer": "White",
							"pct": 90,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 40,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 54,
									"leader": true
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-white",
							"pct": 10,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 63,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 25,
									"leader": false
								},
								{
									"id": 895,
									"pct": 6,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						}
					]
				},
				"SEXBYRACE": {
					"numrespondents": 2972,
					"qid": 1602,
					"question": "Race and gender",
					"answers": [
						{
							"answer": "White men",
							"pct": 43,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 31,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 64,
									"leader": true
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						},
						{
							"answer": "White women",
							"pct": 48,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 49,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 46,
									"leader": false
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						},
						{
							"answer": "Black men",
							"pct": 1,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Black women",
							"pct": 1,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino men",
							"pct": 3,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino women",
							"pct": 3,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Others",
							"pct": 2,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"EDUC12R": {
					"numrespondents": 2972,
					"qid": 2500,
					"question": "Education",
					"answers": [
						{
							"answer": "High school or less",
							"pct": 24,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 44,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 51,
									"leader": true
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						},
						{
							"answer": "Some college",
							"pct": 33,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 38,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 56,
									"leader": true
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						},
						{
							"answer": "College graduate",
							"pct": 30,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 40,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 53,
									"leader": true
								},
								{
									"id": 0,
									"pct": 7,
									"leader": false
								}
							]
						},
						{
							"answer": "Postgraduate",
							"pct": 14,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 57,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 36,
									"leader": false
								},
								{
									"id": 0,
									"pct": 7,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCCOLL": {
					"numrespondents": 2972,
					"qid": 1951,
					"question": "Are you a college graduate?",
					"answers": [
						{
							"answer": "Yes",
							"pct": 43,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 46,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 48,
									"leader": true
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						},
						{
							"answer": "No",
							"pct": 57,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 40,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 54,
									"leader": true
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCWHITE": {
					"numrespondents": 2972,
					"qid": 1974,
					"question": "Education and race",
					"answers": [
						{
							"answer": "White college graduates",
							"pct": 40,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 44,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 49,
									"leader": true
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "Whites no degree",
							"pct": 50,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 38,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 58,
									"leader": true
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites college grads",
							"pct": 3,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites no degree",
							"pct": 6,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 62,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 23,
									"leader": false
								},
								{
									"id": 895,
									"pct": 9,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 6,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCWHITEBYSEX": {
					"numrespondents": 2972,
					"qid": 3790,
					"question": "Education among whites by sex",
					"answers": [
						{
							"answer": "White college-grad women",
							"pct": 22,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 52,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 41,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "White non-college women",
							"pct": 26,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 47,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 49,
									"leader": true
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "White college-grad men",
							"pct": 18,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 33,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 60,
									"leader": true
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "White non-college men",
							"pct": 24,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 29,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 67,
									"leader": true
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites",
							"pct": 10,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 63,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 25,
									"leader": false
								},
								{
									"id": 895,
									"pct": 6,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						}
					]
				},
				"INCOME16GEN": {
					"numrespondents": 2972,
					"qid": 3728,
					"question": "Income",
					"answers": [
						{
							"answer": "Under $30,000",
							"pct": 15,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 48,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 39,
									"leader": false
								},
								{
									"id": 895,
									"pct": 9,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "$30K-$49,999",
							"pct": 22,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 56,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 37,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "$50K-$99,999",
							"pct": 36,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 39,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 55,
									"leader": true
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "$100K-$199,999",
							"pct": 21,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 43,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 49,
									"leader": true
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "$200K-$249,999",
							"pct": 3,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$250,000 or more",
							"pct": 3,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"INCOME3": {
					"numrespondents": 2972,
					"qid": 1948,
					"question": "Income",
					"answers": [
						{
							"answer": "Under $50K",
							"pct": 36,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 52,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 38,
									"leader": false
								},
								{
									"id": 0,
									"pct": 10,
									"leader": false
								}
							]
						},
						{
							"answer": "$50K-$100K",
							"pct": 36,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 39,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 55,
									"leader": true
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						},
						{
							"answer": "$100K or more",
							"pct": 27,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 43,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 51,
									"leader": true
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						}
					]
				},
				"PARTY": {
					"numrespondents": 2972,
					"qid": 248,
					"question": "Party ID",
					"answers": [
						{
							"answer": "Democrats",
							"pct": 31,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 88,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 10,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Republicans",
							"pct": 34,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 6,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 90,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Independents",
							"pct": 35,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 38,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 51,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						}
					]
				},
				"PARTYGENDER": {
					"numrespondents": 2972,
					"qid": 3784,
					"question": "Party by gender",
					"answers": [
						{
							"answer": "Democratic men",
							"pct": 12,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 85,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 13,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Democratic women",
							"pct": 19,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 90,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 7,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Republican men",
							"pct": 18,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 5,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 92,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Republican women",
							"pct": 16,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 7,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 88,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "Independent men",
							"pct": 17,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 26,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 61,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 5,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "Independent women",
							"pct": 18,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 50,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 42,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						}
					]
				},
				"PHIL3": {
					"numrespondents": 2972,
					"qid": 251,
					"question": "Ideology",
					"answers": [
						{
							"answer": "Liberal",
							"pct": 23,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 81,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 12,
									"leader": false
								},
								{
									"id": 0,
									"pct": 7,
									"leader": false
								}
							]
						},
						{
							"answer": "Moderate",
							"pct": 37,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 51,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 42,
									"leader": false
								},
								{
									"id": 0,
									"pct": 7,
									"leader": false
								}
							]
						},
						{
							"answer": "Conservative",
							"pct": 40,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 11,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 84,
									"leader": true
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						}
					]
				}
			}
		},
		"electiondate": "20161108",
		"lts": 1478815540000,
		"evotes": 6
	},
	"ME": {
		"polls": {
			"candidates": {
				"0": {
					"fname": " ",
					"lname": "Other/No Answer",
					"party": ""
				},
				"895": {
					"fname": "Jill",
					"lname": "Stein",
					"party": "GR"
				},
				"1746": {
					"fname": "Hillary",
					"lname": "Clinton",
					"party": "D"
				},
				"8639": {
					"fname": "Donald",
					"lname": "Trump",
					"party": "R"
				},
				"31708": {
					"fname": "Gary",
					"lname": "Johnson",
					"party": "LB"
				}
			},
			"topics": {
				"SEX": {
					"numrespondents": 2128,
					"qid": 279,
					"question": "Gender",
					"answers": [
						{
							"answer": "Male",
							"pct": 48,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 41,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 52,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 6,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Female",
							"pct": 52,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 55,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 39,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"AGE": {
					"numrespondents": 2128,
					"qid": 159,
					"question": "Age",
					"answers": [
						{
							"answer": "18-29",
							"pct": 19,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 48,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 43,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 6,
									"leader": false
								},
								{
									"id": 895,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "30-44",
							"pct": 24,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 42,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 50,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 7,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "45-64",
							"pct": 38,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 48,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 47,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "65 and older",
							"pct": 19,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 56,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 39,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"RACE": {
					"numrespondents": 2128,
					"qid": 260,
					"question": "Race",
					"answers": [
						{
							"answer": "White",
							"pct": 93,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 47,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 46,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Black",
							"pct": 1,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino",
							"pct": 2,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Asian",
							"pct": 1,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Other race",
							"pct": 2,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"RACE2B": {
					"numrespondents": 2128,
					"qid": 3423,
					"question": "Race",
					"answers": [
						{
							"answer": "White",
							"pct": 93,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 47,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 46,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-white",
							"pct": 7,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 56,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 33,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 10,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"SEXBYRACE": {
					"numrespondents": 2128,
					"qid": 1602,
					"question": "Race and gender",
					"answers": [
						{
							"answer": "White men",
							"pct": 45,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 40,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 53,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "White women",
							"pct": 49,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 54,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 39,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Black men",
							"pct": 1,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Black women",
							"pct": 1,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino men",
							"pct": 1,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino women",
							"pct": 1,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Others",
							"pct": 3,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"EDUC12R": {
					"numrespondents": 2128,
					"qid": 2500,
					"question": "Education",
					"answers": [
						{
							"answer": "High school or less",
							"pct": 17,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 31,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 63,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Some college",
							"pct": 33,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 41,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 51,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "College graduate",
							"pct": 30,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 49,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 43,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 6,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Postgraduate",
							"pct": 20,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 73,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 22,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCCOLL": {
					"numrespondents": 2128,
					"qid": 1951,
					"question": "Are you a college graduate?",
					"answers": [
						{
							"answer": "Yes",
							"pct": 50,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 58,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 35,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "No",
							"pct": 50,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 38,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 55,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCWHITE": {
					"numrespondents": 2128,
					"qid": 1974,
					"question": "Education and race",
					"answers": [
						{
							"answer": "White college graduates",
							"pct": 47,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 59,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 35,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Whites no degree",
							"pct": 47,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 36,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 57,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites college grads",
							"pct": 3,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites no degree",
							"pct": 3,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCWHITEBYSEX": {
					"numrespondents": 2128,
					"qid": 3790,
					"question": "Education among whites by sex",
					"answers": [
						{
							"answer": "White college-grad women",
							"pct": 27,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 65,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 29,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "White non-college women",
							"pct": 22,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 40,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 52,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "White college-grad men",
							"pct": 20,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 51,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 42,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "White non-college men",
							"pct": 24,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 33,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 61,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites",
							"pct": 6,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 54,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 34,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 11,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"INCOME16GEN": {
					"numrespondents": 2128,
					"qid": 3728,
					"question": "Income",
					"answers": [
						{
							"answer": "Under $30,000",
							"pct": 20,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 49,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 42,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 5,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$30K-$49,999",
							"pct": 19,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 38,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 52,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 8,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$50K-$99,999",
							"pct": 34,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 50,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 44,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$100K-$199,999",
							"pct": 20,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 54,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 43,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "$200K-$249,999",
							"pct": 3,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$250,000 or more",
							"pct": 3,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"INCOME3": {
					"numrespondents": 2128,
					"qid": 1948,
					"question": "Income",
					"answers": [
						{
							"answer": "Under $50K",
							"pct": 39,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 44,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 47,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 6,
									"leader": false
								},
								{
									"id": 895,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$50K-$100K",
							"pct": 34,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 50,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 44,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$100K or more",
							"pct": 27,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 55,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 41,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"PARTY": {
					"numrespondents": 2128,
					"qid": 248,
					"question": "Party ID",
					"answers": [
						{
							"answer": "Democrats",
							"pct": 31,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 90,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 8,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Republicans",
							"pct": 30,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 7,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 89,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Independents",
							"pct": 39,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 46,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 41,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 9,
									"leader": false
								},
								{
									"id": 895,
									"pct": 4,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"PARTYGENDER": {
					"numrespondents": 2128,
					"qid": 3784,
					"question": "Party by gender",
					"answers": [
						{
							"answer": "Democratic men",
							"pct": 12,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 89,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 10,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Democratic women",
							"pct": 20,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 90,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 7,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Republican men",
							"pct": 16,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 6,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 89,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Republican women",
							"pct": 13,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 9,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 88,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Independent men",
							"pct": 20,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 42,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 45,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 10,
									"leader": false
								},
								{
									"id": 895,
									"pct": 4,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Independent women",
							"pct": 19,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 50,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 37,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 9,
									"leader": false
								},
								{
									"id": 895,
									"pct": 4,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"PHIL3": {
					"numrespondents": 2128,
					"qid": 251,
					"question": "Ideology",
					"answers": [
						{
							"answer": "Liberal",
							"pct": 31,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 84,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 8,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 4,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Moderate",
							"pct": 40,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 47,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 46,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 6,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Conservative",
							"pct": 29,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 11,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 84,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				}
			}
		},
		"electiondate": "20161108",
		"evotes": 4
	},
	"MI": {
		"polls": {
			"candidates": {
				"0": {
					"fname": " ",
					"lname": "Other/No Answer",
					"party": ""
				},
				"895": {
					"fname": "Jill",
					"lname": "Stein",
					"party": "GR"
				},
				"1746": {
					"fname": "Hillary",
					"lname": "Clinton",
					"party": "D"
				},
				"8639": {
					"fname": "Donald",
					"lname": "Trump",
					"party": "R"
				},
				"31708": {
					"fname": "Gary",
					"lname": "Johnson",
					"party": "LB"
				}
			},
			"topics": {
				"SEX": {
					"numrespondents": 2812,
					"qid": 279,
					"question": "Gender",
					"answers": [
						{
							"answer": "Male",
							"pct": 48,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 41,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 53,
									"leader": true
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						},
						{
							"answer": "Female",
							"pct": 52,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 53,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 42,
									"leader": false
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						}
					]
				},
				"AGE": {
					"numrespondents": 2812,
					"qid": 159,
					"question": "Age",
					"answers": [
						{
							"answer": "18-29",
							"pct": 21,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 57,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 34,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 6,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "30-44",
							"pct": 21,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 44,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 48,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "45-64",
							"pct": 39,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 44,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 52,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "65 and older",
							"pct": 19,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 47,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 51,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						}
					]
				},
				"RACE": {
					"numrespondents": 2812,
					"qid": 260,
					"question": "Race",
					"answers": [
						{
							"answer": "White",
							"pct": 75,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 36,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 57,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Black",
							"pct": 15,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 92,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 6,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 0,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino",
							"pct": 5,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 59,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 38,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Asian",
							"pct": 2,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Other race",
							"pct": 3,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"RACE2B": {
					"numrespondents": 2812,
					"qid": 3423,
					"question": "Race",
					"answers": [
						{
							"answer": "White",
							"pct": 75,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 36,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 57,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-white",
							"pct": 25,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 80,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 17,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						}
					]
				},
				"SEXBYRACE": {
					"numrespondents": 2812,
					"qid": 1602,
					"question": "Race and gender",
					"answers": [
						{
							"answer": "White men",
							"pct": 36,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 29,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 64,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "White women",
							"pct": 40,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 43,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 51,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Black men",
							"pct": 7,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 88,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 9,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 0,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "Black women",
							"pct": 8,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 96,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 3,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino men",
							"pct": 3,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino women",
							"pct": 2,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Others",
							"pct": 5,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 63,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 32,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						}
					]
				},
				"EDUC12R": {
					"numrespondents": 2812,
					"qid": 2500,
					"question": "Education",
					"answers": [
						{
							"answer": "High school or less",
							"pct": 20,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 46,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 49,
									"leader": true
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						},
						{
							"answer": "Some college",
							"pct": 38,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 45,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 49,
									"leader": true
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						},
						{
							"answer": "College graduate",
							"pct": 28,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 45,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 50,
									"leader": true
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						},
						{
							"answer": "Postgraduate",
							"pct": 15,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 61,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 33,
									"leader": false
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCCOLL": {
					"numrespondents": 2812,
					"qid": 1951,
					"question": "Are you a college graduate?",
					"answers": [
						{
							"answer": "Yes",
							"pct": 42,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 50,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 44,
									"leader": false
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						},
						{
							"answer": "No",
							"pct": 58,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 45,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 49,
									"leader": true
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCWHITE": {
					"numrespondents": 2812,
					"qid": 1974,
					"question": "Education and race",
					"answers": [
						{
							"answer": "White college graduates",
							"pct": 33,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 43,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 51,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Whites no degree",
							"pct": 42,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 31,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 62,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites college grads",
							"pct": 9,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 77,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 21,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 0,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites no degree",
							"pct": 16,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 84,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 14,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCWHITEBYSEX": {
					"numrespondents": 2812,
					"qid": 3790,
					"question": "Education among whites by sex",
					"answers": [
						{
							"answer": "White college-grad women",
							"pct": 17,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 50,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 44,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "White non-college women",
							"pct": 22,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 38,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 57,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "White college-grad men",
							"pct": 16,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 36,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 58,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "White non-college men",
							"pct": 20,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 24,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 68,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 6,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites",
							"pct": 24,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 81,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 16,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						}
					]
				},
				"INCOME16GEN": {
					"numrespondents": 2812,
					"qid": 3728,
					"question": "Income",
					"answers": [
						{
							"answer": "Under $30,000",
							"pct": 22,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 62,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 32,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$30K-$49,999",
							"pct": 22,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 44,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 52,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$50K-$99,999",
							"pct": 35,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 43,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 51,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$100K-$199,999",
							"pct": 17,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 43,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 51,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "$200K-$249,999",
							"pct": 1,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$250,000 or more",
							"pct": 2,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"INCOME3": {
					"numrespondents": 2812,
					"qid": 1948,
					"question": "Income",
					"answers": [
						{
							"answer": "Under $50K",
							"pct": 45,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 53,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 42,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$50K-$100K",
							"pct": 35,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 43,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 51,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$100K or more",
							"pct": 21,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 43,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 51,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						}
					]
				},
				"PARTY": {
					"numrespondents": 2812,
					"qid": 248,
					"question": "Party ID",
					"answers": [
						{
							"answer": "Democrats",
							"pct": 40,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 88,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 9,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Republicans",
							"pct": 31,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 7,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 90,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Independents",
							"pct": 29,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 36,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 52,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 7,
									"leader": false
								},
								{
									"id": 895,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						}
					]
				},
				"PARTYGENDER": {
					"numrespondents": 2812,
					"qid": 3784,
					"question": "Party by gender",
					"answers": [
						{
							"answer": "Democratic men",
							"pct": 15,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 86,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 9,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Democratic women",
							"pct": 24,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 88,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 10,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Republican men",
							"pct": 16,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 7,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 90,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Republican women",
							"pct": 15,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 8,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 90,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Independent men",
							"pct": 16,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 33,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 56,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 7,
									"leader": false
								},
								{
									"id": 895,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Independent women",
							"pct": 13,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 40,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 47,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 9,
									"leader": false
								},
								{
									"id": 895,
									"pct": 4,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"PHIL3": {
					"numrespondents": 2812,
					"qid": 251,
					"question": "Ideology",
					"answers": [
						{
							"answer": "Liberal",
							"pct": 27,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 81,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 14,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Moderate",
							"pct": 37,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 52,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 42,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Conservative",
							"pct": 36,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 17,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 79,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						}
					]
				}
			}
		},
		"electiondate": "20161108",
		"evotes": 16
	},
	"MN": {
		"polls": {
			"candidates": {
				"0": {
					"fname": " ",
					"lname": "Other/No Answer",
					"party": ""
				},
				"895": {
					"fname": "Jill",
					"lname": "Stein",
					"party": "GR"
				},
				"1746": {
					"fname": "Hillary",
					"lname": "Clinton",
					"party": "D"
				},
				"8639": {
					"fname": "Donald",
					"lname": "Trump",
					"party": "R"
				},
				"31708": {
					"fname": "Gary",
					"lname": "Johnson",
					"party": "LB"
				}
			},
			"topics": {
				"SEX": {
					"numrespondents": 1636,
					"qid": 279,
					"question": "Gender",
					"answers": [
						{
							"answer": "Male",
							"pct": 47,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 43,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 49,
									"leader": true
								},
								{
									"id": 0,
									"pct": 8,
									"leader": false
								}
							]
						},
						{
							"answer": "Female",
							"pct": 53,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 50,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 43,
									"leader": false
								},
								{
									"id": 0,
									"pct": 7,
									"leader": false
								}
							]
						}
					]
				},
				"AGE": {
					"numrespondents": 1636,
					"qid": 159,
					"question": "Age",
					"answers": [
						{
							"answer": "18-29",
							"pct": 19,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 45,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 42,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 8,
									"leader": false
								},
								{
									"id": 895,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "30-44",
							"pct": 27,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 53,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 39,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "45-64",
							"pct": 39,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 42,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 52,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "65 and older",
							"pct": 15,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 49,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 47,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						}
					]
				},
				"RACE": {
					"numrespondents": 1636,
					"qid": 260,
					"question": "Race",
					"answers": [
						{
							"answer": "White",
							"pct": 87,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 43,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 50,
									"leader": true
								},
								{
									"id": 0,
									"pct": 7,
									"leader": false
								}
							]
						},
						{
							"answer": "Black",
							"pct": 4,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino",
							"pct": 4,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Asian",
							"pct": 2,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Other race",
							"pct": 3,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"RACE2B": {
					"numrespondents": 1636,
					"qid": 3423,
					"question": "Race",
					"answers": [
						{
							"answer": "White",
							"pct": 87,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 43,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 50,
									"leader": true
								},
								{
									"id": 0,
									"pct": 7,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-white",
							"pct": 13,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 71,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 22,
									"leader": false
								},
								{
									"id": 0,
									"pct": 7,
									"leader": false
								}
							]
						}
					]
				},
				"SEXBYRACE": {
					"numrespondents": 1636,
					"qid": 1602,
					"question": "Race and gender",
					"answers": [
						{
							"answer": "White men",
							"pct": 41,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 39,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 53,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "White women",
							"pct": 46,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 46,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 47,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "Black men",
							"pct": 2,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Black women",
							"pct": 2,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino men",
							"pct": 2,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino women",
							"pct": 2,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Others",
							"pct": 5,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"EDUC12R": {
					"numrespondents": 1636,
					"qid": 2500,
					"question": "Education",
					"answers": [
						{
							"answer": "High school or less",
							"pct": 12,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 38,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 55,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "Some college",
							"pct": 32,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 38,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 55,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "College graduate",
							"pct": 36,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 47,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 45,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Postgraduate",
							"pct": 20,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 64,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 27,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCCOLL": {
					"numrespondents": 1636,
					"qid": 1951,
					"question": "Are you a college graduate?",
					"answers": [
						{
							"answer": "Yes",
							"pct": 56,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 53,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 39,
									"leader": false
								},
								{
									"id": 0,
									"pct": 8,
									"leader": false
								}
							]
						},
						{
							"answer": "No",
							"pct": 44,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 38,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 55,
									"leader": true
								},
								{
									"id": 0,
									"pct": 7,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCWHITE": {
					"numrespondents": 1636,
					"qid": 1974,
					"question": "Education and race",
					"answers": [
						{
							"answer": "White college graduates",
							"pct": 50,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 50,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 41,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "Whites no degree",
							"pct": 37,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 33,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 60,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites college grads",
							"pct": 6,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 76,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 19,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites no degree",
							"pct": 7,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 65,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 26,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 6,
									"leader": false
								},
								{
									"id": 895,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCWHITEBYSEX": {
					"numrespondents": 1636,
					"qid": 3790,
					"question": "Education among whites by sex",
					"answers": [
						{
							"answer": "White college-grad women",
							"pct": 28,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 54,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 39,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "White non-college women",
							"pct": 19,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 36,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 58,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "White college-grad men",
							"pct": 22,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 46,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 45,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 6,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "White non-college men",
							"pct": 19,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 30,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 63,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites",
							"pct": 13,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 70,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 23,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						}
					]
				},
				"INCOME16GEN": {
					"numrespondents": 1636,
					"qid": 3728,
					"question": "Income",
					"answers": [
						{
							"answer": "Under $30,000",
							"pct": 13,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 46,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 45,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "$30K-$49,999",
							"pct": 15,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 45,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 45,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "$50K-$99,999",
							"pct": 34,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 45,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 48,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "$100K-$199,999",
							"pct": 26,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 51,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 40,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "$200K-$249,999",
							"pct": 5,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$250,000 or more",
							"pct": 7,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"INCOME3": {
					"numrespondents": 1636,
					"qid": 1948,
					"question": "Income",
					"answers": [
						{
							"answer": "Under $50K",
							"pct": 29,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 45,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 45,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "$50K-$100K",
							"pct": 34,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 45,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 48,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "$100K or more",
							"pct": 37,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 52,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 41,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						}
					]
				},
				"PARTY": {
					"numrespondents": 1636,
					"qid": 248,
					"question": "Party ID",
					"answers": [
						{
							"answer": "Democrats",
							"pct": 37,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 87,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 10,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Republicans",
							"pct": 35,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 7,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 86,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "Independents",
							"pct": 28,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 42,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 44,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 7,
									"leader": false
								},
								{
									"id": 895,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						}
					]
				},
				"PARTYGENDER": {
					"numrespondents": 1636,
					"qid": 3784,
					"question": "Party by gender",
					"answers": [
						{
							"answer": "Democratic men",
							"pct": 15,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 85,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 11,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Democratic women",
							"pct": 23,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 88,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 9,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Republican men",
							"pct": 17,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 5,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 88,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "Republican women",
							"pct": 17,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 10,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 84,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "Independent men",
							"pct": 15,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 46,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 42,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 7,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "Independent women",
							"pct": 13,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 37,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 47,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 7,
									"leader": false
								},
								{
									"id": 895,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						}
					]
				},
				"PHIL3": {
					"numrespondents": 1636,
					"qid": 251,
					"question": "Ideology",
					"answers": [
						{
							"answer": "Liberal",
							"pct": 28,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 88,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 7,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Moderate",
							"pct": 40,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 48,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 43,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "Conservative",
							"pct": 32,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 11,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 82,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						}
					]
				}
			}
		},
		"electiondate": "20161108",
		"lts": 1478719620000,
		"evotes": 10
	},
	"MO": {
		"polls": {
			"candidates": {
				"0": {
					"fname": " ",
					"lname": "Other/No Answer",
					"party": ""
				},
				"895": {
					"fname": "Jill",
					"lname": "Stein",
					"party": "GR"
				},
				"1746": {
					"fname": "Hillary",
					"lname": "Clinton",
					"party": "D"
				},
				"8639": {
					"fname": "Donald",
					"lname": "Trump",
					"party": "R"
				},
				"31708": {
					"fname": "Gary",
					"lname": "Johnson",
					"party": "LB"
				}
			},
			"topics": {
				"SEX": {
					"numrespondents": 1941,
					"qid": 279,
					"question": "Gender",
					"answers": [
						{
							"answer": "Male",
							"pct": 47,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 32,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 62,
									"leader": true
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						},
						{
							"answer": "Female",
							"pct": 53,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 43,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 53,
									"leader": true
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						}
					]
				},
				"AGE": {
					"numrespondents": 1941,
					"qid": 159,
					"question": "Age",
					"answers": [
						{
							"answer": "18-29",
							"pct": 18,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 40,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 51,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 6,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "30-44",
							"pct": 24,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 44,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 48,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "45-64",
							"pct": 40,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 34,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 63,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "65 and older",
							"pct": 17,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 36,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 62,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						}
					]
				},
				"RACE": {
					"numrespondents": 1941,
					"qid": 260,
					"question": "Race",
					"answers": [
						{
							"answer": "White",
							"pct": 79,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 28,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 66,
									"leader": true
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						},
						{
							"answer": "Black",
							"pct": 14,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 90,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 8,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino",
							"pct": 4,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Asian",
							"pct": 1,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Other race",
							"pct": 3,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"RACE2B": {
					"numrespondents": 1941,
					"qid": 3423,
					"question": "Race",
					"answers": [
						{
							"answer": "White",
							"pct": 79,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 28,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 66,
									"leader": true
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-white",
							"pct": 21,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 75,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 22,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						}
					]
				},
				"SEXBYRACE": {
					"numrespondents": 1941,
					"qid": 1602,
					"question": "Race and gender",
					"answers": [
						{
							"answer": "White men",
							"pct": 36,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 22,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 72,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "White women",
							"pct": 43,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 34,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 61,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Black men",
							"pct": 6,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 87,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 10,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Black women",
							"pct": 7,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 92,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 6,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino men",
							"pct": 2,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino women",
							"pct": 2,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Others",
							"pct": 4,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"EDUC12R": {
					"numrespondents": 1941,
					"qid": 2500,
					"question": "Education",
					"answers": [
						{
							"answer": "High school or less",
							"pct": 20,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 35,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 62,
									"leader": true
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "Some college",
							"pct": 34,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 38,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 57,
									"leader": true
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						},
						{
							"answer": "College graduate",
							"pct": 29,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 38,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 56,
									"leader": true
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						},
						{
							"answer": "Postgraduate",
							"pct": 17,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 42,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 53,
									"leader": true
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCCOLL": {
					"numrespondents": 1941,
					"qid": 1951,
					"question": "Are you a college graduate?",
					"answers": [
						{
							"answer": "Yes",
							"pct": 46,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 39,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 55,
									"leader": true
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						},
						{
							"answer": "No",
							"pct": 54,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 37,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 59,
									"leader": true
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCWHITE": {
					"numrespondents": 1941,
					"qid": 1974,
					"question": "Education and race",
					"answers": [
						{
							"answer": "White college graduates",
							"pct": 38,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 32,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 61,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Whites no degree",
							"pct": 42,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 25,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 71,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites college grads",
							"pct": 8,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 69,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 27,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites no degree",
							"pct": 13,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 78,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 19,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCWHITEBYSEX": {
					"numrespondents": 1941,
					"qid": 3790,
					"question": "Education among whites by sex",
					"answers": [
						{
							"answer": "White college-grad women",
							"pct": 22,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 39,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 57,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "White non-college women",
							"pct": 21,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 29,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 66,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "White college-grad men",
							"pct": 16,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 23,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 68,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 8,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "White non-college men",
							"pct": 20,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 20,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 76,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites",
							"pct": 21,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 75,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 22,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"INCOME16GEN": {
					"numrespondents": 1941,
					"qid": 3728,
					"question": "Income",
					"answers": [
						{
							"answer": "Under $30,000",
							"pct": 17,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 47,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 48,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$30K-$49,999",
							"pct": 22,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 45,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 49,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "$50K-$99,999",
							"pct": 31,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 34,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 59,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 6,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$100K-$199,999",
							"pct": 24,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 32,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 64,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$200K-$249,999",
							"pct": 3,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$250,000 or more",
							"pct": 3,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"INCOME3": {
					"numrespondents": 1941,
					"qid": 1948,
					"question": "Income",
					"answers": [
						{
							"answer": "Under $50K",
							"pct": 39,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 46,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 48,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "$50K-$100K",
							"pct": 31,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 34,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 59,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 6,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$100K or more",
							"pct": 30,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 30,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 66,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"PARTY": {
					"numrespondents": 1941,
					"qid": 248,
					"question": "Party ID",
					"answers": [
						{
							"answer": "Democrats",
							"pct": 34,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 84,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 13,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Republicans",
							"pct": 39,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 5,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 92,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Independents",
							"pct": 27,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 28,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 61,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 8,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						}
					]
				},
				"PARTYGENDER": {
					"numrespondents": 1941,
					"qid": 3784,
					"question": "Party by gender",
					"answers": [
						{
							"answer": "Democratic men",
							"pct": 13,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 83,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 14,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Democratic women",
							"pct": 21,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 84,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 13,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Republican men",
							"pct": 19,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 4,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 94,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Republican women",
							"pct": 20,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 6,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 90,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Independent men",
							"pct": 15,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 24,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 62,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 10,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "Independent women",
							"pct": 12,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 33,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 59,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						}
					]
				},
				"PHIL3": {
					"numrespondents": 1941,
					"qid": 251,
					"question": "Ideology",
					"answers": [
						{
							"answer": "Liberal",
							"pct": 20,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 80,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 14,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Moderate",
							"pct": 38,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 48,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 45,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Conservative",
							"pct": 41,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 8,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 89,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						}
					]
				}
			}
		},
		"electiondate": "20161108",
		"evotes": 10
	},
	"NV": {
		"polls": {
			"candidates": {
				"0": {
					"fname": " ",
					"lname": "Other/No Answer",
					"party": ""
				},
				"1746": {
					"fname": "Hillary",
					"lname": "Clinton",
					"party": "D"
				},
				"8639": {
					"fname": "Donald",
					"lname": "Trump",
					"party": "R"
				},
				"31708": {
					"fname": "Gary",
					"lname": "Johnson",
					"party": "LB"
				},
				"100013": {
					"fname": "",
					"lname": "None of these candidates",
					"party": "O"
				}
			},
			"topics": {
				"SEX": {
					"numrespondents": 2778,
					"qid": 279,
					"question": "Gender",
					"answers": [
						{
							"answer": "Male",
							"pct": 48,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 42,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 50,
									"leader": true
								},
								{
									"id": 0,
									"pct": 8,
									"leader": false
								}
							]
						},
						{
							"answer": "Female",
							"pct": 52,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 53,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 41,
									"leader": false
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						}
					]
				},
				"AGE": {
					"numrespondents": 2778,
					"qid": 159,
					"question": "Age",
					"answers": [
						{
							"answer": "18-29",
							"pct": 18,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 52,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 35,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 8,
									"leader": false
								},
								{
									"id": 100013,
									"pct": 4,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "30-44",
							"pct": 27,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 52,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 40,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 100013,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "45-64",
							"pct": 35,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 40,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 54,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 100013,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "65 and older",
							"pct": 20,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 52,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 47,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 100013,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"RACE": {
					"numrespondents": 2778,
					"qid": 260,
					"question": "Race",
					"answers": [
						{
							"answer": "White",
							"pct": 62,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 38,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 56,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 100013,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Black",
							"pct": 9,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 81,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 12,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 100013,
									"pct": 5,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino",
							"pct": 18,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 60,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 29,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 100013,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "Asian",
							"pct": 6,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 62,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 36,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 100013,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Other race",
							"pct": 4,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 46,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 45,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 100013,
									"pct": 4,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						}
					]
				},
				"RACE2B": {
					"numrespondents": 2778,
					"qid": 3423,
					"question": "Race",
					"answers": [
						{
							"answer": "White",
							"pct": 62,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 38,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 56,
									"leader": true
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-white",
							"pct": 38,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 64,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 28,
									"leader": false
								},
								{
									"id": 0,
									"pct": 8,
									"leader": false
								}
							]
						}
					]
				},
				"SEXBYRACE": {
					"numrespondents": 2778,
					"qid": 1602,
					"question": "Race and gender",
					"answers": [
						{
							"answer": "White men",
							"pct": 30,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 34,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 60,
									"leader": true
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						},
						{
							"answer": "White women",
							"pct": 32,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 43,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 52,
									"leader": true
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						},
						{
							"answer": "Black men",
							"pct": 4,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 64,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 26,
									"leader": false
								},
								{
									"id": 0,
									"pct": 10,
									"leader": false
								}
							]
						},
						{
							"answer": "Black women",
							"pct": 5,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 93,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino men",
							"pct": 9,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 57,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 30,
									"leader": false
								},
								{
									"id": 0,
									"pct": 13,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino women",
							"pct": 9,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 63,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 29,
									"leader": false
								},
								{
									"id": 0,
									"pct": 8,
									"leader": false
								}
							]
						},
						{
							"answer": "Others",
							"pct": 11,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 56,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 40,
									"leader": false
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						}
					]
				},
				"EDUC12R": {
					"numrespondents": 2778,
					"qid": 2500,
					"question": "Education",
					"answers": [
						{
							"answer": "High school or less",
							"pct": 21,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 52,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 42,
									"leader": false
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						},
						{
							"answer": "Some college",
							"pct": 34,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 45,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 48,
									"leader": true
								},
								{
									"id": 0,
									"pct": 7,
									"leader": false
								}
							]
						},
						{
							"answer": "College graduate",
							"pct": 30,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 48,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 45,
									"leader": false
								},
								{
									"id": 0,
									"pct": 7,
									"leader": false
								}
							]
						},
						{
							"answer": "Postgraduate",
							"pct": 15,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 52,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 44,
									"leader": false
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCCOLL": {
					"numrespondents": 2778,
					"qid": 1951,
					"question": "Are you a college graduate?",
					"answers": [
						{
							"answer": "Yes",
							"pct": 45,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 49,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 44,
									"leader": false
								},
								{
									"id": 0,
									"pct": 7,
									"leader": false
								}
							]
						},
						{
							"answer": "No",
							"pct": 55,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 48,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 46,
									"leader": false
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCWHITE": {
					"numrespondents": 2778,
					"qid": 1974,
					"question": "Education and race",
					"answers": [
						{
							"answer": "White college graduates",
							"pct": 29,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 43,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 51,
									"leader": true
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						},
						{
							"answer": "Whites no degree",
							"pct": 33,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 35,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 59,
									"leader": true
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites college grads",
							"pct": 16,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 61,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 32,
									"leader": false
								},
								{
									"id": 0,
									"pct": 7,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites no degree",
							"pct": 22,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 67,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 25,
									"leader": false
								},
								{
									"id": 0,
									"pct": 8,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCWHITEBYSEX": {
					"numrespondents": 2778,
					"qid": 3790,
					"question": "Education among whites by sex",
					"answers": [
						{
							"answer": "White college-grad women",
							"pct": 15,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 45,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 50,
									"leader": true
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						},
						{
							"answer": "White non-college women",
							"pct": 17,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 42,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 53,
									"leader": true
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						},
						{
							"answer": "White college-grad men",
							"pct": 14,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 40,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 52,
									"leader": true
								},
								{
									"id": 0,
									"pct": 8,
									"leader": false
								}
							]
						},
						{
							"answer": "White non-college men",
							"pct": 16,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 28,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 66,
									"leader": true
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites",
							"pct": 38,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 64,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 28,
									"leader": false
								},
								{
									"id": 0,
									"pct": 8,
									"leader": false
								}
							]
						}
					]
				},
				"INCOME16GEN": {
					"numrespondents": 2778,
					"qid": 3728,
					"question": "Income",
					"answers": [
						{
							"answer": "Under $30,000",
							"pct": 17,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 68,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 26,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 100013,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "$30K-$49,999",
							"pct": 18,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 53,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 36,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 8,
									"leader": false
								},
								{
									"id": 100013,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$50K-$99,999",
							"pct": 35,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 50,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 42,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 100013,
									"pct": 4,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "$100K-$199,999",
							"pct": 22,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 34,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 60,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 100013,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$200K-$249,999",
							"pct": 3,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 100013,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$250,000 or more",
							"pct": 5,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 100013,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"INCOME3": {
					"numrespondents": 2778,
					"qid": 1948,
					"question": "Income",
					"answers": [
						{
							"answer": "Under $50K",
							"pct": 35,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 60,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 31,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 100013,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "$50K-$100K",
							"pct": 35,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 50,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 42,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 100013,
									"pct": 4,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "$100K or more",
							"pct": 29,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 37,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 58,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 100013,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"PARTY": {
					"numrespondents": 2778,
					"qid": 248,
					"question": "Party ID",
					"answers": [
						{
							"answer": "Democrats",
							"pct": 36,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 90,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 8,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 100013,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Republicans",
							"pct": 28,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 8,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 88,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 100013,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Independents",
							"pct": 36,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 37,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 50,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 7,
									"leader": false
								},
								{
									"id": 100013,
									"pct": 5,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						}
					]
				},
				"PARTYGENDER": {
					"numrespondents": 2778,
					"qid": 3784,
					"question": "Party by gender",
					"answers": [
						{
							"answer": "Democratic men",
							"pct": 14,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 87,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 10,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 100013,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Democratic women",
							"pct": 23,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 92,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 7,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 100013,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Republican men",
							"pct": 14,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 9,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 87,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 100013,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Republican women",
							"pct": 14,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 7,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 89,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 100013,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Independent men",
							"pct": 21,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 35,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 52,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 6,
									"leader": false
								},
								{
									"id": 100013,
									"pct": 6,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Independent women",
							"pct": 15,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 41,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 47,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 9,
									"leader": false
								},
								{
									"id": 100013,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"PHIL3": {
					"numrespondents": 2778,
					"qid": 251,
					"question": "Ideology",
					"answers": [
						{
							"answer": "Liberal",
							"pct": 25,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 82,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 13,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 100013,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Moderate",
							"pct": 40,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 54,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 38,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 100013,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Conservative",
							"pct": 36,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 19,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 77,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 100013,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				}
			}
		},
		"electiondate": "20161108",
		"lts": 1478718243000,
		"evotes": 6
	},
	"NJ": {
		"polls": {
			"candidates": {
				"0": {
					"fname": " ",
					"lname": "Other/No Answer",
					"party": ""
				},
				"895": {
					"fname": "Jill",
					"lname": "Stein",
					"party": "GR"
				},
				"1746": {
					"fname": "Hillary",
					"lname": "Clinton",
					"party": "D"
				},
				"8639": {
					"fname": "Donald",
					"lname": "Trump",
					"party": "R"
				},
				"31708": {
					"fname": "Gary",
					"lname": "Johnson",
					"party": "LB"
				}
			},
			"topics": {
				"SEX": {
					"numrespondents": 1633,
					"qid": 279,
					"question": "Gender",
					"answers": [
						{
							"answer": "Male",
							"pct": 48,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 50,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 46,
									"leader": false
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "Female",
							"pct": 52,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 58,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 39,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						}
					]
				},
				"AGE": {
					"numrespondents": 1633,
					"qid": 159,
					"question": "Age",
					"answers": [
						{
							"answer": "18-29",
							"pct": 15,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 62,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 30,
									"leader": false
								},
								{
									"id": 0,
									"pct": 8,
									"leader": false
								}
							]
						},
						{
							"answer": "30-44",
							"pct": 25,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 57,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 41,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "45-64",
							"pct": 45,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 54,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 44,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "65 and older",
							"pct": 16,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 47,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 50,
									"leader": true
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						}
					]
				},
				"RACE": {
					"numrespondents": 1633,
					"qid": 260,
					"question": "Race",
					"answers": [
						{
							"answer": "White",
							"pct": 67,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 42,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 55,
									"leader": true
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "Black",
							"pct": 14,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 89,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 9,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino",
							"pct": 14,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 76,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 23,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Asian",
							"pct": 4,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Other race",
							"pct": 1,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"RACE2B": {
					"numrespondents": 1633,
					"qid": 3423,
					"question": "Race",
					"answers": [
						{
							"answer": "White",
							"pct": 67,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 42,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 55,
									"leader": true
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-white",
							"pct": 33,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 82,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 17,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						}
					]
				},
				"SEXBYRACE": {
					"numrespondents": 1633,
					"qid": 1602,
					"question": "Race and gender",
					"answers": [
						{
							"answer": "White men",
							"pct": 33,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 37,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 58,
									"leader": true
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						},
						{
							"answer": "White women",
							"pct": 34,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 46,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 51,
									"leader": true
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "Black men",
							"pct": 7,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Black women",
							"pct": 7,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 92,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 8,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino men",
							"pct": 6,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino women",
							"pct": 8,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 77,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 22,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Others",
							"pct": 5,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 78,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 20,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						}
					]
				},
				"EDUC12R": {
					"numrespondents": 1633,
					"qid": 2500,
					"question": "Education",
					"answers": [
						{
							"answer": "High school or less",
							"pct": 12,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 48,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 49,
									"leader": true
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "Some college",
							"pct": 31,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 48,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 50,
									"leader": true
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "College graduate",
							"pct": 33,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 55,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 41,
									"leader": false
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "Postgraduate",
							"pct": 24,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 67,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 29,
									"leader": false
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCCOLL": {
					"numrespondents": 1633,
					"qid": 1951,
					"question": "Are you a college graduate?",
					"answers": [
						{
							"answer": "Yes",
							"pct": 57,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 60,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 36,
									"leader": false
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "No",
							"pct": 43,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 48,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 50,
									"leader": true
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCWHITE": {
					"numrespondents": 1633,
					"qid": 1974,
					"question": "Education and race",
					"answers": [
						{
							"answer": "White college graduates",
							"pct": 41,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 52,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 44,
									"leader": false
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "Whites no degree",
							"pct": 27,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 26,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 70,
									"leader": true
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites college grads",
							"pct": 17,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 81,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 16,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites no degree",
							"pct": 16,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 83,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 17,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCWHITEBYSEX": {
					"numrespondents": 1633,
					"qid": 3790,
					"question": "Education among whites by sex",
					"answers": [
						{
							"answer": "White college-grad women",
							"pct": 22,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 56,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 41,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "White non-college women",
							"pct": 13,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 28,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 69,
									"leader": true
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "White college-grad men",
							"pct": 18,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 47,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 48,
									"leader": true
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						},
						{
							"answer": "White non-college men",
							"pct": 13,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 24,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 71,
									"leader": true
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites",
							"pct": 33,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 82,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 16,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						}
					]
				},
				"INCOME16GEN": {
					"numrespondents": 1633,
					"qid": 3728,
					"question": "Income",
					"answers": [
						{
							"answer": "Under $30,000",
							"pct": 9,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$30K-$49,999",
							"pct": 12,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 67,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 26,
									"leader": false
								},
								{
									"id": 0,
									"pct": 7,
									"leader": false
								}
							]
						},
						{
							"answer": "$50K-$99,999",
							"pct": 32,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 54,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 43,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "$100K-$199,999",
							"pct": 31,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 47,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 50,
									"leader": true
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "$200K-$249,999",
							"pct": 6,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$250,000 or more",
							"pct": 10,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 58,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 39,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						}
					]
				},
				"INCOME3": {
					"numrespondents": 1633,
					"qid": 1948,
					"question": "Income",
					"answers": [
						{
							"answer": "Under $50K",
							"pct": 21,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 64,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 32,
									"leader": false
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "$50K-$100K",
							"pct": 32,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 54,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 43,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "$100K or more",
							"pct": 47,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 50,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 46,
									"leader": false
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						}
					]
				},
				"PARTY": {
					"numrespondents": 1633,
					"qid": 248,
					"question": "Party ID",
					"answers": [
						{
							"answer": "Democrats",
							"pct": 43,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 86,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 12,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "Republicans",
							"pct": 27,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 12,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 86,
									"leader": true
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "Independents",
							"pct": 30,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 48,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 46,
									"leader": false
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						}
					]
				},
				"PARTYGENDER": {
					"numrespondents": 1633,
					"qid": 3784,
					"question": "Party by gender",
					"answers": [
						{
							"answer": "Democratic men",
							"pct": 19,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 83,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 14,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Democratic women",
							"pct": 24,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 89,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 10,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Republican men",
							"pct": 13,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 13,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 85,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Republican women",
							"pct": 14,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 11,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 87,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Independent men",
							"pct": 15,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 44,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 48,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Independent women",
							"pct": 15,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 52,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 44,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"PHIL3": {
					"numrespondents": 1633,
					"qid": 251,
					"question": "Ideology",
					"answers": [
						{
							"answer": "Liberal",
							"pct": 28,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 84,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 13,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "Moderate",
							"pct": 49,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 56,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 40,
									"leader": false
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "Conservative",
							"pct": 23,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 17,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 81,
									"leader": true
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						}
					]
				}
			}
		},
		"electiondate": "20161108",
		"lts": 1478724832000,
		"evotes": 14
	},
	"NH": {
		"polls": {
			"candidates": {
				"0": {
					"fname": " ",
					"lname": "Other/No Answer",
					"party": ""
				},
				"895": {
					"fname": "Jill",
					"lname": "Stein",
					"party": "GR"
				},
				"1746": {
					"fname": "Hillary",
					"lname": "Clinton",
					"party": "D"
				},
				"8639": {
					"fname": "Donald",
					"lname": "Trump",
					"party": "R"
				},
				"31708": {
					"fname": "Gary",
					"lname": "Johnson",
					"party": "LB"
				}
			},
			"topics": {
				"SEX": {
					"numrespondents": 2800,
					"qid": 279,
					"question": "Gender",
					"answers": [
						{
							"answer": "Male",
							"pct": 48,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 40,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 53,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 6,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Female",
							"pct": 52,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 54,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 41,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						}
					]
				},
				"AGE": {
					"numrespondents": 2800,
					"qid": 159,
					"question": "Age",
					"answers": [
						{
							"answer": "18-29",
							"pct": 21,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 49,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 41,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 8,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "30-44",
							"pct": 21,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 47,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 43,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 7,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "45-64",
							"pct": 42,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 46,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 51,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "65 and older",
							"pct": 16,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 49,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 49,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						}
					]
				},
				"RACE": {
					"numrespondents": 2800,
					"qid": 260,
					"question": "Race",
					"answers": [
						{
							"answer": "White",
							"pct": 92,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 46,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 48,
									"leader": true
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						},
						{
							"answer": "Black",
							"pct": 1,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino",
							"pct": 4,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Asian",
							"pct": 1,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Other race",
							"pct": 2,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"RACE2B": {
					"numrespondents": 2800,
					"qid": 3423,
					"question": "Race",
					"answers": [
						{
							"answer": "White",
							"pct": 92,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 46,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 48,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-white",
							"pct": 8,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 58,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 33,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						}
					]
				},
				"SEXBYRACE": {
					"numrespondents": 2800,
					"qid": 1602,
					"question": "Race and gender",
					"answers": [
						{
							"answer": "White men",
							"pct": 45,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 39,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 54,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "White women",
							"pct": 47,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 53,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 42,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Black men",
							"pct": 1,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Black women",
							"pct": 1,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino men",
							"pct": 2,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino women",
							"pct": 2,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Others",
							"pct": 3,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"EDUC12R": {
					"numrespondents": 2800,
					"qid": 2500,
					"question": "Education",
					"answers": [
						{
							"answer": "High school or less",
							"pct": 13,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 37,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 58,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Some college",
							"pct": 31,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 41,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 53,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "College graduate",
							"pct": 32,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 47,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 48,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Postgraduate",
							"pct": 23,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 65,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 29,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCCOLL": {
					"numrespondents": 2800,
					"qid": 1951,
					"question": "Are you a college graduate?",
					"answers": [
						{
							"answer": "Yes",
							"pct": 56,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 54,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 40,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "No",
							"pct": 44,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 39,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 55,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCWHITE": {
					"numrespondents": 2800,
					"qid": 1974,
					"question": "Education and race",
					"answers": [
						{
							"answer": "White college graduates",
							"pct": 51,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 54,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 41,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Whites no degree",
							"pct": 41,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 38,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 56,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites college grads",
							"pct": 5,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 58,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 32,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 6,
									"leader": false
								},
								{
									"id": 895,
									"pct": 4,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites no degree",
							"pct": 3,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCWHITEBYSEX": {
					"numrespondents": 2800,
					"qid": 3790,
					"question": "Education among whites by sex",
					"answers": [
						{
							"answer": "White college-grad women",
							"pct": 28,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 61,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 35,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "White non-college women",
							"pct": 21,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 42,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 53,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "White college-grad men",
							"pct": 24,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 46,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 47,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 6,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "White non-college men",
							"pct": 20,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 34,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 60,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites",
							"pct": 8,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 58,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 33,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 6,
									"leader": false
								},
								{
									"id": 895,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"INCOME16GEN": {
					"numrespondents": 2800,
					"qid": 3728,
					"question": "Income",
					"answers": [
						{
							"answer": "Under $30,000",
							"pct": 12,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$30K-$49,999",
							"pct": 15,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 47,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 45,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 4,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$50K-$99,999",
							"pct": 34,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 50,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 46,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$100K-$199,999",
							"pct": 31,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 47,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 48,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$200K-$249,999",
							"pct": 6,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$250,000 or more",
							"pct": 3,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"INCOME3": {
					"numrespondents": 2800,
					"qid": 1948,
					"question": "Income",
					"answers": [
						{
							"answer": "Under $50K",
							"pct": 27,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 51,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 43,
									"leader": false
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						},
						{
							"answer": "$50K-$100K",
							"pct": 34,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 50,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 46,
									"leader": false
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "$100K or more",
							"pct": 39,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 48,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 47,
									"leader": false
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						}
					]
				},
				"PARTY": {
					"numrespondents": 2800,
					"qid": 248,
					"question": "Party ID",
					"answers": [
						{
							"answer": "Democrats",
							"pct": 28,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 93,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 5,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Republicans",
							"pct": 28,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 7,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 89,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Independents",
							"pct": 44,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 45,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 45,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 7,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						}
					]
				},
				"PARTYGENDER": {
					"numrespondents": 2800,
					"qid": 3784,
					"question": "Party by gender",
					"answers": [
						{
							"answer": "Democratic men",
							"pct": 11,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 94,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 4,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Democratic women",
							"pct": 17,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 93,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 5,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Republican men",
							"pct": 15,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 7,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 88,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Republican women",
							"pct": 13,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 8,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 89,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Independent men",
							"pct": 22,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 39,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 49,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 10,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Independent women",
							"pct": 22,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 51,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 41,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						}
					]
				},
				"PHIL3": {
					"numrespondents": 2800,
					"qid": 251,
					"question": "Ideology",
					"answers": [
						{
							"answer": "Liberal",
							"pct": 27,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 87,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 9,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Moderate",
							"pct": 42,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 52,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 41,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Conservative",
							"pct": 31,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 9,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 86,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				}
			}
		},
		"electiondate": "20161108",
		"lts": 1478724374000,
		"evotes": 4
	},
	"NY": {
		"polls": {
			"candidates": {
				"0": {
					"fname": " ",
					"lname": "Other/No Answer",
					"party": ""
				},
				"1746": {
					"fname": "Hillary",
					"lname": "Clinton",
					"party": "D"
				},
				"8639": {
					"fname": "Donald",
					"lname": "Trump",
					"party": "R"
				}
			},
			"topics": {
				"SEX": {
					"numrespondents": 1466,
					"qid": 279,
					"question": "Gender",
					"answers": [
						{
							"answer": "Male",
							"pct": 44,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 50,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 46,
									"leader": false
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "Female",
							"pct": 56,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 66,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 31,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						}
					]
				},
				"AGE": {
					"numrespondents": 1466,
					"qid": 159,
					"question": "Age",
					"answers": [
						{
							"answer": "18-29",
							"pct": 17,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 71,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 24,
									"leader": false
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						},
						{
							"answer": "30-44",
							"pct": 26,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 63,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 33,
									"leader": false
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "45-64",
							"pct": 39,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 53,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 43,
									"leader": false
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "65 and older",
							"pct": 18,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 53,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 44,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						}
					]
				},
				"RACE": {
					"numrespondents": 1466,
					"qid": 260,
					"question": "Race",
					"answers": [
						{
							"answer": "White",
							"pct": 65,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 45,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 51,
									"leader": true
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "Black",
							"pct": 21,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 92,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 6,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino",
							"pct": 9,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 74,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 23,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "Asian",
							"pct": 2,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Other race",
							"pct": 3,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"RACE2B": {
					"numrespondents": 1466,
					"qid": 3423,
					"question": "Race",
					"answers": [
						{
							"answer": "White",
							"pct": 65,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 45,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 51,
									"leader": true
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-white",
							"pct": 35,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 85,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 13,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						}
					]
				},
				"SEXBYRACE": {
					"numrespondents": 1466,
					"qid": 1602,
					"question": "Race and gender",
					"answers": [
						{
							"answer": "White men",
							"pct": 30,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 36,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 59,
									"leader": true
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						},
						{
							"answer": "White women",
							"pct": 35,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 52,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 44,
									"leader": false
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "Black men",
							"pct": 8,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 94,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 5,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Black women",
							"pct": 13,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 91,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 7,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino men",
							"pct": 4,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino women",
							"pct": 5,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Others",
							"pct": 5,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"EDUC12R": {
					"numrespondents": 1466,
					"qid": 2500,
					"question": "Education",
					"answers": [
						{
							"answer": "High school or less",
							"pct": 16,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 50,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 47,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "Some college",
							"pct": 29,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 54,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 42,
									"leader": false
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "College graduate",
							"pct": 33,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 62,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 35,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "Postgraduate",
							"pct": 22,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 66,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 30,
									"leader": false
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCCOLL": {
					"numrespondents": 1466,
					"qid": 1951,
					"question": "Are you a college graduate?",
					"answers": [
						{
							"answer": "Yes",
							"pct": 55,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 64,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 33,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "No",
							"pct": 45,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 53,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 44,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCWHITE": {
					"numrespondents": 1466,
					"qid": 1974,
					"question": "Education and race",
					"answers": [
						{
							"answer": "White college graduates",
							"pct": 37,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 53,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 43,
									"leader": false
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "Whites no degree",
							"pct": 28,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 33,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 62,
									"leader": true
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites college grads",
							"pct": 18,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 86,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 12,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites no degree",
							"pct": 17,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 84,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 14,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCWHITEBYSEX": {
					"numrespondents": 1466,
					"qid": 3790,
					"question": "Education among whites by sex",
					"answers": [
						{
							"answer": "White college-grad women",
							"pct": 21,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 58,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 38,
									"leader": false
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "White non-college women",
							"pct": 14,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 42,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 54,
									"leader": true
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "White college-grad men",
							"pct": 16,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 47,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 49,
									"leader": true
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "White non-college men",
							"pct": 14,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 25,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 71,
									"leader": true
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites",
							"pct": 35,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 85,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 13,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						}
					]
				},
				"INCOME16GEN": {
					"numrespondents": 1466,
					"qid": 3728,
					"question": "Income",
					"answers": [
						{
							"answer": "Under $30,000",
							"pct": 14,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$30K-$49,999",
							"pct": 21,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 69,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 28,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "$50K-$99,999",
							"pct": 34,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 61,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 37,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "$100K-$199,999",
							"pct": 23,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 60,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 36,
									"leader": false
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "$200K-$249,999",
							"pct": 4,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$250,000 or more",
							"pct": 5,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"INCOME3": {
					"numrespondents": 1466,
					"qid": 1948,
					"question": "Income",
					"answers": [
						{
							"answer": "Under $50K",
							"pct": 35,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 68,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 30,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "$50K-$100K",
							"pct": 34,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 61,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 37,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "$100K or more",
							"pct": 31,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 55,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 38,
									"leader": false
								},
								{
									"id": 0,
									"pct": 7,
									"leader": false
								}
							]
						}
					]
				},
				"PARTY": {
					"numrespondents": 1466,
					"qid": 248,
					"question": "Party ID",
					"answers": [
						{
							"answer": "Democrats",
							"pct": 48,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 92,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 7,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Republicans",
							"pct": 26,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 9,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 89,
									"leader": true
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "Independents",
							"pct": 26,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 49,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 42,
									"leader": false
								},
								{
									"id": 0,
									"pct": 9,
									"leader": false
								}
							]
						}
					]
				},
				"PARTYGENDER": {
					"numrespondents": 1466,
					"qid": 3784,
					"question": "Party by gender",
					"answers": [
						{
							"answer": "Democratic men",
							"pct": 18,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 91,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 8,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Democratic women",
							"pct": 30,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 93,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 7,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Republican men",
							"pct": 14,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 6,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 92,
									"leader": true
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "Republican women",
							"pct": 12,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 11,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 86,
									"leader": true
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "Independent men",
							"pct": 12,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 41,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 51,
									"leader": true
								},
								{
									"id": 0,
									"pct": 8,
									"leader": false
								}
							]
						},
						{
							"answer": "Independent women",
							"pct": 14,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 56,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 36,
									"leader": false
								},
								{
									"id": 0,
									"pct": 8,
									"leader": false
								}
							]
						}
					]
				},
				"PHIL3": {
					"numrespondents": 1466,
					"qid": 251,
					"question": "Ideology",
					"answers": [
						{
							"answer": "Liberal",
							"pct": 35,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 88,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 8,
									"leader": false
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "Moderate",
							"pct": 40,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 59,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 38,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "Conservative",
							"pct": 26,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 19,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 78,
									"leader": true
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						}
					]
				}
			}
		},
		"electiondate": "20161108",
		"lts": 1478724976000,
		"evotes": 29
	},
	"NC": {
		"polls": {
			"candidates": {
				"0": {
					"fname": " ",
					"lname": "Other/No Answer",
					"party": ""
				},
				"1746": {
					"fname": "Hillary",
					"lname": "Clinton",
					"party": "D"
				},
				"8639": {
					"fname": "Donald",
					"lname": "Trump",
					"party": "R"
				},
				"31708": {
					"fname": "Gary",
					"lname": "Johnson",
					"party": "LB"
				}
			},
			"topics": {
				"SEX": {
					"numrespondents": 4297,
					"qid": 279,
					"question": "Gender",
					"answers": [
						{
							"answer": "Male",
							"pct": 46,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 39,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 56,
									"leader": true
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						},
						{
							"answer": "Female",
							"pct": 54,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 53,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 45,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						}
					]
				},
				"AGE": {
					"numrespondents": 4297,
					"qid": 159,
					"question": "Age",
					"answers": [
						{
							"answer": "18-29",
							"pct": 18,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 58,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 35,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 6,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "30-44",
							"pct": 26,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 50,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 46,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "45-64",
							"pct": 38,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 44,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 55,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "65 and older",
							"pct": 18,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 37,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 60,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						}
					]
				},
				"RACE": {
					"numrespondents": 4297,
					"qid": 260,
					"question": "Race",
					"answers": [
						{
							"answer": "White",
							"pct": 70,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 33,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 63,
									"leader": true
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "Black",
							"pct": 20,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 90,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 8,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino",
							"pct": 5,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 59,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 39,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "Asian",
							"pct": 1,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Other race",
							"pct": 3,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 57,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 40,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						}
					]
				},
				"RACE2B": {
					"numrespondents": 4297,
					"qid": 3423,
					"question": "Race",
					"answers": [
						{
							"answer": "White",
							"pct": 70,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 33,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 63,
									"leader": true
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-white",
							"pct": 30,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 80,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 18,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						}
					]
				},
				"SEXBYRACE": {
					"numrespondents": 4297,
					"qid": 1602,
					"question": "Race and gender",
					"answers": [
						{
							"answer": "White men",
							"pct": 33,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 27,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 68,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "White women",
							"pct": 37,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 38,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 60,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Black men",
							"pct": 9,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 82,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 14,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Black women",
							"pct": 11,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 95,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 3,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino men",
							"pct": 2,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino women",
							"pct": 3,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 71,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 27,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Others",
							"pct": 4,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 59,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 39,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"EDUC12R": {
					"numrespondents": 4297,
					"qid": 2500,
					"question": "Education",
					"answers": [
						{
							"answer": "High school or less",
							"pct": 18,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 45,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 53,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Some college",
							"pct": 32,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 43,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 52,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "College graduate",
							"pct": 33,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 48,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 50,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Postgraduate",
							"pct": 17,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 53,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 44,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCCOLL": {
					"numrespondents": 4297,
					"qid": 1951,
					"question": "Are you a college graduate?",
					"answers": [
						{
							"answer": "Yes",
							"pct": 50,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 50,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 48,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "No",
							"pct": 50,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 43,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 52,
									"leader": true
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCWHITE": {
					"numrespondents": 4297,
					"qid": 1974,
					"question": "Education and race",
					"answers": [
						{
							"answer": "White college graduates",
							"pct": 37,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 40,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 58,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Whites no degree",
							"pct": 33,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 25,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 69,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites college grads",
							"pct": 13,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 80,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 17,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites no degree",
							"pct": 17,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 79,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 19,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCWHITEBYSEX": {
					"numrespondents": 4297,
					"qid": 3790,
					"question": "Education among whites by sex",
					"answers": [
						{
							"answer": "White college-grad women",
							"pct": 19,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 46,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 52,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "White non-college women",
							"pct": 18,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 29,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 67,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "White college-grad men",
							"pct": 18,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 33,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 65,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "White non-college men",
							"pct": 16,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 21,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 71,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 7,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites",
							"pct": 30,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 80,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 18,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"INCOME16GEN": {
					"numrespondents": 4297,
					"qid": 3728,
					"question": "Income",
					"answers": [
						{
							"answer": "Under $30,000",
							"pct": 19,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 57,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 36,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "$30K-$49,999",
							"pct": 19,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 56,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 40,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$50K-$99,999",
							"pct": 32,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 49,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 49,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "$100K-$199,999",
							"pct": 23,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 37,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 62,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$200K-$249,999",
							"pct": 4,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$250,000 or more",
							"pct": 3,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"INCOME3": {
					"numrespondents": 4297,
					"qid": 1948,
					"question": "Income",
					"answers": [
						{
							"answer": "Under $50K",
							"pct": 38,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 56,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 38,
									"leader": false
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						},
						{
							"answer": "$50K-$100K",
							"pct": 32,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 49,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 49,
									"leader": true
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "$100K or more",
							"pct": 30,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 39,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 60,
									"leader": true
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						}
					]
				},
				"PARTY": {
					"numrespondents": 4297,
					"qid": 248,
					"question": "Party ID",
					"answers": [
						{
							"answer": "Democrats",
							"pct": 36,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 91,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 8,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Republicans",
							"pct": 31,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 4,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 94,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Independents",
							"pct": 33,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 39,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 54,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 7,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"PARTYGENDER": {
					"numrespondents": 4297,
					"qid": 3784,
					"question": "Party by gender",
					"answers": [
						{
							"answer": "Democratic men",
							"pct": 12,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 89,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 10,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Democratic women",
							"pct": 23,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 92,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 7,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Republican men",
							"pct": 16,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 5,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 94,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Republican women",
							"pct": 16,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 4,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 95,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Independent men",
							"pct": 18,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 34,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 56,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 9,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Independent women",
							"pct": 15,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 44,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 51,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"PHIL3": {
					"numrespondents": 4297,
					"qid": 251,
					"question": "Ideology",
					"answers": [
						{
							"answer": "Liberal",
							"pct": 23,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 87,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 8,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Moderate",
							"pct": 35,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 58,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 37,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Conservative",
							"pct": 43,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 15,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 83,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						}
					]
				}
			}
		},
		"electiondate": "20161108",
		"evotes": 15
	},
	"NM": {
		"polls": {
			"candidates": {
				"0": {
					"fname": " ",
					"lname": "Other/No Answer",
					"party": ""
				},
				"895": {
					"fname": "Jill",
					"lname": "Stein",
					"party": "GR"
				},
				"1746": {
					"fname": "Hillary",
					"lname": "Clinton",
					"party": "D"
				},
				"8639": {
					"fname": "Donald",
					"lname": "Trump",
					"party": "R"
				},
				"31708": {
					"fname": "Gary",
					"lname": "Johnson",
					"party": "LB"
				}
			},
			"topics": {
				"SEX": {
					"numrespondents": 2014,
					"qid": 279,
					"question": "Gender",
					"answers": [
						{
							"answer": "Male",
							"pct": 47,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 42,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 44,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 12,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Female",
							"pct": 53,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 54,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 36,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 7,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						}
					]
				},
				"AGE": {
					"numrespondents": 2014,
					"qid": 159,
					"question": "Age",
					"answers": [
						{
							"answer": "18-29",
							"pct": 19,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 52,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 27,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 17,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "30-44",
							"pct": 26,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 48,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 38,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 11,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "45-64",
							"pct": 36,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 45,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 46,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 7,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "65 and older",
							"pct": 19,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 53,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 42,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"RACE": {
					"numrespondents": 2014,
					"qid": 260,
					"question": "Race",
					"answers": [
						{
							"answer": "White",
							"pct": 49,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 42,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 47,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 8,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Black",
							"pct": 1,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino",
							"pct": 40,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 54,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 33,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 11,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Asian",
							"pct": 1,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Other race",
							"pct": 9,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 53,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 33,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 12,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						}
					]
				},
				"RACE2B": {
					"numrespondents": 2014,
					"qid": 3423,
					"question": "Race",
					"answers": [
						{
							"answer": "White",
							"pct": 49,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 42,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 47,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 8,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-white",
							"pct": 51,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 55,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 32,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 11,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						}
					]
				},
				"SEXBYRACE": {
					"numrespondents": 2014,
					"qid": 1602,
					"question": "Race and gender",
					"answers": [
						{
							"answer": "White men",
							"pct": 24,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 38,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 48,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 10,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "White women",
							"pct": 25,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 45,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 46,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 6,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "Black men",
							"pct": 1,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Black women",
							"pct": 0,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino men",
							"pct": 17,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 45,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 39,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 14,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino women",
							"pct": 23,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 61,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 28,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 8,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Others",
							"pct": 10,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 54,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 32,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 12,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						}
					]
				},
				"EDUC12R": {
					"numrespondents": 2014,
					"qid": 2500,
					"question": "Education",
					"answers": [
						{
							"answer": "High school or less",
							"pct": 17,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 49,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 42,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 8,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Some college",
							"pct": 34,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 43,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 43,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 11,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "College graduate",
							"pct": 28,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 47,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 41,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 9,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Postgraduate",
							"pct": 21,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 57,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 32,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 8,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCCOLL": {
					"numrespondents": 2014,
					"qid": 1951,
					"question": "Are you a college graduate?",
					"answers": [
						{
							"answer": "Yes",
							"pct": 49,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 51,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 37,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 9,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "No",
							"pct": 51,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 45,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 43,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 10,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCWHITE": {
					"numrespondents": 2014,
					"qid": 1974,
					"question": "Education and race",
					"answers": [
						{
							"answer": "White college graduates",
							"pct": 29,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 51,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 38,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 8,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Whites no degree",
							"pct": 21,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 30,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 60,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 8,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites college grads",
							"pct": 20,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 52,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 36,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 10,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites no degree",
							"pct": 31,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 56,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 30,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 11,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCWHITEBYSEX": {
					"numrespondents": 2014,
					"qid": 3790,
					"question": "Education among whites by sex",
					"answers": [
						{
							"answer": "White college-grad women",
							"pct": 14,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 55,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 37,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "White non-college women",
							"pct": 11,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 34,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 57,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 7,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "White college-grad men",
							"pct": 15,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 47,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 38,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 10,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "White non-college men",
							"pct": 10,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 25,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 64,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 9,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites",
							"pct": 50,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 54,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 33,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 11,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						}
					]
				},
				"INCOME16GEN": {
					"numrespondents": 2014,
					"qid": 3728,
					"question": "Income",
					"answers": [
						{
							"answer": "Under $30,000",
							"pct": 25,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 54,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 30,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 14,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "$30K-$49,999",
							"pct": 20,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 50,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 38,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 10,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$50K-$99,999",
							"pct": 30,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 44,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 46,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 9,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$100K-$199,999",
							"pct": 21,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 47,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 43,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 6,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "$200K-$249,999",
							"pct": 2,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$250,000 or more",
							"pct": 2,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"INCOME3": {
					"numrespondents": 2014,
					"qid": 1948,
					"question": "Income",
					"answers": [
						{
							"answer": "Under $50K",
							"pct": 45,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 52,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 33,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 12,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "$50K-$100K",
							"pct": 30,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 44,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 46,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 9,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$100K or more",
							"pct": 25,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 47,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 43,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 6,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						}
					]
				},
				"PARTY": {
					"numrespondents": 2014,
					"qid": 248,
					"question": "Party ID",
					"answers": [
						{
							"answer": "Democrats",
							"pct": 41,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 85,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 8,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 6,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Republicans",
							"pct": 27,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 6,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 86,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 6,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Independents",
							"pct": 32,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 37,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 42,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 16,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						}
					]
				},
				"PARTYGENDER": {
					"numrespondents": 2014,
					"qid": 3784,
					"question": "Party by gender",
					"answers": [
						{
							"answer": "Democratic men",
							"pct": 16,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 82,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 10,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 7,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Democratic women",
							"pct": 25,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 88,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 6,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Republican men",
							"pct": 12,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 6,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 84,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 8,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Republican women",
							"pct": 15,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 6,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 88,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Independent men",
							"pct": 19,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 30,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 47,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 18,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "Independent women",
							"pct": 13,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 46,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 34,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 14,
									"leader": false
								},
								{
									"id": 895,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						}
					]
				},
				"PHIL3": {
					"numrespondents": 2014,
					"qid": 251,
					"question": "Ideology",
					"answers": [
						{
							"answer": "Liberal",
							"pct": 29,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 82,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 9,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 6,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Moderate",
							"pct": 38,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 51,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 33,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 14,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Conservative",
							"pct": 34,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 15,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 75,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 7,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						}
					]
				}
			}
		},
		"electiondate": "20161108",
		"lts": 1478706784000,
		"evotes": 5
	},
	"OH": {
		"polls": {
			"candidates": {
				"0": {
					"fname": " ",
					"lname": "Other/No Answer",
					"party": ""
				},
				"895": {
					"fname": "Jill",
					"lname": "Stein",
					"party": "GR"
				},
				"1746": {
					"fname": "Hillary",
					"lname": "Clinton",
					"party": "D"
				},
				"8639": {
					"fname": "Donald",
					"lname": "Trump",
					"party": "R"
				},
				"31708": {
					"fname": "Gary",
					"lname": "Johnson",
					"party": "LB"
				}
			},
			"topics": {
				"SEX": {
					"numrespondents": 3397,
					"qid": 279,
					"question": "Gender",
					"answers": [
						{
							"answer": "Male",
							"pct": 47,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 37,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 58,
									"leader": true
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						},
						{
							"answer": "Female",
							"pct": 53,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 50,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 46,
									"leader": false
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						}
					]
				},
				"AGE": {
					"numrespondents": 3397,
					"qid": 159,
					"question": "Age",
					"answers": [
						{
							"answer": "18-29",
							"pct": 18,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 50,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 41,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 6,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "30-44",
							"pct": 24,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 43,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 51,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "45-64",
							"pct": 39,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 41,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 55,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "65 and older",
							"pct": 19,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 44,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 55,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 0,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						}
					]
				},
				"RACE": {
					"numrespondents": 3397,
					"qid": 260,
					"question": "Race",
					"answers": [
						{
							"answer": "White",
							"pct": 80,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 34,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 61,
									"leader": true
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						},
						{
							"answer": "Black",
							"pct": 14,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 89,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 8,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino",
							"pct": 3,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 68,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 28,
									"leader": false
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "Asian",
							"pct": 1,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Other race",
							"pct": 2,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"RACE2B": {
					"numrespondents": 3397,
					"qid": 3423,
					"question": "Race",
					"answers": [
						{
							"answer": "White",
							"pct": 80,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 34,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 61,
									"leader": true
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-white",
							"pct": 20,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 81,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 15,
									"leader": false
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						}
					]
				},
				"SEXBYRACE": {
					"numrespondents": 3397,
					"qid": 1602,
					"question": "Race and gender",
					"answers": [
						{
							"answer": "White men",
							"pct": 38,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 27,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 67,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "White women",
							"pct": 42,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 41,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 55,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Black men",
							"pct": 6,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 85,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 12,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Black women",
							"pct": 8,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 93,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 4,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino men",
							"pct": 1,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino women",
							"pct": 2,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Others",
							"pct": 3,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 56,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 34,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 7,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						}
					]
				},
				"EDUC12R": {
					"numrespondents": 3397,
					"qid": 2500,
					"question": "Education",
					"answers": [
						{
							"answer": "High school or less",
							"pct": 21,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 48,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 48,
									"leader": true
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "Some college",
							"pct": 35,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 43,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 53,
									"leader": true
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "College graduate",
							"pct": 28,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 40,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 54,
									"leader": true
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						},
						{
							"answer": "Postgraduate",
							"pct": 16,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 47,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 48,
									"leader": true
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCCOLL": {
					"numrespondents": 3397,
					"qid": 1951,
					"question": "Are you a college graduate?",
					"answers": [
						{
							"answer": "Yes",
							"pct": 44,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 43,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 52,
									"leader": true
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						},
						{
							"answer": "No",
							"pct": 56,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 45,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 51,
									"leader": true
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCWHITE": {
					"numrespondents": 3397,
					"qid": 1974,
					"question": "Education and race",
					"answers": [
						{
							"answer": "White college graduates",
							"pct": 37,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 35,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 59,
									"leader": true
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						},
						{
							"answer": "Whites no degree",
							"pct": 43,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 34,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 62,
									"leader": true
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites college grads",
							"pct": 8,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 78,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 18,
									"leader": false
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites no degree",
							"pct": 12,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 83,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 12,
									"leader": false
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCWHITEBYSEX": {
					"numrespondents": 3397,
					"qid": 3790,
					"question": "Education among whites by sex",
					"answers": [
						{
							"answer": "White college-grad women",
							"pct": 20,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 41,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 55,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "White non-college women",
							"pct": 22,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 41,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 55,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "White college-grad men",
							"pct": 17,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 29,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 63,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "White non-college men",
							"pct": 21,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 26,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 70,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites",
							"pct": 20,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 81,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 14,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						}
					]
				},
				"INCOME16GEN": {
					"numrespondents": 3397,
					"qid": 3728,
					"question": "Income",
					"answers": [
						{
							"answer": "Under $30,000",
							"pct": 17,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 59,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 34,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "$30K-$49,999",
							"pct": 22,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 47,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 48,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$50K-$99,999",
							"pct": 33,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 42,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 54,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$100K-$199,999",
							"pct": 22,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 39,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 58,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "$200K-$249,999",
							"pct": 3,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$250,000 or more",
							"pct": 4,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"INCOME3": {
					"numrespondents": 3397,
					"qid": 1948,
					"question": "Income",
					"answers": [
						{
							"answer": "Under $50K",
							"pct": 38,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 52,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 42,
									"leader": false
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						},
						{
							"answer": "$50K-$100K",
							"pct": 33,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 42,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 54,
									"leader": true
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "$100K or more",
							"pct": 29,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 38,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 59,
									"leader": true
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						}
					]
				},
				"PARTY": {
					"numrespondents": 3397,
					"qid": 248,
					"question": "Party ID",
					"answers": [
						{
							"answer": "Democrats",
							"pct": 34,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 87,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 12,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Republicans",
							"pct": 37,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 8,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 89,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Independents",
							"pct": 29,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 38,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 51,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 8,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						}
					]
				},
				"PARTYGENDER": {
					"numrespondents": 3397,
					"qid": 3784,
					"question": "Party by gender",
					"answers": [
						{
							"answer": "Democratic men",
							"pct": 13,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 83,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 15,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Democratic women",
							"pct": 21,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 90,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 10,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Republican men",
							"pct": 18,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 8,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 89,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Republican women",
							"pct": 19,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 8,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 90,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Independent men",
							"pct": 16,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 31,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 59,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 7,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Independent women",
							"pct": 13,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 47,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 42,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 8,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						}
					]
				},
				"PHIL3": {
					"numrespondents": 3397,
					"qid": 251,
					"question": "Ideology",
					"answers": [
						{
							"answer": "Liberal",
							"pct": 21,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 82,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 13,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Moderate",
							"pct": 41,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 50,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 43,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Conservative",
							"pct": 38,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 16,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 81,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						}
					]
				}
			}
		},
		"electiondate": "20161108",
		"lts": 1478796034000,
		"evotes": 18
	},
	"OR": {
		"polls": {
			"candidates": {
				"0": {
					"fname": " ",
					"lname": "Other/No Answer",
					"party": ""
				},
				"895": {
					"fname": "Jill",
					"lname": "Stein",
					"party": "GR"
				},
				"1746": {
					"fname": "Hillary",
					"lname": "Clinton",
					"party": "D"
				},
				"8639": {
					"fname": "Donald",
					"lname": "Trump",
					"party": "R"
				},
				"31708": {
					"fname": "Gary",
					"lname": "Johnson",
					"party": "LB"
				}
			},
			"topics": {
				"SEX": {
					"numrespondents": 1128,
					"qid": 279,
					"question": "Gender",
					"answers": [
						{
							"answer": "Male",
							"pct": 49,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 46,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 44,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "Female",
							"pct": 51,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 55,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 35,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						}
					]
				},
				"AGE": {
					"numrespondents": 1128,
					"qid": 159,
					"question": "Age",
					"answers": [
						{
							"answer": "18-29",
							"pct": 15,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "30-44",
							"pct": 25,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 51,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 40,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 4,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "45-64",
							"pct": 37,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 50,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 42,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "65 and older",
							"pct": 24,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 46,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 45,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						}
					]
				},
				"RACE": {
					"numrespondents": 1128,
					"qid": 260,
					"question": "Race",
					"answers": [
						{
							"answer": "White",
							"pct": 82,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 49,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 42,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "Black",
							"pct": 1,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino",
							"pct": 9,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Asian",
							"pct": 4,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Other race",
							"pct": 4,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"RACE2B": {
					"numrespondents": 1128,
					"qid": 3423,
					"question": "Race",
					"answers": [
						{
							"answer": "White",
							"pct": 82,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 49,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 42,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-white",
							"pct": 18,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 62,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 24,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 5,
									"leader": false
								},
								{
									"id": 0,
									"pct": 7,
									"leader": false
								}
							]
						}
					]
				},
				"SEXBYRACE": {
					"numrespondents": 1128,
					"qid": 1602,
					"question": "Race and gender",
					"answers": [
						{
							"answer": "White men",
							"pct": 41,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 44,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 47,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "White women",
							"pct": 42,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 55,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 38,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Black men",
							"pct": 0,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Black women",
							"pct": 1,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino men",
							"pct": 4,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino women",
							"pct": 5,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Others",
							"pct": 8,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"EDUC12R": {
					"numrespondents": 1128,
					"qid": 2500,
					"question": "Education",
					"answers": [
						{
							"answer": "High school or less",
							"pct": 17,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 37,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 57,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "Some college",
							"pct": 34,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 46,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 46,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "College graduate",
							"pct": 29,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 54,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 32,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 7,
									"leader": false
								},
								{
									"id": 895,
									"pct": 4,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "Postgraduate",
							"pct": 20,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 65,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 24,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCCOLL": {
					"numrespondents": 1128,
					"qid": 1951,
					"question": "Are you a college graduate?",
					"answers": [
						{
							"answer": "Yes",
							"pct": 50,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 59,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 29,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "No",
							"pct": 50,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 43,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 50,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCWHITE": {
					"numrespondents": 1128,
					"qid": 1974,
					"question": "Education and race",
					"answers": [
						{
							"answer": "White college graduates",
							"pct": 42,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 59,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 30,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 6,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "Whites no degree",
							"pct": 40,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 38,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 55,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites college grads",
							"pct": 7,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites no degree",
							"pct": 10,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCWHITEBYSEX": {
					"numrespondents": 1128,
					"qid": 3790,
					"question": "Education among whites by sex",
					"answers": [
						{
							"answer": "White college-grad women",
							"pct": 22,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 62,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 30,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 6,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "White non-college women",
							"pct": 19,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 45,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 47,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "White college-grad men",
							"pct": 20,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 56,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 31,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 6,
									"leader": false
								},
								{
									"id": 895,
									"pct": 4,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "White non-college men",
							"pct": 21,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 32,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 62,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites",
							"pct": 18,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 62,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 24,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 5,
									"leader": false
								},
								{
									"id": 0,
									"pct": 7,
									"leader": false
								}
							]
						}
					]
				},
				"INCOME16GEN": {
					"numrespondents": 1128,
					"qid": 3728,
					"question": "Income",
					"answers": [
						{
							"answer": "Under $30,000",
							"pct": 20,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 45,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 40,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 6,
									"leader": false
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						},
						{
							"answer": "$30K-$49,999",
							"pct": 20,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 47,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 40,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						},
						{
							"answer": "$50K-$99,999",
							"pct": 33,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 48,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 44,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 6,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "$100K-$199,999",
							"pct": 22,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 56,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 35,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 7,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "$200K-$249,999",
							"pct": 3,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$250,000 or more",
							"pct": 3,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"INCOME3": {
					"numrespondents": 1128,
					"qid": 1948,
					"question": "Income",
					"answers": [
						{
							"answer": "Under $50K",
							"pct": 40,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 46,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 40,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 4,
									"leader": false
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						},
						{
							"answer": "$50K-$100K",
							"pct": 33,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 48,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 44,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 6,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "$100K or more",
							"pct": 28,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 55,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 36,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 6,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						}
					]
				},
				"PARTY": {
					"numrespondents": 1128,
					"qid": 248,
					"question": "Party ID",
					"answers": [
						{
							"answer": "Democrats",
							"pct": 33,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 92,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 4,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "Republicans",
							"pct": 23,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 7,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 87,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Independents",
							"pct": 44,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 43,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 41,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 7,
									"leader": false
								},
								{
									"id": 895,
									"pct": 4,
									"leader": false
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						}
					]
				},
				"PARTYGENDER": {
					"numrespondents": 1128,
					"qid": 3784,
					"question": "Party by gender",
					"answers": [
						{
							"answer": "Democratic men",
							"pct": 14,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 91,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 5,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Democratic women",
							"pct": 19,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 93,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 4,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Republican men",
							"pct": 11,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 9,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 86,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Republican women",
							"pct": 11,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 6,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 88,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Independent men",
							"pct": 24,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 38,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 45,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 7,
									"leader": false
								},
								{
									"id": 895,
									"pct": 5,
									"leader": false
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						},
						{
							"answer": "Independent women",
							"pct": 20,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 48,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 35,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 7,
									"leader": false
								},
								{
									"id": 895,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": 7,
									"leader": false
								}
							]
						}
					]
				},
				"PHIL3": {
					"numrespondents": 1128,
					"qid": 251,
					"question": "Ideology",
					"answers": [
						{
							"answer": "Liberal",
							"pct": 34,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 89,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 5,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "Moderate",
							"pct": 36,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 52,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 34,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 7,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						},
						{
							"answer": "Conservative",
							"pct": 30,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 7,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 85,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 7,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						}
					]
				}
			}
		},
		"electiondate": "20161108",
		"lts": 1478868332000,
		"evotes": 7
	},
	"PA": {
		"polls": {
			"candidates": {
				"0": {
					"fname": " ",
					"lname": "Other/No Answer",
					"party": ""
				},
				"895": {
					"fname": "Jill",
					"lname": "Stein",
					"party": "GR"
				},
				"1746": {
					"fname": "Hillary",
					"lname": "Clinton",
					"party": "D"
				},
				"8639": {
					"fname": "Donald",
					"lname": "Trump",
					"party": "R"
				},
				"31708": {
					"fname": "Gary",
					"lname": "Johnson",
					"party": "LB"
				}
			},
			"topics": {
				"SEX": {
					"numrespondents": 2935,
					"qid": 279,
					"question": "Gender",
					"answers": [
						{
							"answer": "Male",
							"pct": 47,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 40,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 57,
									"leader": true
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "Female",
							"pct": 53,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 55,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 42,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						}
					]
				},
				"AGE": {
					"numrespondents": 2935,
					"qid": 159,
					"question": "Age",
					"answers": [
						{
							"answer": "18-29",
							"pct": 16,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 52,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 43,
									"leader": false
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						},
						{
							"answer": "30-44",
							"pct": 24,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 53,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 42,
									"leader": false
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						},
						{
							"answer": "45-64",
							"pct": 38,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 45,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 52,
									"leader": true
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "65 and older",
							"pct": 21,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 44,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 54,
									"leader": true
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						}
					]
				},
				"RACE": {
					"numrespondents": 2935,
					"qid": 260,
					"question": "Race",
					"answers": [
						{
							"answer": "White",
							"pct": 81,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 40,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 56,
									"leader": true
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "Black",
							"pct": 10,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 92,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 7,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino",
							"pct": 6,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 74,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 22,
									"leader": false
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "Asian",
							"pct": 1,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Other race",
							"pct": 2,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"RACE2B": {
					"numrespondents": 2935,
					"qid": 3423,
					"question": "Race",
					"answers": [
						{
							"answer": "White",
							"pct": 81,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 40,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 56,
									"leader": true
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-white",
							"pct": 19,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 81,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 16,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						}
					]
				},
				"SEXBYRACE": {
					"numrespondents": 2935,
					"qid": 1602,
					"question": "Race and gender",
					"answers": [
						{
							"answer": "White men",
							"pct": 38,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 32,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 64,
									"leader": true
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "White women",
							"pct": 43,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 47,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 50,
									"leader": true
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "Black men",
							"pct": 4,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 83,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 14,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "Black women",
							"pct": 6,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 99,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino men",
							"pct": 3,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino women",
							"pct": 3,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 82,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 14,
									"leader": false
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "Others",
							"pct": 3,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"EDUC12R": {
					"numrespondents": 2935,
					"qid": 2500,
					"question": "Education",
					"answers": [
						{
							"answer": "High school or less",
							"pct": 22,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 43,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 56,
									"leader": true
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Some college",
							"pct": 30,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 46,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 49,
									"leader": true
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						},
						{
							"answer": "College graduate",
							"pct": 29,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 46,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 50,
									"leader": true
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "Postgraduate",
							"pct": 19,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 59,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 37,
									"leader": false
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCCOLL": {
					"numrespondents": 2935,
					"qid": 1951,
					"question": "Are you a college graduate?",
					"answers": [
						{
							"answer": "Yes",
							"pct": 48,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 52,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 45,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "No",
							"pct": 52,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 45,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 52,
									"leader": true
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCWHITE": {
					"numrespondents": 2935,
					"qid": 1974,
					"question": "Education and race",
					"answers": [
						{
							"answer": "White college graduates",
							"pct": 41,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 48,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 48,
									"leader": true
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "Whites no degree",
							"pct": 40,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 32,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 64,
									"leader": true
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites college grads",
							"pct": 7,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 75,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 24,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites no degree",
							"pct": 12,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 86,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 10,
									"leader": false
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCWHITEBYSEX": {
					"numrespondents": 2935,
					"qid": 3790,
					"question": "Education among whites by sex",
					"answers": [
						{
							"answer": "White college-grad women",
							"pct": 22,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 55,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 41,
									"leader": false
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "White non-college women",
							"pct": 21,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 38,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 58,
									"leader": true
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "White college-grad men",
							"pct": 18,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 39,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 56,
									"leader": true
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						},
						{
							"answer": "White non-college men",
							"pct": 19,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 26,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 71,
									"leader": true
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites",
							"pct": 19,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 82,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 15,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						}
					]
				},
				"INCOME16GEN": {
					"numrespondents": 2935,
					"qid": 3728,
					"question": "Income",
					"answers": [
						{
							"answer": "Under $30,000",
							"pct": 16,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 56,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 39,
									"leader": false
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						},
						{
							"answer": "$30K-$49,999",
							"pct": 22,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 53,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 44,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "$50K-$99,999",
							"pct": 31,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 41,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 55,
									"leader": true
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "$100K-$199,999",
							"pct": 21,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 46,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 51,
									"leader": true
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "$200K-$249,999",
							"pct": 4,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$250,000 or more",
							"pct": 6,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"INCOME3": {
					"numrespondents": 2935,
					"qid": 1948,
					"question": "Income",
					"answers": [
						{
							"answer": "Under $50K",
							"pct": 38,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 54,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 42,
									"leader": false
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "$50K-$100K",
							"pct": 31,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 41,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 55,
									"leader": true
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "$100K or more",
							"pct": 31,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 45,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 52,
									"leader": true
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						}
					]
				},
				"PARTY": {
					"numrespondents": 2935,
					"qid": 248,
					"question": "Party ID",
					"answers": [
						{
							"answer": "Democrats",
							"pct": 42,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 87,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 11,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Republicans",
							"pct": 39,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 9,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 89,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Independents",
							"pct": 20,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 41,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 48,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 7,
									"leader": false
								},
								{
									"id": 895,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						}
					]
				},
				"PARTYGENDER": {
					"numrespondents": 2935,
					"qid": 3784,
					"question": "Party by gender",
					"answers": [
						{
							"answer": "Democratic men",
							"pct": 16,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 83,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 15,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Democratic women",
							"pct": 26,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 89,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 9,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Republican men",
							"pct": 19,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 7,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 91,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Republican women",
							"pct": 19,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 11,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 87,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Independent men",
							"pct": 10,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 33,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 56,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 6,
									"leader": false
								},
								{
									"id": 895,
									"pct": 4,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Independent women",
							"pct": 9,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 51,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 40,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 7,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"PHIL3": {
					"numrespondents": 2935,
					"qid": 251,
					"question": "Ideology",
					"answers": [
						{
							"answer": "Liberal",
							"pct": 27,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 85,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 12,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "Moderate",
							"pct": 40,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 53,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 43,
									"leader": false
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "Conservative",
							"pct": 33,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 12,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 85,
									"leader": true
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						}
					]
				}
			}
		},
		"electiondate": "20161108",
		"lts": 1478726460000,
		"evotes": 20
	},
	"SC": {
		"polls": {
			"candidates": {
				"0": {
					"fname": " ",
					"lname": "Other/No Answer",
					"party": ""
				},
				"895": {
					"fname": "Jill",
					"lname": "Stein",
					"party": "GR"
				},
				"1746": {
					"fname": "Hillary",
					"lname": "Clinton",
					"party": "D"
				},
				"8639": {
					"fname": "Donald",
					"lname": "Trump",
					"party": "R"
				},
				"31708": {
					"fname": "Gary",
					"lname": "Johnson",
					"party": "LB"
				}
			},
			"topics": {
				"SEX": {
					"numrespondents": 895,
					"qid": 279,
					"question": "Gender",
					"answers": [
						{
							"answer": "Male",
							"pct": 46,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 35,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 59,
									"leader": true
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						},
						{
							"answer": "Female",
							"pct": 54,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 45,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 51,
									"leader": true
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						}
					]
				},
				"AGE": {
					"numrespondents": 895,
					"qid": 159,
					"question": "Age",
					"answers": [
						{
							"answer": "18-29",
							"pct": 18,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 43,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 43,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 8,
									"leader": false
								},
								{
									"id": 895,
									"pct": 4,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "30-44",
							"pct": 30,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 44,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 51,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "45-64",
							"pct": 38,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 37,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 62,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "65 and older",
							"pct": 13,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 39,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 58,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"RACE": {
					"numrespondents": 895,
					"qid": 260,
					"question": "Race",
					"answers": [
						{
							"answer": "White",
							"pct": 74,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 24,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 70,
									"leader": true
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						},
						{
							"answer": "Black",
							"pct": 19,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 94,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 4,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino",
							"pct": 4,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Asian",
							"pct": 1,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Other race",
							"pct": 2,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"RACE2B": {
					"numrespondents": 895,
					"qid": 3423,
					"question": "Race",
					"answers": [
						{
							"answer": "White",
							"pct": 74,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 24,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 70,
									"leader": true
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-white",
							"pct": 26,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 86,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 12,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						}
					]
				},
				"SEXBYRACE": {
					"numrespondents": 895,
					"qid": 1602,
					"question": "Race and gender",
					"answers": [
						{
							"answer": "White men",
							"pct": 34,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 18,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 76,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "White women",
							"pct": 40,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 30,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 64,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "Black men",
							"pct": 8,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Black women",
							"pct": 11,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino men",
							"pct": 3,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino women",
							"pct": 2,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Others",
							"pct": 3,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"EDUC12R": {
					"numrespondents": 895,
					"qid": 2500,
					"question": "Education",
					"answers": [
						{
							"answer": "High school or less",
							"pct": 17,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 38,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 58,
									"leader": true
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "Some college",
							"pct": 36,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 36,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 58,
									"leader": true
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						},
						{
							"answer": "College graduate",
							"pct": 32,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 43,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 52,
									"leader": true
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						},
						{
							"answer": "Postgraduate",
							"pct": 16,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 43,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 54,
									"leader": true
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCCOLL": {
					"numrespondents": 895,
					"qid": 1951,
					"question": "Are you a college graduate?",
					"answers": [
						{
							"answer": "Yes",
							"pct": 48,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 43,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 52,
									"leader": true
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						},
						{
							"answer": "No",
							"pct": 52,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 36,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 58,
									"leader": true
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCWHITE": {
					"numrespondents": 895,
					"qid": 1974,
					"question": "Education and race",
					"answers": [
						{
							"answer": "White college graduates",
							"pct": 37,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 31,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 64,
									"leader": true
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						},
						{
							"answer": "Whites no degree",
							"pct": 39,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 18,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 75,
									"leader": true
								},
								{
									"id": 0,
									"pct": 7,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites college grads",
							"pct": 11,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites no degree",
							"pct": 14,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 86,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 13,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCWHITEBYSEX": {
					"numrespondents": 895,
					"qid": 3790,
					"question": "Education among whites by sex",
					"answers": [
						{
							"answer": "White college-grad women",
							"pct": 22,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 36,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 58,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "White non-college women",
							"pct": 19,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 23,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 72,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "White college-grad men",
							"pct": 15,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 24,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 72,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "White non-college men",
							"pct": 19,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 14,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 78,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 7,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites",
							"pct": 25,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 86,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 12,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"INCOME16GEN": {
					"numrespondents": 895,
					"qid": 3728,
					"question": "Income",
					"answers": [
						{
							"answer": "Under $30,000",
							"pct": 15,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$30K-$49,999",
							"pct": 20,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 45,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 49,
									"leader": true
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						},
						{
							"answer": "$50K-$99,999",
							"pct": 36,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 42,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 55,
									"leader": true
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "$100K-$199,999",
							"pct": 19,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 26,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 69,
									"leader": true
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						},
						{
							"answer": "$200K-$249,999",
							"pct": 6,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$250,000 or more",
							"pct": 4,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"INCOME3": {
					"numrespondents": 895,
					"qid": 1948,
					"question": "Income",
					"answers": [
						{
							"answer": "Under $50K",
							"pct": 34,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 48,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 47,
									"leader": false
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						},
						{
							"answer": "$50K-$100K",
							"pct": 36,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 42,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 55,
									"leader": true
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "$100K or more",
							"pct": 30,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 32,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 64,
									"leader": true
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						}
					]
				},
				"PARTY": {
					"numrespondents": 895,
					"qid": 248,
					"question": "Party ID",
					"answers": [
						{
							"answer": "Democrats",
							"pct": 27,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 93,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 4,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Republicans",
							"pct": 46,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 5,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 92,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Independents",
							"pct": 26,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 43,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 47,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 6,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						}
					]
				},
				"PARTYGENDER": {
					"numrespondents": 895,
					"qid": 3784,
					"question": "Party by gender",
					"answers": [
						{
							"answer": "Democratic men",
							"pct": 11,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Democratic women",
							"pct": 17,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 94,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 4,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Republican men",
							"pct": 21,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 5,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 93,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Republican women",
							"pct": 25,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 5,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 91,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "Independent men",
							"pct": 13,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 31,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 57,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 9,
									"leader": false
								},
								{
									"id": 895,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Independent women",
							"pct": 13,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 56,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 38,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						}
					]
				},
				"PHIL3": {
					"numrespondents": 895,
					"qid": 251,
					"question": "Ideology",
					"answers": [
						{
							"answer": "Liberal",
							"pct": 18,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 83,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 13,
									"leader": false
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "Moderate",
							"pct": 38,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 49,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 45,
									"leader": false
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						},
						{
							"answer": "Conservative",
							"pct": 44,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 12,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 83,
									"leader": true
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						}
					]
				}
			}
		},
		"electiondate": "20161108",
		"lts": 1478726725000,
		"evotes": 9
	},
	"TX": {
		"polls": {
			"candidates": {
				"0": {
					"fname": " ",
					"lname": "Other/No Answer",
					"party": ""
				},
				"895": {
					"fname": "Jill",
					"lname": "Stein",
					"party": "GR"
				},
				"1746": {
					"fname": "Hillary",
					"lname": "Clinton",
					"party": "D"
				},
				"8639": {
					"fname": "Donald",
					"lname": "Trump",
					"party": "R"
				},
				"31708": {
					"fname": "Gary",
					"lname": "Johnson",
					"party": "LB"
				}
			},
			"topics": {
				"SEX": {
					"numrespondents": 2827,
					"qid": 279,
					"question": "Gender",
					"answers": [
						{
							"answer": "Male",
							"pct": 46,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 37,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 58,
									"leader": true
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						},
						{
							"answer": "Female",
							"pct": 54,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 49,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 48,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						}
					]
				},
				"AGE": {
					"numrespondents": 2827,
					"qid": 159,
					"question": "Age",
					"answers": [
						{
							"answer": "18-29",
							"pct": 18,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 55,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 36,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 7,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "30-44",
							"pct": 29,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 46,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 48,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "45-64",
							"pct": 39,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 39,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 59,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "65 and older",
							"pct": 15,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 36,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 64,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 0,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"RACE": {
					"numrespondents": 2827,
					"qid": 260,
					"question": "Race",
					"answers": [
						{
							"answer": "White",
							"pct": 57,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 26,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 69,
									"leader": true
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						},
						{
							"answer": "Black",
							"pct": 11,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 85,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 11,
									"leader": false
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino",
							"pct": 24,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 61,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 34,
									"leader": false
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						},
						{
							"answer": "Asian",
							"pct": 5,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 73,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 27,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Other race",
							"pct": 3,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"RACE2B": {
					"numrespondents": 2827,
					"qid": 3423,
					"question": "Race",
					"answers": [
						{
							"answer": "White",
							"pct": 57,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 26,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 69,
									"leader": true
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-white",
							"pct": 43,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 67,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 29,
									"leader": false
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						}
					]
				},
				"SEXBYRACE": {
					"numrespondents": 2827,
					"qid": 1602,
					"question": "Race and gender",
					"answers": [
						{
							"answer": "White men",
							"pct": 27,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 23,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 72,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "White women",
							"pct": 30,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 29,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 66,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Black men",
							"pct": 4,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 79,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 14,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Black women",
							"pct": 6,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 88,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 9,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino men",
							"pct": 11,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 53,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 41,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino women",
							"pct": 13,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 69,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 28,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Others",
							"pct": 8,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 58,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 40,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"EDUC12R": {
					"numrespondents": 2827,
					"qid": 2500,
					"question": "Education",
					"answers": [
						{
							"answer": "High school or less",
							"pct": 17,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 49,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 49,
									"leader": true
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "Some college",
							"pct": 32,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 41,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 55,
									"leader": true
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "College graduate",
							"pct": 34,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 41,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 53,
									"leader": true
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						},
						{
							"answer": "Postgraduate",
							"pct": 17,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 48,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 48,
									"leader": true
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCCOLL": {
					"numrespondents": 2827,
					"qid": 1951,
					"question": "Are you a college graduate?",
					"answers": [
						{
							"answer": "Yes",
							"pct": 51,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 43,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 52,
									"leader": true
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						},
						{
							"answer": "No",
							"pct": 49,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 44,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 53,
									"leader": true
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCWHITE": {
					"numrespondents": 2827,
					"qid": 1974,
					"question": "Education and race",
					"answers": [
						{
							"answer": "White college graduates",
							"pct": 31,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 31,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 63,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Whites no degree",
							"pct": 26,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 21,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 76,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites college grads",
							"pct": 20,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 62,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 34,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites no degree",
							"pct": 23,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 71,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 25,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCWHITEBYSEX": {
					"numrespondents": 2827,
					"qid": 3790,
					"question": "Education among whites by sex",
					"answers": [
						{
							"answer": "White college-grad women",
							"pct": 16,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 35,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 59,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "White non-college women",
							"pct": 14,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 23,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 74,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "White college-grad men",
							"pct": 14,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 27,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 67,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "White non-college men",
							"pct": 12,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 19,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 78,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites",
							"pct": 43,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 67,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 29,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"INCOME16GEN": {
					"numrespondents": 2827,
					"qid": 3728,
					"question": "Income",
					"answers": [
						{
							"answer": "Under $30,000",
							"pct": 13,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 58,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 35,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$30K-$49,999",
							"pct": 17,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 45,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 52,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$50K-$99,999",
							"pct": 31,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 46,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 50,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$100K-$199,999",
							"pct": 26,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 45,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 49,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "$200K-$249,999",
							"pct": 4,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$250,000 or more",
							"pct": 9,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"INCOME3": {
					"numrespondents": 2827,
					"qid": 1948,
					"question": "Income",
					"answers": [
						{
							"answer": "Under $50K",
							"pct": 30,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 50,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 45,
									"leader": false
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						},
						{
							"answer": "$50K-$100K",
							"pct": 31,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 46,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 50,
									"leader": true
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "$100K or more",
							"pct": 39,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 41,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 53,
									"leader": true
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						}
					]
				},
				"PARTY": {
					"numrespondents": 2827,
					"qid": 248,
					"question": "Party ID",
					"answers": [
						{
							"answer": "Democrats",
							"pct": 29,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 93,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 5,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Republicans",
							"pct": 38,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 9,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 88,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Independents",
							"pct": 33,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 39,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 53,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 7,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"PARTYGENDER": {
					"numrespondents": 2827,
					"qid": 3784,
					"question": "Party by gender",
					"answers": [
						{
							"answer": "Democratic men",
							"pct": 11,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 91,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 7,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Democratic women",
							"pct": 18,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 94,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 4,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Republican men",
							"pct": 17,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 9,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 87,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Republican women",
							"pct": 21,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 9,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 89,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Independent men",
							"pct": 18,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 31,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 60,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 7,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Independent women",
							"pct": 15,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 48,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 44,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 6,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"PHIL3": {
					"numrespondents": 2827,
					"qid": 251,
					"question": "Ideology",
					"answers": [
						{
							"answer": "Liberal",
							"pct": 20,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 81,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 12,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Moderate",
							"pct": 36,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 55,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 39,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Conservative",
							"pct": 44,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 15,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 82,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						}
					]
				}
			}
		},
		"electiondate": "20161108",
		"lts": 1478706801000,
		"evotes": 38
	},
	"UT": {
		"polls": {
			"candidates": {
				"0": {
					"fname": " ",
					"lname": "Other/No Answer",
					"party": ""
				},
				"895": {
					"fname": "Jill",
					"lname": "Stein",
					"party": "GR"
				},
				"1746": {
					"fname": "Hillary",
					"lname": "Clinton",
					"party": "D"
				},
				"8639": {
					"fname": "Donald",
					"lname": "Trump",
					"party": "R"
				},
				"31708": {
					"fname": "Gary",
					"lname": "Johnson",
					"party": "LB"
				},
				"65775": {
					"fname": "Evan",
					"lname": "McMullin",
					"party": "I"
				}
			},
			"topics": {
				"SEX": {
					"numrespondents": 1203,
					"qid": 279,
					"question": "Gender",
					"answers": [
						{
							"answer": "Male",
							"pct": 49,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 25,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 50,
									"leader": true
								},
								{
									"id": 65775,
									"pct": 19,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Female",
							"pct": 51,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 34,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 39,
									"leader": true
								},
								{
									"id": 65775,
									"pct": 22,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						}
					]
				},
				"AGE": {
					"numrespondents": 1203,
					"qid": 159,
					"question": "Age",
					"answers": [
						{
							"answer": "18-29",
							"pct": 22,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 31,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 36,
									"leader": true
								},
								{
									"id": 65775,
									"pct": 25,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 6,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "30-44",
							"pct": 33,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 31,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 39,
									"leader": true
								},
								{
									"id": 65775,
									"pct": 23,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "45-64",
							"pct": 31,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 31,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 48,
									"leader": true
								},
								{
									"id": 65775,
									"pct": 18,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "65 and older",
							"pct": 14,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 21,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 62,
									"leader": true
								},
								{
									"id": 65775,
									"pct": 15,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						}
					]
				},
				"RACE": {
					"numrespondents": 1203,
					"qid": 260,
					"question": "Race",
					"answers": [
						{
							"answer": "White",
							"pct": 86,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 25,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 47,
									"leader": true
								},
								{
									"id": 65775,
									"pct": 22,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Black",
							"pct": 0,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 65775,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino",
							"pct": 9,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 63,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 24,
									"leader": false
								},
								{
									"id": 65775,
									"pct": 10,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "Asian",
							"pct": 1,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 65775,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Other race",
							"pct": 3,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 65775,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"RACE2B": {
					"numrespondents": 1203,
					"qid": 3423,
					"question": "Race",
					"answers": [
						{
							"answer": "White",
							"pct": 86,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 25,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 47,
									"leader": true
								},
								{
									"id": 65775,
									"pct": 22,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-white",
							"pct": 14,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 61,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 25,
									"leader": false
								},
								{
									"id": 65775,
									"pct": 9,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						}
					]
				},
				"SEXBYRACE": {
					"numrespondents": 1203,
					"qid": 1602,
					"question": "Race and gender",
					"answers": [
						{
							"answer": "White men",
							"pct": 42,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 21,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 53,
									"leader": true
								},
								{
									"id": 65775,
									"pct": 21,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "White women",
							"pct": 44,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 29,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 42,
									"leader": true
								},
								{
									"id": 65775,
									"pct": 24,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Black men",
							"pct": 0,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 65775,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Black women",
							"pct": 0,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 65775,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino men",
							"pct": 5,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 65775,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino women",
							"pct": 5,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 65775,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Others",
							"pct": 4,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 65775,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"EDUC12R": {
					"numrespondents": 1203,
					"qid": 2500,
					"question": "Education",
					"answers": [
						{
							"answer": "High school or less",
							"pct": 12,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 35,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 51,
									"leader": true
								},
								{
									"id": 65775,
									"pct": 8,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Some college",
							"pct": 36,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 27,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 51,
									"leader": true
								},
								{
									"id": 65775,
									"pct": 17,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "College graduate",
							"pct": 33,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 27,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 38,
									"leader": true
								},
								{
									"id": 65775,
									"pct": 29,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "Postgraduate",
							"pct": 18,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 39,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 35,
									"leader": false
								},
								{
									"id": 65775,
									"pct": 21,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCCOLL": {
					"numrespondents": 1203,
					"qid": 1951,
					"question": "Are you a college graduate?",
					"answers": [
						{
							"answer": "Yes",
							"pct": 51,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 31,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 37,
									"leader": true
								},
								{
									"id": 65775,
									"pct": 26,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "No",
							"pct": 49,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 29,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 51,
									"leader": true
								},
								{
									"id": 65775,
									"pct": 15,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCWHITE": {
					"numrespondents": 1203,
					"qid": 1974,
					"question": "Education and race",
					"answers": [
						{
							"answer": "White college graduates",
							"pct": 46,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 29,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 38,
									"leader": true
								},
								{
									"id": 65775,
									"pct": 28,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Whites no degree",
							"pct": 40,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 21,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 57,
									"leader": true
								},
								{
									"id": 65775,
									"pct": 17,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites college grads",
							"pct": 5,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 65775,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites no degree",
							"pct": 8,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 65775,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCWHITEBYSEX": {
					"numrespondents": 1203,
					"qid": 3790,
					"question": "Education among whites by sex",
					"answers": [
						{
							"answer": "White college-grad women",
							"pct": 23,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 35,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 33,
									"leader": false
								},
								{
									"id": 65775,
									"pct": 29,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "White non-college women",
							"pct": 21,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 23,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 52,
									"leader": true
								},
								{
									"id": 65775,
									"pct": 19,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "White college-grad men",
							"pct": 23,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 22,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 43,
									"leader": true
								},
								{
									"id": 65775,
									"pct": 27,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 6,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "White non-college men",
							"pct": 19,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 19,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 63,
									"leader": true
								},
								{
									"id": 65775,
									"pct": 15,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites",
							"pct": 14,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 61,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 24,
									"leader": false
								},
								{
									"id": 65775,
									"pct": 9,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						}
					]
				},
				"PARTY": {
					"numrespondents": 1203,
					"qid": 248,
					"question": "Party ID",
					"answers": [
						{
							"answer": "Democrats",
							"pct": 23,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 83,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 8,
									"leader": false
								},
								{
									"id": 65775,
									"pct": 7,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Republicans",
							"pct": 44,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 6,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 65,
									"leader": true
								},
								{
									"id": 65775,
									"pct": 27,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Independents",
							"pct": 34,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 26,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 41,
									"leader": true
								},
								{
									"id": 65775,
									"pct": 22,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 7,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						}
					]
				},
				"PARTYGENDER": {
					"numrespondents": 1203,
					"qid": 3784,
					"question": "Party by gender",
					"answers": [
						{
							"answer": "Democratic men",
							"pct": 9,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 65775,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Democratic women",
							"pct": 13,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 87,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 8,
									"leader": false
								},
								{
									"id": 65775,
									"pct": 5,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 0,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Republican men",
							"pct": 22,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 7,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 70,
									"leader": true
								},
								{
									"id": 65775,
									"pct": 22,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Republican women",
							"pct": 21,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 5,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 60,
									"leader": true
								},
								{
									"id": 65775,
									"pct": 32,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Independent men",
							"pct": 17,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 21,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 45,
									"leader": true
								},
								{
									"id": 65775,
									"pct": 21,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 11,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Independent women",
							"pct": 17,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 32,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 38,
									"leader": true
								},
								{
									"id": 65775,
									"pct": 23,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						}
					]
				},
				"PHIL3": {
					"numrespondents": 1203,
					"qid": 251,
					"question": "Ideology",
					"answers": [
						{
							"answer": "Liberal",
							"pct": 20,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 78,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 10,
									"leader": false
								},
								{
									"id": 65775,
									"pct": 5,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "Moderate",
							"pct": 35,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 38,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 33,
									"leader": false
								},
								{
									"id": 65775,
									"pct": 22,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "Conservative",
							"pct": 45,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 4,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 67,
									"leader": true
								},
								{
									"id": 65775,
									"pct": 26,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						}
					]
				}
			}
		},
		"electiondate": "20161108",
		"lts": 1478706906000,
		"evotes": 6
	},
	"WI": {
		"polls": {
			"candidates": {
				"0": {
					"fname": " ",
					"lname": "Other/No Answer",
					"party": ""
				},
				"895": {
					"fname": "Jill",
					"lname": "Stein",
					"party": "GR"
				},
				"1746": {
					"fname": "Hillary",
					"lname": "Clinton",
					"party": "D"
				},
				"8639": {
					"fname": "Donald",
					"lname": "Trump",
					"party": "R"
				},
				"31708": {
					"fname": "Gary",
					"lname": "Johnson",
					"party": "LB"
				}
			},
			"topics": {
				"SEX": {
					"numrespondents": 3047,
					"qid": 279,
					"question": "Gender",
					"answers": [
						{
							"answer": "Male",
							"pct": 49,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 40,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 54,
									"leader": true
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						},
						{
							"answer": "Female",
							"pct": 51,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 53,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 43,
									"leader": false
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						}
					]
				},
				"AGE": {
					"numrespondents": 3047,
					"qid": 159,
					"question": "Age",
					"answers": [
						{
							"answer": "18-29",
							"pct": 17,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 47,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 44,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 6,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "30-44",
							"pct": 23,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 55,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 37,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "45-64",
							"pct": 41,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 41,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 56,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "65 and older",
							"pct": 20,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 48,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 49,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						}
					]
				},
				"RACE": {
					"numrespondents": 3047,
					"qid": 260,
					"question": "Race",
					"answers": [
						{
							"answer": "White",
							"pct": 86,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 42,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 53,
									"leader": true
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						},
						{
							"answer": "Black",
							"pct": 7,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 92,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 6,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino",
							"pct": 4,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 63,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 34,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "Asian",
							"pct": 1,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Other race",
							"pct": 2,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"RACE2B": {
					"numrespondents": 3047,
					"qid": 3423,
					"question": "Race",
					"answers": [
						{
							"answer": "White",
							"pct": 86,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 42,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 53,
									"leader": true
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-white",
							"pct": 14,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 76,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 21,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						}
					]
				},
				"SEXBYRACE": {
					"numrespondents": 3047,
					"qid": 1602,
					"question": "Race and gender",
					"answers": [
						{
							"answer": "White men",
							"pct": 42,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 35,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 59,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "White women",
							"pct": 45,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 49,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 47,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Black men",
							"pct": 3,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 90,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 8,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Black women",
							"pct": 4,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 94,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 3,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino men",
							"pct": 2,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino women",
							"pct": 2,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Others",
							"pct": 3,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"EDUC12R": {
					"numrespondents": 3047,
					"qid": 2500,
					"question": "Education",
					"answers": [
						{
							"answer": "High school or less",
							"pct": 20,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 41,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 54,
									"leader": true
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						},
						{
							"answer": "Some college",
							"pct": 35,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 39,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 57,
									"leader": true
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "College graduate",
							"pct": 30,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 49,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 45,
									"leader": false
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						},
						{
							"answer": "Postgraduate",
							"pct": 15,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 69,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 26,
									"leader": false
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCCOLL": {
					"numrespondents": 3047,
					"qid": 1951,
					"question": "Are you a college graduate?",
					"answers": [
						{
							"answer": "Yes",
							"pct": 45,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 55,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 39,
									"leader": false
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						},
						{
							"answer": "No",
							"pct": 55,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 40,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 56,
									"leader": true
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCWHITE": {
					"numrespondents": 3047,
					"qid": 1974,
					"question": "Education and race",
					"answers": [
						{
							"answer": "White college graduates",
							"pct": 39,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 53,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 41,
									"leader": false
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						},
						{
							"answer": "Whites no degree",
							"pct": 47,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 34,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 62,
									"leader": true
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites college grads",
							"pct": 6,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 71,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 25,
									"leader": false
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites no degree",
							"pct": 8,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 80,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 18,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCWHITEBYSEX": {
					"numrespondents": 3047,
					"qid": 3790,
					"question": "Education among whites by sex",
					"answers": [
						{
							"answer": "White college-grad women",
							"pct": 21,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 60,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 37,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "White non-college women",
							"pct": 24,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 40,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 56,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "White college-grad men",
							"pct": 19,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 46,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 46,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 6,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "White non-college men",
							"pct": 23,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 26,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 69,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites",
							"pct": 13,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 76,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 21,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"INCOME16GEN": {
					"numrespondents": 3047,
					"qid": 3728,
					"question": "Income",
					"answers": [
						{
							"answer": "Under $30,000",
							"pct": 19,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 52,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 43,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$30K-$49,999",
							"pct": 20,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 46,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 46,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$50K-$99,999",
							"pct": 34,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 46,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 52,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$100K-$199,999",
							"pct": 19,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 44,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 50,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "$200K-$249,999",
							"pct": 4,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$250,000 or more",
							"pct": 4,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"INCOME3": {
					"numrespondents": 3047,
					"qid": 1948,
					"question": "Income",
					"answers": [
						{
							"answer": "Under $50K",
							"pct": 39,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 49,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 45,
									"leader": false
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						},
						{
							"answer": "$50K-$100K",
							"pct": 34,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 46,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 52,
									"leader": true
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "$100K or more",
							"pct": 27,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 48,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 46,
									"leader": false
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						}
					]
				},
				"PARTY": {
					"numrespondents": 3047,
					"qid": 248,
					"question": "Party ID",
					"answers": [
						{
							"answer": "Democrats",
							"pct": 35,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 91,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 7,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Republicans",
							"pct": 34,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 6,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 90,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Independents",
							"pct": 30,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 40,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 50,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 6,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						}
					]
				},
				"PARTYGENDER": {
					"numrespondents": 3047,
					"qid": 3784,
					"question": "Party by gender",
					"answers": [
						{
							"answer": "Democratic men",
							"pct": 13,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 92,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 6,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Democratic women",
							"pct": 22,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 91,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 8,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Republican men",
							"pct": 18,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 6,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 89,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Republican women",
							"pct": 16,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 6,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 91,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Independent men",
							"pct": 18,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 37,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 52,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 7,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "Independent women",
							"pct": 13,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 44,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 47,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						}
					]
				},
				"PHIL3": {
					"numrespondents": 3047,
					"qid": 251,
					"question": "Ideology",
					"answers": [
						{
							"answer": "Liberal",
							"pct": 25,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 86,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 10,
									"leader": false
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "Moderate",
							"pct": 40,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 52,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 42,
									"leader": false
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						},
						{
							"answer": "Conservative",
							"pct": 34,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 11,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 85,
									"leader": true
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						}
					]
				}
			}
		},
		"electiondate": "20161108",
		"lts": 1478720596000,
		"evotes": 10
	},
	"VA": {
		"polls": {
			"candidates": {
				"0": {
					"fname": " ",
					"lname": "Other/No Answer",
					"party": ""
				},
				"895": {
					"fname": "Jill",
					"lname": "Stein",
					"party": "GR"
				},
				"1746": {
					"fname": "Hillary",
					"lname": "Clinton",
					"party": "D"
				},
				"8639": {
					"fname": "Donald",
					"lname": "Trump",
					"party": "R"
				},
				"31708": {
					"fname": "Gary",
					"lname": "Johnson",
					"party": "LB"
				}
			},
			"topics": {
				"SEX": {
					"numrespondents": 2942,
					"qid": 279,
					"question": "Gender",
					"answers": [
						{
							"answer": "Male",
							"pct": 47,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 43,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 52,
									"leader": true
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						},
						{
							"answer": "Female",
							"pct": 53,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 56,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 39,
									"leader": false
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						}
					]
				},
				"AGE": {
					"numrespondents": 2942,
					"qid": 159,
					"question": "Age",
					"answers": [
						{
							"answer": "18-29",
							"pct": 18,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 54,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 36,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 6,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "30-44",
							"pct": 25,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 53,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 40,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "45-64",
							"pct": 41,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 47,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 50,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "65 and older",
							"pct": 16,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 45,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 52,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						}
					]
				},
				"RACE": {
					"numrespondents": 2942,
					"qid": 260,
					"question": "Race",
					"answers": [
						{
							"answer": "White",
							"pct": 67,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 35,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 59,
									"leader": true
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						},
						{
							"answer": "Black",
							"pct": 21,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 88,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 9,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino",
							"pct": 6,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 65,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 30,
									"leader": false
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						},
						{
							"answer": "Asian",
							"pct": 3,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Other race",
							"pct": 3,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"RACE2B": {
					"numrespondents": 2942,
					"qid": 3423,
					"question": "Race",
					"answers": [
						{
							"answer": "White",
							"pct": 67,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 35,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 59,
									"leader": true
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-white",
							"pct": 33,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 79,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 17,
									"leader": false
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						}
					]
				},
				"SEXBYRACE": {
					"numrespondents": 2942,
					"qid": 1602,
					"question": "Race and gender",
					"answers": [
						{
							"answer": "White men",
							"pct": 32,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 29,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 65,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "White women",
							"pct": 35,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 41,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 54,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Black men",
							"pct": 9,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 84,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 13,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "Black women",
							"pct": 12,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 91,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 7,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino men",
							"pct": 3,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino women",
							"pct": 3,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Others",
							"pct": 6,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 62,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 30,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 6,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"EDUC12R": {
					"numrespondents": 2942,
					"qid": 2500,
					"question": "Education",
					"answers": [
						{
							"answer": "High school or less",
							"pct": 14,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 44,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 52,
									"leader": true
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "Some college",
							"pct": 31,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 44,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 51,
									"leader": true
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						},
						{
							"answer": "College graduate",
							"pct": 31,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 51,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 44,
									"leader": false
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						},
						{
							"answer": "Postgraduate",
							"pct": 23,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 61,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 33,
									"leader": false
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCCOLL": {
					"numrespondents": 2942,
					"qid": 1951,
					"question": "Are you a college graduate?",
					"answers": [
						{
							"answer": "Yes",
							"pct": 54,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 55,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 39,
									"leader": false
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						},
						{
							"answer": "No",
							"pct": 46,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 44,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 51,
									"leader": true
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCWHITE": {
					"numrespondents": 2942,
					"qid": 1974,
					"question": "Education and race",
					"answers": [
						{
							"answer": "White college graduates",
							"pct": 38,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 45,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 49,
									"leader": true
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						},
						{
							"answer": "Whites no degree",
							"pct": 29,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 24,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 71,
									"leader": true
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites college grads",
							"pct": 16,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 78,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 17,
									"leader": false
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites no degree",
							"pct": 16,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 81,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 16,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCWHITEBYSEX": {
					"numrespondents": 2942,
					"qid": 3790,
					"question": "Education among whites by sex",
					"answers": [
						{
							"answer": "White college-grad women",
							"pct": 21,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 50,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 44,
									"leader": false
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						},
						{
							"answer": "White non-college women",
							"pct": 15,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 29,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 66,
									"leader": true
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						},
						{
							"answer": "White college-grad men",
							"pct": 17,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 40,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 54,
									"leader": true
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						},
						{
							"answer": "White non-college men",
							"pct": 15,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 19,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 75,
									"leader": true
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites",
							"pct": 33,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 79,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 16,
									"leader": false
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						}
					]
				},
				"INCOME16GEN": {
					"numrespondents": 2942,
					"qid": 3728,
					"question": "Income",
					"answers": [
						{
							"answer": "Under $30,000",
							"pct": 13,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 53,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 41,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "$30K-$49,999",
							"pct": 17,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 53,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 41,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "$50K-$99,999",
							"pct": 30,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 47,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 49,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "$100K-$199,999",
							"pct": 26,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 50,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 45,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "$200K-$249,999",
							"pct": 5,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$250,000 or more",
							"pct": 8,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"INCOME3": {
					"numrespondents": 2942,
					"qid": 1948,
					"question": "Income",
					"answers": [
						{
							"answer": "Under $50K",
							"pct": 30,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 53,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 41,
									"leader": false
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						},
						{
							"answer": "$50K-$100K",
							"pct": 30,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 47,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 49,
									"leader": true
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "$100K or more",
							"pct": 40,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 51,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 44,
									"leader": false
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						}
					]
				},
				"PARTY": {
					"numrespondents": 2942,
					"qid": 248,
					"question": "Party ID",
					"answers": [
						{
							"answer": "Democrats",
							"pct": 40,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 92,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 6,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Republicans",
							"pct": 33,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 6,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 88,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "Independents",
							"pct": 26,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 43,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 48,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 6,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						}
					]
				},
				"PARTYGENDER": {
					"numrespondents": 2942,
					"qid": 3784,
					"question": "Party by gender",
					"answers": [
						{
							"answer": "Democratic men",
							"pct": 15,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 93,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 5,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Democratic women",
							"pct": 25,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 91,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 6,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Republican men",
							"pct": 18,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 4,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 89,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "Republican women",
							"pct": 15,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 8,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 87,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "Independent men",
							"pct": 14,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 42,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 50,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 7,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Independent women",
							"pct": 13,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 44,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 45,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						}
					]
				},
				"PHIL3": {
					"numrespondents": 2942,
					"qid": 251,
					"question": "Ideology",
					"answers": [
						{
							"answer": "Liberal",
							"pct": 26,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 85,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 11,
									"leader": false
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "Moderate",
							"pct": 40,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 58,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 36,
									"leader": false
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						},
						{
							"answer": "Conservative",
							"pct": 33,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 12,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 83,
									"leader": true
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						}
					]
				}
			}
		},
		"electiondate": "20161108",
		"lts": 1478727099000,
		"evotes": 13
	},
	"WA": {
		"polls": {
			"candidates": {
				"0": {
					"fname": " ",
					"lname": "Other/No Answer",
					"party": ""
				},
				"895": {
					"fname": "Jill",
					"lname": "Stein",
					"party": "GR"
				},
				"1746": {
					"fname": "Hillary",
					"lname": "Clinton",
					"party": "D"
				},
				"8639": {
					"fname": "Donald",
					"lname": "Trump",
					"party": "R"
				},
				"31708": {
					"fname": "Gary",
					"lname": "Johnson",
					"party": "LB"
				}
			},
			"topics": {
				"SEX": {
					"numrespondents": 1024,
					"qid": 279,
					"question": "Gender",
					"answers": [
						{
							"answer": "Male",
							"pct": 46,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 45,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 47,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Female",
							"pct": 54,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 62,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 30,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						}
					]
				},
				"AGE": {
					"numrespondents": 1024,
					"qid": 159,
					"question": "Age",
					"answers": [
						{
							"answer": "18-29",
							"pct": 18,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "30-44",
							"pct": 24,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 49,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 36,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 8,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						},
						{
							"answer": "45-64",
							"pct": 37,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 51,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 43,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "65 and older",
							"pct": 20,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 56,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 41,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"RACE": {
					"numrespondents": 1024,
					"qid": 260,
					"question": "Race",
					"answers": [
						{
							"answer": "White",
							"pct": 81,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 51,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 40,
									"leader": false
								},
								{
									"id": 0,
									"pct": 9,
									"leader": false
								}
							]
						},
						{
							"answer": "Black",
							"pct": 2,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino",
							"pct": 7,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Asian",
							"pct": 7,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Other race",
							"pct": 4,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"RACE2B": {
					"numrespondents": 1024,
					"qid": 3423,
					"question": "Race",
					"answers": [
						{
							"answer": "White",
							"pct": 81,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 51,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 40,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-white",
							"pct": 19,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 61,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 31,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						}
					]
				},
				"SEXBYRACE": {
					"numrespondents": 1024,
					"qid": 1602,
					"question": "Race and gender",
					"answers": [
						{
							"answer": "White men",
							"pct": 38,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 47,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 45,
									"leader": false
								},
								{
									"id": 0,
									"pct": 8,
									"leader": false
								}
							]
						},
						{
							"answer": "White women",
							"pct": 43,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 55,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 36,
									"leader": false
								},
								{
									"id": 0,
									"pct": 9,
									"leader": false
								}
							]
						},
						{
							"answer": "Black men",
							"pct": 1,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Black women",
							"pct": 1,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino men",
							"pct": 3,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Latino women",
							"pct": 3,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Others",
							"pct": 11,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"EDUC12R": {
					"numrespondents": 1024,
					"qid": 2500,
					"question": "Education",
					"answers": [
						{
							"answer": "High school or less",
							"pct": 17,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 61,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 33,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Some college",
							"pct": 29,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 45,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 48,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "College graduate",
							"pct": 34,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 51,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 37,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						},
						{
							"answer": "Postgraduate",
							"pct": 19,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 67,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 28,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCCOLL": {
					"numrespondents": 1024,
					"qid": 1951,
					"question": "Are you a college graduate?",
					"answers": [
						{
							"answer": "Yes",
							"pct": 53,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 57,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 34,
									"leader": false
								},
								{
									"id": 0,
									"pct": 9,
									"leader": false
								}
							]
						},
						{
							"answer": "No",
							"pct": 47,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 51,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 42,
									"leader": false
								},
								{
									"id": 0,
									"pct": 7,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCWHITE": {
					"numrespondents": 1024,
					"qid": 1974,
					"question": "Education and race",
					"answers": [
						{
							"answer": "White college graduates",
							"pct": 44,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 58,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 31,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						},
						{
							"answer": "Whites no degree",
							"pct": 37,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 43,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 51,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites college grads",
							"pct": 10,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites no degree",
							"pct": 9,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"EDUCWHITEBYSEX": {
					"numrespondents": 1024,
					"qid": 3790,
					"question": "Education among whites by sex",
					"answers": [
						{
							"answer": "White college-grad women",
							"pct": 25,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 64,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 25,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 6,
									"leader": false
								}
							]
						},
						{
							"answer": "White non-college women",
							"pct": 19,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 43,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 51,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "White college-grad men",
							"pct": 20,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 51,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 40,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 6,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "White non-college men",
							"pct": 18,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 42,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 52,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Non-whites",
							"pct": 19,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 61,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 31,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						}
					]
				},
				"INCOME16GEN": {
					"numrespondents": 1024,
					"qid": 3728,
					"question": "Income",
					"answers": [
						{
							"answer": "Under $30,000",
							"pct": 19,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 62,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 26,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 7,
									"leader": false
								}
							]
						},
						{
							"answer": "$30K-$49,999",
							"pct": 15,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 41,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 48,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 8,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "$50K-$99,999",
							"pct": 33,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 50,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 44,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "$100K-$199,999",
							"pct": 25,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 57,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 35,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "$200K-$249,999",
							"pct": 3,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "$250,000 or more",
							"pct": 5,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						}
					]
				},
				"INCOME3": {
					"numrespondents": 1024,
					"qid": 1948,
					"question": "Income",
					"answers": [
						{
							"answer": "Under $50K",
							"pct": 34,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 52,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 36,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						},
						{
							"answer": "$50K-$100K",
							"pct": 33,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 50,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 44,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "$100K or more",
							"pct": 33,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 59,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 34,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						}
					]
				},
				"PARTY": {
					"numrespondents": 1024,
					"qid": 248,
					"question": "Party ID",
					"answers": [
						{
							"answer": "Democrats",
							"pct": 34,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 91,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 5,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "Republicans",
							"pct": 20,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 8,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 85,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 3,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 4,
									"leader": false
								}
							]
						},
						{
							"answer": "Independents",
							"pct": 45,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 48,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 40,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 7,
									"leader": false
								},
								{
									"id": 895,
									"pct": 2,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						}
					]
				},
				"PARTYGENDER": {
					"numrespondents": 1024,
					"qid": 3784,
					"question": "Party by gender",
					"answers": [
						{
							"answer": "Democratic men",
							"pct": 13,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 89,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 7,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Democratic women",
							"pct": 22,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 92,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 5,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Republican men",
							"pct": 10,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": null,
									"leader": false
								},
								{
									"id": 8639,
									"pct": null,
									"leader": false
								},
								{
									"id": 31708,
									"pct": null,
									"leader": false
								},
								{
									"id": 895,
									"pct": null,
									"leader": false
								},
								{
									"id": 0,
									"pct": null,
									"leader": false
								}
							]
						},
						{
							"answer": "Republican women",
							"pct": 10,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 7,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 84,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 4,
									"leader": false
								},
								{
									"id": 895,
									"pct": 0,
									"leader": false
								},
								{
									"id": 0,
									"pct": 5,
									"leader": false
								}
							]
						},
						{
							"answer": "Independent men",
							"pct": 23,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 37,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 51,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 8,
									"leader": false
								},
								{
									"id": 895,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						},
						{
							"answer": "Independent women",
							"pct": 22,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 59,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 28,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 5,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 7,
									"leader": false
								}
							]
						}
					]
				},
				"PHIL3": {
					"numrespondents": 1024,
					"qid": 251,
					"question": "Ideology",
					"answers": [
						{
							"answer": "Liberal",
							"pct": 32,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 86,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 7,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 1,
									"leader": false
								},
								{
									"id": 895,
									"pct": 3,
									"leader": false
								},
								{
									"id": 0,
									"pct": 3,
									"leader": false
								}
							]
						},
						{
							"answer": "Moderate",
							"pct": 37,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 61,
									"leader": true
								},
								{
									"id": 8639,
									"pct": 29,
									"leader": false
								},
								{
									"id": 31708,
									"pct": 7,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 2,
									"leader": false
								}
							]
						},
						{
							"answer": "Conservative",
							"pct": 31,
							"candidateanswers": [
								{
									"id": 1746,
									"pct": 14,
									"leader": false
								},
								{
									"id": 8639,
									"pct": 82,
									"leader": true
								},
								{
									"id": 31708,
									"pct": 2,
									"leader": false
								},
								{
									"id": 895,
									"pct": 1,
									"leader": false
								},
								{
									"id": 0,
									"pct": 1,
									"leader": false
								}
							]
						}
					]
				}
			}
		},
		"electiondate": "20161108",
		"lts": 1478867548000,
		"evotes": 12
	}
}