// Reception de la requête => envoie sur le middleware pour faire les contrôles
const express = require("express");
const cors = require("cors");
const router = express.Router();
const userController = require("../controllers/userController");
const passwordMiddleware = require("../middleware/passwordMiddleware");

// POST method register endpoint
router.post("/register", cors(), passwordMiddleware.passwordChecked, userController.register);


module.exports = router;