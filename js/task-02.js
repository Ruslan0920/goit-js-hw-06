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

// list.insertAdjacentHTML('beforebegin', ingredients
// .map(el => `<li>${el}</li>`)
// .join(''));

const newElements = document.createElement("li");
//   console.log(newElements);
ingredients.forEach(function (elem) {
    // console.log(elem);
// const content = newElements.innerHTML;
// console.log(content);
  // const newElements = document.createElement("li");
//   console.log(newElements);
  const createNewElements = newElements.querySelector("li");
  console.log(createNewElements);

  newElements.textContent = elem;
  console.log(newElements.textContent);

  newElements.classList.add("item");
    
  // list.append(newElements);
  // // console.log(newElements);
    // console.log(createNewElements);
  
});
list.append(newElements);
// const content = createNewElements.innerHTML;
// console.log(content);
//   list.append(content);
  // console.log(list.append(createNewElements));
// list.append(ingredients);
// ingredients.join("<br>")
//   console.log(ingredients.join(" "));