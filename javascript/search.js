

// variables

var urlEndpoint = "https://api.nytimes.com/svc/search/v2/articlesearch.json?"
// var queryURL = urlEndpoint + apiKey + q;

urlEndpoint += $.param({
	'api-key':'1b8ad75b08d7499ab6862418e9cc2c3a',
	'q': $('#search'),
	'begin_date': $('#startYear'),
	'end_date': $('#endYear'),
});

// helper write function
var write = function (element, input) {
	$(element).html(input);
};

// submit button handler
$('#searchBtn').on('click', function () {
	// ajax call
	$.ajax({
		url: urlEndpoint,
		method: 'GET',
	})
	// when info retrieved 
	.done(function (response) {
		// variables
		for (var i = 0; i < 8; i++) {
			
			var headline = response.response.docs.headline.main;
			var abstract = response.reaponse.docs.keywords.snippet;
			write('#wellSection', '<div>' + headline + '</div>');
			write('#wellSection', '<div>' + abstract + '</div>');
		}

		// doc writes
	});
});


