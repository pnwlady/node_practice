// <%= prints to page
var request = require('request');
var url = require('url');

app.get(‘/tweets/:username’, function(req, response) {

    var username = req.param.username;

    options = {
        protocol: "http:",
        host: 'api.twitter.com', //wont work
        pathname: '/1statuses/user_timeline.json',
        query: { screen_name: username, county: 10 }
    }

    var twitterUrl = url.format(options);
    request(twitterUrl).pipe(response);

   request(url, function(err, res, body) {
       var tweets = son.parse(body);
       response.locals = {tweets, name: username};
       response.render('tweets.ejs');
   });
});
