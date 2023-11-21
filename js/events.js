

function addText(){
    document.getElementById("demo").innerHTML = "Avtiv edildi!"
    console.log("Avtiv edildi!")
}

function removeText(){
    document.getElementById("demo").innerHTML = ""
    console.log("")
}


function chBgBlue(e){
    console.log(e)
    e.style.background = "transparent"
    e.style.color = "red"
}

function chBgRed(e){
    e.style.background = "red"
}


function disablePreloader(){
    document.getElementById("preloader").classList.add('no_preloader')
}