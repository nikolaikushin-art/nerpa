import { Link } from 'react-router-dom';
import { Mountain, Gem, Pickaxe, Atom, Crown, Factory, Flame, Sparkles, Zap, Layers, Building, Search } from 'lucide-react';
import { Input } from '@/minerals-portal/components/ui/input';
import MegaNavigationV2 from '@/minerals-portal/components/MegaNavigationV2';
import ContactSection from '@/minerals-portal/components/ContactSection';
import { useState, useMemo } from 'react';
import { useLanguage } from '@/minerals-portal/contexts/LanguageContext';
import { mineralsIndexCategoryTranslations, mineralsIndexMoreDeposits, mineralsIndexStrategicResources } from '@/minerals-portal/lib/i18n/mineralsIndexTranslations';

const copperMine = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/copper-mine.jpg";
const lithiumDeposits = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/lithium-deposits.jpg";
const ironOre = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/iron-ore.jpg";
const emeraldMine = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/emerald-mine.jpg";
const goldMining = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/gold-mining.jpg";
const rareEarth = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/rare-earth.jpg";
const chromite = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/chromite.jpg";
const marbleQuarry = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/marble-quarry.jpg";
const coalMining = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/coal-mining.jpg";
const talcMining = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/talc-mining.jpg";

interface MineralCategory {
  id: string;
  title: string;
  icon: typeof Mountain;
  image: string;
  description: string;
  value: string;
  deposits: { name: string; href: string }[];
}

const mineralCategories: MineralCategory[] = [
  {
    id: 'copper',
    title: 'Copper',
    icon: Mountain,
    image: copperMine,
    description: 'World-class copper deposits including Mes Aynak, one of the largest undeveloped copper reserves globally.',
    value: '$8T',
    deposits: [
      { name: 'Mes Aynak Deposit', href: '/minerals/copper/mes-aynak' },
      { name: 'Hajigak Complex', href: '/minerals/copper/hajigak' },
      { name: 'Balkhab Deposit', href: '/minerals/copper/balkhab' },
      { name: 'Processing Operations', href: '/minerals/copper/processing' },
      { name: 'Export Infrastructure', href: '/minerals/copper/exports' },
    ]
  },
  {
    id: 'lithium',
    title: 'Lithium',
    icon: Zap,
    image: lithiumDeposits,
    description: 'Potentially the world\'s largest lithium reserves, critical for electric vehicle batteries and energy storage.',
    value: '$8T',
    deposits: [
      { name: 'Ghazni Pegmatites', href: '/minerals/lithium/ghazni' },
      { name: 'Nuristan Deposits', href: '/minerals/lithium/nuristan' },
      { name: 'Battery Processing', href: '/minerals/lithium/processing' },
      { name: 'EV Supply Chain', href: '/minerals/lithium/ev-supply' },
      { name: 'Research Centers', href: '/minerals/lithium/research' },
    ]
  },
  {
    id: 'iron',
    title: 'Iron Ore',
    icon: Pickaxe,
    image: ironOre,
    description: 'Hajigak iron deposit contains 22 billion tons of high-grade magnetite ore for steel production.',
    value: '$3.5T+',
    deposits: [
      { name: 'Hajigak Iron Mountain', href: '/minerals/iron/hajigak' },
      { name: 'Steel Production', href: '/minerals/iron/steel-production' },
      { name: 'Magnetite Quality', href: '/minerals/iron/magnetite' },
      { name: 'Infrastructure Steel', href: '/minerals/iron/infrastructure' },
      { name: 'Employment Programs', href: '/minerals/iron/employment' },
    ]
  },
  {
    id: 'gems',
    title: 'Gemstones',
    icon: Gem,
    image: emeraldMine,
    description: 'World-famous Panjshir emeralds, Badakhshan lapis lazuli, and exceptional rubies and sapphires.',
    value: '$500B+',
    deposits: [
      { name: 'Panjshir Emeralds', href: '/minerals/gems/emeralds' },
      { name: 'Lapis Lazuli', href: '/minerals/gems/lapis' },
      { name: 'Jegdalek Rubies', href: '/minerals/gems/rubies' },
      { name: 'Hindu Kush Sapphires', href: '/minerals/gems/sapphires' },
      { name: 'Nuristan Tourmaline', href: '/minerals/gems/tourmaline' },
      { name: 'Kunar Aquamarine', href: '/minerals/gems/aquamarine' },
    ]
  },
  {
    id: 'gold',
    title: 'Gold',
    icon: Crown,
    image: goldMining,
    description: 'Significant gold deposits across multiple provinces with established artisanal mining traditions.',
    value: '$4.4T',
    deposits: [
      { name: 'Badakhshan Gold Belt', href: '/minerals/gold/badakhshan' },
      { name: 'Takhar Deposits', href: '/minerals/gold/takhar' },
      { name: 'Gold Refining', href: '/minerals/gold/refining' },
      { name: 'Artisanal Mining', href: '/minerals/gold/artisanal' },
      { name: 'Bullion Production', href: '/minerals/gold/bullion' },
    ]
  },
  {
    id: 'ree',
    title: 'Rare Earth Elements',
    icon: Atom,
    image: rareEarth,
    description: 'Critical technology metals including neodymium and praseodymium essential for green energy.',
    value: '$5T+',
    deposits: [
      { name: 'Helmand REE', href: '/minerals/ree/helmand' },
      { name: 'Technology Metals', href: '/minerals/ree/technology' },
      { name: 'Neodymium', href: '/minerals/ree/neodymium' },
      { name: 'Global Supply', href: '/minerals/ree/global-supply' },
      { name: 'Research Partnerships', href: '/minerals/ree/research' },
    ]
  },
  {
    id: 'chromite',
    title: 'Chromite',
    icon: Layers,
    image: chromite,
    description: 'High-quality chromite reserves for stainless steel production and export markets.',
    value: '$12B+',
    deposits: [
      { name: 'Chromite Reserves', href: '/minerals/chromite/reserves' },
      { name: 'Export Operations', href: '/minerals/chromite/exports' },
      { name: 'Stainless Steel', href: '/minerals/chromite/steel' },
    ]
  },
  {
    id: 'marble',
    title: 'Marble',
    icon: Building,
    image: marbleQuarry,
    description: 'Premium architectural marble rivaling Italian quality with 75+ unique color varieties.',
    value: '$20B+',
    deposits: [
      { name: 'Premium White Marble', href: '/minerals/marble/white' },
      { name: 'Herat Quarries', href: '/minerals/marble/herat' },
      { name: 'Architectural Stone', href: '/minerals/marble/architectural' },
    ]
  },
  {
    id: 'coal',
    title: 'Coal',
    icon: Flame,
    image: coalMining,
    description: 'Metallurgical and thermal coal reserves supporting domestic energy and industrial needs.',
    value: '$50B+',
    deposits: [
      { name: 'Coal Basins', href: '/minerals/coal/basins' },
      { name: 'Underground Operations', href: '/minerals/coal/underground' },
      { name: 'Baghlan Province', href: '/minerals/coal/baghlan' },
    ]
  },
  {
    id: 'industrial',
    title: 'Industrial Minerals',
    icon: Sparkles,
    image: talcMining,
    description: 'High-purity talc, drilling barite, and salt deposits for industrial applications.',
    value: '$10B+',
    deposits: [
      { name: 'High-Purity Talc', href: '/minerals/talc/high-purity' },
      { name: 'Drilling Barite', href: '/minerals/barite/drilling' },
      { name: 'Salt Deposits', href: '/minerals/salt/deposits' },
    ]
  },
];

const MineralsIndex = () => {
  const { t, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const categoryTranslations = mineralsIndexCategoryTranslations[language] ?? mineralsIndexCategoryTranslations.en;

  const translatedCategories = useMemo(() =>
    mineralCategories.map((cat) => {
      const tr = categoryTranslations.find((c) => c.id === cat.id);
      return {
        ...cat,
        title: tr?.title ?? cat.title,
        description: tr?.description ?? cat.description,
        deposits: cat.deposits.map((d) => ({
          ...d,
          name: tr?.depositNames?.[d.name] ?? d.name,
        })),
      };
    }),
    [categoryTranslations]
  );

  const filteredCategories = translatedCategories.filter((category) =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.deposits.some((d) => d.name.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const moreDepositsLabel = mineralsIndexMoreDeposits[language] ?? mineralsIndexMoreDeposits.en;
  const strategicResourcesLabel = mineralsIndexStrategicResources[language] ?? mineralsIndexStrategicResources.en;

  return (
    <div className="min-h-screen bg-background">
      <MegaNavigationV2 />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <span className="mb-4 block font-body text-sm font-medium uppercase tracking-[0.3em] text-primary">
            {strategicResourcesLabel}
          </span>
          <h1 className="font-body text-5xl font-extralight leading-tight tracking-tight md:text-6xl lg:text-7xl text-foreground mb-6">
            {t.mineralsIndex?.title ?? ''}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mb-8">
            {t.mineralsIndex?.description ?? ''}
          </p>
          
          {/* Search */}
          <div className="relative max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder={t.mineralsIndex?.searchPlaceholder ?? ''}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-12 bg-secondary/50 border-border/50"
            />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 px-8 md:px-16 lg:px-24 bg-secondary/30 border-y border-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-display text-primary">$30T+</div>
              <div className="text-sm text-muted-foreground">{t.mapSection?.stats?.totalValue ?? 'Total Value'}</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display text-primary">150+</div>
              <div className="text-sm text-muted-foreground">{t.mapSection?.stats?.mineralTypes ?? 'Mineral Types'}</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display text-primary">1400+</div>
              <div className="text-sm text-muted-foreground">{t.mapSection?.stats?.knownDeposits ?? 'Known Deposits'}</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display text-primary">34</div>
              <div className="text-sm text-muted-foreground">{t.mapSection?.stats?.provinces ?? 'Provinces'}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mineral Categories Grid */}
      <section className="py-24 px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCategories.map((category) => (
              <div 
                key={category.id}
                className="group relative rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  
                  {/* Value Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-sm font-medium">
                    {category.value}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-display font-light text-foreground">
                      {category.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-6">
                    {category.description}
                  </p>
                  
                  {/* Deposits Links */}
                  <div className="space-y-2">
                    {category.deposits.slice(0, 4).map((deposit) => (
                      <Link
                        key={deposit.href}
                        to={deposit.href}
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1 hover:translate-x-1 duration-200"
                      >
                        → {deposit.name}
                      </Link>
                    ))}
                    {category.deposits.length > 4 && (
                      <span className="block text-xs text-primary mt-2">
                        +{category.deposits.length - 4} {moreDepositsLabel}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
};

export default MineralsIndex;
