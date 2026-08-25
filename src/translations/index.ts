import { english } from './languages/english';
import { hindi } from './languages/hindi';
import { arabic } from './languages/arabic';
import { spanish } from './languages/spanish';
import { french } from './languages/french';
import { russian } from './languages/russian';
import { turkish } from './languages/turkish';

export type Language = 'en' | 'hi' | 'ar' | 'es' | 'fr' | 'ru' | 'tr';

export const translationsMap: Record<Language, any> = {
    en: english,
    hi: hindi,
    ar: arabic,
    es: spanish,
    fr: french,
    ru: russian,
    tr: turkish
};

export const loadTranslation = async (lang: Language): Promise<any> => {
    return translationsMap[lang] || english;
};
