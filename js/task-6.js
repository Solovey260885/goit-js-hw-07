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
  let divsHTML = [];
  let amount = input.value;

  if (amount >= 1 && amount <= 100) {
    divsHTML = Array.from(
      { length: amount },
      (v, i) =>
        `<div style=" width:${30 + i * 10}px; height:${
          30 + i * 10
        }px; background-color:${getRandomHexColor()}"></div>`
    ).join("");
  }
  divBoxes.insertAdjacentHTML("afterbegin", divsHTML);
  input.value = "";
}
function destroyBoxes() {
  divBoxes.innerHTML = "";
}
