//  selection all elements by their class or id or name and storing them in various container

let text = document.querySelector(".text")
let textDiv = document.querySelector(".textDiv")
let resetButton = document.querySelector(".reset-Btn")
let resetDiv = document.querySelector(".resetDiv")
let bgColor = document.querySelector(".bgColor")
let fontSize = document.querySelector(".fontSize")
let selectionDiv = document.querySelector(".selectionDiv")





// Define global variables
let getBgColor;
let getFontSize;

// Function to set saved data from local storage
function setSavedData() {
    let storedBgColor = localStorage.getItem("BackgroundColor")
    let storedFontSize = localStorage.getItem("FontSize")
    if(storedFontSize && storedBgColor){
        getBgColor=storedBgColor
        getFontSize=storedFontSize
        textDiv.style.backgroundColor = storedBgColor;
        textDiv.style.fontSize = storedFontSize;
      bgColor.value = storedBgColor;
      fontSize.value = storedFontSize;

    }
    
}


// setting functions for the selects and //   setting values in local Storage
function selectFontSize(event){
    let getFontSize = event.target.value
    textDiv.style.fontSize=getFontSize
    
    localStorage.setItem("FontSize",getFontSize)
   
  }
  



// creating function for background color
function selectBgColor(event){
    let getBgColor = event.target.value
    textDiv.style.backgroundColor=getBgColor
    localStorage.setItem("BackgroundColor",getBgColor)
    
  }
 

//   setting function to retrieve data from local storage

window.addEventListener("DOMContentLoaded",setSavedData)
 // creating an event handler fot bg color
 bgColor.addEventListener("change",selectBgColor)
 // creating an event handler
fontSize.addEventListener("change",selectFontSize)







{/* <select name="FontSize" id="FontSize" class="fontSize">
<option id="8">8px</option>
<option id="16">16px</option>
<option id="24">24px</option>
<option id="32">32px</option>
<option id="40">40px</option>
</select> */}