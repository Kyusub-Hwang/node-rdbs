"use strict";

const fs = require("fs").promises; 


class UserStorage {
    static #getUserInfo(id, data) {
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users);
        const userInfo = userKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {})
        console.log(userInfo)
        return userInfo;
    }
    
    static #getUsers(data, isAll, fields) {
        const users = JSON.parse(data);
        if (isAll) return users;
        const newUsers = fields.reduce((newUsers, field)=>{
            if(users.hasOwnProperty(field)){
                
                newUsers[field] = users[field];
                
            }
            return newUsers;
        }, {})
        return newUsers;
    }

    static getUsers = (isAll, ...fields) => {
        return fs
          .readFile("./src/databases/users.json")
          .then((data) => {
                return this.#getUsers(data, isAll, fields);
            })
          .catch(console.error);


       
    }

    static getUserInfo(id) {
        return fs
          .readFile("./src/databases/users.json")
          .then((data) => {
                return this.#getUserInfo(id, data);
            })
          .catch(console.error);
    }

    

    static save = async (newClient) => {
        const users = await this.getUsers(true);
        if (users.id.includes(newClient.id)){
            throw "ID already exists";
        }
        users.id.push(newClient.id);
        users.pw.push(newClient.pw);
        users.name.push(newClient.name);
        fs.writeFile("./src/databases/users.json", JSON.stringify(users))
        return {success: true}
    }

}

module.exports = UserStorage;