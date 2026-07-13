import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Globe2, BookOpen, Lightbulb, Rocket } from 'lucide-react';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';

const joinReasons = [
    {
        title: "Purpose-led work",
        desc: "Contribute to healthcare solutions that matter.",
        icon: Heart,
        color: "#1955A6"
    },
    {
        title: "Global exposure",
        desc: "Work with partners, institutions and experts across diverse geographies.",
        icon: Globe2,
        color: "#5C7625"
    },
    {
        title: "Learning culture",
        desc: "Grow through hands-on projects, mentorship and cross-functional collaboration.",
        icon: BookOpen,
        color: "#1955A6"
    },
    {
        title: "Ownership mindset",
        desc: "Take responsibility, lead ideas and make your contribution visible.",
        icon: Lightbulb,
        color: "#5C7625"
    },
    {
        title: "Innovation ecosystem",
        desc: "Be part of a growing biotech company working across vaccines, biologics and global health infrastructure.",
        icon: Rocket,
        color: "#1955A6"
    }
];

export default function WhyJoinUs() {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden font-sans border-b border-slate-200/60">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-[#1955A6]/5 blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#5C7625]/5 blur-[100px] translate-x-1/4 translate-y-1/4 pointer-events-none" />

            <div className="max-w-[1300px] mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <ScrollReveal direction="up">
                        <h2 className="text-[24px] md:text-[42px] font-medium tracking-wide mb-6 leading-tight text-slate-900">
                            <SplitTitle title="Why Join Us" />
                        </h2>
                    </ScrollReveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {joinReasons.map((reason, index) => {
                        const Icon = reason.icon;
                        const isLastAndOdd = index === joinReasons.length - 1 && joinReasons.length % 2 !== 0;
                        const colSpanClass = isLastAndOdd ? "lg:col-span-1 md:col-span-2 md:w-1/2 md:mx-auto lg:w-full lg:mx-0" : "";
                        
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`group relative bg-white border border-slate-200/60 p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 rounded-2xl flex flex-col ${colSpanClass}`}
                            >
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1955A6] to-[#5C7625] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-t-2xl" />
                                
                                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-slate-50 border border-slate-100 group-hover:scale-110 transition-transform duration-500">
                                    <Icon className="w-7 h-7" style={{ color: reason.color }} strokeWidth={1.5} />
                                </div>
                                
                                <h3 className="text-[20px] font-bold text-slate-900 mb-3 group-hover:text-[#1955A6] transition-colors">
                                    {reason.title}
                                </h3>
                                
                                <p className="text-slate-600 text-[15px] leading-relaxed font-medium">
                                    {reason.desc}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
