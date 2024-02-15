let textDiv = document.querySelector(".textDiv");
let resetButton = document.querySelector(".reset-Btn");
let bgColor = document.querySelector(".selectBg");
let fontSize = document.querySelector(".selectFont");
let selectionDiv = document.querySelector(".selectionDiv");

let userInputColor;
let userInputFont;

function getLocalStorageValue() {
    let savedColor = localStorage.getItem("userInColor");
    let savedFont = localStorage.getItem("userInFont");

    userInputColor = savedColor || "pink";
    userInputFont = savedFont || "8px";
    
    applyUserSettings();
}

function applyUserSettings() {
    textDiv.style.backgroundColor = userInputColor;
    textDiv.style.fontSize = userInputFont;
    bgColor.value = userInputColor;
    fontSize.value = userInputFont;
}

function fontUserInput(event) {
    userInputFont = event.target.value;
    textDiv.style.fontSize = userInputFont;
    localStorage.setItem("userInFont", userInputFont);
}

function colorUserInput(event) {
    userInputColor = event.target.value;
    textDiv.style.backgroundColor = userInputColor;
    localStorage.setItem("userInColor", userInputColor);
}

function resetAll() {
    localStorage.removeItem("userInColor");
    localStorage.removeItem("userInFont");
    getLocalStorageValue(); // Reset UI to default values
}

fontSize.addEventListener("change", fontUserInput);
bgColor.addEventListener("change", colorUserInput);
resetButton.addEventListener("click", resetAll);

window.onload = getLocalStorageValue; // Call the function to apply stored values when the page loads
