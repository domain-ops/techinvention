import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';
import manufacturingImg from '../../../assets/images/about_manufacturing.png';

const mediaItems = [
    {
        id: 1,
        type: 'Press Release',
        title: 'TechInvention Announces Global Health Initiative',
        date: 'October 15, 2024',
        image: 'https://images.unsplash.com/photo-1507675920774-4b83002fbeaa?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 2,
        type: 'News Article',
        title: 'New GMP Facility Opens in Emerging Markets',
        date: 'September 22, 2024',
        image: manufacturingImg
    },
    {
        id: 3,
        type: 'Media Coverage',
        title: 'Interview: The Future of Biotherapeutics',
        date: 'August 08, 2024',
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800'
    }
];

const MediaCentre = () => {
    return (
        <section className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal>
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-medium tracking-tight">
                                <SplitTitle title="Latest Updates" />
                            </h2>
                        </div>
                        <a href="#" className="inline-flex items-center justify-center px-8 py-3 border-2 border-brand-primary text-brand-primary font-semibold rounded-full hover:bg-brand-primary hover:text-white transition-all duration-300">
                            View All News
                        </a>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {mediaItems.map((item, index) => (
                        <ScrollReveal key={item.id} direction="up" delay={index * 0.1}>
                            <motion.div 
                                whileHover={{ y: -10 }}
                                className="group cursor-pointer bg-brand-background rounded-2xl overflow-hidden border border-brand-primary/10 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <motion.img 
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.6 }}
                                        src={item.image} 
                                        alt={item.title} 
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-brand-primary text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
                                            {item.type}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <span className="text-brand-gray-dark text-sm mb-3 block">{item.date}</span>
                                    <h3 className="text-xl font-semibold mb-4 text-brand-text group-hover:text-brand-primary transition-colors line-clamp-3">
                                        {item.title}
                                    </h3>
                                    <div className="mt-auto pt-4 flex items-center text-brand-primary font-semibold group-hover:text-brand-secondary transition-colors text-sm uppercase tracking-wide">
                                        <span>Read More</span>
                                        <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </div>
                                </div>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MediaCentre;
