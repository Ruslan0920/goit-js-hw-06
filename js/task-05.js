const nameUserInput = document.querySelector("#name-input");
const greetingText = document.querySelector("#name-output");

nameUserInput.addEventListener('input', changeInput);

function changeInput(event) {
    greetingText.textContent = event.currentTarget.value;

    if (event.currentTarget.value === "") {
      greetingText.textContent = "Anonymous";
    }
};