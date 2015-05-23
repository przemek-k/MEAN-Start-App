var express = require('express'),
    stylus = require('stylus'),
    logger = require('morgan'),
    bodyParser = require('body-parser');

//Setting node environment variable
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

//Starting express app
var app = express();

//Setting up stylus
function compile(str, path) {
    return stylus(str).set('filename', path);
}

//Setting views and template engine
app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(stylus.middleware(
    {
        src: __dirname + 'public',
        compile: compile
    }
));
app.use(express.static('public'));

app.get('/partials/:partialPath', function(req, res) {
    res.render('partials/' + req.params.partialPath);
});

//Matching all routes and passing route handling to angular app
app.get('*', function(req, res){
    res.render('index');
});

//Listener
var port = 3030;
app.listen(port, function(){
    console.log('Server listening on port ' + port);
});