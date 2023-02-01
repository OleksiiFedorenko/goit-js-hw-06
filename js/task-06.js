const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onInputCheck);

function onInputCheck(event) {
  const valueRef = event.currentTarget.value;
  const checkLength = Number(event.currentTarget.dataset.length);
  const classRef = event.currentTarget.classList;

  if (!valueRef) {
    classRef.remove('valid', 'invalid');
  } else if (valueRef.length === checkLength) {
    classRef.add('valid');
    classRef.remove('invalid');
  } else {
    classRef.remove('valid');
    classRef.add('invalid');
  }
}
