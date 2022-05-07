const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;

// route api
const route = require("./routes");

// mount api
app.use("/api/", route);
app.use(cors());

// default landing page route
app.get("/", (req, res) => res.send("home page for api"));

// start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
