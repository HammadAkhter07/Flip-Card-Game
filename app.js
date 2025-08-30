let img1 = document.getElementById("img1")
let img2 = document.getElementById("img2")
let img3 = document.getElementById("img3")
let message = document.getElementById("message")

let jokerCard = "./assets/joker.jpg"
let kingCard = "./assets/kiggooo.webp"
let backSide = "./assets/back side.jpg"
let isFlip = false


function fliped(userNumber){
    let random = Math.ceil(Math.random()* 3)

    console.log(random);
    if(!isFlip){

        if(random === 1 ){
            img1.src = kingCard
            img2.src = jokerCard
            img3.src = jokerCard
        
        }else if(random === 2) {
            img1.src = jokerCard
            img2.src = kingCard
            img3.src = jokerCard
            
        }else if(random === 3) {
            img1.src = jokerCard
            img2.src = jokerCard
            img3.src = kingCard
            
        }
         if(userNumber === random){
        message.innerHTML = "You Won!"
        message.style.color= "green"
        message.style.fontSize = "32px"
    }else{
        message.innerHTML = "You loss!"
        message.style.color= "red"
        message.style.fontSize = "32px"
    }
    }

isFlip = true

   



}

function reset(){
    if(isFlip){
        img1.src = backSide
        img2.src = backSide
        img3.src = backSide
        isFlip = false
        message.innerHTML = ""
    }
}