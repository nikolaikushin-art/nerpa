import { Factory, Compass, Scale, Leaf, Globe, Pickaxe, LucideIcon } from 'lucide-react';
import { useLanguage } from '@/minerals-portal/contexts/LanguageContext';
import AccordionMegaPanel from './AccordionMegaPanel';

interface OperationLink {
  label: string;
  href: string;
  icon: LucideIcon;
  description?: string;
}

interface OperationsDropdownProps {
  operationsLinks: OperationLink[];
  onItemClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

const groups: { id: string; title: string; icon: LucideIcon; hrefs: string[] }[] = [
  { id: 'production', title: 'Production', icon: Factory, hrefs: ['/operations/processing', '/operations/smelting'] },
  { id: 'field', title: 'Exploration & Research', icon: Compass, hrefs: ['/operations/research', '/operations/geological'] },
  { id: 'markets', title: 'Trade & Investment', icon: Scale, hrefs: ['/operations/trade', '/operations/investment'] },
  { id: 'stewardship', title: 'People & Environment', icon: Leaf, hrefs: ['/operations/sustainability', '/operations/community', '/operations/safety'] },
  { id: 'digital', title: 'Digital Systems', icon: Globe, hrefs: ['/operations/digital'] },
];

const OperationsDropdown = ({ operationsLinks, onItemClick }: OperationsDropdownProps) => {
  const { t } = useLanguage();
  const assigned = new Set(groups.flatMap((group) => group.hrefs));

  const sections = groups
    .map((group) => ({
      id: group.id,
      title: group.title,
      icon: group.icon,
      items: group.hrefs
        .map((href) => operationsLinks.find((link) => link.href === href))
        .filter((link): link is OperationLink => Boolean(link))
        .map((link) => ({ label: link.label, href: link.href, icon: link.icon })),
    }))
    .filter((section) => section.items.length > 0);

  const leftover = operationsLinks.filter((link) => !assigned.has(link.href));
  if (leftover.length > 0) {
    sections.push({
      id: 'more',
      title: 'More Operations',
      icon: Pickaxe,
      items: leftover.map((link) => ({ label: link.label, href: link.href, icon: link.icon })),
    });
  }

  return (
    <AccordionMegaPanel
      title={t.navDropdowns.operations.title}
      subtitle={t.navDropdowns.operations.subtitle}
      headerIcon={Pickaxe}
      viewAll={{ label: t.navDropdowns.operations.viewAll, href: '/operations' }}
      sections={sections}
      onItemClick={onItemClick}
    />
  );
};

export default OperationsDropdown;
