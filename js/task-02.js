const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("#ingredients")
  // console.log(list);

ingredients.forEach(function (elem) {
  // console.log(elem);  
  const newElements = document.createElement("li");
  // console.log(newTags);
  newElements.textContent = elem;
  // console.log(newTags.textContent);
  newElements.classList.add("item");
  list.append(newElements);
})