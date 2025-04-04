

let sixteenBtn = document.getElementById("sixteenBtn");
let boxContainer = document.getElementById("boxContainer")



sixteenBtn.onclick = function(){
    
    //when button is clicked //
    console.log("16px")

    

    //runs loop 
    for(i = 0; i<256 ; i++){

    //creates box//
    let boxCreate = document.createElement("div")
    boxCreate.style.border = "solid black 1px";
    boxCreate.classList.add("createdBoxes");
    boxContainer.appendChild(boxCreate)
    }

    //fill in on click//
    let createdBoxes = document.getElementsByClassName("createdBoxes")
    for(i = 0; i < 16 ; i++)
    createdBoxes.onclick = function(){
        console.log("hello")
    }   
    
}


