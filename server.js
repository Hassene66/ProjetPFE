const express = require("express");
const connectDB = require("./config/db");
const app = express();
const path = require("path");
// connect database
connectDB();
//init middleware
app.use(express.json({ extended: false }));

//define routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/ParameterMonEcole", require("./routes/api/ProfileEcole"));
app.use("/ContacterNous", require("./routes/api/contacterNous"));
app.use("/Newsletter", require("./routes/api/newsletter"));
app.use("/Enseignant", require("./routes/api/mesEleves"));
app.use("/RegistreAppel", require("./routes/api/RegistreAppel"));
app.use("/UploadCours", require("./routes/api/UploadCours"));
app.use("/UploadActivite", require("./routes/api/UploadActivité"));
app.use("/ListeClasses", require("./routes/api/ListeClasse"));
app.use("/ListeEnseignant", require("./routes/api/ListeEnseignant"));
app.use("/EnvoyerActivite", require("./routes/api/EnvoyerActivité"));
app.use("/GalerieImages", require("./routes/api/GèrerGalerie"));
app.use("/Admin", require("./routes/api/MoyenneÉlève"));
app.use("/Contacter", require("./routes/api/Contacter"));

//serve static assets in production
if (process.env.NODE_ENV === "production") {
  //set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server started on port ${PORT}`));
