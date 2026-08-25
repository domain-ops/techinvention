export type Language = 'en' | 'hi' | 'ar' | 'es' | 'fr' | 'ru' | 'tr';

export const loadTranslation = async (lang: Language): Promise<any> => {
    switch (lang) {
        case 'en': 
            return (await import('./languages/english')).english;
        case 'hi': 
            return (await import('./languages/hindi')).hindi;
        case 'ar': 
            return (await import('./languages/arabic')).arabic;
        case 'es': 
            return (await import('./languages/spanish')).spanish;
        case 'fr': 
            return (await import('./languages/french')).french;
        case 'ru': 
            return (await import('./languages/russian')).russian;
        case 'tr': 
            return (await import('./languages/turkish')).turkish;
        default: 
            return (await import('./languages/english')).english;
    }
};

