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

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        enquiryType: 'Business Development',
        organisation: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', phone: '', enquiryType: 'Business Development', organisation: '', message: '' });
        }, 3000);
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
                        <div className="lg:col-span-5 bg-[#1955A6] text-white p-10 md:p-14 flex flex-col justify-between">
                            <div>
                                <span className="text-white font-bold tracking-[0.35em] text-[11px] mb-4 block uppercase">Get In Touch</span>
                                <h2 className="text-[26px] md:text-[32px] font-bold leading-snug mb-6 text-white">
                                    Let's Start the Conversation
                                </h2>
                                <p className="text-slate-300 text-[15px] md:text-[16px] leading-relaxed mb-10">
                                    Send us your enquiry and the appropriate team will get back to you at the earliest. Whether your interest lies in products, partnerships, technology, manufacturing, advisory or training support, we look forward to connecting with you.
                                </p>
                            </div>

                            {/* Contact details */}
                            <div className="space-y-5 mt-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                        <MapPin className="w-4 h-4 text-white" />
                                    </div>
                                    <p className="text-slate-300 text-sm leading-relaxed">
                                        #1004, The Summit Business Park, Andheri East, Mumbai 400093. India
                                    </p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                        <Phone className="w-4 h-4 text-white" />
                                    </div>
                                    <a href="tel:+912240052123" className="text-slate-300 text-sm hover:text-white transition-colors">+91 2240052123</a>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                        <Mail className="w-4 h-4 text-white" />
                                    </div>
                                    <a href="mailto:connect@techinvention.biz" className="text-slate-300 text-sm hover:text-white transition-colors">connect@techinvention.biz</a>
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
                                        <h4 className="text-xl font-bold text-slate-900">Message Received!</h4>
                                        <p className="text-slate-500 text-[15px] font-medium max-w-sm">
                                            Thank you for contacting us. Our team will get back to you shortly.
                                        </p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                                        {/* Full Name */}
                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-slate-700 font-bold text-xs uppercase tracking-wider">Full Name *</label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="e.g. John Doe"
                                                className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all text-slate-900 placeholder-slate-400 text-[14px] font-medium outline-none focus:bg-white focus:border-[#1955A6] focus:ring-1 focus:ring-[#1955A6]/30"
                                            />
                                        </div>

                                        {/* Email Address */}
                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-slate-700 font-bold text-xs uppercase tracking-wider">Email Address *</label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="e.g. john@company.com"
                                                className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all text-slate-900 placeholder-slate-400 text-[14px] font-medium outline-none focus:bg-white focus:border-[#1955A6] focus:ring-1 focus:ring-[#1955A6]/30"
                                            />
                                        </div>

                                        {/* Organisation */}
                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-slate-700 font-bold text-xs uppercase tracking-wider">Organisation</label>
                                            <input
                                                type="text"
                                                name="organisation"
                                                value={formData.organisation}
                                                onChange={handleChange}
                                                placeholder="e.g. Acme Biotech"
                                                className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all text-slate-900 placeholder-slate-400 text-[14px] font-medium outline-none focus:bg-white focus:border-[#1955A6] focus:ring-1 focus:ring-[#1955A6]/30"
                                            />
                                        </div>

                                        {/* Enquiry Type */}
                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-slate-700 font-bold text-xs uppercase tracking-wider">Enquiry Type *</label>
                                            <select
                                                name="enquiryType"
                                                required
                                                value={formData.enquiryType}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all text-slate-900 text-[14px] font-medium outline-none focus:bg-white focus:border-[#1955A6] focus:ring-1 focus:ring-[#1955A6]/30 cursor-pointer"
                                            >
                                                <option value="Business Development">Business Development</option>
                                                <option value="Advisory & Consulting">Advisory & Consulting</option>
                                                <option value="General Support">General Support</option>
                                                <option value="Training Enquiry">Training Enquiry</option>
                                                <option value="Partnership">Partnership</option>
                                            </select>
                                        </div>

                                        {/* Message */}
                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-slate-700 font-bold text-xs uppercase tracking-wider">Message *</label>
                                            <textarea
                                                name="message"
                                                required
                                                rows={4}
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Describe your enquiry here..."
                                                className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all text-slate-900 placeholder-slate-400 text-[14px] font-medium outline-none resize-none focus:bg-white focus:border-[#1955A6] focus:ring-1 focus:ring-[#1955A6]/30"
                                            />
                                        </div>

                                        {/* Submit */}
                                        <motion.button
                                            type="submit"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="group w-full flex items-center justify-center gap-3 bg-[#1955A6] hover:bg-[#1955A6]/90 text-white px-8 py-4 rounded-xl font-bold text-[13px] tracking-[0.1em] uppercase transition-all duration-300 shadow-md hover:shadow-lg"
                                        >
                                            <span>Send Message</span>
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
                    <div className="mb-10">
                        <ScrollReveal direction="up">
                            <h2 className="text-[24px] md:text-[30px] font-bold text-slate-900 mb-3">
                                Location &amp; Address
                            </h2>
                            <p className="text-slate-600 text-[15px] md:text-[16px] max-w-3xl leading-relaxed">
                                Visit our corporate office or connect with us directly for partnership discussions, product enquiries, strategic collaborations and institutional communication.
                            </p>
                        </ScrollReveal>
                    </div>

                    {/* Map + Details Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-2xl overflow-hidden border border-slate-200/60 shadow-md">

                        {/* Map */}
                        <div className="lg:col-span-7 h-[380px] lg:h-auto min-h-[380px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.3872!2d73.0078!3d19.1234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ebe98cda4b79%3A0x9f6f3e35b7acfcf4!2sMahape%20MIDC%2C%20Navi%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1715000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0, display: 'block' }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>

                        {/* Details Panel */}
                        <div className="lg:col-span-5 bg-white flex flex-col divide-y divide-slate-100">

                            {/* Row 1: Two addresses */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
                                {/* Address 1 */}
                                <div className="p-6 flex flex-col gap-2">
                                    <div className="flex items-center gap-2 mb-1">
                                        <MapPin className="w-4 h-4 text-[#1955A6] shrink-0" />
                                        <h4 className="text-[13px] font-bold text-[#1a9090] leading-snug">Corporate Office &amp; Manufacturing Site</h4>
                                    </div>
                                    <p className="text-[#1955A6] text-[13px] leading-relaxed font-medium">
                                        Plot No. EL-40, Mahape MIDC Electric Zone, MIDC Industrial Area, Mahape Village, Navi Mumbai, Thane, Maharashtra, 400710
                                    </p>
                                </div>
                                {/* Address 2 */}
                                <div className="p-6 flex flex-col gap-2">
                                    <div className="flex items-center gap-2 mb-1">
                                        <MapPin className="w-4 h-4 text-[#1955A6] shrink-0" />
                                        <h4 className="text-[13px] font-bold text-[#1a9090] leading-snug">Bio-Innovation Centre (HORIZON)</h4>
                                    </div>
                                    <p className="text-[#1955A6] text-[13px] leading-relaxed font-medium">
                                        EL-125, Mahape MIDC Electric Zone, MIDC Industrial Area, Mahape Village, Navi Mumbai, Thane, Maharashtra
                                    </p>
                                </div>
                            </div>

                            {/* Row 2: Phone & Email */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
                                {/* Phone */}
                                <div className="p-6 flex flex-col gap-1.5">
                                    <div className="flex items-center gap-2 mb-1">
                                        <Phone className="w-4 h-4 text-[#1955A6] shrink-0" />
                                        <h4 className="text-[13px] font-bold text-[#1a9090]">Phone Enquiries</h4>
                                    </div>
                                    <a href="tel:+912240052123" className="text-slate-600 text-[13px] hover:text-[#1955A6] transition-colors font-medium">
                                        +91 22 4005 2123
                                    </a>
                                </div>
                                {/* Email */}
                                <div className="p-6 flex flex-col gap-1.5">
                                    <div className="flex items-center gap-2 mb-1">
                                        <Mail className="w-4 h-4 text-[#1955A6] shrink-0" />
                                        <h4 className="text-[13px] font-bold text-[#1a9090]">Email Address</h4>
                                    </div>
                                    <a href="mailto:connect@techinvention.biz" className="text-[#1955A6] text-[13px] hover:underline transition-colors font-medium">
                                        connect@techinvention.biz
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default ContactSection;
