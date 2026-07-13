import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { Package, ShieldAlert, Droplet } from 'lucide-react';
import abstractBg from '../../../assets/images/iridescent_glass_dome.png';

const DrugProduct = () => {
    return (
        <section className="py-24 bg-brand-primary/5 relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
                <img loading="lazy" src={abstractBg} alt="" className="w-full h-full object-cover blur-sm" />
            </div>
            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    <div className="order-1">
                        <ScrollReveal direction="up">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-secondary/10 text-brand-secondary mb-8 shadow-inner">
                                <Package size={32} />
                            </div>
                            <h2 className="text-[24px] md:text-4xl lg:text-5xl font-medium tracking-tight text-brand-content mb-8 leading-tight">
                                Drug Product Formulation & Filling
                            </h2>
                            <p className="text-xl text-gray-600 leading-relaxed mb-8">
                                Our sterile fill-finish operations utilize state-of-the-art Isolator and RABS (Restricted Access Barrier Systems) technology to ensure the highest levels of sterility assurance for biologics and vaccines.
                            </p>
                            <div className="inline-flex items-center gap-4 bg-white px-6 py-4 rounded-full border border-gray-200 shadow-sm">
                                <div className="w-3 h-3 rounded-full bg-brand-secondary animate-pulse" />
                                <span className="text-brand-content font-medium tracking-wide">Ready for commercial scale packaging</span>
                            </div>
                        </ScrollReveal>
                    </div>

                    <div className="order-2 relative">
                        <ScrollReveal direction="left">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                                <motion.div 
                                    whileHover={{ y: -10 }}
                                    className="bg-white p-8 rounded-[2rem] flex flex-col items-start shadow-lg border border-gray-100 min-h-[250px] relative overflow-hidden group"
                                >
                                    <div className="w-12 h-12 bg-brand-primary/10 text-brand-primary rounded-xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110">
                                        <Droplet size={24} />
                                    </div>
                                    <span className="text-brand-content font-bold mb-3 text-xl relative z-10">Liquid & Lyophilized Vials</span>
                                    <p className="text-gray-600 relative z-10 text-sm leading-relaxed">High-speed aseptic filling lines integrated with advanced isolator technology.</p>
                                </motion.div>

                                <motion.div 
                                    whileHover={{ y: -10 }}
                                    className="bg-white p-8 rounded-[2rem] flex flex-col items-start shadow-lg border border-gray-100 min-h-[250px] sm:mt-16 relative overflow-hidden group"
                                >
                                    <div className="w-12 h-12 bg-brand-secondary/10 text-brand-secondary rounded-xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110">
                                        <ShieldAlert size={24} />
                                    </div>
                                    <span className="text-brand-content font-bold mb-3 text-xl relative z-10">Pre-Filled Syringes (PFS)</span>
                                    <p className="text-gray-600 relative z-10 text-sm leading-relaxed">Automated PFS filling under strict environmental controls for maximum sterility.</p>
                                </motion.div>
                            </div>
                        </ScrollReveal>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
                    </div>

                </div>
            </div>
        </section>
    );
};
export default DrugProduct;
