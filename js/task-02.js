const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("#ingredients")
console.log(list);

ingredients.forEach(function (elem) {
  console.log(elem);
  
const newElements = document.createElement("li");
    // console.log(newElements);

  newElements.textContent = elem;
  // console.log(newElements.textContent);

  newElements.classList.add("item");

  list.append(newElements);
  // console.log(newElements);
});
  // list.append(createAllElements);
  // console.log(createAllElements);