// Logique métier qui communique avec la base de donnée
const mySqlConnection = require("../db/db.mysql");
const User = require("../models/Users");

// Enregistrer un nouvel utilisateur dans la bdd
exports.signUP = (req, res) => {
    const user = new User ({
        identifiant: req.body.identifiant,
        password: req.body.password
    });


    mySqlConnection.query(
        'INSERT INTO users SET ?', user, (error, results) => {
            if (error) {
                res.status(500).json(error);
            } else {
                res.status(200).json("utilisateur enregistré avec succes");
            }
        }
    )
}