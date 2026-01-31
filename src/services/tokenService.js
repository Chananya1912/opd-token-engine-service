const Token = require("../models/Token");

const PRIORITY = {
  EMERGENCY: 0,
  PAID: 1,
  FOLLOW_UP: 2,
  ONLINE: 3,
  WALK_IN: 4
};

async function generateTokenNo(slotId) {
  const last = await Token.find({ slotId })
    .sort({ tokenNo: -1 })
    .limit(1);

  return last.length ? last[0].tokenNo + 1 : 1;
}

async function slotCount(slotId) {
  return Token.countDocuments({
    slotId,
    status: { $in: ["WAITING", "IN_PROGRESS"] }
  });
}

async function getNext(slotId) {
  return Token.findOne({
    slotId,
    status: "WAITING"
  }).sort({ priority: 1, tokenNo: 1 });
}

module.exports = {
  PRIORITY,
  generateTokenNo,
  slotCount,
  getNext
};