const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PupSchema = new Schema({
  ownername: { type: String, trim: true, required: true },
  email: { type: String, trim: true, required: true },
  password: { type: String, trim: true, required: true },
  pupname: { type: String, trim: true, required: true },
  breed: { type: String, trim: true, required: true },
  age: { type: String, trim: true, required: true },
  size: { type: String, trim: true, required: true },
  location: {type: Number, trim: true, required: true},
  bio: {type: String, required: false},
  photo: { type: String, required: false},
  date: { type: Date, default: Date.now }
});

const Pup = mongoose.model("Pup", PupSchema);

module.exports = Pup;
