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
btnDestroy.addEventListener("click", clickDestroy);

function createBoxes(amount) {
  let div = `<div id="boxes1"></div>`;
  divBoxes.insertAdjacentHTML("afterbegin", div);
}
function clickDestroy() {}
