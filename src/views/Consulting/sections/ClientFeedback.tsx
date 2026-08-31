import React from 'react';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';
import { FileText, ExternalLink } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';

const basePath = process.env.BASE_PATH || '';

export default function ClientFeedback() {
    const { t } = useLanguage();

    const feedbackDocuments = [
        { 
            src: "/feedback-4.png", 
            pdf: "/articales/Certificate_IAVI_TechInvention.pdf", 
            title: "IAVI Certificate of Acknowledgement",
            alt: "Client Feedback Letter - IAVI" 
        },
        { 
            src: "/feedback-3.jpg", 
            pdf: "/articales/Feedback letter_IM Signed.pdf", 
            title: "UNOPS Biosafety & Biosecurity Training",
            alt: "Client Feedback Letter - UNOPS Biosafety & Biosecurity Training" 
        },
        { 
            src: "/feedback-2.jpg", 
            pdf: "/articales/Feedback letter for Vaccine Analytics Training.pdf", 
            title: "UNOPS Vaccine Analytics Training",
            alt: "Client Feedback Letter - UNOPS Vaccine Analytics Training" 
        },
        { 
            src: "/feedback-1.jpg", 
            pdf: "/articales/Letter of Appreciation - Techinvention Lifecare Pvt. Ltd.pdf", 
            title: "WHO Letter of Appreciation",
            alt: "Client Feedback Letter - WHO" 
        }
    ];

    return (
        <section className="py-20 bg-slate-50 border-t border-slate-100 font-sans">
            <div className="max-w-[1300px] mx-auto px-6">
                
                {/* Section Header */}
                <div className="text-center mb-16">
                    <ScrollReveal direction="up">
                        <h2 className="text-[24px] md:text-[38px] font-medium tracking-wide">
                            <SplitTitle title={t('strategicAdvisory.feedbackTitle') || t('consulting.feedbackTitle') || "Feedback from Clients"} />
                        </h2>
                    </ScrollReveal>
                </div>

                {/* 4-Column Card Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {feedbackDocuments.map((doc, idx) => (
                        <ScrollReveal key={idx} direction="up" delay={idx * 0.1}>
                            <a 
                                href={encodeURI(`${basePath}${doc.pdf}`)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-white p-4 border border-slate-200 rounded-2xl cursor-pointer hover:border-[#1955A6]/40 hover:shadow-xl transition-all duration-300 relative overflow-hidden block"
                            >
                                {/* Image Container */}
                                <div className="aspect-[3/4] relative overflow-hidden rounded-lg bg-white border border-slate-200/80 flex items-center justify-center">
                                    <img 
                                        src={`${basePath}${doc.src}`} 
                                        alt={doc.alt} 
                                        className="w-full h-full object-contain object-top transition-transform duration-500 group-hover:scale-[1.03]" 
                                    />
                                    
                                    {/* Hover overlay with Open PDF button */}
                                    <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 p-4">
                                        <div className="bg-white text-[#1955A6] px-4 py-2.5 rounded-full shadow-lg font-semibold text-xs flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                            <FileText size={16} />
                                            <span>View Full PDF</span>
                                            <ExternalLink size={14} />
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </ScrollReveal>
                    ))}
                </div>

            </div>
        </section>
    );
}
