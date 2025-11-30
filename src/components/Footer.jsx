import React from "react";

const Footer = ({ t }) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-8 text-center text-sm text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800 mt-20">
            <p>
                &copy; {currentYear} Guillermo Fernando Farfan. {t?.footer?.rights || "All rights reserved."}
            </p>
            <p className="mt-2">
                Built with <span className="text-primary-600 dark:text-primary-400 font-medium">React</span> & <span className="text-primary-600 dark:text-primary-400 font-medium">Tailwind CSS</span>
            </p>
        </footer>
    );
};

export default Footer;
