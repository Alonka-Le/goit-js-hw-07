const nameInput = document.querySelector("input#name-input");
const nameOutput = document.querySelector("span#name-output");

nameInput.addEventListener("input", () => {
  const inputValue = nameInput.value.trim();

  if (inputValue) {
    nameOutput.textContent = inputValue;
  } else {
    nameOutput.textContent = "Anonymous";
  }
});
nameInput.addEventListener("change", () => {
  nameInput.value = "";
});
