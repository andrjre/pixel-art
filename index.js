

let sixteenBtn = document.getElementById("sixteenBtn");
let boxContainer = document.getElementById("boxContainer")



sixteenBtn.onclick = function(){
    
    //when button is clicked //
    console.log("16px")

    

    //runs loop 
    for(i = 0; i<16 ; i++){

    //creates box//
    let boxCreate = document.createElement("div")
    boxCreate.style.border = "solid black 2px";
    boxCreate.classList.add("createdBoxes");
    boxContainer.appendChild(boxCreate)
    }


    let createdBoxes = document.getElementsByClassName("createdBoxes")
    for(i = 0; i < 16 ; i++)
    createdBoxes.onclick = function(){
        console.log("hello")
    }   
    
}


sixteenBtn.onclick()
