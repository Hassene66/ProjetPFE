const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const cors = require("cors");
const GridFsStorage = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
const crypto = require("crypto");
const router = express.Router();
const app = express();

app.use(express.json());
app.use(cors());

//Connect to DB
const mongoURI =
  "mongodb+srv://ProjectDB:Project2020@cluster0-mnrih.gcp.mongodb.net/test?retryWrites=true&w=majority";

const conn = mongoose.createConnection(mongoURI);

mongoose.connect(mongoURI, { useNewUrlParser: true });

let gfs;
conn.once("open", () => {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("MesActivité");
  console.log("Connection Successful");
});

// Create storage engine
const storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = file.originalname;
        const fileInfo = {
          filename: filename,
          bucketName: "MesActivité",
          metadata: req.body,
        };
        resolve(fileInfo);
      });
    });
  },
});

const upload = multer({ storage });

router.post("/", upload.single("img"), (req, res, err) => {
  if (res) {
    res.json({ message: "Activité envoyé avec succès" });
  } else {
    if (err) {
      res.json({ message: "Échec d'envoi" });
    }
  }
});

module.exports = router;
