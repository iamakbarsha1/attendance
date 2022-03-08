const express = require("express");
const router = express.Router();
const roomSchema = require("./roomSchema");

// Create - _C_rud
router.post("/", async (req, res) => {
  console.log(req.body);

  var data = new roomSchema({
    roomName: req.body.roomName,
    totalStudents: req.body.totalStudents,
  });
});

router.get("/", (req, res) => {
  res.json("Router");
});

module.exports = router;
