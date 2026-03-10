
let servicios = 0;

function modoOscuro(){

document.body.classList.toggle("dark-mode");

}


function agregarLista(servicio){

servicios++;

document.getElementById("contadorLista").innerText = servicios;

alert(servicio + " agregado a la lista");

}


function enviarFormulario(){

let nombre = document.getElementById("nombre").value;
let apellido = document.getElementById("apellido").value;
let correo = document.getElementById("correo").value;
let conCorreo = document.getElementById("con_correo").value;
let telefono = document.getElementById("telefono").value;

let regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]{3,}$/;
let regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let regexTelefono = /^[0-9]{7,10}$/;

if(!regexNombre.test(nombre)){

alert("Nombre inválido");
return;

}

if(!regexNombre.test(apellido)){

alert("Apellido inválido");
return;

}

if(!regexCorreo.test(correo)){

alert("Correo inválido");
return;

}

if(correo !== conCorreo){

alert("Los correos no coinciden");
return;

}

if(!regexTelefono.test(telefono)){

alert("Teléfono inválido");
return;

}

alert("Formulario enviado correctamente");

}