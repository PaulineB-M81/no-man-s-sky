// Reception de la requête => envoie sur le middleware pour faire les contrôles
const express = require("express");
const router = express.Router();
const userMetadataController = require("../controllers/userMetadataController");
// const passwordMiddleware = require("../middleware/passwordMiddleware");

// POST method création des metadata endpoint
router.post("/create-profil", userMetadataController.createProfil);

// create character list
// create todo list

module.exports = router;