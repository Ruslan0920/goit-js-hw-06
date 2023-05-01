const inputForm = document.querySelector("input");
console.log(inputForm);

inputForm.addEventListener("blur", inputBlur);

function inputBlur(event) {
    console.log('Input focus out');
    event.currentTarget.value.length === inputForm('input[data-length="6"]')
    console.log(event.currentTarget.value.length)
}
// inputForm.length = this[data-length];