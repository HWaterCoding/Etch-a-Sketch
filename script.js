const input = document.getElementById("input");
const submitBtn = document.getElementById("submitBtn");
const clearBtn = document.getElementById("clearBtn")
const promptText = document.getElementById("promptText");
const canvas = document.getElementById("canvas");


//clear grid on click of clear button
clearBtn.addEventListener('click', clearGrid)


//On input focus, prompt user to choose a grid size
input.addEventListener('focus', () => {
    promptText.textContent = "Please enter a number between 2 and 64."
});


//On press of 'enter' key, create grid or inform user their input is invalid
input.addEventListener('keydown', function (e){
    if(e.key === "Enter"){
        makeGrid();
    }
});


// On click of submit button, create grid or inform user their input is invalid
submitBtn.addEventListener('click', makeGrid);


// on page load create default grid 10 x 10
makeGrid();

// on page load allow squares to be used
draw();



//make the grid
function makeGrid(){
    let number = input.value;
    if(number < 0 || number > 64 || isNaN(number)){
        promptText.textContent = `Invalid number. Generating 10 x 10 grid. Please enter a number between 2 and 64.`;
    } else {
        promptText.textContent = "";
        input.value = "";
        canvas.innerHTML = "";
    }
    if(number == 0 || number > 64 || number == ""){
        canvas.innerHTML = "";
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
        promptText.textContent = `Generating a ${number} x ${number} grid...`;
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
        draw();
}
}


//call draw function again after user customization of grid
draw();

//isMouseDown variable to determine whether the mouse is being held down
let isMouseDown = false;

document.addEventListener("mousedown", () => {
    isMouseDown = true
});
document.addEventListener("mouseup", () => {
    isMouseDown = false
});

   

//draw function to be called on page load and after makeGrid function
//allows user to click and drag across grid to change colors of tiles
function draw(){
    let columns = document.getElementsByClassName("columns");
    for(let i = 0; i < columns.length; i++){
        columns[i].addEventListener("mousedown", changeColors);
        columns[i].addEventListener("mouseover", function () {
            if(isMouseDown){
                changeColors.call(this);
            }
        })
    }

    function changeColors(){
    const blackMarker = document.getElementById("black");
    const darkBlueMarker = document.getElementById("darkblue");
    const lightBlueMarker = document.getElementById("lightblue");
    const redMarker = document.getElementById("red");
    const orangeMarker = document.getElementById("orange");
    const yellowMarker = document.getElementById("yellow");
    const greenMarker = document.getElementById("green");
    const purpleMarker = document.getElementById("purple");
    const pinkMarker = document.getElementById("pink");
    const rainbowMarker = document.getElementById("rainbow");
    const eraser = document.getElementById("eraser");


    if (blackMarker.checked){
        this.style.backgroundColor = "rgb(0, 0, 0)";
    } else if (darkBlueMarker.checked){
        this.style.backgroundColor = "rgb(0, 0, 140)";
    } else if (lightBlueMarker.checked){
        this.style.backgroundColor = "rgb(120, 200, 225)";
    } else if (redMarker.checked){
        this.style.backgroundColor = "rgb(255, 0, 0)";
    } else if (orangeMarker.checked){
        this.style.backgroundColor = "rgb(255, 165, 0)";       
    } else if (yellowMarker.checked){
        this.style.backgroundColor = "rgb(255, 255, 0)";      
    } else if (greenMarker.checked){
        this.style.backgroundColor = "rgb(0, 130, 0)";     
    } else if (purpleMarker.checked){
        this.style.backgroundColor = "rgb(130, 0, 130)";      
    } else if (pinkMarker.checked){
        this.style.backgroundColor = "rgb(255, 190, 200)";     
    } else if (rainbowMarker.checked){
        // let randomColor = Math.floor(Math.random() * 16777216).toString(16);
        // this.style.backgroundColor = `#${randomColor}`;
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;     
    } else if (eraser.checked){
        this.style.backgroundColor = "";     
    }
}
}

// clear the grid and reset to a 10x10 default grid
function clearGrid(){
    input.value = "";
    makeGrid();
    draw();
}










