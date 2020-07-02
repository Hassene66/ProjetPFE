const mongoose = require("mongoose");

const élèveSchema = new mongoose.Schema({
  classe: {
    type: String,
  },
  niveau: {
    type: String,
  },
  PrénomParent: {
    type: String,
  },
  NomParent: {
    type: String,
  },
  identifiantParent: {
    type: String,
  },
});

const enseignantSchema = new mongoose.Schema({
  classeEnseigné: {
    type: [String],
  },
  niveauEnseigné: {
    type: [String],
  },
  matièreEnseigné: {
    type: String,
  },
});
const parentSchema = new mongoose.Schema({
  identifiantÉlève: {
    type: String,
  },
  prénomÉlève: {
    type: String,
  },
  nomÉlève: {
    type: String,
  },
});

const UserSchema = new mongoose.Schema({
  prénom: {
    type: String,
    required: true,
  },
  nom: {
    type: String,
    required: true,
  },

  identifiant: {
    type: String,
    required: true,
  },
  motDePasse: {
    type: String,
    required: true,
  },

  typeUtilisateur: {
    type: String,
    required: true,
  },
  profileEnseignant: {
    type: enseignantSchema,
    required: false,
  },
  profileEleve: {
    type: élèveSchema,
    required: false,
  },
  profileParent: {
    type: parentSchema,
    required: false,
  },
});
module.exports = User = mongoose.model("user", UserSchema);
