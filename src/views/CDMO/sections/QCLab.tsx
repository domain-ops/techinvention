import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { CheckCircle2, ShieldCheck, Microscope, TestTube2 } from 'lucide-react';
import qcBg from '../../../assets/images/about_lab.png';

const QCLab = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-brand-background">
            <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none">
                <img loading="lazy" src={qcBg} alt="QC Lab" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-background to-transparent" />
            </div>

            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <ScrollReveal direction="up">
                        <span className="text-brand-secondary font-bold tracking-[0.3em] text-[11px] md:text-[13px] uppercase block mb-4 flex items-center justify-center gap-2">
                            <TestTube2 size={16} /> Quality & Compliance
                        </span>
                        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-brand-content">
                            QC Lab & Analytical Support
                        </h2>
                    </ScrollReveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: 'In-Process Testing', desc: 'Real-time monitoring and advanced analytics during all critical manufacturing phases.', icon: Microscope },
                        { title: 'Release Testing', desc: 'Comprehensive final product testing adhering to strict global pharmacopeial monographs.', icon: CheckCircle2 },
                        { title: 'Stability Studies', desc: 'ICH-compliant stability chambers for rigorous long-term and accelerated testing.', icon: ShieldCheck }
                    ].map((item, idx) => (
                        <ScrollReveal key={idx} direction="up" delay={idx * 0.1}>
                            <motion.div 
                                whileHover={{ y: -10 }}
                                className="group bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-xl border border-gray-100 hover:border-brand-primary/30 transition-all h-full relative overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-primary to-brand-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                                
                                <div className="relative z-10">
                                    <div className="w-16 h-16 rounded-2xl bg-brand-primary/5 flex items-center justify-center mb-8 group-hover:bg-brand-primary/10 transition-colors duration-500">
                                        <item.icon className="w-8 h-8 text-brand-primary" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-brand-content mb-4">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default QCLab;
