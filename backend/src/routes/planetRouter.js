const express = require("express");
const router = express.Router();
const planetController = require("../controllers/planetController");

// GET method all planet endpoint
router.get("/", planetController.getAllPlanets);

module.exports = router;