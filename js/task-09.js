const buttonChangeClor = document.querySelector(".change-color");
buttonChangeClor.addEventListener('click', changeBodyColor)
// console.log(buttonChangeClor);
const spanBackgroundColor = document.querySelector(".color");
// console.log(spanBackgroundColor);

function changeBodyColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  spanBackgroundColor.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
