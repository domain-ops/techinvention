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
                <div className="mb-24">
                    <div className="mb-12">
                        <ScrollReveal direction="up">
                            <span className="text-brand-primary font-medium tracking-[0.4em] text-[11px] mb-2 block uppercase text-left">
                                Get In Touch
                            </span>
                            <h2 className="text-[28px] md:text-[36px] font-medium tracking-wide text-left mb-4">
                                <SplitTitle title="Contact Form" />
                            </h2>
                            <p className="text-black font-medium text-[16px] md:text-[18px] max-w-2xl leading-relaxed text-left">
                                Send us a message and our team will get back to you as soon as possible.
                            </p>
                        </ScrollReveal>
                    </div>

                    <ScrollReveal direction="up">
                        <div className="bg-white rounded-none p-8 md:p-12 border border-slate-200/60 shadow-sm max-w-4xl">
                            <AnimatePresence mode="wait">
                                {submitted ? (
                                    <motion.div 
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="text-center py-12 flex flex-col items-center gap-4"
                                    >
                                        <div className="w-16 h-16 rounded-full bg-brand-secondary/10 text-brand-secondary flex items-center justify-center mb-2">
                                            <Send className="w-6 h-6" />
                                        </div>
                                        <h4 className="text-xl font-bold text-slate-900">Message Received!</h4>
                                        <p className="text-slate-500 text-[15px] font-medium max-w-sm">
                                            Thank you for contacting us. Our team will get back to you shortly.
                                        </p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div className="flex flex-col gap-2">
                                                <label className="text-slate-700 font-bold text-xs uppercase tracking-wider">Full Name *</label>
                                                <input 
                                                    type="text" 
                                                    name="name" 
                                                    required 
                                                    value={formData.name} 
                                                    onChange={handleChange}
                                                    placeholder="e.g. John Doe"
                                                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all duration-300 text-slate-900 placeholder-slate-400 text-[14px] font-medium outline-none focus:bg-white focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/50"
                                                />
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <label className="text-slate-700 font-bold text-xs uppercase tracking-wider">Email Address *</label>
                                                <input 
                                                    type="email" 
                                                    name="email" 
                                                    required 
                                                    value={formData.email} 
                                                    onChange={handleChange}
                                                    placeholder="e.g. john@company.com"
                                                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all duration-300 text-slate-900 placeholder-slate-400 text-[14px] font-medium outline-none focus:bg-white focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/50"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div className="flex flex-col gap-2">
                                                <label className="text-slate-700 font-bold text-xs uppercase tracking-wider">Organisation</label>
                                                <input 
                                                    type="text" 
                                                    name="organisation" 
                                                    value={formData.organisation} 
                                                    onChange={handleChange}
                                                    placeholder="e.g. Acme Biotech"
                                                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all duration-300 text-slate-900 placeholder-slate-400 text-[14px] font-medium outline-none focus:bg-white focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/50"
                                                />
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <label className="text-slate-700 font-bold text-xs uppercase tracking-wider">Enquiry Type *</label>
                                                <select 
                                                    name="enquiryType" 
                                                    required 
                                                    value={formData.enquiryType} 
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all duration-300 text-slate-900 text-[14px] font-medium outline-none focus:bg-white focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/50 cursor-pointer"
                                                >
                                                    <option value="Business Development">Business Development</option>
                                                    <option value="Advisory & Consulting">Advisory & Consulting</option>
                                                    <option value="General Support">General Support</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <label className="text-slate-700 font-bold text-xs uppercase tracking-wider">Message *</label>
                                            <textarea 
                                                name="message" 
                                                required 
                                                rows={5}
                                                value={formData.message} 
                                                onChange={handleChange}
                                                placeholder="Describe your enquiry here..."
                                                className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all duration-300 text-slate-900 placeholder-slate-400 text-[14px] font-medium outline-none resize-none focus:bg-white focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/50"
                                            />
                                        </div>

                                        <motion.button 
                                            type="submit" 
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="group w-full md:w-fit flex items-center justify-center gap-3 bg-brand-primary text-white px-8 py-4 rounded-xl font-bold text-[12px] tracking-[0.15em] uppercase hover:bg-brand-primary/95 hover:shadow-lg transition-all duration-300"
                                        >
                                            <span>Send Message</span>
                                            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </motion.button>
                                    </form>
                                )}
                            </AnimatePresence>
                        </div>
                    </ScrollReveal>
                </div>

                {/* 3. Location Section */}
                <div className="mb-24">
                    <div className="mb-12">
                        <ScrollReveal direction="up">
                            <span className="text-brand-primary font-medium tracking-[0.4em] text-[11px] mb-2 block uppercase text-left">
                                Find Us
                            </span>
                            <h2 className="text-[28px] md:text-[36px] font-medium tracking-wide text-left mb-4">
                                <SplitTitle title="Location & Address" />
                            </h2>
                            <p className="text-black font-medium text-[16px] md:text-[18px] max-w-2xl leading-relaxed text-left">
                                Visit our corporate office or contact us directly via phone and email.
                            </p>
                        </ScrollReveal>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                        {/* Map Container */}
                        <div className="lg:col-span-7 h-[400px] lg:h-auto min-h-[350px] rounded-none overflow-hidden shadow-sm border border-slate-200/60">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.9048386186835!2d72.86241037562846!3d19.11183355084931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c83c2afc12fb%3A0x6e3c0f64b9fc0724!2sThe%20Summit%20Business%20Bay!5e0!3m2!1sen!2sin!4v1715000000000!5m2!1sen!2sin" 
                                width="100%" 
                                height="100%" 
                                style={{ border: 0 }} 
                                allowFullScreen 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                        {/* Address and details */}
                        <div className="lg:col-span-5 flex flex-col gap-4 justify-between">
                            <ScrollReveal direction="up" delay={0.1} className="h-full">
                                <div className="bg-white rounded-none p-8 border border-slate-200/60 shadow-sm flex items-start gap-5 h-full">
                                    <div className="w-12 h-12 rounded-full bg-brand-primary/5 text-brand-primary flex items-center justify-center shrink-0">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-slate-900 mb-2">Corporate Office</h4>
                                        <p className="text-slate-600 text-[14px] font-medium leading-relaxed">
                                            #1004, The Summit Business Park,<br />
                                            Off WEH Metro Station, Andheri Kurla Road,<br />
                                            Andheri East, Mumbai 400093. INDIA
                                        </p>
                                    </div>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal direction="up" delay={0.2} className="h-full">
                                <div className="bg-white rounded-none p-8 border border-slate-200/60 shadow-sm flex items-start gap-5 h-full">
                                    <div className="w-12 h-12 rounded-full bg-brand-primary/5 text-brand-primary flex items-center justify-center shrink-0">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-slate-900 mb-2">Phone Inquiry</h4>
                                        <a href="tel:+912240052123" className="text-slate-600 hover:text-brand-primary text-[14px] font-medium leading-relaxed transition-colors block">
                                            +91 2240052123
                                        </a>
                                    </div>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal direction="up" delay={0.3} className="h-full">
                                <div className="bg-white rounded-none p-8 border border-slate-200/60 shadow-sm flex items-start gap-5 h-full">
                                    <div className="w-12 h-12 rounded-full bg-brand-primary/5 text-brand-primary flex items-center justify-center shrink-0">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-slate-900 mb-2">Email Address</h4>
                                        <a href="mailto:connect@techinvention.biz" className="text-slate-600 hover:text-brand-primary text-[14px] font-medium leading-relaxed transition-colors block">
                                            connect@techinvention.biz
                                        </a>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default ContactSection;
