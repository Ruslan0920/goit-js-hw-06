const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
console.log(ingredients);
const list = document.querySelector("#ingredients")
console.log(list);

const createNewElements = ingredients.map(elem =>
  document.createElement('li')
// elem.textContent = "elem"
  // elem.classList.add("item")
)

// console.log(elem);
console.dir(createNewElements);
list.append(createNewElements)

// const planets = ["Земля", "Марс", "Венера", "Юпітер"];

// const planetsInUpperCase = ingredients.map(elem => elem.toUpperCase());
// console.log(planetsInUpperCase);


// list.insertAdjacentHTML('beforebegin', ingredients
// .map(el => `<li>${el}</li>`)
// .join(''));

// const newElements = document.createElement("li");
//   console.log(newElements);
// ingredients.forEach(function (elem) {
//     // console.log(elem);
// // const content = newElements.innerHTML;
// // console.log(content);

//   const newElements = document.createElement("li");
// //   console.log(newElements);
//   newElements.textContent = elem;
//   console.log(newElements.textContent);
//   newElements.classList.add("item");
    
//   list.append(newElements);
//   // // console.log(newElements);
//     // console.log(createNewElements);
  
//   // return createNewElements;
  
  
// });
// list.append(createNewElements);
// const content = createNewElements.innerHTML;
// console.log(content);
//   list.append(content);
  // console.log(list.append(createNewElements));
// list.append(ingredients);
// ingredients.join("<br>")
//   console.log(ingredients.join(" "));