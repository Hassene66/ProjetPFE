const mongoose = require("mongoose");

const élèveSchema = new mongoose.Schema({
  classe: {
    type: String
  },
  niveau: {
    type: String
  }
});

const enseignantSchema = new mongoose.Schema({
  classeEnseigné: {
    type: [String]
  },
  niveauEnseigné: {
    type: [String]
  }
});

const adminSchema = new mongoose.Schema({
  classeEnseigné: {
    type: String
  },
  niveau: {
    type: String
  }
});

const UserSchema = new mongoose.Schema({
  prénom: {
    type: String,
    required: true
  },
  nom: {
    type: String,
    required: true
  },

  identifiant: {
    type: String,
    required: true
  },
  motDePasse: {
    type: String,
    required: true
  },

  typeUtilisateur: {
    type: String,
    required: true
  },
  profileEnseignant: {
    type: enseignantSchema,
    required: false
  },
  profileEleve: {
    type: [élèveSchema],
    required: false
  },
  profileAdmin: {
    type: adminSchema,
    required: false
  }
});
module.exports = User = mongoose.model("user", UserSchema);
