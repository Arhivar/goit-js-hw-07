function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeBtn = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");
const colorBody = document.querySelector("body");

changeBtn.addEventListener("click", changeColor);

console.dir(colorSpan.style.backgroundColor);
function changeColor(event) {
  colorBody.style.backgroundColor = getRandomHexColor();
  colorSpan.textContent = colorBody.style.backgroundColor;
}
