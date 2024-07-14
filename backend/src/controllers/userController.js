// Logique métier qui communique avec la base de donnée

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mySqlConnection = require("../db/db.mysql");
const User = require("../models/Users");

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

// Authentification d'un utilisateur
exports.login = (req, res) => {
    mySqlConnection.query(
        'SELECT * FROM users WHERE identifiant = ? ', req.body.identifiant, (error, results) => {
            if(error) {
                res.status(500).json({error});
            } else {

                // Check si l'identifiant existe dans la bdd
                if(!results.length) {
                    return res.status(404).json({error: "user don't exist"});
                }

                // Check si le password est correct
                bcrypt.compare(req.body.password, results[0].password)
                .then((passwordValid) => {
                    // invalide
                    if(!passwordValid) {
                        return res.status(401).json({error: "invalid password"});
                    }

                    // valide
                    if(passwordValid) {
                        return res.status(200).json({
                            userId: results[0].id,
                            token: jwt.sign(
                                {userId: results[0].id},
                                process.env.JWT_KEY_TOKEN,
                                {expiresIn: "24h"}
                            )
                        });
                    }

                })
                .catch((error) => res.status(500).json({error}).send(console.log(error)));
                
            }
        }
    )
}