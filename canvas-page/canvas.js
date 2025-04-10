

let boxContainer = document.getElementById("boxContainer");
let pixelCount = document.getElementById("pixelCount")
let gridSize = 2;
let total = 2 ;

let newGrid = localStorage.getItem("gridSize");
console.log(localStorage)
console.log(newGrid)

    for(i = 0; i<total ; i++){
        boxCreate = document.createElement("div")
        boxCreate.classList.add("createdBoxes");
        boxContainer.appendChild(boxCreate)
        boxContainer.style.gridTemplateColumns = `repeat(${newGrid},1fr)`
        boxContainer.style.gridTemplateRows = `repeat(${newGrid}, 1fr)`
        total = newGrid * newGrid;

        if(newGrid >= 64){
                boxCreate.style.border = "1px solid rgba(0, 0, 0, .25)"   
            }
            else if(newGrid >= 32){
                boxCreate.style.border = "1px solid rgba(0, 0, 0, .5)"   
            }
    }
      
   
    let clickBoxes = document.getElementsByClassName("createdBoxes");
    let redBucket = document.getElementById("redBucket")
    let blueBucket = document.getElementById("blueBucket")
    let greenBucket = document.getElementById("greenBucket")
    let yellowBucket = document.getElementById("yellowBucket")
    let clear = document.getElementById("clear")
    let color = "black";
    
    blackBucket.onclick = function(){
        color = "black";
        }
    redBucket.onclick = function(){
        color = "red";
        }
    blueBucket.onclick = function(){
            color = "blue";
        }
    greenBucket.onclick = function(){
            color = "green";
        } 
    yellowBucket.onclick = function(){
            color = "yellow";
        }  

        for (let i = 0; i < clickBoxes.length; i++) {
    

            clickBoxes[i].onclick = function() {
                clickBoxes[i].style.background = color;
            }
    
            clickBoxes[i].oncontextmenu = function(click){
                    click.preventDefault();
                    clickBoxes[i].style.background = ""
            }
    
        }

        clear.onclick = function(){
            console.log("clear")
              
            for(i = 0 ; i < clickBoxes.length ; i++){
                clickBoxes[i].style.background = ""
                clickBoxes[i].style.transition = "none"
            }
              
        }  


       




  


// when go button is pressed
// remove all other features
// implement new features like rubber 

















// 06/04, I think i couldve made this code so much better if i first made the grid and then made functions that adapt the grid, instead of each function making a new grid everytime?