var models = require('./../models');
var app = {
	dashboard: function (req, res) {
		models.dat_objek_pajak.findAll({
			limit: 1000,
			offset: 0,
		}).then(function (result) {
			console.log(result);
			res.render('dashboard/index', {
				title: 'Login',
				result:result
			});
		})

	},
}
module.exports = app;
