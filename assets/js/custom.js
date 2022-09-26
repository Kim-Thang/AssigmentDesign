export function clearInput(el) {
    return (el.value = "");
}

export function changeShowHide(el, query1, query2) {
    const password = el.querySelector(query1);
    const showHide = el.querySelector(query2);
    if (password.type === "password") {
        password.type = "text";
        showHide.src = "../../assets/images/Hide.svg";
    } else {
        password.type = "password";
        showHide.src = "../../assets/images/Show.svg";
    }
}
