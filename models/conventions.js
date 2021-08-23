const mongoose = require('./connexionBDD');

var convetionsSchema = mongoose.Schema({
    idConvention: Number,
    nom: String,
    nbHeur: Number
});

const conventionModel = mongoose.model('conventions', convetionsSchema);

module.exports = conventionModel;