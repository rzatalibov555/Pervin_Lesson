


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

// add - elave et
// remove - silmek