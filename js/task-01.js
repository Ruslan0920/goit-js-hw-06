const elements = document.querySelectorAll(".item");
console.log(`Number of categories: ${elements.length}`);

elements.forEach(function (elem) {
    console.log(`Category: ${elem.firstElementChild.textContent}`);
    console.log(`Elements: ${elem.lastElementChild.children.length}`);
});