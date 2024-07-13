// Reception des requests du server => dispatch les requetes selon leur routes
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

// Importer connection à la base de donnée
const mySql = require("./db/db.mysql");

// Création application express
const app = express();

// Transformer le body en json
app.use(bodyParser.json());

// Logger les requests et les responses
app.use(morgan("dev"));

// Configurer les CORS (front et back sur des serveurs différents)
app.use(cors());


app.get('/', (req,res) => {
    mySql.query("SELECT * FROM users", (err, rows) => {
        if(err) throw err;
        res.json(rows);
    })
})

// Exporter l'application
module.exports = app;