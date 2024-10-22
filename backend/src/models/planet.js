// Schéma de données utilisateur
const mySqlConnection = require("../db/db.mysql");

class Planet {
    constructor (obj) {
        this.name = obj.name;
        this.biome = obj.biome;
        this.sentinel = obj.sentinel;
    }

    async getAll() {
        let querySql = `SELECT * FROM planet`;
        const newPlanet = mySqlConnection.query(
            querySql, (error, result) => {
                error ? error.code : result;
            }
        );
        console.log(result)
        return await newPlanet;
    }
}

module.exports = Planet;