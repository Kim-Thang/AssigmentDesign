import { changeShowHide, clearInput } from "../js/custom.js";

const btnLogin = document.querySelector(".btn-submit-login");
const labelEmail = document.getElementById("label__email-login");
const labelPassword = document.getElementById("label__password-login");
const formInput = document.querySelectorAll(".form__input");
const btnClear = document.querySelector(".btn-clear");
const btnShow = document.querySelector(".btn-show");

const content_password = document.getElementById("password");
const content_email = document.getElementById("email");
const showHide = document.getElementById("show-hide");

const checkEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

const checkPassword = (password) => {
    return password.length >= 8;
};

// validator
btnLogin.onclick = (e) => {
    e.preventDefault();
    var flag = true;
    if (checkEmail(content_email.value)) {
        formInput[0].classList.remove("error");
        labelEmail.innerHTML = "Email";
    } else {
        formInput[0].classList.add("error");
        labelEmail.innerHTML = `<span style="color: #C62828;">Wrong email, please fill again</span>`;
        flag = false;
    }

    if (checkPassword(content_password.value)) {
        formInput[1].classList.remove("error");
        labelPassword.innerHTML = "Password";
    } else {
        formInput[1].classList.add("error");
        labelPassword.innerHTML = `<span style="color: #C62828;">Wrong password, please fill again</span>`;
        flag = false;
    }

    if (flag) {
        window.location.href =
            "http://127.0.0.1:5500/pages/profile/profile.html";
    }
};

// clear text
btnClear.onclick = function (e) {
    clearInput(this.parentNode.children[0]);
};
// show hide password
btnShow.onclick = function (e) {
    e.preventDefault();

    changeShowHide(this.parentNode, "#password", ".show-hide");
};
