const Planet = require("../models/planet");
const mySqlConnection = require("../db/db.mysql");

// Afficher toutes les panets
exports.getAllPlanetsT = async (req, res) => {
   try {

     // Save user
     let planet = new Planet ({
      
    });

       const planets = await Planet.getAllPlanets();
    console.log(planets)
       // res.status(200).json({planets});
        
    }

    catch (error) {
        res.status(500).json({error: 'bad request: get All planets'});
    }
}

exports.getAllPlanets = async (req, res) => {
    try {
        let querySql = `SELECT * FROM planet`;

        const newPlanet = await mySqlConnection.query(
           querySql, (error, results) => {
            if(error) {
                res.json({error})
            } else {
                res.status(200).json({results})
            }
           }
        ) 
    }

    catch (error) {
        res.status(500).json({error: error})
    }
     
}