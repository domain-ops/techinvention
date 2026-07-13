import React from 'react';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';
import horizonBg from '../../../assets/images/rnd/horizon_platform_bg.png';

const OverviewBand = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6">
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Left side: Text Content */}
                    <div>
                        <ScrollReveal direction="up">
                            <span className="text-brand-primary font-bold tracking-[0.3em] text-[11px] md:text-[13px] uppercase block mb-4">
                                R&D Focus Areas
                            </span>
                            <h2 className="text-[24px] md:text-5xl font-medium tracking-tight text-brand-content mb-8 leading-tight">
                                <SplitTitle title="Driving Innovation Across Vaccines & Diagnostics" />
                            </h2>
                            <p className="text-black font-medium text-lg leading-relaxed mb-6">
                                At TechInvention, our Research & Development efforts are strategically focused on addressing the most pressing global health challenges. We specialize in the rapid development of accessible vaccines and cutting-edge molecular and lateral flow diagnostics.
                            </p>
                            <p className="text-black font-medium text-lg leading-relaxed">
                                Our robust pipeline is designed to translate breakthrough scientific discoveries into viable, scalable, and affordable healthcare solutions for emerging markets and beyond.
                            </p>
                        </ScrollReveal>
                    </div>

                    {/* Right side: HORIZON Platform Highlight */}
                    <div>
                        <ScrollReveal direction="left" delay={0.2}>
                            <div className="relative rounded-none overflow-hidden shadow-2xl group">
                                <div className="absolute inset-0 z-0">
                                    <img loading="lazy" 
                                        src={horizonBg} 
                                        alt="HORIZON Platform" 
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-brand-primary/80 backdrop-blur-sm mix-blend-multiply" />
                                </div>

                                <div className="relative z-10 p-10 md:p-14">
                                    <h3 className="text-white text-3xl font-medium mb-4">HORIZON</h3>
                                    <div className="w-12 h-1 bg-brand-secondary mb-6" />
                                    <p className="text-white/90 text-lg font-light leading-relaxed mb-8">
                                        Our dedicated innovation and preclinical development platform. HORIZON accelerates the path from concept to clinical trials, providing state-of-the-art infrastructure for biotherapeutic research.
                                    </p>
                                    <ul className="space-y-4">
                                        {[
                                            'Advanced Preclinical Facilities',
                                            'Rapid Prototyping & Assays',
                                            'Global Compliance Standards'
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-center gap-3 text-white">
                                                <div className="w-1.5 h-1.5 rounded-full bg-brand-secondary" />
                                                <span className="font-medium tracking-wide">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default OverviewBand;
