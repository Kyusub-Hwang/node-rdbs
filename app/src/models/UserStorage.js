"use strict";

const db = require("../config/db");


class UserStorage {
    // static getUsers = (isAll, ...fields) => {
    //     return fs
    //       .readFile("./src/databases/users.json")
    //       .then((data) => {
    //             return this.#getUsers(data, isAll, fields);
    //         })
    //       .catch(console.error);
    // }

    static async getUserInfo(id) {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM users WHERE id=?;"
            db.query(query,[id], (err, data)=>{
                if (err) reject(`${err}`);
                resolve(data[0]); 
            });
        })
    }

    static save = async (newClient) => {
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO users (id, name, pw) VALUES (?, ?, ?);"
            db.query(query,[newClient.id, newClient.name, newClient.pw], (err, data)=>{
                if (err) reject(`${err}`);
                resolve({success:true}); 
            });
        })
    }

}

module.exports = UserStorage;