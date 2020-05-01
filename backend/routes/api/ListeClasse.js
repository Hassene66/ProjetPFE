const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const auth = require("../../middleware/auth");

router.get("/", async (req, res) => {
  try {
    const ListeDesClasse = await User.find({
      typeUtilisateur: "élève",
    });
    const ListeClasse = [];
    ListeDesClasse.map((elem) => {
      if (!ListeClasse.includes(elem.profileEleve.classe)) {
        ListeClasse.push(elem.profileEleve.classe);
        ListeClasse.sort();
      }
    });
    if (ListeDesClasse) {
      return res.json(ListeClasse);
    } else {
      return res.json({ message: "Aucun enregistrement " });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Err");
  }
});

module.exports = router;
