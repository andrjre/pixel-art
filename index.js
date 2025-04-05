

let increaseBtn = document.getElementById("increaseBtn");
let boxContainer = document.getElementById("boxContainer");
let pixelCount = document.getElementById("pixelCount")
let gridSize = 1;



increaseBtn.onclick = function(){
    
    //when button is clicked //

    console.log(gridSize)
    gridSize = gridSize * 2;
    pixelCount.innerHTML = `${gridSize} x ${gridSize}`;
    let total = gridSize ** 2;
    boxContainer.innerHTML = "" // sets the boxcontainer to 0 every click, resetting the boxes//

    //runs loop 
    for(i = 0; i<total ; i++){

    //creates box//

    let boxCreate = document.createElement("div")
    boxCreate.classList.add("createdBoxes");
    boxContainer.appendChild(boxCreate)
    boxContainer.style.gridTemplateColumns = `repeat(${gridSize},1fr)`
    boxContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`
    }

}

createdBoxes = document.getElementsByClassName("createdBoxes")

createdBoxes.onclick = function(){
    console.log("hello")
}




// find out how to disable the button after being pressed//


