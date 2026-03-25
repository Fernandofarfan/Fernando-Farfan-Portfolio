import React, { useState } from 'react';
import Section from '../Section';
import { toast } from 'sonner';
import confetti from 'canvas-confetti';
import { Send, Loader2, CheckCircle2, Terminal } from 'lucide-react';
import { useLogger } from '../../context/LogContext';

const Contact = ({ data }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [deployLogs, setDeployLogs] = useState([]);
  const { addLog } = useLogger();

  const triggerConfetti = () => {
    const end = Date.now() + 2.5 * 1000;
    const colors = ['#64ffda', '#10b981', '#34d399'];

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);
    setDeployLogs(['> Initializing deployment pipeline...']);
    addLog('Ejecutando Pipeline CI/CD desde el formulario de contacto', 'system');

    const formData = new FormData(e.target);
    const formPayload = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };

    try {
      await new Promise(r => setTimeout(r, 600));
      setDeployLogs(prev => [...prev, '> Resolving destination DNS... [OK]']);
      
      await new Promise(r => setTimeout(r, 600));
      setDeployLogs(prev => [...prev, '> Compiling message payload... [OK]']);

      await new Promise(r => setTimeout(r, 600));
      setDeployLogs(prev => [...prev, '> Opening SMTP secure connection...']);

      const pageclipUrl = "https://send.pageclip.co/83aEvugDvi52U8eu3bb3L3UdW4wj9jeZ";
      const response = await fetch(pageclipUrl, {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formPayload)
      });

      if (response.ok || response.status === 200) {
        setDeployLogs(prev => [...prev, '> Deployment successful! [STATUS 200]']);
        await new Promise(r => setTimeout(r, 400));
        
        toast.success(data.contact.title === 'Contacto' ? '¡Mensaje enviado con éxito!' : 'Message sent successfully!', {
          description: data.contact.title === 'Contacto' ? 'Gracias por contactarme. Te responderé a la brevedad posible.' : 'Thanks for reaching out! I will reply very soon.'
        });
        setIsSuccess(true);
        triggerConfetti();
        e.target.reset();
        
        // Reset success state after 5 seconds
        setTimeout(() => {
          setIsSuccess(false);
          setDeployLogs([]);
        }, 5000);
      } else {
        throw new Error('Error en la respuesta del servidor');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setDeployLogs(prev => [...prev, '> Deployment FAILED [ERR_CONNECT]']);
      toast.error(data.contact.title === 'Contacto' ? 'Error al enviar' : 'Delivery Error', {
        description: data.contact.title === 'Contacto' ? 'Hubo un problema al enviar el mensaje. Por favor intenta de nuevo.' : 'There was an error sending the message. Please try again later.'
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
          
          <form onSubmit={handleSubmit} className="space-y-5 pageclip-form">
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
              disabled={isSubmitting || isSuccess}
              className={`w-full font-bold py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm shadow-lg ${
                isSubmitting ? 'bg-slate-900 border border-slate-700 text-emerald-400 py-3 block text-left px-5 font-mono overflow-hidden'
                : isSuccess ? 'bg-emerald-500 text-white shadow-emerald-500/20' 
                : 'bg-gradient-to-r from-accent to-emerald-400 text-background hover:shadow-accent/20 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0'
              }`}
            >
              {isSubmitting ? (
                <div className="w-full">
                  <div className="flex items-center gap-2 mb-1.5 text-xs text-slate-500 border-b border-slate-800 pb-1.5">
                    <Terminal className="w-3.5 h-3.5" /> CI/CD Pipeline
                  </div>
                  {deployLogs.map((log, i) => (
                    <div key={i} className="text-xs text-emerald-400 leading-tight">
                      {log}
                    </div>
                  ))}
                  <div className="text-xs text-emerald-400 leading-tight animate-pulse">_</div>
                </div>
              ) : isSuccess ? (
                <>
                  <CheckCircle2 className="w-5 h-5 animate-bounce" />
                  {data.contact.title === 'Contacto' ? '¡Enviado con Éxito!' : 'Successfully Sent!'}
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
