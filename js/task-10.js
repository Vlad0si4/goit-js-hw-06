function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

const refs = {
  input: document.querySelector("#controls input"),
  create: document.querySelector("[data-create]"),
  destroy: document.querySelector("[data-destroy]"),
  boxes: document.querySelector("#boxes")
};

let boxSize = 30;
const boxes = [];

const createBoxes = () => {
  const amount = Number(refs.input.value);

  for (let i = 0; i < amount; i +=1) {
    boxSize += 10;

    const box = document.createElement("div");
    box.style.width = boxSize + "px";
    box.style.height = boxSize + "px";
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }

  refs.boxes.append(...boxes);
};

const destroyBoxes = () => {
  refs.boxes.innerHTML = "";
};

refs.create.addEventListener("click", createBoxes);
refs.destroy.addEventListener("click", destroyBoxes);
