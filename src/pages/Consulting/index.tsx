import React, { useEffect } from 'react';
import ConsultingContent from './sections/ConsultingContent';

const ConsultingPage = () => {
    useEffect(() => {
        document.title = 'Consulting | TechInvention';
    }, []);

    return (
        <div className="min-h-screen bg-white text-brand-content overflow-hidden">
            <ConsultingContent />
        </div>
    );
};

export default ConsultingPage;
