const Slot = require("../models/Slot");
const Token = require("../models/Token");
const {
  PRIORITY,
  generateTokenNo,
  slotCount,
  getNext
} = require("../services/tokenService");

exports.bookToken = async (req, res) => {
  const { doctorId, slotId, source } = req.body;

  const slot = await Slot.findById(slotId);
  if (!slot) return res.status(404).json({ error: "Slot not found" });

  const active = await slotCount(slotId);

  if (source !== "EMERGENCY" && active >= slot.capacity) {
    return res.status(400).json({ error: "Slot full" });
  }

  const tokenNo = await generateTokenNo(slotId);

  const token = await Token.create({
    doctorId,
    slotId,
    tokenNo,
    source,
    priority: PRIORITY[source]
  });

  res.json({
    message: "Token booked",
    tokenNo,
    priority: PRIORITY[source]
  });
};

exports.getQueue = async (req, res) => {
  const queue = await Token.find({
    slotId: req.params.slotId,
    status: "WAITING"
  }).sort({ priority: 1, tokenNo: 1 });

  res.json(queue);
};

exports.callNext = async (req, res) => {
  const token = await getNext(req.params.slotId);

  if (!token) return res.json({ message: "Queue empty" });

  token.status = "IN_PROGRESS";
  await token.save();

  res.json({ message: "Next patient", token });
};

exports.cancelToken = async (req, res) => {
  await Token.findByIdAndUpdate(req.params.id, { status: "CANCELLED" });
  res.json({ message: "Token cancelled" });
};