import React, { useState } from 'react';
import Section from '../Section';
import { toast } from 'sonner';

const Contact = ({ data }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const formPayload = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };

    try {
      const email = import.meta.env.VITE_CONTACT_EMAIL;
      const response = await fetch(`https://formsubmit.co/ajax/${email}`, {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(formPayload)
      });

      if (response.ok) {
        toast.success('¡Mensaje enviado!', {
          description: 'Gracias por contactarme. Te responderé a la brevedad.'
        });
        e.target.reset();
      } else {
        throw new Error('Error en la respuesta del servidor');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Error al enviar', {
        description: 'Hubo un error al enviar el mensaje. Por favor intenta nuevamente.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" title={data.contact.title}>
      <div className="grid grid-cols-1 gap-12">
        <div>
          <p className="text-textSecondary mb-8 text-base leading-relaxed">{data.contact.description}</p>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-xs font-medium text-textSecondary mb-2 uppercase tracking-wider">{data.contact.nameLabel}</label>
                <input type="text" name="name" id="name" required className="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-accent/50 transition-all duration-300 placeholder:text-slate-600" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-medium text-textSecondary mb-2 uppercase tracking-wider">{data.contact.emailLabel}</label>
                <input type="email" name="email" id="email" required className="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-accent/50 transition-all duration-300 placeholder:text-slate-600" placeholder="john@example.com" />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-medium text-textSecondary mb-2 uppercase tracking-wider">{data.contact.messageLabel}</label>
              <textarea name="message" id="message" rows="4" required className="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-accent/50 transition-all duration-300 resize-none placeholder:text-slate-600" placeholder="Your message..."></textarea>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-accent to-emerald-400 text-background font-bold py-3.5 rounded-xl hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
                  Enviando...
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                  {data.contact.sendButton}
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
