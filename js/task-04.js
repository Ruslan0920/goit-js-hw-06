let counterValue = document.querySelector("#value");
console.log(counterValue);
counterValue = 0;
console.log(counterValue);

const counterClick = document.querySelector('button[data-action="increment"]');
console.log(counterClick);
const addValue = () => {
    // addValue +=1
    console.log("Button was clicked");
}
counterClick.addEventListener("click", addValue);