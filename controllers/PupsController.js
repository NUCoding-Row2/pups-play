const db = require("../models");
let testlocation = 60008;
// Defining methods for the PupsController
module.exports = {
  findAll: function(req, res) {
    console.log("Retrieved ALL Dogs from Database on PupsController.js")
    db.Pup
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Pup
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByLocation: function(req,res){
    console.log("Retrieve Dogs by Zip Code/Location");
    db.Pup
      .find( { location : testlocation }  ) 
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByAge: function(req,res){
    console.log("Retrieve Dogs by Age");
    db.Pup
      .find( { age : 3 }  ) 
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findBySize: function(req,res){
    console.log("Retrieve Dogs by Age");
    db.Pup
      .find( { size : "Medium" }  ) 
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByBreed: function(req,res){
    console.log("Retrieve Dogs by Breed");
    db.Pup
      .find( { breed : "Lab" }  ) 
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Pup
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Pup
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Pup
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
