const textDiv = document.querySelector(".textDiv"); // Use const for elements
const resetButton = document.querySelector(".reset-Btn");
const backgroundColorInput = document.querySelector(".selectBg");
const fontSizeInput = document.querySelector(".selectFont");

let storedBackgroundColor = localStorage.getItem("userInColor") || "pink";
let storedFontSize = localStorage.getItem("userInFont") || "8px";

function applyUserSettings() {
  // Handle potential null values
  if (textDiv) {
    textDiv.style.backgroundColor = storedBackgroundColor;
  }
  if (textDiv) {
    textDiv.style.fontSize = storedFontSize;
  }
  if (backgroundColorInput) {
    backgroundColorInput.value = storedBackgroundColor;
  }
  if (fontSizeInput) {
    fontSizeInput.value = storedFontSize;
  }
}

function fontUserInput(event) {
  storedFontSize = event.target.value;
  if (textDiv) {
    textDiv.style.fontSize = storedFontSize;
  }
  localStorage.setItem("userInFont", storedFontSize);
}

function colorUserInput(event) {
  // Validate color format (consider using a regular expression)
  const isValidColor = /^#[0-9a-fA-F]{6}$/.test(event.target.value);
  if (isValidColor) {
    storedBackgroundColor = event.target.value;
    if (textDiv) {
      textDiv.style.backgroundColor = storedBackgroundColor;
    }
    localStorage.setItem("userInColor", storedBackgroundColor);
  } else {
    // Handle invalid color input (e.g., show an error message)
  }
}

function resetAll() {
  localStorage.removeItem("userInColor");
  localStorage.removeItem("userInFont");
  storedBackgroundColor = "pink";
  storedFontSize = "8px";
  applyUserSettings();
}

// Add event listeners
if (fontSizeInput) {
  fontSizeInput.addEventListener("change", fontUserInput);
}
if (backgroundColorInput) {
  backgroundColorInput.addEventListener("change", colorUserInput);
}
if (resetButton) {
  resetButton.addEventListener("click", resetAll);
}

window.onload = applyUserSettings; // Apply stored values on page load