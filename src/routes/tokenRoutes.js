const express = require("express");
const router = express.Router();
const c = require("../controllers/tokenController");

router.post("/tokens", c.bookToken);
router.get("/queue/:slotId", c.getQueue);
router.post("/queue/:slotId/next", c.callNext);
router.post("/tokens/:id/cancel", c.cancelToken);

module.exports = router;