 import { useState, useEffect } from 'react';
 import LanguageSwitcher from './LanguageSwitcher';
 import { useLanguage } from '@/minerals-portal/contexts/LanguageContext';
 import { Menu, X } from 'lucide-react';
 import { Button } from '@/minerals-portal/components/ui/button';
 
 const TopNavigation = () => {
   const { t, isRTL } = useLanguage();
   const [isScrolled, setIsScrolled] = useState(false);
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 
   useEffect(() => {
     const handleScroll = () => {
       setIsScrolled(window.scrollY > 50);
     };
     window.addEventListener('scroll', handleScroll);
     return () => window.removeEventListener('scroll', handleScroll);
   }, []);
 
   const navLinks = [
     { href: '#overview', label: t.nav.home },
     { href: '#minerals', label: t.nav.minerals },
     { href: '#map', label: t.nav.map },
     { href: '#investment', label: t.nav.investment },
     { href: '#contact', label: t.nav.contact },
   ];
 
   const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
     e.preventDefault();
     const element = document.getElementById(href.slice(1));
     if (element) {
       element.scrollIntoView({ behavior: 'smooth', block: 'start' });
     }
     setIsMobileMenuOpen(false);
   };
 
   return (
     <header
       className={`fixed top-0 ${isRTL ? 'right-0' : 'left-0'} z-50 w-full transition-all duration-300 ${
         isScrolled 
           ? 'bg-background/95 backdrop-blur-md border-b border-border/50 shadow-lg' 
           : 'bg-transparent'
       }`}
     >
       <div className="mx-auto max-w-7xl px-6 py-4">
         <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
           {/* Logo */}
           <a href="#" className="flex items-center gap-3">
             <div className="rounded bg-primary px-2 py-1 text-xs font-bold text-primary-foreground">
               NERPA
             </div>
             <span className="hidden font-display text-lg font-light text-foreground md:inline">
               Afghanistan
             </span>
           </a>
 
           {/* Desktop Navigation */}
           <nav className={`hidden items-center gap-8 md:flex ${isRTL ? 'flex-row-reverse' : ''}`}>
             {navLinks.map((link) => (
               <a
                 key={link.href}
                 href={link.href}
                 onClick={(e) => handleClick(e, link.href)}
                 className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
               >
                 {link.label}
               </a>
             ))}
<div className="flex items-center gap-3">
              <LanguageSwitcher />
            </div>
          </nav>
 
           {/* Mobile Menu Button */}
           <div className="flex items-center gap-4 md:hidden">
             <LanguageSwitcher />
             <Button
               variant="ghost"
               size="icon"
               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
             >
               {isMobileMenuOpen ? (
                 <X className="h-5 w-5" />
               ) : (
                 <Menu className="h-5 w-5" />
               )}
             </Button>
           </div>
         </div>
 
         {/* Mobile Menu */}
         {isMobileMenuOpen && (
           <nav className="mt-4 flex flex-col gap-4 border-t border-border/50 pt-4 md:hidden">
             {navLinks.map((link) => (
               <a
                 key={link.href}
                 href={link.href}
                 onClick={(e) => handleClick(e, link.href)}
                 className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
               >
                 {link.label}
               </a>
             ))}
           </nav>
         )}
       </div>
     </header>
   );
 };
 
 export default TopNavigation;