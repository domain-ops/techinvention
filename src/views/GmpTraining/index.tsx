"use client";
import React, { useEffect } from 'react';
import GmpHero from './sections/GmpHero';
import GmpOverview from './sections/GmpOverview';
import GmpSubjects from './sections/GmpSubjects';
import GmpTestimonials from './sections/GmpTestimonials';
import GmpAppreciation from './sections/GmpAppreciation';
import GmpCTA from './sections/GmpCTA';

export default function GmpTrainingPage() {
    
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
