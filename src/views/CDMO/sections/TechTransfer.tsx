import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { ArrowRight, FileCheck, RefreshCw, Activity, PackageCheck } from 'lucide-react';

const TechTransfer = () => {
    const steps = [
        { num: '01', title: 'Tech Pack Receipt', desc: 'Comprehensive review of process and analytical methods.', icon: FileCheck },
        { num: '02', title: 'Process Adaptation', desc: 'Facility fit analysis and scale-up engineering.', icon: RefreshCw },
        { num: '03', title: 'Engineering Runs', desc: 'Non-GMP confirmation batches.', icon: Activity },
        { num: '04', title: 'GMP Manufacturing', desc: 'Clinical and commercial production.', icon: PackageCheck }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6">
                <ScrollReveal direction="up">
                    <div className="bg-gray-50 rounded-[3rem] p-12 md:p-20 shadow-inner relative overflow-hidden border border-gray-100">
                        {/* Decorative background blur */}
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-primary/10 rounded-full blur-[100px] pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-secondary/10 rounded-full blur-[100px] pointer-events-none" />
                        
                        <div className="relative z-10 text-center mb-20">
                            <h2 className="text-[24px] md:text-4xl lg:text-5xl font-medium tracking-tight mb-6 text-brand-content">
                                Technology Transfer Readiness
                            </h2>
                            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                                A streamlined, rigorous process ensuring seamless transition from R&D to full-scale commercial manufacturing.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                            {/* Connecting Line for lg screens */}
                            <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-brand-primary/20 via-brand-secondary/40 to-brand-primary/20" />
                            
                            {steps.map((step, idx) => (
                                <motion.div 
                                    key={idx} 
                                    whileHover={{ y: -5 }}
                                    className="relative group text-center"
                                >
                                    <div className="w-20 h-20 mx-auto rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center mb-8 relative z-10 group-hover:border-brand-primary transition-colors duration-500">
                                        <step.icon className="w-8 h-8 text-brand-primary group-hover:scale-110 transition-transform" />
                                        {/* Number Badge */}
                                        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-brand-secondary text-white text-xs font-bold flex items-center justify-center shadow-md">
                                            {step.num}
                                        </div>
                                    </div>
                                    
                                    <h3 className="text-xl font-bold mb-3 text-brand-content">{step.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed max-w-[200px] mx-auto">{step.desc}</p>
                                    
                                    {/* Arrow for non-last items (visible on lg screens) */}
                                    {idx < steps.length - 1 && (
                                        <div className="hidden md:flex absolute top-7 -right-4 w-6 h-6 bg-gray-50 items-center justify-center z-20 text-brand-secondary">
                                            <ArrowRight size={20} />
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};
export default TechTransfer;
