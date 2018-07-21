const db = require("../models");

// Defining methods for the PupsController
module.exports = {
  findAll: function (req, res) {
    console.log("Retrieved ALL Dogs from Database on PupsController.js");
    db.Pup
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    console.log("Retrieved Individual Dog from Database on PupsController.js");
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
    console.log("Retrieve Dogs by Size");
    db.Pup
      .find({ size: req.body.size })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByBreed: function (req, res) {
    console.log("Retrieve Dogs by Breed");
    db.Pup
      .find({ breed: req.body.breed })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // create: function (req, res) {
  //   console.log("Adding a new user/pup to the database");
  //   db.Pup
  //     .create(req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
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
  },
  signup: function (req, res) {
    console.log('user signup');

    // const { email, password } = req.body
    
    // ADD VALIDATION
    db.Pup
      .findOne({ email: req.body.email }, (err, user) => {
        if (err) {
          console.log('Pups.js post error: ', err)
        } else if (user) {
          res.json({
            error: `Sorry, already a user with the email: ${req.body.email}`
          })
        }
        else {
          const newPup = new Pup({
            ownername: req.body.ownername,
            email: req.body.email,
            password: req.body.password,
            pupname: req.body.pupname,
            breed: req.body.breed,
            age: req.body.age,
            size: req.body.size,
            location: req.body.location,
            bio: req.body.bio,
            date: Date.now
          })
          newPup.save((err, savedPup) => {
            if (err) return res.json(err)
            res.json(savedPup)
          })
        }
      })
  }
};
