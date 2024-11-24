// Schéma de donnéesplanet
const mySqlConnection = require("../db/db.mysql");

class Planet {
    constructor (obj) {
        this.name = obj.name;
        this.biome = obj.biome;
        this.sentinel = obj.sentinel;
    }

    static async getAll(callback) {
        let querySql = `SELECT * FROM planet`;
        mySqlConnection.query(
                querySql, (error, results) => {
                    error ? callback(error, null) : callback(null, results);
                }
            );
    }

    async add() {
        let querySql = `INSERT INTO planet (name, biome, sentinel-level) VALUES(?,?)`;
        mySqlConnection.query(
            querySql, [this.name, this.biome, this.sentinel], (error, result) => {
                error ? error.code : result;
            }
        );
    }

    async remove(planetId) {
        let querySql = `DELETE FROM planet WHERE id = ${planetId}`;
        mySqlConnection.query(
            querySql, (error, results) => {
                error ? callback(error, null) : callback(null, results);
            }
        );
    }
}

module.exports = Planet;