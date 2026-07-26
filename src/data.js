
export const content = {
  es: {
    nav: {
      about: "Sobre mí",
      experience: "Experiencia",
      education: "Educación",
      projects: "Proyectos",
      certifications: "Certificaciones",
      testimonials: "Testimonios",
      skills: "Habilidades",
      blog: "Artículos",
      github: "GitHub",
      contact: "Contacto"
    },
    profile: {
      name: "Guillermo Fernando Farfan Romero",
      role: "Backend Engineer & Cloud Solutions Architect | Python · Java · GCP · Terraform",
      typingRoles: [
        "Python Backend Engineer",
        "Cloud Solutions Architect",
        "FinOps Specialist",
        "DevOps Engineer",
        "DBA Senior"
      ],
      avatarUrl: "https://github.com/Fernandofarfan.png",
      githubUsername: "Fernandofarfan",
      description: "Python Backend Engineer & Cloud Architect transformando infraestructuras complejas y construyendo plataformas de alta escalabilidad. Combino una sólida formación en Sistemas de Información (UTN) con Relaciones Laborales (UBA), alineando tecnología de vanguardia con los objetivos del negocio.",
      email: "fernando.farfan16@gmail.com",
      location: "Buenos Aires, Argentina",
      status: "Disponible para trabajar",
      downloadCvEs: "Descargar CV (ES)",
      downloadCvEn: "Download CV (EN)",
      yearsExp: "+8",
      certCount: "24+",
      social: {
        github: "https://github.com/Fernandofarfan",
        linkedin: "https://www.linkedin.com/in/guillermo-farfan",
        instagram: "https://www.instagram.com/fernando.farfan07/",
        credly: "https://www.credly.com/users/fernando-farfan.855a5067/badges#credly"
      },
      cvLinkEs: "/CV/Guillermo_Farfan_CV.pdf",
      cvLinkEn: "/CV/Guillermo_Farfan_CV_EN.pdf"
    },
    about: [
      "Soy <strong>Guillermo Fernando Farfan Romero</strong>, Python Backend Engineer & Cloud Solutions Architect con <strong>más de 8 años de experiencia</strong> en la industria tecnológica. Actualmente curso la <strong>Tecnicatura Universitaria en Sistemas de Información</strong> en la Universidad Tecnológica Nacional (UTN) y soy Licenciado en Relaciones Laborales por la Universidad de Buenos Aires (UBA).",
      "Mi especialización abarca <strong>migraciones cloud corporativas a GCP</strong> (lift-and-shift con M4CE, Terraform, GKE), diseño de <strong>APIs REST/GraphQL de alta concurrencia</strong> con Python (FastAPI, Django) y Java (Spring Boot), y <strong>observabilidad avanzada con IBM Instana APM</strong>. He liderado proyectos para Grupo Ramos, Junta de Beneficencia de Guayaquil, Ecovalores/Matriz OMS y Ganfeng Lithium.",
      "Cuento con más de <strong>24 certificaciones profesionales</strong> emitidas por IBM, Meta, Google y Microsoft, y participación activa como desarrollador backend en hackathons desde 2022 (Aleph, Avalanche LatAm, PunaTech, NASA Space Apps Challenge). Busco desafíos donde pueda aplicar mi experiencia en <strong>backend engineering, cloud architecture y DevOps</strong> para construir soluciones que generen impacto real."
    ],
    experience: [
      {
        role: "Líder Técnico & Desarrollador Full Stack",
        company: "Reforest Latam",
        period: "Mayo 2026 - Actualidad",
        description: "Lidero la arquitectura de software, automatización de procesos financieros y modernización de plataformas. Diseñé un bot transaccional en Telegram con Python y Máquinas de Estados Finitos (FSM) para clasificación contable en tiempo real. Dirigí el despliegue del ERP central en Linux VPS con Docker y orquesté pipelines de conciliación bancaria multimoneda (ARS/USD) con n8n, Baserow y Python.",
        tags: ["Python", "FSM", "Telegram Bot", "Docker", "n8n", "Baserow", "ERP", "Linux VPS"]
      },
      {
        role: "Python, Java & Cloud Solutions Engineer",
        company: "Consultoría Independiente (NDA)",
        period: "Noviembre 2021 - Actualidad",
        description: "Consultoría técnica y arquitectura de soluciones cloud y backend para clientes corporativos, fintech e industriales. Proyectos destacados: migración lift-and-shift de 36 VMs a GCP (Grupo Ramos), middleware FastAPI para trading institucional (Ecovalores/Matriz OMS), pipelines Java sobre GCP (Ganfeng Lithium), auditoría IBM Instana APM (Junta de Beneficencia de Guayaquil), APIs Django REST Framework (SeSocio), y microservicios de credit scoring (Wenance & Linio/Falabella).",
        tags: ["Python", "Java", "FastAPI", "GCP", "Terraform", "GKE", "IBM Instana", "Django REST", "Celery", "SQLAlchemy"]
      },
      {
        role: "Consultor Senior en Observabilidad y APM",
        company: "Junta de Beneficencia de Guayaquil",
        period: "Marzo 2026 - Mayo 2026",
        description: "Lideré la auditoría técnica, optimización y puesta en marcha de IBM Instana APM standalone sobre Nutanix AHV. Configuré telemetría avanzada para entornos Windows Server/IIS/.NET/SQL Server, diseñé Application Perspectives y Smart Alerts potenciadas por IA, reduciendo significativamente la fatiga de alertas. Capacité al equipo en Unbounded Analytics y Dynamic Graph.",
        tags: ["IBM Instana", "APM", "Nutanix AHV", ".NET", "SQL Server", "Smart Alerts", "IA", "Observabilidad"]
      },
      {
        role: "Cloud Architect & Especialista en Migraciones",
        company: "Grupo Ramos",
        period: "Enero 2026 - Marzo 2026",
        description: "Lideré la migración lift-and-shift de 36 instancias virtuales desde VMware hacia GCP con Migrate to Virtual Machines (M4CE). Diseñé y aprovisioné Landing Zone y Shared VPC con Terraform (Zero Public IP, Cloud NAT, IAP). Configuré node pools avanzados en GKE para entornos DEV, QA y PROD. Gestioné la infraestructura del ecosistema core SAP CAR Rise en SUSE Linux for SAP.",
        tags: ["GCP", "M4CE", "Terraform", "GKE", "Shared VPC", "Cloud NAT", "IAP", "SAP", "SLES"]
      },
      {
        role: "Technical & Digital Analyst",
        company: "SupraBrokers",
        period: "Julio 2025 - Agosto 2025",
        description: "Automatización de 10+ procesos repetitivos con Python, Google AppScript y Power Automate, logrando una reducción del 60% en tiempos operativos. Diseño e implementación de dashboards interactivos en Power BI y Looker Studio para monitoreo de KPIs estratégicos.",
        tags: ["Python", "AppScript", "Power Automate", "Power BI", "Looker Studio", "SQL"]
      },
      {
        role: "Administrador DBA | Administrativo",
        company: "Universidad de Buenos Aires",
        period: "Marzo 2018 - Mayo 2024",
        description: "Administración de SQL Server y PostgreSQL en producción para +10,000 usuarios activos, garantizando 99.9% de uptime durante 6 años. Performance tuning con reducción del 40% en tiempos de respuesta. Migración exitosa de +500 GB de datos críticos sin pérdida de información.",
        tags: ["SQL Server", "PostgreSQL", "Performance Tuning", "Alta Disponibilidad", "T-SQL", "PL-pgSQL", "Backup/Restore"]
      },
      {
        role: "Coordinador de Sistemas",
        company: "Gobierno de la Ciudad de Buenos Aires",
        period: "Febrero 2021 - Noviembre 2023",
        description: "Lideré la gestión de infraestructura de bases de datos y capacitación técnica de equipos. Administración de MySQL y MongoDB para proyectos gubernamentales. Implementación de planes de backup automatizados reduciendo el riesgo de pérdida de información en un 95%.",
        tags: ["MySQL", "MongoDB", "Backup/Restore", "Tuning", "Capacitación", "Linux"]
      },
      {
        role: "Mentor / Instructor",
        company: "Coderhouse",
        period: "Julio 2022 - Septiembre 2022",
        description: "Mentoría técnica a +50 estudiantes en React.js, JavaScript (ES6+), HTML5 y CSS3. Revisión de proyectos finales y enseñanza de buenas prácticas (Git, integración de APIs, manejo del DOM), logrando una tasa de aprobación del 95%.",
        tags: ["React.js", "JavaScript", "HTML5", "CSS3", "Git", "Mentoría", "Educación"]
      },
      {
        role: "Administrador DBA | Administrativo",
        company: "Defensoría del Pueblo de la CABA",
        period: "Junio 2018 - Junio 2022",
        description: "Mantenimiento y soporte técnico de bases de datos relacionales (SQL Server y MySQL). Ejecución de consultas avanzadas para la creación de más de 100 reportes y estadísticas institucionales, mejorando el acceso a la información para la toma de decisiones.",
        tags: ["SQL Server", "MySQL", "T-SQL", "Reportes", "Administración de BD"]
      }
    ],
    education: [
      {
        title: "Tecnicatura en Sistemas de Información de Gestión",
        institution: "Universidad Tecnológica Nacional (UTN)",
        period: "2024 - 2027 (En curso — 2º año)",
        description: "Formación técnica avanzada en desarrollo de software, arquitectura de sistemas, bases de datos relacionales, estructuras de datos, algoritmos y metodologías ágiles. Orientación en Java, Python y diseño de software."
      },
      {
        title: "Licenciatura en Relaciones del Trabajo",
        institution: "Universidad de Buenos Aires (UBA)",
        period: "2016 - 2024",
        description: "Formación en gestión de recursos humanos, psicología del trabajo, derecho laboral y administración organizacional. Esta dualidad me permite alinear la tecnología con las dinámicas y objetivos del negocio."
      },
      {
        title: "Bachillerato con Orientación en Ciencias Sociales",
        institution: "Colegio Américo Vespucio",
        period: "2010 - 2015",
        description: ""
      }
    ],
    projects: [
      {
        title: "Autonomous FinOps Engine",
        description: "Motor backend autónomo en Python que escanea entornos GCP detectando infraestructura ociosa y genera código IaC en Terraform para remediación automática de costos. Proyecto destacado en el Aleph Hackathon 2026.",
        tech: "Python, GCP, Terraform, FinOps, Cloud-Native",
        link: "https://github.com/Fernandofarfan/Autonomous-FinOps-Engine",
        featured: true,
        category: "Cloud / FinOps",
        hackathon: "Aleph Hackathon 2026"
      },
      {
        title: "OmniSync — Arquitectura EDA",
        description: "Motor políglota bajo arquitectura orientada a eventos (EDA) para el desacoplamiento total de reglas de negocio. Implementa consistencia eventual, eventos compensatorios para transacciones distribuidas y Dead Letter Queues (DLQ) para aislamiento y auditoría de fallas.",
        tech: "Python, Microservices, Event-Driven Architecture, DLQ, Kafka",
        link: "https://github.com/Fernandofarfan/OmniSync-Polyglot-Event-Driven-Engine",
        featured: true,
        category: "Backend / Microservicios"
      },
      {
        title: "Monitor CI/CD — Dashboard DORA",
        description: "Plataforma centralizada de monitoreo en tiempo real para visualizar el estado de pipelines y deployments, integrada con GitHub Actions y GitLab CI. Diseñada con TypeScript, Node.js y WebSockets para notificaciones en vivo bajo el estándar de Métricas DORA.",
        tech: "TypeScript, Node.js, Vue 3, WebSockets, Docker, PostgreSQL, GitHub Actions",
        link: "https://github.com/Fernandofarfan/Monitor-CI-CD",
        category: "Cloud / DevOps"
      },
      {
        title: "Dashboard Bases de Datos",
        description: "Plataforma de observabilidad en tiempo real interactiva para bases de datos relacionales (PostgreSQL, MySQL) y NoSQL. Visualización de métricas de rendimiento y alertas proactivas.",
        tech: "Python, FastAPI, React, Docker, PostgreSQL, MySQL",
        link: "https://github.com/Fernandofarfan/Dashboard-Bases-Datos",
        category: "Backend"
      },
      {
        title: "EmpleoIA",
        description: "Plataforma automatizada de búsqueda de empleo con scraping inteligente (Selenium) y matching de CVs usando NLP con spaCy.",
        tech: "Python, Flask, MongoDB, spaCy, Selenium",
        link: "https://github.com/Fernandofarfan/ai-job-matching-platform",
        category: "Backend / IA"
      },
      {
        title: "Optimizador de Computadora v2.0",
        description: "Suite de optimización open source en PowerShell para sistemas Windows con 42 funciones y dashboard web integrado.",
        tech: "PowerShell, HTML/CSS, Windows OS",
        link: "https://github.com/Fernandofarfan/Optimizador-de-Computadora-v2.0",
        category: "Herramientas"
      }
    ],
    hackathons: [
      { name: "Aleph Hackathon", year: "2026", project: "Autonomous FinOps Engine" },
      { name: "Avalanche LatAm", year: "2024", project: "Blockchain Backend" },
      { name: "PunaTech", year: "2023", project: "Cloud Architecture Challenge" },
      { name: "NASA Space Apps Challenge", year: "2022", project: "Backend Development" }
    ],
    certifications: [
      {
        title: "IBM Java Developer Professional Certificate",
        date: "Octubre 2025",
        id: "KU5H3PJ57M7W",
        url: "https://www.coursera.org/account/accomplishments/professional-cert/KU5H3PJ57M7W",
        skills: "Java, SQL, Spring Framework, Microservices, POO",
        featured: true
      },
      {
        title: "IBM DevOps and Software Engineering",
        date: "Mayo 2025",
        id: "WECAD3GAK2VA",
        url: "https://www.coursera.org/account/accomplishments/specialization/WECAD3GAK2VA",
        skills: "DevOps, CI/CD, Docker, Kubernetes, TDD/BDD",
        featured: true
      },
      {
        title: "IBM IT Scrum Master",
        date: "Julio 2024",
        id: "9HBDHURRLKZM",
        url: "https://coursera.org/verify/professional-cert/9HBDHURRLKZM",
        skills: "Scrum, DevOps, Agile",
        featured: true
      },
      {
        title: "Google Data Analytics",
        date: "Abril 2024",
        id: "QY27MQNBLVW9",
        url: "https://coursera.org/verify/professional-cert/QY27MQNBLVW9",
        skills: "Análisis de datos, R, Estadística",
        featured: true
      },
      {
        title: "Meta — Desarrollador Back-End",
        date: "Junio 2023",
        id: "RKT4LXWZTHV4",
        url: "https://coursera.org/verify/professional-cert/RKT4LXWZTHV4",
        skills: "Python, Django REST, SQL, API Testing",
        featured: true
      },
      {
        title: "Meta — Desarrollador Front-End",
        date: "Junio 2023",
        id: "NDT53U2D6CJR",
        url: "https://www.coursera.org/account/accomplishments/specialization/NDT53U2D6CJR",
        skills: "React, UX Design, HTML, CSS",
        featured: true
      },
      {
        title: "IBM Full Stack Software Developer",
        date: "Enero 2024",
        id: "Z1OJ8AI5UFDM",
        url: "https://www.coursera.org/account/accomplishments/specialization/Z1OJ8AI5UFDM",
        skills: "JS, React, Node.js, Python, Docker, Kubernetes, SQL"
      },
      {
        title: "IBM Back-end JavaScript Developer",
        date: "Diciembre 2023",
        id: "7ZT98PBD1XAR",
        url: "https://www.coursera.org/account/accomplishments/specialization/7ZT98PBD1XAR",
        skills: "Node.js, Express, MongoDB, Microservices"
      },
      {
        title: "IBM Back-End Development",
        date: "Octubre 2023",
        id: "PA0KVDG6VGPZ",
        url: "https://www.coursera.org/account/accomplishments/specialization/PA0KVDG6VGPZ",
        skills: "Python, Docker, Kubernetes, OpenShift, Flask"
      },
      {
        title: "IBM Front-End Developer",
        date: "Octubre 2023",
        id: "W3JHUWJ3KJRY",
        url: "https://coursera.org/verify/professional-cert/W3JHUWJ3KJRY",
        skills: "React, Bootstrap, HTML, CSS, Git"
      },
      {
        title: "Oracle Next Education Back-End",
        date: "Febrero 2023",
        id: "99565610-8083-4f93-a8c3-0767db0e30a8",
        url: "https://app.aluracursos.com/program/certificate/99565610-8083-4f93-a8c3-0767db0e30a8",
        skills: "Java, Spring Boot"
      },
      {
        title: ".NET FullStack Developer",
        date: "Octubre 2022",
        id: "2UYKMBUZ79HJ",
        url: "https://coursera.org/verify/specialization/2UYKMBUZ79HJ",
        skills: "React, .NET Framework, ASP.NET"
      },
      {
        title: "Microsoft — Fundamentos de Análisis de Datos",
        date: "Septiembre 2021",
        id: null,
        url: "https://www.linkedin.com/learning/certificates/a3480190887c251848e6d3a95da21f9dbc46d2029aa29703bdab906e055015e1",
        skills: "Análisis de datos, Power BI"
      },
      {
        title: "Microsoft — Fundamentos de Ciberseguridad",
        date: "Abril 2021",
        id: null,
        url: "https://www.linkedin.com/learning/certificates/4b9f7283184495dcf482b7fb488e704c8d4b95885e81af6babef72d6fec96c67",
        skills: "Ciberseguridad"
      },
      {
        title: "Google Cloud Fundamentals: Core Infrastructure",
        date: "Junio 2020",
        id: "XUBRBN5JAFNJ",
        url: "https://www.coursera.org/account/accomplishments/records/XUBRBN5JAFNJ",
        skills: "GCP, Cloud Computing, Infraestructura"
      },
      {
        title: "Microsoft — Fundamentos de Desarrollo de Software",
        date: "Marzo 2022",
        id: null,
        url: "https://www.linkedin.com/learning/certificates/50c1942e1826e95d16b05e36d4eac9c27b0e6da1d916a2846fdcd096326708d9",
        skills: "Desarrollo de Software, Buenas Prácticas"
      }
    ],
    certBadge: "24+ Certificaciones Profesionales",
    skills: [
      {
        category: "Backend & APIs",
        icon: "⚡",
        items: ["Python (FastAPI, Django)", "Java (Spring Boot)", "Node.js", "TypeScript", "GraphQL", "REST APIs"]
      },
      {
        category: "Cloud & Infraestructura",
        icon: "☁️",
        items: ["Google Cloud Platform (GCP)", "GKE", "Terraform (IaC)", "M4CE", "Shared VPC", "Cloud NAT", "IAP", "Docker"]
      },
      {
        category: "DevOps & CI/CD",
        icon: "🔁",
        items: ["GitHub Actions", "Docker Compose", "Kubernetes", "OpenShift", "Linux VPS", "CI/CD Pipelines"]
      },
      {
        category: "Bases de Datos",
        icon: "🗄️",
        items: ["SQL Server", "PostgreSQL", "MySQL", "MongoDB", "Oracle", "SAP HANA"]
      },
      {
        category: "Observabilidad & APM",
        icon: "📡",
        items: ["IBM Instana", "New Relic", "Smart Alerts con IA", "Application Perspectives", "Unbounded Analytics"]
      },
      {
        category: "Automatización & Data",
        icon: "🤖",
        items: ["n8n", "Baserow", "Celery", "Power BI", "Looker Studio", "Pandas", "PowerShell"]
      },
      {
        category: "Frontend",
        icon: "🎨",
        items: ["React", "Vue.js", "Tailwind CSS", "HTML/CSS", "Bootstrap"]
      }
    ],
    testimonials: [
      {
        name: "Juan Pablo Gambarotto",
        role: "Especialista de Selección de Personal",
        company: "Accenture",
        date: "16 de mayo de 2025",
        relation: "Trabajó con Guillermo en distintas empresas",
        quote: "Guillermo es un profesional comprometido, confiable y orientado a resultados. En cada proyecto demuestra perseverancia, análisis y una fuerte dedicación, cumpliendo siempre con los objetivos en tiempo y forma. Es un recurso valioso que aporta tanto a nivel laboral como humano, y sin duda suma significativamente a cualquier equipo."
      },
      {
        name: "Mónica Sch",
        role: "Founder & Managing Partner | Technology Recruitment",
        company: "PAXX Talent Partners",
        date: "10 de mayo de 2024",
        relation: "Asesoró a Guillermo",
        quote: "Guillermo es un profesional comprometido con todos los desafíos que encara. Sabés que contás con él y tenés la certeza de que cumple con los objetivos del proyecto en tiempo y forma. Perseverante, analítico, con orientación a resultados, siempre se brinda al máximo. Es un recurso valioso que sumará muchísimo a cualquier equipo, tanto a nivel laboral como humano."
      }
    ],
    blog: {
      sectionTitle: "Artículos & Recursos",
      subtitle: "Compartiendo conocimiento sobre desarrollo backend, cloud y bases de datos.",
      comingSoon: "Próximamente más artículos...",
      articles: [
        {
          title: "Migración Lift-and-Shift a GCP: Lecciones desde 36 VMs",
          excerpt: "Cómo lideré la migración de 36 máquinas virtuales de VMware a Google Cloud con M4CE, Terraform y Shared VPC.",
          tags: ["GCP", "Terraform", "Cloud Migration", "M4CE"],
          date: "2026",
          link: null
        },
        {
          title: "IBM Instana APM: Reduciendo la Fatiga de Alertas con IA",
          excerpt: "Implementación standalone de IBM Instana en Nutanix AHV y configuración de Smart Alerts potenciadas por IA.",
          tags: ["APM", "IBM Instana", "Observabilidad", "IA"],
          date: "2026",
          link: null
        },
        {
          title: "Optimización de Queries SQL: 40% más rápido",
          excerpt: "Técnicas avanzadas de performance tuning que apliqué administrando bases de datos para +10,000 usuarios en la UBA.",
          tags: ["SQL", "Performance", "DBA"],
          date: "2026",
          link: null
        }
      ]
    },
    githubSection: {
      title: "GitHub",
      subtitle: "Contribuciones y actividad open source",
      viewProfile: "Ver perfil completo en GitHub"
    },
    contact: {
      title: "Contacto",
      description: "¿Tenés un proyecto en mente o querés conversar? ¡Enviame un mensaje!",
      nameLabel: "Nombre",
      emailLabel: "Email",
      messageLabel: "Mensaje",
      sendButton: "Enviar Mensaje",
      or: "O contactame a través de mis redes sociales"
    }
  },
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      education: "Education",
      projects: "Projects",
      certifications: "Certifications",
      testimonials: "Testimonials",
      skills: "Skills",
      blog: "Articles",
      github: "GitHub",
      contact: "Contact"
    },
    profile: {
      name: "Guillermo Fernando Farfan Romero",
      role: "Backend Engineer & Cloud Solutions Architect | Python · Java · GCP · Terraform",
      typingRoles: [
        "Python Backend Engineer",
        "Cloud Solutions Architect",
        "FinOps Specialist",
        "DevOps Engineer",
        "Senior DBA"
      ],
      avatarUrl: "https://github.com/Fernandofarfan.png",
      githubUsername: "Fernandofarfan",
      description: "Python Backend Engineer & Cloud Architect transforming complex infrastructures and building highly scalable platforms. I combine solid technical training in Information Systems (UTN) with Labor Relations (UBA), aligning cutting-edge technology with business objectives.",
      email: "fernando.farfan16@gmail.com",
      location: "Buenos Aires, Argentina",
      status: "Available for work",
      downloadCvEs: "Descargar CV (ES)",
      downloadCvEn: "Download CV (EN)",
      yearsExp: "+8",
      certCount: "24+",
      social: {
        github: "https://github.com/Fernandofarfan",
        linkedin: "https://www.linkedin.com/in/guillermo-farfan",
        instagram: "https://www.instagram.com/fernando.farfan07/",
        credly: "https://www.credly.com/users/fernando-farfan.855a5067/badges#credly"
      },
      cvLinkEs: "/CV/Guillermo_Farfan_CV.pdf",
      cvLinkEn: "/CV/Guillermo_Farfan_CV_EN.pdf"
    },
    about: [
      "I am <strong>Guillermo Fernando Farfan Romero</strong>, a Python Backend Engineer & Cloud Solutions Architect with <strong>over 8 years of experience</strong> in the tech industry. I am currently pursuing a <strong>University Technician degree in Information Systems</strong> at the National Technological University (UTN) and hold a degree in Labor Relations from the University of Buenos Aires (UBA).",
      "My specialization covers <strong>corporate cloud migrations to GCP</strong> (lift-and-shift with M4CE, Terraform, GKE), design of <strong>high-concurrency REST/GraphQL APIs</strong> with Python (FastAPI, Django) and Java (Spring Boot), and <strong>advanced observability with IBM Instana APM</strong>. I have led projects for Grupo Ramos, Junta de Beneficencia de Guayaquil, Ecovalores/OMS Matrix, and Ganfeng Lithium.",
      "I hold over <strong>24 professional certifications</strong> from IBM, Meta, Google, and Microsoft, and have actively participated as a backend developer in hackathons since 2022 (Aleph, Avalanche LatAm, PunaTech, NASA Space Apps Challenge). I seek challenges where I can apply my expertise in <strong>backend engineering, cloud architecture, and DevOps</strong> to build solutions that generate real impact."
    ],
    experience: [
      {
        role: "Technical Lead & Full Stack Developer",
        company: "Reforest Latam",
        period: "May 2026 - Present",
        description: "Leading software architecture, financial process automation, and platform modernization. Designed a Telegram transactional bot with Python and Finite State Machines (FSM) for real-time accounting classification. Led the deployment of the core ERP on Linux VPS with Docker and orchestrated multi-currency bank reconciliation pipelines (ARS/USD) with n8n, Baserow, and Python.",
        tags: ["Python", "FSM", "Telegram Bot", "Docker", "n8n", "Baserow", "ERP", "Linux VPS"]
      },
      {
        role: "Python, Java & Cloud Solutions Engineer",
        company: "Independent Consulting (NDA)",
        period: "November 2021 - Present",
        description: "Technical consulting and cloud/backend solution architecture for corporate, fintech, and industrial clients. Key projects: lift-and-shift migration of 36 VMs to GCP (Grupo Ramos), FastAPI middleware for institutional trading (Ecovalores/OMS Matrix), Java pipelines on GCP (Ganfeng Lithium), IBM Instana APM audit (Junta de Beneficencia de Guayaquil), Django REST Framework APIs (SeSocio), and credit scoring microservices (Wenance & Linio/Falabella).",
        tags: ["Python", "Java", "FastAPI", "GCP", "Terraform", "GKE", "IBM Instana", "Django REST", "Celery", "SQLAlchemy"]
      },
      {
        role: "Senior Observability & APM Consultant",
        company: "Junta de Beneficencia de Guayaquil",
        period: "March 2026 - May 2026",
        description: "Led the technical audit, optimization, and deployment of IBM Instana APM standalone on Nutanix AHV. Configured advanced telemetry for Windows Server/IIS/.NET/SQL Server environments, designed Application Perspectives and AI-powered Smart Alerts, significantly reducing alert fatigue. Trained the team on Unbounded Analytics and Dynamic Graph.",
        tags: ["IBM Instana", "APM", "Nutanix AHV", ".NET", "SQL Server", "Smart Alerts", "AI", "Observability"]
      },
      {
        role: "Cloud Architect & Migration Specialist",
        company: "Grupo Ramos",
        period: "January 2026 - March 2026",
        description: "Led the lift-and-shift migration of 36 virtual instances from VMware to GCP using Migrate to Virtual Machines (M4CE). Designed and provisioned Landing Zone and Shared VPC with Terraform (Zero Public IP, Cloud NAT, IAP). Configured advanced GKE node pools for DEV, QA, and PROD environments. Managed infrastructure for the SAP CAR Rise ecosystem on SUSE Linux for SAP.",
        tags: ["GCP", "M4CE", "Terraform", "GKE", "Shared VPC", "Cloud NAT", "IAP", "SAP", "SLES"]
      },
      {
        role: "Technical & Digital Analyst",
        company: "SupraBrokers",
        period: "July 2025 - August 2025",
        description: "Automated 10+ repetitive processes using Python, Google AppScript, and Power Automate, achieving a 60% reduction in operational turnaround times. Designed and implemented interactive dashboards in Power BI and Looker Studio for real-time KPI monitoring.",
        tags: ["Python", "AppScript", "Power Automate", "Power BI", "Looker Studio", "SQL"]
      },
      {
        role: "DBA Administrator",
        company: "University of Buenos Aires",
        period: "March 2018 - May 2024",
        description: "Administration of SQL Server and PostgreSQL in production for 10,000+ active users, guaranteeing 99.9% uptime over 6 years. Performance tuning achieving a 40% reduction in response times. Successful migration of 500+ GB of critical data with zero data loss.",
        tags: ["SQL Server", "PostgreSQL", "Performance Tuning", "High Availability", "T-SQL", "PL-pgSQL", "Backup/Restore"]
      },
      {
        role: "Systems Coordinator",
        company: "Government of the City of Buenos Aires",
        period: "February 2021 - November 2023",
        description: "Led database infrastructure management and technical team training. Administered MySQL and MongoDB for government projects. Implemented automated backup plans reducing data loss risk by 95%.",
        tags: ["MySQL", "MongoDB", "Backup/Restore", "Tuning", "Training", "Linux"]
      },
      {
        role: "Mentor / Instructor",
        company: "Coderhouse",
        period: "July 2022 - September 2022",
        description: "Technical mentorship to 50+ students in React.js, JavaScript (ES6+), HTML5, and CSS3. Code review, final project evaluation, and teaching of best practices (Git, API integration, DOM manipulation), achieving a 95% pass rate.",
        tags: ["React.js", "JavaScript", "HTML5", "CSS3", "Git", "Mentorship", "Education"]
      },
      {
        role: "DBA Administrator",
        company: "Defensoría del Pueblo de la CABA",
        period: "June 2018 - June 2022",
        description: "Maintenance and technical support of relational databases (SQL Server and MySQL). Execution of advanced queries for the creation of 100+ institutional reports and statistics, improving information access for decision-making.",
        tags: ["SQL Server", "MySQL", "T-SQL", "Reporting", "Database Administration"]
      }
    ],
    education: [
      {
        title: "University Technician in Information Management Systems",
        institution: "National Technological University (UTN)",
        period: "2024 - 2027 (In Progress — 2nd year)",
        description: "Advanced technical training in software development, systems architecture, relational databases, data structures, algorithms, and agile methodologies. Focus on Java, Python, and software design."
      },
      {
        title: "Bachelor's Degree in Labor Relations",
        institution: "University of Buenos Aires (UBA)",
        period: "2016 - 2024",
        description: "Training in human resources management, work psychology, labor law, and organizational administration. This dual background allows me to align technology with business dynamics and objectives."
      },
      {
        title: "Social Sciences Baccalaureate",
        institution: "Américo Vespucio College",
        period: "2010 - 2015",
        description: ""
      }
    ],
    projects: [
      {
        title: "Autonomous FinOps Engine",
        description: "Autonomous Python backend engine that scans GCP environments detecting idle infrastructure and automatically generates Terraform IaC code for cost remediation. Featured at Aleph Hackathon 2026.",
        tech: "Python, GCP, Terraform, FinOps, Cloud-Native",
        link: "https://github.com/Fernandofarfan/Autonomous-FinOps-Engine",
        featured: true,
        category: "Cloud / FinOps",
        hackathon: "Aleph Hackathon 2026"
      },
      {
        title: "OmniSync — EDA Architecture",
        description: "Polyglot engine built on Event-Driven Architecture (EDA) for complete business rule decoupling. Implements eventual consistency, compensating events for distributed transactions, and Dead Letter Queues (DLQ) for fault isolation and auditing.",
        tech: "Python, Microservices, Event-Driven Architecture, DLQ, Kafka",
        link: "https://github.com/Fernandofarfan/OmniSync-Polyglot-Event-Driven-Engine",
        featured: true,
        category: "Backend / Microservices"
      },
      {
        title: "Monitor CI/CD — DORA Dashboard",
        description: "Centralized real-time monitoring platform to visualize pipeline and deployment status, integrated with GitHub Actions and GitLab CI. Built with TypeScript, Node.js, and WebSockets for live notifications under DORA Metrics standards.",
        tech: "TypeScript, Node.js, Vue 3, WebSockets, Docker, PostgreSQL, GitHub Actions",
        link: "https://github.com/Fernandofarfan/Monitor-CI-CD",
        category: "Cloud / DevOps"
      },
      {
        title: "Database Dashboard",
        description: "Interactive real-time observability platform for relational (PostgreSQL, MySQL) and NoSQL databases with performance metrics and proactive alerting.",
        tech: "Python, FastAPI, React, Docker, PostgreSQL, MySQL",
        link: "https://github.com/Fernandofarfan/Dashboard-Bases-Datos",
        category: "Backend"
      },
      {
        title: "EmpleoIA",
        description: "Automated job search platform with intelligent scraping (Selenium) and CV matching using NLP with spaCy.",
        tech: "Python, Flask, MongoDB, spaCy, Selenium",
        link: "https://github.com/Fernandofarfan/ai-job-matching-platform",
        category: "Backend / AI"
      },
      {
        title: "PC Optimizer v2.0",
        description: "Professional open source optimization suite for Windows with 42 functions and integrated web dashboard.",
        tech: "PowerShell, HTML/CSS, Windows OS",
        link: "https://github.com/Fernandofarfan/Optimizador-de-Computadora-v2.0",
        category: "Tools"
      }
    ],
    hackathons: [
      { name: "Aleph Hackathon", year: "2026", project: "Autonomous FinOps Engine" },
      { name: "Avalanche LatAm", year: "2024", project: "Blockchain Backend" },
      { name: "PunaTech", year: "2023", project: "Cloud Architecture Challenge" },
      { name: "NASA Space Apps Challenge", year: "2022", project: "Backend Development" }
    ],
    certifications: [
      {
        title: "IBM Java Developer Professional Certificate",
        date: "October 2025",
        id: "KU5H3PJ57M7W",
        url: "https://www.coursera.org/account/accomplishments/professional-cert/KU5H3PJ57M7W",
        skills: "Java, SQL, Spring Framework, Microservices, OOP",
        featured: true
      },
      {
        title: "IBM DevOps and Software Engineering",
        date: "May 2025",
        id: "WECAD3GAK2VA",
        url: "https://www.coursera.org/account/accomplishments/specialization/WECAD3GAK2VA",
        skills: "DevOps, CI/CD, Docker, Kubernetes, TDD/BDD",
        featured: true
      },
      {
        title: "IBM IT Scrum Master",
        date: "July 2024",
        id: "9HBDHURRLKZM",
        url: "https://coursera.org/verify/professional-cert/9HBDHURRLKZM",
        skills: "Scrum, DevOps, Agile",
        featured: true
      },
      {
        title: "Google Data Analytics",
        date: "April 2024",
        id: "QY27MQNBLVW9",
        url: "https://coursera.org/verify/professional-cert/QY27MQNBLVW9",
        skills: "Data Analysis, R, Statistics",
        featured: true
      },
      {
        title: "Meta — Back-End Developer",
        date: "June 2023",
        id: "RKT4LXWZTHV4",
        url: "https://coursera.org/verify/professional-cert/RKT4LXWZTHV4",
        skills: "Python, Django REST, SQL, API Testing",
        featured: true
      },
      {
        title: "Meta — Front-End Developer",
        date: "June 2023",
        id: "NDT53U2D6CJR",
        url: "https://www.coursera.org/account/accomplishments/specialization/NDT53U2D6CJR",
        skills: "React, UX Design, HTML, CSS",
        featured: true
      },
      {
        title: "IBM Full Stack Software Developer",
        date: "January 2024",
        id: "Z1OJ8AI5UFDM",
        url: "https://www.coursera.org/account/accomplishments/specialization/Z1OJ8AI5UFDM",
        skills: "JS, React, Node.js, Python, Docker, Kubernetes, SQL"
      },
      {
        title: "IBM Back-end JavaScript Developer",
        date: "December 2023",
        id: "7ZT98PBD1XAR",
        url: "https://www.coursera.org/account/accomplishments/specialization/7ZT98PBD1XAR",
        skills: "Node.js, Express, MongoDB, Microservices"
      },
      {
        title: "IBM Back-End Development",
        date: "October 2023",
        id: "PA0KVDG6VGPZ",
        url: "https://www.coursera.org/account/accomplishments/specialization/PA0KVDG6VGPZ",
        skills: "Python, Docker, Kubernetes, OpenShift, Flask"
      },
      {
        title: "IBM Front-End Developer",
        date: "October 2023",
        id: "W3JHUWJ3KJRY",
        url: "https://coursera.org/verify/professional-cert/W3JHUWJ3KJRY",
        skills: "React, Bootstrap, HTML, CSS, Git"
      },
      {
        title: "Oracle Next Education Back-End",
        date: "February 2023",
        id: "99565610-8083-4f93-a8c3-0767db0e30a8",
        url: "https://app.aluracursos.com/program/certificate/99565610-8083-4f93-a8c3-0767db0e30a8",
        skills: "Java, Spring Boot"
      },
      {
        title: ".NET FullStack Developer",
        date: "October 2022",
        id: "2UYKMBUZ79HJ",
        url: "https://coursera.org/verify/specialization/2UYKMBUZ79HJ",
        skills: "React, .NET Framework, ASP.NET"
      },
      {
        title: "Microsoft — Data Analytics Fundamentals",
        date: "September 2021",
        id: null,
        url: "https://www.linkedin.com/learning/certificates/a3480190887c251848e6d3a95da21f9dbc46d2029aa29703bdab906e055015e1",
        skills: "Data Analysis, Power BI"
      },
      {
        title: "Microsoft — Cybersecurity Fundamentals",
        date: "April 2021",
        id: null,
        url: "https://www.linkedin.com/learning/certificates/4b9f7283184495dcf482b7fb488e704c8d4b95885e81af6babef72d6fec96c67",
        skills: "Cybersecurity"
      },
      {
        title: "Google Cloud Fundamentals: Core Infrastructure",
        date: "June 2020",
        id: "XUBRBN5JAFNJ",
        url: "https://www.coursera.org/account/accomplishments/records/XUBRBN5JAFNJ",
        skills: "GCP, Cloud Computing, Infrastructure"
      },
      {
        title: "Microsoft — Software Development Fundamentals",
        date: "March 2022",
        id: null,
        url: "https://www.linkedin.com/learning/certificates/50c1942e1826e95d16b05e36d4eac9c27b0e6da1d916a2846fdcd096326708d9",
        skills: "Software Development, Best Practices"
      }
    ],
    certBadge: "24+ Professional Certifications",
    skills: [
      {
        category: "Backend & APIs",
        icon: "⚡",
        items: ["Python (FastAPI, Django)", "Java (Spring Boot)", "Node.js", "TypeScript", "GraphQL", "REST APIs"]
      },
      {
        category: "Cloud & Infrastructure",
        icon: "☁️",
        items: ["Google Cloud Platform (GCP)", "GKE", "Terraform (IaC)", "M4CE", "Shared VPC", "Cloud NAT", "IAP", "Docker"]
      },
      {
        category: "DevOps & CI/CD",
        icon: "🔁",
        items: ["GitHub Actions", "Docker Compose", "Kubernetes", "OpenShift", "Linux VPS", "CI/CD Pipelines"]
      },
      {
        category: "Databases",
        icon: "🗄️",
        items: ["SQL Server", "PostgreSQL", "MySQL", "MongoDB", "Oracle", "SAP HANA"]
      },
      {
        category: "Observability & APM",
        icon: "📡",
        items: ["IBM Instana", "New Relic", "AI-powered Smart Alerts", "Application Perspectives", "Unbounded Analytics"]
      },
      {
        category: "Automation & Data",
        icon: "🤖",
        items: ["n8n", "Baserow", "Celery", "Power BI", "Looker Studio", "Pandas", "PowerShell"]
      },
      {
        category: "Frontend",
        icon: "🎨",
        items: ["React", "Vue.js", "Tailwind CSS", "HTML/CSS", "Bootstrap"]
      }
    ],
    testimonials: [
      {
        name: "Juan Pablo Gambarotto",
        role: "Personnel Selection Specialist",
        company: "Accenture",
        date: "May 16, 2025",
        relation: "Worked with Guillermo in different companies",
        quote: "Guillermo is a committed, reliable, and result-oriented professional. In every project, he demonstrates perseverance, analysis, and strong dedication, always meeting objectives on time and in form. He is a valuable resource who contributes both professionally and personally, and undoubtedly adds significantly to any team."
      },
      {
        name: "Mónica Sch",
        role: "Founder & Managing Partner | Technology Recruitment",
        company: "PAXX Talent Partners",
        date: "May 10, 2024",
        relation: "Advised Guillermo",
        quote: "Guillermo is a professional committed to all the challenges he faces. You know you can count on him and have the certainty that he meets project objectives on time and in form. Perseverant, analytical, result-oriented, he always gives his best. He is a valuable resource who will add a lot to any team, both professionally and personally."
      }
    ],
    blog: {
      sectionTitle: "Articles & Resources",
      subtitle: "Sharing knowledge about backend development, cloud architecture, and databases.",
      comingSoon: "More articles coming soon...",
      articles: [
        {
          title: "Lift-and-Shift Migration to GCP: Lessons from 36 VMs",
          excerpt: "How I led the migration of 36 virtual machines from VMware to Google Cloud with M4CE, Terraform, and Shared VPC.",
          tags: ["GCP", "Terraform", "Cloud Migration", "M4CE"],
          date: "2026",
          link: null
        },
        {
          title: "IBM Instana APM: Reducing Alert Fatigue with AI",
          excerpt: "Standalone IBM Instana deployment on Nutanix AHV and AI-powered Smart Alerts configuration.",
          tags: ["APM", "IBM Instana", "Observability", "AI"],
          date: "2026",
          link: null
        },
        {
          title: "SQL Query Optimization: 40% Faster",
          excerpt: "Advanced performance tuning techniques I applied while administering databases for 10,000+ users at UBA.",
          tags: ["SQL", "Performance", "DBA"],
          date: "2026",
          link: null
        }
      ]
    },
    githubSection: {
      title: "GitHub",
      subtitle: "Contributions and open source activity",
      viewProfile: "View full profile on GitHub"
    },
    contact: {
      title: "Contact",
      description: "Do you have a project in mind or want to chat? Send me a message!",
      nameLabel: "Name",
      emailLabel: "Email",
      messageLabel: "Message",
      sendButton: "Send Message",
      or: "Or contact me via social media"
    }
  }
};
