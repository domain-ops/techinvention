"use client";
import React, { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';

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
    if (path.startsWith('hero')) return { url: '/#hero', title: t.megaMenu?.aboutUs || 'TechInvention', category: t.navbar?.home || 'Home' };
    if (path.startsWith('about')) return { url: '/about', title: t.megaMenu?.aboutUs || 'About TechInvention', category: t.navbar?.about || 'About Us' };
    if (path.startsWith('homeStats')) return { url: '/#stats', title: t.common?.ourImpact || 'Our Impact', category: t.navbar?.home || 'Home' };
    if (path.startsWith('glanceVideo')) return { url: '/#glance', title: t.glanceVideo?.titlePrefix || 'At a Glance', category: t.navbar?.home || 'Home' };
    if (path.startsWith('oneHealth')) return { url: '/#one-health', title: t.megaMenu?.oneHealth || 'One Health', category: t.navbar?.home || 'Home' };
    if (path.startsWith('vaccinePipeline')) return { url: '/#vaccine-pipeline', title: t.megaMenu?.pipeline || 'Vaccine Pipeline', category: t.navbar?.home || 'Home' };
    if (path.startsWith('caseStudy') || path.startsWith('caseStudies')) return { url: '/#case-studies', title: t.megaMenu?.caseStudies || 'Case Studies', category: t.megaMenu?.knowledgeCenter || 'Knowledge Center' };
    if (path.startsWith('testimonials')) return { url: '/#testimonials', title: t.common?.testimonials || 'Testimonials', category: t.navbar?.company || 'Company' };
    if (path.startsWith('faq')) return { url: '/#faq', title: t.megaMenu?.faqs || 'FAQs', category: t.navbar?.support || 'Support' };
    if (path.startsWith('blogs')) return { url: '/#blogs', title: t.blogs?.titlePrefix ? `${t.blogs?.titlePrefix} ${t.blogs?.titleHighlight || ''}` : 'Latest Blogs & Insights', category: t.megaMenu?.newsMedia || 'News & Media' };
    
    // Subpages
    if (path.startsWith('cdmo')) return { url: '/cdmo', title: t.megaMenu?.cdmo || 'CDMO Services', category: t.navbar?.solutions || 'Services' };
    if (path.startsWith('horizon') || path.startsWith('rnd')) return { url: '/rnd', title: t.navbar?.rnd || 'Research & Development', category: t.common?.innovation || 'Innovation' };
    if (path.startsWith('strategicAdvisory') || path.startsWith('consulting')) return { url: '/consulting', title: t.megaMenu?.strategicAdvisory || 'Strategic Consulting', category: t.navbar?.solutions || 'Services' };
    if (path.startsWith('products') || path.startsWith('productsDocs')) return { url: '/products', title: t.navbar?.products || 'Our Products', category: t.navbar?.products || 'Products' };
    if (path.startsWith('careers')) return { url: '/careers', title: t.navbar?.careers || 'Careers', category: t.navbar?.company || 'Company' };
    if (path.startsWith('contact') || path.startsWith('contactDocs')) return { url: '/contact-us', title: t.navbar?.contactUs || 'Contact Us', category: t.navbar?.support || 'Support' };
    if (path.startsWith('membership')) return { url: '/membership', title: t.megaMenu?.memberships || 'Memberships', category: t.megaMenu?.credentials || 'Credentials' };
    if (path.startsWith('certifications')) return { url: '/certification', title: t.megaMenu?.certifications || 'Certifications', category: t.megaMenu?.credentials || 'Credentials' };
    if (path.startsWith('awards')) return { url: '/awards', title: t.navbar?.awardsCertifications || 'Awards', category: t.megaMenu?.credentials || 'Credentials' };

    // Default fallback
    return { url: '/', title: t.megaMenu?.knowledgeCenter || 'Related Content', category: t.navbar?.home || 'General' };
};


const SearchPage = () => {
    const searchParams = useSearchParams();
    const query = searchParams.get('q') || '';
    const { t, translationsData } = useLanguage();
    const transDict = translationsData || {};

    
    const results = useMemo(() => {
        if (!query.trim() || query.length < 2) return [];
        // Search through translated data structures directly
        const searchPool = {
            hero: transDict.hero,
            about: transDict.about,
            homeStats: transDict.homeStats,
            glanceVideo: transDict.glanceVideo,
            oneHealth: transDict.oneHealth,
            vaccinePipeline: transDict.vaccinePipeline,
            biotherapeuticsPipeline: transDict.biotherapeuticsPipeline,
            caseStudy: transDict.caseStudy,
            testimonials: transDict.testimonials,
            faq: transDict.faq,
            blogs: transDict.blogs,
            cdmo: transDict.cdmo,
            horizon: transDict.horizon,
            strategicAdvisory: transDict.strategicAdvisory,
            productsDocs: transDict.productsDocs,
            careers: transDict.careers,
            training: transDict.training,
            contactDocs: transDict.contactDocs,
            membership: transDict.membership,
            certifications: transDict.certifications,
            awards: transDict.awards
        };
        
        const rawResults = searchDeep(searchPool, query);
        // Map and deduplicate by URL (simplification for a cleaner experience)
        const mapped = rawResults.map(res => ({
            ...pathToRoute(res.path, transDict),
            snippet: res.text
        }));

        // Deduplicate
        const unique = mapped.filter((value, index, self) =>
            index === self.findIndex((u) => (
                u.url === value.url
            ))
        );

        return unique.slice(0, 10); // Limit to top 10
    }, [query, translationsData]);

    return (
        <div className="min-h-screen bg-brand-surface pt-32 pb-24 font-sans">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal>
                    <div className="mb-12">
                        <h1 className="text-[36px] font-medium tracking-tight text-brand-primary mb-4">
                            {t('navbar.searchPlaceholder') || 'Search Results'}
                        </h1>
                        <p className="text-gray-600 text-lg">
                            {query ? (
                                <>
                                    <span>{t('search.showingResults') || 'Showing results for'} </span>
                                    <span className="font-semibold text-gray-900">"{query}"</span>
                                </>
                            ) : (
                                (t('search.enterPrompt') || "Please enter a search term to find content.")
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
                                    <h3 className="text-2xl font-medium tracking-tight text-gray-900 mb-3">{t('search.noResults') || "No results found"}</h3>
                                    <p className="text-gray-500 max-w-sm mx-auto text-lg">
                                        {t('search.noResultsDesc') || "We couldn't find anything matching your search term. Try adjusting your search term for better results."}
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
