const router = require("express").Router();
const PupsController = require("../../controllers/PupsController");
var multer = require('multer')


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
    if (fileType === type) {
      safe = true;
    }
  }
  return safe;
};

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // cb(null, '../uploads')
    cb(null, 'files/')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})

// var upload = multer({ dest: '../../uploads'})
var upload = multer({ storage: storage });
// var upload = multer({
//   storage: storage,
//   fileFilter: (req, file, next) => {
//     if (!checkFileType(file.mimetype)) {
//       req.fileValidationError = true;
//       console.log("pups.js: Multer File binary format validated");
//       return next(null, false, req.fileValidationError);
//     } else {
//       console.log("pups.js: Multer File binary format validation failed.");
//       next(null, true);
//     }
//   }
// });

// ######## End of  Multer Configuration ###############

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

// Matches with "/api/pups/:id"
router
  .route("/:id")
  .get(PupsController.findById)
  .put(PupsController.update)
  .delete(PupsController.remove);


module.exports = router;
