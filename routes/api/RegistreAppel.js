const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const RegistreAppel = require("../../models/RegistreAppel");

router.post("/Enregister", auth, async (req, res) => {
  try {
    const Registre = new RegistreAppel(req.body);
    Registre.save().then(
      res.json({ message: "Présence enregistrée avec sucess" })
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Err");
  }
});

router.post("/Get", async (req, res) => {
  try {
    const ListeAbsence = await RegistreAppel.find({
      Classe: req.body.classeSelectionné,
      Date: req.body.newDate,
    });
    if (ListeAbsence) {
      return res.json(ListeAbsence);
    } else {
      return res.json("Aucun enregistrement ");
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Err");
  }
});
router.post("/GetListe", async (req, res) => {
  try {
    const ListeAbsence = await RegistreAppel.find({
      "Absent.identifiant": req.body.identifiant,
    });
    if (ListeAbsence) {
      ListeAbsence.sort((a, b) => (a._id > b._id ? -1 : 1));
      return res.json(ListeAbsence);
    } else {
      return res.json("Aucun enregistrement ");
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Err");
  }
});

module.exports = router;
