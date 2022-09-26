import { changeShowHide } from "../js/custom.js";

const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm_password");

// btnSignup = document.querySelector(".btn-submit-signup");

const formLabel = document.querySelectorAll(".form__label");
const formInput = document.querySelectorAll(".form__input");

const btnShowHide = document.querySelectorAll(".btn-show");
const imgShowHide = document.querySelectorAll(".show-hide");

const btnRecoverFill = document.querySelector(".btn-recover-fill");

const checkFullPassword = (name) => {
    return name.trim() && name.length > 0;
};

const checkPassword = (password) => {
    return password.length >= 8;
};

const checkConfirmPassword = (password, confirm_password) => {
    return password.value === confirm_password.value;
};

btnRecoverFill.onclick = (e) => {
    e.preventDefault();

    if (checkPassword(password.value)) {
        formInput[0].classList.remove("error");
        formLabel[0].innerHTML = "Password";
    } else {
        formInput[0].classList.add("error");
        formLabel[0].innerHTML = `<span style="color: #C62828;">Wrong password, please fill again</span>`;
    }

    if (
        checkFullPassword(confirmPassword.value) &&
        checkConfirmPassword(password, confirmPassword)
    ) {
        formInput[1].classList.remove("error");
        formLabel[1].innerHTML = "Confirm i agree with terms and conditions";
    } else {
        formInput[1].classList.add("error");
        formLabel[1].innerHTML = `<span style="color: #C62828;">Wrong confirm password, please fill again</span>`;
    }
};

btnShowHide[0].onclick = function (e) {
    e.preventDefault();
    changeShowHide(this.parentNode, "#password", ".show-hide");
};

btnShowHide[1].onclick = function (e) {
    e.preventDefault();
    changeShowHide(this.parentNode, "#confirm_password", ".show-hide");
};
