import React from 'react';
import { SplitTitle } from '../../../components/Common/SplitTitle';
import ScrollReveal from '../../../components/Common/ScrollReveal';

import avmi from '../../../assets/images/client-logo/avmi.png';
import bactiVac from '../../../assets/images/client-logo/bactiVac-network-logo.png';
import beam from '../../../assets/images/client-logo/beam-r31c7xfarpqdqcqccwc5iricfp2is4bqzxqehj4tt4.png';
import cepi from '../../../assets/images/client-logo/cepi.png';
import ebpmm from '../../../assets/images/client-logo/ebpmm.jpeg';
import escmid from '../../../assets/images/client-logo/escmid.jpeg';
import faba from '../../../assets/images/client-logo/faba.png';
import fieo from '../../../assets/images/client-logo/fieo.png';
import fitt from '../../../assets/images/client-logo/fitt.png';
import ibiom from '../../../assets/images/client-logo/ibiom.png';
import idma from '../../../assets/images/client-logo/idma.jpeg';
import ieto from '../../../assets/images/client-logo/ieto-logo-edit.png';
import ifcci from '../../../assets/images/client-logo/ifcci.png';
import imc from '../../../assets/images/client-logo/imc.png';
import innovationCouncil from '../../../assets/images/client-logo/innovation-council.jpeg';
import isv from '../../../assets/images/client-logo/isv-logo-edit.png';
import logo1 from '../../../assets/images/client-logo/logo-1.png';
import logo2 from '../../../assets/images/client-logo/logo-2.png';
import logo3 from '../../../assets/images/client-logo/logo-3.png';
import pharmexcil from '../../../assets/images/client-logo/pharmexcil.jpeg';
import sepc from '../../../assets/images/client-logo/sepc-logo.png';
import smeChamber from '../../../assets/images/client-logo/sme-chamber-india.png';
import utjga from '../../../assets/images/client-logo/utjga.png';
import vaxGlob from '../../../assets/images/client-logo/vax-glob.jpg';
import vaxSust from '../../../assets/images/client-logo/vax-sust.jpg';
import veternary from '../../../assets/images/client-logo/veternary.jpg';

const logos = [
    avmi, bactiVac, beam, cepi, ebpmm, escmid, faba, fieo, fitt, ibiom, idma, ieto,
    ifcci, imc, innovationCouncil, isv, logo1, logo2, logo3, pharmexcil, sepc,
    smeChamber, utjga, vaxGlob, vaxSust, veternary
];

const ClientLogos = () => {
    return (
        <section className="py-12 md:py-20 bg-white overflow-hidden border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6 mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div className="text-left flex-1">
                    <ScrollReveal direction="up">
                        <span className="text-brand-primary font-medium tracking-[0.4em] text-[11px] mb-2 block uppercase text-left">
                            Our Membership
                        </span>
                        <div className="mb-4">
                            <h2 className="text-[28px] md:text-[36px] font-medium tracking-wide whitespace-normal md:whitespace-nowrap text-left">
                                <SplitTitle title="Trusted by Global Partners" />
                            </h2>
                        </div>
                    </ScrollReveal>
                </div>
            </div>

            <div className="relative w-full flex overflow-hidden group py-4">
                {/* Gradient overlays for smooth fading edges */}
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>

                <div className="flex w-max animate-marquee space-x-16 items-center px-8">
                    {logos.map((logo, index) => (
                        <div key={index} className="flex-shrink-0 w-44 h-24 flex items-center justify-center transition-all duration-500 cursor-pointer">
                            <img src={logo} alt={`Partner logo ${index + 1}`} className="max-w-full max-h-full object-contain" />
                        </div>
                    ))}
                    {/* Duplicate for seamless infinite effect */}
                    {logos.map((logo, index) => (
                        <div key={`dup-${index}`} className="flex-shrink-0 w-44 h-24 flex items-center justify-center transition-all duration-500 cursor-pointer">
                            <img src={logo} alt={`Partner logo duplicate ${index + 1}`} className="max-w-full max-h-full object-contain" />
                        </div>
                    ))}
                </div>
                
                <style>{`
                    @keyframes marquee {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    .animate-marquee {
                        animation: marquee 50s linear infinite;
                    }
                    .animate-marquee:hover {
                        animation-play-state: paused;
                    }
                `}</style>
            </div>
        </section>
    );
};

export default ClientLogos;
