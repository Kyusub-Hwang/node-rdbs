"use strict"

const User = require("../../models/User");

const output = {
    hello: (req, res) => {
    res.render("home/index")
    },
    login: (req,res) => {
    res.render("home/login")
}};

const UserStorage = require("../../models/UserStorage");

const process = {
    login: (req,res) => {
        const user = new User(req.body);
        const response = user.login();
        res.json(response);
    }
};

module.exports = {
    output,
    process
};