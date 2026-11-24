import { Map, Mountain, Gem, Pickaxe, Flame, Crown, Sparkles, Diamond, Battery, Droplets, Shield, Building, Layers, Wheat, Factory, Compass, Globe, Landmark, Hammer, CircleDot, Hexagon, FlaskConical, Atom, Cpu, Scale, Leaf, Package, Cylinder, Construction, ThermometerSun, Lightbulb, Orbit, Anvil } from 'lucide-react';
import { useLanguage } from '@/minerals-portal/contexts/LanguageContext';
import { LucideIcon } from 'lucide-react';

interface ProvinceLink {
  label: string;
  href: string;
}

interface ProvincesDropdownProps {
  provinceLinks: ProvinceLink[];
  onItemClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

// Unique icon per province based on primary mineral resource
const provinceIconMap: Record<string, LucideIcon> = {
  badakhshan: Gem,           // Lapis lazuli & gemstones
  badghis: Compass,          // Mineral surveys
  baghlan: Flame,            // Coal deposits
  balkh: Globe,              // Northern trade hub
  bamyan: Mountain,          // Iron ore at Hajigak
  daykundi: Layers,          // Mineral strata
  farah: Droplets,           // Western minerals
  faryab: Shield,            // Northern deposits
  ghazni: Battery,           // Lithium belt
  ghor: CircleDot,           // Central resources
  helmand: Atom,             // Rare earth elements
  herat: Construction,       // Marble & building stone
  jowzjan: Factory,          // Northern processing
  kabul: Landmark,           // Capital resources
  kandahar: Crown,           // Southern hub
  kapisa: Hexagon,           // Central deposits
  khost: Pickaxe,            // Eastern minerals
  kunar: Diamond,            // Gemstone valley
  kunduz: Scale,             // Northern gateway
  laghman: Leaf,             // Eastern resources
  logar: Hammer,             // Copper heartland
  nangarhar: FlaskConical,   // Eastern deposits
  nimruz: ThermometerSun,    // Southern minerals
  nuristan: Lightbulb,       // Lithium frontier
  paktia: Cylinder,          // Eastern resources
  paktika: Package,          // Southern deposits
  panjshir: Sparkles,        // Emerald valley
  parwan: Orbit,             // Central minerals
  samangan: Cpu,             // Northern deposits
  'sar-e-pol': Wheat,        // Northern resources
  takhar: Crown,             // Golden rivers
  uruzgan: Compass,          // Central minerals
  wardak: Layers,            // Central deposits
  zabul: Shield,             // Southern resources
};

const getProvinceIcon = (href: string): LucideIcon => {
  const slug = href.split('/').pop() || '';
  return provinceIconMap[slug] || Mountain;
};

const ProvincesDropdown = ({ provinceLinks, onItemClick }: ProvincesDropdownProps) => {
  const { t } = useLanguage();
  
  return (
    <div 
      className="absolute left-4 right-4 top-full z-40 mt-1 max-h-[calc(100vh-8rem)] overflow-y-auto rounded-xl border border-border/50 bg-background/98 shadow-2xl"
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-amber to-primary" />
      
      <div className="p-8">
        <div className="flex items-center gap-4 mb-6 pb-4 border-b border-border/50">
          <div className="p-3 rounded-xl bg-primary/10">
            <Map className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-body font-bold text-foreground">{t.navDropdowns.provinces.title}</h3>
            <p className="text-sm font-body text-foreground">{t.navDropdowns.provinces.subtitle}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-3 py-4">
          {provinceLinks.map((link) => {
            const Icon = getProvinceIcon(link.href);
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => onItemClick(e, link.href)}
                className="flex items-center gap-3 p-3 rounded-lg text-sm font-body text-foreground hover:text-primary hover:bg-secondary/50 transition-all duration-200 group"
              >
                <div className="p-1.5 rounded bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <span className="font-body font-medium">{link.label}</span>
              </a>
            );
          })}
        </div>

        <div className="mt-8 pt-6 border-t border-border/50 flex items-center justify-between">
          <a
            href="#map"
            onClick={(e) => onItemClick(e, '#map')}
            className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            <Map className="h-4 w-4" />
            {t.navDropdowns.provinces.viewMap} →
          </a>
          <div className="text-xs font-body text-foreground">
            {t.navDropdowns.provinces.clickToExplore}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProvincesDropdown;
