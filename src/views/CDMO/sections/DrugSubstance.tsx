import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { Beaker, Settings, Activity } from 'lucide-react';
import dsImg from '../../../assets/images/about_manufacturing.png';

const DrugSubstance = () => {
    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <ScrollReveal direction="up">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-lg text-brand-primary mb-8 border border-gray-100">
                                <Beaker size={32} />
                            </div>
                            <h2 className="text-[24px] md:text-5xl font-medium tracking-tight text-brand-content mb-6">
                                Drug Substance Manufacturing
                            </h2>
                            <p className="text-xl text-gray-600 leading-relaxed mb-10">
                                Scalable, robust, and highly efficient upstream and downstream processing. 
                                We support microbial fermentation and mammalian cell culture platforms to produce high-quality APIs.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    { title: 'Upstream Processing', desc: 'Bioreactors scalable up to 2000L capacity', icon: Activity },
                                    { title: 'Advanced Downstream', desc: 'Precision purification and chromatography', icon: Settings },
                                ].map((item, i) => (
                                    <motion.div 
                                        key={i}
                                        whileHover={{ y: -5 }}
                                        className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-brand-primary/20 transition-all"
                                    >
                                        <item.icon className="w-8 h-8 text-brand-secondary mb-4" />
                                        <h4 className="font-bold text-brand-content mb-2">{item.title}</h4>
                                        <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </ScrollReveal>
                    </div>
                    <div>
                        <ScrollReveal direction="left">
                            <div className="relative group">
                                <div className="absolute inset-0 bg-brand-primary/20 rounded-3xl transform rotate-3 scale-105 group-hover:rotate-6 transition-transform duration-500" />
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/50 bg-white">
                                    <img loading="lazy" 
                                        src={dsImg} 
                                        alt="Drug Substance Manufacturing" 
                                        className="w-full h-[500px] object-cover transform transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-4 text-white">
                                            <h5 className="font-medium text-lg mb-1 flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                                Operational Excellence
                                            </h5>
                                            <p className="text-sm text-white/80">Continuous monitoring and automated controls ensure maximum yield and purity.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default DrugSubstance;
