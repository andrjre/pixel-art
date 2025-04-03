
let div2 = document.createElement("div")

let div = document.getElementById("box");
div.style.width = "50px";
div.style.height = "50px";
div.style.background = "white";
div.style.border = "2px solid black";

let sixteen = document.getElementById("sixteen");

sixteen.onclick = function(){
    console.log("16px")
    let boxCreate = document.createElement("div")
    boxCreate.style.background = "red";
    boxCreate.style.width = "20px";
    boxCreate.style.height = "20px";
    document.body.appendChild(boxCreate)
}


for(i = 1; i <100 ; i++){
    
}