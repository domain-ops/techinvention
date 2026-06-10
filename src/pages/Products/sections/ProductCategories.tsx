import React from 'react';
import { motion } from 'framer-motion';
import { Syringe, Activity, HeartPulse } from 'lucide-react';

export default function ProductCategories() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const categories = [
        {
            id: 'vaccine-pipeline',
            title: 'Vaccines & Biologics',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            icon: <Syringe className="w-6 h-6 text-[#1955A6]" />,
            iconBg: 'bg-[#1955A6]/8 border-[#1955A6]/15',
            hoverGlow: 'hover:shadow-[0_20px_40px_-15px_rgba(25,85,166,0.12)] hover:border-[#1955A6]/20',
            titleHover: 'group-hover:text-[#1955A6]',
        },
        {
            id: 'diagnostics-division',
            title: 'Diagnostics',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            icon: <Activity className="w-6 h-6 text-[#5C7625]" />,
            iconBg: 'bg-[#5C7625]/8 border-[#5C7625]/15',
            hoverGlow: 'hover:shadow-[0_20px_40px_-15px_rgba(92,118,37,0.12)] hover:border-[#5C7625]/20',
            titleHover: 'group-hover:text-[#5C7625]',
        },
        {
            id: 'veterinary-diagnostics',
            title: 'Veterinary Care',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            icon: <HeartPulse className="w-6 h-6 text-[#87A840]" />,
            iconBg: 'bg-[#87A840]/8 border-[#87A840]/15',
            hoverGlow: 'hover:shadow-[0_20px_40px_-15px_rgba(135,168,64,0.12)] hover:border-[#87A840]/20',
            titleHover: 'group-hover:text-[#87A840]',
        }
    ];

    return (
        <section id="product-categories" className="py-16 md:py-20 bg-white relative overflow-hidden font-sans border-b border-slate-100">
            <div className="max-w-[1150px] mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {categories.map((cat, index) => (
                        <motion.div
                            key={cat.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            whileHover={{ y: -8 }}
                            onClick={() => scrollToSection(cat.id)}
                            className={`bg-white border border-slate-200/80 rounded-2xl p-6 text-slate-800 text-left cursor-pointer transition-all duration-300 flex flex-col justify-between h-[190px] shadow-[0_4px_25px_-5px_rgba(0,0,0,0.02)] group ${cat.hoverGlow}`}
                        >
                            <div className="flex items-start justify-between">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${cat.iconBg}`}>
                                    {cat.icon}
                                </div>
                            </div>
                            <div className="mt-4">
                                <h3 className={`text-lg font-bold text-slate-900 mb-1.5 transition-colors ${cat.titleHover}`}>
                                    {cat.title}
                                </h3>
                                <p className="text-slate-600 text-xs font-medium leading-relaxed line-clamp-2">
                                    {cat.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
