import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';

export default function CareersHero() {
    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-white pt-32 pb-16 lg:pt-40 lg:pb-24 font-sans">
            {/* Ambient background decoration - extremely subtle light glows */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[#1955A6]/5 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] rounded-full bg-[#5C7625]/5 blur-[100px] pointer-events-none" />

            <div className="max-w-[1300px] mx-auto px-6 relative z-10 w-full">
                {/* Text Section - Stacked at the top */}
                <div className="max-w-4xl text-left mb-12 lg:mb-16">
                    <ScrollReveal direction="up">
                        <span className="text-[#1955A6] font-bold tracking-[0.4em] text-[11px] mb-4 block uppercase">
                            Careers
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-[56px] font-medium tracking-wide mb-6 leading-[1.15]">
                            <SplitTitle title="Build technology that supports real care" />
                        </h1>
                        <p className="text-slate-600 text-[16px] md:text-[18px] leading-relaxed mb-8 max-w-3xl font-medium">
                            Explore open roles and teams at TechInvention, where we build biotechnology solutions, clinical workflows, and advanced diagnostics for global healthcare environments.
                        </p>
                    </ScrollReveal>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="flex flex-wrap gap-4"
                    >
                        <button 
                            onClick={() => document.getElementById('current-openings')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-4 bg-[#1955A6] hover:bg-[#1955A6]/95 text-white font-bold rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center gap-2 text-sm"
                        >
                            <Briefcase className="w-4 h-4" />
                            Explore Openings
                        </button>
                    </motion.div>
                </div>


            </div>
        </section>
    );
}

