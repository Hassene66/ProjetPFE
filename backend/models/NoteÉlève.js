const mongoose = require("mongoose");
const NoteÉlèveSchema = new mongoose.Schema({
  identifiant: {
    type: String,
    required: true,
  },
  PrénomEtNomEnseignant: {
    type: String,
    required: true,
  },
  matièreEnseigné: {
    type: String,
    required: true,
  },
  PrénomEtNomÉlève: {
    type: String,
    required: true,
  },
  noteContrôle1: {
    type: String,
    required: false,
  },
  noteContrôle2: {
    type: String,
    required: false,
  },
  noteContrôle3: {
    type: String,
    required: false,
  },
  noteSynthèse1: {
    type: String,
    required: false,
  },
  noteSynthèse2: {
    type: String,
    required: false,
  },
  noteSynthèse3: {
    type: String,
    required: false,
  },
});
module.exports = NoteÉlève = mongoose.model("noteÉlève", NoteÉlèveSchema);
