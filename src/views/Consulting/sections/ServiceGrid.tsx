import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
    ClipboardCheck, 
    Factory, 
    FlaskConical, 
    FileCheck, 
    Presentation, 
    Boxes 
} from 'lucide-react';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';

const SERVICES = [
    {
        icon: ClipboardCheck,
        title: "Pre-Feasibility & Feasibility Study",
        desc: "Clear technical, commercial, regulatory and financial assessment to support investment decisions."
    },
    {
        icon: Factory,
        title: "Facility Design & GMP Readiness",
        desc: "Basic Design, Concept design and Detailed Design with cleanroom planning, workflow, utilities, equipment strategy and GMP-aligned readiness support."
    },
    {
        icon: FlaskConical,
        title: "Technology Transfer & Scale-Up",
        desc: "Identifying products, evaluation, support process transfer, scale-up planning and manufacturing."
    },
    {
        icon: FileCheck,
        title: "Quality, Regulatory & Compliance",
        desc: "Support for QMS, GMP gap assessment, audit readiness, documentation and global regulatory alignment."
    },
    {
        icon: Presentation,
        title: "Training & Capacity Building",
        desc: "Specialized programmes in GxP, QC, QA, regulatory affairs and facility operations."
    },
    {
        icon: Boxes,
        title: "Product Portfolio Planning",
        desc: "Product portfolio, market need, operating model and implementation strategy."
    }
];

export default function ServiceGrid() {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section id="consulting-services" className="py-24 bg-slate-50/50 font-sans overflow-hidden">
            <div className="max-w-[1300px] mx-auto px-6">
                
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <ScrollReveal direction="up">
                        <span className="text-black font-bold tracking-widest text-[12px] mb-4 block uppercase">
                            What We Offer
                        </span>
                        <h2 className="text-[36px] md:text-[42px] font-medium tracking-wide mb-6 leading-tight">
                            <SplitTitle title="Consulting Services Tailored for Healthcare Innovation" />
                        </h2>
                        <p className="text-slate-700 text-[18px] md:text-[20px] font-medium">
                            Focused advisory across the full journey from concept to commercialization:
                        </p>
                    </ScrollReveal>
                </div>

                <div className="relative max-w-5xl mx-auto" ref={containerRef}>
                    
                    {/* The Background Line */}
                    <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 bg-slate-200 -translate-x-1/2 rounded-full" />
                    
                    {/* The Glowing Animated Line */}
                    <motion.div 
                        className="absolute left-[28px] md:left-1/2 top-0 w-1 bg-gradient-to-b from-[#1955A6] via-[#008996] to-[#7EAB43] -translate-x-1/2 rounded-full shadow-[0_0_15px_rgba(25,85,166,0.5)]"
                        style={{ height: lineHeight }}
                    />

                    <div className="space-y-12 md:space-y-24">
                        {SERVICES.map((service, index) => {
                            const Icon = service.icon;
                            const isEven = index % 2 === 0;

                            return (
                                <div key={index} className="relative flex flex-col md:flex-row items-center w-full group">
                                    
                                    {/* Desktop Left Column */}
                                    <div className={`hidden md:flex w-1/2 ${isEven ? 'justify-end pr-16' : 'justify-start pl-16 order-last'}`}>
                                        <ScrollReveal direction={isEven ? "right" : "left"} delay={0.1}>
                                            <div className="bg-white p-8 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-slate-100 hover:shadow-2xl hover:border-[#1955A6]/30 transition-all duration-500 hover:-translate-y-2 max-w-[420px]">
                                                <div className="w-16 h-16 bg-[#F4F8FA] rounded-2xl flex items-center justify-center mb-6 text-[#1955A6] group-hover:scale-110 group-hover:bg-[#1955A6] group-hover:text-white transition-all duration-500 shadow-sm">
                                                    <Icon className="w-8 h-8" strokeWidth={1.5} />
                                                </div>
                                                <h3 className="text-xl font-bold text-[#13325B] mb-3 leading-snug">
                                                    {service.title}
                                                </h3>
                                                <p className="text-slate-600 text-sm leading-relaxed">
                                                    {service.desc}
                                                </p>
                                            </div>
                                        </ScrollReveal>
                                    </div>

                                    {/* Center Node */}
                                    <div className="absolute left-[28px] md:left-1/2 w-12 h-12 rounded-full border-4 border-white bg-slate-100 shadow-md flex items-center justify-center -translate-x-1/2 z-10 transition-colors duration-500 group-hover:bg-[#1955A6] group-hover:border-[#EEF4FF]">
                                        <div className="w-4 h-4 rounded-full bg-slate-300 group-hover:bg-white transition-colors duration-500" />
                                    </div>

                                    {/* Mobile View */}
                                    <div className="md:hidden w-full pl-20">
                                        <ScrollReveal direction="up" delay={0.1}>
                                            <div className="bg-white p-6 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-slate-100 hover:shadow-2xl hover:border-[#1955A6]/30 transition-all duration-500">
                                                <div className="w-14 h-14 bg-[#F4F8FA] rounded-xl flex items-center justify-center mb-5 text-[#1955A6] shadow-sm">
                                                    <Icon className="w-7 h-7" strokeWidth={1.5} />
                                                </div>
                                                <h3 className="text-lg font-bold text-[#13325B] mb-2 leading-snug">
                                                    {service.title}
                                                </h3>
                                                <p className="text-slate-600 text-sm leading-relaxed">
                                                    {service.desc}
                                                </p>
                                            </div>
                                        </ScrollReveal>
                                    </div>

                                </div>
                            );
                        })}
                    </div>
                </div>
                
            </div>
        </section>
    );
}
