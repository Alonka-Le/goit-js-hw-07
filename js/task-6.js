function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const elementCountInput = document.querySelector("input");
const createButton = document.querySelector("button");
const destroyButton = document.querySelector("button[data-destroy]");
const boxesContainer = document.getElementById("boxes");

function createBoxes(amount) {
  let width = 30;
  let height = 30;
  boxes.innerHTML = "";
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");

    box.style.width = `${width}px`;
    box.style.height = `${height}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxesContainer.appendChild(box);

    width += 10;
    height += 10;
  }
}

createButton.addEventListener("click", () => {
  const elementCount = parseInt(elementCountInput.value);
  if (elementCount <= 100) {
    createBoxes(elementCount);
  }

  elementCountInput.value = "";
});

destroyButton.addEventListener("click", () => {
  boxesContainer.innerHTML = "";
});
