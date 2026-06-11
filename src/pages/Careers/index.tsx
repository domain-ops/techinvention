import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import CareersHero from './sections/CareersHero';
import LifeAtTechInvention from './sections/LifeAtTechInvention';
import CurrentOpenings from './sections/CurrentOpenings';
import ApplyForm from './sections/ApplyForm';
import EmployeeTestimonials from './sections/EmployeeTestimonials';

gsap.registerPlugin(ScrollTrigger);

import { useSEO } from '../../lib/useSEO';

export default function CareersPage() {
    const [selectedJob, setSelectedJob] = useState<string | null>(null);

    useSEO(
        'Careers at TechInvention | Join Our Biotech Team',
        'Explore career opportunities at TechInvention. Join a diverse team of scientists, researchers, and experts advancing global health biotechnology.'
    );

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

            {/* 3. Current Openings */}
            <CurrentOpenings onSelectJob={handleSelectJob} />

            {/* 4. Apply Now Form (conditionally rendered/toggled when a job is clicked) */}
            <ApplyForm 
                selectedJobTitle={selectedJob} 
                onCancel={handleCancelApplication} 
            />

            {/* 5. Employee Testimonials */}
            <EmployeeTestimonials />
        </div>
    );
}
