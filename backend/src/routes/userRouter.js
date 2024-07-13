// Reception de la requête => envoie sur le middleware pour faire les contrôles
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const cors = require("cors");

// POST method sign up endpoint
router.post("/signup", cors(), userController.signUP);


module.exports = router;