import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Send, HelpCircle, Briefcase, FileSignature } from 'lucide-react';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';

const ENQUIRY_CARDS = [
    {
        icon: Briefcase,
        title: 'Business Development',
        desc: 'Explore strategic partnerships, technology licensing, and product collaborations.',
        email: 'bd@techinvention.biz',
        color: '#1955A6',
    },
    {
        icon: FileSignature,
        title: 'Advisory & Consulting',
        desc: 'Inquire about product development, regulatory strategy, and QMS support.',
        email: 'advisory@techinvention.biz',
        color: '#5C7625',
    },
    {
        icon: HelpCircle,
        title: 'General Support',
        desc: 'Get answers to general questions about our technologies and operations.',
        email: 'connect@techinvention.biz',
        color: '#1955A6',
    },
];

import { useLanguage } from '../../../context/LanguageContext';

const ContactSection = () => {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        enquiryType: '',
        organisation: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setError('');

        if (name === 'name') {
            const cleanVal = value.replace(/[^a-zA-Z\s]/g, '');
            setFormData(prev => ({ ...prev, name: cleanVal }));
        } else if (name === 'phone') {
            const cleanVal = value.replace(/\D/g, '').slice(0, 10);
            setFormData(prev => ({ ...prev, phone: cleanVal }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!formData.name.trim()) {
            setError('Please enter your Full Name.');
            return;
        }

        if (!/^[a-zA-Z\s]+$/.test(formData.name.trim())) {
            setError('Full Name must contain only letters and spaces (no numbers).');
            return;
        }

        if (!formData.email.trim()) {
            setError('Please enter your Email Address.');
            return;
        }

        if (formData.phone.length !== 10) {
            setError('Contact number must be exactly 10 numeric digits.');
            return;
        }

        if (!formData.enquiryType) {
            setError('Please select an Enquiry Type.');
            return;
        }

        setLoading(true);

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok || !data.success) {
                throw new Error(data.error || 'Failed to submit enquiry.');
            }

            setSubmitted(true);
            setFormData({ name: '', email: '', phone: '', enquiryType: '', organisation: '', message: '' });
            window.location.href = '/thank-you';
        } catch (err: any) {
            setError(err.message || 'An error occurred while sending your enquiry.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="py-20 bg-brand-background relative font-sans overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-primary/3 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-brand-secondary/3 blur-3xl pointer-events-none" />

            <div className="max-w-[1300px] mx-auto px-6 relative z-10">
                
                {/* 2. Contact Form Section */}
                <div id="contact-form" className="mb-24">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-2xl overflow-hidden shadow-lg border border-slate-200/60">

                        {/* Left: Info Panel */}
                        <div className="lg:col-span-5 bg-[#1955A6] text-white p-10 md:p-14 flex flex-col justify-start gap-10 text-left">
                            <div>
                                <span className="text-white font-bold tracking-[0.35em] text-[11px] mb-4 block uppercase">{t('contact.getInTouch') || "Get In Touch"}</span>
                                <h2 className="text-[22px] md:text-[32px] font-bold leading-snug mb-6 text-white">
                                    {t('contact.conversationTitle') || t('contact.title') || "Let's Start the Conversation"}
                                </h2>
                                <p className="text-slate-300 text-[15px] md:text-[16px] leading-relaxed">
                                    {t('contact.desc') || "Send us your enquiry and the appropriate team will get back to you at the earliest. Whether your interest lies in products, partnerships, technology, manufacturing, advisory or training support, we look forward to connecting with you."}
                                </p>
                            </div>

                            {/* Contact details */}
                            <div className="space-y-5">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                        <Phone className="w-4 h-4 text-white" />
                                    </div>
                                    <a href="tel:+912240052123" dir="ltr" className="text-slate-300 text-sm hover:text-white transition-colors">+91 2240052123</a>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                        <Mail className="w-4 h-4 text-white" />
                                    </div>
                                    <a href="mailto:connect@techinvention.biz" dir="ltr" className="text-slate-300 text-sm hover:text-white transition-colors break-all">connect@techinvention.biz</a>
                                </div>
                            </div>
                        </div>

                        {/* Right: Contact Form */}
                        <div className="lg:col-span-7 bg-white p-10 md:p-14">
                            <AnimatePresence mode="wait">
                                {submitted ? (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="text-center py-16 flex flex-col items-center gap-4 h-full justify-center"
                                    >
                                        <div className="w-16 h-16 rounded-full bg-[#0d2a55]/10 text-[#0d2a55] flex items-center justify-center mb-2">
                                            <Send className="w-6 h-6" />
                                        </div>
                                        <h4 className="text-xl font-bold text-slate-900">{t('careers.applyForm.successTitle') || t('thankYou.title') || "Message Received!"}</h4>
                                        <p className="text-slate-500 text-[15px] font-medium max-w-sm">
                                            {t('thankYou.desc') || "Thank you for contacting us. Our team will get back to you shortly."}
                                        </p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            {/* Full Name */}
                                            <div className="flex flex-col gap-1.5 text-left">
                                                <label className="text-slate-700 font-bold text-xs uppercase tracking-wider">{t('contact.form.name') || "Full Name"} *</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder={t('contact.form.namePlaceholder') || "Your Name"}
                                                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all text-slate-900 placeholder-slate-400 text-[14px] font-medium outline-none focus:bg-white focus:border-[#1955A6] focus:ring-1 focus:ring-[#1955A6]/30"
                                                />
                                            </div>

                                            {/* Email Address */}
                                            <div className="flex flex-col gap-1.5 text-left">
                                                <label className="text-slate-700 font-bold text-xs uppercase tracking-wider">{t('contact.form.email') || "Email Address"} *</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder={t('contact.form.emailPlaceholder') || "Your Email"}
                                                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all text-slate-900 placeholder-slate-400 text-[14px] font-medium outline-none focus:bg-white focus:border-[#1955A6] focus:ring-1 focus:ring-[#1955A6]/30"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            {/* Contact Phone Number */}
                                            <div className="flex flex-col gap-1.5 text-left">
                                                <label className="text-slate-700 font-bold text-xs uppercase tracking-wider">{t('contact.form.phone') || "Contact Number"} *</label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    required
                                                    maxLength={10}
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    placeholder={t('contact.form.phonePlaceholder') || "Mobile Number"}
                                                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all text-slate-900 placeholder-slate-400 text-[14px] font-medium outline-none focus:bg-white focus:border-[#1955A6] focus:ring-1 focus:ring-[#1955A6]/30"
                                                />
                                            </div>

                                            {/* Organisation */}
                                            <div className="flex flex-col gap-1.5 text-left">
                                                <label className="text-slate-700 font-bold text-xs uppercase tracking-wider">{t('contact.form.organisation') || "Organisation"}</label>
                                                <input
                                                    type="text"
                                                    name="organisation"
                                                    value={formData.organisation}
                                                    onChange={handleChange}
                                                    placeholder={t('contact.form.orgPlaceholder') || "Your Organisation"}
                                                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all text-slate-900 placeholder-slate-400 text-[14px] font-medium outline-none focus:bg-white focus:border-[#1955A6] focus:ring-1 focus:ring-[#1955A6]/30"
                                                />
                                            </div>
                                        </div>

                                        {/* Enquiry Type */}
                                        <div className="flex flex-col gap-1.5 text-left">
                                            <label className="text-slate-700 font-bold text-xs uppercase tracking-wider">{t('contact.form.enquiryType') || "Enquiry Type"} *</label>
                                            <select
                                                name="enquiryType"
                                                required
                                                value={formData.enquiryType}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all text-slate-900 text-[14px] font-medium outline-none focus:bg-white focus:border-[#1955A6] focus:ring-1 focus:ring-[#1955A6]/30 cursor-pointer"
                                            >
                                                 <option value="" disabled>{t('contact.form.selectEnquiry') || "Select Enquiry Type"}</option>
                                                 <option value="Strategy">{t('contact.form.options.strategy') || "Strategy"}</option>
                                                 <option value="R&D">{t('common.rd') || "R&D"}</option>
                                                 <option value="Licensing">{t('megaMenu.ipPortfolio') || "Licensing"}</option>
                                                 <option value="Advisory">{t('navbar.consulting') || "Advisory"}</option>
                                                 <option value="General Support">{t('contact.form.options.general') || "General Support"}</option>
                                            </select>
                                        </div>

                                        {/* Message (Optional) */}
                                        <div className="flex flex-col gap-1.5 text-left">
                                            <label className="text-slate-700 font-bold text-xs uppercase tracking-wider">{t('contact.form.message') || "Message"}</label>
                                            <textarea
                                                name="message"
                                                rows={4}
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder={t('contact.form.messagePlaceholder') || "Describe your enquiry here..."}
                                                className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all text-slate-900 placeholder-slate-400 text-[14px] font-medium outline-none resize-none focus:bg-white focus:border-[#1955A6] focus:ring-1 focus:ring-[#1955A6]/30"
                                            />
                                        </div>

                                        {error && (
                                            <p className="text-red-500 text-xs font-semibold">{error}</p>
                                        )}

                                        {/* Submit */}
                                        <motion.button
                                            type="submit"
                                            disabled={loading}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="group w-full flex items-center justify-center gap-3 bg-[#1955A6] hover:bg-[#1955A6]/90 disabled:opacity-50 text-white px-8 py-4 rounded-xl font-bold text-[13px] tracking-[0.1em] uppercase transition-all duration-300 shadow-md hover:shadow-lg"
                                        >
                                            <span>{loading ? (t('contact.form.sending') || 'Sending...') : (t('contact.form.submit') || 'Send Message')}</span>
                                            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </motion.button>
                                    </form>
                                )}
                            </AnimatePresence>
                        </div>

                    </div>
                </div>

                {/* 3. Location Section */}
                <div className="mb-24">
                    <div className="mb-10 text-left">
                        <ScrollReveal direction="up">
                            <h2 className="text-[24px] md:text-[36px] font-medium tracking-wide text-slate-900 mb-3">
                                <SplitTitle title={t('contact.locations.title') || "Location & Address"} />
                            </h2>
                            <p className="text-slate-600 text-[15px] md:text-[16px] max-w-3xl leading-relaxed">
                                {t('contact.locations.desc') || "Visit our corporate office or connect with us directly for partnership discussions, product enquiries, strategic collaborations and institutional communication."}
                            </p>
                        </ScrollReveal>
                    </div>

                    {/* Map + Details Stacked */}
                    <div className="flex flex-col gap-8 rounded-2xl overflow-hidden border border-slate-200/60 shadow-md bg-white p-6 sm:p-8">

                        {/* Side-by-Side Maps & Addresses */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Map & Address 1 */}
                            <div className="flex flex-col gap-4">
                                <h4 className="text-[13px] md:text-[14px] font-bold text-[#1955A6] uppercase tracking-wider text-center lg:text-left">{t('contact.locations.gcmcTitle') || "Corporate Office & Manufacturing Site (GCMC)"}</h4>
                                <div className="w-full h-[300px] sm:h-[350px] overflow-hidden border border-slate-200/60 shadow-sm">
                                    <iframe
                                        src="https://maps.google.com/maps?q=Plot%20No.%20EL-40,%20Mahape%20MIDC%20Electric%20Zone,%20MIDC%20Industrial%20Area,%20Mahape%20Village,%20Navi%20Mumbai,%20Thane,%20Maharashtra,%20400710&t=&z=16&ie=UTF8&iwloc=&output=embed"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0, display: 'block' }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>
                                <div className="flex flex-col items-center gap-2 pt-2 text-center">
                                    <h5 className="text-[13px] font-bold text-[#1a9090] leading-snug flex items-center justify-center gap-2 mb-1">
                                        <MapPin className="w-4 h-4 text-[#1955A6] shrink-0" />
                                        <span>{t('contact.locations.gcmcTitle') || "Corporate Office & Manufacturing Site (GCMC)"}</span>
                                    </h5>
                                    <p className="text-[#1955A6] text-[13px] leading-relaxed font-medium max-w-md">
                                        Plot No. EL-40, Mahape MIDC Electric Zone, MIDC Industrial Area, Mahape Village, Navi Mumbai, Thane, Maharashtra, 400710
                                    </p>
                                </div>
                            </div>

                            {/* Map & Address 2 */}
                            <div className="flex flex-col gap-4">
                                <h4 className="text-[13px] md:text-[14px] font-bold text-[#1955A6] uppercase tracking-wider text-center lg:text-left">{t('contact.locations.horizonTitle') || "R&D Centre (HORIZON)"}</h4>
                                <div className="w-full h-[300px] sm:h-[350px] overflow-hidden border border-slate-200/60 shadow-sm">
                                    <iframe
                                        src="https://maps.google.com/maps?q=Horizon%20by%20Techinvention%20Lifecare,%20EL-125,%20Mahape%20MIDC%20Electric%20Zone,%20MIDC%20Industrial%20Area,%20Mahape%20Village,%20Navi%20Mumbai,%20Thane,%20Maharashtra&t=&z=16&ie=UTF8&iwloc=&output=embed"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0, display: 'block' }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>
                                <div className="flex flex-col items-center gap-2 pt-2 text-center">
                                    <h5 className="text-[13px] font-bold text-[#1a9090] leading-snug flex items-center justify-center gap-2 mb-1">
                                        <MapPin className="w-4 h-4 text-[#1955A6] shrink-0" />
                                        <span>{t('contact.locations.horizonTitle') || "R&D Centre (HORIZON)"}</span>
                                    </h5>
                                    <p className="text-[#1955A6] text-[13px] leading-relaxed font-medium max-w-md">
                                        EL-125, Mahape MIDC Electric Zone, MIDC Industrial Area, Mahape Village, Navi Mumbai, Thane, Maharashtra
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Phone & Email Container (Centered) */}
                        <div className="border-t border-slate-100 pt-8 mt-4 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 w-full">
                            {/* Phone */}
                            <div className="flex flex-col items-center gap-1.5 text-center">
                                <h4 className="text-[13px] font-bold text-[#1a9090] flex items-center justify-center gap-2 mb-1">
                                    <Phone className="w-4 h-4 text-[#1955A6] shrink-0" />
                                    <span>{t('contact.phoneEnquiries') || "Phone Enquiries"}</span>
                                </h4>
                                <a href="tel:+912240052123" dir="ltr" className="text-slate-600 text-[13px] hover:text-[#1955A6] transition-colors font-medium">
                                    +91 22 4005 2123
                                </a>
                            </div>

                            {/* Separator */}
                            <div className="hidden sm:block w-px h-8 bg-slate-200" />

                            {/* Email */}
                            <div className="flex flex-col items-center gap-1.5 text-center">
                                <h4 className="text-[13px] font-bold text-[#1a9090] flex items-center justify-center gap-2 mb-1">
                                    <Mail className="w-4 h-4 text-[#1955A6] shrink-0" />
                                    <span>{t('contact.emailAddress') || "Email Address"}</span>
                                </h4>
                                <a href="mailto:connect@techinvention.biz" dir="ltr" className="text-[#1955A6] text-[13px] hover:underline transition-colors font-medium break-all">
                                    connect@techinvention.biz
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default ContactSection;
