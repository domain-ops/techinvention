"use client";
import React, { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../translations';
import ScrollReveal from '../../components/Common/ScrollReveal';

// Types and helper functions for searching translations
const searchDeep = (obj: any, query: string, path: string = ''): { text: string; path: string }[] => {
    let results: { text: string; path: string }[] = [];
    if (!obj) return results;

    const lowerQuery = query.toLowerCase();

    for (const key in obj) {
        const val = obj[key];
        const newPath = path ? `${path}.${key}` : key;
        
        if (typeof val === 'string') {
            if (val.toLowerCase().includes(lowerQuery)) {
                results.push({ text: val, path: newPath });
            }
        } else if (typeof val === 'object' && val !== null) {
            results = results.concat(searchDeep(val, query, newPath));
        }
    }
    return results;
};

// Map translation paths to URLs and titles
const pathToRoute = (path: string, t: any): { url: string; title: string, category: string } => {
    if (path.startsWith('hero')) return { url: '/#hero', title: 'Welcome to TechInvention', category: 'Home' };
    if (path.startsWith('about')) return { url: '/about', title: t.megaMenu?.aboutUs || 'About TechInvention', category: 'About Us' };
    if (path.startsWith('homeStats')) return { url: '/#stats', title: t.homeStats?.header?.title1 || 'Our Impact', category: 'Home' };
    if (path.startsWith('glanceVideo')) return { url: '/#glance', title: t.glanceVideo?.titlePrefix || 'At a Glance', category: 'Home' };
    if (path.startsWith('oneHealth')) return { url: '/#one-health', title: t.oneHealth?.titlePrefix || 'One Health', category: 'Home' };
    if (path.startsWith('vaccinePipeline')) return { url: '/#vaccine-pipeline', title: t.vaccinePipeline?.pipeline || 'Vaccine Pipeline', category: 'Home' };
    if (path.startsWith('caseStudy') || path.startsWith('caseStudies')) return { url: '/#case-studies', title: t.megaMenu?.caseStudies || 'Case Studies', category: 'Knowledge Center' };
    if (path.startsWith('testimonials')) return { url: '/#testimonials', title: t.common?.testimonials || 'Testimonials', category: 'Company' };
    if (path.startsWith('faq')) return { url: '/#faq', title: t.megaMenu?.faqs || 'FAQs', category: 'Support' };
    if (path.startsWith('blogs')) return { url: '/#blogs', title: 'Latest Blogs & Insights', category: 'News & Media' };
    
    // Manual routes added
    if (path.startsWith('cdmo')) return { url: '/cdmo', title: 'CDMO Services', category: 'Services' };
    if (path.startsWith('rnd')) return { url: '/rnd', title: 'Research & Development', category: 'Innovation' };
    if (path.startsWith('consulting')) return { url: '/consulting', title: 'Strategic Consulting', category: 'Services' };
    if (path.startsWith('products')) return { url: '/products', title: 'Our Products', category: 'Products' };
    if (path.startsWith('careers')) return { url: '/careers', title: 'Careers', category: 'Company' };
    if (path.startsWith('contact')) return { url: '/contact-us', title: 'Contact Us', category: 'Support' };

    // Default fallback
    return { url: '/', title: 'Related Content', category: 'General' };
};


const SearchPage = () => {
    const searchParams = useSearchParams();
    const query = searchParams.get('q') || '';
    const { language } = useLanguage();
    const t = translations[language];

    
    const results = useMemo(() => {
        if (!query.trim() || query.length < 2) return [];
        // Only search through specific high-value keys to avoid returning navbar items multiple times
        const searchPool = {
            hero: t.hero,
            about: t.about,
            homeStats: t.homeStats,
            glanceVideo: t.glanceVideo,
            oneHealth: t.oneHealth,
            vaccinePipeline: t.vaccinePipeline,
            caseStudy: t.caseStudy,
            testimonials: t.testimonials,
            faq: t.faq,
            blogs: t.blogs,
            cdmo: {
                title: "CDMO Services",
                desc: "Contract Manufacturing and Development Organization. Excellence in CDMO Services. State-of-the-art manufacturing facilities driving innovation from drug substance to finished product, adhering to global GMP standards.",
                drugProduct: "Drug Product Formulation & Filling Liquid Lyophilized Vials Pre-Filled Syringes PFS sterile fill-finish operations",
                qc: "QC Lab & Analytical Support In-Process Testing Release Testing Stability Studies",
                tech: "Technology Transfer Readiness Tech Pack Receipt Process Adaptation Engineering Runs GMP Manufacturing"
            },
            rnd: {
                title: "Research & Development",
                desc: "Pioneering the Future of Global Health. Leveraging cutting-edge science and our dedicated HORIZON innovation platform to develop accessible vaccines and rapid diagnostics for emerging markets.",
                vaccines: "Vaccine Innovation & Research Prophylactic Solutions for Emerging Markets Viral Vector & mRNA Platforms Accelerated Phase I/II Clinical Pipelines Global Regulatory Compliance",
                diagnostics: "Advanced Diagnostics Cutting-edge molecular and lateral flow diagnostic development programs. Point-of-Care Rapid Testing Kits",
                horizon: "HORIZON Our dedicated innovation and preclinical development platform. HORIZON accelerates the path from concept to clinical trials, providing state-of-the-art infrastructure for biotherapeutic research."
            },
            consulting: {
                title: "Strategic Technical Advisory & Consulting",
                desc: "We offer our expertise and support in capacity building to enable local manufacturing of biologics and vaccines in low- and middle-income countries. Project Feasibility Project Planning Technology Tie-up Design Engineering QMS WHO-PQ Support"
            },
            products: {
                title: "Products",
                desc: "Vaccines Biotherapeutics Molecular Diagnostics Rapid Test Kits Human Vaccines Animal Vaccines"
            },
            careers: {
                title: "Careers",
                desc: "Join our team. Open positions. Work with us to advance global health equity."
            },
            contact: {
                title: "Contact Us",
                desc: "Reach out to our global team to discuss partnerships, innovations, or how Bio-Sync can support your health security goals."
            }
        };
        
        const rawResults = searchDeep(searchPool, query);
        // Map and deduplicate by URL (simplification for a cleaner experience)
        const mapped = rawResults.map(res => ({
            ...pathToRoute(res.path, t),
            snippet: res.text
        }));

        // Deduplicate
        const unique = mapped.filter((value, index, self) =>
            index === self.findIndex((u) => (
                u.url === value.url
            ))
        );

        return unique.slice(0, 10); // Limit to top 10
    }, [query, t]);

    return (
        <div className="min-h-screen bg-brand-surface pt-32 pb-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal>
                    <div className="mb-12">
                        <h1 className="text-[36px] font-medium tracking-tight text-brand-primary mb-4">
                            {t.navbar?.searchPlaceholder || 'Search Results'}
                        </h1>
                        <p className="text-gray-600 text-lg">
                            {query ? (
                                <>Showing results for <span className="font-semibold text-gray-900">"{query}"</span></>
                            ) : (
                                "Please enter a search term to find content."
                            )}
                        </p>
                    </div>

                    {query && (
                        <div className="space-y-6 flex flex-col">
                            {results.length > 0 ? (
                                results.map((result, idx) => (
                                    <Link 
                                        key={idx} 
                                        href={result.url}
                                        className="bg-white rounded-none p-6 md:p-8 shadow-[0_5px_20px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-[0_15px_40px_rgba(25,85,166,0.08)] hover:border-brand-primary/20 transition-all duration-500 ease-out group block"
                                    >
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="text-[10px] font-bold tracking-widest uppercase bg-brand-primary/5 text-brand-primary px-3 py-1 rounded-full">
                                                {result.category}
                                            </span>
                                        </div>
                                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-primary transition-colors duration-300">
                                            {result.title}
                                        </h2>
                                        <p className="text-[18px] text-gray-600 line-clamp-2 leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                                            ...{result.snippet}...
                                        </p>
                                    </Link>
                                ))
                            ) : (
                                <div className="bg-white rounded-none p-12 text-center border border-slate-100 shadow-[0_5px_20px_rgba(0,0,0,0.03)]">
                                    <div className="w-20 h-20 bg-brand-primary/5 rounded-full flex flex-col items-center justify-center mx-auto mb-6 text-brand-primary overflow-hidden relative">
                                        <div className="absolute inset-0 bg-brand-primary/10 animate-ping opacity-20 hidden group-hover:block" />
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                                    </div>
                                    <h3 className="text-2xl font-medium tracking-tight text-gray-900 mb-3">No results found</h3>
                                    <p className="text-gray-500 max-w-sm mx-auto text-lg">
                                        We couldn't find anything matching <span className="text-gray-900 font-medium">"{query}"</span>. Try adjusting your search term for better results.
                                    </p>
                                </div>
                            )}
                        </div>
                    )}
                </ScrollReveal>
            </div>
        </div>
    );
};

export default SearchPage;
