//Funcion para crear elementos
function makeElement(tagName, content) {
    let element = document.createElement(tagName);
    if (content) {
        element.innerHTML = content;
    }
    return element;
};



let comentario = document.createComment('Hola');
document.body.prepend(comentario);
let h1 = document.createElement('h1');
h1.textContent = "Titulo";
document.body.prepend(h1)
console.log("El H1 esta en el documento: " + h1.isConnected);

let p = document.createElement('p');
let texto = document.createTextNode("Esto es un texto");
document.body.prepend(p);
p.prepend(texto);

let ul = document.querySelector('#tareas');
let ulClonado = ul.cloneNode(true);
ulClonado.id = "tareas-duplicado";
document.body.prepend(ulClonado);

let navegadores = [
    'Chrome',
    'FireFox',
    'Edge',
    'Opera',
    'Safari'
];

let listaNavegadores = document.querySelector('#navegadores');
let docFragment = document.createDocumentFragment(); // O new documentFragment();

navegadores.forEach(navegador => {
    let li = makeElement('li', navegador);
    docFragment.append(li);
});
listaNavegadores.append(docFragment);