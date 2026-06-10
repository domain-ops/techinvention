import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Beaker, Dna, Activity } from 'lucide-react';
import heroBg from '../../../assets/images/rnd/rnd_hero_bg.png';

const LandingHero = () => {
    return (
        <section className="relative w-full h-screen min-h-[600px] max-h-[1000px] flex items-center justify-center overflow-hidden font-sans">
            {/* Background Image & Overlays */}
            <div className="absolute inset-0 z-0">
                <img 
                    src={heroBg} 
                    alt="R&D Innovation" 
                    className="w-full h-full object-cover transform scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]"
                />
                <div className="absolute inset-0 bg-[#040b16]/70 backdrop-blur-[2px]" />
                
                {/* Decorative glowing orbs */}
                <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-primary/20 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-1/4 right-0 w-[30rem] h-[30rem] bg-brand-secondary/10 rounded-full blur-[120px] pointer-events-none" />
                
                {/* Gradient fade to match page background at the bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent" />
            </div>

            {/* Main Content Grid */}
            <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-16">
                
                {/* Left: Typography & Intro */}
                <motion.div 
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="lg:col-span-7"
                >
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
                        <div className="w-2 h-2 rounded-full bg-brand-secondary animate-pulse" />
                        <span className="text-white text-xs font-bold tracking-[0.2em] uppercase">Research & Development</span>
                    </div>
                    
                    <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-light tracking-tighter text-white mb-6 leading-[1.1]">
                        Pioneering the <br />
                        <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">
                            Future of Global Health
                        </span>
                    </h1>
                    
                    <p className="text-lg md:text-xl text-gray-300 font-light max-w-2xl leading-relaxed mb-10 border-l-2 border-white/20 pl-6 py-2">
                        Leveraging cutting-edge science and our dedicated HORIZON innovation platform to develop accessible vaccines and rapid diagnostics for emerging markets.
                    </p>

                    <div className="flex items-center gap-6">
                        <button className="px-8 py-4 bg-brand-primary text-white font-medium rounded-full hover:bg-brand-primary/90 transition-all hover:shadow-[0_0_20px_rgba(32,101,179,0.4)]">
                            Explore Platforms
                        </button>
                        <button className="px-8 py-4 bg-white/5 text-white font-medium rounded-full border border-white/10 hover:bg-white/10 backdrop-blur-md transition-all">
                            Partner With Us
                        </button>
                    </div>
                </motion.div>

                {/* Right: Glassmorphic Highlights Card */}
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    className="hidden lg:block lg:col-span-5 relative"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl transform rotate-3 scale-105 blur-sm" />
                    
                    <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
                        <h3 className="text-white font-medium text-xl mb-6 flex items-center justify-between">
                            R&D Capabilities
                            <Activity className="text-brand-secondary w-5 h-5" />
                        </h3>
                        
                        <div className="space-y-6">
                            {[
                                { icon: <Dna className="w-6 h-6 text-blue-400" />, title: 'Molecular Diagnostics', desc: 'Rapid, point-of-care detection systems.' },
                                { icon: <Beaker className="w-6 h-6 text-teal-400" />, title: 'Vaccine Innovation', desc: 'Preclinical to Phase III clinical pipelines.' },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 p-4 rounded-2xl bg-black/20 hover:bg-black/30 transition-colors border border-white/5">
                                    <div className="flex-shrink-0 mt-1">{item.icon}</div>
                                    <div>
                                        <h4 className="text-white font-medium mb-1">{item.title}</h4>
                                        <p className="text-gray-400 text-sm font-light leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
                
            </div>

            {/* Scroll Indicator */}
            <motion.div 
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-brand-primary z-20 flex flex-col items-center gap-2"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
                <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
                <ChevronDown size={24} strokeWidth={2} />
            </motion.div>
        </section>
    );
};

export default LandingHero;
