const router = require("express").Router();
const PupRoutes = require("./pups");

// Pup routes
router.use("/pups", PupRoutes);

module.exports = router;
