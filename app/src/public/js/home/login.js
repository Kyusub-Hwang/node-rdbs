"use strict";

const id = document.querySelector('#id'),
    pw = document.querySelector('#pw'),
    loginBtn = document.querySelector('button')


const login = () => {
    const req = {
        id: id.value, 
        pw: pw.value, 
    }
    
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    }).then((res) => res.json()).then((res) => {
        if(res.success){
            location.href = "/";
        } else {
            alert(res.msg);
        }
    }).catch((err)=>{
        console.error(new Error("Error on login"));
    });
}

loginBtn.addEventListener('click', login);
