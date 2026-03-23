
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
      role: "Desarrollador Full Stack | Backend Engineer | DBA",
      typingRoles: ["Desarrollador Full Stack", "Backend Engineer", "DBA", "Cloud-Native Architect"],
      avatarUrl: "https://github.com/Fernandofarfan.png",
      githubUsername: "Fernandofarfan",
      description: "+9 años transformando ideas en soluciones digitales escalables. Combino una sólida formación técnica en Sistemas de Información (UTN) con Relaciones Laborales (UBA). Especializado en arquitecturas Cloud-Native, automatización de procesos y bases de datos de alta disponibilidad.",
      email: "fernando.farfan16@gmail.com",
      location: "Buenos Aires, Argentina",
      status: "Disponible para trabajar",
      downloadCvEs: "Descargar CV (ES)",
      downloadCvEn: "Download CV (EN)",
      yearsExp: "+9",
      certCount: "24+",
      social: {
        github: "https://github.com/Fernandofarfan",
        linkedin: "https://www.linkedin.com/in/guillermo-farfan",
        instagram: "https://www.instagram.com/fernando.farfan07/",
        credly: "https://www.credly.com/users/fernando-farfan.855a5067/badges#credly"
      },
      cvLinkEs: "/Fernando-Farfan-Portfolio/CV_Guillermo_Farfan_ES.pdf",
      cvLinkEn: "/Fernando-Farfan-Portfolio/CV_Guillermo_Farfan_EN.pdf"
    },
    about: [
      "Soy <strong>Guillermo Fernando Farfan Romero</strong>, Desarrollador Full Stack & Backend Engineer con <strong>más de 9 años de experiencia</strong> en la industria tecnológica. Actualmente curso la <strong>Tecnicatura Universitaria en Sistemas de Información</strong> en la Universidad Tecnológica Nacional (UTN) y soy Licenciado en Relaciones Laborales por la Universidad de Buenos Aires (UBA).",
      "Mi especialización abarca el diseño de <strong>APIs RESTful de alto rendimiento</strong>, arquitecturas <strong>Cloud-Native</strong>, administración de bases de datos de alta disponibilidad y automatización de procesos con <strong>CI/CD, Docker y Terraform</strong>. He trabajado con tecnologías como <strong>Java (Spring Boot), Python (FastAPI/Django), Node.js, React y Vue.js</strong>.",
      "Busco desafíos en equipos de alto rendimiento donde pueda aplicar mi experiencia en <strong>backend engineering, DevOps y administración de datos</strong> para construir soluciones escalables que generen impacto real."
    ],
    experience: [
      {
        role: "Desarrollador Full Stack & Backend Engineer",
        company: "Freelance",
        period: "Noviembre 2021 - Actualidad",
        description: "Diseño y desarrollo de APIs RESTful de alto rendimiento (Node.js, Python, Java), plataformas de observabilidad y despliegue CI/CD con Docker y GitHub Actions. Reducción promedio del 30% en tiempos de respuesta.",
        tags: ["Node.js", "Python", "Java", "Docker", "CI/CD", "GitHub Actions", "React", "Vue.js"]
      },
      {
        role: "Technical & Digital Analyst",
        company: "Supra Brokers",
        period: "Julio 2025 - Agosto 2025",
        description: "Automatización de más de 10 procesos operativos con Python, AppScript y Power Automate reduciendo tiempos en un 60%. Desarrollo de dashboards en Power BI.",
        tags: ["Python", "AppScript", "Power Automate", "Power BI", "SQL", "Looker Studio"]
      },
      {
        role: "Administrador DBA",
        company: "Universidad de Buenos Aires",
        period: "Marzo 2018 - Mayo 2024",
        description: "Administración de SQL Server y PostgreSQL para +10,000 usuarios con 99.9% de uptime. Performance tuning y reducción del 40% en tiempos de respuesta de consultas.",
        tags: ["SQL Server", "PostgreSQL", "Performance Tuning", "Alta Disponibilidad", "Seguridad"]
      },
      {
        role: "Coordinador de Sistemas",
        company: "Gobierno de la Ciudad de Buenos Aires",
        period: "Febrero 2021 - Noviembre 2023",
        description: "Gestión y afinación de MySQL y MongoDB. Implementación de planes de backup automatizados.",
        tags: ["MySQL", "MongoDB", "Backup/Restore", "Tuning", "Documentación"]
      }
    ],
    education: [
      {
        title: "Tecnicatura en Sistemas de Información de Gestión",
        institution: "Universidad Tecnológica Nacional (UTN)",
        period: "2024 - 2027 (En curso)",
        description: "Formación en desarrollo de software, bases de datos, redes y metodologías ágiles."
      },
      {
        title: "Licenciatura en Relaciones Laborales",
        institution: "Universidad de Buenos Aires (UBA)",
        period: "2016 - 2024",
        description: "Formación en gestión de recursos humanos, legislación laboral y administración organizacional."
      },
      {
        title: "Bachillerato en Ciencias Sociales",
        institution: "Colegio Américo Vespucio",
        period: "2010 - 2015",
        description: ""
      }
    ],
    projects: [
      {
        title: "Autonomous-FinOps-Engine",
        description: "Motor backend autónomo en Python que escanea entornos GCP detectando infraestructura ociosa y genera código IaC en Terraform para remediación.",
        tech: "Python, GCP, Terraform",
        link: "https://github.com/ffarfan-labs/Autonomous-FinOps-Engine",
        featured: true,
        category: "Cloud/DevOps"
      },
      {
        title: "Monitor-CI-CD",
        description: "Dashboard en tiempo real para pipelines y deployments de integración continua. Proporciona alertas y métricas.",
        tech: "TypeScript, CI/CD, GitHub Actions",
        link: "https://github.com/ffarfan-labs/Monitor-CI-CD",
        category: "Cloud/DevOps"
      },
      {
        title: "Dashboard-Bases-Datos",
        description: "Plataforma de observabilidad en tiempo real interactiva para bases de datos relacionales y NoSQL.",
        tech: "Python, FastAPI, React",
        link: "https://github.com/ffarfan-labs/Dashboard-Bases-Datos",
        category: "Backend"
      },
      {
        title: "Optimizador-de-Computadora",
        description: "Script avanzado open source en PowerShell para optimizar el rendimiento en sistemas Windows.",
        tech: "PowerShell, Windows OS",
        link: "https://github.com/ffarfan-labs/Optimizador-de-Computadora-v2.0",
        category: "Herramientas"
      },
      {
        title: "rulos-locos",
        description: "Aplicación web interactiva desarrollada con TypeScript, React y funcionalidades modernas de UI/UX.",
        tech: "React, TypeScript, UI/UX",
        link: "https://github.com/Fernandofarfan/rulos-locos",
        category: "Frontend"
      }
    ],
    certifications: [
      {
        title: "IBM Java Developer Professional Certificate",
        date: "Octubre 2025",
        id: "KU5H3PJ57M7W",
        skills: "Java, SQL, Spring Framework, Microservices, POO",
        featured: true
      },
      {
        title: "IBM DevOps and Software Engineering",
        date: "Mayo 2025",
        id: "WECAD3GAK2VA",
        skills: "DevOps, CI/CD, Docker, Kubernetes, TDD/BDD",
        featured: true
      },
      {
        title: "IBM IT Scrum Master",
        date: "Julio 2024",
        id: "9HBDHURRLKZM",
        skills: "Scrum, DevOps, Agile",
        featured: true
      },
      {
        title: "Google Data Analytics",
        date: "Abril 2024",
        id: "QY27MQNBLVW9",
        skills: "Análisis de datos, R, Estadística",
        featured: true
      },
      {
        title: "Meta - Desarrollador Back-End",
        date: "Junio 2023",
        id: "RKT4LXWZTHV4",
        skills: "Python, Django REST, SQL, API Testing",
        featured: true
      },
      {
        title: "Meta - Desarrollador Front-End",
        date: "Junio 2023",
        id: "NDT53U2D6CJR",
        skills: "React, UX Design, HTML, CSS",
        featured: true
      },
      {
        title: "IBM Full Stack Software Developer",
        date: "Enero 2024",
        id: "Z1OJ8AI5UFDM",
        skills: "JS, React, Node.js, Python, Docker, Kubernetes, SQL"
      },
      {
        title: "IBM Back-end JavaScript Developer",
        date: "Diciembre 2023",
        id: "7ZT98PBD1XAR",
        skills: "Node.js, Express, MongoDB, Microservices"
      },
      {
        title: "IBM Back-End Development",
        date: "Octubre 2023",
        id: "PA0KVDG6VGPZ",
        skills: "Python, Docker, Kubernetes, OpenShift, Flask"
      },
      {
        title: "IBM Front-End Developer",
        date: "Octubre 2023",
        id: "W3JHUWJ3KJRY",
        skills: "React, Bootstrap, HTML, CSS, Git"
      },
      {
        title: "Oracle Next Education Back-End",
        date: "Febrero 2023",
        id: "99565610-8083-4f93-a8c3-0767db0e30a8",
        skills: "Java, Spring Boot"
      },
      {
        title: ".NET FullStack Developer",
        date: "Octubre 2022",
        id: "2UYKMBUZ79HJ",
        skills: "React, .NET Framework"
      },
      {
        title: "Microsoft Data Analytics",
        date: "Septiembre 2021",
        id: null,
        skills: "Análisis de datos, Power BI"
      },
      {
        title: "Microsoft Cybersecurity Fundamentals",
        date: "Abril 2021",
        id: null,
        skills: "Ciberseguridad"
      }
    ],
    certBadge: "24+ Certificaciones Profesionales",
    skills: [
      {
        category: "Backend & APIs",
        icon: "⚡",
        items: ["Java (Spring Boot)", "Python (FastAPI/Django)", "Node.js", "TypeScript"]
      },
      {
        category: "Bases de Datos",
        icon: "🗄️",
        items: ["SQL Server", "PostgreSQL", "MySQL", "MongoDB"]
      },
      {
        category: "DevOps & Cloud",
        icon: "☁️",
        items: ["Docker", "Kubernetes", "Terraform", "CI/CD", "Google Cloud Platform"]
      },
      {
        category: "Frontend",
        icon: "🎨",
        items: ["React", "Vue.js", "Tailwind CSS", "HTML/CSS"]
      },
      {
        category: "Data & Automatización",
        icon: "📊",
        items: ["Power BI", "Looker Studio", "RPA", "PowerShell"]
      }
    ],
    testimonials: [
      {
        name: "Juan Pablo Gambarotto",
        role: "Talent Acquisition Specialist",
        date: "16 de mayo de 2025",
        relation: "Trabajó con Guillermo en distintas empresas",
        quote: "Guillermo es un profesional comprometido, confiable y orientado a resultados. En cada proyecto demuestra perseverancia, análisis y una fuerte dedicación, cumpliendo siempre con los objetivos en tiempo y forma. Es un recurso valioso que aporta tanto a nivel laboral como humano, y sin duda suma significativamente a cualquier equipo."
      },
      {
        name: "Mónica Sch",
        role: "Regional IT Talent Acquisition | Senior Recruiter IT",
        date: "10 de mayo de 2024",
        relation: "Asesoró a Guillermo",
        quote: "Guillermo es un profesional comprometido con todos los desafíos que encara. Sabés que contás con él y tenes la certeza de que cumple con los objetivos del proyecto en tiempo y forma. Perseverante, analítico, con orientación a resultados, siempre se brinda al máximo. Es un recurso valioso que sumará muchísimo a cualquier equipo, tanto a nivel laboral como humano."
      }
    ],
    blog: {
      sectionTitle: "Artículos & Recursos",
      subtitle: "Compartiendo conocimiento sobre desarrollo, DevOps y bases de datos.",
      comingSoon: "Próximamente más artículos...",
      articles: [
        {
          title: "Optimización de Queries SQL: 40% más rápido",
          excerpt: "Técnicas avanzadas de performance tuning que apliqué administrando bases de datos para +10,000 usuarios en la UBA.",
          tags: ["SQL", "Performance", "DBA"],
          date: "2026",
          link: null
        },
        {
          title: "CI/CD con GitHub Actions y Docker",
          excerpt: "Cómo configurar pipelines de despliegue continuo para proyectos Node.js con contenedores Docker.",
          tags: ["DevOps", "Docker", "CI/CD"],
          date: "2026",
          link: null
        },
        {
          title: "Arquitecturas Cloud-Native en GCP",
          excerpt: "Patrones de diseño para aplicaciones escalables utilizando servicios nativos de Google Cloud Platform.",
          tags: ["GCP", "Cloud", "Terraform"],
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
      description: "¿Tienes un proyecto en mente o quieres conversar? ¡Envíame un mensaje!",
      nameLabel: "Nombre",
      emailLabel: "Email",
      messageLabel: "Mensaje",
      sendButton: "Enviar Mensaje",
      or: "O contáctame a través de mis redes sociales"
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
      role: "Full Stack Developer | Backend Engineer | DBA",
      typingRoles: ["Full Stack Developer", "Backend Engineer", "DBA", "Cloud-Native Architect"],
      avatarUrl: "https://github.com/Fernandofarfan.png",
      githubUsername: "Fernandofarfan",
      description: "+9 years transforming ideas into scalable digital solutions. I combine a solid technical background in Information Systems (UTN) with Labor Relations (UBA). Specialized in Cloud-Native architectures, process automation, and high-availability databases.",
      email: "fernando.farfan16@gmail.com",
      location: "Buenos Aires, Argentina",
      status: "Available for work",
      downloadCvEs: "Descargar CV (ES)",
      downloadCvEn: "Download CV (EN)",
      yearsExp: "+9",
      certCount: "24+",
      social: {
        github: "https://github.com/Fernandofarfan",
        linkedin: "https://www.linkedin.com/in/guillermo-farfan",
        instagram: "https://www.instagram.com/fernando.farfan07/",
        credly: "https://www.credly.com/users/fernando-farfan.855a5067/badges#credly"
      },
      cvLinkEs: "/Fernando-Farfan-Portfolio/CV_Guillermo_Farfan_ES.pdf",
      cvLinkEn: "/Fernando-Farfan-Portfolio/CV_Guillermo_Farfan_EN.pdf"
    },
    about: [
      "I am <strong>Guillermo Fernando Farfan Romero</strong>, a Full Stack Developer & Backend Engineer with <strong>over 9 years of experience</strong> in the tech industry. I am currently pursuing a <strong>University Technician degree in Information Systems</strong> at the National Technological University (UTN) and hold a degree in Labor Relations from the University of Buenos Aires (UBA).",
      "My specialization encompasses the design of <strong>high-performance RESTful APIs</strong>, <strong>Cloud-Native</strong> architectures, high-availability database administration, and process automation with <strong>CI/CD, Docker, and Terraform</strong>. I have worked with technologies such as <strong>Java (Spring Boot), Python (FastAPI/Django), Node.js, React, and Vue.js</strong>.",
      "I seek challenges in high-performance teams where I can apply my expertise in <strong>backend engineering, DevOps, and data administration</strong> to build scalable solutions that generate real impact."
    ],
    experience: [
      {
        role: "Full Stack Developer & Backend Engineer",
        company: "Freelance",
        period: "November 2021 - Present",
        description: "Design and development of high-performance RESTful APIs (Node.js, Python, Java), observability platforms, and CI/CD deployment with Docker and GitHub Actions. Average 30% reduction in response times.",
        tags: ["Node.js", "Python", "Java", "Docker", "CI/CD", "GitHub Actions", "React", "Vue.js"]
      },
      {
        role: "Technical & Digital Analyst",
        company: "Supra Brokers",
        period: "July 2025 - August 2025",
        description: "Automation of 10+ operational processes with Python, AppScript, and Power Automate, reducing turnaround times by 60%. Development of Power BI dashboards.",
        tags: ["Python", "AppScript", "Power Automate", "Power BI", "SQL", "Looker Studio"]
      },
      {
        role: "DBA Administrator",
        company: "University of Buenos Aires",
        period: "March 2018 - May 2024",
        description: "Administration of SQL Server and PostgreSQL for 10,000+ users with 99.9% uptime. Performance tuning and 40% reduction in query response times.",
        tags: ["SQL Server", "PostgreSQL", "Performance Tuning", "High Availability", "Security"]
      },
      {
        role: "Systems Coordinator",
        company: "Government of the City of Buenos Aires",
        period: "February 2021 - November 2023",
        description: "Management and tuning of MySQL and MongoDB. Implementation of automated backup plans.",
        tags: ["MySQL", "MongoDB", "Backup/Restore", "Tuning", "Documentation"]
      }
    ],
    education: [
      {
        title: "Technician in Management Information Systems",
        institution: "National Technological University (UTN)",
        period: "2024 - 2027 (In Progress)",
        description: "Training in software development, databases, networks, and agile methodologies."
      },
      {
        title: "Bachelor's Degree in Labor Relations",
        institution: "University of Buenos Aires (UBA)",
        period: "2016 - 2024",
        description: "Training in human resources management, labor legislation, and organizational administration."
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
        title: "Autonomous-FinOps-Engine",
        description: "Autonomous backend engine in Python that scans GCP environments detecting idle infrastructure and generates IaC code in Terraform for remediation.",
        tech: "Python, GCP, Terraform",
        link: "https://github.com/ffarfan-labs/Autonomous-FinOps-Engine",
        featured: true,
        category: "Cloud/DevOps"
      },
      {
        title: "Monitor CI/CD",
        description: "Real-time dashboard for DORA metrics, pipelines, and deployments.",
        tech: "Node.js, TypeScript, Vue 3, Docker, PostgreSQL",
        link: "https://github.com/ffarfan-labs/Monitor-CI-CD",
        category: "Cloud/DevOps"
      },
      {
        title: "Database Dashboard",
        description: "Real-time observability platform for relational and NoSQL databases (PostgreSQL, MySQL).",
        tech: "Python, FastAPI, React, Docker",
        link: "https://github.com/ffarfan-labs/Dashboard-Bases-Datos",
        category: "Backend"
      },
      {
        title: "PC Optimizer v2.0",
        description: "Professional open source optimization suite for Windows with 42 functions and web dashboard.",
        tech: "PowerShell, HTML/CSS",
        link: "https://github.com/ffarfan-labs/Optimizador-de-Computadora-v2.0",
        category: "Herramientas"
      },
      {
        title: "EmpleoIA",
        description: "Automated job search platform with intelligent scraping (Selenium) and CV matching using NLP.",
        tech: "Python, Flask, MongoDB, spaCy",
        link: "https://github.com/Fernandofarfan/ai-job-matching-platform",
        category: "Backend"
      }
    ],
    certifications: [
      {
        title: "IBM Java Developer Professional Certificate",
        date: "October 2025",
        id: "KU5H3PJ57M7W",
        skills: "Java, SQL, Spring Framework, Microservices, OOP",
        featured: true
      },
      {
        title: "IBM DevOps and Software Engineering",
        date: "May 2025",
        id: "WECAD3GAK2VA",
        skills: "DevOps, CI/CD, Docker, Kubernetes, TDD/BDD",
        featured: true
      },
      {
        title: "IBM IT Scrum Master",
        date: "July 2024",
        id: "9HBDHURRLKZM",
        skills: "Scrum, DevOps, Agile",
        featured: true
      },
      {
        title: "Google Data Analytics",
        date: "April 2024",
        id: "QY27MQNBLVW9",
        skills: "Data Analysis, R, Statistics",
        featured: true
      },
      {
        title: "Meta - Back-End Developer",
        date: "June 2023",
        id: "RKT4LXWZTHV4",
        skills: "Python, Django REST, SQL, API Testing",
        featured: true
      },
      {
        title: "Meta - Front-End Developer",
        date: "June 2023",
        id: "NDT53U2D6CJR",
        skills: "React, UX Design, HTML, CSS",
        featured: true
      },
      {
        title: "IBM Full Stack Software Developer",
        date: "January 2024",
        id: "Z1OJ8AI5UFDM",
        skills: "JS, React, Node.js, Python, Docker, Kubernetes, SQL"
      },
      {
        title: "IBM Back-end JavaScript Developer",
        date: "December 2023",
        id: "7ZT98PBD1XAR",
        skills: "Node.js, Express, MongoDB, Microservices"
      },
      {
        title: "IBM Back-End Development",
        date: "October 2023",
        id: "PA0KVDG6VGPZ",
        skills: "Python, Docker, Kubernetes, OpenShift, Flask"
      },
      {
        title: "IBM Front-End Developer",
        date: "October 2023",
        id: "W3JHUWJ3KJRY",
        skills: "React, Bootstrap, HTML, CSS, Git"
      },
      {
        title: "Oracle Next Education Back-End",
        date: "February 2023",
        id: "99565610-8083-4f93-a8c3-0767db0e30a8",
        skills: "Java, Spring Boot"
      },
      {
        title: ".NET FullStack Developer",
        date: "October 2022",
        id: "2UYKMBUZ79HJ",
        skills: "React, .NET Framework"
      },
      {
        title: "Microsoft Data Analytics",
        date: "September 2021",
        id: null,
        skills: "Data Analysis, Power BI"
      },
      {
        title: "Microsoft Cybersecurity Fundamentals",
        date: "April 2021",
        id: null,
        skills: "Cybersecurity"
      }
    ],
    certBadge: "24+ Professional Certifications",
    skills: [
      {
        category: "Backend & APIs",
        icon: "⚡",
        items: ["Java (Spring Boot)", "Python (FastAPI/Django)", "Node.js", "TypeScript"]
      },
      {
        category: "Databases",
        icon: "🗄️",
        items: ["SQL Server", "PostgreSQL", "MySQL", "MongoDB"]
      },
      {
        category: "DevOps & Cloud",
        icon: "☁️",
        items: ["Docker", "Kubernetes", "Terraform", "CI/CD", "Google Cloud Platform"]
      },
      {
        category: "Frontend",
        icon: "🎨",
        items: ["React", "Vue.js", "Tailwind CSS", "HTML/CSS"]
      },
      {
        category: "Data & Automation",
        icon: "📊",
        items: ["Power BI", "Looker Studio", "RPA", "PowerShell"]
      }
    ],
    testimonials: [
      {
        name: "Juan Pablo Gambarotto",
        role: "Talent Acquisition Specialist",
        date: "May 16, 2025",
        relation: "Worked with Guillermo in different companies",
        quote: "Guillermo is a committed, reliable, and result-oriented professional. In every project, he demonstrates perseverance, analysis, and strong dedication, always meeting objectives on time and in form. He is a valuable resource who contributes both professionally and personally, and undoubtedly adds significantly to any team."
      },
      {
        name: "Mónica Sch",
        role: "Regional IT Talent Acquisition | Senior Recruiter IT",
        date: "May 10, 2024",
        relation: "Advised Guillermo",
        quote: "Guillermo is a professional committed to all the challenges he faces. You know you can count on him and have the certainty that he meets project objectives on time and in form. Perseverant, analytical, result-oriented, he always gives his best. He is a valuable resource who will add a lot to any team, both professionally and personally."
      }
    ],
    blog: {
      sectionTitle: "Articles & Resources",
      subtitle: "Sharing knowledge about development, DevOps, and databases.",
      comingSoon: "More articles coming soon...",
      articles: [
        {
          title: "SQL Query Optimization: 40% Faster",
          excerpt: "Advanced performance tuning techniques I applied while administering databases for 10,000+ users at UBA.",
          tags: ["SQL", "Performance", "DBA"],
          date: "2026",
          link: null
        },
        {
          title: "CI/CD with GitHub Actions & Docker",
          excerpt: "How to set up continuous deployment pipelines for Node.js projects with Docker containers.",
          tags: ["DevOps", "Docker", "CI/CD"],
          date: "2026",
          link: null
        },
        {
          title: "Cloud-Native Architectures on GCP",
          excerpt: "Design patterns for scalable applications using Google Cloud Platform native services.",
          tags: ["GCP", "Cloud", "Terraform"],
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
