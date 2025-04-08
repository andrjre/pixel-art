

let increaseBtn = document.getElementById("increaseBtn");
let decreaseBtn = document.getElementById("decreaseBtn");
let boxContainer = document.getElementById("boxContainer");
let pixelCount = document.getElementById("pixelCount")
let gridSize = 2;
let total = 2;
console.log(gridSize)
document.getElementById("decreaseBtn").disabled = true;

let newGrid = localStorage.getItem("gridSize");
console.log(localStorage)

        boxContainer.style.gridTemplateColumns = `repeat(${newGrid},1fr)`
        boxContainer.style.gridTemplateRows = `repeat(${newGrid}, 1fr)`

    

// when go button is pressed
// remove all other features
// implement new features like rubber 

















// 06/04, I think i couldve made this code so much better if i first made the grid and then made functions that adapt the grid, instead of each function making a new grid everytime?