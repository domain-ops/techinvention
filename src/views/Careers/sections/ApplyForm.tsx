import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, Upload, AlertCircle, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';

interface ApplyFormProps {
    selectedJobTitle: string | null;
    onCancel: () => void;
}

export default function ApplyForm({ selectedJobTitle, onCancel }: ApplyFormProps) {
    const { t } = useLanguage();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [experience, setExperience] = useState('');
    const [currentCompany, setCurrentCompany] = useState('');
    const [message, setMessage] = useState('');
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [fileName, setFileName] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        // Reset state on job change
        setSubmitted(false);
        setError('');
    }, [selectedJobTitle]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            setSelectedFile(file);
            setFileName(file.name);
            setError('');
        }
    };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Accept only letters and spaces
        const val = e.target.value.replace(/[^a-zA-Z\s]/g, '');
        setName(val);
        setError('');
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Accept only digits up to 10
        const val = e.target.value.replace(/\D/g, '').slice(0, 10);
        setPhone(val);
        setError('');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!name.trim()) {
            setError(t('contact.form.nameRequired') || 'Please enter your Full Name.');
            return;
        }

        if (!email.trim() || !/\S+@\S+\.\S+/.test(email.trim())) {
            setError(t('contact.form.emailRequired') || 'Please enter a valid Email Address.');
            return;
        }

        if (!phone.trim() || phone.trim().length !== 10) {
            setError(t('contact.form.phoneRequired') || 'Please enter a valid 10-digit Contact Number.');
            return;
        }

        if (!experience.trim()) {
            setError(t('careers.form.expRequired') || 'Please enter your Years of Experience.');
            return;
        }

        if (!selectedFile) {
            setError(t('careers.form.fileRequired') || 'Please upload your Resume (PDF, DOC, or DOCX).');
            return;
        }

        setLoading(true);

        try {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('email', email);
            formData.append('phone', phone);
            formData.append('experience', experience);
            formData.append('currentCompany', currentCompany);
            formData.append('message', message);
            formData.append('position', selectedJobTitle || 'General Application');
            if (selectedFile) {
                formData.append('resume', selectedFile);
            }

            const res = await fetch('/api/careers', {
                method: 'POST',
                body: formData,
            });

            const data = await res.json();

            setSubmitted(true);
            window.location.href = '/thank-you';
        } catch (err: any) {
            setError(err.message || 'An error occurred while submitting your application.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="apply-form-section" className="py-24 bg-white relative overflow-hidden font-sans border-b border-slate-100">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-brand-primary/3 blur-3xl pointer-events-none" />

            <div className="max-w-[800px] mx-auto px-6 relative z-10 text-left">
                
                <div className="bg-white border border-slate-200/60 rounded-3xl p-8 md:p-12 shadow-2xl">
                    <div className="border-b border-slate-100 pb-6 mb-8">
                        <span className="text-brand-primary font-bold uppercase tracking-wider text-xs">{t('careers.form.badge') || t('careers.hero.badge') || "Join Us"}</span>
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-2 leading-tight">
                            {t('careers.form.title') || "Application Form"}
                        </h2>
                    </div>

                    <AnimatePresence mode="wait">
                        {!submitted ? (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Selected Position */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-slate-700 font-bold text-xs uppercase tracking-wider">{t('careers.form.position') || "Applying Position"} *</label>
                                    <input 
                                        type="text" 
                                        defaultValue={selectedJobTitle || ''} 
                                        placeholder="e.g. Senior Research Scientist"
                                        disabled={!!selectedJobTitle}
                                        className={`w-full border rounded-xl px-4 py-3 text-sm font-medium ${
                                            selectedJobTitle 
                                                ? "bg-slate-100 border-slate-200/80 text-slate-600 cursor-not-allowed" 
                                                : "bg-white border-slate-200 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                                        }`}
                                    />
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                     {/* Name */}
                                    <div className="flex flex-col gap-2">
                                        <label className="text-slate-700 font-bold text-xs uppercase tracking-wider">{t('careers.form.name') || t('contact.form.name') || "Full Name"} *</label>
                                        <input 
                                            type="text" 
                                            value={name} 
                                            onChange={handleNameChange}
                                            placeholder={t('contact.form.namePlaceholder') || "Your Name (Letters only)"} 
                                            className="w-full bg-slate-50 border border-slate-200/80 rounded-none px-4 py-3 text-sm focus:outline-none focus:border-brand-primary transition-colors text-black placeholder:text-slate-400"
                                        />
                                    </div>
                                    
                                    {/* Email */}
                                    <div className="flex flex-col gap-2">
                                        <label className="text-slate-700 font-bold text-xs uppercase tracking-wider">{t('careers.form.email') || t('contact.form.email') || "Email Address"} *</label>
                                        <input 
                                            type="email" 
                                            value={email} 
                                            onChange={e => setEmail(e.target.value)}
                                            placeholder={t('contact.form.emailPlaceholder') || "Your Email"} 
                                            className="w-full bg-slate-50 border border-slate-200/80 rounded-none px-4 py-3 text-sm focus:outline-none focus:border-brand-primary transition-colors text-black placeholder:text-slate-400"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {/* Phone */}
                                    <div className="flex flex-col gap-2">
                                        <label className="text-slate-700 font-bold text-xs uppercase tracking-wider">{t('careers.form.phone') || t('contact.form.phone') || "Contact Number"} *</label>
                                        <input 
                                            type="tel" 
                                            value={phone} 
                                            onChange={handlePhoneChange}
                                            maxLength={10}
                                            placeholder={t('contact.form.phonePlaceholder') || "10-digit Phone Number"} 
                                            className="w-full bg-slate-50 border border-slate-200/80 rounded-none px-4 py-3 text-sm focus:outline-none focus:border-brand-primary transition-colors text-black placeholder:text-slate-400"
                                        />
                                    </div>
                                    
                                    {/* Experience */}
                                    <div className="flex flex-col gap-2">
                                        <label className="text-slate-700 font-bold text-xs uppercase tracking-wider">{t('careers.form.experience') || "Years of Experience"} *</label>
                                        <input 
                                            type="text" 
                                            value={experience} 
                                            onChange={e => setExperience(e.target.value)}
                                            placeholder="e.g. 4 Years" 
                                            className="w-full bg-slate-50 border border-slate-200/80 rounded-none px-4 py-3 text-sm focus:outline-none focus:border-brand-primary transition-colors text-black placeholder:text-slate-400"
                                        />
                                    </div>
                                </div>

                                {/* Current Company */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-slate-700 font-bold text-xs uppercase tracking-wider">{t('careers.form.company') || "Current Company / Organization (Optional)"}</label>
                                    <input 
                                        type="text" 
                                        value={currentCompany} 
                                        onChange={e => setCurrentCompany(e.target.value)}
                                        placeholder="Current employer name" 
                                        className="w-full bg-slate-50 border border-slate-200/80 rounded-none px-4 py-3 text-sm focus:outline-none focus:border-brand-primary transition-colors text-black placeholder:text-slate-400"
                                    />
                                </div>

                                {/* Cover Letter / message */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-slate-700 font-bold text-xs uppercase tracking-wider">{t('careers.form.coverLetter') || "Cover Letter / Message (Optional)"}</label>
                                    <textarea 
                                        rows={4} 
                                        value={message} 
                                        onChange={e => setMessage(e.target.value)}
                                        placeholder="Write a brief cover letter or notes regarding your application..." 
                                        className="w-full bg-slate-50 border border-slate-200/80 rounded-none px-4 py-3 text-sm focus:outline-none focus:border-brand-primary transition-colors text-black placeholder:text-slate-400 resize-none"
                                    />
                                </div>

                                {/* File Upload */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-slate-700 font-bold text-xs uppercase tracking-wider">{t('careers.form.uploadResume') || "Upload Resume (PDF, DOC) *"} </label>
                                    <div className="relative group cursor-pointer border border-dashed border-slate-200 hover:border-brand-primary transition-colors rounded-none p-4 flex items-center justify-center gap-3 bg-slate-50">
                                        <input 
                                            type="file" 
                                            accept=".pdf,.doc,.docx"
                                            onChange={handleFileChange}
                                            className="absolute inset-0 opacity-0 cursor-pointer"
                                        />
                                        <Upload className="w-5 h-5 text-slate-400 group-hover:text-brand-primary transition-colors" />
                                        <span className="text-xs text-slate-500 font-semibold truncate max-w-xs">
                                            {fileName || (t('careers.form.browseResume') || "Drag & drop or browse resume")}
                                        </span>
                                    </div>
                                </div>

                                {error && (
                                    <motion.div 
                                        initial={{ opacity: 0, y: -10 }} 
                                        animate={{ opacity: 1, y: 0 }}
                                        className="flex items-center gap-2 text-red-500 text-xs font-semibold"
                                    >
                                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                                        <span>{error}</span>
                                    </motion.div>
                                )}

                                <div className="pt-4">
                                    <button 
                                        type="submit" 
                                        disabled={loading}
                                        className="w-full py-4 bg-[#1955A6] hover:bg-[#1955A6]/90 text-white font-bold rounded-none transition-all duration-300 flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 text-sm"
                                    >
                                        {loading ? (t('contact.form.sending') || 'Submitting...') : (t('careers.form.submit') || 'Submit Application')}
                                        <Send className="w-4 h-4" />
                                    </button>
                                </div>
                            </form>
                        ) : (
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="py-12 text-center"
                            >
                                <div className="w-16 h-16 bg-[#5C7625]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle2 className="w-8 h-8 text-[#5C7625]" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-3">{t('careers.form.successTitle') || "Application Submitted Successfully!"}</h3>
                                <p className="text-slate-600 font-semibold text-sm max-w-sm mx-auto mb-8 leading-relaxed">
                                    Thank you for applying, {name}. We have received your application for the {selectedJobTitle} position. Our HR team will review your resume and contact you soon.
                                </p>
                                <button 
                                    onClick={onCancel}
                                    className="px-8 py-3.5 bg-[#1955A6] hover:bg-[#1955A6]/95 text-white rounded-full text-sm font-bold shadow-md transition-all"
                                >
                                    {t('careers.form.backToOpenings') || "Back to All Openings"}
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
