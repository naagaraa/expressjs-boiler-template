const express = require("express");
const router = express();

router.get("/v2", (req, res) => {
  res.send("api version 2 index");
});

router.get("/v2/user/all", (req, res) => {
  res.send("api version 2 user all");
});

module.exports = router;
