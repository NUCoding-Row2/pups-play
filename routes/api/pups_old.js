const router = require("express").Router();
const PupsController = require("../../controllers/PupsController");

// Matches with "/api/Pups"
router.route("/")
  .get(PupsController.findAll)
  .post(PupsController.create);

// Matches with "/api/Pups/:id"
router
  .route("/:id")
  .get(PupsController.findById)
  .put(PupsController.update)
  .delete(PupsController.remove);

module.exports = router;
