const mongoose = require("mongoose");

const NewsletterSchema = new mongoose.Schema({
  newsletter: {
    type: String,
    required: true
  }
});
module.exports = Newsletter = mongoose.model("newsletter", NewsletterSchema);
