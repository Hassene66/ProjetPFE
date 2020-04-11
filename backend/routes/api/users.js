const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");
const User = require("../../models/User");
// @route post api/users
// @desc register user
//access public
router.post(
  "/",
  [
    check("nom", "la saisie d'un nom est obligatoire").not().isEmpty(),
    check("prénom", "la saisie d'un prénom est obligatoire").not().isEmpty(),
    check(
      "identifiant",
      "veuillez entrer un idantifiant avec 6 caractères ou plus"
    ).isLength({ min: 6 }),
    check(
      "motDePasse",
      "veuillez entrer un mot de passe avec 6 caractères ou plus"
    ).isLength({ min: 6 }),
    check(
      "typeUtilisateur",
      "la saisie d'un type d'utilisateur est obligatoire"
    )
      .not()
      .isEmpty(),
  ],
  async (req, res) => {
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
    } = req.body;
    try {
      //see if the user exists
      let user = await User.findOne({ identifiant });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
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
  }
);

module.exports = router;
