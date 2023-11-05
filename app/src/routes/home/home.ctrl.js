"use strict"

const output = {
    hello: (req, res) => {
    res.render("home/index")
    },
    login: (req,res) => {
    res.render("home/login")
}};

const users = {
    id: ['A', 'B', 'C'],
    pw: ['1', '2', '3'],
};

const process = {
    login: (req,res) => {
        const id = req.body.id,
            pw = req.body.pw;
        
        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.pw[idx] === pw){
                return res.json({
                    success: true
                })
            }
        }
        return res.json({
            success: false, 
            msg: "Login Failed"
        })
    }
};

module.exports = {
    output,
    process
};