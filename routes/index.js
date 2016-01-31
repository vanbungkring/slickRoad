var auth = require('../controller/authController');
var apps = require('../controller/appController');
module.exports = function (app, passport) {
		app.get('/', apps.dashboard);
    app.get('/dashoard', auth.auth);
		app.get('/search', apps.search);
}
	// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
	if (req.isAuthenticated())
		return next();
	res.redirect('/');
}
