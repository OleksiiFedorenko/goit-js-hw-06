const inputRef = document.querySelector('input');
const createBtnRef = document.querySelector('button[data-create]');
const destroyBtnRef = document.querySelector('button[data-destroy]');
const boxesRef = document.querySelector('#boxes');

createBtnRef.addEventListener('click', onCreate);
destroyBtnRef.addEventListener('click', onClean);

function onCreate() {
  const boxesArr = Array(Number(inputRef.value))
    .fill('')
    .map((el, i) => {
      const box = document.createElement('div');
      box.style.backgroundColor = getRandomHexColor();
      box.style.width = 30 + i * 10 + 'px';
      box.style.height = 30 + i * 10 + 'px';

      return box;
    });
  boxesRef.append(...boxesArr);
}

function onClean() {
  boxesRef.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
