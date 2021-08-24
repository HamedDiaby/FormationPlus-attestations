var express = require('express');
var router = express.Router();
const conventionModel = require('../models/conventions');

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
router.get('/list', async function(req, res, next) {

  var list = await conventionModel.find();
  res.json(list);

});

module.exports = router;