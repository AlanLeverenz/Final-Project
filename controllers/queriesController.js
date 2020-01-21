const db = require("../models");

// Defining methods for the articlesController
module.exports = {
  findAll: function(req, res) {
    db.Query
      .find(req.query)
      .sort({ queryId: -1 })
      .sort({ padScore: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Query
      .findById(req.params.id)
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
    console.log("CREATE ==============");
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

  // remove: function(req, res) {
  //   console.log("REMOVE ================")
  //   db.Query
  //     .findOne({ queryId : req.params.id})
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },

  remove: function(req, res) {
    console.log("DELETE MANY ================")
    db.Query
      .deleteMany({ queryId : req.params.id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }


};
