const colorBtnRef = document.querySelector('.change-color');
const colorTextRef = document.querySelector('.color');

colorBtnRef.addEventListener('click', onChangeColor);

function onChangeColor() {
  const currentColor = getRandomHexColor();
  document.body.style.backgroundColor = currentColor;
  colorTextRef.textContent = currentColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
