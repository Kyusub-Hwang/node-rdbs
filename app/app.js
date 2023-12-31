"use strict";

//module
const express = require("express");
const dotenv = require("dotenv");
const logger = require("./src/config/logger");

const app = express();
dotenv.config();

//Routing
const home = require("./src/routes/home/index");

//app setting
app.set("views", "./src/views");
app.set("view engine", "ejs");

//middleware
app.use(express.static(`${__dirname}/src/public`));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/", home);

module.exports = app;