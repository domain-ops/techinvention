import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../../assets/images/brand_logo.png';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useLanguage, Language } from '../../context/LanguageContext';
import { Globe, ChevronDown, Menu, X, Search, Phone, Mail } from 'lucide-react';
import MegaMenuContent from './MegaMenuContent';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const { language, setLanguage, t } = useLanguage();
    const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
    const [openMobileMenus, setOpenMobileMenus] = useState<string[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const router = useRouter();
    const pathname = usePathname();

    const announcements = [
        "🏆 India Vaccine Leaders Conclave 2025: Recognized for vaccine innovation and biotech scaling.",
        "🏆 Fortune Leadership Awards 2024: Awarded for exceptional organizational performance.",
        "🏆 Exemplars of Excellence 2024: Celebrating scientific innovation in biopharma.",
        "🏆 Forbes India Spotlight 2024: Ranked among high-potential global business models."
    ];
    const [noticeIndex, setNoticeIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setNoticeIndex((prev) => (prev + 1) % announcements.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setActiveMegaMenu(null);
        setIsMenuOpen(false);
    }, [pathname]);

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

    const languages: { code: Language; label: string }[] = [
        { code: 'en', label: 'English' },
        { code: 'hi', label: 'Hindi' },
        { code: 'ar', label: 'Arabic' },
        { code: 'es', label: 'Spanish' },
        { code: 'fr', label: 'French' },
    ];

    const megaMenusData: Record<string, any> = {};

    const mainNavItems = [
        { key: 'home', label: 'Home', href: '/' },
        { key: 'company', label: 'Company', href: '/about' },
        { key: 'rnd', label: 'R&D', href: '/rnd' },
        { key: 'cdmo', label: 'Manufacturing', href: '/cdmo' },
        { key: 'consulting', label: 'Consulting', href: '/consulting' },
        { key: 'products', label: 'Products', href: '/products' },
        { key: 'careers', label: 'Career', href: '/careers' },
        { key: 'gmp', label: 'Training', href: '/gmp-training' },
        { key: 'contact', label: 'Contact Us', href: '/contact-us' },
    ];
    return (
        <header className={`fixed top-0 left-0 right-0 z-[5000] border-b transition-all duration-300 ${isScrolled ? 'bg-white border-gray-200 shadow-sm' : 'bg-white/95 border-gray-100'}`}>
            
            {/* Top Announcement Loop Notice Bar */}
            <div className="w-full bg-[#1955A6] text-white h-9 flex items-center justify-center overflow-hidden px-4 border-b border-[#1955A6]/10 relative">
                <div className="relative flex items-center justify-center h-full w-full">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={noticeIndex}
                            initial={{ y: 15, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -15, opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="absolute flex items-center gap-2 font-semibold text-[11px] sm:text-xs tracking-wide text-center"
                        >
                            {announcements[noticeIndex]}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
            
            {/* Top Utility Bar - Hidden on Mobile */}
            <div className="hidden lg:flex w-full bg-brand-primary/5 border-b border-gray-100 h-10 items-center justify-between px-4 md:px-8">
                <div className="flex items-center gap-6 text-[13px] font-medium text-brand-gray-dark">
                    <a href="mailto:connect@techinvention.biz" className="flex items-center gap-2 hover:text-brand-primary transition-colors">
                        <Mail size={14} />
                        connect@techinvention.biz
                    </a>
                    <a href="tel:+912240052123" className="flex items-center gap-2 hover:text-brand-primary transition-colors">
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
                    <div className="relative hidden">
                        <button 
                            onClick={() => setIsLangOpen(!isLangOpen)}
                            className="flex items-center gap-1.5 text-[13px] font-medium text-brand-gray-dark hover:text-brand-primary transition-colors"
                        >
                            <Globe size={14} className="text-brand-primary" />
                            <span>{language === 'en' ? 'English' : language === 'hi' ? 'Hindi' : language === 'ar' ? 'Arabic' : language === 'es' ? 'Spanish' : 'French'}</span>
                            <ChevronDown size={14} className={`transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`} />
                        </button>

                        <AnimatePresence>
                            {isLangOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="absolute right-0 rtl:right-auto rtl:left-0 mt-3 w-40 bg-white shadow-xl border border-gray-100 py-2 z-[6000] rounded-xl overflow-hidden"
                                >
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => {
                                                setLanguage(lang.code);
                                                setIsLangOpen(false);
                                            }}
                                            className={`w-full text-left px-5 py-2.5 text-[13px] font-medium tracking-wide transition-colors ${language === lang.code ? 'bg-brand-primary/10 text-brand-primary' : 'text-black hover:bg-gray-50 hover:text-brand-primary'}`}
                                        >
                                            {lang.label}
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            <div className="max-w-[1440px] mx-auto w-full h-16 md:h-20 flex items-center justify-between px-4 md:px-8">
                {/* Logo */}
                <Link href="/" className="flex-shrink-0">
                    <img src={logoImg} alt="Brand Logo" className="h-10 md:h-16 w-auto" />
                </Link>

                <div className="flex items-center gap-8">
                    {/* Main Navigation - Now with larger font since we have more space! */}
                    <nav className="hidden xl:flex items-center ml-auto">
                        <ul className="flex items-center gap-3 2xl:gap-6">
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
                                        <Link href={navItem.href} className={`px-1 lg:px-2 py-2 text-[13px] 2xl:text-[14px] font-semibold tracking-wide transition-all relative flex items-center gap-1 whitespace-nowrap group/link ${activeMegaMenu === navItem.key ? 'text-brand-primary' : 'text-black'}`}>
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
                                        </Link>
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
                                                    className="absolute top-[60px] left-0 mt-2 bg-white shadow-lg border border-gray-100 z-[4900] min-w-[220px]"
                                                >
                                                    <div className="flex flex-col">
                                                        {megaMenusData[navItem.key].simpleLinks.map((link: any, idx: number) => (
                                                            <Link
                                                                key={idx}
                                                                href={link.href}
                                                                className="px-6 py-4 text-[15px] font-medium text-black hover:text-brand-primary hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors"
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

                    {/* Mobile Toggle & Search (Visible on small screens where top bar is hidden) */}
                    <div className="flex items-center gap-4 xl:hidden">
                        <button className="p-2 rounded-lg hover:bg-gray-50 text-black" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
                        className="fixed inset-0 top-[64px] md:top-[80px] z-[4800] xl:hidden bg-white overflow-y-auto"
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
