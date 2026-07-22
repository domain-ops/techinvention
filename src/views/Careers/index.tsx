"use client";
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import CareersHero from './sections/CareersHero';

// Dynamically import below the fold components
const LifeAtTechInvention = dynamic(() => import('./sections/LifeAtTechInvention'));
const WhyJoinUs = dynamic(() => import('./sections/WhyJoinUs'));
const WhoWeLookFor = dynamic(() => import('./sections/WhoWeLookFor'));
const EmployeeVoices = dynamic(() => import('./sections/EmployeeVoices'));
const CurrentOpenings = dynamic(() => import('./sections/CurrentOpenings'));
const ApplyForm = dynamic(() => import('./sections/ApplyForm'));

gsap.registerPlugin(ScrollTrigger);


export default function CareersPage() {
    const [selectedJob, setSelectedJob] = useState<string | null>(null);

    
    useEffect(() => {
        window.scrollTo(0, 0);
        
        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    const handleSelectJob = (jobTitle: string) => {
        setSelectedJob(jobTitle);
        // Scroll to the application form
        setTimeout(() => {
            const formSection = document.getElementById('apply-form-section');
            if (formSection) {
                formSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    const handleCancelApplication = () => {
        setSelectedJob(null);
        // Scroll back to openings list
        setTimeout(() => {
            const openingsSection = document.getElementById('current-openings');
            if (openingsSection) {
                openingsSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    return (
        <div className="min-h-screen bg-brand-background text-brand-content overflow-hidden">
            {/* 1. Careers Hero */}
            <CareersHero />

            {/* 2. Life at TechInvention */}
            <LifeAtTechInvention />

            {/* 3. Why Join Us */}
            <WhyJoinUs />

            {/* 4. Who We Look For */}
            <WhoWeLookFor />

            {/* 5. Employee Voices */}
            <EmployeeVoices />

            {/* 6. Current Openings */}
            <CurrentOpenings onSelectJob={handleSelectJob} />

            {/* 7. Apply Now Form (conditionally rendered/toggled when a job is clicked) */}
            <ApplyForm 
                selectedJobTitle={selectedJob} 
                onCancel={handleCancelApplication} 
            />
        </div>
    );
}
