import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, AlertCircle, Send, Download } from 'lucide-react';
import ScrollReveal from '../../../components/Common/ScrollReveal';

const ContactSection = () => {
    // Basic form state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, handle API call
        console.log('Form submitted:', formData);
        alert('Thank you for contacting us. We will get back to you shortly.');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    };

    return (
        <section className="py-16 md:py-24 bg-brand-background relative">
            <div className="max-w-7xl mx-auto px-6">
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    
                    {/* Left Column - Contact Info */}
                    <div className="lg:col-span-5 flex flex-col gap-8">
                        <ScrollReveal>
                            <span className="text-brand-primary font-medium tracking-[0.4em] text-[11px] mb-2 block uppercase">
                                Get In Touch
                            </span>
                            <h2 className="text-[32px] md:text-[42px] font-medium tracking-tight text-brand-content mb-6 leading-tight">
                                We're here to help you innovate.
                            </h2>
                            <p className="text-[#475569] text-[16px] leading-relaxed mb-8">
                                Whether you have questions about our services, partnerships, or require assistance, our team is ready to provide you with the answers you need.
                            </p>
                        </ScrollReveal>

                        {/* Contact Details Grid */}
                        <div className="grid grid-cols-1 gap-6">
                            <ScrollReveal delay={0.1}>
                                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                    <div className="bg-brand-primary/10 p-3 rounded-full text-brand-primary shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-lg text-brand-content mb-2">Corporate Office</h3>
                                        <p className="text-slate-600 leading-relaxed text-sm">
                                            #1004, The Summit Business Park, <br/>
                                            Off WEH Metro Station, Andheri Kurla Road, <br/>
                                            Andheri East, Mumbai 400093. INDIA
                                        </p>
                                    </div>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal delay={0.2}>
                                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                    <div className="bg-brand-primary/10 p-3 rounded-full text-brand-primary shrink-0">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-lg text-brand-content mb-2">Phone</h3>
                                        <a href="tel:+912240052123" className="text-slate-600 hover:text-brand-primary transition-colors text-sm font-medium block">
                                            +91 2240052123
                                        </a>
                                    </div>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal delay={0.3}>
                                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                    <div className="bg-brand-primary/10 p-3 rounded-full text-brand-primary shrink-0">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-lg text-brand-content mb-2">Email</h3>
                                        <a href="mailto:connect@techinvention.biz" className="text-slate-600 hover:text-brand-primary transition-colors text-sm font-medium block">
                                            connect@techinvention.biz
                                        </a>
                                    </div>
                                </div>
                            </ScrollReveal>

                        </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div className="lg:col-span-7">
                        <ScrollReveal delay={0.3}>
                            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-slate-100 h-full">
                                <h3 className="text-2xl font-medium text-brand-content mb-8">Send us a message</h3>
                                
                                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="flex flex-col gap-2">
                                            <label htmlFor="name" className="text-sm font-medium text-slate-700">Full Name *</label>
                                            <input 
                                                type="text" 
                                                id="name" 
                                                name="name" 
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label htmlFor="email" className="text-sm font-medium text-slate-700">Email Address *</label>
                                            <input 
                                                type="email" 
                                                id="email" 
                                                name="email" 
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="flex flex-col gap-2">
                                            <label htmlFor="phone" className="text-sm font-medium text-slate-700">Phone Number</label>
                                            <input 
                                                type="tel" 
                                                id="phone" 
                                                name="phone" 
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all"
                                                placeholder="+91 98765 43210"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label htmlFor="subject" className="text-sm font-medium text-slate-700">Subject *</label>
                                            <input 
                                                type="text" 
                                                id="subject" 
                                                name="subject" 
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all"
                                                placeholder="How can we help?"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="message" className="text-sm font-medium text-slate-700">Message *</label>
                                        <textarea 
                                            id="message" 
                                            name="message" 
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={6}
                                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all resize-none"
                                            placeholder="Please describe your inquiry in detail..."
                                        ></textarea>
                                    </div>

                                    <button 
                                        type="submit" 
                                        className="group bg-brand-primary text-white font-medium rounded-full px-8 py-4 flex items-center justify-center gap-3 hover:bg-brand-primary/90 transition-all mt-4 w-full md:w-auto md:self-start"
                                    >
                                        <span>Send Message</span>
                                        <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </form>
                            </div>
                        </ScrollReveal>


                    </div>
                </div>

                {/* Google Maps Full Width */}
                <div className="mt-16 md:mt-24">
                    <ScrollReveal>
                        <div className="w-full h-[450px] rounded-3xl overflow-hidden shadow-md border border-slate-200">
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
                    </ScrollReveal>
                </div>

                {/* Additional Action Cards After Map */}
                <ScrollReveal delay={0.2}>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
                        
                        {/* Adverse Event Card */}
                        <div className="flex items-start gap-4 p-6 bg-rose-50 rounded-2xl shadow-sm border border-rose-100 hover:shadow-md transition-shadow relative overflow-hidden h-full">
                            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                                <AlertCircle size={80} />
                            </div>
                            <div className="bg-rose-100 p-3 rounded-full text-rose-600 shrink-0 relative z-10 hidden sm:block">
                                <AlertCircle size={24} />
                            </div>
                            <div className="relative z-10 w-full">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="bg-rose-100 p-2 rounded-full text-rose-600 shrink-0 sm:hidden">
                                        <AlertCircle size={20} />
                                    </div>
                                    <h3 className="font-medium text-lg text-brand-content">Adverse Event Reporting</h3>
                                </div>
                                <div className="flex flex-col gap-1 text-sm text-slate-600">
                                    <span className="flex items-center gap-2">
                                        Toll-free: <a href="tel:18008902590" className="font-medium text-slate-800 hover:text-rose-600 transition-colors">18008902590</a>
                                    </span>
                                    <span className="flex items-start md:items-center gap-2 flex-col md:flex-row">
                                        Email: <a href="mailto:feedback@techinvention.biz" className="font-medium text-slate-800 hover:text-rose-600 transition-colors break-all">feedback@techinvention.biz</a>
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Download Form Card */}
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-6 bg-slate-50 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow h-full gap-5">
                            <div className="flex flex-col flex-1">
                                <div className="bg-brand-primary/10 p-2.5 rounded-full text-brand-primary mb-3 w-fit">
                                    <Download size={20} />
                                </div>
                                <h3 className="font-medium text-lg text-brand-content mb-2">AE Reporting Form</h3>
                                <p className="text-sm text-slate-500 mb-0">
                                    Please complete the Adverse Event reporting form and submit it to our team.
                                </p>
                            </div>
                            <a 
                                href="#"
                                onClick={(e) => { e.preventDefault(); alert('PDF not found. Please place the PDF file in src/assets/pdf/ and update the link.'); }}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="shrink-0 inline-flex items-center justify-center gap-2 bg-brand-primary text-white font-medium px-6 py-2.5 rounded-xl text-sm hover:bg-brand-primary/90 transition-colors shadow-sm w-full sm:w-auto mt-4 sm:mt-0"
                            >
                                <Download size={18} />
                                <span>Download Form</span>
                            </a>
                        </div>

                    </div>
                </ScrollReveal>

            </div>
        </section>
    );
};

export default ContactSection;
