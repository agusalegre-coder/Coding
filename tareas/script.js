let tareas = [];

const entrada = document.getElementById("input-tarea");

const botonAgregar = document.getElementById("btn-agregar");
botonAgregar.addEventListener("click", agregarTarea);

const listaTareas = document.getElementById("lista-tareas");



function agregarTarea () {

    const texto = entrada.value.trim();

    if (texto === "") { return; }

tareas.push(texto);
entrada.value = "";

mostrarTareas();

}

function mostrarTareas() {

    listaTareas.innerHTML = "";
    tareas.forEach((tarea) => {
        const li = document.createElement("li");
        li.textContent = tarea;
        listaTareas.appendChild(li);
    });
}