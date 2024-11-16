function solicitarDatos() {
    // Solicitar Nombre
    let nombre = prompt("Por favor, ingresa tu nombre:", "");
    if (nombre === null || nombre.trim() === "") {
        alert("El nombre es obligatorio.");
        return; // Si no se ingresa nombre, salir de la función
    }
    console.log(nombre)
    // Solicitar Correo Electrónico
    let correo = prompt("Por favor, ingresa tu correo electrónico:", "");
    if (correo === null || correo.trim() === "" || !validarCorreo(correo)) {
        alert("Correo inválido o vacío.");
        return;
    }
    console.log(correo)
    // Solicitar Teléfono
    let telefono = prompt("Por favor, ingresa tu número de teléfono (con formato +569):", "+569");
    if (telefono === null || telefono.trim() === "" || !validarTelefono(telefono)) {
        alert("Teléfono inválido o vacío.");
        return;
    }
    console.log(telefono)

    // Si todo está bien, mostrar mensaje de éxito
    alert(`Formulario enviado correctamente tu nombre es ${nombre} tu correo es ${correo} y tu telefono es ${telefono}`);
}

// Función para validar correo electrónico
function validarCorreo(correo) {
    const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA0-9.-]+\.[a-zA-Z]{2,}$/;
    return regexCorreo.test(correo);
}

// Función para validar teléfono (Debe empezar con +569 y tener 8 dígitos)
function validarTelefono(telefono) {
    const regexTelefono = /^\+569\d{8}$/;
    return regexTelefono.test(telefono);
}