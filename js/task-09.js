const buttonChangeColor = document.querySelector(".change-color");
buttonChangeColor.addEventListener('click', changeBodyColor)

const spanBackgroundColor = document.querySelector(".color");

function changeBodyColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  // console.log(document.body.style.backgroundColor);
  spanBackgroundColor.textContent = document.body.style.backgroundColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
