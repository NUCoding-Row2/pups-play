const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Pups collection and inserts the Pups below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/pupsplay"
);

const PupSeed = [
  {
    ownername: "Liz S",
    pupname: "Skeletor",
    breed: "Greyhound",
    age: "12",
    size: "medium",
    location: 60647,
    bio: "Skeletor is a retired racing dog. She used to be fast but now she's just a big couch potato.",
    date: new Date(Date.now())
  },
  {
    ownername: "Alfredo C",
    pupname: "Choco",
    breed: "Labrador Retriever",
    age: "3",
    size: "large",
    location: 60613,
    bio: "Choco is a sweetheart that loves to run and play.",
    date: new Date(Date.now())
  },
  {
    ownername: "Carolyn R",
    pupname: "Tache",
    breed: "Dalmation",
    age: "2",
    size: "large",
    location: 92116,
    bio: "Tache eats everything.",
    date: new Date(Date.now())
  },
  {
    ownername: "Tony P",
    pupname: "Fido",
    breed: "Mixed breed",
    age: "8",
    size: "medium",
    location: 60626,
    bio: "Fido is a rescue and the best dog that ever lived.",
    date: new Date(Date.now())
  },
];

db.Pup
  .remove({})
  .then(() => db.Pup.collection.insertMany(PupSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
