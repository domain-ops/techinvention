import React from 'react';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';
import { Globe, CheckCircle2, Users2 } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';

interface ProductData {
    id: number;
    name: string;
    description?: string;
    compositionLines: string[];
    pack: string;
    therapeuticUse: string;
}

const PRODUCTS: ProductData[] = [
    {
        id: 1,
        name: "TdaPgen",
        description: "Combined Tetanus Toxoid, Reduced Diphtheria Toxoid and Reduced Recombinant Pertussis Vaccine",
        compositionLines: [
            "Each single dose of 0.5 mL contains:",
            "• Tetanus Toxoid — 7.5 Lf",
            "• Diphtheria Toxoid — 2.0 Lf",
            "• Bordetella pertussis antigens:",
            "• Recombinant Pertussis Toxin (rPT) — 2 µg",
            "• Filamentous Haemagglutinin (FHA) — 5 µg"
        ],
        pack: "0.5 mL Prefilled Syringe",
        therapeuticUse: "Active booster immunization against diphtheria, tetanus and pertussis in individuals aged 4 to 65 years."
    },
    {
        id: 2,
        name: "Varicella Vaccine, Live Attenuated",
        compositionLines: [
            "Each single dose of 0.5 mL contains:",
            "• Live Attenuated Varicella-Herpes Zoster Virus (Oka strain) — 3.3 to 4.5 lg PFU/0.5 mL per dose",
            "• Produced in human diploid (SV-1) cells",
            "• International standard virus strain purchased from ATCC",
            "• Virus titer tested using an in-house reference"
        ],
        pack: "Vial with diluent",
        therapeuticUse: "Active immunization against varicella in individuals aged 12 months and older."
    },
    {
        id: 3,
        name: "Hepatitis A Vaccine (Human Diploid Cell), Inactivated",
        compositionLines: [
            "Each single dose of 0.5 mL contains:",
            "• Inactivated Hepatitis A Virus antigen (HM175 Strain)¹ — ≥ 250 U",
            "• Aluminium, as Aluminium Hydroxide — 0.175 to 0.31 mg",
            "• Disodium Hydrogen Phosphate — q.s.",
            "• Sodium Chloride — 4.5 mg",
            "• Sodium Dihydrogen Phosphate — q.s.",
            "• Water for Injection — q.s. to 0.5 mL",
            "• ¹ Produced in Human Diploid Cells"
        ],
        pack: "Vial / Prefilled Syringe",
        therapeuticUse: "Active immunization against infection caused by Hepatitis A virus."
    },
    {
        id: 4,
        name: "Trivalent Influenza Vaccine",
        compositionLines: [
            "Each single dose of 0.5 mL contains:",
            "• Each 0.5 mL dose contains 15 µg haemagglutinin (HA) of each influenza virus strain selected in accordance with the annual recommendations of the World Health Organization (WHO) for the applicable Northern or Southern Hemisphere influenza season."
        ],
        pack: "Prefilled Syringe",
        therapeuticUse: "Active immunization of adults aged 18 years and older for prevention of influenza disease."
    }
];

const ProductCard = ({ product }: { product: ProductData }) => {
    const { t } = useLanguage();

    return (
        <div className="w-full flex flex-col bg-white border border-[#1c52a0]/30 shadow-md rounded-none overflow-hidden text-[#13325B] h-full">
            {/* Header / Product Name Banner */}
            <div className="bg-gradient-to-r from-[#1755A6] to-[#1c52a0] text-white py-4 px-6 text-center shadow-sm">
                <h3 className="text-xl md:text-2xl font-bold tracking-wide">{product.name}</h3>
                {product.description && (
                    <p className="text-xs md:text-sm text-white/90 font-medium mt-1 leading-snug">{product.description}</p>
                )}
            </div>

            {/* Table Details */}
            <div className="w-full flex-1 flex flex-col">
                <table className="w-full h-full text-left border-collapse flex flex-col">
                    <tbody className="flex flex-col flex-1 divide-y divide-[#1c52a0]/20">
                        {/* Composition Row */}
                        <tr className="flex flex-1">
                            <td className="w-1/3 border-r border-[#1c52a0]/20 p-4 text-center align-middle bg-slate-50 font-bold text-[#13325B] text-[13px] md:text-[14px]">
                                {t('products.composition') || "Composition"}
                            </td>
                            <td className="w-2/3 p-4 text-left align-middle bg-white text-[#13325B] font-medium leading-relaxed text-[13px] md:text-[14px]">
                                <ul className="space-y-1">
                                    {product.compositionLines.map((line, idx) => (
                                        <li key={idx}>{line}</li>
                                    ))}
                                </ul>
                            </td>
                        </tr>
                        
                        {/* Pack Row */}
                        <tr className="flex">
                            <td className="w-1/3 border-r border-[#1c52a0]/20 p-4 text-center align-middle bg-slate-50 font-bold text-[#13325B] text-[13px] md:text-[14px]">
                                {t('products.presentation') || "Presentation / Pack"}
                            </td>
                            <td className="w-2/3 p-4 text-left align-middle bg-white text-[#13325B] font-medium leading-relaxed text-[13px] md:text-[14px]">
                                {product.pack}
                            </td>
                        </tr>
                        
                        {/* Therapeutic Use Row */}
                        <tr className="flex flex-1">
                            <td className="w-1/3 border-r border-[#1c52a0]/20 p-4 text-center align-middle bg-white font-bold text-[#13325B] text-[13px] md:text-[14px]">
                                {t('products.therapeuticUse') || "Therapeutic Use"}
                            </td>
                            <td className="w-2/3 p-4 text-left align-middle bg-white text-[#13325B] font-medium leading-relaxed text-[13px] md:text-[14px]">
                                {product.therapeuticUse}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default function ProductDetails() {
    const { t } = useLanguage();

    const transVaccines = t('productsDocs.vaccines') as any[];
    const products = Array.isArray(transVaccines) && transVaccines.length > 0 ? transVaccines.map((v, i) => ({
        id: i + 1,
        name: v.name || PRODUCTS[i]?.name || "",
        description: v.subtitle || PRODUCTS[i]?.description,
        compositionLines: Array.isArray(v.composition) ? v.composition : (PRODUCTS[i]?.compositionLines || []),
        pack: v.pack || PRODUCTS[i]?.pack || "",
        therapeuticUse: v.use || PRODUCTS[i]?.therapeuticUse || ""
    })) : PRODUCTS;

    const transBadges = t('productsDocs.badges') as any[];

    return (
        <section className="py-24 bg-slate-50 relative font-sans" id="product-details">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <ScrollReveal direction="up">
                        <h2 className="text-[22px] md:text-[32px] font-bold tracking-wide leading-tight mb-2">
                            <SplitTitle title={t('megaMenu.products') || "Product Details"} />
                        </h2>
                    </ScrollReveal>
                </div>

                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
                    {products.map((product) => (
                        <ProductCard 
                            key={product.id} 
                            product={product} 
                        />
                    ))}
                </div>

                {/* Feature Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 max-w-5xl mx-auto">
                    <ScrollReveal direction="up" delay={0.1}>
                        <div className="group text-center bg-gradient-to-b from-[#1955A6]/[0.02] to-[#1955A6]/[0.06] hover:from-[#1955A6]/[0.05] hover:to-[#1955A6]/[0.12] p-8 lg:p-10 rounded-2xl border border-[#1955A6]/10 hover:border-[#1955A6]/30 h-full flex flex-col items-center justify-start hover:shadow-lg transition-all duration-300">
                            <div className="w-14 h-14 bg-[#1955A6]/10 rounded-full flex items-center justify-center mb-6 text-[#1955A6] transition-transform duration-500 group-hover:scale-110 group-hover:bg-[#1955A6]/20">
                                <Globe className="w-7 h-7 transition-transform duration-500 group-hover:scale-115 group-hover:rotate-12" />
                            </div>
                            <h3 className="font-bold text-[#1955A6] text-[19px] mb-3">{transBadges?.[0]?.title || t('products.accessOriented') || "Access-Oriented"}</h3>
                            <p className="text-slate-600 text-[14px] leading-relaxed font-medium">
                                {transBadges?.[0]?.desc || t('products.accessOrientedDesc') || "Built to support availability of essential vaccines across priority markets."}
                            </p>
                        </div>
                    </ScrollReveal>
                    
                    <ScrollReveal direction="up" delay={0.2}>
                        <div className="group text-center bg-gradient-to-b from-[#7EAB43]/[0.02] to-[#7EAB43]/[0.06] hover:from-[#7EAB43]/[0.05] hover:to-[#7EAB43]/[0.12] p-8 lg:p-10 rounded-2xl border border-[#7EAB43]/10 hover:border-[#7EAB43]/30 h-full flex flex-col items-center justify-start hover:shadow-lg transition-all duration-300">
                            <div className="w-14 h-14 bg-[#7EAB43]/10 rounded-full flex items-center justify-center mb-6 text-[#7EAB43] transition-transform duration-500 group-hover:scale-110 group-hover:bg-[#7EAB43]/20">
                                <CheckCircle2 className="w-7 h-7 transition-transform duration-500 group-hover:scale-115 group-hover:rotate-12" />
                            </div>
                            <h3 className="font-bold text-[#7EAB43] text-[19px] mb-3">{transBadges?.[1]?.title || t('products.marketReady') || "Market-Ready"}</h3>
                            <p className="text-slate-600 text-[14px] leading-relaxed font-medium">
                                {transBadges?.[1]?.desc || t('products.marketReadyDesc') || "Focused on regulated, market-authorized vaccine candidates."}
                            </p>
                        </div>
                    </ScrollReveal>
                    
                    <ScrollReveal direction="up" delay={0.3}>
                        <div className="group text-center bg-gradient-to-b from-[#1955A6]/[0.02] to-[#1955A6]/[0.06] hover:from-[#1955A6]/[0.05] hover:to-[#1955A6]/[0.12] p-8 lg:p-10 rounded-2xl border border-[#1955A6]/10 hover:border-[#1955A6]/30 h-full flex flex-col items-center justify-start hover:shadow-lg transition-all duration-300">
                            <div className="w-14 h-14 bg-[#1955A6]/10 rounded-full flex items-center justify-center mb-6 text-[#1955A6] transition-transform duration-500 group-hover:scale-110 group-hover:bg-[#1955A6]/20">
                                <Users2 className="w-7 h-7 transition-transform duration-500 group-hover:scale-115 group-hover:rotate-12" />
                            </div>
                            <h3 className="font-bold text-[#1955A6] text-[19px] mb-3">{transBadges?.[2]?.title || t('products.partnershipLed') || "Partnership-Led"}</h3>
                            <p className="text-slate-600 text-[14px] leading-relaxed font-medium">
                                {transBadges?.[2]?.desc || t('products.partnershipLedDesc') || "Designed for institutional, commercial and public health collaborations."}
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
