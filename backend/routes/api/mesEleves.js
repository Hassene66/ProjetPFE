const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const User = require("../../models/User");

router.post("/mesEleves", auth, async (req, res) => {
  try {
    const mesEleves = await User.find({
      profileEleve: {
        $elemMatch: {
          classe: req.body.classe,
        },
      },
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
