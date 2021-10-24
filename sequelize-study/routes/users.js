const express = require("express");
const router = express.Router();
const { Users, Follows } = require("../models");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/follow", async (req, res) => {
  const { userId } = req.body;
  await Follows.create({});
});

module.exports = router;
