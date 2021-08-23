var express = require('express');
var router = express.Router();
var request = require('sync-request');

const etudiantModel = require('../models/etudiants');
const conventionModel = require('../models/conventions');

const apiKey = 'FormationPlus_API_KEY';

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

// GET la liste d'etudiants
router.get('/list/:apiKey', async function(req, res, next) {

  if(req.params.apiKey == apiKey){

    var list = await etudiantModel.find();
    res.json(list);

  } else {
    res.json('ApiKey non valide !')
  }

});

// GET etudiant by ID
router.get('/etudiant/:apiKey/:idEtudiant', async function(req, res, next) {

  if(req.params.apiKey == apiKey){

    if(req.query.convention == 'true'){
      var student = await etudiantModel.findOne({idEtudiant: req.params.idEtudiant}).populate('convention');
      res.json(student);
    } else {
      var student = await etudiantModel.findOne({idEtudiant: req.params.idEtudiant});
      res.json(student);
    }

  } else {
    res.json('ApiKey non valide !')
  }

});

module.exports = router;