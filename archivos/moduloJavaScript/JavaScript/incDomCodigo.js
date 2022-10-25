function makeElement( {tagName, content} ) {
    let element = document.createElement( tagName );
    if( content ) {
        element.innerHTML = content;
    }
    return element;
}

let padre = document.querySelector( '#padre' );
let tex1 = document.querySelector('#tex1');
let tex2 = document.querySelector('#tex2');
let li1 = makeElement( {tagName: 'li', content: 'Lorem ipsum'} );
let spanHolaMundo = makeElement( {tagName: 'span', content: '<strong>Hola mundo</strong><br>'} );
let span2 = makeElement( {tagName: 'span', content: '<strong>Información</strong><br>'} );

padre.insertBefore(spanHolaMundo, tex2);
padre.removeChild(tex1);


//EJERCICIO AGREGAR TAREA A LISTA
let listaTareas = document.querySelector( '#lista-tareas' );
let campoTarea = document.querySelector('#campoTarea');
let agregaTarea = document.querySelector('#agregarTarea');

function verificar(tarea) {
    return tarea.trim() === '';
}

const fnAgregarTarea = (event) => {
    event.preventDefault();
    if (! verificar(campoTarea.value)){
        let li = makeElement({
            tagName: 'li',
            content: `${campoTarea.value} <button class='removerTarea'>x</button>`
        });
        listaTareas.append(li);
        campoTarea.value = "";
        campoTarea.focus();
    }
}

agregaTarea.addEventListener('click', fnAgregarTarea);

document.addEventListener('click', (event) =>{
    let target = event.target;
    if(target.classList.contains('removerTarea')){
        target.parentElement.remove();
    }
});

campoTarea.addEventListener('keyup', (evento) =>{
    if (evento.keyCode === 13) {
        fnAgregarTarea(evento);
    }
});

let beforeBegin = makeElement({
    tagName: 'h3',
    content: 'beforeBegin'
});
let afterBegin = makeElement({
    tagName: 'h3',
    content: 'afterBegin'
});
let beforeEnd = makeElement({
    tagName: 'h3',
    content: 'beforeEnd'
});
let afterEnd = makeElement({
    tagName: 'h3',
    content: 'afterEnd'
});

padre.insertAdjacentElement('beforeBegin',beforeBegin);
padre.insertAdjacentElement('afterBegin',afterBegin);
padre.insertAdjacentElement('beforeEnd',beforeEnd);
padre.insertAdjacentElement('afterEnd',afterEnd);

padre.insertAdjacentHTML('beforeBegin', "<h1>insertAdjacentHTML</h1>")
padre.insertAdjacentText('beforeBegin', "<h1>insertAdjacentText</h1>")