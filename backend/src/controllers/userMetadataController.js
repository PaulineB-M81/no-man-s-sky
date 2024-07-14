// Logique métier qui communique avec la base de donnée

const mySqlConnection = require("../db/db.mysql");
const UserMetada = require("../models/UserMetadata");

exports.createProfil = (req, res) => {

     console.log(req.body.userProfil)

}