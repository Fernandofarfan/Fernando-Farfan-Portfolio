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
          <p className="text-textSecondary mb-8 text-lg">{data.contact.description}</p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-textSecondary mb-2">{data.contact.nameLabel}</label>
                <input type="text" name="name" id="name" required className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-textSecondary mb-2">{data.contact.emailLabel}</label>
                <input type="email" name="email" id="email" required className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-textSecondary mb-2">{data.contact.messageLabel}</label>
              <textarea name="message" id="message" rows="4" required className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"></textarea>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-accent text-black font-bold py-3 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Enviando...' : data.contact.sendButton}
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
