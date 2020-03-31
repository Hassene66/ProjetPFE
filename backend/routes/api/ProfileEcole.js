const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const ProfileEcole = require("../../models/ProfileEcole");
const { check, validationResult } = require("express-validator");
//@route GET ParameterMonEcole
//@desc Get current school profile
// @access Public
router.get("/getProfile", async (req, res) => {
  try {
    const profileEcole = await ProfileEcole.findOne();
    res.json(profileEcole);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("erreur du serveur");
  }
});
//@route POST /ParameterMonEcole
//@desc Create or update the schoolProfile
// @access Private
router.post(
  "/",
  [
    auth,
    [
      check("LogoEcole", "Le lien du logo de l'école est requis")
        .not()
        .isEmpty(),
      check("NomEcole", "Le nom de l'école est requis")
        .not()
        .isEmpty(),
      check(
        "NumeroDeTel",
        "Entrez un numéro de téléphone valide avec 8 chiffres"
      )
        .isLength({ min: 8, max: 8 })
        .isMobilePhone(),
      check("Email", "Entrez une adresse mail valide").isEmail(),
      check("EmplacementDeEcole", "L'emplacement de l'école est requis")
        .not()
        .isEmpty(),
      check("LienFb", "Entrez un lien vers la page Facebook valide")
        .not()
        .isEmpty()
        .isURL(),
      check("LienTwitter", "Entrez un lien vers la page Twitter valide")
        .not()
        .isEmpty()
        .isURL(),
      check("LienLinkedIn", "Entrez un lien vers la page LinkedIn valide")
        .not()
        .isEmpty()
        .isURL(),
      check(
        "MotDeDirecteur",
        "Entrez le mot de directeur avec un min de 10 lettres "
      )
        .not()
        .isEmpty()
        .isString()
        .isLength({ min: 10 }),
      check(
        "QuiSommeNous",
        "Entrez un paragraph ' QuiSommeNous ' avec un min de 10 lettres"
      )
        .not()
        .isEmpty()
        .isString()
        .isLength({ min: 10 }),

      check(
        "Témoinage",
        "Entrez un paragraph ' Témoinage ' avec un min de 10 lettres"
      )
        .not()
        .isEmpty()
        .isString()
        .isLength({ min: 10 }),
      check(
        "LesPlusDeNotreEcole",
        "Entrez un paragraph ' LesPlusDeNotreEcole ' avec un min de 10 lettres"
      )
        .not()
        .isEmpty()
        .isString()
        .isLength({ min: 10 }),
      check(
        "LesValeursDeNotreEcole",
        "Entrez un paragraph ' LesValeursDeNotreEcole ' avec un min de 10 lettres"
      )
        .not()
        .isEmpty()
        .isString()
        .isLength({ min: 10 }),
      check(
        "lesCyclesQueNotreEcolePropose",
        "Entrez un paragraph ' lesCyclesQueNotreEcolePropose ' avec un min de 10 lettres"
      )
        .not()
        .isEmpty()
        .isString()
        .isLength({ min: 10 }),
      check(
        "NosActivités",
        "Entrez un paragraph ' NosActivités ' avec un min de 10 lettres"
      )
        .not()
        .isEmpty()
        .isString()
        .isLength({ min: 10 }),
      check(
        "NosFormations",
        "Entrez un paragraph ' NosFormations ' avec un min de 10 lettres"
      )
        .not()
        .isEmpty()
        .isString()
        .isLength({ min: 10 }),
      check("NbEleve", "Entrez un nombre d'élèves valide")
        .not()
        .isEmpty()
        .isDecimal(),
      check(
        "NbEnseignantCertifiés",
        "Entrez un nombre des enseignants certifiés valide"
      )
        .not()
        .isEmpty()
        .isDecimal(),
      check("tauxDeRéussite", "Le lien du logo de l'école est requis")
        .not()
        .isEmpty()
        .isDecimal()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() }); //return validation errors in an array
    }
    const {
      tauxDeRéussite,
      NbEnseignantCertifiés,
      NbEleve,
      QuiSommeNous,
      MotDeDirecteur,
      LienLinkedIn,
      LienTwitter,
      LienFb,
      EmplacementDeEcole,
      Email,
      NumeroDeTel,
      NomEcole,
      LogoEcole,
      Témoinage,
      LesPlusDeNotreEcole,
      LesValeursDeNotreEcole,
      lesCyclesQueNotreEcolePropose,
      NosActivités,
      NosFormations
    } = req.body;
    //buils profile object
    const profileFields = {}; //create a profile object
    if (LogoEcole) profileFields.LogoEcole = LogoEcole;
    if (NomEcole) profileFields.NomEcole = NomEcole;
    if (NumeroDeTel) profileFields.NumeroDeTel = NumeroDeTel;
    if (Email) profileFields.Email = Email;
    if (EmplacementDeEcole)
      profileFields.EmplacementDeEcole = EmplacementDeEcole;
    if (LienFb) profileFields.LienFb = LienFb;
    if (LienTwitter) profileFields.LienTwitter = LienTwitter;
    if (LienLinkedIn) profileFields.LienLinkedIn = LienLinkedIn;
    if (MotDeDirecteur) profileFields.MotDeDirecteur = MotDeDirecteur;
    if (QuiSommeNous) profileFields.QuiSommeNous = QuiSommeNous;
    if (NbEleve) profileFields.NbEleve = NbEleve;
    if (NbEnseignantCertifiés)
      profileFields.NbEnseignantCertifiés = NbEnseignantCertifiés;
    if (tauxDeRéussite) profileFields.tauxDeRéussite = tauxDeRéussite;
    if (Témoinage)
      profileFields.Témoinage = Témoinage.split("/").map(tém => tém.trim());
    if (LesPlusDeNotreEcole)
      profileFields.LesPlusDeNotreEcole = LesPlusDeNotreEcole.split(
        "/"
      ).map(plus => plus.trim());
    if (LesValeursDeNotreEcole)
      profileFields.LesValeursDeNotreEcole = LesValeursDeNotreEcole.split(
        "/"
      ).map(valeur => valeur.trim());
    if (lesCyclesQueNotreEcolePropose)
      profileFields.lesCyclesQueNotreEcolePropose = lesCyclesQueNotreEcolePropose
        .split("/")
        .map(cycle => cycle.trim());
    if (NosActivités)
      profileFields.NosActivités = NosActivités.split("/").map(activité =>
        activité.trim()
      );
    if (NosFormations)
      profileFields.NosFormations = NosFormations.split("/").map(formation =>
        formation.trim()
      );

    try {
      let profile = await ProfileEcole.findOne();
      if (profile) {
        //update
        //find the profile of the school then update it with the new entred fields
        profile = await ProfileEcole.findOneAndUpdate(
          {},
          { $set: profileFields },
          { new: true }
        );
        return res.json(profile); //returns the new profile in a json format
      }
      //create
      profile = new ProfileEcole(profileFields); //create a new profile with the new entred fields
      await profile.save(); //save the new profile in db
      res.json(profile); //returns the new profile in a json format
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Err");
    }
  }
);

module.exports = router;
