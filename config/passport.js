// load all the things we need
var LocalStrategy = require('passport-local').Strategy;


// load up the user model
var User = require('../models/dat_login');

// // load the auth variables
// var configAuth = require('./auth'); // use this one for testing

module.exports = function (passport) {
  // Serialize sessions
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    db.User.find({where: {id: id}}).success(function(user){
      done(null, user);
    }).error(function(err){
      done(err, null);
    });
  });

  // Use local strategy to create user account
  passport.use('local-login',new LocalStrategy(
    function(username, password, done) {
      User.find({ where: { NM_LOGIN: username }}).success(function(user) {
        console.log(user);
        if (!user) {
          done(null, false, { message: 'Unknown user' });
        } else if (password != user.PASSWORD) {
          done(null, false, { message: 'Invalid password'});
        } else {
          done(null, user);
        }
      }).error(function(err){
        done(err);
      });
    }
  ));
};
