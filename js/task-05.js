const nameUserInput = document.querySelector("#name-input");
console.log(nameUserInput);

const greeting = document.querySelector("#name-output");
console.log(greeting);

nameUserInput.addEventListener('input', changeInput);

function changeInput(event) {
    // console.log(event.currentTarget.value);
    greeting.textContent = event.currentTarget.value;
    // nameUser.removeEventListener('input', changeInput);
}

    