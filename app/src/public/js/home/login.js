"use strict";

const id = document.querySelector('#id'),
    pw = document.querySelector('#pw'),
    loginBtn = document.querySelector('#loginBtn')


const login = () => {
    if(!id.value) alert("Please type ID");
    if(!pw.value) alert("Please type password");

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
            if (res.err) return alert(res.err);
            else alert(res.msg);
        }
    }).catch((err)=>{
        console.error(new Error("Error on login"));
    });
}

loginBtn.addEventListener('click', login);
