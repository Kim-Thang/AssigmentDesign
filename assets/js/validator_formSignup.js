import { changeShowHide, clearInput } from "../js/custom.js";

const fullName = document.getElementById("fullname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm_password");
const btnSignup = document.querySelector(".btn-submit-signup");
const formLabel = document.querySelectorAll(".form__label");
const formInput = document.querySelectorAll(".form__input");
const btnClear = document.querySelectorAll(".btn-clear");
const btnShowHide = document.querySelectorAll(".btn-show");
const checkboxInput = document.getElementById("checkbox");
const btnSignin = document.querySelector(".btn-signin");

const checkFullName = (name) => {
    return name.trim() && name.length > 0;
};

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

const checkConfirmPassword = (password, confirm_password) => {
    return password.value === confirm_password.value;
};

btnSignup.onclick = (e) => {
    e.preventDefault();
    if (checkFullName(fullName.value)) {
        formInput[0].classList.remove("error");
        formLabel[0].innerHTML = "Full name";
    } else {
        formInput[0].classList.add("error");
        formLabel[0].innerHTML = `<span style="color: #C62828;">Name not empty</span>`;
    }
    if (checkEmail(email.value)) {
        formInput[1].classList.remove("error");
        formLabel[1].innerHTML = "Email";
    } else {
        formInput[1].classList.add("error");
        formLabel[1].innerHTML = `<span style="color: #C62828;">Wrong email, please fill again</span>`;
    }

    if (checkPassword(password.value)) {
        formInput[2].classList.remove("error");
        formLabel[2].innerHTML = "Password";
    } else {
        formInput[2].classList.add("error");
        formLabel[2].innerHTML = `<span style="color: #C62828;">Wrong password, please fill again</span>`;
    }

    if (
        checkFullName(confirmPassword.value) &&
        checkConfirmPassword(password, confirmPassword)
    ) {
        formInput[3].classList.remove("error");
        formLabel[3].innerHTML = "Confirm i agree with terms and conditions";
    } else {
        formInput[3].classList.add("error");
        formLabel[3].innerHTML = `<span style="color: #C62828;">Wrong confirm password, please fill again</span>`;
    }

    if (!checkboxInput.checked) {
        console.log(checkboxInput.parentNode.children[1]);
        checkboxInput.parentNode.children[1].classList.add("text_error");
    } else {
        checkboxInput.parentNode.children[1].classList.remove("text_error");
    }
};

btnSignin.onclick = (e) => {
    e.preventDefault();
    window.location.href = "http://127.0.0.1:5500/pages/login/login.html";
};

btnClear[0].onclick = function (e) {
    e.preventDefault();
    clearInput(this.parentNode.children[0]);
};

btnClear[1].onclick = function (e) {
    e.preventDefault();
    clearInput(this.parentNode.children[0]);
};

btnShowHide[0].onclick = function (e) {
    e.preventDefault();
    changeShowHide(this.parentNode, "#password", ".show-hide");
};

btnShowHide[1].onclick = function (e) {
    e.preventDefault();
    changeShowHide(this.parentNode, "#confirm_password", ".show-hide");
};
