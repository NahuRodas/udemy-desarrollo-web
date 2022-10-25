console.clear();

function makeElement( {tagName, content} ) {
  let element = document.createElement( tagName );
  if( content ) {
      element.innerHTML = content;
  }
  return element;
}

function GetID() {
  let id = 0;
  return () => ++id;
}



const getID = new GetID();
const isEmpty = (str) => str.trim() === '';

let nombre = document.querySelector('#nombre'),
  apellido = document.querySelector('#apellido'),
  email = document.querySelector('#email'),
  telefono = document.querySelector('#telefono'),
  ciudad = document.querySelector('#ciudad'),
  btnAgregar = document.querySelector('#btnAgregar'),
  tablaUsuarios = document.querySelector('#tablaUsuarios tbody');
  

btnAgregar.addEventListener('click', (e)=>{
    e.preventDefault();
    let nombreVal = nombre.value,
        apellidoVal = apellido.value,
        emailVal = email.value,
        telefonoVal = telefono.value,
        ciudadVal = ciudad.value;

    if (isEmpty(nombreVal) || isEmpty(apellidoVal) || isEmpty(emailVal) || isEmpty(telefonoVal) || isEmpty(ciudadVal)) {
      alert("All fields are required.")
      return;
    }

    let fila = `<tr>
                  <td class="id">${getID()}</td>
                  <td>${nombreVal}</td>
                  <td>${apellidoVal}</td>
                  <td>${emailVal}</td>
                  <td>${telefonoVal}</td>
                  <td>${ciudadVal}</td>
                  <td><button class='btn-danger'>Delete</button></td>
                </tr>`

    tablaUsuarios.insertAdjacentHTML('beforeEnd', fila);
    nombre.value ='';
    apellido.value ='';
    email.value ='';
    telefono.value ='';
    ciudad.value ='';
});

document.addEventListener('click', (event) =>{
  let target = event.target;
  if(target.classList.contains('btn-danger')){
      target.parentElement.parentElement.remove();
  }
});