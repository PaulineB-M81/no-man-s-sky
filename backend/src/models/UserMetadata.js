// Schéma des metadata lié à un utilisateur

class UserMetada {
    constructor (obj) {
        this.userId = obj.userId;
        this.pseudoProfil = obj.pseudoProfil;
        this.imgProfil = obj.imgProfil;
    }
}

module.exports = UserMetada;