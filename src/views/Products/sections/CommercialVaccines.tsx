import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { motion } from 'framer-motion';
import { ShieldCheck, Info, PhoneCall, Mail } from 'lucide-react';

const CommercialVaccines = () => {
    const { t } = useLanguage();
    const productsData = t('productsDocs');

    if (!productsData || !productsData.vaccines) return null;

    return (
        <section id="commercial-vaccines" className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <ScrollReveal direction="up">
                        
                        <h2 className="text-[24px] md:text-4xl lg:text-5xl font-medium tracking-tight text-brand-content mb-6">
                            {productsData.title}
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            {productsData.desc}
                        </p>
                    </ScrollReveal>
                </div>

                {/* Badges */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                    {productsData.badges.map((badge: any, idx: number) => (
                        <ScrollReveal key={idx} direction="up" delay={0.1 * idx}>
                            <div className="bg-brand-primary/5 border border-brand-primary/10 rounded-2xl p-6 text-center hover:bg-brand-primary/10 transition-colors h-full flex flex-col justify-center">
                                <h4 className="font-bold text-brand-content text-lg mb-2">{badge.title}</h4>
                                <p className="text-gray-600 text-sm">{badge.desc}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Vaccines List */}
                <div className="space-y-12 mb-20">
                    {productsData.vaccines.map((vaccine: any, idx: number) => (
                        <ScrollReveal key={idx} direction="up" delay={0.1}>
                            <motion.div 
                                className="bg-white border border-gray-100 rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-xl transition-shadow"
                            >
                                <div className="flex flex-col md:flex-row gap-8 items-start">
                                    
                                    <div className="w-16 h-16 bg-brand-secondary/10 rounded-2xl flex items-center justify-center text-brand-secondary shrink-0">
                                        <ShieldCheck size={32} />
                                    </div>
                                    
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{vaccine.name}</h3>
                                        {vaccine.subtitle && (
                                            <h4 className="text-brand-primary font-medium mb-6 text-sm">{vaccine.subtitle}</h4>
                                        )}
                                        
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div>
                                                <h5 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                                    <Info size={16} className="text-gray-400" /> Composition
                                                </h5>
                                                <ul className="space-y-2 text-sm text-gray-600">
                                                    {vaccine.composition.map((item: string, i: number) => (
                                                        <li key={i}>{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                            
                                            <div className="space-y-6">
                                                <div>
                                                    <h5 className="font-semibold text-gray-900 mb-2 text-sm">Presentation</h5>
                                                    <div className="bg-gray-50 px-4 py-2 rounded-lg text-sm text-gray-700 inline-block border border-gray-100">
                                                        {vaccine.pack}
                                                    </div>
                                                </div>
                                                <div>
                                                    <h5 className="font-semibold text-gray-900 mb-2 text-sm">Indication</h5>
                                                    <p className="text-sm text-gray-600 bg-blue-50/50 p-4 rounded-xl border border-blue-100/50">
                                                        {vaccine.use}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Adverse Reporting */}
                <ScrollReveal direction="up">
                    <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/20 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-secondary/20 rounded-full blur-3xl" />
                        
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="max-w-2xl text-left">
                                <h3 className="text-2xl font-bold mb-4">{productsData.adverseReporting.title}</h3>
                                <p className="text-slate-300 leading-relaxed mb-6">
                                    {productsData.adverseReporting.desc}
                                </p>
                                <p className="text-xs text-slate-400">
                                    {productsData.adverseReporting.privacyNote}
                                </p>
                            </div>
                            
                            <div className="flex flex-col gap-4 min-w-[250px] w-full md:w-auto">
                                <a href={`tel:${productsData.adverseReporting.phone}`} className="flex items-center gap-4 bg-white/10 hover:bg-white/20 transition-colors p-4 rounded-xl border border-white/10 group">
                                    <div className="bg-brand-primary p-2 rounded-lg group-hover:scale-110 transition-transform">
                                        <PhoneCall size={18} />
                                    </div>
                                    <span className="font-bold tracking-wide">{productsData.adverseReporting.phone}</span>
                                </a>
                                <a href={`mailto:${productsData.adverseReporting.email}`} className="flex items-center gap-4 bg-white/10 hover:bg-white/20 transition-colors p-4 rounded-xl border border-white/10 group">
                                    <div className="bg-brand-secondary p-2 rounded-lg group-hover:scale-110 transition-transform text-white">
                                        <Mail size={18} />
                                    </div>
                                    <span className="font-medium tracking-wide truncate">{productsData.adverseReporting.email}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

            </div>
        </section>
    );
};

export default CommercialVaccines;
