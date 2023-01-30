let counterValue = 0;
const counterRef = document.querySelector('#value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

decrementBtn.addEventListener('click', onDecreaseCounter);
incrementBtn.addEventListener('click', onIncreaseCounter);

function onDecreaseCounter() {
  counterValue -= 1;
  updateValue();
}

function onIncreaseCounter() {
  counterValue += 1;
  updateValue();
}

function updateValue() {
  counterRef.textContent = counterValue;
}
