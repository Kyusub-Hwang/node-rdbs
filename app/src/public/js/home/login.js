"use strict";

const id = document.querySelector('#id'),
    pw = document.querySelector('#pw'),
    loginBtn = document.querySelector('button')


const login = () => {
    const req = {
        id: id.value,
        pw: pw.value, 
    }
    console.log(req)
}

loginBtn.addEventListener('click', login);
