import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';

// Row 1 Imports
import adbLogo from '../../../../public/consulting-page-images/ADB-consultancy.png';
import alHammmadiLogo from '../../../../public/consulting-page-images/AlHammmadi-Consultancy.jpg';
import arabAuthorityLogo from '../../../../public/consulting-page-images/Arab-authority-Consultancy.png';
import arabioLogo from '../../../../public/consulting-page-images/Arabio-counsltancy.png';
import bviLogo from '../../../../public/consulting-page-images/BVI-Counsltancy.png';
import biovaccinesLogo from '../../../../public/consulting-page-images/Biovaccines-Consultancy.jpg';
import bravoLogo from '../../../../public/consulting-page-images/bravo.jpg';
import gennecsLogo from '../../../../public/consulting-page-images/Gennecs-consultancy.jpg';
import hacettepeLogo from '../../../../public/consulting-page-images/Hacettepe-Unv-Consultancy.jpg';

// Row 2 Imports
import iaviLogo from '../../../../public/consulting-page-images/Iavi-Consultancy.png';
import mechnikovLogo from '../../../../public/consulting-page-images/Mechnikov-Consultancy.png';
import sbiCapsLogo from '../../../../public/consulting-page-images/SBICaps_Consultancy.png';
import spbsrivsLogo from '../../../../public/consulting-page-images/SPBSRIVS-  Cosultancy.png';
import turkeyMohLogo from '../../../../public/consulting-page-images/Turkey MOH - Counsltancy.png';
import unopsLogo from '../../../../public/consulting-page-images/Unops - consultancy.png';
import whoLogo from '../../../../public/consulting-page-images/WHO-Consultancy.jpg';
import ethopiaLogo from '../../../../public/consulting-page-images/ethopia.jpg';

const ROW_1 = [
    adbLogo,
    alHammmadiLogo,
    arabAuthorityLogo,
    arabioLogo,
    bviLogo,
    biovaccinesLogo,
    bravoLogo,
    gennecsLogo,
    hacettepeLogo,
];

const ROW_2 = [
    iaviLogo,
    mechnikovLogo,
    sbiCapsLogo,
    spbsrivsLogo,
    turkeyMohLogo,
    unopsLogo,
    whoLogo,
    ethopiaLogo,
];

const getLogoStyle = (src: any) => {
    const srcStr = (src?.src || src || '').toLowerCase();
    
    // Default crisp and optimize rendering styles
    let baseClass = "max-w-full max-h-full object-contain transition-all duration-300 hover:scale-110 [image-rendering:-webkit-optimize-contrast] [image-rendering:crisp-edges]";

    // Specific scale adjustments for logos with excessive white background padding
    if (srcStr.includes('bravo')) {
        return `${baseClass} scale-[1.75]`;
    }
    if (srcStr.includes('biovaccines')) {
        return `${baseClass} scale-[1.65]`;
    }
    if (srcStr.includes('who')) {
        return `${baseClass} scale-[1.25]`;
    }
    if (srcStr.includes('ethopia')) {
        return `${baseClass} scale-[1.4]`;
    }
    if (srcStr.includes('bvi')) {
        return `${baseClass} scale-[1.3]`;
    }
    if (srcStr.includes('arab-authority') || srcStr.includes('arabauthority')) {
        return `${baseClass} scale-[1.3]`;
    }
    if (srcStr.includes('arabio')) {
        return `${baseClass} scale-[1.2]`;
    }
    return baseClass;
};

export default function ClientsSection() {
    return (
        <section className="py-24 bg-white font-sans border-t border-slate-100 overflow-hidden">
            <div className="max-w-[1300px] mx-auto px-6 mb-16 text-center">
                 <ScrollReveal direction="up">
                     <h2 className="text-[36px] md:text-[42px] font-medium tracking-wide leading-tight">
                         <SplitTitle title="Our Clients & Partners" />
                     </h2>
                 </ScrollReveal>
             </div>

            <div className="w-full relative flex flex-col gap-10">

                {/* Marquee Row 1 (Moves Left) */}
                <div className="flex w-full overflow-hidden">
                    <motion.div
                        className="flex items-center gap-10 md:gap-16 whitespace-nowrap min-w-max pr-10 md:pr-16"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ ease: "linear", duration: 40, repeat: Infinity }}
                    >
                        {/* Duplicate the array to create a seamless loop */}
                        {[...ROW_1, ...ROW_1].map((src, index) => (
                            <div 
                                key={`row1-${index}`} 
                                className="w-[200px] h-[100px] md:w-[260px] md:h-[130px] flex items-center justify-center p-2 transition-all duration-300"
                            >
                                <img 
                                    src={src} 
                                    alt="Client Logo" 
                                    className={getLogoStyle(src)}
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Marquee Row 2 (Moves Right) */}
                <div className="flex w-full overflow-hidden">
                    <motion.div
                        className="flex items-center gap-10 md:gap-16 whitespace-nowrap min-w-max pr-10 md:pr-16"
                        animate={{ x: ["-50%", "0%"] }}
                        transition={{ ease: "linear", duration: 35, repeat: Infinity }}
                    >
                        {/* Duplicate the array to create a seamless loop */}
                        {[...ROW_2, ...ROW_2].map((src, index) => (
                            <div 
                                key={`row2-${index}`} 
                                className="w-[200px] h-[100px] md:w-[260px] md:h-[130px] flex items-center justify-center p-2 transition-all duration-300"
                            >
                                <img 
                                    src={src} 
                                    alt="Client Logo" 
                                    className={getLogoStyle(src)}
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
