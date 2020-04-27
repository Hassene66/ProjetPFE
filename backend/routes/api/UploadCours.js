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
  gfs.collection("Cours");
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
          bucketName: "Cours",
          metadata: [],
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

router.get("/get/:filename", (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    // Check if file
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: "No file exists",
      });
    }

    // Check if image
    if (file.contentType === "image/jpeg" || file.contentType === "image/png") {
      // Read output to browser
      const readstream = gfs.createReadStream(file.filename);
      readstream.pipe(res);
    } else {
      res.status(404).json({
        err: "Not an image",
      });
    }
  });
});

router.get("/files", (req, res) => {
  gfs.files.find().toArray((err, files) => {
    if (!files || files.length === 0) {
      return res.status(404).json({
        message: "Could not find files",
      });
    }
    return res.json(files);
  });
});
router.delete("/files/:id", async (req, res) => {
  await gfs.remove({ _id: req.params.id, root: "Cours" }, (err, gridStore) => {
    if (err) {
      return res.status(404).json({ err: err });
    }
    return res.json({ message: "file was deleted" });
  });
});

// @route GET /download/:filename
// @desc  Download single file object
router.get("/download/:filename", async (req, res) => {
  await gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    // Check if file
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: "No file exists",
      });
    }
    // File exists
    res.set("Content-Type", file.contentType);
    res.set(
      "Content-Disposition",
      'attachment; filename="' + file.filename + '"'
    );
    // streaming from gridfs
    var readstream = gfs.createReadStream({
      filename: req.params.filename,
    });
    //error handling, e.g. file does not exist
    readstream.on("error", function (err) {
      console.log("An error occurred!", err);
      throw err;
    });
    readstream.pipe(res);
  });
});

module.exports = router;
