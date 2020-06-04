const express = require("express");
const router = express.Router();
const Newsletter = require("../../models/Newsletter");
router.route("/").post((req, res) => {
  const newsletter = req.body.newsletter;

  const newsletters = new Newsletter({
    newsletter
  });
  newsletters
    .save()
    .then(() => res.json("newsletter envoyer avec succés"))
    .catch(err => res.status(400).json("Error: " + err));
});
module.exports = router;
