# Evaluacion Modulo3 taller2

## 📖 Descripción
En este taller, los estudiantes deben continuar incorporando funcionalidades de JavaScript
básico en el proyecto del hospital. Además de manipular el DOM, validar datos, y manejar
errores, se pedirá la entrada de información del usuario a través de un prompt, mostrando los
resultados por consola o como alertas en el navegador.


## 👁️ Acceso al proyecto
  Para visualizar el archivo HTML y poder modificar el archivo SASS

  Si tienes Git instalado en tu máquina, puedes clonar el repositorio usando el siguiente comando en tu terminal o línea de comandos:

  ```
  git clone https://github.com/bastianorte/modulo3taller2.git
  ```

  #### Para poder ver la Web de forma correcta debes generar un servidor con "Live Server" de Visual Studio Code o similar
  
  Para modificar los archivos SASS, abre la carpeta descargada en Visual Studio Code

  Utiliza la extension "Live SASS Compiler" para modificar los archivos SCSS

## 📁 Proyecto 
```
├── assets      
│   ├── scss (Organización SASS 7-1.)
│   │     ├── abstracts
│   │     │     ├── _mixins.scss
│   │     │     └── _variables.scss
│   │     ├── component
│   │     │     ├── _buttons.scss
│   │     │     ├── _cart.scss
│   │     │     └── _slider.scss
│   │     ├── core
│   │     │     ├── _reset.scss
│   │     │     └── _typography.scss
│   │     ├── layout
│   │     │     ├── _banner.scss
│   │     │     ├── _footer.scss
│   │     │     └── _header.scss
│   │     ├── pages
│   │     │     ├── _contacto.scss
│   │     │     ├── _equipo.scss
│   │     │     └── _home.scss
│   │     ├── themes
│   │     │     └── _dark.scss
│   │     ├── vendors
│   │     │     └── carpeta bootstrap
│   │     └── styles.scss
│   ├── css
│   │     ├── styles.css
│   │     └── styles.css.map
│   ├── images
│   │     └── ..images.jpg
│   └──  js    
│         ├── banner.js
│         ├── contacto.js
│         ├── data.js
│         ├── daaequipo.js
│         ├── equipo.js
│         └── main.js       
│
├── contacto.html  
├── equipo.html 
├── index.html 
├── readme.md                  
```

## Cómo funciona el event loop (stack, heap, queue)

Las operaciones comunes incluyen insertar, eliminar, y recorrer los nodos de la lista.

### Stack

<picture>
  <img src="https://github.com/bastianorte/modulo3taller2/blob/main/assets/images/stack.webp">
</picture>

Una pila (stack) es una estructura de datos donde el último elemento en entrar es el primero en
salir (LIFO - Last In, First Out).

### Queue

Una cola (queue) es una estructura de datos donde el primer elemento en entrar es el primero
en salir (FIFO - First In, First Out). 

<picture>
  <img src="https://github.com/bastianorte/modulo3taller2/blob/main/assets/images/queue.webp">
</picture>

### Heap

Heap es una estructura de datos donde los elementos se almacenan y eliminan en cualquier orden.

<picture>
  <img src="https://github.com/bastianorte/modulo3taller2/blob/main/assets/images/heap.webp">
</picture>



### Integración de prompts
Integración de los prompts en un botón en la barra de navegación, además de la validación de los datos de teléfono y correo mediante expresiones regulares (regex).

```
banner.js
function solicitarDatos() {
    let nombre = prompt("Por favor, ingresa tu nombre:", "");
    if (nombre === null || nombre.trim() === "") {
        alert("El nombre es obligatorio.");
        return; 
    }
    console.log(nombre)
    let correo = prompt("Por favor, ingresa tu correo electrónico:", "");
    if (correo === null || correo.trim() === "" || !validarCorreo(correo)) {
        alert("Correo inválido o vacío.");
        return;
    }
    console.log(correo)
    let telefono = prompt("Por favor, ingresa tu número de teléfono (con formato +569):", "+569");
    if (telefono === null || telefono.trim() === "" || !validarTelefono(telefono)) {
        alert("Teléfono inválido o vacío.");
        return;
    }
    console.log(telefono)

    // Si todo está bien, mostrar alerta
    alert(`Formulario enviado correctamente tu nombre es ${nombre} tu correo es ${correo} y tu telefono es ${telefono}`);
}
```

### Debugger
Se aplicó un debugger en el formulario de contacto, para verificar en la consola si los campos se están leyendo correctamente antes de realizar las validaciones.

### try/catch
Se implementó un try/catch en el formulario de contacto para gestionar y validar los errores en las validaciones de los campos.

´´´
contacto.js

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

´´´

## 🔧 Tecnologías utilizadas
* Bootstrap
* BoxIcons
* GoogleFonts
* Sass


## :pencil2: Autor
Bastian Ortega Fuenzalida