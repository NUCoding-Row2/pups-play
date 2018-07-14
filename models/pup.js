const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PupSchema = new Schema({
  ownername: { type: String, required: true },
  pupname: { type: String, required: true },
  breed: { type: String, required: true },
  age: { type: String, required: true },
  size: { type: String, required: true },
  // gender: { type: String, required: true },
  // SpayedNeutered: { type: Boolean, required: true },
  // vaccinations: { type: Boolean, required: true },
  // location: { type: String, required: true },
  bio: String,
  date: { type: Date, default: Date.now }
});

const Pup = mongoose.model("Pup", PupSchema);

module.exports = Pup;
