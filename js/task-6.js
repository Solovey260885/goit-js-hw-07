function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");

const btnCreate = document.querySelector("#controls").children[1];

const btnDestroy = document.querySelector("#controls").lastElementChild;
const divBoxes = document.querySelector("#boxes");

btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);

function createBoxes() {
  divBoxes.innerHTML = "";

  let divsHTML = "";
  const startWidth = 30 - 10;
  const startHeight = 30 - 10;

  let amount = 0;
  amount = input.value;
  let width = 0;
  let height = 0;

  if (amount >= 1 && amount <= 100) {
    for (let i = 1; i <= amount; i++) {
      width = startWidth + 10 * i;
      height = startHeight + 10 * i;
      divsHTML = `<div
      style="width: ${width}px; height: ${height}px; background-color: ${getRandomHexColor()}"
      </div>`;
      divBoxes.insertAdjacentHTML("afterbegin", divsHTML);
    }
  }
  input.value = "";
}
function destroyBoxes() {
  divBoxes.innerHTML = "";
}
