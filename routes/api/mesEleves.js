const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const User = require("../../models/User");
const NoteÉlève = require("../../models/NoteÉlève");

router.post("/mesEleves", auth, async (req, res) => {
  try {
    const mesEleves = await User.find({
      typeUtilisateur: "élève",
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

router.post("/EnregistrerNote", auth, async (req, res) => {
  const {
    identifiant,
    PrénomEtNomEnseignant,
    matièreEnseigné,
    PrénomEtNomÉlève,
    Niveau,
    Classe,
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
  if (Niveau) NoteÉlèveFields.Niveau = Niveau;
  if (Classe) NoteÉlèveFields.Classe = Classe;
  if (noteContrôle1) NoteÉlèveFields.noteContrôle1 = noteContrôle1;
  if (noteContrôle2) NoteÉlèveFields.noteContrôle2 = noteContrôle2;
  if (noteContrôle3) NoteÉlèveFields.noteContrôle3 = noteContrôle3;
  if (noteSynthèse1) NoteÉlèveFields.noteSynthèse1 = noteSynthèse1;
  if (noteSynthèse2) NoteÉlèveFields.noteSynthèse2 = noteSynthèse2;
  if (noteSynthèse3) NoteÉlèveFields.noteSynthèse3 = noteSynthèse3;
  try {
    let noteÉlève = await NoteÉlève.findOne({
      identifiant: identifiant,
      matièreEnseigné: matièreEnseigné,
    });
    if (noteÉlève) {
      //update
      //find the profile of the student grades and then update it with the new entred fields
      noteÉlève = await NoteÉlève.findOneAndUpdate(
        { identifiant: identifiant, matièreEnseigné: matièreEnseigné },
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

router.post("/NoteEleve", auth, async (req, res) => {
  try {
    let getNoteÉlève = await NoteÉlève.findOne({
      identifiant: req.body.identifiant,
      matièreEnseigné: req.body.matièreEnseigné,
    });

    if (getNoteÉlève) {
      const noteEleve = {};
      noteEleve.noteContrôle1 = "";
      noteEleve.noteContrôle2 = "";
      noteEleve.noteContrôle3 = "";
      noteEleve.noteSynthèse1 = "";
      noteEleve.noteSynthèse2 = "";
      noteEleve.noteSynthèse3 = "";
      if (getNoteÉlève.identifiant) {
        noteEleve.identifiant = getNoteÉlève.identifiant;
      }
      if (getNoteÉlève.PrénomEtNomEnseignant) {
        noteEleve.PrénomEtNomEnseignant = getNoteÉlève.PrénomEtNomEnseignant;
      }
      if (getNoteÉlève.matièreEnseigné) {
        noteEleve.matièreEnseigné = getNoteÉlève.matièreEnseigné;
      }
      if (getNoteÉlève.PrénomEtNomÉlève) {
        noteEleve.PrénomEtNomÉlève = getNoteÉlève.PrénomEtNomÉlève;
      }
      if (getNoteÉlève.noteContrôle1) {
        noteEleve.noteContrôle1 = getNoteÉlève.noteContrôle1;
      }

      if (getNoteÉlève.noteContrôle2) {
        noteEleve.noteContrôle2 = getNoteÉlève.noteContrôle2;
      }

      if (getNoteÉlève.noteContrôle3) {
        noteEleve.noteContrôle3 = getNoteÉlève.noteContrôle3;
      }

      if (getNoteÉlève.noteSynthèse1) {
        noteEleve.noteSynthèse1 = getNoteÉlève.noteSynthèse1;
      }

      if (getNoteÉlève.noteSynthèse2) {
        noteEleve.noteSynthèse2 = getNoteÉlève.noteSynthèse2;
      }

      if (getNoteÉlève.noteSynthèse3) {
        noteEleve.noteSynthèse3 = getNoteÉlève.noteSynthèse3;
      }

      return res.json(noteEleve);
    } else {
      return res.json({ message: "Aucun enregistrement précédent" });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Err");
  }
});

router.post("/MesNotes", auth, async (req, res) => {
  try {
    let MesNotes = await NoteÉlève.find({
      identifiant: req.body.identifiant,
    });
    if (MesNotes) {
      return res.json(MesNotes);
    } else {
      return res.json({ message: "Aucun enregistrement précédent" });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Err");
  }
});

module.exports = router;
