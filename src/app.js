const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");
const port = 3000;

// route api
const route = require("./routes");

// mount middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// mount api
app.use("/api/", route);

// default landing page route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});

// start server
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});

module.exports = app;
