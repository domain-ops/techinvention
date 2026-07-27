import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowLeft, Mail, Home } from 'lucide-react';
import Link from 'next/link';

export default function ThankYouView() {
    return (
        <section className="min-h-[85vh] flex items-center justify-center bg-slate-50/50 py-24 font-sans relative overflow-hidden">
            {/* Ambient Background Orbs */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#5C7625]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-[700px] mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-white border border-slate-200/80 rounded-3xl p-10 md:p-16 shadow-xl"
                >
                    {/* Animated Success Badge */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                        className="w-20 h-20 rounded-full bg-[#5C7625]/10 text-[#5C7625] flex items-center justify-center mx-auto mb-8 shadow-sm"
                    >
                        <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
                    </motion.div>

                    {/* Heading */}
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight leading-tight">
                        Thank You!
                    </h1>

                    {/* Message */}
                    <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-md mx-auto font-medium mb-8">
                        Your submission has been received successfully. Our team will review your inquiry and get back to you shortly.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 border-t border-slate-100">
                        <Link
                            href="/"
                            className="w-full sm:w-auto px-8 py-3.5 bg-[#1955A6] hover:bg-[#1955A6]/90 text-white rounded-full font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                        >
                            <Home className="w-4 h-4" />
                            <span>Return to Home</span>
                        </Link>

                        <Link
                            href="/contact-us"
                            className="w-full sm:w-auto px-8 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full font-bold text-sm tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            <Mail className="w-4 h-4 text-[#1955A6]" />
                            <span>Contact Us</span>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
