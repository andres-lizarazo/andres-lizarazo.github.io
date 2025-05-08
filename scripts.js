document.addEventListener("DOMContentLoaded", () => {
    const langToggle = document.getElementById("langToggle");
    let currentLang = "es";
  
    const translations = {
      es: {
        title: "Hola, soy Andrés Lizarazo",
        subtitle: "Analista Comercial y Científico de Datos en Mercado Libre",
        cvText: "Descargar mi CV en Español",
        cvFile: "AndresLizarazo_ResumeES.pdf",
        nav: {
          sobreMi: "Sobre mí",
          experiencia: "Experiencia",
          habilidades: "Habilidades",
          certificaciones: "Certificaciones",
          contacto: "Contacto"
        },
        toggle: "EN"
      },
      en: {
        title: "Hello, I'm Andrés Lizarazo",
        subtitle: "Commercial Analyst and Data Scientist at Mercado Libre",
        cvText: "Download my CV in English",
        cvFile: "AndresLizarazo_ResumeEN.pdf",
        nav: {
          sobreMi: "About Me",
          experiencia: "Experience",
          habilidades: "Skills",
          certificaciones: "Certifications",
          contacto: "Contact"
        },
        toggle: "ES"
      }
    };
  
    langToggle.addEventListener("click", () => {
      currentLang = currentLang === "es" ? "en" : "es";
      const t = translations[currentLang];
  
      // Cambiar contenido principal
      document.getElementById("main-title").textContent = t.title;
      document.getElementById("main-subtitle").textContent = t.subtitle;
      const cvLink = document.getElementById("cv-link");
      cvLink.textContent = t.cvText;
      cvLink.href = t.cvFile;
  
      // Cambiar enlaces del navbar
      document.getElementById("nav-sobre-mi").textContent = t.nav.sobreMi;
      document.getElementById("nav-experiencia").textContent = t.nav.experiencia;
      document.getElementById("nav-habilidades").textContent = t.nav.habilidades;
      document.getElementById("nav-certificaciones").textContent = t.nav.certificaciones;
      document.getElementById("nav-contacto").textContent = t.nav.contacto;
  
      // Cambiar texto del botón
      langToggle.textContent = t.toggle;
    });
  });
  