import React from 'react';
import { motion } from 'framer-motion';

const ContactIntro: React.FC = () => {
    return (
        <section className="py-14 md:py-16 bg-white font-sans border-b border-slate-100">
            <div className="max-w-[1300px] mx-auto px-6">
                <div>

                    {/* Left: Website Copy */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full"
                    >
                        <p className="text-slate-800 text-base md:text-[17px] leading-relaxed mb-4">
                            Whether you are exploring partnerships, product enquiries, R&D collaborations, scale-up and manufacturing opportunities or consultancy support for capacity building, our team would be pleased to hear from you.
                        </p>
                        <p className="text-slate-800 text-base md:text-[17px] leading-relaxed mb-8">
                            <span className="font-semibold text-[#0d2a55]">TechInvention</span> works with partners across global health systems to move science closer to meaningful public health impact.
                        </p>
                        <a
                            href="#contact-form"
                            onClick={e => { e.preventDefault(); document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' }); }}
                            className="inline-flex items-center gap-2 px-7 py-3 bg-[#1955A6] hover:bg-[#1955A6]/90 text-white font-bold rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 text-sm w-fit"
                        >
                            Start a Conversation
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                        </a>
                    </motion.div>


                </div>
            </div>
        </section>
    );
};

export default ContactIntro;
