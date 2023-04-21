const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.forEach(function (elem) {
  // console.log(elem);

const newTags = document.createElement("li")
console.log(newTags);
newTags.textContent = elem;
console.log(newTags.textContent);
  newTags.classList.add("item")
  newTags.append(ingredients)
  console.log(ingredients);
})