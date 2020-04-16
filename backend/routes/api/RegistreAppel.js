const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const RegistreAppel = require("../../models/RegistreAppel");

router.post("/Enregister", auth, async (req, res) => {
  try {
    const Registre = new RegistreAppel(req.body);
    Registre.save().then(
      res.json({ message: "Présence enregistrée avec sucess" })
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Err");
  }
});
module.exports = router;
