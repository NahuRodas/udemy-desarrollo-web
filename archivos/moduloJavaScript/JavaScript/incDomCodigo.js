function makeElement( {tagName, content} ) {
    let element = document.createElement( tagName );
    if( content ) {
        element.innerHTML = content;
    }
    return element;
}

let padre = document.querySelector( '#padre' );
let listaTareas = document.querySelector( '#lista-tareas' );
let li1 = makeElement( {tagName: 'li', content: 'Lorem ipsum'} );
let spanHolaMundo = makeElement( {tagName: 'span', content: '<strong>Hola mundo</strong><br>'} );
let span2 = makeElement( {tagName: 'span', content: '<strong>Información</strong><br>'} );

console.log("test");