// Schéma de données utilisateur
const mySqlConnection = require("../db/db.mysql");

class Planet {
    //constructor (obj) {
      //  this.name = obj.name;
      //  this.biome = obj.biome;
      //  this.sentinel = obj.sentinel;
   // }

    async getAll() {
        try {
            let querySql = `SELECT * FROM planet`;
            const newPlanet = mySqlConnection.query(
                querySql, (error, result) => {
                    error ? error.code : result;
                }
            );
            return newPlanet;
        }

        catch(err) {
            console.log(err)
        }
        
    }
}

module.exports = Planet;