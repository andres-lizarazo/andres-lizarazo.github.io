document.addEventListener("DOMContentLoaded", () => {
    const langToggle = document.getElementById("langToggle");
    let currentLang = "es"; // Podrías intentar detectar el idioma del navegador por defecto aquí

    const translations = {
      es: {
        // Asegúrate de tener traducciones para TODOS los elementos que quieras cambiar.
        // He añadido algunos placeholders para los nuevos textos del HTML.
        mainTitle: "Hola, soy Andrés Lizarazo",
        mainSubtitle: "Analista Comercial y Científico de Datos en Mercado Libre",
        cvText: "Descargar mi CV en Español",
        cvFile: "AndresLizarazo_ResumeES.pdf",
        nav: {
          sobreMi: "Sobre mí",
          experiencia: "Experiencia",
          habilidades: "Habilidades",
          certificaciones: "Certificaciones",
          contacto: "Contacto"
        },
        sections: {
          sobreMiTitle: "Sobre mí",
          sobreMiContent: "Soy Ingeniero Industrial con especialización en Ciencia de Datos. Me apasiona trabajar con grandes volúmenes de datos, optimizar procesos, y aplicar Machine Learning para generar valor en la toma de decisiones estratégicas. Busco continuamente nuevos desafíos para expandir mis conocimientos y contribuir al éxito de proyectos innovadores.",
          experienciaTitle: "Experiencia",
          // Aquí podrías tener objetos para cada item de experiencia si el contenido cambia mucho
          experienciaMercadoLibreCargo: "Analista Comercial (Ago 2021 - Sept 2024)",
          experienciaMercadoLibreDesc1: "Gestioné grandes volúmenes de datos para el análisis de ventas y desempeño de portafolio.",
          experienciaMercadoLibreDesc2: "Aumenté las ventas en un 30% en el portafolio de autopartes mediante análisis de datos dirigido y estrategias de optimización.",
          experienciaMercadoLibreDesc3: "Lideré la incorporación y el desarrollo comercial de más de 50 tiendas oficiales en la plataforma.",
          habilidadesTitle: "Habilidades",
          certificacionesTitle: "Certificaciones",
          contactoTitle: "Contacto",
          contactoIntro: "Si tienes alguna pregunta o propuesta, no dudes en contactarme.",
          formNombrePlaceholder: "Tu nombre",
          formEmailPlaceholder: "Tu email",
          formMensajePlaceholder: "Escribe tu mensaje",
          formSubmitButton: "Enviar Mensaje"
        },
        footerText: "© 2025 Andrés Lizarazo. Todos los derechos reservados.",
        toggle: "EN"
      },
      en: {
        mainTitle: "Hello, I'm Andrés Lizarazo",
        mainSubtitle: "Commercial Analyst and Data Scientist at Mercado Libre",
        cvText: "Download my CV in English",
        cvFile: "AndresLizarazo_ResumeEN.pdf",
        nav: {
          sobreMi: "About Me",
          experiencia: "Experience",
          habilidades: "Skills",
          certificaciones: "Certifications",
          contacto: "Contact"
        },
        sections: {
          sobreMiTitle: "About Me",
          sobreMiContent: "I am an Industrial Engineer specializing in Data Science. I am passionate about working with large volumes of data, optimizing processes, and applying Machine Learning to generate value in strategic decision-making. I continuously seek new challenges to expand my knowledge and contribute to the success of innovative projects.",
          experienciaTitle: "Experience",
          experienciaMercadoLibreCargo: "Commercial Analyst (Aug 2021 - Sep 2024)",
          experienciaMercadoLibreDesc1: "Managed large volumes of data for sales analysis and portfolio performance.",
          experienciaMercadoLibreDesc2: "Increased sales by 30% in the auto parts portfolio through targeted data analysis and optimization strategies.",
          experienciaMercadoLibreDesc3: "Led the onboarding and business development of over 50 official stores on the platform.",
          habilidadesTitle: "Skills",
          certificacionesTitle: "Certifications",
          contactoTitle: "Contact",
          contactoIntro: "If you have any questions or proposals, feel free to contact me.",
          formNombrePlaceholder: "Your name",
          formEmailPlaceholder: "Your email",
          formMensajePlaceholder: "Write your message",
          formSubmitButton: "Send Message"
        },
        footerText: "© 2025 Andrés Lizarazo. All rights reserved.",
        toggle: "ES"
      }
    };

    function updateTexts(lang) {
      const t = translations[lang];
      document.documentElement.lang = lang; // Actualiza el atributo lang del HTML

      // Header
      document.getElementById("main-title").textContent = t.mainTitle;
      document.getElementById("main-subtitle").textContent = t.mainSubtitle;
      const cvLink = document.getElementById("cv-link");
      cvLink.textContent = t.cvText;
      cvLink.href = t.cvFile;

      // Navbar
      document.getElementById("nav-sobre-mi").textContent = t.nav.sobreMi;
      document.getElementById("nav-experiencia").textContent = t.nav.experiencia;
      document.getElementById("nav-habilidades").textContent = t.nav.habilidades;
      document.getElementById("nav-certificaciones").textContent = t.nav.certificaciones;
      document.getElementById("nav-contacto").textContent = t.nav.contacto;

      // Sections Titles (asumimos que los h2 dentro de cada sección NO tienen IDs específicos, sino que son los primeros h2)
      document.querySelector("#sobre-mi h2").textContent = t.sections.sobreMiTitle;
      document.querySelector("#sobre-mi .container p").textContent = t.sections.sobreMiContent; // Si quieres traducir el párrafo también

      document.querySelector("#experiencia h2").textContent = t.sections.experienciaTitle;
      // Para experiencia más detallada, necesitarías IDs o clases específicas para cada elemento
      // Ejemplo si añades un ID al cargo: document.getElementById("exp-ml-cargo").textContent = t.sections.experienciaMercadoLibreCargo;
      // Y para los list items, podrías darles IDs también. O podrías iterar sobre ellos.

      document.querySelector("#habilidades h2").textContent = t.sections.habilidadesTitle;
      document.querySelector("#certificaciones h2").textContent = t.sections.certificacionesTitle;
      
      document.querySelector("#contacto h2").textContent = t.sections.contactoTitle;
      document.querySelector("#contacto .container > p").textContent = t.sections.contactoIntro; // El párrafo antes del form
      document.querySelector("#contacto input[name='nombre']").placeholder = t.sections.formNombrePlaceholder;
      document.querySelector("#contacto input[name='email']").placeholder = t.sections.formEmailPlaceholder;
      document.querySelector("#contacto textarea[name='mensaje']").placeholder = t.sections.formMensajePlaceholder;
      document.querySelector("#contacto button[type='submit']").textContent = t.sections.formSubmitButton;
      
      // Footer
      document.querySelector("footer p").textContent = t.footerText; // Asume que es el primer <p> del footer

      // Toggle button text
      langToggle.textContent = t.toggle;
    }

    langToggle.addEventListener("click", () => {
      currentLang = currentLang === "es" ? "en" : "es";
      updateTexts(currentLang);
    });

    // Opcional: Inicializar con el idioma por defecto al cargar la página
    // updateTexts(currentLang); // Ya se cargan los textos en español por defecto desde el HTML
});