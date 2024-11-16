import { doctores } from './dataequipo.js';


        // Función que actualiza la lista de doctores según la especialidad seleccionada
        function mostrarDoctores(especialidad) {
            // Obtener el contenedor de la lista de doctores
            const doctorListItems = document.getElementById("doctorListItems");

            // Limpiar la lista actual
            doctorListItems.innerHTML = "";

            // Filtrar los doctores por especialidad
            const doctoresFiltrados = doctores.filter(doctor => doctor.especialidad === especialidad);

            // Comprobar si existen doctores para la especialidad seleccionada
            if (doctoresFiltrados.length > 0) {
                // Mostrar los doctores correspondientes en formato tarjeta de Bootstrap
                doctoresFiltrados.forEach(function(doctor) {
                    const card = document.createElement("div");
                    card.classList.add("col-md-4", "mb-4", "text-center", "equipo_col");  // Añadir clases de Bootstrap para el diseño en columnas

                    card.innerHTML = `
                            <img src="${doctor.imagen}" class="rounded-circle" width="100" height="100"> 
                            <h3 class="fw-normal pt-1">${doctor.nombre}</h3>
                            <h4 class="doctor_especialidad">${doctor.especialidad}</h4>
                            <p>${doctor.texto}</p>
                    `;
                    doctorListItems.appendChild(card);
                });
            } else {
                // Si no hay doctores, mostrar un mensaje
                const message = document.createElement("p");
                message.classList.add("alert", "alert-warning");
                message.textContent = "No hay doctores disponibles para esta especialidad.";
                doctorListItems.appendChild(message);
            }
        }

        // Delegación de eventos: escuchamos el clic en el contenedor de botones
        document.querySelector(".text-center").addEventListener("click", function(event) {
            // Verificar si el clic fue en un botón
            if (event.target && event.target.nodeName === "BUTTON") {
                // Obtener la especialidad desde el atributo data-specialty
                const especialidad = event.target.getAttribute("data-specialty");
                // Mostrar los doctores de la especialidad seleccionada
                mostrarDoctores(especialidad);
            }
        });