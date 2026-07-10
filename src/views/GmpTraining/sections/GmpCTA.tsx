import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from 'lucide-react';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';

export default function GmpCTA() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [org, setOrg] = useState('');
    const [interest, setInterest] = useState('');
    const [message, setMessage] = useState('');

    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const courses = [
        'GMP Compliance Principles',
        'Quality Management (QMS)',
        'Aseptic & Sterile Operations',
        'Validation & Qualification',
        'Technology Transfer',
        'Data Integrity & Records',
        'Custom Corporate Training Program',
        'General Enquiry / Other'
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!name || !email || !phone || !interest || !message) {
            setError('Please fill in all required fields (*).');
            return;
        }

        // Simple email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        setLoading(true);

        // Simulate API post
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
            // Reset fields
            setName('');
            setEmail('');
            setPhone('');
            setOrg('');
            setInterest('');
            setMessage('');
        }, 1500);
    };

    return (
        <section id="gmp-enquiry-section" className="py-24 bg-slate-50 relative overflow-hidden font-sans border-b border-slate-200/60">
            {/* Ambient Background decoration */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[#1955A6]/5 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] rounded-full bg-[#5C7625]/5 blur-[100px] pointer-events-none" />

            <div className="max-w-[1300px] mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    
                    {/* Left: Contact Info & Support detail */}
                    <div className="lg:col-span-5 text-left">
                        <ScrollReveal direction="up">
                            <span className="text-[#1955A6] font-bold tracking-[0.4em] text-[11px] mb-3 block uppercase">
                                Connect With Us
                            </span>
                            <h2 className="text-[28px] md:text-[36px] font-medium tracking-wide mb-6">
                                <SplitTitle title="Explore Training Opportunities" />
                                <span className="block text-slate-900 mt-2 font-normal leading-snug">with TechInvention</span>
                            </h2>
                            <p className="text-slate-600 text-sm md:text-base font-semibold leading-relaxed mb-8">
                                Write to connect@techinvention.biz to learn more about our training programs and upcoming initiatives.
                            </p>
                        </ScrollReveal>

                        {/* Contact Cards */}
                        <div className="space-y-6">
                            <ScrollReveal direction="up" delay={0.1}>
                                <div className="flex items-center gap-4 bg-white border border-slate-200/60 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 rounded-xl bg-[#1955A6]/8 flex items-center justify-center shrink-0">
                                        <Mail className="w-5 h-5 text-[#1955A6]" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Us</h4>
                                        <a href="mailto:connect@techinvention.biz" className="text-slate-800 font-bold text-sm hover:text-[#1955A6] transition-colors mt-0.5 block">
                                            connect@techinvention.biz
                                        </a>
                                    </div>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal direction="up" delay={0.2}>
                                <div className="flex items-center gap-4 bg-white border border-slate-200/60 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 rounded-xl bg-[#5C7625]/8 flex items-center justify-center shrink-0">
                                        <Phone className="w-5 h-5 text-[#5C7625]" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Call Training Desk</h4>
                                        <a href="tel:+911234567890" className="text-slate-800 font-bold text-sm hover:text-[#5C7625] transition-colors mt-0.5 block">
                                            +91 123 456 7890
                                        </a>
                                    </div>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal direction="up" delay={0.3}>
                                <div className="flex items-center gap-4 bg-white border border-slate-200/60 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 rounded-xl bg-[#1955A6]/8 flex items-center justify-center shrink-0">
                                        <MapPin className="w-5 h-5 text-[#1955A6]" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Location</h4>
                                        <span className="text-slate-800 font-bold text-sm mt-0.5 block">
                                            Mumbai, India
                                        </span>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>

                    {/* Right: The Enquiry Form Container */}
                    <div className="lg:col-span-7 w-full">
                        <ScrollReveal direction="up" delay={0.1} className="w-full">
                            <div className="bg-white border border-slate-200/60 rounded-[2.5rem] p-8 md:p-12 shadow-xl">
                                
                                <AnimatePresence mode="wait">
                                    {!submitted ? (
                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div className="border-b border-slate-100 pb-4 mb-6">
                                                <h3 className="text-xl font-bold text-slate-800">Registration Details</h3>
                                                <p className="text-xs font-semibold text-slate-400 mt-1">Fields marked with (*) are required.</p>
                                            </div>

                                            {error && (
                                                <div className="p-4 bg-red-50 border border-red-200/60 text-red-600 rounded-xl text-xs font-semibold">
                                                    {error}
                                                </div>
                                            )}

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                                {/* Full Name */}
                                                <div className="flex flex-col gap-2 text-left">
                                                    <label className="text-slate-700 font-bold text-xs uppercase tracking-wider">Full Name *</label>
                                                    <input 
                                                        type="text" 
                                                        value={name} 
                                                        onChange={(e) => setName(e.target.value)}
                                                        placeholder="John Doe" 
                                                        className="w-full bg-slate-50 border border-slate-200/85 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1955A6] transition-colors text-black placeholder:text-slate-400"
                                                    />
                                                </div>

                                                {/* Email */}
                                                <div className="flex flex-col gap-2 text-left">
                                                    <label className="text-slate-700 font-bold text-xs uppercase tracking-wider">Work Email *</label>
                                                    <input 
                                                        type="email" 
                                                        value={email} 
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        placeholder="john@organization.com" 
                                                        className="w-full bg-slate-50 border border-slate-200/85 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1955A6] transition-colors text-black placeholder:text-slate-400"
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                                {/* Contact Number */}
                                                <div className="flex flex-col gap-2 text-left">
                                                    <label className="text-slate-700 font-bold text-xs uppercase tracking-wider">Contact Number *</label>
                                                    <input 
                                                        type="tel" 
                                                        value={phone} 
                                                        onChange={(e) => setPhone(e.target.value)}
                                                        placeholder="+91 98765 43210" 
                                                        className="w-full bg-slate-50 border border-slate-200/85 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1955A6] transition-colors text-black placeholder:text-slate-400"
                                                    />
                                                </div>

                                                {/* Organization */}
                                                <div className="flex flex-col gap-2 text-left">
                                                    <label className="text-slate-700 font-bold text-xs uppercase tracking-wider">Organization / Company</label>
                                                    <input 
                                                        type="text" 
                                                        value={org} 
                                                        onChange={(e) => setOrg(e.target.value)}
                                                        placeholder="Zenith Biotech Ltd." 
                                                        className="w-full bg-slate-50 border border-slate-200/85 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1955A6] transition-colors text-black placeholder:text-slate-400"
                                                    />
                                                </div>
                                            </div>

                                            {/* Course Interest Dropdown */}
                                            <div className="flex flex-col gap-2 text-left">
                                                <label className="text-slate-700 font-bold text-xs uppercase tracking-wider">Program of Interest *</label>
                                                <select 
                                                    value={interest} 
                                                    onChange={(e) => setInterest(e.target.value)}
                                                    className="w-full bg-slate-50 border border-slate-200/85 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1955A6] transition-colors text-slate-800"
                                                >
                                                    <option value="" disabled>Select a Training Module</option>
                                                    {courses.map((course, idx) => (
                                                        <option key={idx} value={course}>{course}</option>
                                                    ))}
                                                </select>
                                            </div>

                                            {/* Message */}
                                            <div className="flex flex-col gap-2 text-left">
                                                <label className="text-slate-700 font-bold text-xs uppercase tracking-wider">Enquiry Details *</label>
                                                <textarea 
                                                    value={message} 
                                                    onChange={(e) => setMessage(e.target.value)}
                                                    rows={4}
                                                    placeholder="Tell us about your requirements (e.g. number of participants, custom dates, specific expectations)..." 
                                                    className="w-full bg-slate-50 border border-slate-200/85 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1955A6] transition-colors text-black placeholder:text-slate-400 resize-none"
                                                />
                                            </div>

                                            {/* Submit Button */}
                                            <button
                                                type="submit"
                                                disabled={loading}
                                                className="w-full bg-[#1955A6] hover:bg-[#1955A6]/95 text-white font-bold py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:bg-slate-300 disabled:cursor-not-allowed text-sm uppercase tracking-wider"
                                            >
                                                {loading ? (
                                                    <>
                                                        <Loader2 className="w-4 h-4 animate-spin" />
                                                        Sending...
                                                    </>
                                                ) : (
                                                    <>
                                                        <Send className="w-4 h-4" />
                                                        Submit Enquiry
                                                    </>
                                                )}
                                            </button>
                                        </form>
                                    ) : (
                                        <motion.div 
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="py-12 flex flex-col items-center justify-center text-center"
                                        >
                                            <div className="w-16 h-16 rounded-full bg-[#5C7625]/10 flex items-center justify-center mb-6">
                                                <CheckCircle2 className="w-10 h-10 text-[#5C7625]" />
                                            </div>
                                            <h3 className="text-2xl font-bold text-slate-900 mb-3">Enquiry Submitted!</h3>
                                            <p className="text-slate-600 font-semibold text-sm max-w-sm leading-relaxed mb-8">
                                                Thank you for contacting the Academy. Our training desk has received your request and will contact you shortly with schedules.
                                            </p>
                                            <button 
                                                onClick={() => setSubmitted(false)}
                                                className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-full transition-colors text-xs uppercase tracking-wider"
                                            >
                                                Send Another Enquiry
                                            </button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                            </div>
                        </ScrollReveal>
                    </div>

                </div>
            </div>
        </section>
    );
}
