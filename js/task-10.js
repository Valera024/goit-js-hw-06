function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const create = document.querySelector("button[data-create]");
const destroy = document.querySelector("button[data-destroy]");
const number = document.querySelector("input[type='number']");
const box = document.querySelector("#boxes");

function createBoxes(amount) {
  let newDiv;
  let size = 20;
  let randomColor;
  for (let i = 0; i < amount; i += 1) {
    randomColor = getRandomHexColor();
    size += 10;
    newDiv = `<div style="width: ${size}px; height: ${size}px; background-color: ${randomColor};"></div>`;
    box.insertAdjacentHTML("beforeend", newDiv);
  }
}

create.addEventListener("click", () => {
  if (box.innerHTML !== '') {
    destroyBoxes();
  }
  if (number.value > 100 || isNaN(number.value) || number.value < 1) {
    alert("value must be between 1 and 100")
  }
  else {
    createBoxes(number.value)
  }
});

function destroyBoxes() {
  box.innerHTML = '';
}

destroy.addEventListener("click", destroyBoxes);