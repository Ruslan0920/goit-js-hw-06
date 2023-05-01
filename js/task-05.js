const nameUserInput = document.querySelector("#name-input");
const greeting = document.querySelector("#name-output");

nameUserInput.addEventListener('input', changeInput);

function changeInput(event) {
    greeting.textContent = event.currentTarget.value;

    if (event.currentTarget.value === "") {
      document.getElementById("name-output").textContent = "Anonymous";
    }
};