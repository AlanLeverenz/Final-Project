const db = require("../models");
const queryFilter = require("../scripts/queryFilter");

// Defining methods for the articlesController
module.exports = {
  findAll: function(req, res) {
    db.Query
      .find(req.query)
      .sort({ queryId: -1 })
      .sort({ padScore: 1 })
      // .then(dbModel => (res.json(dbModel)))
      .then(dbModel => queryFilter(res.json(dbModel)))
      .catch(err => res.status(422).json(err));
  },

  findById: function(req, res) {
    db.Query
      .find( {queryId : req.params.id} )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  create: function(req, res) {
    db.Query
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  update: function(req, res) {
    console.log("QUERY UPDATE")
    console.log(req.body)
    db.Query
      .findOneAndUpdate({ queryId: req.params.id }, { $set: req.body }, { useFindAndModify: false, upsert: false, new: true })
      // .findByIdAndUpdate( '5e55fecedf2461efb890faf3', { $set: req.body }, { useFindAndModify: false, upsert: true, new: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // let query = {'username': req.user.username};
// req.newData.username = req.user.username;

// MyModel.findOneAndUpdate(query, req.newData, {upsert: true}, function(err, doc) {
//     if (err) return res.send(500, {error: err});
//     return res.send('Succesfully saved.');
// });

  // await User.findOneAndUpdate({
  //   "_id": data.id,
  // }, { $set: { name: "Amar", designation: "Software Developer" } }, {
  //   new: true,
  //   fields: {
  //     'name': 1,
  //     'designation': 1
  //   }
  // }).exec();

  // from WebScraper
  // update: function(req, res) {
  //   db.Headline.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true })
  //   .then(function(dbHeadline) {
  //     res.json(dbHeadline);
  //   });
  // }

  // const user = { id: 1, name: "Fart Face 3rd"};
  // const userUpdate = { name: "Pizza Face" };
  
  // try {
  //     user = await new Promise( ( resolve, reject ) => {
  //         User.update( { _id: user.id }, userUpdate, { upsert: true, new: true }, ( error, obj ) => {
  //             if( error ) {
  //                 console.error( JSON.stringify( error ) );
  //                 return reject( error );
  //             }
  
  //             resolve( obj );
  //         });
  //     })
  // } catch( error ) { /* set the world on fire */ }


  remove: function(req, res) {
    console.log("DELETE QUERY = " + req.params.id)
    db.Query
      .deleteMany({ queryId : req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
