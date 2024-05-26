function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const mainBox = document.querySelector("#boxes");
const divForm = document.querySelector("#controls");
const create = document.querySelector("button[data-create]");
const destroy = document.querySelector("button[data-destroy]");
const input = document.querySelector("input");
let size = 30;
destroy.addEventListener("click", () => {
  mainBox.innerHTML = "";
  size = 30;
});
create.addEventListener("click", createCheck);
function createCheck() {
  if (input.value < 1 || input.value > 100) {
    console.log("Error.We can`t do this");
    return;
  }
  createDiv(input.value);
}
function createDiv(amount) {
  input.value = "";
  mainBox.innerHTML = "";
  size = 30;
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.height = `${size}px`;
    div.style.width = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    mainBox.append(div);
    size += 10;
  }
}
