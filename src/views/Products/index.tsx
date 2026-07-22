"use client";
import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../../context/LanguageContext';
import ProductsHero from './sections/ProductsHero';

// Dynamically import below the fold components
const ProductDetails = dynamic(() => import('./sections/ProductDetails'));
const AdverseEventReporting = dynamic(() => import('./sections/AdverseEventReporting'));
const ProductsCTA = dynamic(() => import('./sections/ProductsCTA'));

gsap.registerPlugin(ScrollTrigger);


export default function ProductsPage() {
    const { t } = useLanguage();


    useEffect(() => {
        window.scrollTo(0, 0);

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <div className="min-h-screen bg-brand-background text-brand-content overflow-hidden">
            <ProductsHero />
            <ProductDetails />
            <AdverseEventReporting />
            <ProductsCTA />
        </div>
    );
}
