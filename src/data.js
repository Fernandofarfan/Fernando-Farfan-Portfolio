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
      role: "Senior Cloud Architect & Software Engineer | Tech Lead | GCP, Azure, Hyper-V 2025 & Terraform",
      typingRoles: [
        "Senior Cloud Solutions Architect",
        "Technical Lead",
        "Lead Infrastructure & Virtualization Specialist",
        "Senior Python Backend Engineer",
        "DBA & Data Infrastructure Lead"
      ],
      avatarUrl: "https://github.com/Fernandofarfan.png",
      githubUsername: "Fernandofarfan",
      description: "Senior Cloud Solutions Architect, Virtualization Specialist & Tech Lead con más de 8 años de experiencia liderando migraciones corporativas masivas (75 servidores hacia GCP con M4CE y SAP BW on HANA, clústeres Hyper-V 2025 de 55 TB SAN), arquitecturas cloud resilientes en Google Cloud y Azure, y microservicios backend asíncronos en Python (FastAPI). Combino formación en Sistemas (UTN) y Relaciones del Trabajo (UBA) para dirigir equipos de ingeniería alineando excelencia técnica, cultura ágil y objetivos de negocio.",
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
      "Soy <strong>Guillermo Fernando Farfan Romero</strong>, Senior Cloud Solutions Architect, Virtualization Specialist & Tech Lead con <strong>más de 8 años de experiencia</strong> en diseño de arquitecturas de misión crítica, ingeniería de datos y microservicios backend. Actualmente curso la <strong>Tecnicatura Universitaria en Sistemas de Información</strong> en la Universidad Tecnológica Nacional (UTN) y cuento con estudios universitarios avanzados en Relaciones del Trabajo por la Universidad de Buenos Aires (UBA).",
      "Mi especialización abarca <strong>migraciones multi-cloud y virtualización enterprise</strong>: migración masiva de 68 VMs con M4CE y 7 servidores SAP BW on HANA hacia GCP sobre SLES e instancias <code>m2-ultramem-208</code> de 5.8 TB RAM con Hyperdisk Extreme para Grupo Ramos; diseño, hardening y despliegue bare-metal de clúster HA Microsoft Hyper-V 2025 sobre 3 blades HPE Synergy con SAN HPE Alletra/3PAR de 55 TB CSV, SET 40 Gbps y Veeam VBR para Universal Group (certificado 5 días antes de cronograma); y observabilidad full-stack con IBM Instana APM y OpenTelemetry para la Junta de Beneficencia de Guayaquil reduciendo 45% el MTTR.",
      "En el área de backend y datos, desarrollo microservicios asíncronos de alta concurrencia con <strong>Python (FastAPI, Celery, SQLAlchemy 2.0, Redis)</strong>, Java (Spring Boot) y TypeScript, administración avanzada de bases de datos (PostgreSQL con pgvector, SQL Server, BigQuery) y optimización financiera (<strong>FinOps con 28% de reducción sostenida en GCP</strong>). Cuento con <strong>certificaciones profesionales verificadas en Credly</strong> emitidas por IBM, Meta, Google y Microsoft, y participación activa como desarrollador en hackathons desde 2022 (Aleph, Avalanche LatAm, PunaTech, NASA Space Apps)."
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
        role: "Lead Infrastructure Architect & Virtualization Specialist",
        company: "Universal Group, Inc. (Swan Technologies)",
        period: "Octubre 2026",
        description: "Lideré el assessment, diseño, hardening (COBIT/Qualys) y certificación en vivo (5 días antes de cronograma) del clúster HA HVDevCluster1 en Microsoft Hyper-V sobre Windows Server 2025 Datacenter en 3 blades HPE Synergy 480 Gen10 (108 cores, 1.5 TB RAM). Configuración de SAN Fibre Channel HPE Alletra/3PAR (11 CSVs = 55 TB + Quórum 16 GB, MPIO Round Robin), red SET 40 Gbps, Live Migration a 20 Gbps (0% pérdida) y migración piloto de 20 VMs (~4.05 TB en RHEL 8 UEFI Gen 2 y Windows Server) con Veeam Backup & Replication (VBR).",
        tags: ["Hyper-V 2025", "Windows Server 2025", "HPE Synergy", "HPE Alletra", "SAN FC", "SET 40G", "Live Migration", "Veeam VBR", "RHEL 8", "COBIT"]
      },
      {
        role: "Cloud Architect & Especialista en Migraciones Enterprise (GCP / Azure / SAP)",
        company: "Grupo Ramos",
        period: "Enero 2026 - Octubre 2026",
        description: "Lideré la migración masiva de 68 servidores corporativos (~19.5 TB en Fase II: Windows/Linux, SQL Server 2017/2019, AD, PAM, FortiAnalyzer 7 TB, Facturación NCF, Azul SFTP 5.4 TB) desde VMware a GCP con Migrate to Virtual Machines (M4CE), Landing Zone en Terraform (Shared VPC, Cloud NAT, IAP) y GKE. Aprovisioné el entorno IaaS en Terraform para migrar 7 servidores SAP BW on HANA desde Azure a GCP sobre SLES 15.5/15.6, escalando HANA PRD a m2-ultramem-208 (208 vCPUs, 5.8 TB RAM) con Hyperdisk Extreme, NLB interno para ASCS, Cloud KMS, e ingesta acelerada de ~2.9 TB a GCS vía SAP Backint + SAP CAR Rise en SLES 15 SP7.",
        tags: ["GCP", "Terraform", "M4CE", "SAP BW on HANA", "m2-ultramem", "Hyperdisk Extreme", "Shared VPC", "GKE", "SLES 15 SAP", "Azure to GCP", "FinOps"]
      },
      {
        role: "Consultor Senior en Observabilidad APM & SRE",
        company: "Junta de Beneficencia de Guayaquil",
        period: "Marzo 2026 - Mayo 2026",
        description: "Lideré la auditoría técnica, arquitectura y despliegue de observabilidad full-stack con IBM Instana APM sobre Nutanix AHV (.NET, IIS, SQL Server) articulado con OpenTelemetry y Zabbix, logrando una reducción del 45% en el MTTR. Configuración de Application Perspectives y Smart Alerts con IA para eliminar la fatiga de alertas.",
        tags: ["IBM Instana", "APM", "OpenTelemetry", "Nutanix AHV", "SQL Server", ".NET", "Zabbix", "Smart Alerts", "SRE"]
      },
      {
        role: "Senior Cloud Architect & Software Consultant",
        company: "Consultoría Independiente & Proyectos Enterprise",
        period: "Enero 2021 - Actualidad",
        description: "Consultoría de arquitectura cloud, virtualización enterprise, bases de datos e ingeniería de software backend para clientes corporativos, fintech e industriales bajo NDA. Proyectos: Universal Group (Hyper-V 2025 / SAN 55 TB / Veeam VBR), Grupo Ramos (Migración 75 servidores a GCP / SAP BW on HANA), Junta de Beneficencia de Guayaquil (IBM Instana APM), Ecovalores / Matriz OMS (middleware FastAPI para trading bursátil), Ganfeng Lithium (microservicios Java 17 y pipelines sobre GCP), SeSocio & Wenance / Falabella (APIs de baja latencia con Django REST Framework y microservicios de credit scoring).",
        tags: ["GCP", "Azure", "Hyper-V", "Terraform", "Python", "FastAPI", "Java Spring Boot", "PostgreSQL", "SQL Server", "IBM Instana", "Redis"]
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
        title: "Clúster HA Hyper-V 2025 & SAN 55 TB",
        description: "Arquitectura e implementación As-Built de alta disponibilidad en Microsoft Hyper-V sobre Windows Server 2025 en 3 blades HPE Synergy con SAN Fibre Channel HPE Alletra/3PAR (55 TB CSV), SET 40 Gbps y migración con Veeam VBR (Universal Group).",
        tech: "Hyper-V 2025, HPE Synergy, HPE Alletra, SAN FC, SET 40G, Veeam VBR, COBIT",
        link: "https://github.com/Fernandofarfan",
        category: "Virtualización / Enterprise"
      },
      {
        title: "Migración Multi-Cloud SAP & 68 VMs a GCP",
        description: "Migración corporativa masiva de 68 VMs con M4CE y Landing Zone en Terraform (Shared VPC), más aprovisionamiento IaaS para 7 servidores SAP BW on HANA (Azure → GCP) en instancias m2-ultramem-208 (5.8 TB RAM) con Hyperdisk Extreme e ingesta de ~2.9 TB vía SAP Backint.",
        tech: "GCP, Terraform, M4CE, SAP BW on HANA, SLES 15 SAP, Hyperdisk Extreme, GKE",
        link: "https://github.com/Fernandofarfan",
        category: "Cloud / Migraciones"
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
          "Microsoft Hyper-V 2025",
          "VMware vSphere / ESXi",
          "Terraform (IaC) & Terragrunt",
          "Kubernetes (GKE Autopilot)",
          "M4CE (Migrate to VMs)",
          "Shared VPC, Cloud NAT & IAP",
          "Docker & Multi-Stage Builds",
          "Veeam Backup & Replication (VBR)"
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
          "Microsoft SQL Server (2012–2022, AlwaysOn)",
          "SAP HANA 2.0 IaaS & Backint Connector",
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
          "IBM Instana APM",
          "OpenTelemetry (OTel)",
          "Zabbix & Smart Alerts",
          "GitHub Actions & GitLab CI",
          "ArgoCD (GitOps)",
          "Prometheus & Grafana",
          "FinOps (Optimización de Costos Cloud)",
          "Métricas DORA & SLOs/SLIs"
        ]
      },
      {
        category: "Almacenamiento SAN, Redes & OS",
        icon: "🏢",
        items: [
          "SAN Fibre Channel HPE Alletra / 3PAR",
          "Switch Embedded Teaming (SET 40 Gbps)",
          "Live Migration 20 Gbps (0% pérdida)",
          "SUSE Linux (SLES 15.5/15.6/15.7 for SAP)",
          "Red Hat (RHEL 7/8 UEFI, dracut, nmcli)",
          "Windows Server (2012–2025, Active Directory)",
          "Infoblox NIOS (DNS/DHCP)",
          "Hardening COBIT & Qualys"
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
          title: "Migración Masiva a GCP: 68 VMs y SAP BW on HANA",
          excerpt: "Cómo lideré la arquitectura multi-cloud con Terraform, M4CE y SUSE Linux for SAP escalando a m2-ultramem con Hyperdisk Extreme.",
          tags: ["GCP", "Terraform", "SAP HANA", "M4CE", "SLES"],
          date: "2026",
          link: null
        },
        {
          title: "Hyper-V 2025 en Producción: Clúster Bare-Metal con SAN 55 TB",
          excerpt: "Despliegue As-Built sobre blades HPE Synergy, SAN Fibre Channel HPE Alletra/3PAR y Live Migration a 20 Gbps sin downtime.",
          tags: ["Hyper-V 2025", "HPE Synergy", "SAN", "Veeam VBR"],
          date: "2026",
          link: null
        },
        {
          title: "IBM Instana APM: Reduciendo 45% el MTTR con OpenTelemetry e IA",
          excerpt: "Implementación standalone de IBM Instana en Nutanix AHV y configuración de Smart Alerts para eliminar la fatiga de alertas.",
          tags: ["APM", "IBM Instana", "Observabilidad", "OpenTelemetry"],
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
      role: "Senior Cloud Architect & Software Engineer | Tech Lead | GCP, Azure, Hyper-V 2025 & Terraform",
      typingRoles: [
        "Senior Cloud Solutions Architect",
        "Technical Lead",
        "Lead Infrastructure & Virtualization Specialist",
        "Senior Python Backend Engineer",
        "DBA & Data Infrastructure Lead"
      ],
      avatarUrl: "https://github.com/Fernandofarfan.png",
      githubUsername: "Fernandofarfan",
      description: "Senior Cloud Solutions Architect, Virtualization Specialist & Tech Lead with over 8 years of experience leading massive corporate migrations (75 servers to GCP via M4CE and SAP BW on HANA, 55 TB SAN Hyper-V 2025 HA clusters), resilient cloud architectures on Google Cloud and Azure, and high-concurrency asynchronous backend microservices in Python (FastAPI). Combining Information Systems (UTN) with Labor Relations (UBA) to lead engineering teams with technical rigor and business focus.",
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
      "I am <strong>Guillermo Fernando Farfan Romero</strong>, a Senior Cloud Solutions Architect, Virtualization Specialist & Tech Lead with <strong>over 8 years of experience</strong> designing mission-critical architectures, data infrastructure, and backend microservices. I am currently pursuing a <strong>University Technician degree in Information Systems</strong> at the National Technological University (UTN) and hold advanced university coursework in Labor Relations from the University of Buenos Aires (UBA).",
      "My specialization covers <strong>multi-cloud migrations and enterprise virtualization</strong>: mass migration of 68 VMs via M4CE and 7 SAP BW on HANA servers to GCP on SLES and <code>m2-ultramem-208</code> instances (5.8 TB RAM, Hyperdisk Extreme) for Grupo Ramos; bare-metal deployment, COBIT/Qualys hardening, and live certification of an HA Microsoft Hyper-V 2025 cluster on 3 HPE Synergy blades with 55 TB CSV Fibre Channel SAN and Veeam VBR for Universal Group (certified 5 days ahead of schedule); and full-stack observability with IBM Instana APM and OpenTelemetry for JBG cutting MTTR by 45%.",
      "In backend and data engineering, I design high-concurrency asynchronous microservices with <strong>Python (FastAPI, Celery, SQLAlchemy 2.0, Redis)</strong>, Java (Spring Boot), and TypeScript, alongside advanced database administration (PostgreSQL with pgvector, SQL Server, BigQuery) and cloud cost governance (<strong>FinOps delivering 28% sustained savings in GCP</strong>). I hold <strong>professional certifications verified on Credly</strong> from IBM, Meta, Google, and Microsoft, and actively participate as a developer in international hackathons since 2022 (Aleph, Avalanche LatAm, PunaTech, NASA Space Apps)."
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
        role: "Lead Infrastructure Architect & Virtualization Specialist",
        company: "Universal Group, Inc. (Swan Technologies)",
        period: "October 2026",
        description: "Led feasibility assessment, architectural design, COBIT/Qualys hardening, and live certification (5 days ahead of schedule) for the HVDevCluster1 HA cluster on Microsoft Hyper-V running Windows Server 2025 Datacenter across 3 HPE Synergy 480 Gen10 blades (108 cores, 1.5 TB RAM). Configured HPE Alletra/3PAR Fibre Channel SAN (11 CSVs = 55 TB + 16 GB Quorum, MPIO Round Robin), 40 Gbps SET networking, 20 Gbps Live Migration (0% packet loss), and orchestrated Veeam Backup & Replication (VBR) pilot migration of 20 VMs (~4.05 TB on RHEL 8 UEFI Gen 2 and Windows Server).",
        tags: ["Hyper-V 2025", "Windows Server 2025", "HPE Synergy", "HPE Alletra", "SAN FC", "SET 40G", "Live Migration", "Veeam VBR", "RHEL 8", "COBIT"]
      },
      {
        role: "Cloud Architect & Enterprise Migration Specialist (GCP / Azure / SAP)",
        company: "Grupo Ramos",
        period: "January 2026 - October 2026",
        description: "Led mass discovery, 6-wave planning, and migration of 68 corporate servers (~19.5 TB in Phase II: Windows/Linux, SQL Server 2017/2019, AD, PAM, FortiAnalyzer 7 TB, NCF Invoicing, Azul SFTP 5.4 TB) from VMware to GCP using Migrate to Virtual Machines (M4CE), Terraform Landing Zone (Shared VPC, Cloud NAT, IAP), and GKE. Architected Terraform IaaS to migrate 7 SAP BW on HANA servers from Azure to GCP on SLES 15.5/15.6, sizing primary HANA on m2-ultramem-208 (208 vCPUs, 5.8 TB RAM) with Hyperdisk Extreme, internal NLB for ASCS, Cloud KMS, and ~2.9 TB accelerated backup ingestion to GCS via SAP Backint + SAP CAR Rise on SLES 15 SP7.",
        tags: ["GCP", "Terraform", "M4CE", "SAP BW on HANA", "m2-ultramem", "Hyperdisk Extreme", "Shared VPC", "GKE", "SLES 15 SAP", "Azure to GCP", "FinOps"]
      },
      {
        role: "Senior Observability & APM Consultant",
        company: "Junta de Beneficencia de Guayaquil",
        period: "March 2026 - May 2026",
        description: "Led technical audit, architecture, and deployment of full-stack observability with IBM Instana APM on Nutanix AHV (.NET, IIS, SQL Server) integrated with OpenTelemetry and Zabbix, reducing MTTR by 45%. Configured Application Perspectives and AI-driven Smart Alerts to eliminate operational alert fatigue.",
        tags: ["IBM Instana", "APM", "OpenTelemetry", "Nutanix AHV", "SQL Server", ".NET", "Zabbix", "Smart Alerts", "SRE"]
      },
      {
        role: "Senior Cloud Architect & Software Consultant",
        company: "Independent Consulting & Enterprise Projects",
        period: "January 2021 - Present",
        description: "Cloud architecture, enterprise virtualization, database, and backend consulting for corporate, fintech, and industrial clients under NDA. Key engagements: Universal Group (Hyper-V 2025 / 55 TB SAN / Veeam VBR), Grupo Ramos (75-server migration to GCP / SAP BW on HANA), Junta de Beneficencia de Guayaquil (IBM Instana APM), Ecovalores / Matriz OMS (FastAPI high-frequency trading middleware), Ganfeng Lithium (Java 17 microservices on GCP), SeSocio & Wenance / Falabella (low-latency Django REST Framework APIs and credit scoring).",
        tags: ["GCP", "Azure", "Hyper-V", "Terraform", "Python", "FastAPI", "Java Spring Boot", "PostgreSQL", "SQL Server", "IBM Instana", "Redis"]
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
        title: "Hyper-V 2025 HA Cluster & 55 TB SAN",
        description: "As-Built architectural implementation of high-availability Microsoft Hyper-V on Windows Server 2025 across 3 HPE Synergy blades with HPE Alletra/3PAR Fibre Channel SAN (55 TB CSV), 40 Gbps SET networking, and Veeam VBR migration (Universal Group).",
        tech: "Hyper-V 2025, HPE Synergy, HPE Alletra, SAN FC, SET 40G, Veeam VBR, COBIT",
        link: "https://github.com/Fernandofarfan",
        category: "Virtualization / Enterprise"
      },
      {
        title: "SAP & 68-VM Multi-Cloud Migration to GCP",
        description: "Mass corporate migration of 68 VMs via M4CE and Terraform Landing Zone (Shared VPC), plus Terraform IaaS provisioning for 7 SAP BW on HANA servers (Azure → GCP) on m2-ultramem-208 (5.8 TB RAM) with Hyperdisk Extreme and ~2.9 TB ingestion via SAP Backint.",
        tech: "GCP, Terraform, M4CE, SAP BW on HANA, SLES 15 SAP, Hyperdisk Extreme, GKE",
        link: "https://github.com/Fernandofarfan",
        category: "Cloud / Migrations"
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
          "Microsoft Hyper-V 2025",
          "VMware vSphere / ESXi",
          "Terraform (IaC) & Terragrunt",
          "Kubernetes (GKE Autopilot)",
          "M4CE (Migrate to VMs)",
          "Shared VPC, Cloud NAT & IAP",
          "Docker & Multi-Stage Builds",
          "Veeam Backup & Replication (VBR)"
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
          "Microsoft SQL Server (2012–2022, AlwaysOn)",
          "SAP HANA 2.0 IaaS & Backint Connector",
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
          "IBM Instana APM",
          "OpenTelemetry (OTel)",
          "Zabbix & Smart Alerts",
          "GitHub Actions & GitLab CI",
          "ArgoCD (GitOps)",
          "Prometheus & Grafana",
          "FinOps (Cloud Cost Optimization)",
          "DORA Metrics & SLOs/SLIs"
        ]
      },
      {
        category: "SAN Storage, Networks & OS",
        icon: "🏢",
        items: [
          "HPE Alletra / 3PAR Fibre Channel SAN",
          "Switch Embedded Teaming (SET 40 Gbps)",
          "Live Migration 20 Gbps (0% loss)",
          "SUSE Linux (SLES 15.5/15.6/15.7 for SAP)",
          "Red Hat (RHEL 7/8 UEFI, dracut, nmcli)",
          "Windows Server (2012–2025, Active Directory)",
          "Infoblox NIOS (DNS/DHCP)",
          "COBIT & Qualys Hardening"
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
          title: "Mass Migration to GCP: 68 VMs and SAP BW on HANA",
          excerpt: "Leading multi-cloud architecture with Terraform, M4CE, and SUSE Linux for SAP scaling to m2-ultramem with Hyperdisk Extreme.",
          tags: ["GCP", "Terraform", "SAP HANA", "M4CE", "SLES"],
          date: "2026",
          link: null
        },
        {
          title: "Hyper-V 2025 in Production: Bare-Metal Cluster with 55 TB SAN",
          excerpt: "As-Built deployment on HPE Synergy blades, HPE Alletra/3PAR Fibre Channel SAN, and 20 Gbps Live Migration with zero downtime.",
          tags: ["Hyper-V 2025", "HPE Synergy", "SAN", "Veeam VBR"],
          date: "2026",
          link: null
        },
        {
          title: "IBM Instana APM: Reducing 45% MTTR with OpenTelemetry and AI",
          excerpt: "Standalone IBM Instana implementation on Nutanix AHV and AI Smart Alerts configuration to eliminate operational noise.",
          tags: ["APM", "IBM Instana", "Observability", "OpenTelemetry"],
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
