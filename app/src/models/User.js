"use strict";

const UserStorage = require("./UserStorage");

class User {
    constructor(body){
        this.body = body;
    }

    async login(){
        const client = this.body;
        try {
            const {id, pw} = await UserStorage.getUserInfo(client.id);
            if (id){
                if(id === client.id && pw === client.pw){
                    return {success: true}
                } return {success: false, msg:"Please check your passwords"}
            } return {success: false, msg: "Please check your ID"}
        } catch(err){
            return {success:false, msg: err}
        }
    }

    async register(){
        const client = this.body;
        try {
            const response = await UserStorage.save(client);
            return response;
        } catch (error) {
            return {success:false, msg:error}
        }
        
    }
}

module.exports = User;