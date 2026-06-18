import React, { useEffect } from 'react';
import GmpHero from './sections/GmpHero';
import GmpOverview from './sections/GmpOverview';
import GmpSubjects from './sections/GmpSubjects';
import GmpTestimonials from './sections/GmpTestimonials';
import GmpAppreciation from './sections/GmpAppreciation';
import GmpCTA from './sections/GmpCTA';
import { useSEO } from '../../lib/useSEO';

export default function GmpTrainingPage() {
    useSEO(
        'GMP Training & Workforce Development | TechInvention',
        "TechInvention's professional Good Manufacturing Practice (GMP) training programs prepare workforce talents for quality-driven biotech manufacturing."
    );

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white text-slate-800 overflow-hidden font-sans">
            {/* 1. Hero banner with facility/training visual */}
            <GmpHero />

            {/* 2. Overview of the unit purpose & statistics */}
            <GmpOverview />

            {/* 3. Browseable course cards grid */}
            <GmpSubjects />

            {/* 4. Trainee/Participant feedback quotes */}
            <GmpTestimonials />

            {/* 5. Appreciation letters & certificates with lightbox modal */}
            <GmpAppreciation />

            {/* 6. Training enquiry registration form */}
            <GmpCTA />
        </div>
    );
}
