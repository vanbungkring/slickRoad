var auth = require('../controller/authController');
var apps = require('../controller/appController');
var pembuatan = require('../controller/pembuatanController');
module.exports = function (app) {
		app.get('/', apps.dashboard);
    app.get('/dashoard', auth.auth);
		app.get('/search', apps.search);
		app.get('/pembuatan/tabel/blok',pembuatan.tableBlok)
		app.get('/pembuatan/tabel/nir',pembuatan.dataNir)
		app.get('/pembuatan/tabel/znt',pembuatan.dataZNT)
}
	// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
	if (req.isAuthenticated())
		return next();
	res.redirect('/');
}
