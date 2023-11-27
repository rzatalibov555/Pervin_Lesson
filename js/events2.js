

// function changeCar(){

//     let select_value = document.getElementById("selectCar").value
    
//     document.getElementById('car').src = "img/"+select_value

// }

// function start(){

//     let myInput = document.getElementById("inp").value
    
//     console.log(myInput)
// }




var sol = 0
var yuxari = 0


onkeyup = function(e){
    let myInput = document.getElementById("in")
    myInput.style.background = "blue"
    myInput.style.color = "white"
}

onkeydown = function(e){
    
    let kv = document.getElementById("kv")
    let myInput = document.getElementById("in")

    myInput.style.background = "red"

    if(e.key == "ArrowRight"){
        sol += 50
        kv.style.left = sol+"px"
        kv.style.transform = "rotateY(0deg)"
    }

    if(e.key == "ArrowLeft"){
        sol -= 50
        kv.style.left = sol+"px"
        kv.style.transform = "rotateY(180deg)"
    }

    if(e.key == "ArrowUp"){
        yuxari -= 50
        kv.style.top = yuxari+"px"
    }

    if(e.key == "ArrowDown"){
        yuxari += 50
        kv.style.top = yuxari+"px"
    }

    if(e.code == "Space"){
        window.location.href = "https://www.youtube.com/watch?v=qqHDG77M2JM&list=PLVgxKGwhK1LMeZsrvC53bWlQmzKRkFHFj&index=27";
    }

    if(e.key == "b"){
        document.querySelector("#kv img").src = "https://i.pinimg.com/originals/51/42/03/514203610e1f3b0af408e9855933f931.gif"
    }
    

}


