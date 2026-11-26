let tareas = [];

const entrada = document.getElementById("input-tarea");

const botonAgregar = document.getElementById("btn-agregar");
botonAgregar.addEventListener("click", agregarTarea);

const listaTareas = document.getElementById("lista-tareas");

const botonBorrar = document.getElementById("btn-borrar");
botonBorrar.addEventListener("click", borrarHechas);

const btnBorrar = document.createElement("button");
btnBorrar.textContent = "Borrar";
btnBorrar.addEventListener("click", () => {
    tareas = tareas.filter((t) => t !== tarea);
    mostrarTareas();
});
li.appendChild(btnBorrar);


function agregarTarea () {

    const texto = entrada.value.trim();

    if (texto === "") { return; }

tareas.push({texto: texto, hecha: false});
entrada.value = "";

mostrarTareas();

}

function mostrarTareas() {

    listaTareas.innerHTML = "";
    tareas.forEach((tarea) => {
        const li = document.createElement("li");
        li.textContent = tarea.texto;
    if (tarea.hecha) {
            li.classList.add("hecha");
        }

    li.addEventListener("click", () => {
    tarea.hecha = !tarea.hecha;
    mostrarTareas();
});

    listaTareas.appendChild(li);
    });
}

function borrarHechas() {
    tareas = tareas.filter((tarea) => !tarea.hecha);
    mostrarTareas();
}




