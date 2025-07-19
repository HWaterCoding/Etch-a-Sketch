const input = document.getElementById("input");
const submitBtn = document.getElementById("submitBtn");
const clearBtn = document.getElementById("clearBtn")
const promptText = document.getElementById("promptText");
const canvas = document.getElementById("canvas");
const gridText = document.getElementById("gridText");


// on page load make sure the default grid is 10 x 10

makeGrid();

//On input focus, prompt user to choose a grid size
input.addEventListener('focus', () =>{
    promptText.textContent = "Please enter a number between 2 and 64."
});

//On press of 'enter' key, create grid or inform user their input is invalid
input.addEventListener('keydown', function (e){
    const inputValue = input.value;
    if(e.key === "Enter"){
        if(inputValue >= 2 && inputValue <= 64){
        makeGrid();
        promptText.textContent = `Generating a ${inputValue} x ${inputValue} grid...`
    } else{
        promptText.textContent = "Invalid number. Please enter a number between 2 and 64."
    }
    }
});

// On click of submit button, create grid or inform user their input is invalid
submitBtn.addEventListener('click', () =>{
    const inputValue = input.value;
    if(inputValue >= 2 && inputValue <= 64){
        makeGrid();
        promptText.textContent = `Generating a ${inputValue} x ${inputValue} grid...`
    } else{
       
    }
});


//make the grid
function makeGrid(){
    let number = input.value;
    if(isNaN(number) || number < 2 || number > 64){
        promptText.textContent = "Invalid number. Please enter a number between 2 and 64."
    } else {
        promptText.textContent = "";
    }
    if(number == 0 || number > 64 || number == ""){
        for(let i = 0; i < 10; i++){
            const row = document.createElement("div");
            row.classList.add("rows");
            canvas.appendChild(row);
        
            for(let j = 0; j < 10; j++){
                const column = document.createElement("div");
                column.classList.add("columns");
                row.appendChild(column);
            }
        } 
    } else {
        for(let i = 0; i < number; i++){
            const row = document.createElement("div");
            row.classList.add("rows");
            canvas.appendChild(row);
        
            for(let j = 0; j < number; j++){
                const column = document.createElement("div");
                column.classList.add("columns");
                row.appendChild(column);
            }
        }
}
}


// makeGrid();


clearBtn.addEventListener('click', () =>{
    //run make grid function passing a 10x10 grid as the arguments
})









function draw(){
// add event listeners to every square for mousedown and mouseover events
// do so by adding an event listener to every square targetting their class
}












