const refs = {
  form: document.querySelector('.login-form'),
}

const onSubmit = (event) => {
  event.preventDefault();

   const { email, password } = event.target.elements;

  if (email.value === '' || password.value === '') {
    alert('All fields must be filled');
    return;
  }
     console.log({ email: email.value, password: password.value });
  event.target.reset();
}
refs.form.addEventListener('submit', onSubmit)

