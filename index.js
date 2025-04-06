

const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
let boxContainer = document.getElementById("boxContainer");
let pixelCount = document.getElementById("pixelCount")
let gridSize = 2;
let total = 2;
document.getElementById("decreaseBtn").disabled = true;

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
    }

    if (gridSize >= 64){
        document.getElementById("increaseBtn").disabled = true;
        console.log(">=64")
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
    }
    

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

}
