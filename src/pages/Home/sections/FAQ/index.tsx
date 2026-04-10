import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useLanguage } from '../../../../context/LanguageContext';
import ScrollReveal from '../../../../components/Common/ScrollReveal';
import { SplitTitle } from '../../../../components/Common/SplitTitle';
import { cn } from '../../../../lib/utils';


const logoDNA = "/techinvention/TechInvention-gif.gif";

interface FAQItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className={cn(
            "group border-b border-brand-primary/10 last:border-0 transition-all duration-500",
            isOpen ? "bg-brand-primary/[0.02]" : "hover:bg-brand-primary/[0.01]"
        )}>
            <button
                onClick={onClick}
                className="w-full py-6 md:py-8 flex items-center justify-between text-left gap-4"
            >
                <div className="flex items-start gap-4 flex-1">
                    <span className={cn(
                        "mt-1 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg border transition-all duration-300",
                        isOpen
                            ? "bg-brand-primary border-brand-primary text-white"
                            : "bg-white border-brand-primary/20 text-brand-primary group-hover:border-brand-primary/40"
                    )}>
                        <HelpCircle size={16} />
                    </span>
                    <h3 className={cn(
                        "text-base md:text-lg font-medium tracking-tight transition-colors duration-300 tracking-tight leading-tight",
                        isOpen ? "text-brand-primary" : "text-brand-content group-hover:text-brand-primary/80"
                    )}>
                        {question}
                    </h3>
                </div>
                <div className={cn(
                    "flex-shrink-0 transition-transform duration-500 bg-slate-50 w-8 h-8 rounded-full flex items-center justify-center border border-black/5",
                    isOpen ? "rotate-180 bg-brand-primary/10 border-brand-primary/20" : ""
                )}>
                    <ChevronDown size={18} className={cn(
                        "transition-colors duration-300",
                        isOpen ? "text-brand-primary" : "text-black"
                    )} />
                </div>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                        <div className="pb-8 pl-12 pr-6 md:pr-12">
                            <p className="text-black text-base md:text-base leading-relaxed font-medium tracking-tight">
                                {answer}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQSection = () => {
    const { t } = useLanguage();
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqData = t('faq') as { tag: string; title: string; subtitle: string; items: { question: string; answer: string }[] };

    if (!faqData || !faqData.items) return null;

    return (
        <section id="faq" className="py-16 md:py-20 w-full flex justify-center items-center px-4 md:px-6 bg-white relative">

            <div className="w-full max-w-5xl z-10 relative">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16 md:mb-20">
                    <div className="text-center md:text-left">
                        <ScrollReveal direction="up">
                            <span className="text-brand-primary text-[11px] font-medium tracking-[0.4em] uppercase mb-4 block">
                                {faqData.tag || "FAQ"}
                            </span>
                        </ScrollReveal>
                        <ScrollReveal direction="up" delay={0.1}>
                            <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-medium tracking-wide mb-6">
                                <SplitTitle title={faqData.title} />
                            </h2>
                        </ScrollReveal>
                        <ScrollReveal direction="up" delay={0.2}>
                            <p className="text-brand-content text-base md:text-lg lg:text-[1.35rem] max-w-3xl mx-auto md:mx-0 leading-relaxed tracking-tight">
                                {faqData.subtitle}
                            </p>
                        </ScrollReveal>
                    </div>
                    {/* Animated Inline Logo aligned with title */}
                    <div className="hidden md:flex flex-shrink-0 justify-end w-28 sm:w-32 lg:w-44 mr-8 lg:mr-16">
                        <motion.img 
                            src={logoDNA}
                            alt="TechInvention Logo"
                            className="w-full h-auto object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.1)] mix-blend-multiply"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ 
                                opacity: { duration: 1.2, ease: "easeOut" },
                                scale: { duration: 1.2, ease: "easeOut" }
                            }}
                        />
                    </div>
                </div>

                {/* FAQ List */}
                <ScrollReveal direction="up" delay={0.3}>
                    <div className="relative">
                        <div className="border-t border-brand-primary/10">
                            {faqData.items.map((item, index) => (
                                <FAQItem
                                    key={index}
                                    question={item.question}
                                    answer={item.answer}
                                    isOpen={openIndex === index}
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                />
                            ))}
                        </div>
                    </div>
                </ScrollReveal>

                {/* Visual Accent */}
                <div className="mt-16 flex justify-center">
                    <div className="h-px w-24 bg-brand-primary/10" />
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
