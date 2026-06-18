import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';
import heroBg from '../../../assets/images/banner-imge-3.jpeg';
import TextReveal from '../../../components/Common/TextReveal';

const ContactHero: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section className="relative w-full h-screen min-h-[600px] max-h-[1000px] flex items-center justify-center overflow-hidden bg-slate-950 font-sans pt-28 md:pt-32 pb-20 md:pb-24">
            {/* Background Image with Layered Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroBg}
                    alt="Contact TechInvention"
                    className="w-full h-full object-cover object-center transform scale-105 animate-[pulse_25s_ease-in-out_infinite_alternate]"
                />
                <div className="absolute inset-0 bg-[#040b16]/75 backdrop-blur-[1px]" />
                
                {/* Decorative Glowing Orbs */}
                <div className="absolute top-1/4 -left-32 w-80 h-80 bg-brand-primary/15 rounded-full blur-[80px] pointer-events-none" />
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-brand-secondary/10 rounded-full blur-[100px] pointer-events-none" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center flex flex-col items-center justify-center">
                {/* Small Tagline */}
                <motion.div
                    initial={{ opacity: 0, y: -15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6"
                >
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-secondary animate-pulse" />
                    <span className="text-white/80 text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase">
                        {t('contact.tag') || 'Connect with us'}
                    </span>
                </motion.div>

                {/* Page Title */}
                <div className="w-full max-w-4xl mx-auto mb-4 md:mb-6">
                    <TextReveal
                        text={t('navbar.contactUs') || 'Contact Us'}
                        mode="light"
                        as="h1"
                        className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-tight justify-center text-center"
                    />
                </div>

                {/* Subtitle / Description */}
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-slate-300 text-sm md:text-base font-light max-w-2xl leading-relaxed text-center px-4"
                >
                    {t('contact.desc') || 'Reach out to our global team to discuss partnerships, innovations, or how we can support your health security goals.'}
                </motion.p>
            </div>
        </section>
    );
};

export default ContactHero;
