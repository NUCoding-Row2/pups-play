const router = require("express").Router();
const PupsController = require("../../controllers/PupsController");
var multer  = require('multer')


// Multer Configuration

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})
 
var upload = multer({ storage: storage })
// var upload = multer({ dest: '../../uploads'})


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
  .post(upload.single('picture'),PupsController.create);

// Matches with "/api/pups/:id"
router
  .route("/:id")
  .get(PupsController.findById)
  .put(PupsController.update)
  .delete(PupsController.remove);


module.exports = router;
