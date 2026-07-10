import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';

const GCMCFeature = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6">
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Content side */}
                    <div className="order-1 lg:order-1">
                        <ScrollReveal direction="up">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-4 leading-[1.2]">
                                <SplitTitle title="Global Collaborative Centre for Medical Countermeasures (GCMC)" />
                            </h2>
                            <h3 className="text-xl md:text-2xl font-medium text-brand-primary mb-8">
                                Integrated Full-Cycle Vaccine Development & Manufacturing Facility
                            </h3>
                            
                            <h4 className="text-lg font-bold text-gray-800 mb-2">
                                From Innovation to Scalable Global Health Solutions
                            </h4>
                            <p className="text-base text-gray-600 leading-relaxed mb-6">
                                TechInvention's <strong className="text-gray-800">Global Collaborative Centre for Medical Countermeasures (GCMC)</strong> is an <strong className="text-gray-800">Integrated Full-Cycle Vaccine Development & Manufacturing Facility</strong> designed to accelerate the journey from scientific discovery to global health impact.
                            </p>
                            
                            <p className="text-base text-gray-600 leading-relaxed">
                                Developed in alignment with international GMP standards, GCMC brings together vaccine process development, manufacturing scale-up, technology transfer, analytical testing, quality systems, regulatory support, drug product manufacturing, digital innovation, and sustainable infrastructure within one integrated facility.
                            </p>
                        </ScrollReveal>
                    </div>

                    {/* Image / Visual side */}
                    <div className="relative order-2 lg:order-2">
                        <ScrollReveal direction="left">
                            <div className="relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300">
                                <img loading="lazy" 
                                    src="/techinvention/CDMO.png" 
                                    alt="Integrated Capabilities" 
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </ScrollReveal>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default GCMCFeature;
