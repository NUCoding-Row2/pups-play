require('dotenv').config();

const db = require("../models");
const Post = require("../models");
const passport = require('../passport');
var cloudinary = require('cloudinary');

// Cloudinary Configuraiton
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET
});


// Defining methods for the PupsController
module.exports = {
  findAll: function (req, res, next) {
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
    console.log("PupsController.js: Request from Pups create: ", req.body);
    console.log("PupsController.js: file from sent from Muster: ", req.file);
    // send Image to cloudnary
    // path = '../uploads/' + req.file.filename;
    path = 'files/' + req.file.filename;
    console.log("File Path:", path);
    cloudinary.uploader.upload(
      // '../uploads/' + req.file.filename,
      path,
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

    // const { ownername, email, password, pupname, breed, age, size, location, bio, date } = req.body;

    // // ADD VALIDATION
    // db.Pup
    //   .findOne({ email: email }, (err, user) => {
    //     if (err) {
    //       console.log('Pups.js post error: ', err)
    //     } else if (user) {
    //       res.json({
    //         error: `Sorry, already a user with the email: ${email}`
    //       })
    //     }
    //     else {
    //       const newPup = new db.Pup({
    //         ownername: ownername,
    //         email: email,
    //         password: password,
    //         pupname: pupname,
    //         breed: breed,
    //         age: age,
    //         size: size,
    //         location: location,
    //         bio: bio,
    //         date: date
    //       })
    //       newPup.save((err, savedPup) => {
    //         if (err) return res.json(err)
    //         res.json(savedPup)
    //       })
    //     }
    //   })

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
  addMessage: function (req, res) {
    console.log("PupsController.js: Request to add message to Mongo: ", req.body);
    const newMessage = {
      username: req.body.username,
      message: req.body.message,
      fromMe: req.body.fromMe,
      messageTo: req.body.messageTo,
      messageFrom: req.body.messageFrom,
      date: req.body.date
    };
    console.log("New Pup Object:", newMessage);
    db.Note
      .create(newMessage)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getMessages: function (req, res) {
    console.log("PupsController.js: HISTORY -->  messageFrom: ", req.params.messageFrom);
    console.log("PupsController.js: HISTORY --> messageTo: ", req.params.messageTo);

    // db.Note
    //   .find({messageFrom: req.body.messageFrom})
    // ids are on req.params
    // find all notes with both ids involved (in both orders)

    db.Note
      .find({messageFrom: req.params.messageFrom})
      .then(dbModel => {
        res.json(dbModel), 
        console.log("********",res)
      })
      .catch(err => res.status(422).json(err));

      // console.log("PupsController.js: results of message search: ", dbModel)
      


      // .find({ size: req.body.size })
      // .then(dbModel => res.json(dbModel))
      // .catch(err => res.status(422).json(err));
    // .then(
    //   foundMessages => {
    //     const results = foundMessages.filter(item => item.messageTo === req.params.messageTo)
    //     res.json(results);   
    //   },

    // ).catch(err => res.status(422).json(err));


  }
};
