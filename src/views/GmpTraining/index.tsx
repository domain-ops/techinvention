"use client";
import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import GmpHero from './sections/GmpHero';
import GmpOverview from './sections/GmpOverview';

// Dynamically import below the fold components
const TrainingModules = dynamic(() => import('./sections/TrainingModules'));
const SpecializedTraining = dynamic(() => import('./sections/SpecializedTraining'));
const GmpTestimonials = dynamic(() => import('./sections/GmpTestimonials'));
const GmpAppreciation = dynamic(() => import('./sections/GmpAppreciation'));
const GmpCTA = dynamic(() => import('./sections/GmpCTA'));

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

            {/* 3. Browseable course accordion list */}
            <TrainingModules />

            {/* 3.5 Specialized Training */}
            <SpecializedTraining />

            {/* 4. Trainee/Participant feedback quotes */}
            <GmpTestimonials />

            {/* 5. Appreciation letters & certificates with lightbox modal */}
            <GmpAppreciation />

            {/* 6. Training enquiry CTA section */}
            <GmpCTA />
        </div>
    );
}
