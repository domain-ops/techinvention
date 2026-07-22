export type Language = 'en' | 'hi' | 'ar' | 'es' | 'fr';

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
        default: 
            return (await import('./languages/english')).english;
    }
};

