var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');

var flash = require('connect-flash');
var config = require('config');
var session = require('express-session');
var redis = require("redis");
var redisStore = require('connect-redis')(session);
var ejs = require('ejs');
var moment = require('moment');



var app = express();

// app.use(minify());
var configuration = config.get('pbb-dev');
app.set('superSecret', configuration.common.tokenSecret); // secret variable
var cookieConfig = config.get('pbb-dev.cookie');
var client = redis.createClient();
// view engine setup
var routes = require('./routes/index');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.locals.fromNow = function (date) {
	return moment(date).fromNow();
}
app.locals.formatDate = function (date) {
	return moment(date).format("YYYY-MM-DD hh:mm:ss");;
}
app.locals.trim = function(string) {
  var maxLength = 50 // maximum number of characters to extract
  var trimmedString = string.substr(0, maxLength);
  trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
  if(string.length < maxLength) {
    return string;
  }
  else {
    return trimmedString+' ...';
  }
}

var allowCrossDomain = function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Credentials', true)
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	next();
};

require('./config/passport')(passport); // pass passport for configuration
app.use(cookieParser()); // read cookies (needed for auth)
app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'public/bower_components')));

var sessionOpts = {
  saveUninitialized: true, // saved new sessions
  resave: false, // do not automatically write to the session store
	store: new redisStore({
		host: configuration.redis.host,
		port: configuration.redis.port,
		client: client,
		ttl: configuration.redis.ttl
	}), // connect-mongo session store
  secret: cookieConfig.secret,
  cookie : { httpOnly: true, maxAge: 6000000000000000000000000} // configure when sessions expires
}
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(cookieParser());
app.use(cookieParser(configuration.cookie.secret))
app.use(session(sessionOpts))

app.use(passport.initialize())
app.use(passport.session())

app.use(flash()); // use connect-flash for flash messages stored in session
// mongoose.connect(configuration.dbConfig.host);
require('./routes/index.js')(app, passport); // load our routes and pass in our app and fully configured passport

app.use(function (req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
	app.use(function (err, req, res, next) {
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: err
		});
	});
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: {}
	});
});


module.exports = app;
