const express = require("express");
const router = express.Router();
const ContacterNous = require("../../models/ContacterNous");
router.route("/").post((req, res) => {
  const emailVisiteur = req.body.emailVisiteur;
  const nomVisiteur = req.body.nomVisiteur;
  const messageDuVisiteur = req.body.messageDuVisiteur;

  const contacterNous = new ContacterNous({
    emailVisiteur,
    nomVisiteur,
    messageDuVisiteur
  });
  contacterNous
    .save()
    .then(() => res.json("message visiteur envoyer avec succés"))
    .catch(err => res.status(400).json("Error: " + err));
});
module.exports = router;
