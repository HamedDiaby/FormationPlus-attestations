var express = require('express');
var router = express.Router();
var request = require('sync-request');

const etudiantModel = require('../models/etudiants');
const conventionModel = require('../models/conventions');

/* GET creation de 500 étudiants automatiquement. */
// router.get('/generateStudents', async function(req, res, next) {
  
//   const conventionsList = await conventionModel.find();
  
//   for(let i = 0; i < 500; i++){
//     var result = await request("get", "https://randomuser.me/api/");
//     var resultJSON = await JSON.parse(result.getBody());

//     var newStudent = new etudiantModel({
//       idEtudiant: `etudiant-${i}`,
//       nom: resultJSON.results[0].name.last,
//       prenom: resultJSON.results[0].name.first,
//       mail: resultJSON.results[0].email,
//       convention: conventionsList[Number(Math.floor(Math.random() * 100))]._id
//     })

//     await newStudent.save();
//   }

//   res.json('Etudiants généré.')

// });

module.exports = router;