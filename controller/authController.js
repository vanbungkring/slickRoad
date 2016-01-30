var auth = {
	login: function (req, res) {
		res.render('auth/login', {
			title: 'Login',
		});
	},
  auth:function(req,res) {
    console.log(req.body);
  }
}
module.exports = auth;
