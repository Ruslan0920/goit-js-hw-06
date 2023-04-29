const nameUserInput = document.querySelector("#name-input");
console.log(nameUserInput);

const greeting = document.querySelector("#name-output");
console.log(greeting);

nameUserInput.addEventListener('input', changeInput);


function changeInput(event) {
    // console.log(event.currentTarget.value);
    greeting.textContent = event.currentTarget.value;
    // 
    // event.preventDefault();
    // if (event.currentTarget.value === "") {
    //   nameUserInput.removeEventListener('input', changeInput);  
    // }
};

function removechangeInput(event) {
    // console.log(event.currentTarget.value);
    nameUserInput.removeEventListener('input', changeInput);
    greeting.textContent = "Anonymous";
}