import React, { useRef, useEffect } from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { SplitTitle } from '../../../components/Common/SplitTitle';
import techInventionVideo from '../../../assets/videos/TechInvention-Video.mp4';

interface AboutBannerProps {
    title?: string;
    parentMenu?: string;
    parentMenuLink?: string;
    image?: string;
    subtitle?: string;
}

const AboutBanner: React.FC<AboutBannerProps> = ({ 
    title, 
    parentMenu, 
    parentMenuLink, 
    image, 
    subtitle
}) => {
    const { t } = useLanguage();
    const videoRef = useRef<HTMLVideoElement>(null);
    
    // Default page title for About Us if none is passed
    const pageTitle = title || t('navbar.company') || 'About TechInvention';
    
    // Determine default subtitle based on title if not explicitly passed
    let defaultSubtitle = subtitle;
    if (!subtitle) {
        if (pageTitle.toLowerCase().includes('about')) {
            defaultSubtitle = "TechInvention is an innovation-led biotech company building integrated pathways from research and technology access to scale-up and GMP manufacturing - with a clear focus on global advancing vaccine access";
        } else if (pageTitle.toLowerCase().includes('member') || pageTitle.toLowerCase().includes('association')) {
            defaultSubtitle = "Collaborating with leading global health organisations, pharmaceutical associations, and research bodies to advance biotechnology innovation.";
        } else {
            defaultSubtitle = "Advancing global health through biotechnology, specialized diagnostics, and clinical manufacturing consulting.";
        }
    }

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 2.0; // Play at double speed
        }
    }, [pageTitle]);

    const isAboutPage = pageTitle.toLowerCase().includes('about');

    return (
        <section className={`relative w-full overflow-hidden ${
            image 
                ? 'h-[380px] md:h-[520px] flex items-center bg-slate-900 pt-20 md:pt-28' 
                : 'min-h-[450px] md:min-h-[550px] flex items-center bg-slate-50 pt-32 pb-16 md:pt-40 md:pb-20 lg:pt-44'
        }`}>
            {/* Background elements */}
            {image ? (
                <div className="absolute inset-0 z-0">
                    <img src={image}
                        alt={pageTitle}
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-black/45 z-10" />
                </div>
            ) : (
                <>
                    {/* Ambient background decoration - extremely subtle light glows matching careers page style */}
                    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[#1955A6]/5 blur-[100px] pointer-events-none z-0" />
                    <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#5C7625]/5 blur-[100px] pointer-events-none z-0" />
                </>
            )}

            <div className="relative z-20 w-full max-w-[1440px] mx-auto px-4 md:px-8">
                {image ? (
                    /* Traditional Banner with Image Overlay */
                    <div className="text-left w-full">
                        <h1 className="text-[28px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-medium tracking-wide leading-[1.15] text-white">
                            {pageTitle}
                        </h1>
                    </div>
                ) : (
                    /* Center-aligned layout with conditional embedded half-width video player below */
                    <div className="flex flex-col items-center text-center w-full">
                        <div className="max-w-3xl mx-auto flex flex-col items-center">
                            <h1 className="text-[28px] sm:text-3xl md:text-4xl lg:text-[56px] font-medium tracking-wide leading-[1.15] text-slate-950 font-sans mb-6 text-center">
                                <SplitTitle title={pageTitle} />
                            </h1>
                            
                            {defaultSubtitle && (
                                <p className="text-slate-600 text-[16px] md:text-[18px] leading-relaxed max-w-2xl font-medium mb-10 text-center">
                                    {defaultSubtitle}
                                </p>
                            )}
                        </div>

                        {/* Center-aligned, wider video player for About page */}
                        {isAboutPage && (
                            <div className="w-full max-w-6xl mx-auto mt-6">
                                <div className="relative aspect-video w-full overflow-hidden shadow-[0_15px_40px_rgba(23,85,166,0.1)] border border-slate-100 bg-slate-950 rounded-none">
                                    <video
                                        ref={videoRef}
                                        src={techInventionVideo}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        preload="auto"
                                        className="w-full h-full object-cover object-center [transform:translate3d(0,0,0)] [backface-visibility:hidden]"
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
};

export default AboutBanner;
