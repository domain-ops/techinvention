import React from 'react';
import { useLanguage } from '../../../../context/LanguageContext';
import ScrollReveal from '../../../../components/Common/ScrollReveal';
import { WorldMap } from '../../../../components/ui/world-map';

import { MagicText } from '../../../../components/ui/magic-text';
import { SplitTitle } from '../../../../components/Common/SplitTitle';



const projectDots = [
  {
    start: { lat: 19.0760, lng: 72.8777, label: "India" },
    end: { lat: 9.0820, lng: 8.6753, label: "Nigeria" },
  },
  {
    start: { lat: 19.0760, lng: 72.8777 },
    end: { lat: 12.8654, lng: -85.2072, label: "Nicaragua" },
  },
  {
    start: { lat: 19.0760, lng: 72.8777 },
    end: { lat: 26.8206, lng: 30.8025, label: "Egypt" },
  },
  {
    start: { lat: 19.0760, lng: 72.8777 },
    end: { lat: 9.1450, lng: 40.4897, label: "Ethiopia" },
  },
  {
    start: { lat: 19.0760, lng: 72.8777 },
    end: { lat: -22.3285, lng: 24.6849, label: "Botswana" },
  },
  {
    start: { lat: 19.0760, lng: 72.8777 },
    end: { lat: 39.8283, lng: -98.5795, label: "USA" },
  },
  {
    start: { lat: 19.0760, lng: 72.8777 },
    end: { lat: 21.4735, lng: 55.9754, label: "Oman" },
  },
  {
    start: { lat: 19.0760, lng: 72.8777 },
    end: { lat: 61.5240, lng: 105.3188, label: "Russia" },
  },
  {
    start: { lat: 19.0760, lng: 72.8777 },
    end: { lat: 23.6850, lng: 90.3563, label: "Bangladesh" },
  },
  {
    start: { lat: 19.0760, lng: 72.8777 },
    end: { lat: -14.2350, lng: -51.9253, label: "Brazil" },
  },
  {
    start: { lat: 19.0760, lng: 72.8777 },
    end: { lat: 28.3949, lng: 84.1240, label: "Nepal" },
  },
  {
    start: { lat: 19.0760, lng: 72.8777 },
    end: { lat: 35.9078, lng: 127.7669, label: "South Korea" },
  },
  {
    start: { lat: 19.0760, lng: 72.8777 },
    end: { lat: 35.8617, lng: 104.1954, label: "China" },
  },
  {
    start: { lat: 19.0760, lng: 72.8777 },
    end: { lat: 23.8859, lng: 45.0792, label: "Saudi Arabia" },
  },
  {
    start: { lat: 19.0760, lng: 72.8777 },
    end: { lat: 15.8700, lng: 100.9925, label: "Thailand" },
  },
  {
    start: { lat: 19.0760, lng: 72.8777 },
    end: { lat: -38.4161, lng: -63.6167, label: "Argentina" },
  },
  {
    start: { lat: 19.0760, lng: 72.8777 },
    end: { lat: 38.9637, lng: 35.2433, label: "Turkey" },
  },
  {
    start: { lat: 19.0760, lng: 72.8777 },
    end: { lat: 55.3781, lng: -3.4360, label: "UK" },
  },
  {
    start: { lat: 19.0760, lng: 72.8777 },
    end: { lat: 4.2105, lng: 101.9758, label: "Malaysia" },
  },
  {
    start: { lat: 19.0760, lng: 72.8777 },
    end: { lat: -30.5595, lng: 22.9375, label: "South Africa" },
  },
];

const GlobalProjects = () => {
    const { t } = useLanguage();

    return (
        <section id="global-projects" className="py-16 md:py-20 relative bg-white">
            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                {/* Header Content */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-8">
                    <div className="flex flex-col items-start gap-4">
                        <div className="max-w-3xl">
                            <h2 className="text-[24px] md:text-[36px] font-medium tracking-wide">
                                <SplitTitle title={t('globalProjects.title').replace('{partners}', t('globalProjects.partners'))} />
                            </h2>
                        </div>

                        <div className="max-w-full">
                            <MagicText
                                text={t('globalProjects.desc')}
                                className="font-medium tracking-tight text-brand-content text-[18px] leading-relaxed text-left lg:text-justify"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Interactive World Map Component */}
            <ScrollReveal direction="up" delay={0.2}>
                <div className="w-full relative z-10 py-2 md:py-10 flex justify-center">
                    <WorldMap
                        lineColor="#1755a6"
                        dots={projectDots}
                    />
                </div>
            </ScrollReveal>
        </section>
    );
};

export default GlobalProjects;

