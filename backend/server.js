const express = require("express");
const connectDB = require("./config/db");
const app = express();
// connect database
connectDB();
//init middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("api running");
});
//define routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/ParameterMonEcole", require("./routes/api/ProfileEcole"));
app.use("/ContacterNous", require("./routes/api/contacterNous"));
app.use("/Newsletter", require("./routes/api/newsletter"));
app.use("/Enseignant", require("./routes/api/mesEleves"));
app.use("/RegistreAppel", require("./routes/api/RegistreAppel"));
app.use("/UploadCours", require("./routes/api/UploadCours"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server started on port ${PORT}`));
