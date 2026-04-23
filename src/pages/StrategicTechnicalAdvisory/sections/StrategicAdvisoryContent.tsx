import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { MagicText } from '../../../components/ui/magic-text';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';

const StrategicAdvisoryContent = () => {
    const { t } = useLanguage();

    const sections: any[] = t('strategicAdvisory.sections') || [];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <ScrollReveal direction="up">
                    <div className="mb-16">
                        <MagicText
                            text={t('strategicAdvisory.intro')}
                            className="text-lg md:text-xl lg:text-2xl font-medium tracking-tight text-brand-content leading-relaxed text-justify"
                        />
                        <div className="w-16 h-1 bg-brand-primary mt-8 rounded-full" />
                    </div>
                </ScrollReveal>

                <div className="space-y-20">
                    {sections.map((section: any, index: number) => (
                        <ScrollReveal key={index} direction="up" delay={0.2}>
                            <div className="bg-neutral-50 rounded-[2.5rem] p-10 md:p-14 border border-neutral-100 hover:border-brand-primary/20 transition-colors duration-500">
                                <div className="mb-6">
                                    <span className="text-brand-primary font-medium tracking-[0.4em] text-[11px] mb-4 block uppercase">
                                        Phase 0{index + 1}
                                    </span>
                                    <h3 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight leading-tight tracking-tighter">
                                        <SplitTitle title={section.title} />
                                    </h3>
                                </div>
                                
                                <div className="space-y-6">
                                    {section.content.split('\n\n').map((paragraph: string, pIdx: number) => (
                                        <p key={pIdx} className="text-neutral-700 text-base md:text-lg leading-relaxed text-justify">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>

                                {section.deliverables && section.deliverables.length > 0 && (
                                    <div className="mt-12 pt-10 border-t border-neutral-200">
                                        <span className="text-brand-primary font-medium tracking-[0.4em] text-[11px] mb-6 block uppercase">
                                            {section.deliverablesTitle}
                                        </span>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {section.deliverables.map((item: string, iIdx: number) => (
                                                <li key={iIdx} className="flex items-start gap-3">
                                                    <div className="w-1.5 h-1.5 mt-2.5 rounded-full bg-brand-primary flex-shrink-0" />
                                                    <span className="text-neutral-700 text-base md:text-lg leading-relaxed">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StrategicAdvisoryContent;
