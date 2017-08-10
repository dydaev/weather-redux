var express = require('express');
var app = express();

var port = process.env.PORT || 8080;
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/build'));

// set the home page route
app.get('/build/index.html', function(req, res) {

    // ejs render automatically looks in the views folder
    res.render('tratata');
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
