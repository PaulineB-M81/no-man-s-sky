// Point d'entrée des requests => redirigé vers notre application
const http = require("http");

// Importer les variables d'environnement
const dotenv = require("dotenv");
const result = dotenv.config();

// Importer l'application app.js
const app = require("./app");

// Paramètrage du port
app.set("port", process.env.PORT);

// Création du serveur
const server = http.createServer(app);

// Ecouter les requests sur le port
server.listen(process.env.PORT);