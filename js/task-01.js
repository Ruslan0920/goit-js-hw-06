const liEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${liEl.length}`);
// const newElement = document.querySelectorAll("h2")
// console.log(newElement.textContent);
// liEl.forEach(function (elem) {
//     console.log(elem.textContent)
//     // console.log(elem.length)
//     })


var selectors = document.querySelectorAll("h2");
var arr = [];

selectors.forEach(function(element) {
  console.log(`Category: ${element.textContent}`);
});

console.log(arr);

// const numberElemUl = document.querySelectorAll("ul")
// console.log(numberElemUl);



// const hTextEl = document.querySelectorAll("h2")
// console.log(`Category: ${hTextEl.textContent}`);
// console.log(hTextEl)

// const ulEl = document.querySelectorAll("li.item ul li") 
// console.log(ulEl);
// console.log(ulEl.length);
// ulEl.forEach(function (el) {
//     console.log(el);
    
// })

// const allUl = document.querySelectorAll(".item")
// console.log(allUl)

// const notAllUl = allUl.childNodes;
// console.log(notAllUl)
// const onlyUl = notAllUl.querySelectorAll("ul");
// console.log(onlyUl)

// notAllUl.forEach(function (elem) {
//     console.log(elem.textContent) 
//     // console.log(elem.length)
// }) 
   
