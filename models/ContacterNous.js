const mongoose = require("mongoose");

const ContacterNousSchema = new mongoose.Schema({
  emailVisiteur: {
    type: String,
    required: true
  },
  nomVisiteur: {
    type: String,
    required: true
  },
  messageDuVisiteur: {
    type: String,
    required: true
  }
});
module.exports = ContacterNous = mongoose.model(
  "contacterNous",
  ContacterNousSchema
);
