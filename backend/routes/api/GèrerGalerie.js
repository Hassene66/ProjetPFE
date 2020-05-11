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
  gfs.collection("GalerieImages");
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
          bucketName: "GalerieImages",
        };
        resolve(fileInfo);
      });
    });
  },
});

const upload = multer({ storage });

router.post("/", upload.single("img"), (req, res, err) => {
  if (res) {
    res.json({ message: "Cours envoyé avec succès" });
  } else {
    if (err) {
      res.json({ message: "Échec d'envoi" });
    }
  }
});

router.get("/files/:id", (req, res) => {
  var docId = mongoose.Types.ObjectId(req.params.id);
  gfs.files.find({ _id: docId }).toArray((err, files) => {
    if (!files || files.length === 0) {
      return res.status(404).json({
        message: "Could not find file",
      });
    }

    var readstream = gfs.createReadStream({
      filename: files[0].filename,
    });
    res.set("Content-Type", files[0].contentType);
    return readstream.pipe(res);
  });
});

router.get("/getFiles", (req, res) => {
  gfs.files.find().toArray((err, files) => {
    if (!files || files.length === 0) {
      return res.status(404).json({
        message: "Could not find files",
      });
    }
    return res.json(files);
  });
});

router.delete("/deleteFiles/:id", async (req, res) => {
  await gfs.remove(
    { _id: req.params.id, root: "GalerieImages" },
    (err, gridStore) => {
      if (err) {
        return res.status(404).json({ err: err });
      }
      return res.json({ message: "file was deleted" });
    }
  );
});

module.exports = router;
