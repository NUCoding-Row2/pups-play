const router = require("express").Router();
const passport = require('../../passport');
const multer = require('multer');
const PupsController = require("../../controllers/PupsController");

// ######## Multer Configuration ###############

const acceptedFilesTypes = [
  'image/jpeg',
  'image/tiff',
  'image/png',
  'image/WebP'
];

const checkFileType = fileType => {
  let safe = false;
  for (let type of acceptedFilesTypes) {
    console.log(type, fileType);
    if (fileType === type) {
      safe = true;
    }
  }
  console.log(safe);
  return safe;
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log("pups.js: Disk Storage Configuration on Multer 'files' folder");
    cb(null, 'files/')
  },
  filename: function (req, file, cb) {
    console.log("pups.js: Multer file", file);
    cb(null, file.fieldname + '-' + Date.now())
  }
})

// var upload = multer({ dest: '../../uploads'})
// const upload = multer({ storage: storage });
const upload = multer({
  storage: storage,
  fileFilter: (req, file, next) => {
    if (!checkFileType(file.mimetype)) {
      req.fileValidationError = true;
      console.log("pups.js: ERROR - Multer file format not valid format");
      return next(null, false, req.fileValidationError);
    } else {
      console.log("pups.js: Multer File binary format validated");
      next(null, true);
    }
  }
});

// ######## End of  Multer Configuration ###############

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
      photo: req.user.photo,
      date: req.user.date
    };
    res.send(userInfo);
  }
);

//Matches with "api/pups/user"
router.get('/user', (req, res, next) => {
  console.log('===== user!!======')
  console.log(req.user) //Right now this is coming back as undefined in the console.log but I can see that the user's info is available on every page when there's an active session...
  if (req.user) {
    res.json({ user: req.user })
  } else {
    res.json({ user: null })
  }
});

// Matches with "/api/pups/logout"
router.post('/logout', (req, res) => {
  if (req.user) {
    req.logout()
    res.send({ msg: 'logging out' })
  } else {
    res.send({ msg: 'no user to log out' })
  }
});

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
  .post(upload.single('picture'), PupsController.create);
  // .post(PupsController.create);

// Matches with "/api/pups/:id"
router
  .route("/:id")
  .get(PupsController.findById)
  .put(PupsController.update)
  .delete(PupsController.remove);

// Matches with "/api/pups/chat/:id"
router
  .route("/chat/:id")
  .get(PupsController.findById)
  .put(PupsController.update)
  .post(PupsController.addMessage)

// Match 
router
  .route("/chats/:messageFrom/:messageTo")
  // .route("/chats/:messageFrom/:messageTo")
  .post(PupsController.getMessages)

module.exports = router;
