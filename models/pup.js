const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
mongoose.promise = Promise;

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

// Define schema methods
PupSchema.methods = {
	checkPassword: function (inputPassword) {
		return bcrypt.compareSync(inputPassword, this.password);
	},
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 10);
	}
}

// Define hooks for pre-saving
PupSchema.pre('save', function (next) {
	if (!this.password) {
		console.log('models/pup.js =======NO PASSWORD PROVIDED=======');
		next();
	} else {
		console.log('models/pup.js hashPassword in pre save');
		
		this.password = this.hashPassword(this.password);
		next();
	}
})

const Pup = mongoose.model("Pup", PupSchema);

module.exports = Pup;
