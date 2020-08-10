const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");
const User = require("../../models/User");
// @route post api/users
// @desc register user
//access public
router.post("/", [], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {
    prénom,
    nom,
    identifiant,
    motDePasse,
    typeUtilisateur,
    profileEnseignant,
    profileEleve,
    profileAdmin,
    ProfileParent,
  } = req.body;

  try {
    //see if the user exists
    let user = await User.findOne({ identifiant });
    if (user) {
      return res
        .status(400)
        .json({ errors: [{ msg: "identifiant existe déjà" }] });
    }

    const userInfo = {};
    userInfo.prénom = prénom;
    userInfo.nom = nom;
    userInfo.identifiant = identifiant;
    userInfo.motDePasse = motDePasse;
    userInfo.typeUtilisateur = typeUtilisateur;
    if (profileEnseignant) {
      userInfo.profileEnseignant = profileEnseignant;
    }
    if (profileEleve) {
      userInfo.profileEleve = profileEleve;
    }
    if (profileAdmin) {
      userInfo.profileAdmin = profileAdmin;
    }
    user = new User(userInfo);
    await user.save(); //save the new user in the db
    if (ProfileParent) {
      const ParentInfo = {};
      ParentInfo.prénom = ProfileParent.PrénomParent;
      ParentInfo.nom = ProfileParent.NomParent;
      ParentInfo.identifiant = ProfileParent.identifiantParent;
      ParentInfo.motDePasse = ProfileParent.motDePasseParent;
      ParentInfo.typeUtilisateur = "parent";
      let profileParent = {};
      profileParent.identifiantÉlève = identifiant;
      profileParent.prénomÉlève = prénom;
      profileParent.nomÉlève = nom;
      ParentInfo.profileParent = profileParent;
      user = new User(ParentInfo);
      await user.save(); //save the new user in the db
    }

    const payload = {
      user: {
        id: user.id,
      },
    };
    jwt.sign(
      payload,
      config.get("jwtSecret"),
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token }); //return a token in a json format
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});

module.exports = router;
