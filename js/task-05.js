const nameInputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');

nameInputRef.addEventListener('input', updateName);

function updateName(event) {
  nameOutputRef.textContent = event.currentTarget.value
    ? event.currentTarget.value
    : 'Anonymous';
}
