const fontSizeControl = document.querySelector('input');
console.log(fontSizeControl);
fontSizeControl.addEventListener('range', changeFontSize);

const textInSpan = document.querySelector('span');
console.log(textInSpan);

let range = new Range();
console.log(range);
// range.setStart(font-size-control, 16);
// range.setEnd(font-size-control, 96);

function changeFontSize(event) {
    event.currentTarget.style.fontSize = "16px"
}