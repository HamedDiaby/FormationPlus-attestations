const mongoose = require('./connexionBDD');

var attestationsSchema = mongoose.Schema({
    idAttestation: Number,
    etudiant: { type: mongoose.Schema.Types.ObjectId, ref: 'etudiants' },
    convention: { type: mongoose.Schema.Types.ObjectId, ref: 'conventions' },
    message: String
});

const attestationsModel = mongoose.model('attestations', attestationsSchema);

module.exports = attestationsModel;