// modelos de la base con mongoose
const mongoose = require("mongoose");

const techsSchema = new mongoose.Schema({
  title: String,
  description: String,
  programming_type: {
    type: String,
    enum: ["functional", "class-based"],
  },
  create_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Techs", techsSchema);
