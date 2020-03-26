const mongoose = require("mongoose");
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
  niveau: {
    type: String,
    required: true
  },
  classe: {
    type: String,
    required: true
  },
  typeUtilisateur: {
    type: String,
    required: true
  }
});
module.exports = User = mongoose.model("user", UserSchema);
