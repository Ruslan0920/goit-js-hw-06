const liEl = document.querySelectorAll("li.item").length;
console.log(`Number of categories: ${liEl}`);

const hTextEl = document.querySelector("h2")
console.log(`Category: ${hTextEl.textContent}`);

const ulEl = document.querySelectorAll("li.item ul li") 
console.log(ulEl);
console.log(ulEl.length);
ulEl.forEach(function (el) {
    console.log(el);
    
})

const allUl = document.querySelector("#categories")
console.log(allUl)
const notAllUl = allUl.childNodes;
console.log(notAllUl)
// const onlyUl = notAllUl.children;
// console.log(onlyUl)

notAllUl.forEach(function (elem) {
    console.log(elem.textContent) 
    console.log(elem.length)
}) 
   
