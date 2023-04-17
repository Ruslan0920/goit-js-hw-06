const liEl = document.querySelectorAll("li.item").length;
console.log(`Number of categories: ${liEl}`);

const hTextEl = document.querySelector("h2")
console.log(`Category: ${hTextEl.textContent}`);

const ulEl = document.querySelectorAll("li.item ul li") 
console.log(ulEl);
console.log(ulEl.length);
ulEl.forEach(function (el) {
    console.dir(el);
    
})