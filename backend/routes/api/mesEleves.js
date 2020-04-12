const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const User = require("../../models/User");
const NoteÉlève = require("../../models/NoteÉlève");

router.post("/mesEleves", auth, async (req, res) => {
  try {
    const mesEleves = await User.find({
      "profileEleve.classe": req.body.classe,
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
module.exports = router;

router.post("/EnregistrerNote", auth, async (req, res) => {
  const {
    identifiant,
    PrénomEtNomEnseignant,
    matièreEnseigné,
    PrénomEtNomÉlève,
    noteContrôle1,
    noteContrôle2,
    noteContrôle3,
    noteSynthèse1,
    noteSynthèse2,
    noteSynthèse3,
  } = req.body;

  const NoteÉlèveFields = {};

  if (identifiant) NoteÉlèveFields.identifiant = identifiant;
  if (PrénomEtNomEnseignant)
    NoteÉlèveFields.PrénomEtNomEnseignant = PrénomEtNomEnseignant;
  if (matièreEnseigné) NoteÉlèveFields.matièreEnseigné = matièreEnseigné;
  if (PrénomEtNomÉlève) NoteÉlèveFields.PrénomEtNomÉlève = PrénomEtNomÉlève;
  if (noteContrôle1) NoteÉlèveFields.noteContrôle1 = noteContrôle1;
  if (noteContrôle2) NoteÉlèveFields.noteContrôle2 = noteContrôle2;
  if (noteContrôle3) NoteÉlèveFields.noteContrôle3 = noteContrôle3;
  if (noteSynthèse1) NoteÉlèveFields.noteSynthèse1 = noteSynthèse1;
  if (noteSynthèse2) NoteÉlèveFields.noteSynthèse2 = noteSynthèse2;
  if (noteSynthèse3) NoteÉlèveFields.noteSynthèse3 = noteSynthèse3;

  try {
    let noteÉlève = await NoteÉlève.findOne({
      identifiant: identifiant,
    });
    if (noteÉlève) {
      //update
      //find the profile of the school then update it with the new entred fields
      noteÉlève = await NoteÉlève.findOneAndUpdate(
        { identifiant: identifiant },
        { $set: NoteÉlèveFields },
        { new: true }
      );
      return res.json({ message: "Note élève a été mise à jour " });
    }
    //create
    noteÉlève = new NoteÉlève(NoteÉlèveFields); //create a new profile with the new entred fields
    await noteÉlève.save(); //save the new profile in db
    return res.json({ message: "Note élève a été crée " });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Err");
  }
});

module.exports = router;
