const titulo = document.getElementById("greeting");
let cuenta = document.getElementById("contador");


function cambiargreeting() {

if (titulo.textContent === "Hola") {

  titulo.textContent = "Chau";


}

else {titulo.textContent = "Hola";}
}

function reiniciarContador() {
  cuenta.textContent = "0";
}

function restarContador() {
  let valorActual = parseInt(cuenta.textContent);
  valorActual--;
  cuenta.textContent = valorActual;

  if (valorActual < 0) {
    cuenta.textContent = "0";
  }

}

function aumentarContador() {
  let valorActual = parseInt(cuenta.textContent);
  valorActual++;
  cuenta.textContent = valorActual;

if (valorActual > 10) {
  cuenta.textContent = "10";

}

}

function cambiarFondo () {
 

  if (document.body.style.backgroundColor === "brown") {
    document.body.style.backgroundColor = "white";
  } 
  
  else {
    document.body.style.backgroundColor = "brown";
  }

}