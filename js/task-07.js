const fontSizeControl = document.querySelector('input');
const textInSpan = document.querySelector('span');

fontSizeControl.addEventListener('input', changeFontSize);

function changeFontSize(event) {
    textInSpan.style.fontSize = event.currentTarget.value + "px";
}