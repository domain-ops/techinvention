import React from 'react';
import logoImg from '../../assets/images/brand_logo.png';
import { useLanguage } from '../../context/LanguageContext';
import { Link } from 'react-router-dom';

const Footer = () => {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-brand-accent pt-20 pb-12 border-t border-brand-gray-light/20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-12 md:gap-16 mb-24">
                    <div className="md:w-1/4">
                        <div className="flex items-center gap-2 mb-8">
                            <img
                                src={logoImg}
                                alt={t('common.brandName')}
                                className="h-16 w-auto object-contain"
                            />
                        </div>
                        <p className="text-black text-[13px] 2xl:text-[14px] font-medium tracking-tight leading-relaxed max-w-xs tracking-wider">
                            {t('footer.desc')}
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-12 md:w-3/4">
                        <div>
                            <h4 className="text-lg font-medium tracking-tight tracking-widest text-brand-content mb-8">{t('footer.solutions')}</h4>
                            <ul className="space-y-4 text-[13px] 2xl:text-[14px] text-black font-medium tracking-tight tracking-wider">
                                <li>
                                    <Link to="/rnd/vaccines" className="hover:text-brand-primary transition-colors cursor-pointer block w-full">
                                        {t('solutions.items.0.title')}
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/rnd/diagnostics" className="hover:text-brand-primary transition-colors cursor-pointer block w-full">
                                        {t('solutions.items.1.title')}
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/rnd" className="hover:text-brand-primary transition-colors cursor-pointer block w-full">
                                        {t('solutions.items.2.title')}
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/consulting" className="hover:text-brand-primary transition-colors cursor-pointer block w-full">
                                        {t('solutions.items.3.title')}
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-medium tracking-tight tracking-widest text-brand-content mb-8">{t('footer.company')}</h4>
                            <ul className="space-y-4 text-[13px] 2xl:text-[14px] text-black font-medium tracking-tight tracking-wider">
                                <li>
                                    <Link to="/about" className="hover:text-brand-primary transition-colors cursor-pointer block w-full">
                                        {t('megaMenu.aboutUs')}
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/#global-projects" className="hover:text-brand-primary transition-colors cursor-pointer block w-full">
                                        {t('map.tag')}
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:text-brand-primary transition-colors cursor-pointer block w-full">
                                        {t('homeStats.header.tag')}
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/#vaccine-pipeline" className="hover:text-brand-primary transition-colors cursor-pointer block w-full">
                                        {t('megaMenu.pipeline')}
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-span-2 sm:col-span-1">
                            <h4 className="text-lg font-medium tracking-tight tracking-widest text-brand-content mb-8">{t('footer.connect')}</h4>
                            <ul className="space-y-4 text-[13px] 2xl:text-[14px] text-black font-medium tracking-tight tracking-wider">
                                <li>
                                    <a href="https://www.linkedin.com/company/techinvention/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors cursor-pointer block w-full">
                                        {t('footer.linkedin')}
                                    </a>
                                </li>
                                <li>
                                    <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors cursor-pointer block w-full">
                                        {t('footer.twitter')}
                                    </a>
                                </li>
                                <li>
                                    <Link to="/contact-us" className="hover:text-brand-primary transition-colors cursor-pointer block w-full">
                                        {t('navbar.contactUs')}
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact-us" className="hover:text-brand-primary transition-colors cursor-pointer block w-full">
                                        {t('footer.partnerPortal')}
                                    </Link>
                                </li>
                                <li className="hover:text-brand-primary transition-colors cursor-pointer break-all">
                                    <a href={`mailto:${t('footer.email')}`}>{t('footer.email')}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-brand-gray-light/20 text-[10px] tracking-widest text-brand-gray-light font-medium tracking-tight">
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8 mb-6 md:mb-0">
                        <span className="whitespace-nowrap">© {currentYear} {t('common.brandName') as string}</span>
                        <span className="whitespace-nowrap">{t('footer.allRightsReserved')}</span>
                    </div>
                    <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-8">
                        <Link to="#" className="hover:text-brand-content transition-colors cursor-pointer whitespace-nowrap">{t('footer.privacyPolicy')}</Link>
                        <Link to="#" className="hover:text-brand-content transition-colors cursor-pointer whitespace-nowrap">{t('footer.termsOfService')}</Link>
                        <Link to="#" className="hover:text-brand-content transition-colors cursor-pointer whitespace-nowrap">{t('footer.globalCompliance')}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;


