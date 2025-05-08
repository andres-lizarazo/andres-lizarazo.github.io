// script.js

// Obtener el botón por su ID
const changeColorBtn = document.getElementById('changeColorBtn');

// Función para cambiar el color de fondo de la página
function changeBackgroundColor() {
    // Generar un color aleatorio
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    // Cambiar el fondo de la página
    document.body.style.backgroundColor = randomColor;
}

// Asignar la función al evento click del botón
changeColorBtn.addEventListener('click', changeBackgroundColor);
