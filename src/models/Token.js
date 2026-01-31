const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Token",
  new mongoose.Schema({
    doctorId: mongoose.Schema.Types.ObjectId,
    slotId: mongoose.Schema.Types.ObjectId,
    tokenNo: Number,
    priority: Number,
    source: String,
    status: {
      type: String,
      enum: ["WAITING", "IN_PROGRESS", "CANCELLED", "NO_SHOW", "COMPLETED"],
      default: "WAITING"
    },
    createdAt: { type: Date, default: Date.now }
  })
);