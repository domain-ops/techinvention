import React from 'react';
import ScrollReveal from '../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../components/Common/SplitTitle';
import { Globe, CheckCircle2, Users2 } from 'lucide-react';

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
        pack: "Vial and WFI",
        therapeuticUse: "Active immunization against infection caused by varicella in individuals aged 1 year (12 months) to 12 years."
    },
    {
        id: 3,
        name: "Inactivated Hepatitis A Vaccine (Adsorbed) I.P.",
        compositionLines: [
            "Each single dose of 0.5 mL contains:",
            "• Inactivated HAV antigen (TZ84 strain)¹ — 250 U",
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
    return (
        <div className="rounded-sm overflow-hidden bg-white shadow-lg border border-slate-200 font-sans flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
            {/* Header Area */}
            <div className="w-full flex items-stretch text-left border-b border-[#1c52a0]/20 min-h-[110px] md:min-h-[120px]">
                {/* ID Box */}
                <div className="w-16 bg-[#1c52a0] text-white flex items-center justify-center font-bold text-xl flex-shrink-0">
                    {product.id}
                </div>
                
                {/* Header Title Box */}
                <div className="flex-1 bg-[#f4f7f9] border-l border-slate-200 border-l-[#1c52a0] p-4 flex flex-col justify-center">
                    <div className="text-[#13325B] font-bold text-[16px] md:text-[18px] mb-1">
                        Product Name: {product.name}
                    </div>
                    {product.description && (
                        <div className="text-[#13325B] font-medium text-[13px] md:text-[14px]">
                            {product.description}
                        </div>
                    )}
                </div>
            </div>

            {/* Table Area (Always Visible) */}
            <div className="w-full flex-grow flex flex-col">
                <table className="w-full border-collapse h-full">
                    <tbody className="flex flex-col h-full">
                        {/* Composition Row */}
                        <tr className="border-b border-[#1c52a0]/20 flex flex-1">
                            <td className="w-1/3 border-r border-[#1c52a0]/20 p-4 text-center align-middle bg-white font-bold text-[#13325B] text-[13px] md:text-[14px]">
                                Label Composition
                            </td>
                            <td className="w-2/3 p-4 bg-white text-[#13325B] font-medium leading-relaxed text-[13px] md:text-[14px]">
                                <div className="text-left">
                                    {product.compositionLines.map((line, idx) => {
                                        const isHeader = line.includes("contains:") || line.includes("antigens:");
                                        return (
                                            <div key={idx} className={`${isHeader ? 'font-bold mb-1 mt-2' : ''} ${idx === 0 ? 'mt-0' : ''}`}>
                                                {line}
                                            </div>
                                        );
                                    })}
                                </div>
                            </td>
                        </tr>
                        
                        {/* Pack Row */}
                        <tr className="border-b border-[#1c52a0]/20 flex">
                            <td className="w-1/3 border-r border-[#1c52a0]/20 p-4 text-center align-middle bg-white font-bold text-[#13325B] text-[13px] md:text-[14px]">
                                Pack
                            </td>
                            <td className="w-2/3 p-4 text-center align-middle bg-white text-[#13325B] font-bold text-[13px] md:text-[14px]">
                                {product.pack}
                            </td>
                        </tr>
                        
                        {/* Therapeutic Use Row */}
                        <tr className="flex flex-1">
                            <td className="w-1/3 border-r border-[#1c52a0]/20 p-4 text-center align-middle bg-white font-bold text-[#13325B] text-[13px] md:text-[14px]">
                                Therapeutic Use
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
    return (
        <section className="py-24 bg-slate-50 relative font-sans" id="product-details">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                


                <div className="text-center mb-12">
                    <ScrollReveal direction="up">
                        <h2 className="text-[22px] md:text-[32px] font-bold tracking-wide leading-tight mb-2">
                            <SplitTitle title="Product Details" />
                        </h2>
                    </ScrollReveal>
                </div>

                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
                    {PRODUCTS.map((product) => (
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
                            <h3 className="font-bold text-[#1955A6] text-[19px] mb-3">Access-Oriented</h3>
                            <p className="text-slate-600 text-[14px] leading-relaxed font-medium">
                                Built to support availability of essential vaccines across priority markets.
                            </p>
                        </div>
                    </ScrollReveal>
                    
                    <ScrollReveal direction="up" delay={0.2}>
                        <div className="group text-center bg-gradient-to-b from-[#7EAB43]/[0.02] to-[#7EAB43]/[0.06] hover:from-[#7EAB43]/[0.05] hover:to-[#7EAB43]/[0.12] p-8 lg:p-10 rounded-2xl border border-[#7EAB43]/10 hover:border-[#7EAB43]/30 h-full flex flex-col items-center justify-start hover:shadow-lg transition-all duration-300">
                            <div className="w-14 h-14 bg-[#7EAB43]/10 rounded-full flex items-center justify-center mb-6 text-[#7EAB43] transition-transform duration-500 group-hover:scale-110 group-hover:bg-[#7EAB43]/20">
                                <CheckCircle2 className="w-7 h-7 transition-transform duration-500 group-hover:scale-115 group-hover:rotate-12" />
                            </div>
                            <h3 className="font-bold text-[#7EAB43] text-[19px] mb-3">Market-Ready</h3>
                            <p className="text-slate-600 text-[14px] leading-relaxed font-medium">
                                Focused on regulated, market-authorized vaccine candidates.
                            </p>
                        </div>
                    </ScrollReveal>
                    
                    <ScrollReveal direction="up" delay={0.3}>
                        <div className="group text-center bg-gradient-to-b from-[#1955A6]/[0.02] to-[#1955A6]/[0.06] hover:from-[#1955A6]/[0.05] hover:to-[#1955A6]/[0.12] p-8 lg:p-10 rounded-2xl border border-[#1955A6]/10 hover:border-[#1955A6]/30 h-full flex flex-col items-center justify-start hover:shadow-lg transition-all duration-300">
                            <div className="w-14 h-14 bg-[#1955A6]/10 rounded-full flex items-center justify-center mb-6 text-[#1955A6] transition-transform duration-500 group-hover:scale-110 group-hover:bg-[#1955A6]/20">
                                <Users2 className="w-7 h-7 transition-transform duration-500 group-hover:scale-115 group-hover:rotate-12" />
                            </div>
                            <h3 className="font-bold text-[#1955A6] text-[19px] mb-3">Partnership-Led</h3>
                            <p className="text-slate-600 text-[14px] leading-relaxed font-medium">
                                Designed for institutional, commercial and public health collaborations.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
