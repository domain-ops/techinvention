"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { english } from '../translations/languages/english';
import { translationsMap, loadTranslation, type Language } from '../translations';
export type { Language };

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => any;
    translationsData: any;
    isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('en');
    const [translationsData, setTranslationsData] = useState<any>(english);

    // Load persisted language from localStorage on client-side mount
    useEffect(() => {
        const savedLanguage = localStorage.getItem('language') as Language;
        if (savedLanguage && savedLanguage !== 'en' && translationsMap[savedLanguage]) {
            setLanguage(savedLanguage);
            setTranslationsData(translationsMap[savedLanguage]);
        }
    }, []);

    useEffect(() => {
        const data = translationsMap[language] || english;
        setTranslationsData(data);
        
        localStorage.setItem('language', language);
        document.documentElement.lang = language;
        document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    }, [language]);

    const t = (key: string) => {
        const keys = key.split('.');
        let value: any = translationsData;
        let found = true;

        for (const k of keys) {
            if (value && value[k] !== undefined) {
                value = value[k];
            } else {
                found = false;
                break;
            }
        }

        if (found && value !== undefined) {
            return value;
        }

        // Fallback to English dictionary
        let engValue: any = english;
        let engFound = true;
        for (const k of keys) {
            if (engValue && engValue[k] !== undefined) {
                engValue = engValue[k];
            } else {
                engFound = false;
                break;
            }
        }

        if (engFound && engValue !== undefined) {
            return engValue;
        }

        return "";
    };

    const isRTL = language === 'ar';

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t, translationsData, isRTL }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

