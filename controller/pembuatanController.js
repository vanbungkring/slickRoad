var pembuatan = {
	tableBlok: function (req, res) {
		res.render('persiapan/pembuatanTableBlok', {
			title: 'Pembuatan Tabel Blok',
		});
	},
  dataNir: function (req, res) {
		res.render('persiapan/pembuatanDataNir', {
			title: 'Pembuatan Tabel Blok',
		});
	},
  dataZNT: function (req, res) {
		res.render('persiapan/pembuatanDataZNT', {
			title: 'Pembuatan Tabel Blok',
		});
	}
}
module.exports = pembuatan;
