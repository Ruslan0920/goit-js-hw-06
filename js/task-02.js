const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients")

const createNewElements = [];

ingredients.map((ingredient) => {
  const newElements = document.createElement('li');
  newElements.textContent = ingredient;
  newElements.classList.add("item");
  
  return createNewElements.push(newElements)
  
});

list.append(...createNewElements);
// console.log(createNewElements);
