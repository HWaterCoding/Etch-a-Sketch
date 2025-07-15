const input = document.getElementById("input");
const submitBtn = document.getElementById("submitBtn");
const clearBtn = document.getElementById("clearBtn")
const promptText = document.getElementById("prompt");
const canvas = document.getElementById("canvas");
const numRows = 4;
const numCols = 4;


// on page load, create prompt to guide user to use the input feature.
function gridPrompt(){
    promptText.textContent = "Please enter a number between 2 and 64."
}
gridPrompt();

// create function that, if user enters number outside 2-64, prompts
// them to re-enter a valid number within the specified range


// create a function that takes whatever value they enter in the input
// and creates a p tag next to the input to show it will be a 16x16 grid, for example.








// const numbers = prompt("how many?");
// const inputElement = document.getElementById("input");
// const inputValue = inputElement.value;

// add event listener for enter or click of button next to input to run function

 
// only accept a single value up to 64 and only accept numbers
// have that input equal numRows and numCols to change the equation
// create a different function that takes numRows and numCols as parameters
// then flex-wrap them to create a grid.




function createRows(numRows, numCols){
    for(i = 0; i < numRows * numCols; i++){
        const rowSquares = document.createElement("div");
        rowSquares.classList.add("squares");
        canvas.appendChild(rowSquares);
    }
}

createRows(numRows, numCols);



// function createRows(numRows){
//     for(i = 0; i < numRows; i++){
//         const rowSquares = document.createElement("div");
//         rowSquares.classList.add("rows");
//         gridContainer.appendChild(rowSquares);
//     }
// }

// createRows(numRows);

// function createCols(numCols){
//     for(i = 0; i < numCols; i++){
//         const rowSquares = document.createElement("div");
//         rowSquares.classList.add("cols");
//         gridContainer.appendChild(rowSquares);
//     }
// }

// createCols(numCols);




// add event listeners to every square for mousedown and mouseover events