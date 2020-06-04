const mongoose = require("mongoose");
const RegistreAppelSchema = new mongoose.Schema({
  PrénomEtNomEnseignant: {
    type: String,
    required: true,
  },
  matièreEnseigné: {
    type: String,
    required: true,
  },
  Date: {
    type: String,
    required: true,
  },
  Temps: {
    type: String,
    required: true,
  },
  Classe: {
    type: String,
    required: true,
  },
  Niveau: {
    type: String,
    required: true,
  },
  Present: {
    type: [String],
    required: true,
  },
  Absent: {
    type: [String],
    required: true,
  },
});
module.exports = RegistreAppel = mongoose.model(
  "registreAppel",
  RegistreAppelSchema
);
