const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Slot",
  new mongoose.Schema({
    doctorId: mongoose.Schema.Types.ObjectId,
    time: String,
    capacity: Number
  })
);