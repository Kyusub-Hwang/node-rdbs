"use strict";

//module
const express = require("express");
const app = express();

//Routing
const home = require("./src/routes/home");

//app setting
app.set("views", "./src/views");
app.set("view engine", "ejs");

//middleware
app.use("/", home);

module.exports = app;