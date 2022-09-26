import { clearInput } from "../js/custom.js";

const email = document.getElementById("email");
const labelForm = document.querySelector(".form__label");
const inputForm = document.querySelector(".form__input");
const btnRecover = document.querySelector(".btn-recover");

const btnClear = document.querySelector(".btn-clear");

const checkEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

btnRecover.onclick = (e) => {
    e.preventDefault();
    if (checkEmail(email.value)) {
        inputForm.classList.remove("error");
        labelForm.innerHTML = "Email";
        btnRecover.classList.add("btn--large_enabled");
        btnRecover.classList.remove("btn--large_disabled");
    } else {
        inputForm.classList.add("error");
        btnRecover.classList.remove("btn--large_enabled");
        btnRecover.classList.add("btn--large_disabled");
        labelForm.innerHTML = `<span style="color: #C62828;">Email not existed</span>`;
    }

    email.onchange = function() {
        if(checkEmail(this.value)) {
            btnRecover.classList.add("btn--large_enabled");
            btnRecover.classList.remove("btn--large_disabled");
            inputForm.classList.remove("error");
            labelForm.innerHTML = "Email";
        } 
        else {
            btnRecover.classList.remove("btn--large_enabled");
            btnRecover.classList.add("btn--large_disabled");
        }
    }
};


btnClear.onclick = function(e) {
    e.preventDefault();
    clearInput(this.parentNode.children[0])
};
