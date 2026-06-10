import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { MagicText } from '../../../components/ui/magic-text';
import ScrollReveal from '../../../components/Common/ScrollReveal';

const CompanyStory = () => {
    const { t } = useLanguage();

    return (
        <section className="py-12 md:py-20 bg-white font-sans">
            <div className="max-w-7xl mx-auto px-6">
                <div>

                    {/* Mandela Quote */}
                    <ScrollReveal direction="up">
                        <div className="mb-10 md:mb-16">
                            <MagicText
                                text={t('about.story.mandelaQuote')}
                                className="text-[22px] md:text-[26px] font-medium text-black leading-relaxed italic text-left md:text-justify"
                            />
                            <div className="w-16 h-1 bg-brand-primary mt-8 rounded-full" />
                        </div>
                    </ScrollReveal>

                    {/* Company Narrative - Clean Editorial Style */}
                    <div className="space-y-8">
                        <ScrollReveal direction="up" delay={0.2}>
                            <MagicText
                                text={t('about.story.commitment')}
                                className="font-medium tracking-tight text-black text-[16px] md:text-[18px] leading-relaxed text-left md:text-justify"
                            />
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={0.3}>
                            <MagicText
                                text={t('about.story.expertise')}
                                className="font-medium tracking-tight text-black text-[16px] md:text-[18px] leading-relaxed text-left md:text-justify"
                            />
                        </ScrollReveal>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CompanyStory;
