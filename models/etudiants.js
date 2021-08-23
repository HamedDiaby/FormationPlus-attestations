const mongoose = require('./connexionBDD');

var etudiantsSchema = mongoose.Schema({
    idEtudiant: String,
    nom: String,
    prenom: String,
    mail: String,
    convention: { type: mongoose.Schema.Types.ObjectId, ref: 'conventions' }
});

const etudiantModel = mongoose.model('etudiants', etudiantsSchema);

module.exports = etudiantModel;