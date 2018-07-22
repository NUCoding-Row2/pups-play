const db = require("../models");
const Post = require("../models");
var cloudinary = require('cloudinary');

  // Cloudinary Configuraiton
  cloudinary.config({
    cloud_name: 'acastillo',
    api_key: '653361767279137',
    api_secret: '9mJqffXR1bUQ3BP2wlN1c3SBVbA'
  });



  // Defining methods for the PupsController
  module.exports = {
    findAll: function (req, res) {
      console.log("PupsController.js: Retrieved ALL Dogs from Database");
      db.Pup
        .find(req.query)
        .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
      db.Pup
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findByLocation: function (req, res) {
      console.log("Retrieve Dogs by Zip Code/Location");
      db.Pup
        .find({ location: req.body.location })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findByAge: function (req, res) {
      console.log("Retrieve Dogs by Age");
      db.Pup
        .find({ age: req.body.age })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findBySize: function (req, res) {
      console.log("Retrieve Dogs by Age");
      db.Pup
        .find({ size: req.body.size })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findByBreed: function (req, res) {
      console.log("Retrieve Dogs by Breed");
      db.Pup
        .find({ breed: req.body.size })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
      console.log("PupsController.js: Request from Pups create ", req.body);
      console.log("PupsController.js: file from sent from Muster ", req.file);
      // send Image to cloudnary
      cloudinary.uploader.upload(
        '../uploads/' + req.file.filename,
        function (result) {
          console.log("#################################");
          console.log("Cloudinary Upload Result: ", result);
          console.log("Dog Picture: ", result.url);
          console.log("#################################");
       
        // Add URL to new pup Object
        const newPup = { 
          ownername: req.body.ownername,
          email: req.body.email,
          password: req.body.password,
          pupname: req.body.pupname,
          breed: req.body.breed,
          age: req.body.age,
          size: req.body.size,
          location: req.body.location,
          bio: req.body.bio,
          photo: result.url,
          date: req.body.date
        };
      console.log("New Pup Object:", newPup);
      db.Pup
        .create(newPup)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    })
    },
    update: function (req, res) {
      db.Pup
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
      db.Pup
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
  };
