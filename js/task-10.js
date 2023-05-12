const form = document.querySelector('#controls');
console.log(form);
form.addEventListener('click', createElements);

const allChild = form.children;
console.log(allChild);

const firstChild = form.firstElementChild;
console.log(firstChild);
console.log(firstChild.value);
firstChild.addEventListener('input', inputValue);
console.log();

function inputValue(eve) {
  eve.currentTarget.value;
  console.log(eve.currentTarget.value);
}


// const btnCreate = document.querySelector('button[data-create="create"]')
// console.log(btnCreate.dataset.create);

function createElements(e) {
  // const {
  //   element: { number}
  // } = e.currentTarget;
  // console.log(e.currentTarget);
}

// const inputForm = document.querySelector(".numbers")
// // console.log(inputForm);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
