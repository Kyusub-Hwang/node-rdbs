"use strict";

//module
const express = require("express");
const app = express();

//Routing
const home = require("./routes/home");

//app setting
app.set("views", "./views");
app.set("view engine", "ejs");

//middleware
app.use("/", home);

module.exports = app;