
let increaseBtn = document.getElementById("increaseBtn");
let decreaseBtn = document.getElementById("decreaseBtn");
let boxContainer = document.getElementById("boxContainer");
let pixelCount = document.getElementById("pixelCount")
let gridSize = 2;
let total = 2;
console.log(gridSize)
 


document.getElementById("decreaseBtn").disabled = true;

let likeBtn = document.getElementById("likeBtn");

likeBtn.onclick = function(){
    location.href = "canvas-page/canvas.html"
}

increaseBtn.onclick = function(){
    
    gridSize = gridSize * 2;
    console.log(gridSize)

    pixelCount.innerHTML = `${gridSize} x ${gridSize}`;
    let total = gridSize ** 2;
    boxContainer.innerHTML = "";

    for(i = 0; i<total ; i++){
        boxCreate = document.createElement("div")
        boxCreate.classList.add("createdBoxes");
        boxContainer.appendChild(boxCreate)
        boxContainer.style.gridTemplateColumns = `repeat(${gridSize},1fr)`
        boxContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`
        
        if(gridSize >= 32){
            boxCreate.style.border= "1px solid rgba(0, 0, 0, .5)"   
        }
        if(gridSize >= 64){
            boxCreate.style.border= "1px solid rgba(0, 0, 0, .25)"   
        } 
         if(gridSize > 3){
        likeBtn.disabled = false
    }
    }


    if (gridSize >= 64){
        document.getElementById("increaseBtn").disabled = true;
    }
    else if (gridSize <= 64){
        document.getElementById("increaseBtn").disabled = false;
    }

    if (gridSize > 4){
        document.getElementById("decreaseBtn").disabled = false;
    }
    else if(gridSize <= 4){
        document.getElementById("decreaseBtn").disabled = true;
    }
    
    let clickBoxes = document.getElementsByClassName("createdBoxes");

   


    localStorage.setItem("gridSize", gridSize) ;
    console.log(localStorage)

}

decreaseBtn.onclick = function(){

    gridSize = gridSize / 2;
    console.log(gridSize)

    pixelCount.innerHTML = `${gridSize} x ${gridSize}`;
    let total = gridSize ** 2;
    boxContainer.innerHTML = ""  


    for(i = 0; i<total ; i++){
        boxCreate = document.createElement("div")
        boxCreate.classList.add("createdBoxes");
        boxContainer.appendChild(boxCreate)
        boxContainer.style.gridTemplateColumns = `repeat(${gridSize},1fr)`
        boxContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`
        if(gridSize >= 32){
            boxCreate.style.border= "1px solid rgba(0, 0, 0, .5)"   
        }
        if(gridSize >= 64){
            boxCreate.style.border= "1px solid rgba(0, 0, 0, .25)"   
        } 
    }
    
   

    //find out how to get local storage to store updated gridsize

    if (gridSize > 4){
        document.getElementById("decreaseBtn").disabled = false;
    }
    else if(gridSize <= 4){
        document.getElementById("decreaseBtn").disabled = true;
    }
    if (gridSize >= 64){
        document.getElementById("increaseBtn").disabled = true;
        console.log(">=64")
    }
    else if (gridSize <= 64){
        document.getElementById("increaseBtn").disabled = false;
    }


    if(gridSize > 3){
        likeBtn.disabled = false
    }

    localStorage.setItem("gridSize", gridSize) ;
    console.log(localStorage)

}



// when go button is pressed
// remove all other features
// implement new features like rubber 
















// 06/04, I think i couldve made this code so much better if i first made the grid and then made functions that adapt the grid, instead of each function making a new grid everytime?