import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { MagicText } from '../../../components/ui/magic-text';
import ScrollReveal from '../../../components/Common/ScrollReveal';

// Import individual phase components
import ProjectFeasibility from './ProjectFeasibility';
import ProjectPlanning from './ProjectPlanning';
import TechnologyTieUp from './TechnologyTieUp';
import DesignEngineering from './DesignEngineering';
import QMSSupport from './QMSSupport';

const StrategicAdvisoryContent = () => {
    const { t } = useLanguage();
    const sections: any[] = t('strategicAdvisory.sections') || [];

    if (!sections || sections.length < 5) return null; // Safety check

    return (
        <div className="bg-white">
            {/* Intro Section */}
            <section className="py-16 md:py-24 max-w-7xl mx-auto px-6">
                <ScrollReveal direction="up">
                    <div className="max-w-4xl">
                        <MagicText
                            text={t('strategicAdvisory.intro')}
                            className="font-sans font-medium text-[20px] text-brand-content leading-relaxed"
                        />
                        <div className="w-16 h-1 bg-brand-primary mt-8 rounded-full" />
                    </div>
                </ScrollReveal>
            </section>

            {/* Individual Phase Sections */}
            <ProjectFeasibility data={sections[0]} />
            <ProjectPlanning data={sections[1]} />
            <TechnologyTieUp data={sections[2]} />
            <DesignEngineering data={sections[3]} />
            <QMSSupport data={sections[4]} />
        </div>
    );
};

export default StrategicAdvisoryContent;
