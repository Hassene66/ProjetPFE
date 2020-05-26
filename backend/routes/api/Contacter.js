const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const auth = require("../../middleware/auth");
const ContacterEnseignant = require("../../models/Contacter");

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
      return res.json("Aucun enregistrement ");
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Err");
  }
});

router.post("/Enseignant", async (req, res) => {
  try {
    let PrevMessage = await ContacterEnseignant.findOne({});
    if (PrevMessage) {
      //update
      //find the profile of the student grades and then update it with the new entred fields
      await ContacterEnseignant.findOneAndUpdate(
        {},
        { $addToSet: req.body },
        { new: true }
      );
      return res.json({ message: "Message a été envoyé avec succès" });
    } else {
      let ContacterEns = new ContacterEnseignant(req.body);
      await ContacterEns.save();
      return res.json({ message: "Message a été envoyé avec succès" });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Err");
  }
});

router.post("/Delete", async (req, res) => {
  try {
    await ContacterEnseignant.findOneAndUpdate(
      {},
      { $pull: { ListeDesMesages: { _id: req.body._id } } },
      { safe: true, multi: true }
    );
    return res.json({ message: "Message a été supprimé avec succès" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Err");
  }
});
router.post("/Get", async (req, res) => {
  try {
    const ListeMessages = await ContacterEnseignant.find({});
    const ListeDesMessages = [];
    ListeMessages[0].ListeDesMesages.map((elem) => {
      if (elem.identifiantDestinataire === req.body.identifiant) {
        ListeDesMessages.push(elem);
        ListeDesMessages.sort((a, b) => (a._id > b._id ? -1 : 1));
      }
    });
    if (ListeMessages) {
      return res.json(ListeDesMessages);
    } else {
      return res.json("Il n'y a pas des nouveaux messages");
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Err");
  }
});

module.exports = router;
