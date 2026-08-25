import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Building2, ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';

const INQUIRY_TYPES = [
    'Vaccine Development Advisory',
    'Regulatory Strategy',
    'Technology Transfer',
    'Quality Management System',
    'Diagnostics Development',
    'Other / General Enquiry',
];

import { useLanguage } from '../../../context/LanguageContext';

const ConsultingCTA = () => {
    const { t } = useLanguage();
    const sectionRef = useRef<HTMLDivElement>(null);
    const inView = useInView(sectionRef, { once: true, margin: '-100px' });
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        organisation: '',
        type: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [activeField, setActiveField] = useState<string | null>(null);

    const inquiryTypes = [
        t('megaMenu.vaccines') || 'Vaccine Development Advisory',
        t('strategicAdvisory.services.0.title') || 'Regulatory Strategy',
        t('megaMenu.licensing') || 'Technology Transfer',
        'Quality Management System',
        t('megaMenu.diagnostics') || 'Diagnostics Development',
        t('contact.form.options.general') || 'Other / General Enquiry',
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
        }, 1500);
    };

    return (
        <section
            ref={sectionRef}
            id="consulting-cta"
            className="py-24 md:py-32 relative overflow-hidden font-sans"
            style={{
                background: 'linear-gradient(135deg, #0a1628 0%, #1a2a4a 50%, #0a2010 100%)',
            }}
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full"
                    style={{ background: 'radial-gradient(circle, rgba(25,85,166,0.25) 0%, transparent 70%)' }}
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full"
                    style={{ background: 'radial-gradient(circle, rgba(92,118,37,0.2) 0%, transparent 70%)' }}
                    animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
                />
                {/* Grid */}
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
                        backgroundSize: '60px 60px',
                    }}
                />
            </div>

            <div className="max-w-[1300px] mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Left: Headline & Info */}
                    <div>
                        <ScrollReveal direction="up">
                            
                            <h2 className="text-[24px] md:text-[36px] font-medium tracking-wide text-left mb-6 text-white">
                                <SplitTitle title="Start Your Advisory Journey" />
                            </h2>
                        </ScrollReveal>
                        <ScrollReveal direction="up" delay={0.2}>
                            <p className="text-white/60 text-lg font-medium leading-relaxed mb-10 max-w-md">
                                Tell us about your project and we'll connect you with the right expert within 24 hours.
                            </p>
                        </ScrollReveal>

                        {/* What to Expect */}
                        <div className="space-y-4 mb-10">
                            <p className="text-white/40 text-[11px] font-bold tracking-[0.3em] uppercase">
                                What to Expect
                            </p>
                            {[
                                'Initial response within 24 hours',
                                'Confidential project discussion',
                                'No-obligation scoping call',
                                'Matched with domain expert',
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                                    className="flex items-center gap-3"
                                >
                                    <CheckCircle2 className="w-4 h-4 text-[#a8edac] flex-shrink-0" />
                                    <span className="text-white/75 text-[15px] font-medium">{item}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Contact Info Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {[
                                { icon: Mail, label: 'Email', value: 'advisory@techinvention.in' },
                                { icon: Building2, label: 'Office', value: 'New Delhi, India' },
                            ].map((contact, i) => {
                                const ContactIcon = contact.icon;
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={inView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                                        className="flex items-center gap-3 p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
                                    >
                                        <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                                            <ContactIcon className="w-4 h-4 text-white/70" />
                                        </div>
                                        <div>
                                            <p className="text-white/40 text-[10px] font-bold tracking-[0.2em] uppercase">
                                                {contact.label}
                                            </p>
                                            <p className="text-white/90 text-[13px] font-semibold">{contact.value}</p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-10">
                            <AnimatePresence mode="wait">
                                {submitted ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="flex flex-col items-center justify-center text-center py-12 gap-5"
                                    >
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                                            className="w-20 h-20 rounded-full bg-[#a8edac]/20 flex items-center justify-center"
                                        >
                                            <CheckCircle2 className="w-10 h-10 text-[#a8edac]" />
                                        </motion.div>
                                        <h3 className="text-2xl font-bold text-white">{t('contact.form.successTitle') || "Enquiry Sent!"}</h3>
                                        <p className="text-white/60 font-medium leading-relaxed max-w-xs">
                                            {t('contact.form.successDesc') || "Our advisory team will reach out within 24 hours. Thank you for your interest."}
                                        </p>
                                        <button
                                            onClick={() => { setSubmitted(false); setFormState({ name: '', email: '', organisation: '', type: '', message: '' }); }}
                                            className="mt-4 text-[12px] font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors"
                                        >
                                            {t('contact.form.sendAnother') || "Send Another Enquiry"}
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        onSubmit={handleSubmit}
                                        className="flex flex-col gap-5 text-left"
                                    >
                                        {/* Name + Email */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {[
                                                { key: 'name', label: t('contact.form.name') || 'Full Name', placeholder: t('contact.form.namePlaceholder') || 'Your Name', type: 'text' },
                                                { key: 'email', label: t('contact.form.email') || 'Email Address', placeholder: t('contact.form.emailPlaceholder') || 'Your Email', type: 'email' },
                                            ].map((field) => (
                                                <div key={field.key} className="flex flex-col gap-1.5">
                                                    <label className="text-white/60 text-[11px] font-bold tracking-[0.2em] uppercase">
                                                        {field.label}
                                                    </label>
                                                    <input
                                                        type={field.type}
                                                        required
                                                        placeholder={field.placeholder}
                                                        value={formState[field.key as keyof typeof formState]}
                                                        onChange={(e) => setFormState(prev => ({ ...prev, [field.key]: e.target.value }))}
                                                        onFocus={() => setActiveField(field.key)}
                                                        onBlur={() => setActiveField(null)}
                                                        className="w-full px-4 py-3.5 rounded-xl bg-white/8 border transition-all duration-300 text-white placeholder-white/30 text-[14px] font-medium outline-none"
                                                        style={{
                                                            borderColor: activeField === field.key ? 'rgba(93,184,255,0.6)' : 'rgba(255,255,255,0.1)',
                                                            backgroundColor: activeField === field.key ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.06)',
                                                            boxShadow: activeField === field.key ? '0 0 0 3px rgba(93,184,255,0.15)' : 'none',
                                                        }}
                                                    />
                                                </div>
                                            ))}
                                        </div>

                                        {/* Organisation */}
                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-white/60 text-[11px] font-bold tracking-[0.2em] uppercase">
                                                {t('contact.form.organisation') || "Organisation"}
                                            </label>
                                            <input
                                                type="text"
                                                placeholder={t('contact.form.orgPlaceholder') || "Your company / institution"}
                                                value={formState.organisation}
                                                onChange={(e) => setFormState(prev => ({ ...prev, organisation: e.target.value }))}
                                                onFocus={() => setActiveField('org')}
                                                onBlur={() => setActiveField(null)}
                                                className="w-full px-4 py-3.5 rounded-xl border transition-all duration-300 text-white placeholder-white/30 text-[14px] font-medium outline-none"
                                                style={{
                                                    borderColor: activeField === 'org' ? 'rgba(93,184,255,0.6)' : 'rgba(255,255,255,0.1)',
                                                    backgroundColor: activeField === 'org' ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.06)',
                                                    boxShadow: activeField === 'org' ? '0 0 0 3px rgba(93,184,255,0.15)' : 'none',
                                                }}
                                            />
                                        </div>

                                        {/* Inquiry Type */}
                                        <div className="flex flex-col gap-2">
                                            <label className="text-white/60 text-[11px] font-bold tracking-[0.2em] uppercase">
                                                {t('contact.form.enquiryType') || "Advisory Type"}
                                            </label>
                                            <div className="flex flex-wrap gap-2">
                                                {inquiryTypes.map((type) => (
                                                    <button
                                                        key={type}
                                                        type="button"
                                                        onClick={() => setFormState(prev => ({ ...prev, type }))}
                                                        className="px-3.5 py-1.5 rounded-full text-[12px] font-semibold transition-all duration-200"
                                                        style={{
                                                            backgroundColor: formState.type === type ? 'rgba(93,184,255,0.25)' : 'rgba(255,255,255,0.06)',
                                                            borderWidth: '1px',
                                                            borderStyle: 'solid',
                                                            borderColor: formState.type === type ? 'rgba(93,184,255,0.5)' : 'rgba(255,255,255,0.1)',
                                                            color: formState.type === type ? 'rgba(93,184,255,1)' : 'rgba(255,255,255,0.5)',
                                                        }}
                                                    >
                                                        {type}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Message */}
                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-white/60 text-[11px] font-bold tracking-[0.2em] uppercase">
                                                {t('contact.form.message') || "Project Brief"}
                                            </label>
                                            <textarea
                                                rows={4}
                                                required
                                                placeholder={t('contact.form.messagePlaceholder') || "Tell us about your project, timeline, and specific advisory needs..."}
                                                value={formState.message}
                                                onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                                                onFocus={() => setActiveField('msg')}
                                                onBlur={() => setActiveField(null)}
                                                className="w-full px-4 py-3.5 rounded-xl border transition-all duration-300 text-white placeholder-white/30 text-[14px] font-medium outline-none resize-none"
                                                style={{
                                                    borderColor: activeField === 'msg' ? 'rgba(93,184,255,0.6)' : 'rgba(255,255,255,0.1)',
                                                    backgroundColor: activeField === 'msg' ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.06)',
                                                    boxShadow: activeField === 'msg' ? '0 0 0 3px rgba(93,184,255,0.15)' : 'none',
                                                }}
                                            />
                                        </div>

                                        {/* Submit */}
                                        <motion.button
                                            type="submit"
                                            disabled={loading}
                                            whileHover={{ scale: loading ? 1 : 1.02 }}
                                            whileTap={{ scale: loading ? 1 : 0.98 }}
                                            className="group w-full flex items-center justify-center gap-3 bg-gradient-to-r from-brand-primary to-[#1244a0] text-white py-4 rounded-xl font-bold text-[13px] tracking-[0.2em] uppercase transition-all duration-300 hover:shadow-2xl hover:shadow-brand-primary/30 relative overflow-hidden disabled:opacity-70"
                                        >
                                            {loading ? (
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                            ) : (
                                                <>
                                                    <span>{t('contact.form.submit') || "Send Advisory Enquiry"}</span>
                                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                                </>
                                            )}
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                                        </motion.button>

                                        <p className="text-white/30 text-[11px] text-center font-medium">
                                            {t('contact.form.confidentiality') || "All enquiries are treated with strict confidentiality."}
                                        </p>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ConsultingCTA;
