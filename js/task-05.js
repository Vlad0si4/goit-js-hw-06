
const inputName = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output')

inputName.addEventListener('input', () => {
  if (inputName.value === '') {
    nameOutput.textContent = "Anonymous"
  } else {
    nameOutput.textContent = inputName.value
  }
})