const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 5000;

// import connection à la base de donnée
const mySql = require("./db/db.mysql");

// Création application express
const app = express();

app.get('/', (req,res) => {
    mySql.query("SELECT * FROM users", (err, rows) => {
        if(err) throw err;
        res.json(rows);
    })
})

app.listen(port, () => {
    console.log('serveur en ligne ! ')
}) 