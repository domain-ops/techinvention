import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users } from 'lucide-react';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';

export default function WhoWeLookFor() {
    return (
        <section className="py-24 bg-white relative overflow-hidden font-sans border-b border-slate-200/60">
            {/* Subtle background decoration */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#1955A6]/5 blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />

            <div className="max-w-[1300px] mx-auto px-6 relative z-10">
                <ScrollReveal direction="up">
                    <div className="bg-[#FAFAFA] border border-slate-200/60 rounded-3xl p-10 md:p-16 lg:p-20 shadow-sm relative overflow-hidden group">
                        
                        {/* Decorative background element for the card */}
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-[#1955A6]/5 to-[#5C7625]/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4 pointer-events-none group-hover:opacity-100 opacity-50 transition-opacity duration-700" />
                        
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
                            
                            <div className="lg:col-span-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-full bg-[#1955A6]/10 flex items-center justify-center">
                                        <Users className="w-6 h-6 text-[#1955A6]" />
                                    </div>
                                </div>
                                
                                <h2 className="text-[24px] md:text-[42px] font-medium tracking-wide mb-4 leading-tight text-slate-900">
                                    <SplitTitle title="Who We Look For" />
                                </h2>
                                
                                <h3 className="text-xl md:text-2xl font-bold text-[#5C7625] mb-6">
                                    Talent with curiosity, discipline and drive
                                </h3>
                                
                                <p className="text-slate-600 font-medium text-[16px] md:text-[18px] leading-relaxed max-w-3xl">
                                    We welcome professionals who are ambitious, thoughtful and ready to take ownership. 
                                    Whether you are a scientist, engineer, consultant, regulatory expert, finance professional or 
                                    corporate leader, TechInvention offers the opportunity to grow with purpose.
                                </p>
                            </div>
                            
                            <div className="lg:col-span-4 flex lg:justify-end mt-4 lg:mt-0">
                                <button 
                                    onClick={() => document.getElementById('current-openings')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="px-8 py-4 bg-[#1955A6] hover:bg-[#1955A6]/95 text-white font-bold rounded-full transition-all duration-300 flex items-center gap-3 shadow-md hover:shadow-lg hover:-translate-y-1"
                                >
                                    Explore Openings
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>
                            
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
