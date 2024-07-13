// Point d'entrée des requêtes => redirigé vers notre application
const http = require("http");

// Importer l'application app.js
const app = require("./app");

// Paramètrage du port
app.set("port", 5000);

// Création du serveur
const server = http.createServer(app);

// Ecouter les requêtes sur le port
server.listen(5000);