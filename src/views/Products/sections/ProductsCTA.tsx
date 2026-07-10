import React, { useState, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';

const Dithering = lazy(() =>
    import("@paper-design/shaders-react").then((mod) => ({ default: mod.Dithering }))
);

export default function ProductsCTA() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section className="py-20 w-full flex justify-center items-center px-4 md:px-6 bg-white relative font-sans">
            <div 
                className="w-full max-w-5xl relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="relative overflow-hidden rounded-none border border-slate-200/60 bg-slate-50 py-16 md:py-24 flex flex-col items-center justify-center duration-500">
                    <Suspense fallback={<div className="absolute inset-0 bg-slate-50" />}>
                        <div className="absolute inset-0 z-0 pointer-events-none opacity-20 mix-blend-multiply transition-opacity duration-500">
                            <Dithering
                                colorBack="#00000000"
                                colorFront="#1955A6"  // brand-primary
                                shape="warp"
                                type="4x4"
                                speed={isHovered ? 0.6 : 0.2}
                                className="w-full h-full absolute inset-0"
                                minPixelRatio={1}
                            />
                        </div>
                    </Suspense>
                    
                    <ScrollReveal direction="up" className="relative z-10 px-6 max-w-3xl mx-auto text-center flex flex-col items-center">
                        <span className="text-brand-primary font-medium tracking-[0.4em] text-[11px] mb-2 block uppercase text-center">
                            Get in Touch
                        </span>
                        
                        <h2 className="text-[36px] font-medium tracking-wide mb-4 leading-tight text-center">
                            <SplitTitle title="Partner With TechInvention for Vaccine Access" />
                        </h2>
                        
                        <p className="text-black text-[18px] max-w-2xl mb-8 leading-relaxed font-medium tracking-tight text-center">
                            Connect with TechInvention to explore product availability, licensing partnerships and access opportunities for market-authorized vaccines.
                        </p>
                        
                        <div className="flex flex-col items-center gap-8">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group relative flex items-center gap-3 bg-[#1955A6] text-white px-8 py-3.5 rounded-full transition-all duration-300 hover:bg-[#1955A6]/90 hover:shadow-xl overflow-hidden"
                            >
                                <span className="relative z-10 text-[13px] font-bold uppercase tracking-widest">
                                    Request a Quote
                                </span>
                                <div className="relative overflow-hidden w-4 h-4 flex items-center justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="transition-transform duration-300 group-hover:translate-x-full"
                                    >
                                        <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                                    </svg>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="absolute -left-full transition-transform duration-300 group-hover:translate-x-full"
                                    >
                                        <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                                    </svg>
                                </div>
                                {/* Shine Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            </motion.button>
                            
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-6">
                                <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full border border-slate-200/60 shadow-sm">
                                    <Phone className="w-5 h-5 text-[#5C7625]" />
                                    <span className="font-bold text-sm text-slate-800">+1 (800) 123-4567</span>
                                </div>
                                <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full border border-slate-200/60 shadow-sm">
                                    <Mail className="w-5 h-5 text-[#5C7625]" />
                                    <span className="font-bold text-sm text-slate-800">sales@techinvention.com</span>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
