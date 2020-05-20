const mongoose = require("mongoose");
const MoyenneÉlèveSchema = new mongoose.Schema({
  identifiant: {
    type: String,
    required: true,
  },
  PrénomEtNomÉlève: {
    type: String,
    required: true,
  },
  MoyenneS1: {
    type: String,
    required: false,
  },
  MoyenneS2: {
    type: String,
    required: false,
  },
  MoyenneS3: {
    type: String,
    required: false,
  },
});
module.exports = MoyenneÉlève = mongoose.model(
  "moyenneÉlève",
  MoyenneÉlèveSchema
);
