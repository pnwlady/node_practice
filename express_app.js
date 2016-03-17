// <%= prints to page
app.get(‘/tweets/:username’, function(req, response) {
…
   request(url, function(err, res, body) {
       var tweets = son.parse(body);
       response.locals = {tweets, name: username};
       response.render('tweets.ejs');
   });
});
