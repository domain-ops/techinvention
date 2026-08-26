import { english } from './languages/english';

export type Language = 'en' | 'hi' | 'ar' | 'es' | 'fr' | 'ru' | 'tr';

const cache: Partial<Record<Language, any>> = {
    en: english,
};

const loaders: Record<Language, () => Promise<{ [key: string]: any }>> = {
    en: async () => ({ english }),
    hi: () => import('./languages/hindi'),
    ar: () => import('./languages/arabic'),
    es: () => import('./languages/spanish'),
    fr: () => import('./languages/french'),
    ru: () => import('./languages/russian'),
    tr: () => import('./languages/turkish'),
};

const keyMap: Record<Language, string> = {
    en: 'english',
    hi: 'hindi',
    ar: 'arabic',
    es: 'spanish',
    fr: 'french',
    ru: 'russian',
    tr: 'turkish',
};

export const loadTranslation = async (lang: Language): Promise<any> => {
    if (cache[lang]) {
        return cache[lang];
    }
    const loader = loaders[lang];
    if (!loader) return english;
    try {
        const mod = await loader();
        const exportKey = keyMap[lang];
        const data = (exportKey && mod[exportKey]) || mod.default || mod;
        cache[lang] = data;
        return data;
    } catch (e) {
        console.error('Failed to load language', lang, e);
        return english;
    }
};

export const getCachedTranslation = (lang: Language): any => {
    return cache[lang] || english;
};

// Fallback proxy to maintain backwards compatibility while keeping non-English unbundled
export const translationsMap: Record<Language, any> = new Proxy({} as any, {
    get: (_, prop: string) => {
        return cache[prop as Language] || english;
    }
});

