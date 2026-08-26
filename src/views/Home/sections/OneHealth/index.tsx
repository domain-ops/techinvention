import React from 'react';
import { useLanguage } from '../../../../context/LanguageContext';
import ScrollReveal from '../../../../components/Common/ScrollReveal';
import AccordionSlider from './AccordionSlider';

// Import images
import ecoImg from "../../../../assets/images/one_health_ecosystem.png";
import surveillanceImg from "../../../../assets/images/one_health_ecosystem.png"; // Placeholder for one_health_surveillance.png
import infraImg from "../../../../assets/images/one_health_infrastructure.png";
import innovationImg from "../../../../assets/images/one_health_infrastructure.png"; // Placeholder for one_health_innovation.png

import commercialImg from "../../../../../public/Commercial.jpg";
import researchImg from "../../../../../public/Research.jpg";
import licensingImg from "../../../../../public/Licensing.jpg";
import strategicImg from "../../../../../public/Strategic.jpg";

import TextReveal from '../../../../components/Common/TextReveal';
import { SplitTitle } from '../../../../components/Common/SplitTitle';
import { motion } from 'framer-motion';

const logoDNA = "/TechInvention-gif.gif";

const OneHealth = () => {
    const { t } = useLanguage();

    const translatedSlides = t('oneHealth.slides');

    const fallbackSlides = [
        { title: "Commercial-Scale Manufacturing", desc: "TechInvention’s integrated GMP manufacturing facility (GCMC) provides Drug Substance and Fill-finish manufacturing for vaccines and biologics within a quality-driven, scalable framework. It supports technology transfer, process scale-up, regulatory compliance, and commercial manufacturing.", tag: "Manufacturing" },
        { title: "Research and Development (R&D)", desc: "We focus on the research and development of next-generation vaccines against critical infectious diseases and AMR-associated pathogens. Powered by our pilot GMP (HORIZON) and strategic collaborations with leading research institutions, our R&D portfolio spans recombinant and glycoconjugate vaccine platforms.", tag: "R&D" },
        { title: "Licensing and Access", desc: "We enable strategic in-licensing and out-licensing of vaccines to accelerate access, innovation and commercialization. By connecting promising technologies with the right development, manufacturing and market pathways, we help transform scientific assets into scalable global health solutions.", tag: "Licensing" },
        { title: "Strategic Advisory & Tech Consulting", desc: "Our Strategic Advisory & Technical Consulting services help organizations build sustainable vaccine and biopharmaceutical manufacturing capabilities. We provide end-to-end support across feasibility studies, portfolio planning, engineering design, project supervision, facility commissioning, and gap assessments.", tag: "Consulting" }
    ];

    const finalSlidesData = Array.isArray(translatedSlides) && translatedSlides.length > 0
        ? translatedSlides
        : fallbackSlides;

    const slides = [
        { ...(finalSlidesData[0] || {}), title: finalSlidesData[0]?.title || "Commercial-Scale Manufacturing", image: commercialImg, tag: finalSlidesData[0]?.tag || "Manufacturing" },
        { ...(finalSlidesData[1] || {}), title: finalSlidesData[1]?.title || "Research and Development (R&D)", image: researchImg, tag: finalSlidesData[1]?.tag || "R&D" },
        { ...(finalSlidesData[2] || {}), title: finalSlidesData[2]?.title || "Licensing and Access", image: licensingImg, tag: finalSlidesData[2]?.tag || "Licensing" },
        { ...(finalSlidesData[3] || {}), title: finalSlidesData[3]?.title || "Strategic Advisory & Tech Consulting", image: strategicImg, tag: finalSlidesData[3]?.tag || "Consulting" },
    ];

    return (
        <section id="one-health" className="py-16 md:py-20 bg-white relative border-y border-slate-100 scroll-mt-20">
            

            <div className="max-w-7xl mx-auto px-6">


                {/* Accordion Slider Section */}
                <ScrollReveal direction="up" delay={0.2}>
                    <div className="relative z-10 w-full">
                        <AccordionSlider slides={slides} />
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default OneHealth;
