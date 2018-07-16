const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PupSchema = new Schema({
  ownername: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  pupname: { type: String, required: true },
  breed: { type: String, required: true },
  age: { type: String, required: true },
  size: { type: String, required: true },
  location: {type: Number, required: true},
  bio: String,
  date: { type: Date, default: Date.now }
});

const Pup = mongoose.model("Pup", PupSchema);

module.exports = Pup;