import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';
import visionImg from '../../../../src/assets/images/about_corporate.png';

// Quote Icon SVG
const QuoteIcon = ({ className }: { className?: string }) => (
    <svg className={className} width="44" height="44" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.017 21L16.417 14.5C16.417 14.5 17.5 14.5 17.5 11.5C17.5 8.5 15.5 8.5 15.5 8.5C15.5 8.5 15.5 6 18.5 6C21.5 6 22 9.5 22 11.5C22 13.5 19.417 21 19.417 21H14.017ZM5.01697 21L7.41697 14.5C7.41697 14.5 8.5 14.5 8.5 11.5C8.5 8.5 6.5 8.5 6.5 8.5C6.5 8.5 6.5 6 9.5 6C12.5 6 13 9.5 13 11.5C13 13.5 10.417 21 10.417 21H5.01697Z"/>
    </svg>
);

const VisionMissionValues = () => {
    const { t } = useLanguage();

    const values = [
        {
            number: "01",
            title: "Integrity",
            desc: "We act with honesty, transparency, and accountability in everything we do."
        },
        {
            number: "02",
            title: "Inclusivity",
            desc: "We believe in creating equitable opportunities and fostering diverse collaborations across borders."
        },
        {
            number: "03",
            title: "Ingenuity",
            desc: "We drive innovation through bold thinking and practical problem-solving, always focused on impactful outcomes."
        }
    ];

    return (
        <section className="py-20 md:py-32 bg-white relative overflow-hidden font-sans">
            
            <div className="max-w-[1300px] mx-auto px-6 relative z-10">
                
                {/* Section Header */}
                <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="text-left flex-1">
                        <ScrollReveal direction="up">
                            <span className="text-brand-primary font-medium tracking-[0.4em] text-[11px] mb-2 block uppercase text-left">
                                Our Purpose
                            </span>
                            <div className="mb-4">
                                <h2 className="text-[28px] md:text-[36px] font-medium tracking-wide whitespace-normal md:whitespace-nowrap text-left">
                                    <SplitTitle title="Purpose & Principles" />
                                </h2>
                            </div>
                            <p className="text-black text-[16px] md:text-[18px] font-medium max-w-3xl leading-relaxed text-left">
                                The foundation of our organization is built on a clear vision for the future, a driving mission for today, and the core values that guide our every step.
                            </p>
                        </ScrollReveal>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
                    
                    {/* VISION BENTO BOX */}
                    <div className="lg:col-span-7 bg-white rounded-none p-10 md:p-14 border border-slate-200/60 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden group">
                        
                        {/* Decorative Background Image */}
                        <div className="absolute inset-0 w-full h-full hidden sm:block opacity-60 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none">
                            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent z-10" />
                            <img loading="lazy" src={visionImg} alt="Vision Background" className="w-full h-full object-cover object-right grayscale mix-blend-multiply" />
                        </div>

                        {/* Huge Watermark */}
                        <div className="absolute -bottom-16 -right-12 text-[200px] md:text-[280px] font-bold text-slate-50 leading-none group-hover:scale-105 transition-transform duration-1000 ease-out select-none pointer-events-none z-0">
                            V
                        </div>
                        
                        <div className="relative z-10 flex flex-col h-full">
                            <div>
                                <span className="inline-block py-1.5 px-4 rounded-full bg-brand-primary/10 text-brand-primary text-[11px] font-bold tracking-[0.2em] uppercase mb-8">
                                    Our Vision
                                </span>
                                
                                <h3 className="text-3xl md:text-[40px] lg:text-[46px] font-medium leading-[1.15] text-slate-900 mb-8 max-w-[95%]">
                                    Enabling One Health<br/>through Bio-innovation
                                </h3>
                            </div>
                            
                            <ul className="text-lg text-black font-medium leading-relaxed max-w-xl mt-auto list-disc pl-6 space-y-2">
                                <li>Affordable</li>
                                <li>Accessible</li>
                                <li>Acceptable</li>
                            </ul>
                        </div>
                    </div>

                    {/* MISSION BENTO BOX */}
                    <div className="lg:col-span-5 bg-gradient-to-br from-brand-primary to-[#104085] rounded-none p-10 md:p-14 text-white relative overflow-hidden group shadow-xl">
                        {/* Background Element */}
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-700 ease-out select-none pointer-events-none">
                            <QuoteIcon className="w-32 h-32 md:w-40 md:h-40" />
                        </div>
                        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />

                        <div className="relative z-10 flex flex-col h-full">
                            <div>
                                <span className="inline-block py-1.5 px-4 rounded-full bg-white/20 text-white text-[11px] font-bold tracking-[0.2em] uppercase mb-8 backdrop-blur-sm">
                                    Our Mission
                                </span>
                                
                                <h3 className="text-3xl md:text-[34px] lg:text-[40px] font-medium leading-[1.2] mb-6 pr-8 text-white">
                                    Access to Essential Vaccines and Novel Biologics Should Not Only be the Privilege of Just the Affording Few.
                                </h3>
                            </div>
                        </div>
                    </div>

                    {/* VALUES SECTION (Spans full width) */}
                    <div className="lg:col-span-12 mt-24 md:mt-32 relative">

                        <div className="mb-16 text-left relative z-10">
                            <h2 className="text-[36px] md:text-[42px] font-medium tracking-wide uppercase">
                                <span className="text-[#1955A6]">Our</span> <span className="text-[#5C7625]">Values</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16 relative z-10">
                            {values.map((val, idx) => (
                                <ScrollReveal key={idx} direction="up" delay={idx * 0.1}>
                                    <div className="flex gap-8 items-start">
                                        <span className="text-[28px] md:text-[34px] font-extrabold text-slate-900 leading-none shrink-0 w-12">
                                            {val.number}
                                        </span>
                                        <div className="flex flex-col gap-3">
                                            <h4 className="text-[15px] md:text-[16px] font-extrabold tracking-wider text-slate-900 uppercase leading-snug">
                                                {val.title}
                                            </h4>
                                            <p className="text-slate-500 text-[14px] md:text-[15px] leading-[1.8] font-medium">
                                                {val.desc}
                                            </p>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                        
                    </div>
                </div>

            </div>
        </section>
    );
};

export default VisionMissionValues;
