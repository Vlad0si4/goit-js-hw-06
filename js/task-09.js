
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  btn: document.querySelector('.change-color'),
  bcgColor: document.querySelector('body'),
  span: document.querySelector('.color')
}

const changeColor = () => {
  refs.bcgColor.style.backgroundColor = getRandomHexColor();
  refs.span.textContent =   refs.bcgColor.style.backgroundColor;
}

refs.btn.addEventListener('click', changeColor)