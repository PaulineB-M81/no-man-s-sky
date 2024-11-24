// Schéma de données utilisateur
const mySqlConnection = require("../db/db.mysql");

class User {
    constructor (obj) {
        this.identifiant = obj.identifiant;
        this.password = obj.password;
    }

    async save() {
        let querySql = `INSERT INTO users (identifiant, password) VALUES(?,?)`;
        mySqlConnection.query(
            querySql, [this.identifiant, this.password], (error, result) => {
                error ? error.code : result;
            }
        );
    }
}

module.exports = User;