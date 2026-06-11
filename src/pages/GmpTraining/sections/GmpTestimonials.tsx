import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';

import t1 from '../../../assets/images/testimonial_1.png';
import t2 from '../../../assets/images/testimonial_2.png';
import t3 from '../../../assets/images/testimonial_3.png';

const testimonials = [
    {
        quote: "The simulated gowning validations and aseptic cleanroom entries were incredibly realistic. It gave our team the concrete practical confidence we needed to safely handle sterile bioprocesses.",
        name: "Priyesh Shah",
        role: "Production Lead, Sterile Manufacturing",
        company: "Zenith Biotech",
        image: t1
    },
    {
        quote: "The trainers are seasoned industry veterans. Their real-world case studies on deviation tracking and CAPA compliance resolved several bottlenecks in our own quality management procedures.",
        name: "Dr. Ritu Deshmukh",
        role: "QA Lead Manager",
        company: "Global Biologics Inc.",
        image: t2
    },
    {
        quote: "An outstanding training framework. The deep-dive modules on ALCOA+ Data Integrity rules and audit trail reviews directly prepared our facility for international regulatory audits.",
        name: "Carlos Menendez",
        role: "Head of Validation Services",
        company: "LatAm Bio Labs",
        image: t3
    }
];

export default function GmpTestimonials() {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden font-sans border-b border-slate-200/60">
            {/* Ambient background glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-brand-primary/3 blur-3xl pointer-events-none" />

            <div className="max-w-[1300px] mx-auto px-6 relative z-10">
                
                {/* Header */}
                <div className="mb-16 md:mb-20">
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
                        <div className="max-w-2xl text-left">
                            <ScrollReveal direction="up">
                                <span className="text-[#1955A6] font-bold tracking-[0.4em] text-[11px] mb-2 block uppercase text-left">
                                    Trainee Feedback
                                </span>
                                <h2 className="text-[28px] md:text-[36px] font-medium tracking-wide text-left mb-6">
                                    <SplitTitle title="Participants Testimonials" />
                                </h2>
                            </ScrollReveal>
                        </div>
                        <div className="max-w-md text-left">
                            <ScrollReveal direction="up" delay={0.2}>
                                <p className="text-black font-medium text-[16px] md:text-[18px] leading-relaxed">
                                    Read direct feedback from industry professionals, QA managers, and manufacturing experts who have graduated from our GMP modules.
                                </p>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>

                {/* Testimonial Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((test, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="bg-white border border-slate-200/60 rounded-none p-8 text-left relative flex flex-col justify-between group hover:shadow-xl hover:border-slate-300 transition-all duration-500"
                        >
                            <div>
                                <Quote className="w-10 h-10 text-brand-primary/10 mb-6 group-hover:text-brand-primary/20 transition-colors" />
                                <p className="text-slate-700 text-[15px] leading-relaxed font-semibold italic mb-8">
                                    "{test.quote}"
                                </p>
                            </div>
                            
                            <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                                <img 
                                    src={test.image} 
                                    alt={test.name} 
                                    className="w-12 h-12 rounded-full object-cover border border-slate-200 shadow-sm"
                                />
                                <div>
                                    <h4 className="text-slate-900 font-bold text-base leading-snug">{test.name}</h4>
                                    <p className="text-brand-primary text-xs font-bold uppercase tracking-wider">{test.role}</p>
                                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider mt-0.5">{test.company}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
