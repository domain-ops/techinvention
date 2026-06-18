import React, { useEffect } from 'react';
import LandingHero from './sections/LandingHero';
import GCMCFeature from './sections/GCMCFeature';
import DrugSubstance from './sections/DrugSubstance';
import DrugProduct from './sections/DrugProduct';
import QCLab from './sections/QCLab';
import TechTransfer from './sections/TechTransfer';
import CTASection from '../../components/CTASection';
import { useSEO } from '../../lib/useSEO';

const CDMOPage = () => {
    useSEO(
        'CDMO Services | TechInvention',
        'Explore our Contract Development and Manufacturing Organization (CDMO) services featuring our state-of-the-art GCMC facility, Drug Substance, and Drug Product capabilities.'
    );

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-brand-background min-h-screen">
            <LandingHero />
            <GCMCFeature />
            <DrugSubstance />
            <DrugProduct />
            <QCLab />
            <TechTransfer />
            <CTASection />
        </div>
    );
};

export default CDMOPage;
