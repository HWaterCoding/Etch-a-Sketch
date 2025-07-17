const input = document.getElementById("input");
const submitBtn = document.getElementById("submitBtn");
const clearBtn = document.getElementById("clearBtn")
const promptText = document.getElementById("promptText");
const canvas = document.getElementById("canvas");
const gridText = document.getElementById("gridText");
const numRows = 4;
const numCols = 4;


// on page load make sure the default grid is 10 x 10


//On input focus, prompt user to choose a grid size
input.addEventListener('focus', () =>{
    promptText.textContent = "Please enter a number between 2 and 64."
});

//On click of submit button, create grid or inform user their input is invalid
submitBtn.addEventListener('click', () =>{
    const inputValue = input.value;
    if(inputValue >= 2 && inputValue <= 64){
        //CALL YOUR MAKEGRID FUNCTION HERE
        promptText.textContent = `Generating a ${inputValue} x ${inputValue} grid...`
    } else{
        promptText.textContent = "Invalid number. Please enter a number between 2 and 64."
    }
});



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



function draw(){
// add event listeners to every square for mousedown and mouseover events
// do so by adding an event listener to every square targetting their class
}










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




