

<<<<<<< HEAD
var searchLimit = $('#numRecords').val();
console.log(searchLimit);

// helper write function
var write = function (element, input) {
	$(element).append(input);
};

// submit button handler
$('#searchBtn').on('click', function () {

	// variables

	var urlEndpoint = "https://api.nytimes.com/svc/search/v2/articlesearch.json?"
	// var queryURL = urlEndpoint + apiKey + q;
	var q = $('#search').val();
	var begin_date = $('#startYear').val();
	var end_date = $('#endYear').val();

	urlEndpoint += $.param({
		'api-key':'1b8ad75b08d7499ab6862418e9cc2c3a',
		'q': q,
		'begin_date': begin_date,
		'end_date': end_date,
	});
	console.log(urlEndpoint);

	// ajax call
	$.ajax({
		url: urlEndpoint,
		method: 'GET',
	})
	// when info retrieved 
	.done(function (response) {
		// variables
		for (var i = 0; i < searchLimit; i++) {
			
			var headline = response.response.docs.headline.main;
			console.log(headline);
			var snippet = response.reaponse.docs.keywords.snippet;
			console.log(snippet);

			write('#wellSection', '<div>' + headline + '</div>');
			write('#wellSection', '<div>' + snippet + '</div>');
		}

		// doc writes
	});
});


=======
// variables
console.log('test');
var urlEndpoint = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
// var queryURL = urlEndpoint + apiKey + q;






$('#clearBtn').click(function(){
	var q = $('#search').val(),
		begin_date = $('#startYear').val(),
		end_date = $('#endYear').val();

		urlEndpoint += $.param({
			'api-key':'1b8ad75b08d7499ab6862418e9cc2c3a',
			'q' : q,
			'begin_date': begin_date,
			'end_date': end_date
		});

		$.get(urlEndpoint,function(data){
			console.log(data);
		});
	console.log(urlEndpoint);
});
>>>>>>> 2c725e44f48080442c64a892e1430b88db4875a7
