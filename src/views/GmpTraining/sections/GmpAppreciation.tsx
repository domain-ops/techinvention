import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';
import { useLanguage } from '../../../context/LanguageContext';

const basePath = process.env.BASE_PATH || '';

const certificates = [
    {
        id: 'feedback1',
        image: '/application-feedback-1.jpg',
        title: 'Appreciation Letter',
        issuer: 'UNOPS'
    },
    {
        id: 'feedback2',
        image: '/application-feedback-2.jpg',
        title: 'Appreciation Letter',
        issuer: 'UNOPS'
    }
];

export default function GmpAppreciation() {
    const { t } = useLanguage();
    const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (selectedCert) {
            document.body.style.overflow = 'hidden';
            const handleKeyDown = (e: KeyboardEvent) => {
                if (e.key === 'Escape') {
                    setSelectedCert(null);
                }
            };
            window.addEventListener('keydown', handleKeyDown);
            return () => {
                document.body.style.overflow = '';
                window.removeEventListener('keydown', handleKeyDown);
            };
        } else {
            document.body.style.overflow = '';
        }
    }, [selectedCert]);

    return (
        <section className="py-24 bg-white relative overflow-hidden font-sans border-b border-slate-100">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-400/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-[1300px] mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <ScrollReveal direction="up">
                        <h2 className="text-[24px] md:text-[36px] font-medium tracking-wide">
                            <SplitTitle title={t('training.recognitionTitle') || "Recognition"} />
                        </h2>
                    </ScrollReveal>
                </div>

                {/* Grid - Centered 2-column layout for the two feedback letters */}
                <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-8">
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
                                {/* image preview container */}
                                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-white border border-slate-100 flex items-center justify-center p-4 shadow-sm">
                                    <img loading="lazy"
                                        src={`${basePath}${cert.image}`}
                                        alt={cert.title}
                                        className="max-h-full max-w-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-[#1955A6]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md">
                                            <ZoomIn className="w-5 h-5 text-[#1955A6]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Interactive Lightbox Modal via Portal */}
                {mounted && createPortal(
                    <AnimatePresence>
                        {selectedCert && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 z-[999999] flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/85 backdrop-blur-sm cursor-zoom-out"
                                onClick={() => setSelectedCert(null)}
                            >
                                <button
                                    onClick={() => setSelectedCert(null)}
                                    className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/90 hover:text-white p-2.5 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-200 z-[1000000] flex items-center justify-center shadow-lg border border-white/10"
                                    aria-label="Close modal"
                                >
                                    <X size={24} />
                                </button>

                                <motion.div
                                    initial={{ scale: 0.95, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.95, opacity: 0 }}
                                    transition={{ duration: 0.25, ease: "easeOut" }}
                                    className="relative max-w-[92vw] sm:max-w-[80vw] md:max-w-[65vw] lg:max-w-[50vw] xl:max-w-[42vw] max-h-[85vh] bg-white rounded-2xl p-2 sm:p-4 flex items-center justify-center shadow-2xl overflow-hidden cursor-default"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <img loading="lazy"
                                        src={`${basePath}${selectedCert.image}`}
                                        alt={selectedCert.title}
                                        className="w-auto h-auto max-w-full max-h-[80vh] object-contain rounded-xl"
                                    />
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>,
                    document.body
                )}

            </div>
        </section>
    );
}
