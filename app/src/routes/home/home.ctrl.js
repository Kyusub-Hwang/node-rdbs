"use strict"

const User = require("../../models/User");
const logger = require("../../config/logger");

const output = {
    hello: (req, res) => {
        logger.info(`GET / 200 "Accessed to Homepage"`);
        res.render("home/index");
    },
    login: (req,res) => {
        logger.info(`GET /login 200 "Accessed to Login"`);
        res.render("home/login")
    },
    register: (req,res) => {
        logger.info(`GET /register 200 "Accessed to Register"`);
        res.render("home/register")
    }
};

const process = {
    login: async (req,res) => {
        const user = new User(req.body);
        const response = await user.login();
        if (response.err) logger.error(`POST /login 200 Response: "success: ${response.success}, ${response.err}"`)
        else logger.info(`POST /login 200 Response: "success: ${response.success},msg: ${response.msg}"`);
        return res.json(response);
    },

    register: async (req, res) => {
        const user = new User(req.body);
        const response = await user.register();
        if (response.err) logger.error(`POST /register 200 Response: "success: ${response.success}, ${response.err}"`)
        else logger.info(`POST /register 200 Response: "success: ${response.success},msg: ${response.msg}"`);
        return res.json(response);
    }
};

module.exports = {
    output,
    process
};