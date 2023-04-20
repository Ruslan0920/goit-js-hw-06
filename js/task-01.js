const elements = document.querySelectorAll(".item");
console.log(`Number of categories: ${elements.length}`);
// const elements = document.querySelectorAll(".item ul")
// console.log(elements);
elements.forEach(function (elem) {
    console.log(`Category: ${elem.firstElementChild.textContent}`);
    console.log(`Elements: ${elem.childNodes.length}`);

//   console.log(`Elements: ${element.length}`);
});

// const newElement = document.querySelectorAll("h2")
// console.log(newElement.textContent);
// liEl.forEach(function (elem) {
//     console.log(elem.textContent)
//     // console.log(elem.length)
//     })


// const selectors = document.querySelectorAll("h2");
// console.log(selectors);
// // const allChild = selectors.firstChild;
// // console.log(allChild);
// selectors.forEach(function (element) {
//   console.log(`Category: ${element.textContent}`);
// });
// const elements = document.querySelectorAll(".item ul")
// console.log(elements);
// elements.forEach(function (elem) {
//     console.log(`Elements: ${elem.children.length}`);
    // element.join(" ")
//   console.log(`Elements: ${element.length}`);
// });


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
   
