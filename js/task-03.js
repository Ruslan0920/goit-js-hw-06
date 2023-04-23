const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const list = document.querySelector(".gallery");
console.log(list);

const newElements = images;
console.log(newElements);
const newArray = []
images.forEach(function (image) {
  const newImg = document.createElement("img");
  console.log(newImg)
  newImg.url = image;
  newImg.alt = image;
  newArray.push(newImg);
  console.log(newArray);
  list.append(newArray);
})


const addImg = newArray.
  map((image) => `<li> ${image.alt} </li>`)
  .join("")

console.log(addImg);
list.insertAdjacentHTML("afterbegin", addImg);
console.log()

// const newLi = document.createElement('li');
// console.log(newLi)
// const newImg = document.createElement('img');
// console.log(newImg);
// newImg.src = "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260";
// newImg.alt = "White and Black Long Fur Cat";

