const counter = document.querySelector("#value");

let counterValue = 0;

const minusClick = document.querySelector('button[data-action="decrement"]');
const subtractValue = () => {
    counterValue -= 1;
    counter.textContent = counterValue;
}

minusClick.addEventListener("click", subtractValue);
const plusClick = document.querySelector('button[data-action="increment"]');
const addValue = () => {
    counterValue +=1;
    counter.textContent = counterValue;
}
plusClick.addEventListener("click", addValue);