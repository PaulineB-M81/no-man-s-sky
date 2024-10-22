// Reception de la requête => envoie sur le middleware pour faire les contrôles
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const passwordMiddleware = require("../middleware/passwordMiddleware");

// POST method register endpoint
router.post("/register", passwordMiddleware.passwordChecked, userController.register);

// POST method login endpoint
router.post("/login", passwordMiddleware.passwordChecked, userController.login);

module.exports = router;