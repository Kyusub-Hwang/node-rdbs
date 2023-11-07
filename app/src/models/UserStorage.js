"use strict";

class UserStorage {
    static #users = {
        id: ['a', 'b', 'c'],
        pw: ['1', '2', '3'],
        name: ['A', 'B', 'C'],
    }

    static getUsers = (...fields) => {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field)=>{
            if(users.hasOwnProperty(field)){
                
                newUsers[field] = users[field];
                
            }
            return newUsers;
        }, {})
        return newUsers;
    }

    static getUserInfo = (id) => {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users);
        const userInfo = userKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {})
        return userInfo;
    }

    static save = (newClient) => {
        const users = this.#users;
        const userKeys = Object.keys(users);
        const newUsers = userKeys.reduce((acc, info) => {
            users[info].push(newClient[info])
        },null);
        return {success:true}
    }

}

module.exports = UserStorage;