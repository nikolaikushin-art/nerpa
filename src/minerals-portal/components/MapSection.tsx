 import { useLanguage } from '@/minerals-portal/contexts/LanguageContext';
 import AfghanistanMap from './AfghanistanMap';
 
 const MapSection = () => {
   const { isRTL, t } = useLanguage();
 
   return (
     <section id="map" className="relative min-h-screen w-full overflow-hidden bg-background py-24">
       <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 via-background to-background" />
       
       <div className={`relative z-10 mx-auto max-w-7xl px-8 md:px-16 ${isRTL ? 'text-right' : 'text-left'}`}>
         <div className="mb-16 text-center">
           <span className="mb-4 block font-body text-sm font-medium uppercase tracking-[0.3em] text-primary">
             {t.mapSection?.provincesLabel || '34 Provinces'}
           </span>
           <h2 className="font-display text-4xl font-light text-foreground md:text-5xl lg:text-6xl">
             {t.mapSection?.title || 'Interactive Resource Map'}
           </h2>
           <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
             {t.mapSection?.description || 'Explore Afghanistan\'s mineral wealth across all provinces. Hover over each region to discover key deposits, estimated values, and investment opportunities.'}
           </p>
         </div>
 
         <AfghanistanMap />
 
         {/* Quick Stats */}
         <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
           <div className="text-center">
             <div className="font-display text-4xl font-light text-primary">34</div>
             <div className="text-sm text-muted-foreground">{t.mapSection?.stats?.provinces || 'Provinces'}</div>
           </div>
           <div className="text-center">
             <div className="font-display text-4xl font-light text-primary">1,400+</div>
             <div className="text-sm text-muted-foreground">{t.mapSection?.stats?.knownDeposits || 'Known Deposits'}</div>
           </div>
           <div className="text-center">
             <div className="font-display text-4xl font-light text-primary">$30T+</div>
             <div className="text-sm text-muted-foreground">{t.mapSection?.stats?.totalValue || 'Total Value'}</div>
           </div>
           <div className="text-center">
             <div className="font-display text-4xl font-light text-primary">30+</div>
             <div className="text-sm text-muted-foreground">{t.mapSection?.stats?.mineralTypes || 'Mineral Types'}</div>
           </div>
         </div>
       </div>
     </section>
   );
 };
 
 export default MapSection;