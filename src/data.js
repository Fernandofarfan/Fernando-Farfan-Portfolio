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
      role: "Senior Cloud Architect & Software Engineer | Tech Lead | GCP, Azure, Virtualization, Python & Terraform",
      typingRoles: [
        "Senior Cloud Solutions Architect",
        "Technical Lead",
        "Cloud & Virtualization Specialist",
        "Senior Python Backend Engineer",
        "DBA & Data Infrastructure Lead"
      ],
      avatarUrl: "https://github.com/Fernandofarfan.png",
      githubUsername: "Fernandofarfan",
      description: "Senior Cloud Solutions Architect, Infrastructure Specialist & Tech Lead con más de 8 años de experiencia diseñando arquitecturas cloud-native e híbridas en Google Cloud Platform (GCP) y Microsoft Azure, virtualización enterprise (Hyper-V, VMware vSphere, Nutanix AHV), automatización con Terraform (IaC), bases de datos de alta disponibilidad y microservicios asíncronos en Python (FastAPI). Combino formación en Sistemas (UTN) y Relaciones del Trabajo (UBA) para dirigir equipos de ingeniería alineando excelencia técnica, cultura ágil y objetivos de negocio.",
      email: "fernando.farfan16@gmail.com",
      location: "Salta / Buenos Aires, Argentina (UTC-3 · Remoto / Relocalización)",
      status: "Disponible para trabajar",
      downloadCvEs: "Descargar CV (ES)",
      downloadCvEn: "Download CV (EN)",
      yearsExp: "+8",
      certCount: "24+",
      social: {
        github: "https://github.com/Fernandofarfan",
        linkedin: "https://www.linkedin.com/in/guillermo-farfan",
        instagram: "https://www.instagram.com/fernando.farfan07/",
        credly: "https://www.credly.com/users/fernando-farfan.855a5067/badges"
      },
      cvLinkEs: "/CV/Guillermo_Farfan_CV.pdf",
      cvLinkEn: "/CV/Guillermo_Farfan_CV_EN.pdf"
    },
    about: [
      "Soy <strong>Guillermo Fernando Farfan Romero</strong>, Senior Cloud Solutions Architect, Infrastructure Specialist & Tech Lead con <strong>más de 8 años de experiencia</strong> en diseño de arquitecturas de misión crítica, ingeniería de datos y microservicios backend. Actualmente curso la <strong>Tecnicatura Universitaria en Sistemas de Información</strong> en la Universidad Tecnológica Nacional (UTN) y cuento con estudios universitarios avanzados en Relaciones del Trabajo por la Universidad de Buenos Aires (UBA).",
      "Mi especialización abarca <strong>arquitectura multi-cloud, virtualización enterprise y automatización IaC</strong>: diseño de Landing Zones y despliegues en Google Cloud Platform y Microsoft Azure con Terraform, migraciones de cargas críticas (M4CE, Veeam Backup & Replication), clústeres de alta disponibilidad en Microsoft Hyper-V y entornos Linux/Windows (SLES, RHEL, Windows Server) sobre almacenamiento SAN Fibre Channel, orquestación en Kubernetes (GKE Autopilot) con ArgoCD y observabilidad full-stack con OpenTelemetry, IBM Instana APM, Zabbix, Prometheus y Grafana.",
      "En el área de backend y datos, desarrollo microservicios asíncronos de alta concurrencia con <strong>Python (FastAPI, Celery, SQLAlchemy 2.0, Redis)</strong>, Java (Spring Boot) y TypeScript, administración avanzada de bases de datos (PostgreSQL con pgvector, SQL Server AlwaysOn, BigQuery e infraestructura IaaS para entornos SAP HANA) y optimización financiera (<strong>FinOps con 28% de reducción sostenida en GCP</strong>). Cuento con <strong>certificaciones profesionales verificadas en Credly</strong> emitidas por IBM, Meta, Google y Microsoft, y participación activa como desarrollador en hackathons desde 2022 (Aleph, Avalanche LatAm, PunaTech, NASA Space Apps)."
    ],
    experience: [
      {
        role: "Technical Lead & Senior Systems Engineer",
        company: "Reforest Latam",
        period: "Mayo 2026 - Actualidad",
        description: "Lidero la arquitectura técnica, estrategia cloud/DevOps y el desarrollo de plataformas de telemetría y ERP para un equipo de 6 ingenieros. Reducción sostenida del 28% en costos cloud mediante FinOps en GCP. Pipelines GitOps con GitHub Actions y ArgoCD hacia GKE Autopilot y Cloud Run (lead time de 5 días a minutos, Zero-Downtime). Microservicios asíncronos en FastAPI/Celery/Redis (-45% en latencia), persistencia en PostgreSQL con migraciones Alembic y cobertura >85% con Pytest/Jest bajo TDD.",
        tags: ["Python", "FastAPI", "GCP", "GKE Autopilot", "Cloud Run", "Terraform", "ArgoCD", "Docker", "Redis", "PostgreSQL", "FinOps", "Celery"]
      },
      {
        role: "Senior Cloud Architect, Infrastructure & Software Consultant",
        company: "Consultoría Independiente & Proyectos Enterprise (Bajo NDA)",
        period: "Enero 2021 - Actualidad",
        description: "Consultoría de arquitectura multi-cloud (GCP y Azure), virtualización enterprise, automatización con Terraform (IaC), bases de datos de alta disponibilidad e ingeniería backend bajo estrictos acuerdos de confidencialidad (NDA). Diseño de Landing Zones (Shared VPC, Cloud NAT, IAP, GKE), migración de servidores corporativos e infraestructura IaaS de alta disponibilidad sobre Linux (SLES, RHEL) y Windows Server, clústeres de virtualización Hyper-V / VMware con almacenamiento SAN Fibre Channel y resguardo con Veeam VBR, observabilidad distribuida (OpenTelemetry, APM, Prometheus/Grafana) y desarrollo de microservicios asíncronos con Python (FastAPI, Celery, SQLAlchemy 2.0, Redis) y Java 17 (Spring Boot).",
        tags: ["GCP", "Azure", "Terraform", "Hyper-V", "GKE", "SLES / RHEL", "SAN FC", "Veeam VBR", "OpenTelemetry", "Python FastAPI", "Java Spring Boot", "SQL Server", "PostgreSQL"]
      },
      {
        role: "Senior Software Engineer & Database Administrator (DBA)",
        company: "Universidad de Buenos Aires",
        period: "Marzo 2018 - Febrero 2024",
        description: "Administración de alta disponibilidad y performance tuning sobre un ecosistema de 8+ TB de datos institucionales (+500 GB migrados de bases críticas legacy) en SQL Server y PostgreSQL para +50,000 usuarios (+10,000 concurrentes), cumpliendo 99.9% de uptime (RPO < 15 min y RTO < 1 hora). Reducción del 55% en latencia p95 de queries (-40% promedio) y automatización de pipelines ETL y tareas operativas con Python, Alembic y Bash (-60% de esfuerzo manual).",
        tags: ["SQL Server", "PostgreSQL", "Performance Tuning", "Alta Disponibilidad", "Python", "Alembic", "Bash", "T-SQL", "PL/pgSQL", "DRP/BCP"]
      },
      {
        role: "Coordinador de Infraestructura & Operaciones de Sistemas",
        company: "Gobierno de la Ciudad de Buenos Aires",
        period: "Enero 2020 - Diciembre 2023",
        description: "Coordinación de infraestructura híbrida Linux/Windows y administración de motores SQL Server, PostgreSQL, MySQL y MongoDB para portales ciudadanos (+100.000 usuarios mensuales). Garantía de 99.9% de SLA, reducción del 30% en incidentes en producción, optimización de backups nocturnos (-35% en ventanas y -95% en riesgo de pérdida) y capacitación en SQL a +30 funcionarios.",
        tags: ["SQL Server", "PostgreSQL", "MySQL", "MongoDB", "Linux", "Windows Server", "Backups", "SLA 99.9%", "Seguridad"]
      },
      {
        role: "Tutor Técnico / Docente Frontend (React.js & JavaScript)",
        company: "Coderhouse",
        period: "Julio 2022 - Septiembre 2022",
        description: "Mentoría técnica a +50 estudiantes en React.js, JavaScript (ES6+), HTML5, CSS3 y Git. Corrección de proyectos y enseñanza de buenas prácticas (integración de APIs, manejo del DOM), logrando una tasa de aprobación del 95%.",
        tags: ["React.js", "JavaScript", "HTML5", "CSS3", "Git", "Mentoría", "APIs"]
      },
      {
        role: "Database Administrator & Data Analyst",
        company: "Defensoría del Pueblo de la CABA",
        period: "Junio 2018 - Junio 2022",
        description: "Mantenimiento y soporte técnico de bases de datos relacionales (SQL Server y MySQL). Optimización de consultas avanzadas para la creación de más de 100 reportes y estadísticas institucionales para la toma de decisiones.",
        tags: ["SQL Server", "MySQL", "T-SQL", "Reportes", "BI", "Data Analysis"]
      }
    ],
    education: [
      {
        title: "Tecnicatura Universitaria en Sistemas de Información",
        institution: "Universidad Tecnológica Nacional (UTN)",
        period: "2024 - 2027 (En curso — 2º año)",
        description: "Formación técnica avanzada en desarrollo de software, arquitectura de sistemas, bases de datos relacionales, estructuras de datos, algoritmos y metodologías ágiles. Orientación en Java, Python y diseño de software."
      },
      {
        title: "Licenciatura en Relaciones del Trabajo (Estudios Avanzados)",
        institution: "Universidad de Buenos Aires (UBA)",
        period: "2016 - 2024 (Cursada Completa)",
        description: "Formación en gestión de recursos humanos, psicología del trabajo, dinámicas organizacionales y liderazgo. Esta dualidad me permite articular la tecnología con la visión y estrategia del negocio."
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
        tech: "Python, Microservices, Event-Driven Architecture, DLQ, Cloud Pub/Sub",
        link: "https://github.com/Fernandofarfan/OmniSync-Polyglot-Event-Driven-Engine",
        featured: true,
        category: "Backend / Microservicios"
      },
      {
        title: "Monitor CI/CD — Dashboard DORA",
        description: "Plataforma centralizada de monitoreo en tiempo real para visualizar el estado de pipelines y deployments, integrada con GitHub Actions y GitLab CI. Diseñada con TypeScript, Node.js y WebSockets para notificaciones en vivo bajo el estándar de Métricas DORA.",
        tech: "TypeScript, Node.js, WebSockets, Docker, PostgreSQL, GitHub Actions, DORA",
        link: "https://github.com/Fernandofarfan/Monitor-CI-CD",
        category: "Cloud / DevOps"
      },
      {
        title: "AI Job Matching Platform",
        description: "Plataforma inteligente con procesamiento de lenguaje natural (NLP) para scoring y matching de perfiles técnicos y ofertas de empleo.",
        tech: "Python, FastAPI, NLP, spaCy, Redis, Vector Search",
        link: "https://github.com/Fernandofarfan/ai-job-matching-platform",
        category: "Backend / IA"
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
        title: "IBM DevOps and Software Engineering",
        date: "Mayo 2025",
        id: "WECAD3GAK2VA",
        url: "https://www.coursera.org/account/accomplishments/specialization/WECAD3GAK2VA",
        skills: "DevOps, CI/CD, Docker, Kubernetes, TDD/BDD",
        featured: true
      },
      {
        title: "IBM Full Stack Software Developer (V5)",
        date: "Enero 2024",
        id: "Z1OJ8AI5UFDM",
        url: "https://www.coursera.org/account/accomplishments/specialization/Z1OJ8AI5UFDM",
        skills: "Python, React, Node.js, Docker, Kubernetes, SQL",
        featured: true
      },
      {
        title: "IBM Java Developer Professional Certificate",
        date: "Octubre 2025",
        id: "KU5H3PJ57M7W",
        url: "https://www.coursera.org/account/accomplishments/professional-cert/KU5H3PJ57M7W",
        skills: "Java 17, Spring Boot, Microservicios, SQL, POO",
        featured: true
      },
      {
        title: "IBM JavaScript Backend Developer (V2)",
        date: "Diciembre 2023",
        id: "7ZT98PBD1XAR",
        url: "https://www.coursera.org/account/accomplishments/specialization/7ZT98PBD1XAR",
        skills: "Node.js, Express, MongoDB, Microservicios, Async",
        featured: true
      },
      {
        title: "Google Data Analytics Professional Certificate",
        date: "Abril 2024",
        id: "QY27MQNBLVW9",
        url: "https://coursera.org/verify/professional-cert/QY27MQNBLVW9",
        skills: "Data Analytics, R, SQL, Estadística, BigQuery",
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
        title: "Google Cloud Fundamentals: Core Infrastructure",
        date: "Junio 2020",
        id: "XUBRBN5JAFNJ",
        url: "https://www.coursera.org/account/accomplishments/records/XUBRBN5JAFNJ",
        skills: "GCP, Compute Engine, GKE, VPC, Cloud Storage"
      },
      {
        title: "IBM Security for Professionals and DevOps",
        date: "Octubre 2023",
        id: "PA0KVDG6VGPZ",
        url: "https://www.credly.com/users/fernando-farfan.855a5067/badges",
        skills: "DevSecOps, App Security, IAM, Vulnerability Scanning"
      },
      {
        title: "IBM IT Scrum Master Specialization",
        date: "Julio 2024",
        id: "9HBDHURRLKZM",
        url: "https://coursera.org/verify/professional-cert/9HBDHURRLKZM",
        skills: "Scrum, Agile Leadership, Sprints, DevOps"
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
      }
    ],
    certBadge: "24+ Certificaciones Profesionales (11 Verificables en Credly)",
    skills: [
      {
        category: "Cloud, Virtualización & Infra",
        icon: "☁️",
        items: [
          "Google Cloud Platform (GCP)",
          "Microsoft Azure",
          "Terraform (IaC) & Terragrunt",
          "Kubernetes (GKE Autopilot)",
          "Microsoft Hyper-V & Failover Clustering",
          "VMware vSphere / ESXi & Nutanix AHV",
          "Migrate to VMs (M4CE) & Veeam VBR",
          "Shared VPC, Cloud NAT & Cloud IAP",
          "Docker & Multi-Stage Builds"
        ]
      },
      {
        category: "Backend & APIs",
        icon: "⚡",
        items: [
          "Python 3.10+ (FastAPI, Asyncio)",
          "SQLAlchemy 2.0 & Pydantic v2",
          "Celery & Async Workers",
          "Java 17 (Spring Boot)",
          "TypeScript & Node.js",
          "Django REST Framework",
          "RESTful & Streaming APIs (SSE/WS)",
          "Clean Architecture & DDD"
        ]
      },
      {
        category: "Bases de Datos & Data",
        icon: "🗄️",
        items: [
          "PostgreSQL (pgvector, Particionamiento)",
          "Microsoft SQL Server (AlwaysOn HA)",
          "Infraestructura IaaS para SAP HANA",
          "Google BigQuery & Lakehouse",
          "Redis (Caché distribuida, Pub/Sub)",
          "MySQL, MariaDB & MongoDB",
          "Alembic (Zero-Downtime Migrations)",
          "Performance Tuning (p95 -55%)"
        ]
      },
      {
        category: "DevOps, SRE & Observabilidad",
        icon: "📡",
        items: [
          "OpenTelemetry (OTel) & IBM Instana APM",
          "Prometheus, Grafana & Zabbix",
          "GitHub Actions & GitLab CI",
          "ArgoCD (GitOps)",
          "FinOps (Optimización de Costos Cloud)",
          "Métricas DORA & SLOs/SLIs",
          "TDD / BDD (Pytest, Jest)",
          "DevSecOps & IAM Governance"
        ]
      },
      {
        category: "Almacenamiento, Redes & OS",
        icon: "🏢",
        items: [
          "Almacenamiento SAN Fibre Channel (MPIO / CSV)",
          "Switch Embedded Teaming (SET) & Live Migration",
          "SUSE Linux (SLES for SAP) & Red Hat (RHEL)",
          "Ubuntu / Debian & Windows Server (AD)",
          "Alta Disponibilidad (SLA 99.9%) & DRP/BCP",
          "Gestión de DNS/DHCP (Infoblox) & Redes Híbridas",
          "Hardening de Seguridad & Auditoría",
          "Liderazgo Técnico & Metodologías Ágiles"
        ]
      },
      {
        category: "Frontend & UI",
        icon: "🎨",
        items: [
          "React.js (React 18/19)",
          "Next.js & Vite",
          "TypeScript (Strict Mode)",
          "Tailwind CSS",
          "TanStack Query (React Query)",
          "Redux Toolkit & Zustand",
          "HTML5 semántico & CSS3",
          "Core Web Vitals & Accesibilidad WCAG"
        ]
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
      subtitle: "Compartiendo conocimiento sobre arquitectura cloud, virtualización, bases de datos y backend.",
      comingSoon: "Próximamente más artículos...",
      articles: [
        {
          title: "FinOps Automatizado en GCP con Python y Terraform",
          excerpt: "Cómo diseñar motores autónomos de detección de recursos ociosos y generación de código IaC para reducir costos cloud un 28%.",
          tags: ["GCP", "Terraform", "FinOps", "Python"],
          date: "2026",
          link: null
        },
        {
          title: "Arquitectura Orientada a Eventos (EDA) y Dead Letter Queues",
          excerpt: "Diseño de microservicios asíncronos resilientes con FastAPI, Celery, Redis y manejo de transacciones distribuidas.",
          tags: ["FastAPI", "EDA", "Microservicios", "Python"],
          date: "2026",
          link: null
        },
        {
          title: "GitOps en Producción con GKE Autopilot, ArgoCD y Métricas DORA",
          excerpt: "Automatización de despliegues Zero-Downtime reduciendo el lead time de días a minutos con observabilidad OpenTelemetry.",
          tags: ["Kubernetes", "ArgoCD", "GitOps", "OpenTelemetry"],
          date: "2026",
          link: null
        },
        {
          title: "Optimización de Queries SQL en Bases de 8+ TB: 55% menos latencia",
          excerpt: "Técnicas avanzadas de performance tuning, indexación y reestructuración de transacciones en PostgreSQL y SQL Server.",
          tags: ["SQL Server", "PostgreSQL", "Performance Tuning", "DBA"],
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
      description: "¿Tenés un proyecto de infraestructura, migración cloud o backend en mente? ¡Escribime!",
      nameLabel: "Nombre",
      emailLabel: "Email",
      messageLabel: "Mensaje",
      sendButton: "Enviar Mensaje",
      or: "O contactame directamente por WhatsApp o LinkedIn"
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
      role: "Senior Cloud Architect & Software Engineer | Tech Lead | GCP, Azure, Virtualization, Python & Terraform",
      typingRoles: [
        "Senior Cloud Solutions Architect",
        "Technical Lead",
        "Cloud & Virtualization Specialist",
        "Senior Python Backend Engineer",
        "DBA & Data Infrastructure Lead"
      ],
      avatarUrl: "https://github.com/Fernandofarfan.png",
      githubUsername: "Fernandofarfan",
      description: "Senior Cloud Solutions Architect, Infrastructure Specialist & Tech Lead with over 8 years of experience designing resilient cloud-native and hybrid architectures on Google Cloud Platform (GCP) and Microsoft Azure, enterprise virtualization (Hyper-V, VMware vSphere, Nutanix AHV), Terraform (IaC) automation, high-availability databases, and high-concurrency asynchronous backend microservices in Python (FastAPI). Combining Information Systems (UTN) with Labor Relations (UBA) to lead engineering teams with technical rigor and business focus.",
      email: "fernando.farfan16@gmail.com",
      location: "Salta / Buenos Aires, Argentina (UTC-3 · Remote / Relocation)",
      status: "Available for work",
      downloadCvEs: "Descargar CV (ES)",
      downloadCvEn: "Download CV (EN)",
      yearsExp: "+8",
      certCount: "24+",
      social: {
        github: "https://github.com/Fernandofarfan",
        linkedin: "https://www.linkedin.com/in/guillermo-farfan",
        instagram: "https://www.instagram.com/fernando.farfan07/",
        credly: "https://www.credly.com/users/fernando-farfan.855a5067/badges"
      },
      cvLinkEs: "/CV/Guillermo_Farfan_CV.pdf",
      cvLinkEn: "/CV/Guillermo_Farfan_CV_EN.pdf"
    },
    about: [
      "I am <strong>Guillermo Fernando Farfan Romero</strong>, a Senior Cloud Solutions Architect, Infrastructure Specialist & Tech Lead with <strong>over 8 years of experience</strong> designing mission-critical architectures, data infrastructure, and backend microservices. I am currently pursuing a <strong>University Technician degree in Information Systems</strong> at the National Technological University (UTN) and hold advanced university coursework in Labor Relations from the University of Buenos Aires (UBA).",
      "My specialization covers <strong>multi-cloud architecture, enterprise virtualization, and IaC automation</strong>: designing Landing Zones and cloud deployments on Google Cloud Platform and Microsoft Azure with Terraform, workload migrations (M4CE, Veeam Backup & Replication), high-availability clusters on Microsoft Hyper-V and Linux/Windows environments (SLES, RHEL, Windows Server) backed by Fibre Channel SAN storage, container orchestration on Kubernetes (GKE Autopilot) with ArgoCD, and full-stack observability with OpenTelemetry, IBM Instana APM, Zabbix, Prometheus, and Grafana.",
      "In backend and data engineering, I design high-concurrency asynchronous microservices with <strong>Python (FastAPI, Celery, SQLAlchemy 2.0, Redis)</strong>, Java (Spring Boot), and TypeScript, alongside advanced database administration (PostgreSQL with pgvector, SQL Server AlwaysOn, BigQuery, and IaaS infrastructure for SAP HANA environments) and cloud cost governance (<strong>FinOps delivering 28% sustained savings in GCP</strong>). I hold <strong>professional certifications verified on Credly</strong> from IBM, Meta, Google, and Microsoft, and actively participate as a developer in international hackathons since 2022 (Aleph, Avalanche LatAm, PunaTech, NASA Space Apps)."
    ],
    experience: [
      {
        role: "Technical Lead & Senior Systems Engineer",
        company: "Reforest Latam",
        period: "May 2026 - Present",
        description: "Leading technical architecture, cloud/DevOps strategy, and ERP/telemetry platform development for a 6-engineer team. Achieved 28% sustained monthly cloud savings via FinOps on GCP. Designed GitOps pipelines with GitHub Actions and ArgoCD targeting GKE Autopilot and Cloud Run (lead time from 5 days to minutes, Zero-Downtime). Architected asynchronous FastAPI/Celery/Redis microservices (-45% query latency), PostgreSQL persistence with Alembic migrations, and >85% automated test coverage with Pytest/Jest under TDD.",
        tags: ["Python", "FastAPI", "GCP", "GKE Autopilot", "Cloud Run", "Terraform", "ArgoCD", "Docker", "Redis", "PostgreSQL", "FinOps", "Celery"]
      },
      {
        role: "Senior Cloud Architect, Infrastructure & Software Consultant",
        company: "Independent Consulting & Enterprise Projects (Under NDA)",
        period: "January 2021 - Present",
        description: "Multi-cloud architecture (GCP and Azure), enterprise virtualization, Terraform (IaC) automation, high-availability databases, and backend software engineering consulting under strict non-disclosure agreements (NDA). Designed Landing Zones (Shared VPC, Cloud NAT, IAP, GKE), corporate server migrations and high-availability IaaS infrastructure on Linux (SLES, RHEL) and Windows Server, Hyper-V / VMware virtualization clusters with Fibre Channel SAN storage and Veeam VBR backups, distributed observability (OpenTelemetry, APM, Prometheus/Grafana), and high-concurrency asynchronous microservices in Python (FastAPI, Celery, SQLAlchemy 2.0, Redis) and Java 17 (Spring Boot).",
        tags: ["GCP", "Azure", "Terraform", "Hyper-V", "GKE", "SLES / RHEL", "SAN FC", "Veeam VBR", "OpenTelemetry", "Python FastAPI", "Java Spring Boot", "SQL Server", "PostgreSQL"]
      },
      {
        role: "Senior Software Engineer & Database Administrator (DBA)",
        company: "University of Buenos Aires",
        period: "March 2018 - February 2024",
        description: "High Availability administration and performance tuning across an 8+ TB institutional data ecosystem (+500 GB zero-loss migration of critical legacy databases) on SQL Server and PostgreSQL serving +50,000 users (+10,000 concurrent active users), maintaining 99.9% uptime (RPO < 15 min, RTO < 1 hour). Cut p95 query latency by 55% (-40% average response time) and automated operational/ETL pipelines with Python, Alembic, and Bash (-60% manual workload).",
        tags: ["SQL Server", "PostgreSQL", "Performance Tuning", "High Availability", "Python", "Alembic", "Bash", "T-SQL", "PL/pgSQL", "DRP/BCP"]
      },
      {
        role: "Systems Infrastructure & Operations Coordinator",
        company: "Government of the City of Buenos Aires",
        period: "January 2020 - December 2023",
        description: "Coordinated hybrid Linux/Windows infrastructure and administered SQL Server, PostgreSQL, MySQL, and MongoDB engines for public portals serving 100,000+ monthly users. Maintained 99.9% SLA, reduced production incidents by 30%, optimized overnight backup windows (-35% duration, -95% data loss risk), and trained +30 government officials in SQL.",
        tags: ["SQL Server", "PostgreSQL", "MySQL", "MongoDB", "Linux", "Windows Server", "Backups", "SLA 99.9%", "Security"]
      },
      {
        role: "Technical Tutor / Frontend Instructor (React.js & JavaScript)",
        company: "Coderhouse",
        period: "July 2022 - September 2022",
        description: "Technical mentorship to 50+ students in React.js, JavaScript (ES6+), HTML5, CSS3, and Git. Project evaluations and teaching of best practices (REST API integration, DOM manipulation), achieving a 95% pass rate.",
        tags: ["React.js", "JavaScript", "HTML5", "CSS3", "Git", "Mentorship", "APIs"]
      },
      {
        role: "Database Administrator & Data Analyst",
        company: "Defensoría del Pueblo de la CABA",
        period: "June 2018 - June 2022",
        description: "Maintenance and technical administration of relational databases (SQL Server and MySQL). Advanced query optimization for the creation of 100+ institutional analytics reports for executive decision-making.",
        tags: ["SQL Server", "MySQL", "T-SQL", "Reporting", "BI", "Data Analysis"]
      }
    ],
    education: [
      {
        title: "University Technician in Information Systems",
        institution: "National Technological University (UTN)",
        period: "2024 - 2027 (In Progress — 2nd year)",
        description: "Advanced technical training in software development, systems architecture, relational databases, data structures, algorithms, and agile methodologies. Focus on Java, Python, and software design."
      },
      {
        title: "Bachelor's Studies in Labor Relations & HR (Advanced Coursework)",
        institution: "University of Buenos Aires (UBA)",
        period: "2016 - 2024 (Coursework Completed)",
        description: "Training in human resources management, organizational psychology, and leadership. This dual background allows me to bridge cutting-edge technology with strategic business goals."
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
        tech: "Python, Microservices, Event-Driven Architecture, DLQ, Cloud Pub/Sub",
        link: "https://github.com/Fernandofarfan/OmniSync-Polyglot-Event-Driven-Engine",
        featured: true,
        category: "Backend / Microservices"
      },
      {
        title: "Monitor CI/CD — DORA Dashboard",
        description: "Centralized real-time monitoring platform to visualize pipeline and deployment status, integrated with GitHub Actions and GitLab CI. Built with TypeScript, Node.js, and WebSockets for live notifications under DORA Metrics standards.",
        tech: "TypeScript, Node.js, WebSockets, Docker, PostgreSQL, GitHub Actions, DORA",
        link: "https://github.com/Fernandofarfan/Monitor-CI-CD",
        category: "Cloud / DevOps"
      },
      {
        title: "AI Job Matching Platform",
        description: "Intelligent platform leveraging Natural Language Processing (NLP) for candidate profile scoring and automated job matching.",
        tech: "Python, FastAPI, NLP, spaCy, Redis, Vector Search",
        link: "https://github.com/Fernandofarfan/ai-job-matching-platform",
        category: "Backend / AI"
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
        title: "IBM DevOps and Software Engineering",
        date: "May 2025",
        id: "WECAD3GAK2VA",
        url: "https://www.coursera.org/account/accomplishments/specialization/WECAD3GAK2VA",
        skills: "DevOps, CI/CD, Docker, Kubernetes, TDD/BDD",
        featured: true
      },
      {
        title: "IBM Full Stack Software Developer (V5)",
        date: "January 2024",
        id: "Z1OJ8AI5UFDM",
        url: "https://www.coursera.org/account/accomplishments/specialization/Z1OJ8AI5UFDM",
        skills: "Python, React, Node.js, Docker, Kubernetes, SQL",
        featured: true
      },
      {
        title: "IBM Java Developer Professional Certificate",
        date: "October 2025",
        id: "KU5H3PJ57M7W",
        url: "https://www.coursera.org/account/accomplishments/professional-cert/KU5H3PJ57M7W",
        skills: "Java 17, Spring Boot, Microservices, SQL, OOP",
        featured: true
      },
      {
        title: "IBM JavaScript Backend Developer (V2)",
        date: "December 2023",
        id: "7ZT98PBD1XAR",
        url: "https://www.coursera.org/account/accomplishments/specialization/7ZT98PBD1XAR",
        skills: "Node.js, Express, MongoDB, Microservices, Async",
        featured: true
      },
      {
        title: "Google Data Analytics Professional Certificate",
        date: "April 2024",
        id: "QY27MQNBLVW9",
        url: "https://coursera.org/verify/professional-cert/QY27MQNBLVW9",
        skills: "Data Analytics, R, SQL, Statistics, BigQuery",
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
        title: "Google Cloud Fundamentals: Core Infrastructure",
        date: "June 2020",
        id: "XUBRBN5JAFNJ",
        url: "https://www.coursera.org/account/accomplishments/records/XUBRBN5JAFNJ",
        skills: "GCP, Compute Engine, GKE, VPC, Cloud Storage"
      },
      {
        title: "IBM Security for Professionals and DevOps",
        date: "October 2023",
        id: "PA0KVDG6VGPZ",
        url: "https://www.credly.com/users/fernando-farfan.855a5067/badges",
        skills: "DevSecOps, App Security, IAM, Vulnerability Scanning"
      },
      {
        title: "IBM IT Scrum Master Specialization",
        date: "July 2024",
        id: "9HBDHURRLKZM",
        url: "https://coursera.org/verify/professional-cert/9HBDHURRLKZM",
        skills: "Scrum, Agile Leadership, Sprints, DevOps"
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
      }
    ],
    certBadge: "24+ Professional Certifications (11 Verified on Credly)",
    skills: [
      {
        category: "Cloud, Virtualization & Infra",
        icon: "☁️",
        items: [
          "Google Cloud Platform (GCP)",
          "Microsoft Azure",
          "Terraform (IaC) & Terragrunt",
          "Kubernetes (GKE Autopilot)",
          "Microsoft Hyper-V & Failover Clustering",
          "VMware vSphere / ESXi & Nutanix AHV",
          "Migrate to VMs (M4CE) & Veeam VBR",
          "Shared VPC, Cloud NAT & Cloud IAP",
          "Docker & Multi-Stage Builds"
        ]
      },
      {
        category: "Backend & APIs",
        icon: "⚡",
        items: [
          "Python 3.10+ (FastAPI, Asyncio)",
          "SQLAlchemy 2.0 & Pydantic v2",
          "Celery & Async Workers",
          "Java 17 (Spring Boot)",
          "TypeScript & Node.js",
          "Django REST Framework",
          "RESTful & Streaming APIs (SSE/WS)",
          "Clean Architecture & DDD"
        ]
      },
      {
        category: "Databases & Data",
        icon: "🗄️",
        items: [
          "PostgreSQL (pgvector, Partitioning)",
          "Microsoft SQL Server (AlwaysOn HA)",
          "SAP HANA IaaS Infrastructure",
          "Google BigQuery & Lakehouse",
          "Redis (Distributed Cache, Pub/Sub)",
          "MySQL, MariaDB & MongoDB",
          "Alembic (Zero-Downtime Migrations)",
          "Performance Tuning (p95 -55%)"
        ]
      },
      {
        category: "DevOps, SRE & Observability",
        icon: "📡",
        items: [
          "OpenTelemetry (OTel) & IBM Instana APM",
          "Prometheus, Grafana & Zabbix",
          "GitHub Actions & GitLab CI",
          "ArgoCD (GitOps)",
          "FinOps (Cloud Cost Optimization)",
          "DORA Metrics & SLOs/SLIs",
          "TDD / BDD (Pytest, Jest)",
          "DevSecOps & IAM Governance"
        ]
      },
      {
        category: "Storage, Networking & OS",
        icon: "🏢",
        items: [
          "Fibre Channel SAN Storage (MPIO / CSV)",
          "Switch Embedded Teaming (SET) & Live Migration",
          "SUSE Linux (SLES for SAP) & Red Hat (RHEL)",
          "Ubuntu / Debian & Windows Server (AD)",
          "High Availability (99.9% SLA) & DRP/BCP",
          "DNS/DHCP Management (Infoblox) & Hybrid Networks",
          "Security Hardening & Auditing",
          "Technical Leadership & Agile Methodologies"
        ]
      },
      {
        category: "Frontend & UI",
        icon: "🎨",
        items: [
          "React.js (React 18/19)",
          "Next.js & Vite",
          "TypeScript (Strict Mode)",
          "Tailwind CSS",
          "TanStack Query (React Query)",
          "Redux Toolkit & Zustand",
          "Semantic HTML5 & CSS3",
          "Core Web Vitals & WCAG Accessibility"
        ]
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
      subtitle: "Sharing knowledge about cloud architecture, virtualization, databases, and backend systems.",
      comingSoon: "More articles coming soon...",
      articles: [
        {
          title: "Automated FinOps on GCP with Python and Terraform",
          excerpt: "Designing autonomous engines to detect idle cloud resources and generate IaC remediation code for 28% cost reduction.",
          tags: ["GCP", "Terraform", "FinOps", "Python"],
          date: "2026",
          link: null
        },
        {
          title: "Event-Driven Architecture (EDA) and Dead Letter Queues",
          excerpt: "Building resilient asynchronous microservices with FastAPI, Celery, Redis, and distributed transaction handling.",
          tags: ["FastAPI", "EDA", "Microservices", "Python"],
          date: "2026",
          link: null
        },
        {
          title: "Production GitOps with GKE Autopilot, ArgoCD, and DORA Metrics",
          excerpt: "Automating Zero-Downtime deployments and cutting lead time from days to minutes with OpenTelemetry observability.",
          tags: ["Kubernetes", "ArgoCD", "GitOps", "OpenTelemetry"],
          date: "2026",
          link: null
        },
        {
          title: "SQL Query Optimization on 8+ TB Databases: 55% Latency Drop",
          excerpt: "Advanced performance tuning, indexing, and transactional redesign on PostgreSQL and SQL Server.",
          tags: ["SQL Server", "PostgreSQL", "Performance Tuning", "DBA"],
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
      description: "Do you have an infrastructure, cloud migration, or backend project in mind? Let's connect!",
      nameLabel: "Name",
      emailLabel: "Email",
      messageLabel: "Message",
      sendButton: "Send Message",
      or: "Or reach out to me directly via WhatsApp or LinkedIn"
    }
  }
};
