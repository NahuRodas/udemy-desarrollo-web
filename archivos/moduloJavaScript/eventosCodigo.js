//VARIABLES GLOBALES
var color = document.getElementById("boton");
var teclas = document.getElementById("teclas");
var seccion = document.getElementById("seccion");
var escuchar = document.getElementById("escuchar");
var escucharBoton = document.getElementById("click");

function cambiarColor(Evento) {
    var evento = Evento || window.event;
    var sec = document.getElementById("sec");
    if (evento.type === "click") {
        switch (sec.style.backgroundColor) {
            case "white":
                sec.style.backgroundColor = "aquamarine";
            break;
            case "aquamarine":
                sec.style.backgroundColor = "cadetblue";
                break;
            case "cadetblue":
                sec.style.backgroundColor = "white";
                break;
    
            default: sec.style.backgroundColor = "white";
                break;
        }
    }
}

//FUNCIONES
function mostrarInfo(elEvento) {
    var e = window.event || elEvento;
    var info = "Tipo del evento: " + e.type + "</br>" + "Propiedad keyCode: " + e.keyCode + "</br>" + "Caracter pulsado: " + String.fromCharCode(e.charCode) + "</br>";
    teclas.innerHTML += "<p>"+ info +"</p>-----------";
}

function mostrarInfoM(e) {
    var x = e.screenX;
    var y = e.screenY;

    seccion.innerHTML = "<p> ("+ x + "," + y + ") </p>";
}

//LLAMADO DE LAS FUNCIONES
document.onkeydown = mostrarInfo;
document.onkeypress = mostrarInfo;
document.onkeyup = mostrarInfo;

color.onclick = cambiarColor; 

document.onclick = mostrarInfoM;

escucharBoton.addEventListener('click', function (){alert("Escucho")}, false);