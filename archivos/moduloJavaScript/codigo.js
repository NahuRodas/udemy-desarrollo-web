//ARRAYS
var arrayUno = [];
arrayUno[0] = "raqueta";
arrayUno[1] = "bate";

var arrayDos = [];
arrayDos[0] = "futbol";
arrayDos[1] = "tenis";
arrayDos[2] = arrayUno;

var arrayTres = [];
arrayTres[0] = "Argentina";
arrayTres[1] = "Uruguay";
arrayTres[2] = arrayDos;


document.write("<p>");
document.write(arrayTres[2]);
document.write("</p><br>");

//IF -ELSE - ELSE IF
var precio = 10;
var dinero = 55;

if (precio <= dinero) {
    document.write("<p>");
    document.write("Tienes dinero suficiente.");
    document.write("</p>");
}else{
    document.write("<p>");
    document.write("No tienes dinero suficiente.");
    document.write("</p>");
};

//TERNARIAS
/* var edad = 20;
edad >= 18 ?  alert("Es mayor de edad"): alert("Es menor de edad"); */

//SWITCH
/* var numeroUno = 10, numeroDos = 5, operacion;
operacion = prompt("Ingrese operacion a realizar").toLowerCase();

switch (operacion) {
    case "suma":alert(numeroUno + numeroDos)
    break;
    case "resta": alert(numeroUno - numeroDos)
    break;
    case "divicion": alert(numeroUno / numeroDos)
    break;
    case "multiplicacion": alert(numeroUno * numeroDos)
    break;
    default: alert("Ingrese una operacion valida.")
    break;
}; */

//WHILE - DO WHILE
/* var nombres=[],acumulador = 0, bandera = "si";


while (bandera == "si") {
    nombres[acumulador] = prompt("Ingrese un nombre.");
    acumulador++;
    bandera = prompt("Quiere ingresar otro nombre? (si/no)").toLowerCase();
};
    document.write("<p>");
    document.write(nombres);
    document.write("</p>"); */

//FOR
var array = [], cant;
cant = prompt("Ingrese el tamaño del array")

for (let i = 0; i < cant; i++) {
    array[i] = prompt("Ingrese un numero");
}
for (let j = 0; j < array.length; j++) {
    document.write("<br><p>");
    document.write(array[j]);
    document.write("</p>");
}