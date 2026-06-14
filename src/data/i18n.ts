export type Language = "en" | "es"

export const translations = {
  en: {
    header: {
      welcome: "Welcome to my world!",
      tabs: [
        { href: "#about", label: "jose.info" },
        { href: "#projects", label: "work.done" },
      ],
      status: "Senior Software Engineer",
      location: "Guatemala",
      myTime: "My time",
    },
    navigation: [
      { href: "#projects", label: "Work" },
      { href: "#about", label: "About me" },
      { href: "#experience", label: "Experience" },
      { href: "#tech", label: "Tech stack" },
      { href: "#awards", label: "Awards" },
      { href: "#contact", label: "Contact me" },
    ],
    profile: {
      name: "Jose Valdez",
      title: "Senior Full Stack Software Engineer",
      location: "Antigua Guatemala, Guatemala",
      email: "valdezpjose@gmail.com",
      phone: "+502 5870-5529",
      linkedin: "https://linkedin.com/in/valdezpjose",
      github: "https://github.com/JayusAsterion",
      experience: "6+ years of experience",
      languages: "Spanish, English",
      summary:
        "I design and build scalable enterprise applications using React, Angular, .NET, Node.js and cloud technologies. Focused on clean architecture, microservices, automation and high-quality software delivery.",
    },
    sidebar: {
      available: "Available",
      intro:
        "Senior Full Stack Software Engineer with 6+ years of experience building enterprise web applications using React, Angular, C#, .NET, Node.js, AWS and Azure.",
      passion:
        "Passionate about scalable systems, cloud architectures, clean code and high-quality software delivery.",
      downloadCvEnglish: "Download CV Eng",
      downloadCvSpanish: "Download CV Esp",
      scheduleCall: "Schedule a call",
    },
    hero: {
      comment: "<!-- Hero section -->",
      title: ["Senior", "Full Stack", "Engineer"],
    },
    projects: {
      comment: "<!-- Featured work -->",
      heading: "Selected builds with real demos",
      description:
        "A focused set of production-style projects with live previews, source code, and polished user flows.",
      viewDemo: "View Demo",
      github: "GitHub",
      previewUnavailable: "Preview unavailable",
      liveDemoAria: "View live demo for",
      githubAria: "View GitHub repository for",
      items: [
        {
          title: "Hand Music Controller",
          description:
            "An experimental hand-tracking music controller built with React, TypeScript, webcam-based gesture recognition, and interactive audio controls.",
          stack: ["React", "TypeScript", "Vite", "MediaPipe", "Web Audio", "Creative Coding"],
          githubUrl: "https://github.com/JayusAsterion/hand-music-controller",
          liveUrl: "https://hand-music-controller.vercel.app/",
          previewImage: "/previews/projects/hand-music-controller.png",
        },
        {
          title: "Inkside Antigua",
          description:
            "A modern landing page for a tattoo studio, focused on strong visual identity, responsive design, service presentation, artist sections, and smooth user experience.",
          stack: ["React", "TypeScript", "Vite", "Tailwind", "Responsive UI", "Landing Page"],
          githubUrl: "https://github.com/JayusAsterion/inkside-antigua",
          liveUrl: "https://inkside-antigua.vercel.app/",
          previewImage: "/previews/projects/inkside-antigua.png",
        },
        {
          title: "AI Review Copilot",
          description:
            "A local-first AI code review assistant that helps developers and QA teams generate structured code reviews, bug reports, test cases, and PR comments from diffs, files, screenshots, and notes.",
          stack: ["React", "TypeScript", "Vite", "Tailwind", "AI", "Code Review", "Developer Tools"],
          githubUrl: "https://github.com/JayusAsterion/ai-review-copilot",
          liveUrl: "https://ai-review-copilot.vercel.app/review",
          previewImage: "/previews/projects/ai-review-copilot.png",
        },
        {
          title: "Rugby Buccaneers Landing",
          description:
            "A sports landing page for a rugby team with a bold visual style, responsive sections, team branding, calls to action, and modern animations.",
          stack: ["React", "TypeScript", "Vite", "Tailwind", "Landing Page", "Sports Website"],
          githubUrl: "https://github.com/JayusAsterion/rugby-buccaneers-landing",
          liveUrl: "https://rugby-buccaneers-landing.vercel.app/",
          previewImage: "/previews/projects/rugby-buccaneers-landing.png",
        },
      ],
    },
    about: {
      since: "SINCE",
      comment: "<!-- About me section -->",
      titleStart: "Inside My",
      titleAccent: "Creative Core",
      body: [
        "I am a Senior Full Stack Software Engineer with 6+ years of experience designing, developing and deploying enterprise web applications.",
        "My experience includes frontend development with React, Angular and TypeScript, backend development with C#, .NET, Node.js and Java, SQL databases, cloud platforms such as AWS and Microsoft Azure, CI/CD pipelines, microservices and system integrations.",
        "I enjoy building scalable, maintainable and clean software solutions for real business problems.",
      ],
      collaborationStart: "I enjoy collaborating with teams, solving real-world problems, and",
      collaborationHighlight: "turning complex ideas",
      collaborationEnd: "into clean, engaging designs.",
      followMe: "Follow me:",
      downloadCv: "Download CV",
    },
    experience: {
      comment: "<!-- In a previous life -->",
      heading: "Experience that ships",
      description:
        "A practical path through enterprise products, cloud platforms, team leadership, and full stack delivery.",
      jobs: [
        {
          company: "Civix, Allied Global",
          role: "Senior Full Stack Software Engineer",
          period: "2026 - Present",
          location: "Remote",
          points: ["React", ".NET", "Azure", "CI/CD"],
        },
        {
          company: "Isolved, Allied Global",
          role: "Senior Full Stack Software Engineer",
          period: "2025 - 2026",
          location: "Guatemala City",
          points: ["C#", ".NET", "ASP.NET Web API", "Enterprise workflows"],
        },
        {
          company: "Itemize, Allied Global",
          role: "Senior Full Stack Software Engineer",
          period: "2024 - 2025",
          location: "Guatemala City",
          points: ["React", "Node.js", "AWS", "Team leadership"],
        },
        {
          company: "Infile",
          role: "Senior Full Stack Software Engineer",
          period: "2023 - 2024",
          location: "Guatemala City",
          points: ["REST APIs", "OAuth", "Microservices", "Automation"],
        },
        {
          company: "Conduent",
          role: "Full Stack Software Engineer",
          period: "2022 - 2023",
          location: "Guatemala City",
          points: ["Frontend", "Backend", "Integrations"],
        },
        {
          company: "DocuNect, Cari.Net",
          role: "Full Stack Software Engineer",
          period: "2021 - 2022",
          location: "Guatemala City",
          points: ["Documents", "APIs", "Databases"],
        },
        {
          company: "BDG",
          role: "Full Stack Software Engineer",
          period: "2020 - 2021",
          location: "Guatemala City",
          points: ["Web apps", "Maintenance", "Database updates"],
        },
      ],
    },
    techStack: {
      comment: "<!-- My tech stack -->",
      heading: "Tools I use to build and scale",
      groups: {
        backend: "Backend and systems",
        frontend: "Frontend and UI",
        cloud: "Data and cloud",
      },
    },
    awards: {
      comment: "<!-- Awards -->",
      heading: "Recognition",
      labelPrefix: "award",
      items: [
        "Third Place - XIII Inter-University Science and Technology Olympiad, 2018",
        "Second Place - Huawei Seeds for the Future Competition, 2019",
      ],
    },
    contact: {
      comment: "<!-- Contact me -->",
      title: "Let us build something reliable.",
      description:
        "I am open to software engineering opportunities, freelance consulting, technical collaborations and enterprise web application projects.",
      emailMe: "Email me",
      config: "contact.config",
      emailLabel: "email",
      phoneLabel: "phone",
      locationLabel: "location",
    },
    footer: {
      status: "Delivered 3 projects, tackled 2 challenges",
      welcome: "Welcome to my world!",
    },
  },
  es: {
    header: {
      welcome: "Bienvenido a mi mundo!",
      tabs: [
        { href: "#about", label: "jose.info" },
        { href: "#projects", label: "work.done" },
      ],
      status: "Ingeniero Senior de Software",
      location: "Guatemala",
      myTime: "Mi hora",
    },
    navigation: [
      { href: "#projects", label: "Trabajo" },
      { href: "#about", label: "Sobre mi" },
      { href: "#experience", label: "Experiencia" },
      { href: "#tech", label: "Tecnologias" },
      { href: "#awards", label: "Premios" },
      { href: "#contact", label: "Contacto" },
    ],
    profile: {
      name: "Jose Valdez",
      title: "Ingeniero Senior Full Stack",
      location: "Antigua Guatemala, Guatemala",
      email: "valdezpjose@gmail.com",
      phone: "+502 5870-5529",
      linkedin: "https://linkedin.com/in/valdezpjose",
      github: "https://github.com/JayusAsterion",
      experience: "6+ anos de experiencia",
      languages: "Espanol, Ingles",
      summary:
        "Diseno y construyo aplicaciones empresariales escalables con React, Angular, .NET, Node.js y tecnologias cloud. Enfocado en arquitectura limpia, microservicios, automatizacion y entrega de software de alta calidad.",
    },
    sidebar: {
      available: "Disponible",
      intro:
        "Ingeniero Senior Full Stack con 6+ anos de experiencia construyendo aplicaciones web empresariales con React, Angular, C#, .NET, Node.js, AWS y Azure.",
      passion:
        "Apasionado por sistemas escalables, arquitecturas cloud, codigo limpio y entrega de software de alta calidad.",
      downloadCvEnglish: "Descargar CV Ing",
      downloadCvSpanish: "Descargar CV Esp",
      scheduleCall: "Agendar llamada",
    },
    hero: {
      comment: "<!-- Seccion hero -->",
      title: ["Ingeniero", "Full Stack", "Senior"],
    },
    projects: {
      comment: "<!-- Trabajo destacado -->",
      heading: "Proyectos seleccionados con demos reales",
      description:
        "Una seleccion enfocada de proyectos estilo produccion con previews en vivo, codigo fuente y flujos pulidos.",
      viewDemo: "Ver demo",
      github: "GitHub",
      previewUnavailable: "Vista no disponible",
      liveDemoAria: "Ver demo en vivo de",
      githubAria: "Ver repositorio de GitHub de",
      items: [
        {
          title: "Hand Music Controller",
          description:
            "Un controlador musical experimental con seguimiento de manos, construido con React, TypeScript, reconocimiento de gestos por webcam y controles de audio interactivos.",
          stack: ["React", "TypeScript", "Vite", "MediaPipe", "Web Audio", "Creative Coding"],
          githubUrl: "https://github.com/JayusAsterion/hand-music-controller",
          liveUrl: "https://hand-music-controller.vercel.app/",
          previewImage: "/previews/projects/hand-music-controller.png",
        },
        {
          title: "Inkside Antigua",
          description:
            "Landing page moderna para un estudio de tatuajes, enfocada en identidad visual fuerte, diseno responsive, presentacion de servicios, secciones de artistas y una experiencia fluida.",
          stack: ["React", "TypeScript", "Vite", "Tailwind", "UI responsive", "Landing page"],
          githubUrl: "https://github.com/JayusAsterion/inkside-antigua",
          liveUrl: "https://inkside-antigua.vercel.app/",
          previewImage: "/previews/projects/inkside-antigua.png",
        },
        {
          title: "AI Review Copilot",
          description:
            "Asistente local-first de revision de codigo con IA que ayuda a desarrolladores y equipos QA a generar revisiones estructuradas, reportes de bugs, casos de prueba y comentarios de PR desde diffs, archivos, capturas y notas.",
          stack: ["React", "TypeScript", "Vite", "Tailwind", "IA", "Code Review", "Herramientas Dev"],
          githubUrl: "https://github.com/JayusAsterion/ai-review-copilot",
          liveUrl: "https://ai-review-copilot.vercel.app/review",
          previewImage: "/previews/projects/ai-review-copilot.png",
        },
        {
          title: "Rugby Buccaneers Landing",
          description:
            "Landing page deportiva para un equipo de rugby con estilo visual fuerte, secciones responsive, branding del equipo, llamados a la accion y animaciones modernas.",
          stack: ["React", "TypeScript", "Vite", "Tailwind", "Landing page", "Sitio deportivo"],
          githubUrl: "https://github.com/JayusAsterion/rugby-buccaneers-landing",
          liveUrl: "https://rugby-buccaneers-landing.vercel.app/",
          previewImage: "/previews/projects/rugby-buccaneers-landing.png",
        },
      ],
    },
    about: {
      since: "DESDE",
      comment: "<!-- Seccion sobre mi -->",
      titleStart: "Dentro De Mi",
      titleAccent: "Nucleo Creativo",
      body: [
        "Soy Ingeniero Senior Full Stack con 6+ anos de experiencia disenando, desarrollando y desplegando aplicaciones web empresariales.",
        "Mi experiencia incluye desarrollo frontend con React, Angular y TypeScript, backend con C#, .NET, Node.js y Java, bases de datos SQL, plataformas cloud como AWS y Microsoft Azure, pipelines CI/CD, microservicios e integraciones de sistemas.",
        "Disfruto construir soluciones de software escalables, mantenibles y limpias para problemas reales de negocio.",
      ],
      collaborationStart: "Disfruto colaborar con equipos, resolver problemas reales y",
      collaborationHighlight: "convertir ideas complejas",
      collaborationEnd: "en disenos limpios y atractivos.",
      followMe: "Sigueme:",
      downloadCv: "Descargar CV",
    },
    experience: {
      comment: "<!-- En una vida anterior -->",
      heading: "Experiencia que entrega resultados",
      description:
        "Un recorrido practico por productos empresariales, plataformas cloud, liderazgo tecnico y desarrollo full stack.",
      jobs: [
        {
          company: "Civix, Allied Global",
          role: "Ingeniero Senior Full Stack",
          period: "2026 - Presente",
          location: "Remoto",
          points: ["React", ".NET", "Azure", "CI/CD"],
        },
        {
          company: "Isolved, Allied Global",
          role: "Ingeniero Senior Full Stack",
          period: "2025 - 2026",
          location: "Ciudad de Guatemala",
          points: ["C#", ".NET", "ASP.NET Web API", "Flujos empresariales"],
        },
        {
          company: "Itemize, Allied Global",
          role: "Ingeniero Senior Full Stack",
          period: "2024 - 2025",
          location: "Ciudad de Guatemala",
          points: ["React", "Node.js", "AWS", "Liderazgo tecnico"],
        },
        {
          company: "Infile",
          role: "Ingeniero Senior Full Stack",
          period: "2023 - 2024",
          location: "Ciudad de Guatemala",
          points: ["REST APIs", "OAuth", "Microservicios", "Automatizacion"],
        },
        {
          company: "Conduent",
          role: "Ingeniero Full Stack",
          period: "2022 - 2023",
          location: "Ciudad de Guatemala",
          points: ["Frontend", "Backend", "Integraciones"],
        },
        {
          company: "DocuNect, Cari.Net",
          role: "Ingeniero Full Stack",
          period: "2021 - 2022",
          location: "Ciudad de Guatemala",
          points: ["Documentos", "APIs", "Bases de datos"],
        },
        {
          company: "BDG",
          role: "Ingeniero Full Stack",
          period: "2020 - 2021",
          location: "Ciudad de Guatemala",
          points: ["Web apps", "Mantenimiento", "Bases de datos"],
        },
      ],
    },
    techStack: {
      comment: "<!-- Mi stack tecnico -->",
      heading: "Herramientas para construir y escalar",
      groups: {
        backend: "Backend y sistemas",
        frontend: "Frontend e UI",
        cloud: "Datos y cloud",
      },
    },
    awards: {
      comment: "<!-- Premios -->",
      heading: "Reconocimientos",
      labelPrefix: "premio",
      items: [
        "Tercer Lugar - XIII Olimpiada Interuniversitaria de Ciencia y Tecnologia, 2018",
        "Segundo Lugar - Competencia Huawei Seeds for the Future, 2019",
      ],
    },
    contact: {
      comment: "<!-- Contacto -->",
      title: "Construyamos algo confiable.",
      description:
        "Estoy abierto a oportunidades de ingenieria de software, consultoria freelance, colaboraciones tecnicas y proyectos empresariales de aplicaciones web.",
      emailMe: "Escribeme",
      config: "contacto.config",
      emailLabel: "correo",
      phoneLabel: "telefono",
      locationLabel: "ubicacion",
    },
    footer: {
      status: "Entregue 3 proyectos, resolvi 2 desafios",
      welcome: "Bienvenido a mi mundo!",
    },
  },
} as const

export type Translation = (typeof translations)[Language]
