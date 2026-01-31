const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Doctor",
  new mongoose.Schema({
    name: String,
    department: String
  })
);