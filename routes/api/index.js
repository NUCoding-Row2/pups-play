const router = require("express").Router();
const PupRoutes = require("./Pups");

// Pup routes
router.use("/Pups", PupRoutes);

module.exports = router;
