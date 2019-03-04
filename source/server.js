// Default modules
var express = require('express');
var path = require('path');
var routes = require('./routes');
var favicon = require('express-favicon');
var morgan = require('morgan');
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
var serveStatic = require('serve-static');
var errorhandler = require('errorhandler');
var app = express();

// Default configuration
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'pug');
// app.use(favicon(path.join(__dirname, '../public/favicon.ico')));
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(cookieParser('template'));
app.use(serveStatic(path.join(__dirname, '../public')));
app.locals.pretty = false;

// Development configuration
if ('development' === app.get('env')) {
  app.use(errorhandler({
    dumpExceptions: true,
    showStack: true
  }));
  app.locals.pretty = true;
}

// Routes
app.get('/', routes['index']);
app.get('/index.html', routes['index']);
app.get('/sitemap.html', routes['sitemap']);

// Initialization
app.listen(app.get('port'), function() {
  console.log('Frontend template is running on port ' + app.get('port'));
});
