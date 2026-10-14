const titulo = document.getElementById("greeting");

const btnSaludo = document.getElementById("btn-saludo");
btnSaludo.addEventListener("click", cambiarSaludo);

const btnSumar = document.getElementById("btn-sumar");
btnSumar.addEventListener("click", aumentarContador);

const btnRestar = document.getElementById("btn-restar");
btnRestar.addEventListener("click", restarContador);

const btnReiniciar = document.getElementById("btn-reiniciar");
btnReiniciar.addEventListener("click", reiniciarContador);

const btnCambiarFondo = document.getElementById("btn-cambiar-fondo");
btnCambiarFondo.addEventListener("click", cambiarFondo);

const cuenta = document.getElementById("contador");

let contador = 0;

function mostrarContador() {
  cuenta.textContent = contador;
}

function cambiarSaludo() {

if (titulo.textContent === "Hola") {

  titulo.textContent = "Chau";


}

else {titulo.textContent = "Hola";}
}

function reiniciarContador() {
    contador = 0;
    mostrarContador();
}

function restarContador() {
  if (contador > 0) {
    contador--;
    mostrarContador();
  }

}

function aumentarContador() {
  if (contador < 10) {
    contador++;
    mostrarContador();
  }

}

function cambiarFondo () {
 
  document.body.classList.toggle("fondo-marron");

}