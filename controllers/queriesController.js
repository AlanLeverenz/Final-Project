const db = require("../models");
const queryFilter = require("../scripts/queryFilter");

// Defining methods for the articlesController
module.exports = {
  findAll: function(req, res) {
    db.Query
      .find(req.query)
      .sort({ queryId: -1 })
      .sort({ padScore: 1 })
      .then(dbModel => queryFilter(res.json(dbModel))) // inserted filter to create arrays of query objects
<<<<<<< HEAD
      // .then(dbModel => res.json(dbModel)
=======
>>>>>>> 8d3606f5b915be0a1dec1b1b7445921771baf4ff
      .catch(err => res.status(422).json(err));
  },

  findById: function(req, res) {
    db.Query
      .find( {queryId : req.params.id} )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // findAll: function(req, res) {
  //   db.Query
  //     .find(req.params.queryId)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },

  create: function(req, res) {
    db.Query
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  update: function(req, res) {
    db.Query
      .findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  remove: function(req, res) {
<<<<<<< HEAD
    console.log("DELETE QUERY = " + req.params.id)
=======
>>>>>>> 8d3606f5b915be0a1dec1b1b7445921771baf4ff
    db.Query
      .deleteMany({ queryId : req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
<<<<<<< HEAD

=======
>>>>>>> 8d3606f5b915be0a1dec1b1b7445921771baf4ff
};
