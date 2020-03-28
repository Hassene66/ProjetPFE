const mongoose = require("mongoose");
const ProfileEcoleSchema = new mongoose.Schema({
  LogoEcole: {
    type: String,
    required: true
  },
  NomEcole: {
    type: String,
    required: true
  },
  NumeroDeTel: {
    type: String,
    required: true
  },
  Email: {
    type: String,
    required: true
  },
  EmplacementDeEcole: {
    type: String,
    required: true
  },
  LienFb: {
    type: String,
    required: true
  },
  LienTwitter: {
    type: String,
    required: true
  },
  LienLinkedIn: {
    type: String,
    required: true
  },
  MotDeDirecteur: {
    type: String,
    required: true
  },
  QuiSommeNous: {
    type: String,
    required: true
  },
  NbEleve: {
    type: Number,
    required: true
  },
  NbEnseignantCertifiés: {
    type: Number,
    required: true
  },
  tauxDeRéussite: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});
module.exports = ProfileEcole = mongoose.model(
  "profileEcole",
  ProfileEcoleSchema
);
