import React from 'react';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';

const Responsibility = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal direction="up">
                    <div className="text-center mb-16 flex flex-col items-center">
                        <span className="text-brand-primary font-medium tracking-[0.4em] text-[11px] mb-2 block uppercase">
                            Corporate Social Responsibility
                        </span>
                        <div className="mb-4">
                            <h2 className="text-[28px] md:text-[36px] font-medium tracking-wide whitespace-normal md:whitespace-nowrap">
                                <SplitTitle title="Our Responsibility" />
                            </h2>
                        </div>
                        <p className="text-black text-[16px] md:text-[18px] font-medium max-w-3xl leading-relaxed">
                            We believe that our success is fundamentally linked to the well-being of the communities we serve and the environment we operate in.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <ScrollReveal direction="left">
                        <div className="relative rounded-none overflow-hidden shadow-2xl aspect-[4/3]">
                            <img loading="lazy" 
                                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200" 
                                alt="Environmental Responsibility" 
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-brand-primary/20 mix-blend-overlay"></div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="right">
                        <div className="space-y-8">
                            <div className="bg-brand-background p-8 rounded-none border border-brand-primary/10">
                                <h3 className="text-2xl font-semibold mb-3 text-brand-primary">Sustainable Operations</h3>
                                <p className="text-brand-gray-dark">
                                    Our GMP-like facilities are thoughtfully designed with innovative concepts aimed at enabling environmentally responsible production.
                                </p>
                            </div>
                            <div className="bg-brand-background p-8 rounded-none border border-brand-primary/10">
                                <h3 className="text-2xl font-semibold mb-3 text-brand-primary">Community Impact</h3>
                                <p className="text-brand-gray-dark">
                                    Through strategic initiatives and global partnerships, we aim to make vaccines and biotherapeutics accessible to underserved populations.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default Responsibility;
