// js/scripts.js

document.addEventListener("DOMContentLoaded", () => {
    const langToggleSwitch = document.getElementById("langToggleSwitch"); 
    
    if (!langToggleSwitch) {
        console.error("Interruptor de idioma 'langToggleSwitch' no encontrado.");
        return; 
    }
    
    const langOptionES = langToggleSwitch.querySelector(".lang-es");
    const langOptionEN = langToggleSwitch.querySelector(".lang-en");
    const switchHandle = langToggleSwitch.querySelector(".switch-handle");

    if (!langOptionES || !langOptionEN || !switchHandle) {
        console.error("Opciones ES/EN o el handle no encontrados dentro del interruptor.");
        return;
    }
    
    let currentLang = "es"; 

    // --- OBJETO DE TRADUCCIONES ---
    // **REVISA Y COMPLETA ESTE OBJETO CON TODAS TUS TRADUCCIONES REALES**
    const translations = {
      es: {
        // Header
        mainTitle: "Hola, soy Andrés Lizarazo",
        mainSubtitle: "Analista de Datos y Científico de Datos",
        cvText: "Descargar mi CV en Español",
        cvFile: "AndresLizarazo_ResumeES.pdf",
        // Navbar
        nav: {
          sobreMi: "Sobre mí",
          experiencia: "Experiencia",
          habilidades: "Habilidades Técnicas",
          certificaciones: "Certificaciones",
          contacto: "Contacto"
        },
        // Sección Sobre Mí
        sobreMiTitle: "Sobre mí",
        sobreMiContent: "Soy Ingeniero Industrial con especialización en Ciencia de Datos. Me apasiona trabajar con grandes volúmenes de datos, optimizar procesos, y aplicar Machine Learning para generar valor en la toma de decisiones estratégicas. Busco continuamente nuevos desafíos para expandir mis conocimientos y contribuir al éxito de proyectos innovadores.",
        // Sección Experiencia
        experienciaTitle: "Experiencia",
        expMlCompany: "Mercado Libre Colombia Ltda.",
        expMlCargo: "Analista de Datos Comerciales (Ago 2021 - Sept 2024)",
        expMlDesc1: "Gestioné grandes volúmenes de datos para el análisis de ventas y desempeño de portafolio.",
        expMlDesc2: "Aumenté las ventas en un 30% en el portafolio de autopartes mediante análisis de datos dirigido y estrategias de optimización.",
        expMlDesc3: "Lideré la incorporación y el desarrollo comercial de más de 50 tiendas oficiales en la plataforma.",
        // Sección Habilidades
        habilidadesTitle: "Habilidades Técnicas",
        // Sección Certificaciones (lista principal)
        certificacionesTitle: "Certificaciones",
        // NUEVA SECCIÓN: Portfolio Highlights
        tableauProjectsTitle: "Proyectos de Tableau",
        tableauDescription: "Personales y Profesionales (con datos modificados por seguridad del cliente).",
        viewVizzBtn: "Ver Proyectos",
        myCertificatesTitle: "Mis Certificados",
        // certificatesDescription: "Una muestra de mis logros.", // Descomenta y traduce si usas este párrafo en el HTML
        viewCertificatesBtn: "Ver Certificados",
        // Sección Contacto (Info)
        contactoTitle: "Contacto",
        contactLocationLabel: "Ubicación",
        contactLocationValue: "Bogota, Colombia",
        contactPhoneLabel: "Teléfono",
        contactPhoneValue: "+57 (321) 924-6335",
        contactEmailLabel: "Correo Electrónico",
        contactEmailValue: "anlizarazope@gmail.com",
        contactSocialLabel: "Redes Sociales",
        // Footer
        footerText: "© 2025 Andrés Lizarazo. Todos los derechos reservados."
      },
      en: {
        // Header
        mainTitle: "Hello, I'm Andrés Lizarazo",
        mainSubtitle: "Data Analyst and Data Scientist",
        cvText: "Download my CV in English",
        cvFile: "AndresLizarazo_ResumeEN.pdf",
        // Navbar
        nav: {
          sobreMi: "About Me",
          experiencia: "Experience",
          habilidades: "Technical Skills",
          certificaciones: "Certifications",
          contacto: "Contact"
        },
        // Sección Sobre Mí
        sobreMiTitle: "About Me",
        sobreMiContent: "I am an Industrial Engineer specializing in Data Science. I am passionate about working with large volumes of data, optimizing processes, and applying Machine Learning to generate value in strategic decision-making. I continuously seek new challenges to expand my knowledge and contribute to the success of innovative projects.",
        // Sección Experiencia
        experienciaTitle: "Experience",
        expMlCompany: "Mercado Libre Colombia Ltd.",
        expMlCargo: "Data Analyst - Commerce (Aug 2021 - Sep 2024)",
        expMlDesc1: "Managed large volumes of data for sales analysis and portfolio performance.",
        expMlDesc2: "Increased sales by 30% in the auto parts portfolio through targeted data analysis and optimization strategies.",
        expMlDesc3: "Led the onboarding and business development of over 50 official stores on the platform.",
        // Sección Habilidades
        habilidadesTitle: "Skills",
        // Sección Certificaciones (lista principal)
        certificacionesTitle: "Certifications",
        // NUEVA SECCIÓN: Portfolio Highlights
        tableauProjectsTitle: "Tableau Projects",
        tableauDescription: "Personal and Professional (with data changed for client's data security).",
        viewVizzBtn: "View Tableau Projects",
        myCertificatesTitle: "My Certificates",
        // certificatesDescription: "A Glimpse of My Achievements.", // Uncomment and translate if you use this paragraph
        viewCertificatesBtn: "View Certificates",
        // Sección Contacto (Info)
        contactoTitle: "Contact",
        contactLocationLabel: "Location",
        contactLocationValue: "Bogota, Colombia", // Or English equivalent if any
        contactPhoneLabel: "Phone",
        contactPhoneValue: "+57 (321) 924-6335", // Or English equivalent if any
        contactEmailLabel: "Email",
        contactEmailValue: "anlizarazope@gmail.com", // Or English equivalent if any
        contactSocialLabel: "Social",
        // Footer
        footerText: "© 2025 Andrés Lizarazo. All rights reserved."
      }
    };

    // Función auxiliar para actualizar el texto de un elemento
    function updateElementText(id, textKey, translationObj) {
        const element = document.getElementById(id);
        // Verifica si el elemento existe Y si la clave de traducción existe en el objeto de traducción actual
        if (element && translationObj && translationObj[textKey] !== undefined) {
            element.textContent = translationObj[textKey];
        } else if (element && translationObj && translationObj[textKey] === undefined) {
            // Opcional: advertencia si falta una clave de traducción específica pero el objeto de idioma existe
            // console.warn(`Clave de traducción '${textKey}' no encontrada para el idioma actual (ID: ${id})`);
        }
    }
    
    // Función auxiliar para actualizar un enlace (texto y href)
    function updateElementLink(id, textKey, hrefKey, translationObj) {
        const element = document.getElementById(id);
        if (element && translationObj) {
            if (translationObj[textKey] !== undefined) element.textContent = translationObj[textKey];
            if (translationObj[hrefKey] !== undefined) element.href = translationObj[hrefKey];
        }
    }

    // Función para posicionar el handle del interruptor de idioma
    function positionSwitchHandle() {
        if (!langOptionES || !langOptionEN || !switchHandle) return; // Seguridad adicional

        if (currentLang === "es") {
            switchHandle.style.width = `${langOptionES.offsetWidth}px`;
            switchHandle.style.transform = `translateX(0px)`;
        } else { // currentLang === "en"
            // Calcula el desplazamiento basado en la posición de la opción EN
            // El 'offsetLeft' es relativo al padre offsetParent, que debería ser .language-switch
            // Si hay paddings/márgenes complejos, esto podría necesitar ajuste.
            // Aquí asumimos que langOptionES y langOptionEN son hermanos directos.
            const offset = langOptionEN.offsetLeft - langOptionES.offsetLeft;
            switchHandle.style.width = `${langOptionEN.offsetWidth}px`;
            switchHandle.style.transform = `translateX(${offset}px)`;
        }
    }

    // Función principal para actualizar todos los textos y el interruptor
    function updateTexts(lang) {
        const t = translations[lang];
        if (!t) {
            console.error(`Traducciones no encontradas para el idioma: ${lang}`);
            return;
        }
        document.documentElement.lang = lang;

        // Header
        updateElementText("main-title", "mainTitle", t);
        updateElementText("main-subtitle", "mainSubtitle", t);
        updateElementLink("cv-link", "cvText", "cvFile", t);
        
        // Navbar
        if (t.nav) { // Asegura que el objeto t.nav exista
            updateElementText("nav-sobre-mi", "sobreMi", t.nav);
            updateElementText("nav-experiencia", "experiencia", t.nav);
            updateElementText("nav-habilidades", "habilidades", t.nav);
            updateElementText("nav-certificaciones", "certificaciones", t.nav);
            updateElementText("nav-contacto", "contacto", t.nav);
        }
        
        // Sección Sobre Mí
        updateElementText("sobre-mi-title", "sobreMiTitle", t);
        updateElementText("sobre-mi-content", "sobreMiContent", t);

        // Sección Experiencia
        updateElementText("experiencia-title", "experienciaTitle", t);
        updateElementText("exp-ml-company", "expMlCompany", t);
        updateElementText("exp-ml-cargo", "expMlCargo", t);
        updateElementText("exp-ml-desc1", "expMlDesc1", t);
        updateElementText("exp-ml-desc2", "expMlDesc2", t);
        updateElementText("exp-ml-desc3", "expMlDesc3", t);

        // Sección Habilidades
        updateElementText("habilidades-title", "habilidadesTitle", t);
        
        // Sección Certificaciones (la lista principal)
        updateElementText("certificaciones-title", "certificacionesTitle", t);

        // NUEVA SECCIÓN: Portfolio Highlights
        updateElementText("tableau-projects-title", "tableauProjectsTitle", t);
        updateElementText("tableau-description", "tableauDescription", t);
        updateElementText("view-vizz-btn", "viewVizzBtn", t); // Asume que es solo texto, si es un enlace, usa updateElementLink
        updateElementText("my-certificates-title", "myCertificatesTitle", t);
        // if (document.getElementById("certificates-description")) { // Si tienes este elemento opcional
        //    updateElementText("certificates-description", "certificatesDescription", t);
        // }
        updateElementText("view-certificates-btn", "viewCertificatesBtn", t); // Asume que es solo texto

        // Sección Contacto (Info)
        updateElementText("contacto-title", "contactoTitle", t);
        updateElementText("contact-location-label", "contactLocationLabel", t);
        updateElementText("contact-location-value", "contactLocationValue", t);
        updateElementText("contact-phone-label", "contactPhoneLabel", t);
        const phoneLink = document.getElementById("contact-phone-value");
        if (phoneLink && t.contactPhoneValue) phoneLink.textContent = t.contactPhoneValue;
        
        updateElementText("contact-email-label", "contactEmailLabel", t);
        const emailLink = document.getElementById("contact-email-value");
        if (emailLink && t.contactEmailValue) emailLink.textContent = t.contactEmailValue;

        updateElementText("contact-social-label", "contactSocialLabel", t);

        // Footer
        updateElementText("footer-text", "footerText", t);

        // Actualizar el estado visual del interruptor de idioma
        if (lang === "es") {
            langOptionES.classList.add("active");
            langOptionEN.classList.remove("active");
        } else { // lang === "en"
            langOptionEN.classList.add("active");
            langOptionES.classList.remove("active");
        }
        positionSwitchHandle(); // Reposiciona el handle después de que los textos (y por ende, anchos) puedan haber cambiado
    }

    // Event listener para el clic en el interruptor
    langToggleSwitch.addEventListener("click", () => {
        currentLang = currentLang === "es" ? "en" : "es";
        updateTexts(currentLang);
    });

    // Inicializar textos y estado del interruptor cuando el DOM y los recursos (como fuentes) estén listos.
    // Usar window.onload es más seguro para cálculos de offsetWidth/offsetLeft que dependen del renderizado completo.
    window.addEventListener('load', () => {
        updateTexts(currentLang); 
    });
});