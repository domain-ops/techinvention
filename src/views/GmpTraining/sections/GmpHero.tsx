import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';
import teamWorkshop from '../../../assets/images/team_gallery/team_workshop.png';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';

export default function GmpHero() {
    const scrollToEnquiry = () => {
        const ctaSection = document.getElementById('gmp-enquiry-section');
        if (ctaSection) {
            ctaSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-white pt-32 pb-16 lg:pt-40 lg:pb-24 font-sans">
            {/* Ambient background glows */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[#1955A6]/5 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] rounded-full bg-[#5C7625]/5 blur-[100px] pointer-events-none" />

            <div className="max-w-[1300px] mx-auto px-6 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    
                    {/* Left Column: Text Content */}
                    <div className="lg:col-span-6 text-left">
                        <ScrollReveal direction="up">
                            <span className="text-[#1955A6] font-bold tracking-[0.4em] text-[11px] mb-4 block uppercase">
                                Academy of Excellence
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-medium tracking-wide mb-6 leading-[1.15]">
                                <SplitTitle title="GMP Training Unit" />
                            </h1>
                            <p className="text-slate-600 text-[16px] md:text-[18px] leading-relaxed mb-8 font-medium">
                                Step into a world-class training ecosystem designed to bridge theoretical compliance with hands-on practice. Our facility integrates interactive classrooms with real-world GMP environment simulations to empower biopharma professionals.
                            </p>
                        </ScrollReveal>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="flex flex-wrap gap-4"
                        >
                            <button 
                                onClick={scrollToEnquiry}
                                className="px-8 py-4 bg-[#1955A6] hover:bg-[#1955A6]/95 text-white font-bold rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center gap-2 text-sm"
                            >
                                <BookOpen className="w-4 h-4" />
                                Register Now
                            </button>
                            <button 
                                onClick={() => document.getElementById('gmp-subjects-section')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-8 py-4 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 font-bold rounded-full hover:shadow-sm hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center gap-2 text-sm"
                            >
                                View Modules
                                <ArrowRight className="w-4 h-4 text-[#5C7625]" />
                            </button>
                        </motion.div>
                    </div>

                    {/* Right Column: Large Interactive Image */}
                    <div className="lg:col-span-6 w-full">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.98, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="w-full"
                        >
                            <div className="relative rounded-[2rem] overflow-hidden border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.08)] bg-slate-50 p-2 md:p-3">
                                {/* Subtle brand color overlay */}
                                <div className="absolute inset-0 bg-[#1955A6]/2 z-10 pointer-events-none rounded-[1.85rem]" />
                                <img src={teamWorkshop} 
                                    alt="GMP Training session in classroom" 
                                    className="w-full h-auto min-h-[300px] md:min-h-[400px] lg:max-h-[500px] object-cover rounded-[1.75rem]"
                                />
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
