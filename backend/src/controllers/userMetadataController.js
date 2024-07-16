// Logique métier qui communique avec la base de donnée

const mySqlConnection = require("../db/db.mysql");
const UserDataProfil = require("../models/UserDataProfil");

exports.createProfil = (req, res) => {
    console.log(req.body.userId)
     const userProfil = new UserDataProfil({
            userId: req.body.userId,
            pseudo: req.body.userProfil.pseudo,
            img: req.body.userProfil.imgProfil
     })
    
     const querySql = `INSERT INTO user_data_profil SET ?`;
     
     mySqlConnection.query(
          querySql, userProfil, (error, results) => {
              if (error) {
                  res.status(500).json(error);
              } else {
                  res.status(200).json("user profil create !");
              }
          }
      )
}

exports.getProfil = async (req, res) => {
    try {
        const userId = req.params;
        querySql = `SELECT * FROM user_data_profil WHERE userId_metadata=${userId.id}`;
        const userProfildata = await mySqlConnection.query(
           querySql, (error, results) => {
            if(error) {
                res.json({error})
            } else {
                res.status(200).json({results})
            }
           }
        ) 
    }

    catch (error) {
        res.status(500).json({error: error})
    }
     
}