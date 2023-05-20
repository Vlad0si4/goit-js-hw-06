const sizeText = document.querySelector('#text')

const sizeTextScroll = () => {
  sizeText.style.fontSize = rangeScroll.value + 'px'
}

rangeScroll.addEventListener('input', sizeTextScroll )