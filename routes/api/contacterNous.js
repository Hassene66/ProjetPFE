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
    messageDuVisiteur,
  });
  contacterNous
    .save()
    .then(() => res.json("message visiteur envoyer avec succés"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/", async (req, res) => {
  try {
    const contacterNous = await ContacterNous.find();
    res.json(contacterNous);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("erreur du serveur");
  }
});
router.delete("/msg/:id", (req, res) => {
  ContacterNous.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      return res.status(404).json({ err: err });
    }

    return res.json({ message: "message deleted" });
  });
});
router.route("/countDocuments").get(function (req, res) {
  ContacterNous.count({}, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

module.exports = router;
