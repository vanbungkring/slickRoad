var models = require('./../models');
var app = {
	dashboard: function (req, res) {
		var parameters= req.param('data')
		var offset = req.param('page');
		console.log(offset);
		models.dat_objek_pajak.findAll({
			limit: 50,
			offset: parseInt(offset),
		}).then(function (result) {
			res.render('dashboard/index', {
				title: 'Login',
				result:result
			});
		})

	},
	search:function (req, res) {
		res.render('searchData/index',{
			title:'search data'
		})
	}
}
module.exports = app;
