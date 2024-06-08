const body = document.querySelector("body");
const btn = document.querySelector(".change-color");
const nameBgColorBody = document.querySelector(".color");

function changeBgColorOnClick() {
  let colorRandom = getRandomHexColor();
  body.style.background = colorRandom;
  nameBgColorBody.textContent = colorRandom;
}
btn.addEventListener("click", changeBgColorOnClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
