import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';

const CompanyStory = () => {
    const { t } = useLanguage();

    return (
        <section className="py-12 md:py-20 bg-white font-sans">
            <div className="max-w-7xl mx-auto px-6">
                <div>
                    {/* Section Heading */}
                    <ScrollReveal direction="up">
                        <div className="mb-10 md:mb-12">
                            <h2 className="text-[28px] md:text-[36px] font-medium tracking-wide whitespace-normal md:whitespace-nowrap text-left">
                                <SplitTitle title="Built to Move Vaccine Innovation Further" />
                            </h2>
                        </div>
                    </ScrollReveal>

                    {/* Mandela Quote */}
                    <ScrollReveal direction="up">
                        <div className="mb-10 md:mb-16">
                            <p className="text-[16px] md:text-[18px] font-normal text-black leading-relaxed italic text-left md:text-justify">
                                {t('about.story.mandelaQuote')}
                            </p>
                        </div>
                    </ScrollReveal>

                    {/* Company Narrative - Clean Editorial Style */}
                    <div className="space-y-8">
                        <ScrollReveal direction="up" delay={0.2}>
                            <p className="font-normal tracking-tight text-black text-[16px] md:text-[18px] leading-relaxed text-left md:text-justify">
                                {t('about.story.commitment')}
                            </p>
                            <div className="w-16 h-1 bg-brand-primary mt-8 rounded-full" />
                        </ScrollReveal>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CompanyStory;
