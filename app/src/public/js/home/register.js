"use strict";

const id = document.querySelector('#id'),
    pw = document.querySelector('#pw'),
    pwConfirm = document.querySelector('#pw-confirm'),
    name = document.querySelector('#name'),
    registerBtn = document.querySelector('#registerBtn')


const register = () => {
    const req = {
        id: id.value, 
        pw: pw.value, 
        pwConfirm: pwConfirm.value,
        name: name.value
    }
    console.log(req);
    
    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    }).then((res) => res.json()).then((res) => {
        if(res.success){
            location.href = "/login";
        } else {
            alert(res.msg);
        }
    }).catch((err)=>{
        console.error(new Error("Error on register"));
    });
}

registerBtn.addEventListener('click', register);
