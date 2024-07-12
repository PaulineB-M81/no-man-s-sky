const mySql = require("mysql");

// Paramètres de connection à ma base de donnée
const connection = mySql.createConnection({
    host:'localhost',
    user: 'root',
    password: '',
    database: 'world_of_collection'
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