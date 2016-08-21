

// variables
console.log('test');
var urlEndpoint = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
// var queryURL = urlEndpoint + apiKey + q;

// wiped my code to resolve merge conflict with mickey's code




$('#searchBtn').click(function(){
	var q = $('#search').val(),
		begin_date = $('#startYear').val() + '0101',
		end_date = $('#endYear').val() + '1231',
		numRecords = $('#numRecords').val();

		urlEndpoint += $.param({
			'api-key':'1b8ad75b08d7499ab6862418e9cc2c3a',
			'q' : q,
			'begin_date': begin_date,
			'end_date': end_date
		});
		console.log(urlEndpoint);
		$.get(urlEndpoint, function(data){
			for (var i=0; i<numRecords; i++){
				console.log(data);
				$('#wellSection').append('<section>"'+ data.response.docs[i].headline.main + '</section>');
			}
		});

	console.log(urlEndpoint);
});

		return false;
});
