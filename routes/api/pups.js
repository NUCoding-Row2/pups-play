const router = require("express").Router();
const passport = require('../../passport');
const PupsController = require("../../controllers/PupsController");

// Matches with "/api/pups/login"
router.post(
  '/login',
  function (req, res, next) {
    console.log('routes/api/pups.js, login, req.body: ');
    console.log(req.body)
    next()
  },
  passport.authenticate('local'),
  (req, res) => {
    console.log('logged in', req.user);
    let userInfo = {
      ownername: req.user.ownername,
      email: req.user.email,
      password: req.user.password,
      pupname: req.user.pupname,
      breed: req.user.breed,
      age: req.user.age,
      size: req.user.size,
      location: req.user.location,
      bio: req.user.bio,
      date: req.user.date
    };
    res.send(userInfo);
  }
);

// Matches with "/api/pups/logout"
router.post('/logout', (req, res) => {
  if (req.user) {
      req.logout()
      res.send({ msg: 'logging out' })
  } else {
      res.send({ msg: 'no user to log out' })
  }
});

//Adding this anywhere in the app screws up the view pups route - I get a Pups.map is not a function error
// router.get('/', (req, res, next) => {
//   console.log('===== user!!======')
//   console.log(req.user)
//   if (req.user) {
//       res.json({ user: req.user })
//   } else {
//       res.json({ user: null })
//   }
// });

// Matches with "/api/pups/location"
router
  .route("/location")
  .post(PupsController.findByLocation);

// Matches with "/api/pups/age"
router
  .route("/age")
  .post(PupsController.findByAge);

// Matches with "/api/pups/size"
router
  .route("/size")
  .post(PupsController.findBySize);

// Matches with "/api/pups/breed"
router
  .route("/breed")
  .post(PupsController.findByBreed);


// Matches with "/api/pups"
router.route("/")
  .get(PupsController.findAll)
  .post(PupsController.create);

// Matches with "/api/pups/user"
router.route("/")

// Matches with "/api/pups/:id"
router
  .route("/:id")
  .get(PupsController.findById)
  .put(PupsController.update)
  .delete(PupsController.remove);

module.exports = router;
