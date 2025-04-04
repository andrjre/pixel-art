

let sixteenBtn = document.getElementById("sixteenBtn");
let boxContainer = document.getElementById("boxContainer")



sixteenBtn.onclick = function(){
    
    //when button is clicked //
    console.log("16px")
    

    //runs loop 
    for(i = 0; i<4096 ; i++){

    //creates box//
    let boxCreate = document.createElement("div")
    boxCreate.classList.add("createdBoxes");
    boxContainer.appendChild(boxCreate)
    }



}

createdBoxes = document.getElementsByClassName("createdBoxes")

createdBoxes.onclick = function(){
    console.log("hello")
}




// find out how to disable the button after being pressed//


