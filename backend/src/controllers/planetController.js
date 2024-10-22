const Planet = require("../models/planet");

// Afficher toutes les panets
exports.getAllPlanets = async (req, res) => {
    try {

        const planets = await Planet.getAllPlanets();
    
        
        res.status(200).json({planets});
        
        
    }

    catch (error) {
        res.status(500).json({error: 'bad request: get All planets'});
    }
}