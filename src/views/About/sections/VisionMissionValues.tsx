import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';

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
        <section className="pt-8 pb-20 md:pt-12 md:pb-32 bg-white relative overflow-hidden font-sans">
            <div className="max-w-[1300px] mx-auto px-6 relative z-10">
                
                {/* Section Header */}
                <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="text-left flex-1">
                        <ScrollReveal direction="up">
                            <div className="mb-4">
                                <h2 className="text-[24px] md:text-[36px] font-medium tracking-wide whitespace-normal md:whitespace-nowrap text-left">
                                    <SplitTitle title="Purpose & Principles" />
                                </h2>
                            </div>
                            <p className="text-black text-[16px] md:text-[18px] font-medium max-w-3xl leading-relaxed text-left">
                                The foundation of our organization is built on a clear vision for the future, a driving mission for today, and the core values that guide our every step.
                            </p>
                        </ScrollReveal>
                    </div>
                </div>

                <div className="flex flex-col gap-16 md:gap-24">
                    
                    {/* MISSION QUOTE ROW */}
                    <div className="w-full max-w-4xl mr-auto relative pl-6 border-l-4 border-[#5C7625]">
                        <QuoteIcon className="w-10 h-10 text-[#5C7625]/20 absolute -top-4 left-6 pointer-events-none" />
                        <h3 className="text-2xl md:text-3xl lg:text-[34px] font-medium leading-[1.4] text-slate-800 relative z-10 pl-6">
                            "Access to Essential Vaccines and Novel Biologics Should Not Only be the Privilege of Just the Affording Few."
                        </h3>
                    </div>

                    {/* VALUES SECTION (Spans full width) */}
                    <div className="w-full relative">
                        <div className="mb-16 text-left relative z-10">
                            <h2 className="text-[24px] md:text-[36px] font-medium tracking-wide uppercase">
                                <span className="text-[#1955A6]">Our</span> <span className="text-[#5C7625]">Values</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16 relative z-10">
                            {values.map((val, idx) => (
                                <ScrollReveal key={idx} direction="up" delay={idx * 0.1}>
                                    <div className="flex gap-8 items-start">
                                        <span className="text-[24px] md:text-[40px] font-extrabold text-slate-900 leading-none shrink-0 w-12">
                                            {val.number}
                                        </span>
                                        <div className="flex flex-col gap-3">
                                            <h4 className="text-[18px] md:text-[22px] font-extrabold tracking-wider text-slate-900 uppercase leading-snug">
                                                {val.title}
                                            </h4>
                                            <p className="text-slate-500 text-[15px] md:text-[17px] leading-[1.8] font-medium">
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
