 import { useState, useEffect } from 'react';
 import LanguageSwitcher from './LanguageSwitcher';
 import { useLanguage } from '@/minerals-portal/contexts/LanguageContext';
 import { Menu, X, ChevronDown, Mountain, Gem, Pickaxe, Atom, Crown, Factory, Flame, Sparkles, Globe, Users, Building, Map, FileText, Shield, Leaf, Zap, FlaskConical, Truck, Scale, Compass, Layers } from 'lucide-react';
 import { Button } from '@/minerals-portal/components/ui/button';
 
 const MegaNavigation = () => {
   const { t, isRTL } = useLanguage();
   const [isScrolled, setIsScrolled] = useState(false);
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
 
   useEffect(() => {
     const handleScroll = () => {
       setIsScrolled(window.scrollY > 50);
     };
     window.addEventListener('scroll', handleScroll);
     return () => window.removeEventListener('scroll', handleScroll);
   }, []);
 
   const mineralCategories = [
     {
       title: t.sectors.copper,
       icon: Mountain,
       items: [
         { label: 'Mes Aynak Deposit', href: '#copper' },
         { label: 'Hajigak Copper-Iron Complex', href: '#copper-processing' },
         { label: 'Balkhab Deposit', href: '#copper-openpit' },
         { label: 'Copper Processing', href: '#copper-smelting' },
         { label: 'Copper Exports', href: '#corridors' },
       ]
     },
     {
       title: t.sectors.lithium,
       icon: Zap,
       items: [
         { label: 'Ghazni Pegmatites', href: '#lithium' },
         { label: 'Nuristan Deposits', href: '#lithium-spodumene' },
         { label: 'Battery-Grade Processing', href: '#lithium' },
         { label: 'EV Supply Chain', href: '#lithium' },
         { label: 'Research Centers', href: '#research' },
       ]
     },
     {
       title: t.sectors.gold,
       icon: Crown,
       items: [
         { label: 'Badakhshan Gold Belt', href: '#gold' },
         { label: 'Takhar Deposits', href: '#gold-underground' },
         { label: 'Gold Refining', href: '#gold-refinery' },
         { label: 'Artisanal Mining', href: '#gold' },
         { label: 'Bullion Production', href: '#gold-refinery' },
       ]
     },
     {
       title: t.sectors.gemstones,
       icon: Gem,
       items: [
         { label: 'Panjshir Emeralds', href: '#emerald' },
         { label: 'Badakhshan Lapis Lazuli', href: '#lapis' },
         { label: 'Jegdalek Rubies', href: '#ruby-jegdalek' },
         { label: 'Hindu Kush Sapphires', href: '#sapphire-hindukush' },
         { label: 'Nuristan Tourmaline', href: '#tourmaline-nuristan' },
         { label: 'Kunar Aquamarine', href: '#aquamarine-kunar' },
       ]
     },
     {
       title: t.sectors.iron,
       icon: Pickaxe,
       items: [
         { label: 'Hajigak Iron Mountain', href: '#hajigak' },
         { label: 'Steel Production Plans', href: '#iron-processing' },
         { label: 'Magnetite Quality', href: '#iron' },
         { label: 'Infrastructure Steel', href: '#iron' },
         { label: 'Employment Creation', href: '#workforce' },
       ]
     },
     {
       title: t.sectors.rareEarth,
       icon: Atom,
       items: [
         { label: 'Helmand REE Deposits', href: '#rare-earth' },
         { label: 'Technology Metals', href: '#ree-concentrate' },
         { label: 'Neodymium & Praseodymium', href: '#rare-earth' },
         { label: 'Global Supply Impact', href: '#rare-earth' },
         { label: 'Research Partnerships', href: '#research' },
       ]
     },
   ];
 
   const industrialCategories = [
     {
       title: t.sectors.chromite,
       icon: Layers,
       items: [
         { label: 'Chromite Reserves', href: '#chromite' },
         { label: 'Export Operations', href: '#chromite-export' },
         { label: 'Stainless Steel Production', href: '#chromite' },
       ]
     },
     {
       title: t.sectors.marble,
       icon: Building,
       items: [
         { label: 'Premium White Marble', href: '#marble-white' },
         { label: 'Herat Quarries', href: '#herat-province' },
         { label: 'Architectural Stone', href: '#marble' },
       ]
     },
     {
       title: t.sectors.coal,
       icon: Flame,
       items: [
         { label: 'Coal Basins', href: '#coal' },
         { label: 'Underground Operations', href: '#coal-underground' },
         { label: 'Baghlan Province', href: '#baghlan-province' },
       ]
     },
     {
       title: 'Talc & Barite',
       icon: Sparkles,
       items: [
         { label: 'High-Purity Talc', href: '#talc' },
         { label: 'Drilling Barite', href: '#barite' },
         { label: 'Salt Deposits', href: '#salt' },
       ]
     },
   ];
 
   const provinceLinks = [
     { label: 'Logar - Copper Heartland', href: '#logar' },
     { label: 'Badakhshan - Gemstone Kingdom', href: '#badakhshan' },
     { label: 'Bamyan - Iron Mountain', href: '#bamyan' },
     { label: 'Panjshir - Emerald Valley', href: '#panjshir' },
     { label: 'Ghazni - Lithium Belt', href: '#ghazni' },
     { label: 'Helmand - Strategic Resources', href: '#helmand' },
     { label: 'Herat - Western Gateway', href: '#herat-province' },
     { label: 'Kandahar - Southern Hub', href: '#kandahar-province' },
     { label: 'Nuristan - Lithium Frontier', href: '#nuristan-province' },
     { label: 'Kunar - Gemstone Valley', href: '#kunar-province' },
     { label: 'Takhar - Golden Rivers', href: '#takhar-province' },
     { label: 'Balkh - Northern Resources', href: '#balkh' },
   ];
 
   const operationsLinks = [
     { label: 'Processing & Refining', href: '#processing', icon: Factory },
     { label: 'Smelting Operations', href: '#smelting', icon: Flame },
     { label: 'Research & Exploration', href: '#research', icon: FlaskConical },
     { label: 'Geological Surveys', href: '#geological-survey', icon: Compass },
     { label: 'Trade & Export', href: '#trade', icon: Truck },
     { label: 'Investment Framework', href: '#investment', icon: Scale },
     { label: 'Sustainability', href: '#sustainability', icon: Leaf },
     { label: 'Community Development', href: '#community', icon: Users },
     { label: 'Digital Mining', href: '#digital-mining', icon: Globe },
     { label: 'Health & Safety', href: '#safety', icon: Shield },
   ];
 
   const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
     e.preventDefault();
     const element = document.getElementById(href.slice(1));
     if (element) {
       element.scrollIntoView({ behavior: 'smooth', block: 'start' });
     }
     setIsMobileMenuOpen(false);
     setActiveDropdown(null);
   };
 
   const toggleDropdown = (key: string) => {
     setActiveDropdown(activeDropdown === key ? null : key);
   };
 
   return (
     <header
       className={`fixed top-0 ${isRTL ? 'right-0' : 'left-0'} z-50 w-full transition-all duration-300 ${
         isScrolled 
           ? 'bg-background/98 backdrop-blur-lg border-b border-border/50 shadow-xl' 
           : 'bg-gradient-to-b from-background/90 to-transparent'
       }`}
     >
       <div className="mx-auto max-w-[1800px] px-4 py-3">
         <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
           {/* Logo */}
           <a href="#" className="flex items-center gap-3 group">
             <div className="rounded bg-primary px-3 py-1.5 text-sm font-bold text-primary-foreground transition-all group-hover:shadow-gold">
               NERPA
             </div>
             <div className="hidden md:block">
               <span className="font-display text-lg font-light text-foreground">Afghanistan</span>
               <span className="ml-2 text-xs text-muted-foreground uppercase tracking-wider">Minerals Portal</span>
             </div>
           </a>
 
           {/* Desktop Navigation */}
           <nav className={`hidden lg:flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
             {/* Overview */}
             <a
               href="#overview"
               onClick={(e) => handleClick(e, '#overview')}
               className="px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
             >
               {t.nav.home}
             </a>
 
             {/* Strategic Minerals Dropdown */}
             <div 
               className="relative group"
               onMouseEnter={() => setActiveDropdown('minerals')}
               onMouseLeave={() => setActiveDropdown(null)}
             >
               <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary">
                 {t.nav.minerals}
                 <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'minerals' ? 'rotate-180' : ''}`} />
               </button>
               
               {activeDropdown === 'minerals' && (
                 <div className="absolute left-0 top-full mt-1 w-[800px] rounded-lg border border-border/50 bg-background/98 backdrop-blur-xl shadow-2xl p-6 animate-fade-in">
                   <div className="grid grid-cols-3 gap-6">
                     <div>
                       <h3 className="text-sm font-medium text-primary mb-4 uppercase tracking-wider">Strategic Metals</h3>
                       <div className="space-y-4">
                         {mineralCategories.slice(0, 3).map((category) => (
                           <div key={category.title}>
                             <div className="flex items-center gap-2 mb-2">
                               <category.icon className="h-4 w-4 text-primary" />
                               <span className="text-sm font-medium text-foreground">{category.title}</span>
                             </div>
                             <div className="pl-6 space-y-1">
                               {category.items.map((item) => (
                                 <a
                                   key={item.label}
                                   href={item.href}
                                   onClick={(e) => handleClick(e, item.href)}
                                   className="block text-xs text-muted-foreground hover:text-primary transition-colors py-0.5"
                                 >
                                   {item.label}
                                 </a>
                               ))}
                             </div>
                           </div>
                         ))}
                       </div>
                     </div>
                     <div>
                       <h3 className="text-sm font-medium text-primary mb-4 uppercase tracking-wider">Precious Resources</h3>
                       <div className="space-y-4">
                         {mineralCategories.slice(3, 6).map((category) => (
                           <div key={category.title}>
                             <div className="flex items-center gap-2 mb-2">
                               <category.icon className="h-4 w-4 text-primary" />
                               <span className="text-sm font-medium text-foreground">{category.title}</span>
                             </div>
                             <div className="pl-6 space-y-1">
                               {category.items.map((item) => (
                                 <a
                                   key={item.label}
                                   href={item.href}
                                   onClick={(e) => handleClick(e, item.href)}
                                   className="block text-xs text-muted-foreground hover:text-primary transition-colors py-0.5"
                                 >
                                   {item.label}
                                 </a>
                               ))}
                             </div>
                           </div>
                         ))}
                       </div>
                     </div>
                     <div>
                       <h3 className="text-sm font-medium text-primary mb-4 uppercase tracking-wider">Industrial Minerals</h3>
                       <div className="space-y-4">
                         {industrialCategories.map((category) => (
                           <div key={category.title}>
                             <div className="flex items-center gap-2 mb-2">
                               <category.icon className="h-4 w-4 text-primary" />
                               <span className="text-sm font-medium text-foreground">{category.title}</span>
                             </div>
                             <div className="pl-6 space-y-1">
                               {category.items.map((item) => (
                                 <a
                                   key={item.label}
                                   href={item.href}
                                   onClick={(e) => handleClick(e, item.href)}
                                   className="block text-xs text-muted-foreground hover:text-primary transition-colors py-0.5"
                                 >
                                   {item.label}
                                 </a>
                               ))}
                             </div>
                           </div>
                         ))}
                       </div>
                     </div>
                   </div>
                 </div>
               )}
             </div>
 
             {/* Provinces Dropdown */}
             <div 
               className="relative group"
               onMouseEnter={() => setActiveDropdown('provinces')}
               onMouseLeave={() => setActiveDropdown(null)}
             >
               <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary">
                 Provinces
                 <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'provinces' ? 'rotate-180' : ''}`} />
               </button>
               
               {activeDropdown === 'provinces' && (
                 <div className="absolute left-0 top-full mt-1 w-[500px] rounded-lg border border-border/50 bg-background/98 backdrop-blur-xl shadow-2xl p-6 animate-fade-in">
                   <h3 className="text-sm font-medium text-primary mb-4 uppercase tracking-wider flex items-center gap-2">
                     <Map className="h-4 w-4" />
                     34 Resource-Rich Provinces
                   </h3>
                   <div className="grid grid-cols-2 gap-2">
                     {provinceLinks.map((link) => (
                       <a
                         key={link.label}
                         href={link.href}
                         onClick={(e) => handleClick(e, link.href)}
                         className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1.5 px-2 rounded hover:bg-secondary/50"
                       >
                         {link.label}
                       </a>
                     ))}
                   </div>
                   <div className="mt-4 pt-4 border-t border-border/50">
                     <a
                       href="#map"
                       onClick={(e) => handleClick(e, '#map')}
                       className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                     >
                       <Map className="h-4 w-4" />
                       View Interactive Map
                     </a>
                   </div>
                 </div>
               )}
             </div>
 
             {/* Operations Dropdown */}
             <div 
               className="relative group"
               onMouseEnter={() => setActiveDropdown('operations')}
               onMouseLeave={() => setActiveDropdown(null)}
             >
               <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary">
                 Operations
                 <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'operations' ? 'rotate-180' : ''}`} />
               </button>
               
               {activeDropdown === 'operations' && (
                 <div className="absolute left-0 top-full mt-1 w-[400px] rounded-lg border border-border/50 bg-background/98 backdrop-blur-xl shadow-2xl p-6 animate-fade-in">
                   <h3 className="text-sm font-medium text-primary mb-4 uppercase tracking-wider">Mining Operations</h3>
                   <div className="grid grid-cols-2 gap-2">
                     {operationsLinks.map((link) => (
                       <a
                         key={link.label}
                         href={link.href}
                         onClick={(e) => handleClick(e, link.href)}
                         className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors py-1.5 px-2 rounded hover:bg-secondary/50"
                       >
                         <link.icon className="h-4 w-4" />
                         {link.label}
                       </a>
                     ))}
                   </div>
                 </div>
               )}
             </div>
 
             {/* Investment */}
             <a
               href="#investment"
               onClick={(e) => handleClick(e, '#investment')}
               className="px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
             >
               {t.nav.investment}
             </a>
 
             {/* Timeline */}
             <a
               href="#timeline"
               onClick={(e) => handleClick(e, '#timeline')}
               className="px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
             >
               Timeline
             </a>
 
             {/* Contact */}
             <a
               href="#contact"
               onClick={(e) => handleClick(e, '#contact')}
               className="px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
             >
               {t.nav.contact}
             </a>
 
<div className="flex items-center gap-3">
              <LanguageSwitcher />
            </div>
           </nav>

           {/* Mobile Menu Button */}
           <div className="flex items-center gap-4 lg:hidden">
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
           <nav className="mt-4 lg:hidden max-h-[80vh] overflow-y-auto border-t border-border/50 pt-4">
             <div className="space-y-4">
               {/* Mobile - Minerals */}
               <div>
                 <button
                   onClick={() => toggleDropdown('mobile-minerals')}
                   className="flex items-center justify-between w-full text-sm font-medium text-foreground py-2"
                 >
                   {t.nav.minerals}
                   <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'mobile-minerals' ? 'rotate-180' : ''}`} />
                 </button>
                 {activeDropdown === 'mobile-minerals' && (
                   <div className="pl-4 space-y-2 mt-2">
                     {[...mineralCategories, ...industrialCategories].map((category) => (
                       <div key={category.title} className="space-y-1">
                         <div className="flex items-center gap-2 text-sm text-primary">
                           <category.icon className="h-4 w-4" />
                           {category.title}
                         </div>
                         <div className="pl-6 space-y-1">
                           {category.items.slice(0, 3).map((item) => (
                             <a
                               key={item.label}
                               href={item.href}
                               onClick={(e) => handleClick(e, item.href)}
                               className="block text-xs text-muted-foreground py-1"
                             >
                               {item.label}
                             </a>
                           ))}
                         </div>
                       </div>
                     ))}
                   </div>
                 )}
               </div>
 
               {/* Mobile - Provinces */}
               <div>
                 <button
                   onClick={() => toggleDropdown('mobile-provinces')}
                   className="flex items-center justify-between w-full text-sm font-medium text-foreground py-2"
                 >
                   Provinces
                   <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'mobile-provinces' ? 'rotate-180' : ''}`} />
                 </button>
                 {activeDropdown === 'mobile-provinces' && (
                   <div className="pl-4 grid grid-cols-2 gap-1 mt-2">
                     {provinceLinks.map((link) => (
                       <a
                         key={link.label}
                         href={link.href}
                         onClick={(e) => handleClick(e, link.href)}
                         className="text-xs text-muted-foreground py-1"
                       >
                         {link.label}
                       </a>
                     ))}
                   </div>
                 )}
               </div>
 
               {/* Mobile - Direct Links */}
               <a href="#investment" onClick={(e) => handleClick(e, '#investment')} className="block text-sm font-medium text-foreground py-2">{t.nav.investment}</a>
               <a href="#timeline" onClick={(e) => handleClick(e, '#timeline')} className="block text-sm font-medium text-foreground py-2">Timeline</a>
               <a href="#map" onClick={(e) => handleClick(e, '#map')} className="block text-sm font-medium text-foreground py-2">Map</a>
               <a href="#contact" onClick={(e) => handleClick(e, '#contact')} className="block text-sm font-medium text-foreground py-2">{t.nav.contact}</a>
             </div>
           </nav>
         )}
       </div>
     </header>
   );
 };
 
 export default MegaNavigation;