// const form = document.querySelector('#controls');
// console.log(form);
// form.addEventListener('click', createBoxes);

// const divBoxes = document.querySelector("#boxes");
// console.log(divBoxes);

// const allChild = form.children;
// console.log(allChild);

// const firstChild = form.firstElementChild;
// console.log(firstChild);
// console.log(firstChild.value);
// firstChild.addEventListener('input', inputValue);
// console.log(firstChild.value);

// function inputValue(eve) {
//   eve.currentTarget.value;
//   console.log(eve.currentTarget.value);
// }


// // const btnCreate = document.querySelector('button[data-create="create"]')
// // console.log(btnCreate.dataset.create);

// function createBoxes(amount) {
// //   amount = firstChild.value;
// //   const newBoxses = <div class="new-boxes" wiвth="30px" heigh="30px"></div>
// //   console.log(newBoxses);
// // divBoxes.innerHTML = newBoxses

//   // const {
//   //   element: { number}
//   // } = e.currentTarget;
//   // console.log(e.currentTarget);
// }
// amount = firstChild.value

// const inputForm = document.querySelector(".numbers")
// // console.log(inputForm);


const refs = {
  amountEl: document.querySelector('#controls input'),
  createEl: document.querySelector('button[data-create]'),
  destroyEl: document.querySelector('button[data-destroy]'),
  boxesEl: document.querySelector('#boxes')
}

function createBoxes(amount) {
  for(var i = 0; i < amount; i++) {
    var elem = document.createElement('div');
    
    elem.style.width = 30 + (10 * i)+'px';
    elem.style.height = 30+'px';
    elem.style.backgroundColor = getRandomHexColor();
    
    refs.boxesEl.append(elem);
  }
}

refs.createEl.addEventListener('click', function() {
  var amount = refs.amountEl.value;
  if(amount > 0) {
    createBoxes(amount);
  }
});

refs.destroyEl.addEventListener('click', function() {
  refs.boxesEl.innerHTML = '';
});


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
