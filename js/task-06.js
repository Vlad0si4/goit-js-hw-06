
const inputChangeColorBorder = document.querySelector('#validation-input');
const lengthData = inputChangeColorBorder.dataset.length;


inputChangeColorBorder.addEventListener('blur', () => {
  if (inputChangeColorBorder.value.length === Number(lengthData)) {
    inputChangeColorBorder.classList.add('valid');
    inputChangeColorBorder.classList.remove('invalid');
  } else {
     inputChangeColorBorder.classList.add('invalid');
    inputChangeColorBorder.classList.remove('valid');
  }
});