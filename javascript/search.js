

// variables
console.log('test');
var urlEndpoint = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
// var queryURL = urlEndpoint + apiKey + q;






$('#clearBtn').click(function(){
	var q = $('#search').val(),
		begin_date = $('#startYear').val() + '0101',
		end_date = $('#endYear').val() + '1231';

		urlEndpoint += $.param({
			'api-key':'1b8ad75b08d7499ab6862418e9cc2c3a',
			'q' : q,
			'begin_date': begin_date,
			'end_date': end_date
		});
		console.log(urlEndpoint);
		$.get(urlEndpoint,function(data){
			console.log(data.response.docs[0].headline.main);
		});
	
});