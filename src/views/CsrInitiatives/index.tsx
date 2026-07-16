"use client";
import React from 'react';
import { HeartHandshake, Microscope, Shield, ArrowUpRight } from 'lucide-react';
import AboutBanner from '../About/sections/AboutBanner';
import ScrollReveal from '../../components/Common/ScrollReveal';
import CTASection from '../../components/CTASection';
import { SplitTitle } from '../../components/Common/SplitTitle';

const initiatives = [
    {
        badge: "Research & Development Support",
        title: "Contribution to PU- TechInvention",
        desc: "TechInvention Lifecare limited, donated Rs 6 lakh to the BioNest-PU, one of North India’s top bio-incubators housed at Punjab University, Chandigarh, for research and development linked to the SARS-CoV2, at the onset of the COVID-19 pandemic.",
        icon: HeartHandshake,
        color: "text-[#1955A6]",
        borderColor: "border-[#1955A6]/20",
        hoverBorder: "hover:border-[#1955A6]/40",
        iconBg: "bg-[#1955A6]/10",
        shadow: "hover:shadow-[#1955A6]/5",
    },
    {
        badge: "National Pandemic Relief",
        title: "Contribution to PM cares fund",
        desc: "TechInvention contributed to the PM Cares Fund, established by The Hon’ble Prime Minister of India in the wake of the COVID-19 pandemic, to carry out and support relief during a public health emergency, including the creation or upgrade of healthcare or pharmaceutical facilities, other necessary infrastructure, and also funding relevant research.",
        icon: Shield,
        color: "text-[#7EAB43]",
        borderColor: "border-[#7EAB43]/20",
        hoverBorder: "hover:border-[#7EAB43]/40",
        iconBg: "bg-[#7EAB43]/10",
        shadow: "hover:shadow-[#7EAB43]/5",
    },
    {
        badge: "Scientific Collaboration & Infrastructure",
        title: "BSL-2 Lab",
        desc: "TechInvention inaugurated its BSL-2 R&D lab at the Regional Centre for Biotechnology's BSC BioNEST Bioincubator (RCB BBB) on December 6, 2022, in the presence of notable figures from the biotech industry and academia, as well as representatives from other start-ups.",
        icon: Microscope,
        color: "text-[#1955A6]",
        borderColor: "border-[#1955A6]/20",
        hoverBorder: "hover:border-[#1955A6]/40",
        iconBg: "bg-[#1955A6]/10",
        shadow: "hover:shadow-[#1955A6]/5",
        link: {
            text: "Read more",
            url: "https://www.linkedin.com/posts/healthequity4all_biotech-healthcare-research-activity-7006293693947088896-l6eo?utm_source=share&utm_medium=member_android"
        }
    }
];

const CsrInitiativesView = () => {
    return (
        <div className="min-h-screen bg-brand-background text-brand-content overflow-hidden font-sans">
            {/* Header Banner */}
            <AboutBanner 
                title="Corporate Social Responsibility" 
                subtitle="We believe CSR must take an inclusive approach to all the stakeholders of the business to achieve our shared goal of bringing greater health equity through affordable, acceptable, and accessible healthcare for all."
            />

            {/* Initiatives Content */}
            <section className="py-24 bg-white relative">
                {/* Decorative background glows */}
                <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-[#1955A6]/5 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-[#7EAB43]/5 rounded-full blur-[100px] pointer-events-none" />

                <div className="max-w-[1300px] mx-auto px-6 relative z-10">

                    {/* Section Header */}
                    <div className="mb-12">
                        <ScrollReveal direction="up">
                            <h2 className="text-[24px] md:text-[36px] font-medium tracking-wide text-left">
                                <SplitTitle title="Our Initiatives" />
                            </h2>
                        </ScrollReveal>
                    </div>
                    <div className="mt-20 space-y-24 md:space-y-36">
                        {initiatives.map((item, index) => {
                            const Icon = item.icon;
                            const isEven = index % 2 === 0;
                            const numStr = `0${index + 1}`;
                            return (
                                <ScrollReveal key={index} direction={isEven ? "left" : "right"} delay={0.1}>
                                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                                        {/* Visual Block */}
                                        <div className={`w-full lg:w-5/12 flex justify-center relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                                            {/* Large background number */}
                                            <div className="absolute -top-12 -left-4 lg:-top-20 lg:-left-12 text-[120px] md:text-[180px] font-extrabold text-slate-100 select-none pointer-events-none font-serif leading-none opacity-60 z-0">
                                                {numStr}
                                            </div>

                                            {/* Ambient backdrop glow */}
                                            <div className={`absolute w-[280px] h-[280px] rounded-full blur-[80px] opacity-40 z-0 ${index === 1 ? 'bg-[#7EAB43]/15' : 'bg-[#1955A6]/15'}`} />

                                            {/* Interactive Icon Card */}
                                            <div className="relative z-10 w-full max-w-[340px] aspect-square rounded-3xl bg-white/70 backdrop-blur-md border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] transition-all duration-500 flex items-center justify-center group overflow-hidden">
                                                {/* Animated corner border decoration */}
                                                <div className={`absolute top-0 left-0 w-2 h-full transition-all duration-500 group-hover:h-full ${index === 1 ? 'bg-[#7EAB43]' : 'bg-[#1955A6]'} opacity-80`} style={{ height: '40px' }} />
                                                
                                                {/* Diagonal light streak */}
                                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                                                
                                                {/* Premium Scientific Lens Reticle Icon Wrapper */}
                                                <div className="relative flex items-center justify-center">
                                                    {/* Outer Reticle Ring */}
                                                    <div className={`absolute -inset-6 rounded-full border border-dashed border-current/20 animate-[spin_20s_linear_infinite] group-hover:scale-110 group-hover:border-current/40 transition-all duration-500 ${item.color}`} />
                                                    
                                                    {/* Outer Reticle Crosshairs (small concentric layer) */}
                                                    <div className={`absolute -inset-4 border border-current/5 rounded-full group-hover:scale-105 transition-all duration-500 ${item.color}`} />

                                                    {/* Glowing core behind the icon */}
                                                    <div className={`absolute w-12 h-12 rounded-full blur-md opacity-0 group-hover:opacity-60 transition-all duration-500 ${index === 1 ? 'bg-[#7EAB43]/40' : 'bg-[#1955A6]/40'}`} />

                                                    {/* Inner Card */}
                                                    <div className={`w-28 h-28 rounded-2xl ${item.iconBg} border border-current/15 flex items-center justify-center transform group-hover:scale-105 transition-all duration-500 shadow-md ${item.color} relative z-10 overflow-hidden`}>
                                                        {/* Subtle grid pattern inside */}
                                                        <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:8px_8px]" />
                                                        
                                                        <Icon className="w-12 h-12 transform group-hover:scale-110 transition-transform duration-500 relative z-20" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Text Section */}
                                        <div className={`w-full lg:w-7/12 text-left relative z-10 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>

                                            {/* Title */}
                                            <h3 className="text-[28px] md:text-[36px] font-bold text-[#13325B] tracking-tight leading-tight mb-6">
                                                {item.title}
                                            </h3>

                                            {/* Accent line */}
                                            <div className={`w-16 h-1 mb-8 rounded-full ${index === 1 ? 'bg-[#7EAB43]' : 'bg-[#1955A6]'} opacity-80`} />

                                            {/* Description */}
                                            <p className="text-slate-600 text-[16px] md:text-[18px] leading-relaxed mb-8 font-medium">
                                                {item.desc}
                                            </p>

                                            {/* Conditional Link */}
                                            {item.link && (
                                                <a 
                                                    href={item.link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`inline-flex items-center gap-2 text-sm font-bold transition-all relative py-2 ${item.color} group/link cursor-pointer w-fit`}
                                                >
                                                    <span>Read News Article</span>
                                                    <ArrowUpRight className="w-4 h-4 transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                                    
                                                    {/* Animated Underline */}
                                                    <span className={`absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover/link:w-full ${index === 1 ? 'bg-[#7EAB43]' : 'bg-[#1955A6]'}`} />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </ScrollReveal>
                            );
                        })}
                    </div>
                </div>
            </section>

            <CTASection />
        </div>
    );
};

export default CsrInitiativesView;
