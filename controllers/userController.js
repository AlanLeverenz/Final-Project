const db = require("../models");

// Defining methods for the articlesController
module.exports = {

  create: function (req, res) {
    //validate request
    if (req.body.email &&
      req.body.username &&
      req.body.password &&
      req.body.passwordConf) {
      //create data
      const userData = {
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
      }
      db.User
        .create(userData)
        .then(dbModel => {
          // save to the session
          req.session.user = dbModel;
          return res.json(dbModel)
        })
        .catch(err => res.status(422).json(err));
    }
  },

  login: function (req, res, next) {
    console.log("login");

    //validate request
    if (req.body.email && req.body.password) {
      db.User.authenticate(req.body.email, req.body.password, function (error, user) {
        if (error || !user) {
          var err = new Error('Wrong email or password.');
          err.status = 401;
          return next(err);
        } else {
          req.session.user = user;
          return res.json(user);
          // console.log('redirect');
          // return res.redirect('/saved');
          // return res.redirect('/api/profile');
        }
      });
    } else {
      var err = new Error('All fields required.');
      err.status = 400;
      return next(err);
    }
  },

  authenticate: function( req, res, next){
    console.log("inside auth");
    console.log(`req.session ${JSON.stringify(req.session, null, 4)}`);

    if(req.session.user) {
      console.log(res.json(req.session.user))
      return res.json(req.session.user);
    } else {
      return res.status(401).json('Not authorized! Go back!');
    }
  },

  logOut: function( req, res, next){
    console.log("Logging out");
    console.log(`req.session ${JSON.stringify(req.session, null, 4)}`);

    req.session.destroy(err =>{
      if(err) res.json(err);
      console.log('destroyed');
      console.log(`req.session ${JSON.stringify(req.session, null, 4)}`);

      return res.json('logged out')
      
    });
  }
};