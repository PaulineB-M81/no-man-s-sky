// Schéma des metadata lié à un utilisateur

class UserDataProfil {
    constructor (obj) {
        this.userId_metadata = obj.userId;
        this.pseudo_profil = obj.pseudo;
        this.img_profil = obj.img;
    }
}

module.exports = UserDataProfil;