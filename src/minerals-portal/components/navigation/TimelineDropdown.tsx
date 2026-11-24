import { Calendar, Clock, TrendingUp, MapPin, Target, Award, Rocket, History, BookOpen, FileText, Archive, Scroll, Gem, Mountain, Users, Globe, Building2, Zap, Shield, Landmark, Coins, Hammer, Pickaxe, BarChart, Database, Layers, Compass, Camera, Image as ImageIcon, ScrollText, Map, Route, Ship, Crown, Pyramid, Feather, MapPinned, Activity, PieChart, TrendingDown, Calculator, Percent, DollarSign, Factory, Network, Scale } from 'lucide-react';
import { useLanguage } from '@/minerals-portal/contexts/LanguageContext';
import PortalMegaPanel from './PortalMegaPanel';


interface TimelineDropdownProps {
  onItemClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

// Shared helper to build the full set of timeline links.
// Used by both desktop mega menu and mobile navigation to ensure parity.
export const createTimelineLinks = (t: any) => [
    // MAIN HISTORICAL SECTIONS
    {
      label: t.navDropdowns.timeline.historical.label,
      href: '/timeline/historical',
      icon: Clock,
      description: t.navDropdowns.timeline.historical.description
    },
    {
      label: t.navDropdowns.timeline.ancientPeriod?.label ?? t.navDropdowns.timeline.historical.label,
      href: '/timeline/ancient-period',
      icon: History,
      description: t.navDropdowns.timeline.ancientPeriod?.description ?? t.navDropdowns.timeline.historical.description
    },
    {
      label: t.navDropdowns.timeline.ancientEgypt?.label ?? t.navDropdowns.timeline.historical.label,
      href: '/timeline/ancient-egypt',
      icon: Pyramid,
      description: t.navDropdowns.timeline.ancientEgypt?.description ?? t.navDropdowns.timeline.historical.description
    },
    {
      label: t.navDropdowns.timeline.silkRoad?.label ?? t.navDropdowns.timeline.historical.label,
      href: '/timeline/silk-road',
      icon: Route,
      description: t.navDropdowns.timeline.silkRoad?.description ?? t.navDropdowns.timeline.historical.description
    },
    {
      label: t.navDropdowns.timeline.medievalPeriod?.label ?? t.navDropdowns.timeline.historical.label,
      href: '/timeline/medieval-period',
      icon: Scroll,
      description: t.navDropdowns.timeline.medievalPeriod?.description ?? t.navDropdowns.timeline.historical.description
    },
    {
      label: t.navDropdowns.timeline.renaissance?.label ?? t.navDropdowns.timeline.historical.label,
      href: '/timeline/renaissance',
      icon: Feather,
      description: t.navDropdowns.timeline.renaissance?.description ?? t.navDropdowns.timeline.historical.description
    },
    {
      label: t.navDropdowns.timeline.colonialPeriod?.label ?? t.navDropdowns.timeline.historical.label,
      href: '/timeline/colonial-period',
      icon: Globe,
      description: t.navDropdowns.timeline.colonialPeriod?.description ?? t.navDropdowns.timeline.historical.description
    },
    {
      label: t.navDropdowns.timeline.britishSurveys?.label ?? t.navDropdowns.timeline.historical.label,
      href: '/timeline/british-surveys',
      icon: Compass,
      description: t.navDropdowns.timeline.britishSurveys?.description ?? t.navDropdowns.timeline.historical.description
    },
    {
      label: t.navDropdowns.timeline.russianSurveys?.label ?? t.navDropdowns.timeline.historical.label,
      href: '/timeline/russian-surveys',
      icon: Map,
      description: t.navDropdowns.timeline.russianSurveys?.description ?? t.navDropdowns.timeline.historical.description
    },
    {
      label: t.navDropdowns.timeline.sovietPeriod?.label ?? t.navDropdowns.timeline.historical.label,
      href: '/timeline/soviet-period',
      icon: Building2,
      description: t.navDropdowns.timeline.sovietPeriod?.description ?? t.navDropdowns.timeline.historical.description
    },
    {
      label: t.navDropdowns.timeline.sovietMapping?.label ?? t.navDropdowns.timeline.historical.label,
      href: '/timeline/soviet-mapping',
      icon: MapPinned,
      description: t.navDropdowns.timeline.sovietMapping?.description ?? t.navDropdowns.timeline.historical.description
    },
    {
      label: t.navDropdowns.timeline.modernEra?.label ?? t.navDropdowns.timeline.historical.label,
      href: '/timeline/modern-era',
      icon: Zap,
      description: t.navDropdowns.timeline.modernEra?.description ?? t.navDropdowns.timeline.historical.description
    },
    {
      label: t.navDropdowns.timeline.usgsSurveys?.label ?? t.navDropdowns.timeline.historical.label,
      href: '/timeline/usgs-surveys',
      icon: Database,
      description: t.navDropdowns.timeline.usgsSurveys?.description ?? t.navDropdowns.timeline.historical.description
    },
    // GEMSTONE & MINERAL SPECIFIC
    {
      label: t.navDropdowns.timeline.gemstoneHistory?.label ?? t.navDropdowns.timeline.historical.label,
      href: '/timeline/gemstone-history',
      icon: Gem,
      description: t.navDropdowns.timeline.gemstoneHistory?.description ?? t.navDropdowns.timeline.historical.description
    },
    {
      label: t.navDropdowns.timeline.lapisHistory?.label ?? t.navDropdowns.timeline.historical.label,
      href: '/timeline/lapis-history',
      icon: Gem,
      description: t.navDropdowns.timeline.lapisHistory?.description ?? t.navDropdowns.timeline.historical.description
    },
    {
      label: t.navDropdowns.timeline.emeraldHistory?.label ?? t.navDropdowns.timeline.historical.label,
      href: '/timeline/emerald-history',
      icon: Gem,
      description: t.navDropdowns.timeline.emeraldHistory?.description ?? t.navDropdowns.timeline.historical.description
    },
    {
      label: t.navDropdowns.timeline.rubyHistory?.label ?? t.navDropdowns.timeline.historical.label,
      href: '/timeline/ruby-history',
      icon: Gem,
      description: t.navDropdowns.timeline.rubyHistory?.description ?? t.navDropdowns.timeline.historical.description
    },
    {
      label: t.navDropdowns.timeline.goldHistory?.label ?? t.navDropdowns.timeline.historical.label,
      href: '/timeline/gold-history',
      icon: Coins,
      description: t.navDropdowns.timeline.goldHistory?.description ?? t.navDropdowns.timeline.historical.description
    },
    {
      label: t.navDropdowns.timeline.copperHistory?.label ?? t.navDropdowns.timeline.historical.label, // 'Copper Mining Legacy',
      href: '/timeline/copper-history',
      icon: Hammer,
      description: t.navDropdowns.timeline.copperHistory?.description ?? t.navDropdowns.timeline.historical.description
    },
    // TRADE & COMMERCE
    {
      label: t.navDropdowns.timeline.tradeRoutes?.label ?? t.navDropdowns.timeline.historical.label,
      href: '/timeline/trade-routes',
      icon: Globe,
      description: t.navDropdowns.timeline.tradeRoutes?.description ?? t.navDropdowns.timeline.historical.description
    },
    {
      label: t.navDropdowns.timeline.caravanRoutes?.label ?? t.navDropdowns.timeline.historical.label,
      href: '/timeline/caravan-routes',
      icon: Route,
      description: t.navDropdowns.timeline.caravanRoutes?.description ?? t.navDropdowns.timeline.historical.description
    },
    {
      label: t.navDropdowns.timeline.maritimeTrade?.label ?? t.navDropdowns.timeline.historical.label,
      href: '/timeline/maritime-trade',
      icon: Ship,
      description: t.navDropdowns.timeline.maritimeTrade?.description ?? t.navDropdowns.timeline.historical.description
    },
    // ARCHAEOLOGICAL & DOCUMENTATION
    {
      label: t.navDropdowns.timeline.archaeological?.label ?? t.navDropdowns.timeline.historical.label,
      href: '/timeline/archaeological',
      icon: Archive,
      description: t.navDropdowns.timeline.archaeological?.description ?? t.navDropdowns.timeline.historical.description
    },
    {
      label: t.navDropdowns.timeline.mesAynakArchaeology?.label ?? t.navDropdowns.timeline.historical.label,
      href: '/timeline/mes-aynak-archaeology',
      icon: Landmark,
      description: t.navDropdowns.timeline.mesAynakArchaeology?.description ?? t.navDropdowns.timeline.historical.description
    },
    {
      label: t.navDropdowns.timeline.documentation?.label ?? t.navDropdowns.timeline.historical.label,
      href: '/timeline/documentation',
      icon: BookOpen,
      description: t.navDropdowns.timeline.documentation?.description ?? t.navDropdowns.timeline.historical.description
    },
    {
      label: t.navDropdowns.timeline.ancientTexts?.label ?? t.navDropdowns.timeline.historical.label,
      href: '/timeline/ancient-texts',
      icon: ScrollText,
      description: t.navDropdowns.timeline.ancientTexts?.description ?? t.navDropdowns.timeline.historical.description
    },
    {
      label: t.navDropdowns.timeline.historicalMaps?.label ?? t.navDropdowns.timeline.historical.label,
      href: '/timeline/historical-maps',
      icon: Map,
      description: t.navDropdowns.timeline.historicalMaps?.description ?? t.navDropdowns.timeline.historical.description
    },
    {
      label: t.navDropdowns.timeline.museumCollections?.label ?? t.navDropdowns.timeline.historical.label,
      href: '/timeline/museum-collections',
      icon: Archive,
      description: t.navDropdowns.timeline.museumCollections?.description ?? t.navDropdowns.timeline.historical.description
    },
    // PROVINCIAL & REGIONAL
    {
      label: t.navDropdowns.timeline.provincial.label,
      href: '/timeline/provinces',
      icon: MapPin,
      description: t.navDropdowns.timeline.provincial.description
    },
    {
      label: t.navDropdowns.timeline.badakhshanHistory?.label ?? t.navDropdowns.timeline.historical.label, // 'Badakhshan Mining History',
      href: '/timeline/badakhshan-history',
      icon: Mountain,
      description: t.navDropdowns.timeline.badakhshanHistory?.description ?? t.navDropdowns.timeline.historical.description, // '6,000 years of lapis lazuli mining'
    },
    {
      label: t.navDropdowns.timeline.panjshirHistory?.label ?? t.navDropdowns.timeline.historical.label, // 'Panjshir Valley Heritage',
      href: '/timeline/panjshir-history',
      icon: Mountain,
      description: t.navDropdowns.timeline.panjshirHistory?.description ?? t.navDropdowns.timeline.historical.description, // 'Emerald mining tradition spanning millennia'
    },
    // DEVELOPMENT & FUTURE
    {
      label: t.navDropdowns.timeline.roadmap.label,
      href: '/timeline/roadmap',
      icon: TrendingUp,
      description: t.navDropdowns.timeline.roadmap.description
    },
    {
      label: t.navDropdowns.timeline.milestones.label,
      href: '/timeline/milestones',
      icon: Target,
      description: t.navDropdowns.timeline.milestones.description
    },
    {
      label: t.navDropdowns.timeline.achievements.label,
      href: '/timeline/achievements',
      icon: Award,
      description: t.navDropdowns.timeline.achievements.description
    },
    {
      label: t.navDropdowns.timeline.vision2030.label,
      href: '/timeline/vision-2040',
      icon: Rocket,
      description: t.navDropdowns.timeline.vision2030.description
    },
    // REPORTS & DATA
    {
      label: t.navDropdowns.timeline.reports.label,
      href: '/timeline/reports',
      icon: Calendar,
      description: t.navDropdowns.timeline.reports.description
    },
    {
      label: t.navDropdowns.timeline.annualReports?.label ?? t.navDropdowns.timeline.historical.label, // 'Annual Progress Reports',
      href: '/timeline/annual-reports',
      icon: FileText,
      description: t.navDropdowns.timeline.annualReports?.description ?? t.navDropdowns.timeline.historical.description, // 'Yearly mining development reports'
    },
    {
      label: t.navDropdowns.timeline.dataReports?.label ?? t.navDropdowns.timeline.historical.label, // 'Historical Data Reports',
      href: '/timeline/data-reports',
      icon: BarChart,
      description: t.navDropdowns.timeline.dataReports?.description ?? t.navDropdowns.timeline.historical.description, // 'Comprehensive historical mining data'
    },
    {
      label: t.navDropdowns.timeline.statisticalAnalysis?.label ?? t.navDropdowns.timeline.historical.label, // 'Statistical Analysis',
      href: '/timeline/statistical-analysis',
      icon: BarChart,
      description: t.navDropdowns.timeline.statisticalAnalysis?.description ?? t.navDropdowns.timeline.historical.description, // 'Historical mining statistics and trends'
    },
    // IMAGE GALLERIES
  ];


// Group timeline links into categories for cleaner display
const groupTimelineLinks = (links: ReturnType<typeof createTimelineLinks>) => {
  const categoryMap: Record<string, { title: string; icon: typeof Calendar; hrefs: string[] }> = {
    eras: { title: 'Historical Eras', icon: History, hrefs: ['/timeline/historical','/timeline/ancient-period','/timeline/medieval-period','/timeline/colonial-period','/timeline/soviet-period','/timeline/modern-era'] },
    ancient: { title: 'Ancient World', icon: Pyramid, hrefs: ['/timeline/ancient-egypt','/timeline/silk-road','/timeline/renaissance','/timeline/british-surveys','/timeline/russian-surveys'] },
    surveys: { title: 'Geological Surveys', icon: Compass, hrefs: ['/timeline/usgs-surveys','/timeline/soviet-mapping'] },
    minerals: { title: 'Mineral Heritage', icon: Gem, hrefs: ['/timeline/gemstone-history','/timeline/lapis-history','/timeline/emerald-history','/timeline/ruby-history','/timeline/gold-history','/timeline/copper-history','/timeline/iron-history','/timeline/lithium-history','/timeline/coal-history','/timeline/marble-history','/timeline/chromite-history','/timeline/rare-earth-history'] },
    trade: { title: 'Trade & Commerce', icon: Globe, hrefs: ['/timeline/trade-routes','/timeline/caravan-routes','/timeline/maritime-trade'] },
    arch: { title: 'Archaeological', icon: Landmark, hrefs: ['/timeline/archaeological','/timeline/mes-aynak-archaeology','/timeline/documentation','/timeline/ancient-texts','/timeline/historical-maps','/timeline/museum-collections'] },
    dev: { title: 'Development & Vision', icon: Rocket, hrefs: ['/timeline/roadmap','/timeline/milestones','/timeline/achievements','/timeline/vision-2040','/timeline/provinces'] },
    regional: { title: 'Regional History', icon: Mountain, hrefs: ['/timeline/badakhshan-history','/timeline/panjshir-history','/timeline/cultural-heritage','/timeline/royal-collections'] },
    reports: { title: 'Reports', icon: BarChart, hrefs: ['/timeline/reports','/timeline/annual-reports','/timeline/data-reports'] },
  };
  
  return Object.values(categoryMap).map(cat => ({
    ...cat,
    links: links.filter(l => cat.hrefs.includes(l.href))
  })).filter(g => g.links.length > 0);
};

const TimelineDropdown = ({ onItemClick }: TimelineDropdownProps) => {
  const { t } = useLanguage();
  const timelineLinks = createTimelineLinks(t);
  const groups = groupTimelineLinks(timelineLinks);
  
  return (
    <PortalMegaPanel
      icon={Calendar}
      title={t.navDropdowns.timeline.title}
      subtitle={t.navDropdowns.timeline.subtitle}
      viewAll={{ label: t.navDropdowns.timeline.viewComplete, href: "/timeline" }}
      columns={4}
      onItemClick={onItemClick}
      groups={groups.map((group) => ({
        title: group.title,
        links: group.links.map((link) => ({ label: link.label, href: link.href })),
      }))}
    />
  );
};

export default TimelineDropdown;
