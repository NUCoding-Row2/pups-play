var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var NoteSchema = new Schema({
  username: String,
  message: String,
//   fromMe: Boolean,
  // messageTo: [{ type: Schema.Types.ObjectId, ref: 'Pup' }],
  // messageFrom: [{ type: Schema.Types.ObjectId, ref: 'Pup' }],
  messageTo: [{ type: String, trim: true, ref: 'Pup'}],
  messageFrom: [{ type: String, trim: true, ref: 'Pup'}],
  date: { type: Date, default: Date.now }
});

// type: String, trim: true


// This creates our model from the above schema, using mongoose's model method
var Note = mongoose.model("Note", NoteSchema);

// Export the Note model
module.exports = Note;