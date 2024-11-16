import { testimonios } from './data.js';

console.log(testimonios)

let contenido = document.getElementById("testimonios_row");

let testimoniosHtmlContent = '';

for (const {imagen, titulo, texto} of testimonios) {
testimoniosHtmlContent +=
`
<div class="col-lg-4 text-center testimonios_col">
<img src="${imagen}" class="rounded-circle" alt="imagen testimonio Mateo" width="100" height="100"> 
<h3 class="fw-normal pt-2">${titulo}</h3>
<p>${texto}</p>
</div>
`
};

contenido.innerHTML = testimoniosHtmlContent;

