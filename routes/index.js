var express = require('express');
var router = express.Router();

const etudiantModel = require('../models/etudiants');

/* GET home page. */
router.get('/',async function(req, res, next) {

  const studentList = await etudiantModel.find().populate('convention');

  res.render('index', { studentList: studentList });
});

module.exports = router;
