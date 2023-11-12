"use strict"

const User = require("../../models/User");
const logger = require("../../config/logger");

const output = {
    hello: (req, res) => {
        logger.info(`GET / 304 "Accessed to Homepage"`);
        res.render("home/index");
    },
    login: (req,res) => {
        logger.info(`GET /login 304 "Accessed to Login"`);
        res.render("home/login")
    },
    register: (req,res) => {
        logger.info(`GET /register 304 "Accessed to Register"`);
        res.render("home/register")
    }
};

const log = (response, url) => {
    if (response.err) {logger.error(`${url.method} ${url.path} ${url.status} Response: ${response.success}, ${response.err}`)}
    else {logger.info(`${url.method} ${url.path} ${url.status} Response: ${response.success},msg: ${response.msg || ""}`)};
}

const process = {
    login: async (req,res) => {
        const user = new User(req.body);
        const response = await user.login();
        const url = {
            method: "POST",
            path: "/login",
            status: response.err ? 400 : 200,
        }
        log(response, url);
        return res.status(url.status).json(response);
    },

    register: async (req, res) => {
        const user = new User(req.body);
        const response = await user.register();
        const url = {
            method: "POST",
            path: "/register",
            status: response.err ? 500 : 201,
        }
        log(response, url);
        return res.status(url.status).json(response);
    }
};

module.exports = {
    output,
    process
};