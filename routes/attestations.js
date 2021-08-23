var express = require('express');
var router = express.Router();

const attestationsModel = require('../models/attestations');

const apiKey = 'FormationPlus_API_KEY';

/* Post creation d'une nouvel attestation. */
router.post('/newAttestation',async function(req, res, next) {

  const attestationList = await attestationsModel.find();

  const student = JSON.parse(req.body.student);
  
  if(student && req.body.message){
    var newAttestation = new attestationsModel({
      idAttestation: Number(attestationList.length + 1),
      etudiant: student._id,
      convention: student.convention._id,
      message: req.body.message
    });
    await newAttestation.save();
  }

  res.redirect('/');

});

// GET la liste convention
router.get('/list/:apiKey', async function(req, res, next) {

  if(req.params.apiKey == apiKey){

    if(req.query.details == 'true'){
      var list = await attestationsModel.find().populate('etudiant').populate('convention');
      res.json(list);
    } else if(req.query.idAttestation){
      var list = await attestationsModel.findOne({idAttestation: req.query.idAttestation}).populate('etudiant').populate('convention');
      res.json(list);
    } else {
      var list = await attestationsModel.find();
      res.json(list);
    }

  } else {
    res.json('ApiKey non valide !')
  }

});

module.exports = router;