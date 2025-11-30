import React, { useState } from 'react';
import Section from './Section';

const ContactForm = ({ t }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, sending, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch('https://formspree.io/f/mblepwaw', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
                setTimeout(() => setStatus('idle'), 5000);
            }
        } catch (error) {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <Section id="contact" title={t.contact.formTitle}>
            <form onSubmit={handleSubmit} className="max-w-lg space-y-6">
                <div className="group">
                    <label htmlFor="name" className="block text-sm font-medium text-textSecondary mb-2 group-focus-within:text-primary-400 transition-colors">
                        {t.contact.formName}
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 outline-none transition-all duration-300 backdrop-blur-sm text-white placeholder-white/20 hover:bg-white/10"
                    />
                </div>

                <div className="group">
                    <label htmlFor="email" className="block text-sm font-medium text-textSecondary mb-2 group-focus-within:text-primary-400 transition-colors">
                        {t.contact.formEmail}
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 outline-none transition-all duration-300 backdrop-blur-sm text-white placeholder-white/20 hover:bg-white/10"
                    />
                </div>

                <div className="group">
                    <label htmlFor="message" className="block text-sm font-medium text-textSecondary mb-2 group-focus-within:text-primary-400 transition-colors">
                        {t.contact.formMessage}
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 outline-none transition-all duration-300 backdrop-blur-sm text-white placeholder-white/20 hover:bg-white/10 resize-none"
                    />
                </div>

                <button
                    type="submit"
                    disabled={status === 'sending' || status === 'success'}
                    className={`w-full px-6 py-4 font-bold rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg ${status === 'success'
                            ? 'bg-green-500 text-white cursor-default'
                            : 'bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white hover:shadow-glow'
                        } disabled:opacity-70 disabled:cursor-not-allowed`}
                >
                    {status === 'sending' ? (
                        <span className="flex items-center justify-center gap-2">
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            {t.contact.formSending}
                        </span>
                    ) : status === 'success' ? (
                        <span className="flex items-center justify-center gap-2 animate-scale-in">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            {t.contact.formSuccess}
                        </span>
                    ) : (
                        t.contact.formSend
                    )}
                </button>

                {status === 'error' && (
                    <p className="text-red-400 text-sm text-center animate-fade-in bg-red-500/10 py-2 rounded-lg border border-red-500/20">
                        {t.contact.formError}
                    </p>
                )}
            </form>
        </Section>
    );
};

export default ContactForm;
