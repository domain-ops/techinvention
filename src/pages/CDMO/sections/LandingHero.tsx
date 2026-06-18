import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Settings, ShieldCheck } from 'lucide-react';
import heroBg from '../../../assets/images/banner-imge-1.jpg';

const LandingHero = () => {
    return (
        <section className="relative w-full min-h-[80vh] lg:h-screen lg:min-h-[600px] lg:max-h-[900px] flex items-center justify-center overflow-hidden font-sans bg-white pt-24 pb-16 lg:pt-0 lg:pb-0">
            {/* Background Image & Overlays */}
            <div className="absolute inset-0 z-0 opacity-10">
                <img src={heroBg} alt="CDMO Services" className="w-full h-full object-cover" />
            </div>
            
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-brand-primary/10 via-transparent to-brand-secondary/5" />

            <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-8 lg:mt-16">
                
                {/* Left: Typography & Intro */}
                <motion.div 
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="lg:col-span-7"
                >
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 backdrop-blur-md mb-6 lg:mb-8">
                        <div className="w-2 h-2 rounded-full bg-brand-secondary animate-pulse" />
                        <span className="text-brand-primary text-xs font-bold tracking-[0.2em] uppercase">Contract Manufacturing</span>
                    </div>
                    
                    <div className="text-4xl md:text-5xl lg:text-[4rem] font-light tracking-tighter text-brand-content mb-6 leading-[1.15]">
                        Excellence in <br className="hidden md:block" />
                        <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
                            CDMO Services
                        </span>
                    </div>
                    
                    <p className="text-base md:text-lg text-gray-600 font-light max-w-2xl leading-relaxed mb-8 lg:mb-10 border-l-4 border-brand-secondary/50 pl-6 py-2">
                        State-of-the-art manufacturing facilities driving innovation from drug substance to finished product, adhering to global GMP standards.
                    </p>

                    <div className="flex flex-wrap items-center gap-4 lg:gap-6">
                        <button className="px-6 py-3 lg:px-8 lg:py-4 bg-brand-primary text-white text-sm lg:text-base font-medium rounded-full hover:bg-brand-primary/90 transition-all shadow-lg hover:shadow-brand-primary/30">
                            Explore Facility
                        </button>
                    </div>
                </motion.div>

                {/* Right: Feature Highlights */}
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    className="lg:col-span-5 relative"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 rounded-3xl transform -rotate-3 scale-105 blur-xl hidden lg:block" />
                    
                    <div className="relative bg-white/90 backdrop-blur-xl border border-gray-100 rounded-3xl p-6 lg:p-8 shadow-2xl">
                        <div className="text-brand-content font-bold text-xl mb-6 lg:mb-8 flex items-center justify-between pb-4 border-b border-gray-100">
                            Core Capabilities
                            <Factory className="text-brand-primary w-6 h-6" />
                        </div>
                        
                        <div className="space-y-4">
                            {[
                                { icon: <Settings className="w-5 h-5 lg:w-6 lg:h-6 text-brand-primary" />, title: 'End-to-End Solutions', desc: 'Seamless scale-up from R&D to commercial manufacturing.' },
                                { icon: <ShieldCheck className="w-5 h-5 lg:w-6 lg:h-6 text-brand-secondary" />, title: 'Global Compliance', desc: 'Stringent quality control adhering to international GMP.' },
                            ].map((item, i) => (
                                <div key={i} className="group flex gap-4 lg:gap-5 p-4 lg:p-5 rounded-2xl bg-gray-50 hover:bg-white transition-all border border-transparent hover:border-brand-primary/20 hover:shadow-md">
                                    <div className="flex-shrink-0 mt-1 p-2 lg:p-3 bg-white rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <div className="text-brand-content font-bold text-base lg:text-lg mb-1 tracking-wide">{item.title}</div>
                                        <p className="text-gray-500 text-xs lg:text-sm font-light leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
                
            </div>
        </section>
    );
};

export default LandingHero;
