
import React from "react";
import "./index.css";
import { motion } from "framer-motion";

const Section = ({ id, title, children }) => (
  <motion.section
    id={id}
    className="mb-12 md:mb-16"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 border-b border-slate-700 pb-2">{title}</h3>
    {children}
  </motion.section>
);

export default function App() {
  return (
    <main className="bg-background text-textPrimary font-sans min-h-screen">
      <div className="grid grid-cols-12 max-w-6xl mx-auto">
        <aside className="col-span-12 md:col-span-4 md:sticky md:top-0 md:h-screen p-6 md:p-8 flex flex-col md:justify-between bg-background">
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">Guillermo Fernando Farfan</h1>
            <h2 className="text-accent text-sm mt-1">Full Stack Developer | DBA | Data Analyst</h2>
            <p className="text-textSecondary mt-6">
              Desarrollador Full Stack y Administrador de Bases de Datos con más de 5 años de experiencia en soluciones digitales escalables y orientadas a datos.
            </p>
            <nav className="mt-8 md:mt-10 space-y-2 text-sm uppercase tracking-widest text-textSecondary hidden md:block">
              <a href="#about" className="block hover:text-accent">Sobre mí</a>
              <a href="#experience" className="block hover:text-accent">Experiencia</a>
              <a href="#education" className="block hover:text-accent">Educación</a>
              <a href="#projects" className="block hover:text-accent">Proyectos</a>
              <a href="#certifications" className="block hover:text-accent">Certificaciones</a>
              <a href="#skills" className="block hover:text-accent">Habilidades</a>
            </nav>
          </div>
          <div className="text-sm text-textSecondary mt-8 md:mt-10 text-center md:text-left">
            <p className="text-white font-semibold">Contacto</p>
            <p>Email: <a href="mailto:fernando.farfan16@gmail.com" className="text-accent">fernando.farfan16@gmail.com</a></p>
            <p>Ubicación: Buenos Aires, Argentina</p>
            <div className="flex items-center justify-center md:justify-start gap-4 pt-4">
              <a href="https://github.com/Fernandofarfan" target="_blank" className="hover:text-accent">GitHub</a>
              <a href="https://www.linkedin.com/in/guillermo-farfan" target="_blank" className="hover:text-accent">LinkedIn</a>
              <a href="https://www.instagram.com/fernando.farfan07/" target="_blank" className="hover:text-accent">Instagram</a>
            </div>
            <div className="pt-6">
              <a href="/CV-Guillermo-Fernando-Farfan.pdf" download className="px-4 py-2 bg-accent text-black font-semibold rounded hover:opacity-80 transition">Descargar CV</a>
            </div>
          </div>
        </aside>

        <div className="col-span-12 md:col-span-8 p-6 md:p-8 space-y-12 md:space-y-20">
          <Section id="about" title="Sobre mí">
            <div className="text-textSecondary space-y-4">
              <p>
                Soy un <strong>Full Stack Developer</strong> y <strong>Administrador de Bases de Datos</strong> con más de 5 años de experiencia, especializado en desarrollo backend y administración de bases de datos en entornos críticos.
              </p>
              <p>
                Mi expertise abarca el diseño e implementación de <strong>APIs RESTful y GraphQL</strong>, arquitecturas de microservicios, y la administración avanzada de bases de datos SQL y NoSQL. Consolido proyectos utilizando <strong>Node.js, Java/Spring Boot, .NET y Python</strong>, apoyados en infraestructura cloud y prácticas DevOps.
              </p>
              <p>
                Actualmente, me desempeño como <strong>Desarrollador Full Stack Freelance</strong>, donde diseño soluciones completas: interfaces intuitivas con React y Vue.js, lógica de servidor robusta, y administración de bases de datos con foco en rendimiento, seguridad y escalabilidad.
              </p>
              <p>
                He trabajado en entornos educativos, administrativos y tecnológicos como la <strong>UBA</strong>, el <strong>Gobierno de la Ciudad de Buenos Aires</strong>, <strong>Supra Brokers</strong> y <strong>Coderhouse</strong>. Esta experiencia me permitió liderar proyectos ágiles y multidisciplinarios, combinando desarrollo de software con gestión de datos estratégica.
              </p>
              <p>
                A lo largo de mi carrera completé más de una docena de certificaciones internacionales (IBM, Meta, Google, Microsoft) en áreas como desarrollo full stack, DevOps, análisis de datos y cloud computing.
              </p>
              <p>
                En mi tiempo libre, disfruto aprender nuevas tecnologías, analizar mercados financieros, compartir conocimientos y jugar partidas de League of Legends.
              </p>
            </div>
          </Section>

          <Section id="experience" title="Experiencia Profesional">
            <ul className="space-y-8 md:space-y-10 text-textSecondary">
              <li>
                <h4 className="text-lg font-semibold text-white">Technical & Digital Analyst</h4>
                <p className="italic">Supra Brokers · Junio 2025 - Agosto 2025</p>
                <p>Colaboración en proyectos de seguridad informática, documentación técnica de entornos y procesos de bases de datos. Automatización de flujos de trabajo y procesos ETL con SQL y Python. Gestión de incidentes y mantenimiento de plataformas de bases de datos.</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="bg-emerald-700 px-3 py-1 text-sm rounded-full text-white">SQL</span>
                  <span className="bg-emerald-700 px-3 py-1 text-sm rounded-full text-white">Python</span>
                  <span className="bg-emerald-700 px-3 py-1 text-sm rounded-full text-white">ETL</span>
                  <span className="bg-emerald-700 px-3 py-1 text-sm rounded-full text-white">Ciberseguridad</span>
                  <span className="bg-emerald-700 px-3 py-1 text-sm rounded-full text-white">Documentación</span>
                </div>
              </li>
              <li>
                <h4 className="text-lg font-semibold text-white">Desarrollador Full Stack Freelance</h4>
                <p className="italic">Independiente · Noviembre 2021 - Presente</p>
                <p>Desarrollo de aplicaciones web con Node.js, React, Spring Boot, Flask y .NET. Diseño, consumo y documentación de APIs RESTful y GraphQL. Implementación de arquitecturas backend con integración a PostgreSQL, MySQL y MongoDB. Automatización de procesos y despliegues con Python, Bash y PowerShell.</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="bg-emerald-700 px-3 py-1 text-sm rounded-full text-white">JavaScript</span>
                  <span className="bg-emerald-700 px-3 py-1 text-sm rounded-full text-white">React</span>
                  <span className="bg-emerald-700 px-3 py-1 text-sm rounded-full text-white">Vue.js</span>
                  <span className="bg-emerald-700 px-3 py-1 text-sm rounded-full text-white">Node.js</span>
                  <span className="bg-emerald-700 px-3 py-1 text-sm rounded-full text-white">Spring Boot</span>
                  <span className="bg-emerald-700 px-3 py-1 text-sm rounded-full text-white">Python</span>
                  <span className="bg-emerald-700 px-3 py-1 text-sm rounded-full text-white">GraphQL</span>
                  <span className="bg-emerald-700 px-3 py-1 text-sm rounded-full text-white">MongoDB</span>
                  <span className="bg-emerald-700 px-3 py-1 text-sm rounded-full text-white">MySQL</span>
                </div>
              </li>
              <li>
                <h4 className="text-lg font-semibold text-white">Administrador DBA | Administrativo</h4>
                <p className="italic">Universidad de Buenos Aires · Marzo 2018 - Mayo 2024</p>
                <p>Administración y soporte de SQL Server y PostgreSQL en entornos académicos y administrativos. Mantenimiento de integridad, seguridad y disponibilidad de los datos. Implementación y monitoreo de planes de backup y restore. Generación de reportes y consultas SQL para distintas áreas. Optimización de procesos e integración con sistemas de gestión.</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="bg-emerald-700 px-3 py-1 text-sm rounded-full text-white">SQL Server</span>
                  <span className="bg-emerald-700 px-3 py-1 text-sm rounded-full text-white">PostgreSQL</span>
                  <span className="bg-emerald-700 px-3 py-1 text-sm rounded-full text-white">MySQL</span>
                  <span className="bg-emerald-700 px-3 py-1 text-sm rounded-full text-white">Análisis de Datos</span>
                  <span className="bg-emerald-700 px-3 py-1 text-sm rounded-full text-white">Backup/Restore</span>
                </div>
              </li>
              <li>
                <h4 className="text-lg font-semibold text-white">Coordinador de Sistemas</h4>
                <p className="italic">GCBA · Febrero 2021 - Noviembre 2023</p>
                <p>Planes de respaldo, gestión documental técnica, y talleres sobre SQL y administración de datos.</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="bg-emerald-700 px-3 py-1 text-sm rounded-full text-white">MySQL</span>
                  <span className="bg-emerald-700 px-3 py-1 text-sm rounded-full text-white">MongoDB</span>
                  <span className="bg-emerald-700 px-3 py-1 text-sm rounded-full text-white">SQL</span>
                  <span className="bg-emerald-700 px-3 py-1 text-sm rounded-full text-white">Talleres Técnicos</span>
                  <span className="bg-emerald-700 px-3 py-1 text-sm rounded-full text-white">Documentación</span>
                </div>
              </li>
              <li>
                <h4 className="text-lg font-semibold text-white">Maestro</h4>
                <p className="italic">Coderhouse · Julio 2022 - Septiembre 2022</p>
                <p>Asistencia académica en frontend, progreso estudiantil y soporte técnico en React.</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="bg-emerald-700 px-3 py-1 text-sm rounded-full text-white">React</span>
                  <span className="bg-emerald-700 px-3 py-1 text-sm rounded-full text-white">JavaScript</span>
                  <span className="bg-emerald-700 px-3 py-1 text-sm rounded-full text-white">Docencia</span>
                </div>
              </li>
              <li>
                <h4 className="text-lg font-semibold text-white">Administrador DBA | Administrativo</h4>
                <p className="italic">Defensoría del Pueblo · Junio 2018 - Junio 2022</p>
                <p>Consultas SQL básicas, soporte de reportes e informes, mantenimiento de bases y definición de índices.</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="bg-emerald-700 px-3 py-1 text-sm rounded-full text-white">SQL</span>
                  <span className="bg-emerald-700 px-3 py-1 text-sm rounded-full text-white">Reportes</span>
                  <span className="bg-emerald-700 px-3 py-1 text-sm rounded-full text-white">PostgreSQL</span>
                </div>
              </li>
              <li>
                <h4 className="text-lg font-semibold text-white">Administrativo</h4>
                <p className="italic">FMC · Febrero 2016 - Marzo 2017</p>
                <p>Gestión de agendas y reportes administrativos con uso extensivo de hojas de cálculo.</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="bg-emerald-700 px-3 py-1 text-sm rounded-full text-white">Excel</span>
                  <span className="bg-emerald-700 px-3 py-1 text-sm rounded-full text-white">Organización</span>
                </div>
              </li>
            </ul>
          </Section>

          <Section id="education" title="Educación">
            <ul className="space-y-6 text-textSecondary">
              <li>
                <h4 className="text-lg font-semibold text-white">Tecnicatura en Sistemas</h4>
                <p className="italic">Universidad Tecnológica Nacional (UTN) · 2023 - Actualidad</p>
                <p>Formación técnica en desarrollo de software, arquitectura de sistemas, bases de datos y metodologías ágiles.</p>
              </li>
              <li>
                <h4 className="text-lg font-semibold text-white">Licenciatura en Relaciones Laborales</h4>
                <p className="italic">Universidad de Buenos Aires (UBA) · 2016 - 2025</p>
                <p>Formación en gestión de recursos humanos, derecho laboral y administración organizacional.</p>
              </li>
            </ul>
          </Section>

          <Section id="projects" title="Proyectos Destacados">
            <ul className="space-y-6 text-textSecondary">
              <li>
                <h4 className="text-lg font-semibold">Plataforma de Gestión Educativa</h4>
                <p>Sistema web para universidades que permite administrar alumnos, materias, horarios y evaluaciones. Incluye dashboards dinámicos y reportes automatizados.</p>
                <p className="text-sm text-accent">React, Node.js, Express, MongoDB</p>
              </li>
              <li>
                <h4 className="text-lg font-semibold">Sistema de Monitoreo Financiero</h4>
                <p>Herramienta de visualización y análisis de indicadores económicos usando Python, Pandas y dashboards en tiempo real con Plotly y Flask.</p>
                <p className="text-sm text-accent">Python, Flask, Plotly, SQL</p>
              </li>
              <li>
                <h4 className="text-lg font-semibold">App de Reservas y Gestión de Turnos</h4>
                <p>Aplicación moderna para clínicas y profesionales que permite agendar, gestionar disponibilidad y enviar recordatorios automáticos.</p>
                <p className="text-sm text-accent">Vue.js, Firebase, Tailwind CSS</p>
              </li>
            </ul>
          </Section>

          <Section id="certifications" title="Certificaciones Destacadas">
            <ul className="space-y-6 text-textSecondary">
              <li>
                <h4 className="text-lg font-semibold">IBM DevOps and Software Engineering</h4>
                <p>Mayo 2025 · ID: GRXXULQ80CH0</p>
                <p>Aptitudes: DevOps, CI/CD, Docker, Kubernetes, OpenShift, Microservices, Serverless, TDD/BDD</p>
              </li>
              <li>
                <h4 className="text-lg font-semibold">IBM IT Scrum Master</h4>
                <p>Julio 2024 · ID: 9HBDHURRLKZM</p>
                <p>Aptitudes: Scrum, DevOps, Scrum Master, Agile y Waterfall</p>
              </li>
              <li>
                <h4 className="text-lg font-semibold">Google Data Analytics</h4>
                <p>Abril 2024 · ID: QY27MQNBLVW9</p>
                <p>Aptitudes: Análisis de datos, R, Estadística, Almacenamiento de datos</p>
              </li>
              <li>
                <h4 className="text-lg font-semibold">IBM Full Stack Software Developer</h4>
                <p>Enero 2024 · ID: FQJ2RWTAQUT4</p>
                <p>Aptitudes: JavaScript, React, Node.js, Flask, Python, SQL, GitHub, Docker, Kubernetes</p>
              </li>
              <li>
                <h4 className="text-lg font-semibold">IBM Back-end JavaScript Developer</h4>
                <p>2023</p>
                <p>Aptitudes: Node.js, Express.js, JavaScript, APIs RESTful, MongoDB, Testing</p>
              </li>
              <li>
                <h4 className="text-lg font-semibold">IBM Back-End Developer</h4>
                <p>2023</p>
                <p>Aptitudes: Python, Django, Flask, APIs, Bases de datos, Microservicios</p>
              </li>
              <li>
                <h4 className="text-lg font-semibold">IBM Front-End Developer</h4>
                <p>2023</p>
                <p>Aptitudes: React, JavaScript, HTML5, CSS3, Responsive Design, UI/UX</p>
              </li>
              <li>
                <h4 className="text-lg font-semibold">Meta - Desarrollador Back-End</h4>
                <p>Junio 2023 · ID: RKT4LXWZTHV4</p>
                <p>Aptitudes: Python, Django REST, SQL, Git, Pruebas API</p>
              </li>
              <li>
                <h4 className="text-lg font-semibold">Meta - Desarrollador Front-End</h4>
                <p>Junio 2023 · ID: NDT53U2D6CJR</p>
                <p>Aptitudes: JavaScript, HTML, CSS, React, UX</p>
              </li>
              <li>
                <h4 className="text-lg font-semibold">Oracle Next Education Back-End</h4>
                <p>Febrero 2023 · ID: 99565610-8083-4f93-a8c3-0767db0e30a8</p>
                <p>Aptitudes: Java, Spring Boot</p>
              </li>
              <li>
                <h4 className="text-lg font-semibold">.NET FullStack Developer</h4>
                <p>Octubre 2022 · ID: 2UYKMBUZ79HJ</p>
                <p>Aptitudes: React, .NET Framework</p>
              </li>
              <li>
                <h4 className="text-lg font-semibold">Microsoft Data Analytics</h4>
                <p>2022</p>
                <p>Aptitudes: Power BI, Excel, SQL, Análisis de datos, Visualización</p>
              </li>
              <li>
                <h4 className="text-lg font-semibold">Google Cloud Fundamentals</h4>
                <p>Junio 2020 · ID: XUBRBN5JAFNJ</p>
                <p>Aptitudes: Google Cloud Platform, Infraestructura Cloud</p>
              </li>
            </ul>
          </Section>

          <Section id="skills" title="Tecnologías que manejo">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-textSecondary">
              <div>
                <h4 className="text-lg font-semibold text-white">Frontend</h4>
                <ul className="list-disc list-inside">
                  <li>HTML5 / CSS3</li>
                  <li>JavaScript / TypeScript</li>
                  <li>React, Vue.js</li>
                  <li>Bootstrap, Tailwind CSS</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">Backend</h4>
                <ul className="list-disc list-inside">
                  <li>Node.js, Express.js</li>
                  <li>Python (Flask, Django)</li>
                  <li>Java (Spring Boot)</li>
                  <li>PHP, .NET, Ruby</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">Base de Datos</h4>
                <ul className="list-disc list-inside">
                  <li>SQL Server, PostgreSQL, MySQL</li>
                  <li>MongoDB, MongoDB Atlas</li>
                  <li>Firebase</li>
                  <li>Administración DBA, Tuning, HA/DR</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">DevOps / Infraestructura</h4>
                <ul className="list-disc list-inside">
                  <li>Git, GitHub, GitLab</li>
                  <li>Docker, Kubernetes, OpenShift</li>
                  <li>CI/CD, Jenkins, GitHub Actions</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">Data & QA</h4>
                <ul className="list-disc list-inside">
                  <li>Python (pandas, NumPy, Matplotlib)</li>
                  <li>R, SQL Avanzado, T-SQL</li>
                  <li>TDD / BDD, API Testing</li>
                  <li>Power BI, ETL</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">Automatización & Herramientas</h4>
                <ul className="list-disc list-inside">
                  <li>PowerShell, Bash, Python Scripts</li>
                  <li>Jira, Trello</li>
                  <li>Teams, SharePoint, Outlook</li>
                  <li>TeamViewer</li>
                </ul>
              </div>
            </div>
          </Section>

        </div>
      </div>
    </main>
  );
}
