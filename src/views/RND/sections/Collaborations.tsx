import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';
import indiaMap from '../../../assets/images/rnd/india_map.png';

const collaborations = [
    { id: "01", name: "Institute of Life Sciences (ILS)", color: "text-[#1955A6]", bg: "bg-[#F4F8FA]", location: "Bhubaneswar" },
    { id: "02", name: "Indian Institute of Technology", color: "text-[#1955A6]", bg: "bg-[#F4F8FA]", location: "Bhubaneswar" },
    { id: "03", name: "ICMR - RMRC", color: "text-[#7EAB43]", bg: "bg-[#F7FBEE]", location: "Bhubaneswar" },
    { id: "04", name: "ICMR - NIRBID", color: "text-[#1955A6]", bg: "bg-[#F4F8FA]", location: "Kolkata" }
];

export default function Collaborations() {
    return (
        <section className="py-24 bg-white font-sans overflow-hidden">
            <div className="max-w-[1300px] mx-auto px-6">
                
                {/* Centered Heading and Paragraph */}
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
                    <ScrollReveal direction="up">
                        <h2 className="text-[36px] font-medium tracking-wide mb-6">
                            <SplitTitle title="Our Collaborations" />
                        </h2>
                        
                        <h3 className="text-xl md:text-[24px] font-bold text-[#13325B] leading-snug mb-6">
                            Where Institutional Excellence Meets Next-Generation Vaccine Innovation
                        </h3>
                        
                        <p className="text-slate-600 text-[16px] md:text-[18px] leading-relaxed">
                            Together, our partnerships are focused on high-priority diseases of major public health significance, including Salmonella, Shigella, tuberculosis, malaria, and meningitis strengthening the pathway from scientific discovery to translational development and future vaccine impact.
                        </p>
                    </ScrollReveal>
                </div>

                {/* Grid of Partners (Full Width, No Map) */}
                <div className="max-w-5xl mx-auto">
                    <ScrollReveal direction="up" delay={0.2}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {collaborations.map((item, idx) => {
                                const accentColor = item.color === 'text-[#7EAB43]' ? 'bg-[#7EAB43]' : 'bg-[#1955A6]';
                                return (
                                    <div 
                                        key={idx} 
                                        className={`py-14 px-8 min-h-[240px] flex flex-col justify-center items-center ${item.bg} rounded-2xl border border-slate-100/80 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group`}
                                    >
                                        {/* Top Hover Accent Bar */}
                                        <div className={`absolute top-0 left-0 right-0 h-2.5 ${accentColor} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
                                        
                                        <div className="flex flex-col items-center text-center gap-5">
                                            <h4 className="text-[#13325B] font-bold text-[20px] leading-snug">
                                                {item.name}
                                            </h4>
                                            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest bg-white px-4 py-1.5 rounded-full shadow-sm border border-slate-100/60">
                                                {item.location}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </ScrollReveal>
                </div>

            </div>
        </section>
    );
}
