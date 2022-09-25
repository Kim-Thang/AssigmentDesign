btnClear = document.querySelector(".btn-clear")
console.log(btnClear)
btnSubmitLogin = document.querySelector(".btn-submit-login")
console.log(btnSubmitLogin)
inputEmail = document.querySelector("#email")

btnClear.onclick = (e) => {
    e.preventDefault()
    inputEmail.value = ""
}

btnSubmitLogin.onclick = (e) => {
    e.preventDefault()
}