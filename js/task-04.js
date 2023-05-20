
const counterValue = document.querySelector("#value");
let count = 0;

const decrementCount = document.querySelector('button[data-action="decrement"]');
const incrementCount = document.querySelector('button[data-action="increment"]');

const handlerClickCountIncr = () => {
  count -= 1;
  counterValue.textContent = count;
}
const handlerClickCountDecr = () => {
  count += 1;
  counterValue.textContent = count;
}

decrementCount.addEventListener('click', handlerClickCountIncr)
incrementCount.addEventListener('click', handlerClickCountDecr)

