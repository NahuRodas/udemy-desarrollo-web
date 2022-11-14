'use strict';

console.clear();

//--------VARIABLES GLOBALES--------
let pantalla = document.getElementById('pantalla'),
    teclas = document.querySelectorAll('.tecla'),
    ultOperacion = "",
    resultado = 0,
    holder = 0,
    principio = true,
    calc = true;



//----------FUNCIONES----------
function limpiarPantalla() {  //Limpia la pantalla de la calculadora
    pantalla.textContent = 0;
    resultado = 0;
    calc = true;
    principio = true;
}

function keyCodeClick(e, c) {
    var entrada = e.textContent,
        code = 0;
    if(entrada == "") return;
    
    console.log(c, entrada, entrada.keyCode);
    switch (entrada) {
        case 'C' || 'c':
            code = 27;
            break;
        case '<' :
            code = 8;
            break;
        case '/' :
            code = 111;
            break;
        case 'x' :
            code = 106;
            break;
        case '+' :
            code = 107;
            break;
        case '-' :
            code = 109;
            break;
        case '=' :
            code = 13;
            break;
        case '.' :
            code = 110;
            break;
        default:
            code = entrada.charCodeAt(0);
            break;
    }
    if (isNumPad(code)) {
        var numPad = convert(code);
        if (c == numPad) {
            e.click();
            return;
        }
    }

    if (c == code) {
        e.click();
    }
    return;
}

function isNumPad(num) {
    if(num >= 48 && num <= 57) return true;
    return false;
}

function convert(num) {
    return num + 48;
}

function calculador( val ) { //Realiza las operaciones aritmeticas
    val = parseFloat(val);
    resultado = parseFloat(resultado);
    switch (ultOperacion) {
        case '+': 
            resultado += val;
            break;
        case '-': 
            resultado -= val;
            break;
        case 'x': 
            resultado *= val;
            break;
        case '/': 
            resultado /= val;
            break;

    }
}

function procesador(entrada) { //Procesa la entrada de datos
    console.log(entrada);
    var val = pantalla.textContent;


    if(entrada == '.' && val.indexOf('.') > -1) return;
    if (entrada == 'C'){
        limpiarPantalla();
    }else if(entrada == '<'){
        if (val.length > 1) {
            val = val.substring(0, val.length-1);
            pantalla.textContent = val;
        }else{
            pantalla.textContent = 0;
            principio = true;
        }
    }else{ 
        if (principio) {
            val = "";
            pantalla.textContent = val;
            principio = false;
        }
        if (entrada == '/' || entrada == 'x'|| entrada == '+' || entrada == '-' ) {
            principio = true;
        
            if (calc) {
                resultado = val;
                calc = false;
            }else{
                calculador(parseFloat(val));
                pantalla.textContent = resultado;
            }
            ultOperacion = entrada;
        }else{
            if(entrada == '='){
                calculador(val);
                pantalla.textContent = resultado;
                calc = true;
                principio = false;
            }else{
                pantalla.textContent = val + entrada;
            }      
        }
    }
}


//--------EJECUCIONES-----------

window.addEventListener('keyup', function (e) { //Keyboard event
    e.preventDefault();
    var c = e.which || e.keyCode;

    teclas.forEach( function(e) {
        keyCodeClick(e, c);
    });
    
}) 

teclas.forEach(function (e) { //Mouse event
   e.addEventListener('click', function () {
        var entrada = this.textContent;
        procesador(entrada);
   }) 
});




