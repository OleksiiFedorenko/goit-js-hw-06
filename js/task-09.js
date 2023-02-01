const colorBtnRef = document.querySelector('.change-color');
colorBtnRef.addEventListener('click', onChangeColor);

const colorTextRef = document.querySelector('.color');

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
