// Logique métier qui communique avec la base de donnée

const mySqlConnection = require("../db/db.mysql");
const User = require("../models/Users");
const bcrypt = require("bcrypt");

// Enregistrer un nouvel utilisateur dans la bdd
exports.register = (req, res) => {

    // Hasher le password
    bcrypt.hash(req.body.password, 10)
    .then((hash) => {
        const user = new User ({
            identifiant: req.body.identifiant,
            password: hash
        });

        mySqlConnection.query(
            'INSERT INTO users SET ?', user, (error, results) => {
                if (error) {
                    res.status(500).json(error);
                } else {
                    res.status(200).json("user successfully registered");
                }
            }
        )
    })
    .catch((error) => res.status(500).json({error}).send(console.log(error)));
}