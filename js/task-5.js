const body = document.querySelector("body");
const btn = document.querySelector(".change-color");
const nameBgColorBody = document.querySelector(".color");

function changeBgColorOnClick() {
  body.style.background = getRandomHexColor();
  nameBgColorBody.textContent = getRandomHexColor();
}
btn.addEventListener("click", changeBgColorOnClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
