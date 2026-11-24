import { Map, Mountain, Gem, Flame, Crown, Compass, Globe, Landmark, LucideIcon } from 'lucide-react';
import { useLanguage } from '@/minerals-portal/contexts/LanguageContext';
import AccordionMegaPanel, { AccordionMenuLink } from './AccordionMegaPanel';

interface ProvinceLink {
  label: string;
  href: string;
}

interface ProvincesDropdownProps {
  provinceLinks: ProvinceLink[];
  onItemClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

const provinceIconMap: Record<string, LucideIcon> = {
  badakhshan: Gem,
  badghis: Compass,
  baghlan: Flame,
  balkh: Globe,
  bamyan: Mountain,
  daykundi: Landmark,
  farah: Compass,
  faryab: Compass,
  ghazni: Gem,
  ghor: Mountain,
  helmand: Flame,
  herat: Landmark,
  jowzjan: Globe,
  kabul: Landmark,
  kandahar: Crown,
  kapisa: Mountain,
  khost: Flame,
  kunar: Gem,
  kunduz: Globe,
  laghman: Mountain,
  logar: Flame,
  nangarhar: Compass,
  nimruz: Compass,
  nuristan: Gem,
  paktia: Mountain,
  paktika: Mountain,
  panjshir: Gem,
  parwan: Landmark,
  samangan: Globe,
  'sar-e-pol': Compass,
  takhar: Crown,
  uruzgan: Compass,
  wardak: Mountain,
  zabul: Crown,
};

const regions: { id: string; title: string; icon: LucideIcon; slugs: string[] }[] = [
  { id: 'north', title: 'North', icon: Compass, slugs: ['balkh', 'jowzjan', 'faryab', 'sar-e-pol', 'samangan'] },
  { id: 'northeast', title: 'Northeast', icon: Mountain, slugs: ['badakhshan', 'takhar', 'kunduz', 'baghlan'] },
  { id: 'central', title: 'Central', icon: Landmark, slugs: ['kabul', 'parwan', 'kapisa', 'panjshir', 'wardak', 'logar', 'bamyan', 'daykundi'] },
  { id: 'east', title: 'East', icon: Gem, slugs: ['nangarhar', 'laghman', 'kunar', 'nuristan'] },
  { id: 'southeast', title: 'Southeast', icon: Flame, slugs: ['khost', 'paktia', 'paktika', 'ghazni'] },
  { id: 'south', title: 'South', icon: Crown, slugs: ['kandahar', 'helmand', 'zabul', 'uruzgan'] },
  { id: 'west', title: 'West', icon: Globe, slugs: ['herat', 'farah', 'badghis', 'ghor', 'nimruz'] },
];

const slugOf = (href: string) => href.split('/').pop() || '';

const ProvincesDropdown = ({ provinceLinks, onItemClick }: ProvincesDropdownProps) => {
  const { t } = useLanguage();
  const assigned = new Set(regions.flatMap((region) => region.slugs));

  const toItem = (link: ProvinceLink): AccordionMenuLink => ({
    label: link.label,
    href: link.href,
    icon: provinceIconMap[slugOf(link.href)] || Mountain,
  });

  const sections = regions
    .map((region) => ({
      id: region.id,
      title: region.title,
      icon: region.icon,
      items: region.slugs
        .map((slug) => provinceLinks.find((link) => slugOf(link.href) === slug))
        .filter((link): link is ProvinceLink => Boolean(link))
        .map(toItem),
    }))
    .filter((section) => section.items.length > 0);

  const leftover = provinceLinks.filter((link) => !assigned.has(slugOf(link.href)));
  if (leftover.length > 0) {
    sections.push({
      id: 'other',
      title: 'Other Provinces',
      icon: Map,
      items: leftover.map(toItem),
    });
  }

  return (
    <AccordionMegaPanel
      title={t.navDropdowns.provinces.title}
      subtitle={t.navDropdowns.provinces.subtitle}
      headerIcon={Map}
      viewAll={{ label: t.navDropdowns.provinces.viewMap, href: '#map' }}
      sections={sections}
      onItemClick={onItemClick}
    />
  );
};

export default ProvincesDropdown;
