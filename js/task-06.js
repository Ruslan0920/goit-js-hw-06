const inputForm = document.querySelector("input");
inputForm.addEventListener("blur", inputBlur);

function inputBlur(event) {
    if (event.currentTarget.value.length >= inputForm.getAttribute("data-length")) {
        inputForm.setAttribute("class", "valid")
    } else {
        inputForm.setAttribute("class", "invalid")
    }
}
console.log();