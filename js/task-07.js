const sliderRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

sliderRef.addEventListener('input', onFontSizeChange);

function onFontSizeChange(event) {
  textRef.style.fontSize = `${event.currentTarget.value}px`;
}
