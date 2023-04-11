const liEl = document.querySelectorAll("li.item").length;
console.log(`Number of categories: ${liEl}`);

const hTextEl = document.querySelectorAll("h2")
console.log(`Category: ${hTextEl.textContent}`);

const ulEl = document.querySelectorAll("li.item ul")
console.log(ulEl);
ulEl.forEach(function (el) {
    console.log(el);
})