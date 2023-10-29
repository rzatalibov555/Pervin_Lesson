
// () - function
// [] - Array // Massiv
// {} - Object

function elmeddin(){    
    a = 5
    b = 10
    c = 20
    console.log(a+b+c)
}

function seyfeddin(){
    alert("Hello uwaqlar")
}

function seyfeddin2(){
    document.write("SetHub Js")

}



function demo(){
    document.getElementById("myText").innerHTML = "(+99455) 342 22 33"
    // document.getElementById("myText").style.color = "red"
}

function getText_and_writeToTag(){
    let input1 = document.getElementById("input1").value
    let select1 = document.getElementById("select1").value
    let input2 = document.getElementById("input2").value
  
    let myText = document.getElementById("myText")

    if(select1 == "+"){
        myText.innerHTML = parseInt(input1) + parseInt(input2)
    }else if(select1 == "-"){
        myText.innerHTML = parseInt(input1) - parseInt(input2)
    }else if(select1 == "*"){
        myText.innerHTML = parseInt(input1) * parseInt(input2)
    }else if(select1 == "/"){
        myText.innerHTML = parseInt(input1) / parseInt(input2)
    }else{
        myText.innerHTML = "Yalnis emeliyyat"
    }
  
}

function getCar(){
    let car = document.getElementById("demo3").value
    console.log(car)
}
