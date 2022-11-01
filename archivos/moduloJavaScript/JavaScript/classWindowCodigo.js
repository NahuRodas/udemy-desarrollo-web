function write(arg) {
    document.write(arg + "<br>");
}

let botonAbrir = document.getElementById('botonAbrir');
let botonCerrar = document.getElementById('botonCerrar');
let botonTamanio = document.getElementById('botonTamanio');
let botonMover = document.getElementById('botonMover');
let botonEjecutar = document.getElementById('botonEjecutar');
let botonDetener = document.getElementById('botonDetener');

var c = confirm("¿Aceptar terminos?");
let ventana, t;

if (c) {
    write("Terminos aceptados.");
}else{
    write("Terminos no aceptados.");
} 

function alerta() {
    alert("Hola");
}

function ejecuta() {
    t = setTimeout(alerta, 3000);
}

function detener() {
    clearTimeout(t);
}

botonEjecutar.addEventListener('click', ejecuta);
botonDetener.addEventListener('click', detener);

botonAbrir.addEventListener('click', ()=>{
   ventana = open("", "Ventana Nueva", "width = 200px, height = 200px");
   ventana.document.write("<h1>Ventana nueva</h1>");
});

botonCerrar.addEventListener('click', ()=>{
   ventana.close();
});

botonTamanio.addEventListener('click', ()=>{
   ventana.resizeBy(100,100);
   ventana.focus();
});
botonMover.addEventListener('click', ()=>{
    let x = Math.floor(Math.random() * 1980);
    let y = Math.floor(Math.random() * 1024);
   ventana.moveTo(x,y);
   ventana.focus();
});

