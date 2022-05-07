const express = require("express");
const router = express();

// mount services
const userService = require("../services/userService");

router.get("/v2", (req, res) => {
  res.send("api version 2 index");
});

router.get("/v2/user/all", userService.getAllUsers);
router.get("/v2/user/:id", userService.getUserById);

module.exports = router;
