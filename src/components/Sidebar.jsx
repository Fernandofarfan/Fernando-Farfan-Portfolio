import React from "react";

const Sidebar = ({ profile, lang, setLang }) => {
    const { name, title, summary, contact } = profile;

    return (
        <aside className="col-span-12 md:col-span-4 sticky top-0 h-screen p-8 flex flex-col justify-between bg-background">
            <div>
                <h1 className="text-4xl font-bold leading-tight">{name}</h1>
                <h2 className="text-accent text-sm mt-1">{title}</h2>
                <p className="text-textSecondary mt-6">{summary}</p>

                <div className="mt-6 flex gap-2">
                    <button
                        onClick={() => setLang("es")}
                        className={`px-3 py-1 text-xs font-bold rounded transition ${lang === "es" ? "bg-accent text-black" : "bg-slate-800 text-white hover:bg-slate-700"}`}
                    >
                        ES
                    </button>
                    <button
                        onClick={() => setLang("en")}
                        className={`px-3 py-1 text-xs font-bold rounded transition ${lang === "en" ? "bg-accent text-black" : "bg-slate-800 text-white hover:bg-slate-700"}`}
                    >
                        EN
                    </button>
                </div>

                <nav className="mt-10 space-y-2 text-sm uppercase tracking-widest text-textSecondary">
                    <a href="#about" className="block hover:text-accent">Sobre mí</a>
                    <a href="#experience" className="block hover:text-accent">Experiencia</a>
                    <a href="#education" className="block hover:text-accent">Educación</a>
                    <a href="#projects" className="block hover:text-accent">Proyectos</a>
                    <a href="#certifications" className="block hover:text-accent">Certificaciones</a>
                    <a href="#skills" className="block hover:text-accent">Habilidades</a>
                </nav>
            </div>
            <div className="text-sm text-textSecondary mt-10">
                <p className="text-white font-semibold">Contacto</p>
                <p>Email: <a href={`mailto:${contact.email}`} className="text-accent">{contact.email}</a></p>
                <p>Ubicación: {contact.location}</p>
                <div className="flex items-center gap-4 pt-4">
                    <a href={contact.social.github} target="_blank" className="hover:text-accent">GitHub</a>
                    <a href={contact.social.linkedin} target="_blank" className="hover:text-accent">LinkedIn</a>
                    <a href={contact.social.instagram} target="_blank" className="hover:text-accent">Instagram</a>
                </div>
                <div className="pt-6">
                    <a href={contact.cv} download className="px-4 py-2 bg-accent text-black font-semibold rounded hover:opacity-80 transition">Descargar CV</a>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
