"use client";
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../../context/LanguageContext';

import ProductsHero from './sections/ProductsHero';
import ProductCategories from './sections/ProductCategories';
import CategoryFilter from './sections/CategoryFilter';
import DiagnosticProducts from './sections/DiagnosticProducts';
import VaccinePipeline from './sections/VaccinePipeline';
import LateralFlowAssays from './sections/LateralFlowAssays';
import MolecularDiagnosticKits from './sections/MolecularDiagnosticKits';
import VeterinaryDiagnostics from './sections/VeterinaryDiagnostics';
import ProductsCTA from './sections/ProductsCTA';

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
            <ProductCategories />
            <CategoryFilter />
            <DiagnosticProducts />
            <VaccinePipeline />
            <LateralFlowAssays />
            <MolecularDiagnosticKits />
            <VeterinaryDiagnostics />
            <ProductsCTA />
        </div>
    );
}
