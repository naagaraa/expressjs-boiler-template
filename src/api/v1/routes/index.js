const express = require("express");
const router = express();

router.get("/v1", (req, res) => {
  res.send("api version 1 index");
});

router.get("/v1/user/all", (req, res) => {
  res.send("api version 1 user all");
});

module.exports = router;
