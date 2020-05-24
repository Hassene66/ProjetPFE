const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const auth = require("../../middleware/auth");

router.post("/", auth, async (req, res) => {
  try {
    const ListeEnseignant = await User.find({
      typeUtilisateur: "enseignant",
    });
    const ListeDesEnseignants = [];
    ListeEnseignant.map((elem) => {
      if (elem.profileEnseignant.classeEnseigné.includes(req.body.MonClasse)) {
        ListeDesEnseignants.push(elem);
        ListeDesEnseignants.sort();
      }
    });
    if (ListeEnseignant) {
      return res.json(ListeDesEnseignants);
    } else {
      return res.json({ message: "Aucun enregistrement " });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Err");
  }
});

module.exports = router;
