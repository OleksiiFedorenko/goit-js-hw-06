const formRef = document.querySelector('.login-form');
formRef.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  if (!email.value || !password.value) alert('Please fill in all the fields');
  else {
    console.log({ email: email.value, password: password.value });
    event.currentTarget.reset();
  }
}
