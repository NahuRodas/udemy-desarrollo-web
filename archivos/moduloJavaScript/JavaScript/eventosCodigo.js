//VARIABLES GLOBALES
var color = document.getElementById("boton");
var teclas = document.getElementById("teclas");
var seccion = document.getElementById("seccion");
var escuchar = document.getElementById("escuchar");
var escucharBoton = document.getElementById("click");
var abrirVentana = document.getElementById("abrirVentana");
var cerrarVentana = document.getElementById("cerrarVentana");
var mensaje = document.getElementById("mensaje");

let paises = {"argentina":["Buenos Aires","Rosario","Mar del Plata", "Cosquin"],"espana":["Barcelona", "Madrir", "Valencia"]};
let selectPaises = document.getElementById("paises");
let selectCiudades = document.getElementById("ciudades");   
let outSel = document.getElementById("outSel");

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

function makeOptions(values) {
    let opts = '<option value="">---Seleccione una ciudad---</option>';
    values.forEach(value => {
        opts += `<option value="${value}">${value}</option>`;
    });
    return opts;
}


//LLAMADO DE LAS FUNCIONES
document.onkeydown = mostrarInfo;
document.onkeypress = mostrarInfo;
document.onkeyup = mostrarInfo;

color.onclick = cambiarColor; 

document.onclick = mostrarInfoM;

escucharBoton.addEventListener('click', function (){alert("Escucho")}, false);

abrirVentana.addEventListener('click', function(){mensaje.showModal()});
cerrarVentana.addEventListener('click', function(){mensaje.close()});

selectPaises.addEventListener('change', function () {
    if (this.value !== ""){
        let opts = makeOptions(paises[this.value]);

        selectCiudades.innerHTML = opts;
   } 
});

selectCiudades.addEventListener('change', function(){
    if(this.value !== ""){
        outSel.innerHTML = `Pais: ${selectPaises.options[selectPaises.selectedIndex].text} <br> Ciudad: ${this.value}`;
    };
});

