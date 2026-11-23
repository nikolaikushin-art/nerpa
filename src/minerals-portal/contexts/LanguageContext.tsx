 import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
 import { Language, translations, Translations, isRTL } from '@/minerals-portal/lib/i18n/translations';
 
 interface LanguageContextType {
   language: Language;
   setLanguage: (lang: Language) => void;
   t: Translations;
   isRTL: boolean;
 }
 
 const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
 
 export const LanguageProvider = ({ children }: { children: ReactNode }) => {
   const [language, setLanguageState] = useState<Language>('en');
 
   useEffect(() => {
     const saved = localStorage.getItem('nerpa-minerals-language') as Language;
     if (saved && translations[saved]) {
       setLanguageState(saved);
     }
   }, []);
 
   useEffect(() => {
     localStorage.setItem('nerpa-minerals-language', language);
     document.documentElement.dir = isRTL(language) ? 'rtl' : 'ltr';
     document.documentElement.lang = language;
   }, [language]);
 
   const setLanguage = (lang: Language) => {
     setLanguageState(lang);
   };
 
  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language] || translations['en'],
    isRTL: isRTL(language),
  };
 
   return (
     <LanguageContext.Provider value={value}>
       {children}
     </LanguageContext.Provider>
   );
 };
 
 export const useLanguage = () => {
   const context = useContext(LanguageContext);
   if (!context) {
     throw new Error('useLanguage must be used within a LanguageProvider');
   }
   return context;
 };