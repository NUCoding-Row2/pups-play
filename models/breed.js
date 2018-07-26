const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.promise = Promise;

const BreedSchema = new Schema({
	breedname: { type: String, trim: true, required: true }
  });

const Breed = mongoose.model("Breed", BreedSchema)

module.exports = Breed;
