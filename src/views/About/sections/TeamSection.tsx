import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';
import { motion } from 'framer-motion';

// Import a placeholder group team image (can be replaced by the actual team image)
import groupTeamImage from '../../../assets/images/team_gallery/all_team_generated.png';

const TeamSection = () => {
    const { t } = useLanguage();

    return (
        <section className="py-12 md:py-20 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div className="text-left flex-1">
                    <ScrollReveal direction="up">
                        <span className="text-brand-primary font-medium tracking-[0.4em] text-[11px] mb-2 block uppercase text-left">
                            {t('about.leadership.team.title')}
                        </span>
                        <div className="mb-4">
                            <h2 className="text-[28px] md:text-[36px] font-medium tracking-wide whitespace-normal md:whitespace-nowrap text-left">
                                <SplitTitle title={t('about.leadership.team.tagline')} />
                            </h2>
                        </div>

                    </ScrollReveal>
                </div>
            </div>

            {/* Single Large Team Image */}
            <div className="w-full md:max-w-7xl md:mx-auto md:px-6 px-6">
                <div className="w-full overflow-hidden shadow-xl aspect-video md:aspect-[21/9] relative group bg-slate-200">
                    <motion.div
                        initial={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
                        whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                        className="w-full h-full"
                    >
                        <motion.img 
                            initial={{ y: -60, scale: 1.1 }}
                            whileInView={{ y: 0, scale: 1 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                            src={groupTeamImage}
                            alt="TechInvention Team"
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
