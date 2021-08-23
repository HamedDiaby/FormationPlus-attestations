var express = require('express');
var router = express.Router();
const conventionModel = require('../models/conventions');

const apiKey = 'FormationPlus_API_KEY';

/* GET creation de 100 conventions automatiquement */
// router.get('/generateConventions', async function(req, res, next) {
  
//   for(let i = 0; i < 100; i++){

//     var newConvention = new conventionModel({
//       idConvention: i,
//       nom: `Convention numéro ${i}`,
//       nbHeur: Number(Math.floor(Math.random() * 200))
//     })
//     await newConvention.save();

//   }

//   res.json('Convention généré.');
// });


// GET la liste convention
router.get('/list/:apiKey', async function(req, res, next) {

  if(req.params.apiKey == apiKey){

    var list = await conventionModel.find();
    res.json(list);

  } else {
    res.json('ApiKey non valide !')
  }

});

module.exports = router;