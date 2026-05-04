import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { Microscope, FileSearch, Network, PenTool, ShieldCheck } from 'lucide-react';
import AdvisoryPhaseItem from './AdvisoryPhaseItem';

const PHASE_ICONS = [
    FileSearch,
    PenTool,
    Network,
    Microscope,
    ShieldCheck
];

const AdvisoryPhases = () => {
    const { t } = useLanguage();
    const sections: any[] = t('strategicAdvisory.sections') || [];

    if (!sections || sections.length < 5) return null;

    return (
        <div className="max-w-7xl mx-auto px-6 pb-32 space-y-16 lg:space-y-24">
            {sections.map((phase, idx) => {
                const Icon = PHASE_ICONS[idx % PHASE_ICONS.length];
                return <AdvisoryPhaseItem key={idx} phase={phase} idx={idx} Icon={Icon} />;
            })}
        </div>
    );
};

export default AdvisoryPhases;
