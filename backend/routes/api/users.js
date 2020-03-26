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
    check("nom", "la saisie d'un nom est obligatoire")
      .not()
      .isEmpty(),
    check("prénom", "la saisie d'un prénom est obligatoire")
      .not()
      .isEmpty(),
    check(
      "identifiant",
      "veuillez entrer un idantifiant avec 6 caractères ou plus"
    ).isLength({ min: 6 }),
    check(
      "motDePasse",
      "veuillez entrer un mot de passe avec 6 caractères ou plus"
    ).isLength({ min: 6 }),
    check("niveau", "la saisie d'un niveau est obligatoire")
      .not()
      .isEmpty(),
    check("classe", "la saisie d'un classe  est obligatoire")
      .not()
      .isEmpty(),
    check(
      "typeUtilisateur",
      "la saisie d'un type d'utilisateur est obligatoire"
    )
      .not()
      .isEmpty()
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
      niveau,
      classe,
      typeUtilisateur
    } = req.body;
    try {
      //see if the user exists
      let user = await User.findOne({ identifiant });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
      }
      user = new User({
        prénom,
        nom,
        identifiant, //make a new user if it is not exisit in the db
        motDePasse,
        niveau,
        classe,
        typeUtilisateur
      });
      await user.save(); //save the new user in the db

      const payload = {
        user: {
          id: user.id
        }
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
