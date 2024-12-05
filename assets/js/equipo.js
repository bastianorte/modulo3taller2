import { doctores } from './dataequipo.js';

        function mostrarDoctores(especialidad) {
            const doctorListItems = document.getElementById("doctorListItems");

            doctorListItems.innerHTML = "";

            // Filtrar los doctores por especialidad
            const doctoresFiltrados = doctores.filter(doctor => doctor.especialidad === especialidad);

            if (doctoresFiltrados.length > 0) {

                doctoresFiltrados.forEach(function(doctor) {
                    const card = document.createElement("div");
                    card.classList.add("col-md-4", "mb-4", "text-center", "equipo_col");  
                    card.innerHTML = `
                            <img src="${doctor.imagen}" class="rounded-circle" width="100" height="100"> 
                            <h3 class="fw-normal pt-1">${doctor.nombre}</h3>
                            <h4 class="doctor_especialidad">${doctor.especialidad}</h4>
                            <p>${doctor.texto}</p>
                    `;
                    doctorListItems.appendChild(card);
                });
            } else {
                const message = document.createElement("p");
                message.classList.add("alert", "alert-warning");
                message.textContent = "No hay doctores disponibles para esta especialidad.";
                doctorListItems.appendChild(message);
            }
        }

        document.querySelector(".text-center").addEventListener("click", function(event) {
            if (event.target && event.target.nodeName === "BUTTON") {
                const especialidad = event.target.getAttribute("data-specialty");
                mostrarDoctores(especialidad);
            }
        });