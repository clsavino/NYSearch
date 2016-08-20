

// variables

var urlEndpoint = "https://api.nytimes.com/svc/search/v2/articlesearch.json?"
// var queryURL = urlEndpoint + apiKey + q;

urlEndpoint += $.param({
	'api-key':'1b8ad75b08d7499ab6862418e9cc2c3a',
	'q': $('query'),
	'begin_date': $('startDate'),
	'end_date': $('endDate'),
})
