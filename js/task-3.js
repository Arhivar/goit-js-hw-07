const anInput = document.querySelector("#name-input");
const anOutput = document.querySelector("#name-output");
console.log(anInput);
console.log(anOutput);

anInput.addEventListener("input", changeInput);
function changeInput(event) {
  const result = event.target.value.trim();
  console.log(result);
  if (result != "") {
    anOutput.textContent = result;
    return;
  } else if (result == "") {
    return (anOutput.textContent = "Anonymus");
  }
}
