var Twit = require('twit');
var View = require('./view')

function app() {
	app.T = new Twit({
			consumer_key:         document.getElementById('con_key').value,
			consumer_secret:      document.getElementById('con_sec').value,
			access_token:         document.getElementById('acc_tok').value,
			access_token_secret:  document.getElementById('acc_tok_sec').value,
			timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
		});
	app.view = new View(document.getElementById('user_name').value);
	app.go_home();
};

app.tweet = function() {
	var new_tweet = document.getElementById('tweet_text').innerHTML;
	if(new_tweet.length <= 140) {
		this.T.post('statuses/update', { status: 'hello world!' })
			.catch(function(err) {
				alert('caught error', err.stack)
			})
			.then(function(result) {
				alert(result.data)
			})
	} else {
		alert('tweeet toooo looonngg');
	};
};

// returns the first 5 results since the end of the world
app.search = function() {
	console.log('dd');
	var query = document.getElementById('query').value
	//  ************* formulation of query ******************
	query += ' since:2012-12-21'
	this.T.get('search/tweets', { q: query, count: 5 })
		.catch(function(err) {
			alert('caught error', err.stack)
		})
		.then(function(result) {
			console.log('data', result.resp);
			//this.view.display_search_results(result.data)
		})
}; 

app.go_home = function() {
	this.view.render_home();
}; 

app.go_search = function() {
	this.view.render_search();
};

app.go_tweet = function() {
	this.view.render_tweet();
};
 
window.app = app   
 
 