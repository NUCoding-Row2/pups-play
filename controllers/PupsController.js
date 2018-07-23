const db = require("../models");
const passport = require('../passport');

// Defining methods for the PupsController
module.exports = {
  findAll: function (req, res, next) {
    console.log("Retrieved ALL Dogs from Database on PupsController.js");
    db.Pup
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    
    // console.log('===== user!!======')
    // console.log(req.user)
    // if (req.user) {
    //     res.json({ user: req.user })
    // } else {
    //     res.json({ user: null })
    // }
    
  },
  findById: function (req, res) {
    console.log("Retrieved Individual Dog from Database on PupsController.js");
    db.Pup
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByEmail: function (req, res) {
    console.log("Retrieve Dogs by Email");
    db.Pup
      .find({ email: "liz@liz.com" })
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
  create: function (req, res) {
    console.log("User sign up");

    const {ownername, email, password, pupname, breed, age, size, location, bio, date} = req.body;

    // ADD VALIDATION
    db.Pup
      .findOne({ email: email }, (err, user) => {
        if (err) {
          console.log('Pups.js post error: ', err)
        } else if (user) {
          res.json({
            error: `Sorry, already a user with the email: ${email}`
          })
        }
        else {
          const newPup = new db.Pup({
            ownername: ownername,
            email: email,
            password: password,
            pupname: pupname,
            breed: breed,
            age: age,
            size: size,
            location: location,
            bio: bio,
            date: date
          })
          newPup.save((err, savedPup) => {
            if (err) return res.json(err)
            res.json(savedPup)
          })
        }
      })

    // db.Pup
    //   .create(req.body)
    //   .then(dbModel => res.json(dbModel))
    //   .catch(err => res.status(422).json(err));
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
  },
  // Not functional, need to revisit
  // signup: function (req, res) {
  //   console.log('Signing up a new user and their pup');

  //   const {ownername, email, password, pupname, breed, age, size, location, bio, date} = req.body;

  //   console.log("Here is the email from the request: ", newPup.email);

  //   // ADD VALIDATION
  //   db.Pup
  //     .findOne({ email: email }, (err, user) => {
  //       if (err) {
  //         console.log('Pups.js post error: ', err)
  //       } else if (user) {
  //         res.json({
  //           error: `Sorry, already a user with the email: ${email}`
  //         })
  //       }
  //       else {
  //         const newPup = new Pup({
  //           ownername: ownername,
  //           email: email,
  //           password: password,
  //           pupname: pupname,
  //           breed: breed,
  //           age: age,
  //           size: size,
  //           location: location,
  //           bio: bio,
  //           date: date
  //         })
  //         newPup.save((err, savedPup) => {
  //           if (err) return res.json(err)
  //           res.json(savedPup)
  //         })
  //       }
  //     })
  // },
};
