



document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    try {
        // Obtener valores de los campos del formulario
        const nombre = document.getElementById("name").value;
        const correo = document.getElementById("email").value;
        const telefono = document.getElementById("phone").value;

        console.log("Formulario enviado con los siguientes valores:");
        console.log("Nombre:", nombre);
        console.log("Correo:", correo);

        console.log(nombre);

        console.log(correo);

        console.log(telefono);
        
        // Debugger 
        debugger; 
        
        // Validaciones
        validarNombre(nombre);
        validarCorreo(correo);
        validarTelefono(telefono);


        
        // Si todo es válido, mostrar un mensaje de éxito
        alert("Formulario enviado correctamente.");

        // Limpiar el formulario
        document.getElementById("contactForm").reset();
        
    } catch (error) {
        // Si ocurre un error en alguna validación, lo mostramos
        alert("Error: " + error.message);
    }
});

// Nombre
function validarNombre(nombre) {
    if (!nombre || !/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre)) {
        throw new Error("El nombre no es válido. Solo se permiten letras y espacios.");
    }
}

// Correo
function validarCorreo(correo) {
    const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!correo || !regexCorreo.test(correo)) {
        throw new Error("El correo electrónico no es válido.");
    }
}

// Teléfono
function validarTelefono(telefono) {
    const regexTelefono = /^\+569\d{8}$/;
    if (!telefono || !regexTelefono.test(telefono)) {
        throw new Error("El teléfono debe comenzar con +569 y tener 8 dígitos.");
    }
}
