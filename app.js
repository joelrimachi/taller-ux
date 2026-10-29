const formulario = document.getElementById("form-nota");
const mensajeEstado = document.getElementById("mensaje-estado");
const contenedorNotas = document.getElementById("contenedor-notas");

function mostrarMensaje(texto, tipo) {
  mensajeEstado.textContent = texto;
  mensajeEstado.className = "mensaje " + tipo;
}

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
  formulario.classList.add("validado");

  if (!formulario.checkValidity()) {
    mostrarMensaje("Por favor, completa los campos requeridos.", "error");
    formulario.querySelector("input:invalid, textarea:invalid").focus();
    return;
  }

  const titulo = document.getElementById("titulo-nota").value;
  const contenido = document.getElementById("contenido-nota").value;

  const li = document.createElement("li");
  li.className = "nota-item";
  li.innerHTML = `<strong>${titulo}</strong><p>${contenido}</p>`;
  contenedorNotas.appendChild(li);

  mostrarMensaje("¡Nota agregada con éxito!", "exito");
  formulario.reset();
  formulario.classList.remove("validado");
});

formulario.addEventListener("reset", function (evento) {
  if (!confirm("¿Seguro que deseas limpiar el formulario?")) {
    evento.preventDefault();
    return;
  }
  formulario.classList.remove("validado");
  mostrarMensaje("Formulario limpio.", "info");
});



