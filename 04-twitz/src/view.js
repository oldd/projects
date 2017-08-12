class View {
	constructor(_user_name) {
		this.user_name = _user_name;
	}

	render_tweet() {
		this.clearBody();
		var prompt = document.createElement('div');
		prompt.innerHTML = 'hey ' + this.user_name + ', write your tweet below';
		var tweet_box = document.createElement('textarea');
		tweet_box.setAttribute('id', 'tweet_text');
		tweet_box.setAttribute('rows', '5');
		tweet_box.setAttribute('columns', '50');
		tweet_box.innerHTML = 'typey herey'
		var send_tweet = document.createElement('div');
		send_tweet.setAttribute('onclick', 'app.tweet()');
		send_tweet.innerHTML = 'tweet tweet';	
		var home_button = document.createElement('div');
		home_button.setAttribute('onclick', 'app.go_home()');
		home_button.innerHTML = 'go home';	
		var tweetDiv = document.createElement('div');
		tweetDiv.appendChild(prompt);
		tweetDiv.appendChild(tweet_box);
		tweetDiv.appendChild(send_tweet);
		tweetDiv.appendChild(home_button)
		document.body.appendChild(tweetDiv);		
	}

	render_home() {
		this.clearBody();
		var greeting = document.createElement('div');
		greeting.innerHTML = 'hello ' + this.user_name;
		var tweetButton = document.createElement('div');
		tweetButton.setAttribute('onclick', 'app.go_tweet()');
		tweetButton.innerHTML = 'click to send tweet';
		var searchButton = document.createElement('div');
		searchButton.setAttribute('onclick','app.go_search()');
		searchButton.innerHTML = 'click to search twitter';
		var homeDiv = document.createElement('div');
		homeDiv.appendChild(greeting);
		homeDiv.appendChild(tweetButton);
		homeDiv.appendChild(searchButton);
		document.body.appendChild(homeDiv);
	}

	render_search() {
		this.clearBody();
		var prompt = document.createElement('div');
		prompt.innerHTML = 'hey ' + this.user_name + ', enter search term below';
		var search_form = document.createElement('input');
		search_form.setAttribute('id', 'query');
		search_form.setAttribute('type', 'text');
		search_form.setAttribute('value', 'pphhhht');
		var search_button = document.createElement('div');
		search_button.setAttribute('onclick', 'app.search()');
		search_button.innerHTML = 'submit search';	
		var home_button = document.createElement('div');
		home_button.setAttribute('onclick', 'app.go_home()');
		home_button.innerHTML = 'go home';	
		var searchDiv = document.createElement('div');
		searchDiv.appendChild(prompt);
		searchDiv.appendChild(search_form);
		searchDiv.appendChild(search_button);
		searchDiv.appendChild(home_button)
		document.body.appendChild(searchDiv);		
	}

	clearBody() {
		while (document.body.firstChild) {
    		document.body.removeChild(document.body.firstChild);
		}	
	}
}

module.exports = View;
