import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import gcmcImg from '../../../assets/images/GCMC.jpg.jpeg';
import { CheckCircle2, Globe2, ShieldCheck } from 'lucide-react';

const GCMCFeature = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6">
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image / Visual side */}
                    <div className="relative order-2 lg:order-1">
                        <ScrollReveal direction="right">
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group">
                                <motion.div 
                                    className="absolute inset-0 bg-brand-primary/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                />
                                <img 
                                    src={gcmcImg} 
                                    alt="GCMC Facility" 
                                    className="w-full h-[600px] object-cover transform transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Floating Badge */}
                                <motion.div 
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-xl z-20 flex items-center gap-4"
                                >
                                    <div className="bg-brand-primary/10 p-3 rounded-full text-brand-primary">
                                        <Globe2 size={28} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-brand-content text-lg">Global Reach</h4>
                                        <p className="text-gray-600 text-sm">International regulatory standards</p>
                                    </div>
                                </motion.div>
                            </div>
                        </ScrollReveal>
                        
                        {/* Decorative background blur */}
                        <div className="absolute -z-10 -bottom-10 -left-10 w-[80%] h-[80%] bg-brand-secondary/20 rounded-full blur-[100px]" />
                    </div>

                    {/* Content side */}
                    <div className="order-1 lg:order-2">
                        <ScrollReveal direction="up">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/5 text-brand-primary font-bold tracking-[0.2em] text-[11px] uppercase mb-6 border border-brand-primary/10">
                                <ShieldCheck size={14} /> Core Facility
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-brand-content mb-8 leading-[1.1]">
                                Global Centre for Manufacturing & Capabilities
                            </h2>
                            <p className="text-xl text-gray-600 leading-relaxed mb-10">
                                Our flagship manufacturing hub represents the pinnacle of biopharmaceutical production. 
                                Equipped with cutting-edge technology and designed to handle complex manufacturing challenges from clinical batches to full commercial scale.
                            </p>
                            
                            <div className="space-y-4">
                                {[
                                    'State-of-the-art cGMP certified infrastructure',
                                    'Scalable upstream and downstream processing',
                                    'Stringent environmental and quality controls'
                                ].map((item, idx) => (
                                    <motion.div 
                                        key={idx}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 + (idx * 0.1) }}
                                        className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-gray-100"
                                    >
                                        <CheckCircle2 className="text-brand-secondary shrink-0" size={24} />
                                        <span className="font-medium text-gray-800">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </ScrollReveal>
                    </div>

                </div>
            </div>
        </section>
    );
};
export default GCMCFeature;
