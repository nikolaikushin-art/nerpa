import { Link } from 'react-router-dom';
import { useLanguage } from '@/minerals-portal/contexts/LanguageContext';
import {
  Mountain, MapPin, Cog, TrendingUp, Mail, Clock, ChevronRight
} from 'lucide-react';

const FooterMegaMenu = () => {
  // Hooks must be called at the top level - cannot be inside try-catch
  const { t } = useLanguage();

  // Safely get translation with fallbacks
  const getTranslation = (path: string, fallback: string) => {
    try {
      if (!t) return fallback;
      const keys = path.split('.');
      let value: any = t;
      for (const key of keys) {
        if (value === undefined || value === null) return fallback;
        value = value[key];
      }
      return value || fallback;
    } catch {
      return fallback;
    }
  };

  const footerSections = [
    {
      title: t?.nav?.minerals || 'Minerals',
      icon: Mountain,
      links: [
        { label: t?.mineralsMegaMenu?.strategicMetals?.copper?.title || 'Copper', href: '/minerals/copper' },
        { label: t?.mineralsMegaMenu?.strategicMetals?.lithium?.title || 'Lithium', href: '/minerals/lithium' },
        { label: t?.mineralsMegaMenu?.strategicMetals?.ironOre?.title || 'Iron Ore', href: '/minerals/iron' },
        { label: t?.mineralsMegaMenu?.preciousResources?.gold?.title || 'Gold', href: '/minerals/gold' },
      ],
    },
    {
      title: t?.nav?.provinces || 'Provinces',
      icon: MapPin,
      links: [
        { label: t?.navDropdowns?.provinces?.logar || 'Logar', href: '/provinces/logar' },
        { label: t?.navDropdowns?.provinces?.badakhshan || 'Badakhshan', href: '/provinces/badakhshan' },
        { label: t?.navDropdowns?.provinces?.bamyan || 'Bamyan', href: '/provinces/bamyan' },
        { label: t?.navDropdowns?.provinces?.panjshir || 'Panjshir', href: '/provinces/panjshir' },
      ],
    },
    {
      title: t?.nav?.operations || 'Operations',
      icon: Cog,
      links: [
        { label: t?.navDropdowns?.operations?.processing?.label || 'Processing & Refining', href: '/operations/processing' },
        { label: t?.navDropdowns?.operations?.smelting?.label || 'Smelting Operations', href: '/operations/smelting' },
        { label: t?.navDropdowns?.operations?.research?.label || 'Research & Exploration', href: '/operations/research' },
        { label: t?.navDropdowns?.operations?.geological?.label || 'Geological Survey', href: '/operations/geological' },
      ],
    },
    {
      title: t?.nav?.investment || 'Investment',
      icon: TrendingUp,
      links: [
        { label: t?.navDropdowns?.investment?.framework?.label || 'Investment Framework', href: '/investment/framework' },
        { label: t?.navDropdowns?.investment?.opportunities?.label || 'Investment Opportunities', href: '/investment/opportunities' },
        { label: t?.navDropdowns?.investment?.partnerships?.label || 'Partnerships', href: '/investment/partnerships' },
        { label: t?.navDropdowns?.investment?.incentives?.label || 'Incentives', href: '/investment/incentives' },
      ],
    },
    {
      title: t?.nav?.timeline || 'Timeline',
      icon: Clock,
      links: [
        { label: t?.navDropdowns?.timeline?.historical?.label || 'Historical Timeline', href: '/timeline/historical' },
        { label: t?.navDropdowns?.timeline?.roadmap?.label || 'Development Roadmap', href: '/timeline/roadmap' },
        { label: t?.navDropdowns?.timeline?.milestones?.label || 'Project Milestones', href: '/timeline/milestones' },
        { label: t?.navDropdowns?.timeline?.vision2030?.label || 'Vision 2026-2040', href: '/timeline/vision-2040' },
      ],
    },
    {
      title: t?.nav?.contact || 'Contact',
      icon: Mail,
      links: [
        { label: t?.navDropdowns?.contact?.form?.label || 'Contact Form', href: '#contact' },
        { label: t?.navDropdowns?.contact?.offices?.label || 'Office Locations', href: '/contact/offices' },
        { label: t?.navDropdowns?.contact?.email?.label || 'Email', href: '/contact/email' },
        { label: t?.navDropdowns?.contact?.phone?.label || 'Phone', href: '/contact/phone' },
      ],
    },
  ];

  if (!footerSections || footerSections.length === 0) {
    return null;
  }

  return (
    <footer className="w-full bg-gradient-to-b from-background via-secondary/20 to-background border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {footerSections.map((section, index) => {
            if (!section || !section.icon) return null;
            const Icon = section.icon;
            return (
              <div key={index} className="space-y-4">
                <div className="flex items-center gap-2">
                  <Icon className="h-5 w-5 text-primary" />
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {section.title || 'Section'}
                  </h3>
                </div>
                {section.links && Array.isArray(section.links) && (
                  <ul className="space-y-2">
                    {section.links.map((link, linkIndex) => {
                      if (!link) return null;
                      return (
                        <li key={linkIndex}>
                          <Link
                            to={link.href || '#'}
                            className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                          >
                            <ChevronRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                            <span>{link.label || 'Link'}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-16 border-t border-border/30 pt-12 text-center">
          <p className="font-display text-2xl font-light italic leading-relaxed text-foreground md:text-3xl">
            {getTranslation('footer.quote', 'A nation\'s strength is measured not by what it endures, but by what it builds.')}
          </p>
        </div>

        <div className="mt-12 border-t border-border/30 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              {getTranslation('footer.copyright', '© 2024 National Economic Reform Programme of Afghanistan')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterMegaMenu;
