
function sayMyName(event) {
    let nombre = event.target.value;
    let etiquetaNombre = document.querySelector('#saludo');
    if(nombre !== "") {
        etiquetaNombre.innerHTML = nombre;
    } else {
        etiquetaNombre.innerHTML = "Extraño!!";
    }
    
}

function testScope() {
    console.log(nombre);
}