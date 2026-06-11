import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Microscope, Dna, ArrowRight } from 'lucide-react';
import ScrollReveal from '../../../components/Common/ScrollReveal';

const SubPagePreview = () => {
    const navigate = useNavigate();

    const cards = [
        {
            id: 'vaccines',
            title: 'Vaccines',
            desc: 'Explore our dedicated vaccine research areas, platform capabilities, and robust clinical pipeline aimed at preventing infectious diseases globally.',
            icon: <Microscope className="w-12 h-12 text-brand-primary mb-6" />,
            link: '/rnd/vaccines',
            color: 'bg-blue-50'
        },
        {
            id: 'diagnostics',
            title: 'Diagnostics',
            desc: 'Discover our cutting-edge molecular and lateral flow diagnostic development programs designed for rapid and accurate disease detection.',
            icon: <Dna className="w-12 h-12 text-brand-secondary mb-6" />,
            link: '/rnd/diagnostics',
            color: 'bg-green-50'
        }
    ];

    return (
        <section className="py-24 bg-gray-50 relative">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="text-center mb-16">
                    <ScrollReveal direction="up">
                        <span className="text-brand-primary font-bold tracking-[0.3em] text-[11px] md:text-[13px] uppercase block mb-4">
                            Explore Our Departments
                        </span>
                        <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-brand-content">
                            Specialized Research Hubs
                        </h2>
                    </ScrollReveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {cards.map((card, idx) => (
                        <ScrollReveal key={card.id} direction="up" delay={idx * 0.2}>
                            <div 
                                onClick={() => navigate(card.link)}
                                className={`group cursor-pointer rounded-none p-10 lg:p-16 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-gray-100 bg-white relative overflow-hidden`}
                            >
                                <div className={`absolute top-0 right-0 w-64 h-64 ${card.color} rounded-full blur-[80px] -mr-32 -mt-32 transition-transform duration-700 group-hover:scale-150`} />
                                
                                <div className="relative z-10">
                                    {card.icon}
                                    <h3 className="text-3xl font-bold text-brand-content mb-4">{card.title}</h3>
                                    <p className="text-black font-medium leading-relaxed mb-8">
                                        {card.desc}
                                    </p>
                                    
                                    <div className="flex items-center text-brand-primary font-bold tracking-wide group-hover:text-brand-secondary transition-colors">
                                        Explore Department 
                                        <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SubPagePreview;
