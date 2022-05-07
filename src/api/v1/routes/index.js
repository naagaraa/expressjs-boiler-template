const express = require("express");
const router = express();

// mount services
const userService = require("../services/userService");

router.get("/v1", (req, res) => {
  res.send("api version 1 index");
});

router.get("/v1/user/all", userService.getAllUsers);
router.get("/v1/user/:id", userService.getUserById);

module.exports = router;
