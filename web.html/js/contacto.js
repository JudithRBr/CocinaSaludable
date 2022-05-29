function validarSubmitEnviarContacto() {
    let validacionCorrecta = true;
    let nombre = document.getElementById("nombre-contacto-input-id");
    if (nombre.value === "") {
        nombre.classList.add("input-invalido");
        validacionCorrecta = false;
    }
    else {
        nombre.classList.remove("input-invalido");
    }

    let apellidos = document.getElementById("apellidos-contacto-input-id");
    if (apellidos.value === "") {
        apellidos.classList.add("input-invalido");
        validacionCorrecta = false;
    }
    else {
        apellidos.classList.remove("input-invalido");
    }

    let email = document.getElementById("email-contacto-input-id");
    if (email.value === "") {
        email.classList.add("input-invalido");
        validacionCorrecta = false;
    }
    else {
        email.classList.remove("input-invalido");
    }

    let descripcion = document.getElementById("descripcion-comentario-contacto-input-id");
    if (descripcion.value === "") {
        descripcion.classList.add("input-invalido");
        validacionCorrecta = false;
    }
    else {
        descripcion.classList.remove("input-invalido");
    }

    return validacionCorrecta;
}