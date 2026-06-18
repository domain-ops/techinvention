import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';
import { InfiniteSlider } from '../../../components/ui/infinite-slider';

import t1 from '../../../assets/images/testimonial_1.png';
import t2 from '../../../assets/images/testimonial_2.png';
import t3 from '../../../assets/images/testimonial_3.png';

const testimonials = [
    {
        quote: "The emphasis on research independence and global tech transfer at TechInvention is refreshing. I've been able to lead formulation projects that directly impact bioscience in emerging markets.",
        name: "Dr. Aarav Mehta",
        role: "Principal Scientist, Vaccine R&D",
        image: t1
    },
    {
        quote: "TechInvention has supported my regulatory affairs certification and टेक्निकल writing skills. The learning curve is steep, but the environment is exceptionally supportive and collaborative.",
        name: "Sneha Joshi",
        role: "Lead Executive, Regulatory Affairs",
        image: t2
    },
    {
        quote: "Designing molecular diagnostics kits that are field-deployable and affordable requires outside-the-box thinking. Our team culture encourages us to experiment and scale up rapidly.",
        name: "Dr. Kevin Smith",
        role: "Lead Developer, Molecular Diagnostics",
        image: t3
    },
    {
        quote: "The collaborative environment here is unmatched. Working alongside top-tier scientists from around the world has truly accelerated my career growth.",
        name: "Maria Gonzalez",
        role: "Senior Bioengineer",
        image: t1
    },
    {
        quote: "I value the company's commitment to sustainability and health equity. Every project we undertake feels like a step towards a better future.",
        name: "David Chen",
        role: "Clinical Trial Manager",
        image: t2
    },
    {
        quote: "From state-of-the-art facilities to a supportive leadership team, TechInvention provides everything needed to turn innovative ideas into reality.",
        name: "Dr. Sarah Williams",
        role: "Director of R&D",
        image: t3
    }
];

export default function EmployeeTestimonials() {
    return (
        <section className="py-24 bg-white relative overflow-hidden font-sans border-b border-slate-100">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-brand-primary/3 blur-3xl pointer-events-none" />

            <div className="max-w-[1300px] mx-auto px-6 relative z-10">
                
                {/* Header */}
                <div className="mb-16 md:mb-20">
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
                        <div className="max-w-2xl text-left">
                            <ScrollReveal direction="up">
                                <span className="text-brand-primary font-medium tracking-[0.4em] text-[11px] mb-2 block uppercase text-left">
                                    Testimonials
                                </span>
                                <h2 className="text-[28px] md:text-[36px] font-medium tracking-wide text-left mb-6">
                                    <SplitTitle title="What Our Team Says" />
                                </h2>
                            </ScrollReveal>
                        </div>
                        <div className="max-w-md text-left flex flex-col lg:items-end gap-6">
                            <ScrollReveal direction="up" delay={0.2}>
                                <p className="text-black font-medium text-[16px] md:text-[18px] leading-relaxed">
                                    Hear directly from the scientists, developers, and project leaders driving innovation across our divisions.
                                </p>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>

                {/* Infinite Slider */}
                <div className="-mx-6 px-6 pb-8">
                    <InfiniteSlider gap={24} duration={60} durationOnHover={1000000}>
                        {testimonials.map((test, index) => (
                            <div
                                key={index}
                                className="w-[85vw] md:w-[380px] lg:w-[400px] h-[350px] bg-slate-50 border border-slate-200/60 p-8 text-left relative flex flex-col justify-between group hover:bg-white hover:shadow-xl hover:border-slate-200 transition-all duration-500"
                            >
                                <div>
                                    <Quote className="w-10 h-10 text-brand-primary/10 mb-6 group-hover:text-brand-primary/20 transition-colors" />
                                    <p className="text-black text-[14px] leading-relaxed font-semibold italic mb-8">
                                        "{test.quote}"
                                    </p>
                                </div>
                                
                                <div className="flex items-center gap-4 border-t border-slate-100 pt-6 mt-auto">
                                    <img 
                                        src={test.image} 
                                        alt={test.name} 
                                        className="w-12 h-12 rounded-full object-cover border border-slate-200 shadow-sm"
                                    />
                                    <div>
                                        <h4 className="text-slate-900 font-bold text-base leading-snug">{test.name}</h4>
                                        <p className="text-brand-primary text-xs font-bold uppercase tracking-wider">{test.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </InfiniteSlider>
                </div>

            </div>
        </section>
    );
}
