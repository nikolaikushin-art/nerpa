import { DollarSign, FileText, Handshake, TrendingUp, Shield, Globe, Building2, Briefcase, Scale, Users, Zap, Target, Award, LucideIcon } from 'lucide-react';
import { useLanguage } from '@/minerals-portal/contexts/LanguageContext';
import AccordionMegaPanel from './AccordionMegaPanel';

interface InvestmentDropdownProps {
  onItemClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

const investmentGroups: {
  id: string;
  title: string;
  icon: LucideIcon;
  links: { label: string; href: string; icon: LucideIcon }[];
}[] = [
  {
    id: 'legal',
    title: 'Legal & Regulatory',
    icon: Scale,
    links: [
      { label: 'Investment Framework', href: '/investment/framework', icon: FileText },
      { label: 'Fiscal Terms & Revenue', href: '/investment/fiscal-terms', icon: DollarSign },
      { label: 'Dispute Resolution', href: '/investment/dispute-resolution', icon: Shield },
      { label: 'Risk Management', href: '/investment/risk-management', icon: Shield },
    ],
  },
  {
    id: 'opportunities',
    title: 'Opportunities & Partnerships',
    icon: Briefcase,
    links: [
      { label: 'Investment Opportunities', href: '/investment/opportunities', icon: Briefcase },
      { label: 'Partnership Models', href: '/investment/partnerships', icon: Handshake },
      { label: 'Financial Incentives', href: '/investment/incentives', icon: TrendingUp },
      { label: 'International Partners', href: '/investment/partners', icon: Globe },
    ],
  },
  {
    id: 'process',
    title: 'Process & Support',
    icon: Building2,
    links: [
      { label: 'Investment Process', href: '/investment/process', icon: Building2 },
      { label: 'Due Diligence & Assessment', href: '/investment/due-diligence', icon: Target },
      { label: 'Infrastructure Support', href: '/investment/infrastructure-support', icon: TrendingUp },
      { label: 'Investment Statistics', href: '/investment/statistics', icon: DollarSign },
    ],
  },
  {
    id: 'impact',
    title: 'Development & Impact',
    icon: Users,
    links: [
      { label: 'Workforce Development', href: '/investment/workforce-development', icon: Users },
      { label: 'Community Benefit', href: '/investment/community-benefit', icon: Award },
      { label: 'Environmental Compliance', href: '/investment/environmental-compliance', icon: Shield },
      { label: 'Mining Technology', href: '/investment/technology-innovation', icon: Zap },
    ],
  },
];

const InvestmentDropdown = ({ onItemClick }: InvestmentDropdownProps) => {
  const { t } = useLanguage();

  return (
    <AccordionMegaPanel
      title={t.navDropdowns.investment.title}
      subtitle={t.navDropdowns.investment.subtitle}
      headerIcon={DollarSign}
      viewAll={{ label: t.navDropdowns.investment.viewComplete, href: '/investment' }}
      sections={investmentGroups.map((group) => ({
        id: group.id,
        title: group.title,
        icon: group.icon,
        items: group.links,
      }))}
      onItemClick={onItemClick}
    />
  );
};

export default InvestmentDropdown;
