console.clear();
let pantalla = document.getElementById('pantalla');

function limpiarPantalla() {
    pantalla.textContent = 0;
}

document.addEventListener('click', (event) =>{
    let target = event.target;
    let numero = Number(target.textContent);
    console.log(numero+numero);
    if (target.classList.contains('tecla')) {
        switch (target.textContent) {
            case 'C':
                    limpiarPantalla();
                break;
            case '0','1','2','3','4','5','6','7','8','9':
                pantalla.textContent += target.textContent;
                break;
            default: console.log("bruh");
                break;
        }
    }
});