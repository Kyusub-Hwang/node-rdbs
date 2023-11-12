"use strict";

const id = document.querySelector('#id'),
    pw = document.querySelector('#pw'),
    pwConfirm = document.querySelector('#pw-confirm'),
    name = document.querySelector('#name'),
    registerBtn = document.querySelector('#registerBtn')



const register = () => {
    if(!id.value) alert("Please register your ID");
    if(!pw.value) alert("Please make password");
    if(pw.value !== pwConfirm.value) alert("Please check your password");

    const req = {
        id: id.value, 
        pw: pw.value, 
        name: name.value
    }
    
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
            if (res.err) return alert(res.err);
            else alert(res.msg);
        }
    }).catch((err)=>{
        console.error(new Error("Error on register"));
    });
}

registerBtn.addEventListener('click', register);
