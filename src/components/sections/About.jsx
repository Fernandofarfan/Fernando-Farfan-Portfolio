import React, { useState } from 'react';
import Section from '../Section';
import { Network } from 'lucide-react';
import ArchitectureModal from '../ArchitectureModal';

const About = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Section id="about" title={data.nav.about}>
      <div className="text-textSecondary space-y-4 leading-relaxed mb-6">
        {data.about.map((paragraph, index) => (
          <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} className="text-sm md:text-base" />
        ))}
      </div>
      
      <button 
        onClick={() => setIsModalOpen(true)}
        className="inline-flex items-center gap-2 bg-slate-800/80 hover:bg-slate-700 text-emerald-400 border border-emerald-500/30 hover:border-emerald-400 px-4 py-2 rounded-lg text-sm font-mono transition-all duration-300 shadow-lg shadow-emerald-500/5 hover:shadow-emerald-500/20"
      >
        <Network className="w-4 h-4" />
        {data.nav.about === 'Acerca de' ? 'Ver Arquitectura del Portafolio' : 'View Portfolio Architecture'}
      </button>

      <ArchitectureModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Section>
  );
};

export default About;
