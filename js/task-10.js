function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  input: document.querySelector('#controls input'),
  create: document.querySelector('[data-create]'),
  destroy: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes')
};

const createBoxes = () => {
  const amount = Number(refs.input.value);
  const boxes = [];

  let boxSize = 30;

  destroyBoxes();

  for (let i = 0; i < amount; i+=1) {
    const box = document.createElement('div');
    box.style.width = boxSize + 'px';
    box.style.height = boxSize + 'px';
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);

    boxSize += 10;
  }

  refs.boxes.append(...boxes);
};

const destroyBoxes = () => {
  refs.boxes.innerHTML = '';
};

refs.create.addEventListener('click', createBoxes);
refs.destroy.addEventListener('click', destroyBoxes);