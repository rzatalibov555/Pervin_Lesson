


function blue(e, color, name){
    e.style.backgroundColor = color;
    e.innerHTML = name
    e.classList.add("kvadrat","disFlex")

}

function student(name, surname, age){
    console.log(`Menim adim ${name} soyadim ${surname} ve yaşim ${age}`);
}

function goBack(e,defaultColor){
    e.style.backgroundColor = defaultColor
    e.classList.remove("kvadrat","disFlex")
}

// add    - elave et
// remove - silmek
// toggle - 1 defe elave edir 1 defe silir 

// 

// function actionDemo(e){
//     e.classList.toggle("second")
//     e.classList.toggle("disFlex")
    
   
    
   

//     if(text == "open"){
//         e.innerHTML = text
//         text = "close"
//     }else{
//         e.innerHTML = text
//         text = "open"
//     }

    
// }


let text = "open"

function chatboxActivate(){
    document.getElementById('chat').classList.toggle("open")
    document.getElementsByClassName('activate')[0].classList.toggle("bgGreen")

    if(text == "open"){
        document.getElementsByClassName('activate')[0].innerHTML = text
        text = "close"
    }else{
        document.getElementsByClassName('activate')[0].innerHTML = text
        text = "open"
    }
}