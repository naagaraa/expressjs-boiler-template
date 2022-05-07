const express = require("express");
const app = express();
const router = express.Router();

// route api
const apiv1 = require("../api/v1/routes");
const apiv2 = require("../api/v2/routes");

// mount api
const api = [apiv1, apiv2];

// export router
module.exports = api;
