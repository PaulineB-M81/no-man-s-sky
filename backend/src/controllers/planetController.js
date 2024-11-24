const Planet = require("../models/planet");
const mySqlConnection = require("../db/db.mysql");

exports.getAllPlanets = async (req, res) => {
    try {
        await Planet.getAll((err, results) => {
            if (err) { 
                res.json({err})
            } else { 
                res.status(200).json({results})
            }
        })
    }

    catch (error) {
        res.status(500).json({error: error})
    }
}

exports.postPlanet = async (req, res) => {
    try {
        let planet = new Planet ({
            identifiant: req.body.identifiant,
            password: hashPassword
        });
        await planet.add();
        res.status(200).json({message: 'user successfully registered'});
    }

    catch (error) {
        res.status(500).json({error: error})
    }
}

exports.removePlanet = async (req, res) => {
    try {
 
    }

    catch (error) {
        res.status(500).json({error: error})
    }
}
