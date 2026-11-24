import { DollarSign, FileText, Handshake, TrendingUp, Shield, Globe, Building2, Briefcase, Scale, Users, Zap, Target, ChevronRight, Lock, Award } from 'lucide-react';
import { useLanguage } from '@/minerals-portal/contexts/LanguageContext';

interface InvestmentDropdownProps {
  onItemClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

const investmentGroups = [
  {
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
    <div 
      className="fixed left-4 right-4 top-[7.25rem] z-40 max-h-[calc(100vh-7.25rem-7rem)] overflow-y-auto rounded-xl border border-border/50 bg-background/98 backdrop-blur-xl shadow-2xl animate-fade-in"
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-amber to-primary" />
      
      <div className="p-8">
        <div className="flex items-center gap-4 mb-6 pb-4 border-b border-border/50">
          <div className="p-3 rounded-xl bg-primary/10">
            <DollarSign className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-body font-bold text-foreground">{t.navDropdowns.investment.title}</h3>
            <p className="text-sm font-body text-foreground">{t.navDropdowns.investment.subtitle}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-4">
          {investmentGroups.map((group) => (
            <div key={group.title} className="space-y-1">
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-border/30">
                <group.icon className="h-4 w-4 text-primary" />
                <h4 className="font-body text-xs font-bold uppercase tracking-[0.15em] text-primary">{group.title}</h4>
                <span className="ml-auto font-body text-[10px] text-foreground/40">{group.links.length}</span>
              </div>
              <div className="space-y-1">
                {group.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      onItemClick(e, link.href);
                    }}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/5 transition-all group"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <link.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-body font-semibold text-foreground group-hover:text-primary transition-colors">
                        {link.label}
                      </h4>
                    </div>
                    <ChevronRight className="h-3.5 w-3.5 text-foreground/20 group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-border/50 flex items-center justify-between">
          <a
            href="/investment"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onItemClick(e, '/investment');
            }}
            className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            <DollarSign className="h-4 w-4" />
            {t.navDropdowns.investment.viewComplete} →
          </a>
          <div className="text-xs font-body text-foreground">
            {t.navDropdowns.investment.clickToExplore}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentDropdown;