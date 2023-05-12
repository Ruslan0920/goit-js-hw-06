const form = document.querySelector('#controls');
console.log(form);
form.addEventListener('click', createBoxes);

const divBoxes = document.querySelector("#boxes");
console.log(divBoxes);

const allChild = form.children;
console.log(allChild);

const firstChild = form.firstElementChild;
console.log(firstChild);
console.log(firstChild.value);
firstChild.addEventListener('input', inputValue);
console.log(firstChild.value);

function inputValue(eve) {
  eve.currentTarget.value;
  console.log(eve.currentTarget.value);
}


// const btnCreate = document.querySelector('button[data-create="create"]')
// console.log(btnCreate.dataset.create);

function createBoxes(amount) {
  amount = firstChild.value;
  const newBoxses = <div class="new-boxes" wiвth="30px" heigh="30px"></div>
  console.log(newBoxses);
divBoxes.innerHTML = newBoxses

  // const {
  //   element: { number}
  // } = e.currentTarget;
  // console.log(e.currentTarget);
}
// amount = firstChild.value

// const inputForm = document.querySelector(".numbers")
// // console.log(inputForm);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
