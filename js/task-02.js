const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");
// console.log(list);

const createNewElements = ingredients.map((ingredient) => {
  const newElements = document.createElement('li');
  // console.log(newElements);
  newElements.textContent = ingredient;
  // console.log(newElements.textContent);
  newElements.classList.add("item");
  
  return newElements;
  
});

list.append(...createNewElements);
// console.dir(createNewElements);


// const createNewElements = [];

// ingredients.map((ingredient) => {
//   const newElements = document.createElement('li');
//   console.log(newElements);
//   newElements.textContent = ingredient;
//   console.log(newElements.textContent);
//   newElements.classList.add("item");
  
//   return createNewElements.push(newElements)
  
// });

// list.append(...createNewElements);
// console.dir(createNewElements);