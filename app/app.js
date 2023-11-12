"use strict";

//module
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

const app = express();
dotenv.config();

const accessLogStream = require("./src/config/log")

//Routing
const home = require("./src/routes/home");

 

//app setting
app.set("views", "./src/views");
app.set("view engine", "ejs");

//middleware
app.use(express.static(`${__dirname}/src/public`));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan("common", {stream: accessLogStream}));

app.use("/", home);

module.exports = app;