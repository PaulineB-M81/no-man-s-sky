const mySql = require("mysql");

// Paramètres de connection à ma base de donnée
const connection = mySql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

// Connection à la base de donnée
connection.connect((err)=> {
    if(err) {
        console.log(`error connecting: ${err.stack}`)
    } else {
        console.log(`connected as id ${connection.threadId}`);
    }
})

module.exports = connection;