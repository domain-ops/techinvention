import React from 'react';
import ConsultingContent from './sections/ConsultingContent';
import { useSEO } from '../../lib/useSEO';

const ConsultingPage = () => {
    useSEO(
        'Biotech Consulting Services | TechInvention',
        'TechInvention offers end-to-end biotech consulting, from feasibility studies and technology transfers to facility design and compliance.'
    );

    return (
        <div className="min-h-screen bg-white text-brand-content overflow-hidden">
            <ConsultingContent />
        </div>
    );
};

export default ConsultingPage;
