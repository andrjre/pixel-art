

const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
let boxContainer = document.getElementById("boxContainer");
let pixelCount = document.getElementById("pixelCount")
let gridSize = 1;



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

        if (gridSize >= 64){
            document.getElementById("increaseBtn").disabled = true;
        }
        if (gridSize >64){
            console.log("too big !")
        }
        else if(gridSize >= 32){
            boxCreate.style.border= "1px solid rgba(0, 0, 0, .5)"   
        }
    }
}

decreaseBtn.onclick = function(){

    gridSize = gridSize / 2;
    console.log(gridSize)
    pixelCount.innerHTML = `${gridSize} x ${gridSize}`;
    let total = gridSize ** 2;
    boxContainer.innerHTML = ""     
    let boxCreate;

    for(i = 0; i<total ; i++){
        boxCreate = document.createElement("div")
        boxCreate.classList.add("createdBoxes");
        boxContainer.appendChild(boxCreate)
        boxContainer.style.gridTemplateColumns = `repeat(${gridSize},1fr)`
        boxContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`


       
}
if (gridSize > 2){
    document.getElementById("decreaseBtn").disabled = false;
}
else if(gridSize <= 2){
    document.getElementById("decreaseBtn").disabled = true;
}


}
