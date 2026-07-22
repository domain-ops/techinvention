import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { english } from '../translations/languages/english';
import { loadTranslation, type Language } from '../translations';
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
        if (savedLanguage && savedLanguage !== 'en') {
            setLanguage(savedLanguage);
        }
    }, []);

    useEffect(() => {
        let active = true;
        const load = async () => {
            const data = await loadTranslation(language);
            if (active) {
                setTranslationsData(data);
            }
        };
        load();
        
        localStorage.setItem('language', language);
        document.documentElement.lang = language;
        document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';

        return () => {
            active = false;
        };
    }, [language]);

    const t = (key: string) => {
        const keys = key.split('.');
        let value: any = translationsData;

        for (const k of keys) {
            if (value && value[k]) {
                value = value[k];
            } else {
                return key; // Fallback to key if not found
            }
        }
        return value;
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

