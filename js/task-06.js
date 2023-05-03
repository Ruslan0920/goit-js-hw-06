const inputForm = document.querySelector("input");
console.log(inputForm);

inputForm.addEventListener("blur", inputBlur);

function inputBlur(event) {
    console.log('Input focus out');
    if (event.currentTarget.value.length >= inputForm.getAttribute("data-length")) {
        console.log('Довжина правильна')
        // inputForm.style.borderColor = "#4caf50";

        // inputForm.style.setProperty("border-color", "#4caf50")
        // inputForm.setAttribute("style", "valid")
        // inputForm.classList.add('#validation-input.valid')
        inputForm.className = "valid";
        // event.currentTarget.id = "validation-input.valid";
        // console.log(inputForm.id);
    } else {
        inputForm.style.borderColor = "#f44336";
        // inputForm.id = "#validation-input.invalid"
        console.log('Довжина не правильна')
    }
    // inputForm.style.borderColor = "#f44336";
    // console.log('Довжина не правильна')
    console.log(event.currentTarget.value.length)
}
// inputForm.length = this[data-length];


inputForm.getAttribute("type")

console.log(inputForm.getAttribute("type"));
console.log(inputForm.getAttribute("id"));
console.log(inputForm.getAttribute("data-length"));