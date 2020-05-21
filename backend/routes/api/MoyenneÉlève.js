const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const User = require("../../models/User");
const MoyenneÉlève = require("../../models/MoyenneÉlève");

router.post("/mesEleves", auth, async (req, res) => {
  try {
    const mesEleves = await User.find({
      "profileEleve.classe": req.body.classe,
      typeUtilisateur: "élève",
    });

    if (mesEleves.length > 0) {
      res.json(mesEleves);
    } else {
      res.send("I'l n'y pas des élèves dans cette classe");
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("erreur du serveur");
  }
});

router.post("/EnregistrerMoyenne", async (req, res) => {
  const {
    identifiant,
    PrénomEtNomÉlève,
    MoyenneS1,
    MoyenneS2,
    MoyenneS3,
  } = req.body;

  const MoyenneÉlèveFields = {};

  if (identifiant) MoyenneÉlèveFields.identifiant = identifiant;

  if (PrénomEtNomÉlève) MoyenneÉlèveFields.PrénomEtNomÉlève = PrénomEtNomÉlève;
  if (MoyenneS1) MoyenneÉlèveFields.MoyenneS1 = MoyenneS1;
  if (MoyenneS2) MoyenneÉlèveFields.MoyenneS2 = MoyenneS2;
  if (MoyenneS3) MoyenneÉlèveFields.MoyenneS3 = MoyenneS3;
  try {
    let MoyenneÉlèves = await MoyenneÉlève.findOne({
      identifiant: identifiant,
    });

    if (MoyenneÉlèves) {
      //update
      //find the profile of the student grades and then update it with the new entred fields
      MoyenneÉlèves = await MoyenneÉlève.findOneAndUpdate(
        { identifiant: identifiant },
        { $set: MoyenneÉlèveFields },
        { new: true }
      );
      return res.json({ message: "Moyenne élève a été mise à jour " });
    }
    //create
    let MoyennesÉlève = new MoyenneÉlève(MoyenneÉlèveFields); //create a new profile with the new entred fields
    await MoyennesÉlève.save(); //save the new profile in db
    return res.json({ message: "Moyenne élève a été crée " });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Err");
  }
});

router.post("/MoyenneEleve", async (req, res) => {
  try {
    let getMoyenneÉlève = await MoyenneÉlève.findOne({
      identifiant: req.body.identifiant,
    });

    if (getMoyenneÉlève) {
      const MoyenneEleve = {};
      MoyenneEleve.MoyenneS1 = "";
      MoyenneEleve.MoyenneS2 = "";
      MoyenneEleve.MoyenneS3 = "";

      if (getMoyenneÉlève.identifiant) {
        MoyenneEleve.identifiant = getMoyenneÉlève.identifiant;
      }

      if (getMoyenneÉlève.PrénomEtNomÉlève) {
        MoyenneEleve.PrénomEtNomÉlève = getMoyenneÉlève.PrénomEtNomÉlève;
      }
      if (getMoyenneÉlève.MoyenneS1) {
        MoyenneEleve.MoyenneS1 = getMoyenneÉlève.MoyenneS1;
      }

      if (getMoyenneÉlève.MoyenneS2) {
        MoyenneEleve.MoyenneS2 = getMoyenneÉlève.MoyenneS2;
      }

      if (getMoyenneÉlève.MoyenneS3) {
        MoyenneEleve.MoyenneS3 = getMoyenneÉlève.MoyenneS1;
      }
      return res.json(MoyenneEleve);
    } else {
      return res.json("Aucun enregistrement précédent");
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Err");
  }
});

module.exports = router;
