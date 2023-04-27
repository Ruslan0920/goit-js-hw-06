const counter = document.querySelector("#value");
// console.log(counter);
let counterValue = 0;

const minusClick = document.querySelector('button[data-action="decrement"]');
// console.log(minusClick);

const subtractValue = () => {
    counterValue -= 1;
    counter.textContent = counterValue;
    console.log("Кнопку натиснули: віднімання");
}
minusClick.addEventListener("click", subtractValue);

const plusClick = document.querySelector('button[data-action="increment"]');
// console.log(plusClick);

const addValue = () => {
    counterValue +=1;
    counter.textContent = counterValue;
    console.log("Кнопку натиснули: додавання");
}
plusClick.addEventListener("click", addValue);