const mongoose = require("mongoose");
const MsgSchema = new mongoose.Schema({
  prenomEmetteur: {
    type: String,
    required: true,
  },
  nomEmetteur: {
    type: String,
    required: true,
  },
  identifiantEmetteur: {
    type: String,
    required: true,
  },
  classeEmetteur: {
    type: String,
    required: true,
  },
  prenomDestinataire: {
    type: String,
    required: true,
  },
  nomDestinataire: {
    type: String,
    required: true,
  },
  identifiantDestinataire: {
    type: String,
    required: true,
  },
  Sujet: {
    type: String,
    required: true,
  },
  Message: {
    type: String,
    required: true,
  },
});
const ContacterSchema = new mongoose.Schema({
  ListeDesMesages: {
    type: [MsgSchema],
    required: true,
  },
});
module.exports = Contacter = mongoose.model("contacter", ContacterSchema);
