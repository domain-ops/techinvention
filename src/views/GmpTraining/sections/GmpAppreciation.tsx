import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Award } from 'lucide-react';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';

import cert2 from '../../../assets/images/certifications/Cert_2-702x1024.jpeg';
import cert3 from '../../../assets/images/certifications/Cert_3-713x1024.jpeg';
import cert5 from '../../../assets/images/certifications/Cert_5.jpg';
import iso from '../../../assets/images/certifications/ISO-655x1024.jpg';

const certificates = [
    {
        id: 'iso9001',
        image: iso,
        title: 'ISO 9001:2015 Certification',
        issuer: 'Dun & Bradstreet / ISO',
        desc: 'Official validation of our Quality Management System and training frameworks, ensuring compliance with global instructional standards.'
    },
    {
        id: 'iso13485',
        image: cert2,
        title: 'ISO 13485:2016 Certification',
        issuer: 'Medical Device Standards',
        desc: 'Specialized quality systems certification proving our compliance in delivering technical modules for medical device and sterile diagnostics manufacturing.'
    },
    {
        id: 'esg',
        image: cert3,
        title: 'ESG Dun & Bradstreet Certificate',
        issuer: 'Dun & Bradstreet ESG',
        desc: 'Recognition of sustainable operations, social governance, and community alignment across our training and manufacturing infrastructure.'
    },
    {
        id: 'dsir',
        image: cert5,
        title: 'DSIR R&D Recognition',
        issuer: 'Ministry of Science & Tech, Govt. of India',
        desc: 'Official recognition of our in-house research, validation cycles, and training standards as an innovative scientific center.'
    }
];

export default function GmpAppreciation() {
    const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);

    return (
        <section className="py-24 bg-white relative overflow-hidden font-sans border-b border-slate-100">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-400/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-[1300px] mx-auto px-6 relative z-10">
                
                {/* Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <ScrollReveal direction="up">
                        <span className="text-[#1955A6] font-bold tracking-[0.4em] text-[11px] mb-3 block uppercase">
                            Credibility Proof
                        </span>
                        <h2 className="text-[28px] md:text-[36px] font-medium tracking-wide mb-6">
                            <SplitTitle title="Appreciation & Certifications" />
                        </h2>
                        <p className="text-slate-600 font-medium text-[16px] md:text-[18px] leading-relaxed">
                            Our training frameworks and facilities have earned certifications and appreciation letters from global validation partners and regulatory bodies. Click on any certificate to view it.
                        </p>
                    </ScrollReveal>
                </div>

                {/* Certificate Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            onClick={() => setSelectedCert(cert)}
                            className="bg-[#F8FAFC] border border-slate-200/50 rounded-[2rem] p-6 text-left relative flex flex-col justify-between group hover:bg-white hover:shadow-xl cursor-pointer transition-all duration-500"
                        >
                            <div>
                                {/* Certificate image preview container */}
                                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-white border border-slate-100 flex items-center justify-center p-4 mb-6 shadow-sm">
                                    <img loading="lazy" 
                                        src={cert.image} 
                                        alt={cert.title} 
                                        className="max-h-full max-w-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-[#1955A6]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md">
                                            <ZoomIn className="w-5 h-5 text-[#1955A6]" />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 mb-2">
                                    <Award className="w-4 h-4 text-[#5C7625]" />
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{cert.issuer}</span>
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-[#1955A6] transition-colors leading-tight">
                                    {cert.title}
                                </h3>
                            </div>
                            
                            <p className="text-slate-500 text-xs font-semibold leading-relaxed border-t border-slate-100 pt-4 mt-2">
                                {cert.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Interactive Lightbox Modal */}
                <AnimatePresence>
                    {selectedCert && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[6000] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
                            onClick={() => setSelectedCert(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.95, y: 20 }}
                                animate={{ scale: 1, y: 0 }}
                                exit={{ scale: 0.95, y: 20 }}
                                transition={{ type: 'spring', duration: 0.5 }}
                                className="relative bg-white rounded-3xl p-6 md:p-8 max-w-2xl w-full shadow-2xl overflow-y-auto max-h-[90vh] flex flex-col items-center"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    onClick={() => setSelectedCert(null)}
                                    className="absolute top-4 right-4 p-2 bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-black rounded-full transition-colors z-10"
                                    aria-label="Close modal"
                                >
                                    <X className="w-5 h-5" />
                                </button>

                                <div className="w-full flex flex-col items-center">
                                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 text-center mb-1">
                                        {selectedCert.title}
                                    </h3>
                                    <p className="text-xs font-bold text-[#1955A6] uppercase tracking-widest mb-6">
                                        {selectedCert.issuer}
                                    </p>

                                    {/* High-res image display */}
                                    <div className="w-full bg-[#fcfcfc] rounded-2xl border border-slate-100 p-6 flex items-center justify-center max-h-[50vh] overflow-hidden mb-6">
                                        <img loading="lazy" 
                                            src={selectedCert.image} 
                                            alt={selectedCert.title} 
                                            className="max-w-full max-h-[45vh] object-contain drop-shadow-xl"
                                        />
                                    </div>

                                    <p className="text-slate-600 font-semibold text-sm md:text-base text-center leading-relaxed max-w-lg">
                                        {selectedCert.desc}
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
}
