// Contrôler l'authentification => envoie au controler
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try {
        // Récuper le token dans le header authorization
        const token = req.headers.authorization.split(" ")[1];
        
        // Décoder le token
        const decodedToken = jwt.verify(token, process.env.JWT_KEY_TOKEN);

        // Comparer userId du token et userId envoyer par le front
        const userIdDecodedTOken = decodedToken.userId;
        const userIdFront = req.body.userId;

        if(userIdFront !== userIdDecodedTOken) {
            throw "Invalid user id";
        } else {
            next();
        }

    } catch(error) {
        res.status(401).json({error: error});
    }
}