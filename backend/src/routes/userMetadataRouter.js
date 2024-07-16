// Reception de la requête => envoie sur le middleware pour faire les contrôles
const express = require("express");
const router = express.Router();
const userMetadataController = require("../controllers/userMetadataController");
// const passwordMiddleware = require("../middleware/passwordMiddleware");

// POST method création des metadata endpoint
router.post("/profil", userMetadataController.createProfil);
router.get("/profil/:id", userMetadataController.getProfil);
// TODO ajouter route put delete

// create character list
// create todo list

module.exports = router;