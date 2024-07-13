// Schéma de données utilisateur

class User {
    constructor (obj) {
        this.identifiant = obj.identifiant;
        this.password = obj.password;
    }
}

module.exports = User;