import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import labImg from '../../../assets/images/banner-imge-2.jpg';
import TextReveal from '../../../components/Common/TextReveal';

interface AboutBannerProps {
    title?: string;
    parentMenu?: string;
    parentMenuLink?: string;
    image?: string;
}

const AboutBanner: React.FC<AboutBannerProps> = ({ title, parentMenu, parentMenuLink, image }) => {
    const { t } = useLanguage();
    const displayTitle = title || t('navbar.about');
    const displayImage = image || labImg;

    return (
        <section className="relative h-[85vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-slate-900">
            {/* Background Images Layered */}
            <div className="absolute inset-0 z-0">
                <img
                    src={displayImage}
                    alt="Background"
                    className="w-full h-full object-cover object-top"
                />
                {/* Light overlay to ensure white text readability without hiding the image */}
                <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center pt-24 w-full">
                <div className="mx-auto w-full max-w-7xl">
                    <TextReveal
                        text={displayTitle}
                        mode="light"
                        className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-[1.1] tracking-tighter justify-center text-center md:whitespace-normal"
                    />
                </div>

                {/* Breadcrumb Structure */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center justify-center gap-2 flex-wrap text-center text-white/60 text-[11px] font-medium tracking-tight tracking-[0.4em] mt-6 md:mt-8"
                >
                    <Link to="/" className="hover:text-white transition-colors">{t('navbar.home')}</Link>
                    {parentMenu && (
                        <>
                            <ChevronRight size={12} className="opacity-40" />
                            {parentMenuLink ? (
                                <Link to={parentMenuLink} className="hover:text-white transition-colors">{parentMenu}</Link>
                            ) : (
                                <span className="text-white/80">{parentMenu}</span>
                            )}
                        </>
                    )}
                    <ChevronRight size={12} className="opacity-40" />
                    <span className="text-white/90">{displayTitle}</span>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutBanner;
