const refs = {
  amountInput: document.querySelector('#controls input'),
  createBtn: document.querySelector('button[data-create]'),
  destroyBtn: document.querySelector('button[data-destroy]'),
  boxesDiv: document.querySelector('#boxes')
}

function createBoxes(amount) {
  for(let i = 0; i < amount; i+=1) {
    const elem = document.createElement('div');
    // console.log(amount);
    elem.style.width = 30 + (10 * i)+'px';
    elem.style.height = 30 + (10 * i)+'px';
    elem.style.backgroundColor = getRandomHexColor();
    
    refs.boxesDiv.append(elem);
  }
}

refs.createBtn.addEventListener('click', createElements);

function createElements () {
  const amount = refs.amountInput.value;
  if(amount > 0) {
    createBoxes(amount);
  }
};

refs.destroyBtn.addEventListener('click', destroyElements);

function destroyElements () {
  refs.boxesDiv.innerHTML = '';
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};