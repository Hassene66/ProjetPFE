const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");
// @route post api/auth
// @desc test route
//access public

router.get("/", auth, async (req, res) => {
  //auth is used to make this root protected
  try {
    const user = await User.findById(req.user.id).select("-motDePasse"); //req.user is taken from the auth middleware and it has the information of the user stored in the token
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
// @route post api/auth
// @desc authenticate user and get token
//access public
router.post(
  "/",
  [
    check(
      "identifiant",
      "veuillez entrer un idantifiant avec 6 caractères ou plus"
    ).isLength({ min: 6 }),
    check("motDePasse", "le mot de passe est requis")
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { identifiant, motDePasse } = req.body;
    try {
      //check  if the user already exists in the db
      let user = await User.findOne({ identifiant }); //find a user in the db using the id that is send in the req body
      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Utilisateur introuvable " }] });
      }
      const isMatch = motDePasse === user.motDePasse; //check if the password in the db matchs the password entred by the user
      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Mot de passe invalide" }] });
      }

      const payload = {
        user: {
          id: user.id //grab the user id to help generating a token by that id
        }
      };
      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 360000 }, //genrating a token using jwtSecret combined with the user id and set an expiary date
        (err, token) => {
          if (err) throw err;
          res.json({ token }); // if the user successfully signedin the return the jwt
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("server error");
    }
  }
);
module.exports = router;
