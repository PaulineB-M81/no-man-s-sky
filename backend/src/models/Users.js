// Schéma de données utilisateur
const mySqlConnection = require("../db/db.mysql");

class User {
    constructor (obj) {
        this.identifiant = obj.identifiant;
        this.password = obj.password;
    }

    async save() {
        let querySql = `INSERT INTO users (identifiant, password) VALUES(?,?)`;
        const newUser = mySqlConnection.query(
            querySql, [this.identifiant, this.password], (error, result) => {
                error ? error.code : result;
            }
        );
        return await newUser;
    }
}

module.exports = User;