import React from 'react';
import AdvisoryHeader from './AdvisoryHeader';
import AdvisoryPhases from './AdvisoryPhases';
import AdvisoryTestimonials from './AdvisoryTestimonials';
import AdvisoryCTA from './AdvisoryCTA';

const StrategicAdvisoryContent = () => {
    return (
        <div className="bg-[#F8F9FA] relative overflow-hidden">
            <AdvisoryHeader />
            <AdvisoryPhases />
            <AdvisoryTestimonials />
            <AdvisoryCTA />
        </div>
    );
};

export default StrategicAdvisoryContent;
