 import { Globe } from 'lucide-react';
 import { useLanguage } from '@/minerals-portal/contexts/LanguageContext';
 import { Language, languageNames } from '@/minerals-portal/lib/i18n/translations';
 import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger,
 } from '@/minerals-portal/components/ui/dropdown-menu';
 import { Button } from '@/minerals-portal/components/ui/button';
 
 const LanguageSwitcher = () => {
   const { language, setLanguage } = useLanguage();
 
   const languages: Language[] = ['en', 'ps', 'fa', 'ar', 'zh', 'ru'];
 
   return (
     <DropdownMenu>
       <DropdownMenuTrigger asChild>
         <Button 
           variant="ghost" 
           size="sm" 
           className="gap-2 text-foreground/80 hover:text-foreground hover:bg-foreground/10"
         >
           <Globe className="h-4 w-4" />
           <span className="hidden sm:inline">{languageNames[language]}</span>
         </Button>
       </DropdownMenuTrigger>
       <DropdownMenuContent align="end" className="min-w-[150px]">
         {languages.map((lang) => (
           <DropdownMenuItem
             key={lang}
             onClick={() => setLanguage(lang)}
             className={`cursor-pointer ${language === lang ? 'bg-primary/10 text-primary' : ''}`}
           >
             {languageNames[lang]}
           </DropdownMenuItem>
         ))}
       </DropdownMenuContent>
     </DropdownMenu>
   );
 };
 
 export default LanguageSwitcher;