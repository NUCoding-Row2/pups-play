const passport = require('passport')
const LocalStrategy = require('./localStrategy')
// const User = require('../database/models/user')
const User = require('../models/pup')

// called on login, saves the id to session req.session.passport.user = {id:'..'}
passport.serializeUser((user, done) => {
	console.log('*** serializeUser called, user: ')
	console.log(user) // the whole raw user object!
	console.log('---------')
	done(null, user._id ) // olivia told me to add this instead
	// done(null, { _id: user._id })
})

// user object attaches to the request as req.user
// right now this doesn't look like it ever gets called anywhere because on the '/user' route the user is coming back as undefined
passport.deserializeUser((id, done) => {
	console.log('DeserializeUser called')
	User.findById(
		id,
		// { _id: id },
		// 'email',
		(err, user) => {
			console.log('*** Deserialize user, user:')
			console.log(user)
			console.log('--------------')
			done(null, user)
		}
	)
})

//  Use Strategies 
passport.use(LocalStrategy)

module.exports = passport
