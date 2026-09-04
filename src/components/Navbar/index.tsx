import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../../assets/images/brand_logo.png';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useLanguage, Language } from '../../context/LanguageContext';
import { Globe, ChevronDown, Menu, X, Search, Phone, Mail } from 'lucide-react';
import MegaMenuContent from './MegaMenuContent';

const Navbar = () => {
    const [mounted, setMounted] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [isMobileLangOpen, setIsMobileLangOpen] = useState(false);
    const { language, setLanguage, t } = useLanguage();
    const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
    const [openMobileMenus, setOpenMobileMenus] = useState<string[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        setMounted(true);
    }, []);

    const defaultAnnouncements = [
        "🏆 TechInvention recognized in Forbes India Select 200, featured among companies with Global Business Potential, reflecting the company's rapid growth and industry leadership.",
        "🏆 Honoured with the \"Best Vaccine Efforts of the Year\" award at the BioSpectrum India Excellence Awards 2025.",
        "🤝 Proud to receive support from the Technology Development Board (TDB) for our NexGen Vaccine initiative.",
        "🤝 Secured strategic licensing agreements for NexGen Salmonella Vaccine technologies at the Medical Innovations Patent Mitra: Innovators-to-Industry (I2I) Connect in New Delhi.",
        "🏆 Our Founder & CEO, Mr. Syed S. Ahmed, was conferred the prestigious \"Outstanding Leader in Healthcare Technology\" award by Dr. Kiran Bedi at the Bharat 2.0 Conclave, recognizing his exceptional leadership and contributions to the healthcare sector.",
        "⚡ In the esteemed presence of Shri Rajesh Kumar Pathak, Secretary, Technology Development Board, we inaugurated our dedicated power substation at GCMC, strengthening infrastructure for advanced biomanufacturing.",
        "🔬 Our tuberculosis (TB) vaccine candidate has been selected by the TuBerculosis Vaccine Initiative (TBVI) for comparative evaluation in the mouse Mycobacterium tuberculosis aerosol infection model.",
        "🏢 Backed by the Technology Development Board, our NexGen vaccine manufacturing facility is set to advance immunization, expand vaccine access, and strengthen healthcare systems.",
        "🤝 We have partnered with IIT Bhubaneswar, the Institute of Life Sciences (ILS), and the National Research Development Corporation (NRDC) to develop, scale up, and commercialize a next-generation recombinant tuberculosis vaccine.",
        "📈 TechInvention welcomed a strategic investment from Ashish Kacholia, reinforcing our long-term growth and innovation roadmap."
    ];

    const rawAnnouncements = t('navbar.announcements') as string[];
    const announcements = Array.isArray(rawAnnouncements) && rawAnnouncements.length > 0
        ? rawAnnouncements
        : defaultAnnouncements;

    const [noticeIndex, setNoticeIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setNoticeIndex((prev) => (prev + 1) % announcements.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [announcements.length]);

    useEffect(() => {
        setActiveMegaMenu(null);
        setIsMenuOpen(false);
        setIsMobileLangOpen(false);
        setIsLangOpen(false);
    }, [pathname]);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && searchQuery.trim()) {
            router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
            setSearchQuery('');
            setIsMenuOpen(false); // Close mobile menu if open
        }
    };

    const toggleMobileMenu = (item: string) => {
        setOpenMobileMenus(prev => 
            prev.includes(item) 
                ? prev.filter(i => i !== item)
                : [...prev, item]
        );
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const languages: { code: Language; label: string; nativeLabel: string }[] = [
        { code: 'en', label: 'English', nativeLabel: 'English' },
        { code: 'es', label: 'Spanish', nativeLabel: 'Español' },
        { code: 'fr', label: 'French', nativeLabel: 'Français' },
        { code: 'ar', label: 'Arabic', nativeLabel: 'العربية' },
        { code: 'tr', label: 'Turkish', nativeLabel: 'Türkçe' },
        { code: 'ru', label: 'Russian', nativeLabel: 'Русский' },
    ];

    const megaMenusData: Record<string, any> = {
        company: {
            simpleLinks: [
                { name: t('navbar.about') || 'About', href: '/about' },
                { name: t('navbar.csr') || 'CSR', href: '/about/csr-initiatives' },
                { name: t('navbar.awardsCertifications') || 'Awards & Certifications', href: '/about/awards-certifications' }
            ]
        }
    };

    const mainNavItems = [
        { key: 'home', label: t('navbar.home') || 'Home', href: '/' },
        { key: 'company', label: t('navbar.company') || 'Company', href: '/about' },
        { key: 'rnd', label: t('navbar.rnd') || 'R&D', href: '/rnd' },
        { key: 'cdmo', label: t('navbar.manufacturing') || 'Manufacturing', href: '/cdmo' },
        { key: 'consulting', label: t('navbar.consulting') || 'Consulting', href: '/consulting' },
        { key: 'products', label: t('navbar.products') || 'Products', href: '/products' },
        { key: 'gmp', label: t('navbar.training') || 'Training', href: '/gmp-training' },
        { key: 'careers', label: t('navbar.careers') || 'Careers', href: '/careers' },
        { key: 'contact', label: t('navbar.contactUs') || 'Contact Us', href: '/contact-us' },
    ];

    return (
        <header suppressHydrationWarning className={`fixed top-0 left-0 right-0 z-[5000] border-b transition-all duration-300 ${isMenuOpen ? 'bg-white border-gray-200' : isScrolled ? 'bg-white border-gray-200 shadow-sm' : 'bg-white/95 border-gray-100'}`}>
            
            {!isMenuOpen && (
                <div suppressHydrationWarning className="w-full bg-[#1955A6] text-white min-h-[28px] py-1.5 sm:py-2 flex items-center justify-center overflow-hidden px-4 border-b border-[#1955A6]/10 relative">
                    <div className="relative flex items-center justify-center w-full">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={noticeIndex}
                                initial={{ y: 12, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -12, opacity: 0 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="flex items-center justify-center gap-1.5 sm:gap-2 font-semibold text-[10.5px] sm:text-[11px] md:text-[11.5px] lg:text-[12px] leading-snug tracking-wide text-center px-2 sm:px-6 md:px-12 max-w-7xl mx-auto"
                            >
                                {announcements[noticeIndex]}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            )}
            
            {/* Top Utility Bar - Hidden on Mobile */}
            <div className="hidden lg:flex w-full bg-brand-primary/5 border-b border-gray-100 h-10 items-center justify-between px-4 md:px-8">
                <div className="flex items-center gap-6 text-[13px] font-medium text-brand-gray-dark">
                    <a href="mailto:connect@techinvention.biz" className="flex items-center gap-2 hover:text-brand-primary transition-colors" dir="ltr">
                        <Mail size={14} />
                        connect@techinvention.biz
                    </a>
                    <a href="tel:+912240052123" className="flex items-center gap-2 hover:text-brand-primary transition-colors" dir="ltr">
                        <Phone size={14} />
                        +91 22 4005 2123
                    </a>
                </div>
                
                <div className="flex items-center gap-6">
                    {/* Search Bar in Top Bar */}
                    <div className="flex w-[240px] relative group items-center bg-white rounded-full px-3 py-1 shadow-sm border border-gray-100">
                        <button onClick={() => {
                            if (searchQuery.trim()) {
                                router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
                                setSearchQuery('');
                                setIsMenuOpen(false);
                            }
                        }}>
                            <Search size={16} className="text-brand-primary hover:text-brand-secondary transition-colors cursor-pointer" />
                        </button>
                        <input 
                            type="text" 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyDown={handleSearch}
                            placeholder={t('navbar.searchPlaceholder') || "Search TechInvention..."}
                            className="w-full bg-transparent border-none py-0.5 pl-2 pr-2 text-[12px] font-medium focus:outline-none focus:ring-0 text-black placeholder:text-gray-400"
                        />
                    </div>

                    {/* Language Switcher in Top Bar */}
                    <div className="relative">
                        <button 
                            onClick={() => setIsLangOpen(!isLangOpen)}
                            className="flex items-center gap-1.5 text-[13px] font-medium text-brand-gray-dark hover:text-brand-primary bg-white hover:bg-gray-50 border border-gray-200 px-3 py-1 rounded-full transition-all shadow-xs"
                            aria-label="Select Language"
                            suppressHydrationWarning
                        >
                            <Globe size={14} className="text-brand-primary" />
                            <span suppressHydrationWarning>{mounted ? (languages.find(l => l.code === language)?.nativeLabel || 'English') : 'English'}</span>
                            <ChevronDown size={13} className={`transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`} />
                        </button>

                        <AnimatePresence>
                            {isLangOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                                    transition={{ duration: 0.15 }}
                                    className="absolute right-0 rtl:right-auto rtl:left-0 mt-2 w-44 bg-white shadow-xl border border-gray-100 py-1.5 z-[6000] rounded-xl overflow-hidden"
                                >
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => {
                                                setLanguage(lang.code);
                                                setIsLangOpen(false);
                                            }}
                                            className={`w-full text-left rtl:text-right px-4 py-2 text-[13px] font-medium tracking-wide transition-colors flex items-center justify-between ${language === lang.code ? 'bg-brand-primary/10 text-brand-primary font-semibold' : 'text-gray-700 hover:bg-gray-50 hover:text-brand-primary'}`}
                                        >
                                            <span>{lang.nativeLabel}</span>
                                            <span className="text-[11px] text-gray-400 font-normal">({lang.label})</span>
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            <div className="max-w-[1440px] mx-auto w-full h-16 md:h-20 flex items-center justify-between px-4 md:px-6 lg:px-8 relative z-[5100]">
                {/* Logo */}
                <Link href="/" className="flex-shrink-0 z-10">
                    <img src={logoImg} alt="Brand Logo" className="h-9 sm:h-10 md:h-14 lg:h-16 w-auto object-contain" />
                </Link>

                <div className="flex items-center gap-3 lg:gap-6 2xl:gap-8 min-w-0">
                    {/* Main Navigation */}
                    <nav className="hidden xl:flex items-center">
                        <ul className="flex items-center gap-1.5 lg:gap-2.5 2xl:gap-5">
                            {mainNavItems.map((navItem) => {
                                const hasDropdown = megaMenusData[navItem.key] && (megaMenusData[navItem.key].sections || megaMenusData[navItem.key].simpleLinks);
                                
                                return (
                                <li 
                                    key={navItem.key}
                                    className="relative"
                                    onMouseEnter={() => hasDropdown && setActiveMegaMenu(navItem.key)}
                                    onMouseLeave={() => hasDropdown && setActiveMegaMenu(null)}
                                >
                                    {hasDropdown ? (
                                        <span className={`px-1 lg:px-2 py-2 text-[13px] 2xl:text-[14px] font-semibold tracking-wide transition-all relative flex items-center gap-1 whitespace-nowrap group/link cursor-pointer ${activeMegaMenu === navItem.key ? 'text-brand-primary' : 'text-black'}`}>
                                            <span className="relative block overflow-hidden">
                                                <span className={`block transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover/link:translate-y-[120%] ${activeMegaMenu === navItem.key ? 'text-brand-primary' : ''}`}>
                                                    {navItem.label}
                                                </span>
                                                <span className="absolute inset-0 block -translate-y-[120%] transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover/link:translate-y-0 text-brand-primary">
                                                    {navItem.label}
                                                </span>
                                            </span>
                                            <ChevronDown size={14} className={`transition-transform duration-300 group-hover/link:text-brand-primary ${activeMegaMenu === navItem.key ? 'rotate-180 text-brand-primary' : ''}`} />
                                            {activeMegaMenu === navItem.key && (
                                                <motion.div 
                                                    layoutId="activeNav"
                                                    className="absolute bottom-[-22px] left-2 right-2 h-[3px] bg-brand-primary rounded-t-full"
                                                />
                                            )}
                                        </span>
                                    ) : (
                                        <Link 
                                            href={navItem.href}
                                            className={`px-1 lg:px-2 py-2 text-[13px] 2xl:text-[14px] font-semibold tracking-wide transition-all relative flex items-center gap-1 whitespace-nowrap group/link ${pathname === navItem.href ? 'text-brand-primary' : 'text-black'}`}
                                        >
                                            <span className="relative block overflow-hidden">
                                                <span className={`block transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover/link:translate-y-[120%] ${pathname === navItem.href ? 'text-brand-primary' : ''}`}>
                                                    {navItem.label}
                                                </span>
                                                <span className="absolute inset-0 block -translate-y-[120%] transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover/link:translate-y-0 text-brand-primary">
                                                    {navItem.label}
                                                </span>
                                            </span>
                                            {pathname === navItem.href && (
                                                <motion.div 
                                                    layoutId="activeNav"
                                                    className="absolute bottom-[-22px] left-2 right-2 h-[3px] bg-brand-primary rounded-t-full"
                                                />
                                            )}
                                        </Link>
                                    )}

                                    {/* Mega Menu Flyout */}
                                    <AnimatePresence>
                                        {activeMegaMenu === navItem.key && hasDropdown && (
                                            megaMenusData[navItem.key].simpleLinks ? (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 10 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="absolute top-[56px] md:top-[64px] left-0 rtl:left-auto rtl:right-0 mt-2 bg-white shadow-2xl border border-gray-100 z-[6000] min-w-[220px] rounded-lg overflow-hidden"
                                                >
                                                    <div className="flex flex-col py-1">
                                                        {megaMenusData[navItem.key].simpleLinks.map((link: any, idx: number) => (
                                                            <Link
                                                                key={idx}
                                                                href={link.href}
                                                                className="px-6 py-3.5 text-[14px] font-medium text-slate-800 hover:text-brand-primary hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors whitespace-nowrap text-left rtl:text-right"
                                                            >
                                                                {link.name}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            ) : (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 10 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="fixed top-[120px] left-0 right-0 bg-white shadow-2xl border-t border-gray-100 z-[4900]"
                                                >
                                                    <div className="border-b border-gray-100 bg-gray-50/30">
                                                        <MegaMenuContent 
                                                            sections={megaMenusData[navItem.key].sections} 
                                                            featured={megaMenusData[navItem.key].featured}
                                                        />
                                                    </div>
                                                </motion.div>
                                            )
                                        )}
                                    </AnimatePresence>
                                </li>
                            )})}
                        </ul>
                    </nav>

                    {/* Mobile Language Switcher & Hamburger Toggle */}
                    <div suppressHydrationWarning className="flex items-center gap-2 sm:gap-3 xl:hidden">
                        {/* Mobile Language Toggle */}
                        <div suppressHydrationWarning className="relative">
                            <button 
                                onClick={() => setIsMobileLangOpen(!isMobileLangOpen)}
                                className="flex items-center gap-1.5 text-[12px] sm:text-[13px] font-semibold text-brand-gray-dark hover:text-brand-primary bg-gray-50 hover:bg-gray-100 border border-gray-200 px-2.5 sm:px-3 py-1.5 rounded-full transition-all shadow-xs"
                                aria-label="Select Language"
                                suppressHydrationWarning
                            >
                                <Globe size={15} className="text-brand-primary flex-shrink-0" />
                                <span className="truncate max-w-[70px] sm:max-w-none" suppressHydrationWarning>
                                    {mounted ? (languages.find(l => l.code === language)?.nativeLabel || 'English') : 'English'}
                                </span>
                                <ChevronDown size={13} className={`transition-transform duration-300 ${isMobileLangOpen ? 'rotate-180' : ''}`} />
                            </button>

                            <AnimatePresence>
                                {isMobileLangOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                                        transition={{ duration: 0.15 }}
                                        className="absolute right-0 rtl:right-auto rtl:left-0 mt-2 w-44 bg-white shadow-2xl border border-gray-100 py-1.5 z-[6000] rounded-xl overflow-hidden"
                                    >
                                        {languages.map((lang) => (
                                            <button
                                                key={lang.code}
                                                onClick={() => {
                                                    setLanguage(lang.code);
                                                    setIsMobileLangOpen(false);
                                                }}
                                                className={`w-full text-left rtl:text-right px-4 py-2.5 text-[13px] font-medium tracking-wide transition-colors flex items-center justify-between ${
                                                    language === lang.code 
                                                        ? 'bg-brand-primary/10 text-brand-primary font-semibold' 
                                                        : 'text-gray-700 hover:bg-gray-50 hover:text-brand-primary'
                                                }`}
                                            >
                                                <span>{lang.nativeLabel}</span>
                                                <span className="text-[11px] text-gray-400 font-normal">({lang.label})</span>
                                            </button>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Hamburger Button */}
                        <button 
                            className="p-2 rounded-lg hover:bg-gray-50 text-black flex items-center justify-center transition-colors" 
                            onClick={() => {
                                setIsMenuOpen(!isMenuOpen);
                                setIsMobileLangOpen(false);
                            }}
                            aria-label="Toggle Menu"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        className="fixed inset-x-0 bottom-0 top-[64px] md:top-[80px] z-[4800] xl:hidden bg-white overflow-y-auto overscroll-contain"
                    >
                        <div className="flex flex-col p-6 divide-y divide-gray-100 pb-32">
                            {/* Mobile Search Bar */}
                            <div className="py-4">
                                <div className="flex w-full relative items-center bg-gray-50 rounded-xl px-4 py-3 border border-gray-200 focus-within:border-brand-primary transition-colors">
                                    <button onClick={() => {
                                        if (searchQuery.trim()) {
                                            router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
                                            setSearchQuery('');
                                            setIsMenuOpen(false);
                                        }
                                    }}>
                                        <Search size={20} className="text-brand-primary hover:text-brand-secondary" />
                                    </button>
                                    <input 
                                        type="text" 
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        onKeyDown={handleSearch}
                                        placeholder="Search..."
                                        className="w-full bg-transparent border-none pl-3 text-base focus:outline-none text-black placeholder:text-gray-400"
                                    />
                                </div>
                            </div>
                            
                            {mainNavItems.map(navItem => {
                                const hasDropdown = megaMenusData[navItem.key] && (megaMenusData[navItem.key].sections || megaMenusData[navItem.key].simpleLinks);

                                return (
                                <div key={navItem.key} className="py-4">
                                    {hasDropdown ? (
                                        <button 
                                            onClick={() => toggleMobileMenu(navItem.key)}
                                            className="w-full flex items-center justify-between outline-none"
                                        >
                                            <span className="text-lg font-medium tracking-wide text-black">{navItem.label}</span>
                                            <ChevronDown size={16} className={`text-gray-400 transition-transform duration-300 ${openMobileMenus.includes(navItem.key) ? 'rotate-180' : ''}`} />
                                        </button>
                                    ) : (
                                        <Link 
                                            href={navItem.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="w-full flex items-center justify-between outline-none"
                                        >
                                            <span className="text-lg font-medium tracking-wide text-black">{navItem.label}</span>
                                        </Link>
                                    )}
                                    
                                    <AnimatePresence>
                                        {openMobileMenus.includes(navItem.key) && hasDropdown && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="mt-4 flex flex-col gap-3 pl-2 border-l border-gray-100">
                                                    {megaMenusData[navItem.key].simpleLinks ? (
                                                        megaMenusData[navItem.key].simpleLinks.map((link: any, lIdx: number) => (
                                                            <Link 
                                                                key={lIdx} 
                                                                href={link.href} 
                                                                className="block py-2 text-[14px] font-medium tracking-tight text-black hover:text-brand-primary"
                                                                onClick={() => setIsMenuOpen(false)}
                                                            >
                                                                {link.name}
                                                            </Link>
                                                        ))
                                                    ) : (
                                                        megaMenusData[navItem.key].sections.map((sec: any, sIdx: number) => (
                                                            <div key={sIdx}>
                                                                <span className="text-[13px] font-medium tracking-tight text-brand-primary tracking-widest uppercase">{sec.title}</span>
                                                                {sec.links.map((link: any, lIdx: number) => (
                                                                    <Link 
                                                                        key={lIdx} 
                                                                        href={link.href} 
                                                                        className="block py-2 text-[14px] font-medium tracking-tight text-black hover:text-brand-primary"
                                                                        onClick={() => setIsMenuOpen(false)}
                                                                    >
                                                                        {link.name}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        ))
                                                    )}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            )})}

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
