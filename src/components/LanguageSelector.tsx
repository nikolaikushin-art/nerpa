import { motion, AnimatePresence } from "framer-motion";
import { Globe, Check } from "lucide-react";
import { useState } from "react";
import { useLanguage, Language } from "@/contexts/LanguageContext";

export const LanguageSelector = () => {
  const { language, setLanguage, languageNames } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages: { code: Language; name: string; nativeName: string; flag: string }[] = [
    { code: "en", name: "English", nativeName: "English", flag: "🇬🇧" },
    { code: "fa", name: "Dari", nativeName: "دری", flag: "🇦🇫" },
    { code: "ps", name: "Pashto", nativeName: "پښتو", flag: "🇦🇫" },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white transition-all text-sm"
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline">{languageNames[language]}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40"
            />
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute top-full right-0 mt-2 w-48 p-2 bg-background/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl z-50"
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg transition-all ${
                    language === lang.code
                      ? "bg-primary/20 text-white"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg">{lang.flag}</span>
                    <div className="text-left">
                      <p className="text-sm font-medium">{lang.name}</p>
                      <p className="text-xs text-white/40">{lang.nativeName}</p>
                    </div>
                  </div>
                  {language === lang.code && (
                    <Check className="w-4 h-4 text-primary" />
                  )}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
