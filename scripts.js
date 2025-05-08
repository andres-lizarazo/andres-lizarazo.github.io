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


// script.js

document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("langToggle");
    const title = document.getElementById("intro-title");
    const text = document.getElementById("intro-text");
    const cvLink = document.getElementById("cv-link");
  
    let isSpanish = true;
  
    toggleBtn.addEventListener("click", () => {
      isSpanish = !isSpanish;
      if (isSpanish) {
        title.textContent = "Hola, soy Andrés Lizarazo";
        text.textContent = "Analista de Datos y Científico de Datos";
        cvLink.textContent = "Descargar CV (ES)";
        cvLink.href = "CV_Andres_Lizarazo_ES.pdf";
        toggleBtn.textContent = "EN";
      } else {
        title.textContent = "Hi, I'm Andrés Lizarazo";
        text.textContent = "Data Analyst and Data Scientist";
        cvLink.textContent = "Download CV (EN)";
        cvLink.href = "CV_Andres_Lizarazo_EN.pdf";
        toggleBtn.textContent = "ES";
      }
    });
  });