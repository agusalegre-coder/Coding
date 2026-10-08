
const titulo = document.getElementById("greeting");
let cuenta = document.getElementById("contador");

function cambiargreeting() {

if (titulo.textContent === "Hola") {

  titulo.textContent = "Chau";


}

else {titulo.textContent = "Hola";}
}

function aumentarContador() {
  let valorActual = parseInt(cuenta.textContent);
  valorActual++;
  cuenta.textContent = valorActual;
}