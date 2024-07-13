// Reception des requests du server => dispatch les requetes selon leur routes
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

// Importer connection à la base de donnée
const mySql = require("./db/db.mysql");

// Création application express
const app = express();

// Logger les requests et les responses
app.use(morgan("dev"));

app.get('/', (req,res) => {
    mySql.query("SELECT * FROM users", (err, rows) => {
        if(err) throw err;
        res.json(rows);
    })
})

// Exporter l'application
module.exports = app;