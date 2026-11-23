import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Pickaxe, Wheat, Zap, Heart, GraduationCap, Cpu, Building2, CreditCard,
  Droplets, Home, ChevronRight, TrendingUp, Calculator, Calendar, BarChart3, Mail,
  Database, Network, BookOpen, Handshake, FileText, Map, Target, Users,
  Eye, Search, Gem, MapPin, Compass, Navigation, Factory, Globe,
  Shield, Landmark, Award, Briefcase, Truck, Palette, Scale,
  Leaf, Sun, Ship, Train, Wifi, FlaskConical, Rocket, CircuitBoard,
  DollarSign, LineChart, PieChart, Activity, Layers, ArrowUpRight,
  Sparkles, Crown, Star, Hexagon, Diamond, Flame, Orbit, Workflow
} from "lucide-react";

interface MegaMenuProps {
  activeMenu: string | null;
  onClose: () => void;
}

// ─── SECTORS MENU ───────────────────────────────────────────────
const sectorsData = {
  title: "Economic Sectors",
  subtitle: "10 Core Development Pillars",
  items: [
    { label: "Mining & Minerals", href: "/sector/mining", icon: Pickaxe, desc: "$30T+ mineral reserves", tag: "Strategic", tagColor: "bg-amber-500/20 text-amber-400" },
    { label: "Agriculture & Food", href: "/sector/agriculture", icon: Wheat, desc: "#1 saffron producer globally", tag: "Priority", tagColor: "bg-green-500/20 text-green-400" },
    { label: "Energy & Power", href: "/sector/energy", icon: Zap, desc: "5GW renewable capacity target", tag: "Growth", tagColor: "bg-yellow-500/20 text-yellow-400" },
    { label: "Healthcare Systems", href: "/sector/healthcare", icon: Heart, desc: "500+ health centres nationwide", tag: "Essential", tagColor: "bg-red-500/20 text-red-400" },
    { label: "Education Excellence", href: "/sector/education", icon: GraduationCap, desc: "10M students enrollment target", tag: "Foundation", tagColor: "bg-indigo-500/20 text-indigo-400" },
    { label: "Technology & AI", href: "/sector/technology", icon: Cpu, desc: "50K digital jobs pipeline", tag: "Innovation", tagColor: "bg-violet-500/20 text-violet-400" },
    { label: "Infrastructure", href: "/sector/infrastructure", icon: Building2, desc: "10,000km road network", tag: "Mega", tagColor: "bg-slate-500/20 text-slate-400" },
    { label: "Banking & Finance", href: "/sector/finance", icon: CreditCard, desc: "80% financial inclusion goal", tag: "Fintech", tagColor: "bg-emerald-500/20 text-emerald-400" },
    { label: "Water Management", href: "/sector/water", icon: Droplets, desc: "20+ dams & reservoirs", tag: "Critical", tagColor: "bg-blue-500/20 text-blue-400" },
    { label: "Housing & Urban", href: "/sector/housing", icon: Home, desc: "100K homes development", tag: "Urban", tagColor: "bg-orange-500/20 text-orange-400" },
  ],
  highlights: [
    { value: "$30T+", label: "Mineral Wealth" },
    { value: "10", label: "Core Sectors" },
    { value: "2040", label: "Vision Target" },
  ]
};

// ─── INVEST MENU ────────────────────────────────────────────────
const investData = {
  title: "Investment Gateway",
  subtitle: "Strategic Opportunities & Returns",
  items: [
    { label: "Strategic Industries", href: "/industries", icon: Crown, desc: "Premium tier-1 opportunities with guaranteed frameworks", tag: "Premium", tagColor: "bg-amber-500/20 text-amber-400" },
    { label: "Manufacturing Hub", href: "/manufacturing", icon: Factory, desc: "50+ industrial zones across 12 provinces", tag: "Scale", tagColor: "bg-orange-500/20 text-orange-400" },
    { label: "PPP Infrastructure", href: "/sector/infrastructure", icon: Building2, desc: "Airports, railways & highway mega-projects", tag: "PPP", tagColor: "bg-slate-500/20 text-slate-400" },
    { label: "Agri-Business Export", href: "/sector/agriculture", icon: Leaf, desc: "Export-grade saffron, nuts & dried fruits", tag: "Export", tagColor: "bg-green-500/20 text-green-400" },
    { label: "Mining Concessions", href: "/sector/mining", icon: Gem, desc: "Lithium, copper & rare earth extraction rights", tag: "Trillion$", tagColor: "bg-purple-500/20 text-purple-400" },
    { label: "Renewable Energy", href: "/sector/energy", icon: Sun, desc: "Solar, wind & hydro project financing", tag: "Green", tagColor: "bg-yellow-500/20 text-yellow-400" },
    { label: "Real Estate & Urban", href: "/sector/housing", icon: Home, desc: "Smart city & mixed-use developments", tag: "Urban", tagColor: "bg-blue-500/20 text-blue-400" },
    { label: "Digital Economy", href: "/sector/technology", icon: CircuitBoard, desc: "Tech startups & innovation ecosystem", tag: "Tech", tagColor: "bg-violet-500/20 text-violet-400" },
    { label: "Healthcare Ventures", href: "/sector/healthcare", icon: Heart, desc: "Hospital chains & pharma manufacturing", tag: "Impact", tagColor: "bg-red-500/20 text-red-400" },
    { label: "Contact Investment Team", href: "/contact", icon: Mail, desc: "Direct line to our investment advisors", tag: "Connect", tagColor: "bg-rose-500/20 text-rose-400" },
  ],
  highlights: [
    { value: "15-40%", label: "Projected ROI" },
    { value: "$50B+", label: "Pipeline Value" },
    { value: "100+", label: "Active Projects" },
  ]
};

// ─── EXPLORE MENU ───────────────────────────────────────────────
const exploreData = {
  title: "Discover Afghanistan",
  subtitle: "Interactive Exploration & Insights",
  items: [
    { label: "34 Provinces Atlas", href: "/provinces", icon: Globe, desc: "Complete regional investment atlas with demographics", tag: "Atlas", tagColor: "bg-blue-500/20 text-blue-400" },
    { label: "Sector Explorer", href: "/explorer", icon: Search, desc: "50+ filterable sectors with live data", tag: "Interactive", tagColor: "bg-purple-500/20 text-purple-400" },
    { label: "Transport Networks", href: "/sector/infrastructure", icon: Truck, desc: "Roads, airports & trade corridor mapping", tag: "Logistics", tagColor: "bg-sky-500/20 text-sky-400" },
    { label: "Industrial Zones Map", href: "/manufacturing", icon: Factory, desc: "Manufacturing hubs & special economic zones", tag: "SEZ", tagColor: "bg-orange-500/20 text-orange-400" },
    { label: "Cultural Heritage", href: "/#sectors", icon: Palette, desc: "5 UNESCO sites & ancient civilisations", tag: "Heritage", tagColor: "bg-amber-500/20 text-amber-400" },
    { label: "Business Environment", href: "/industries", icon: Briefcase, desc: "Enterprise climate & regulatory framework", tag: "Business", tagColor: "bg-emerald-500/20 text-emerald-400" },
    { label: "National Vision 2040", href: "/vision", icon: Eye, desc: "NERPA strategic transformation roadmap", tag: "Vision", tagColor: "bg-indigo-500/20 text-indigo-400" },
    { label: "Governance Framework", href: "/governance", icon: Landmark, desc: "Institutional reform & transparency", tag: "Reform", tagColor: "bg-slate-500/20 text-slate-400" },
  ],
  highlights: [
    { value: "34", label: "Provinces" },
    { value: "60+", label: "Sectors" },
    { value: "5", label: "UNESCO Sites" },
  ]
};

// ─── TOOLS MENU ─────────────────────────────────────────────────
const toolsData = {
  title: "Interactive Tools",
  subtitle: "Data-Driven Decision Making",
  items: [
    { label: "ROI Calculator", href: "/calculator", icon: Calculator, desc: "Project investment returns with sector-specific models", tag: "Finance", tagColor: "bg-green-500/20 text-green-400" },
    { label: "Development Timeline", href: "/timeline", icon: Calendar, desc: "7-phase 2025-2040 transformation tracker", tag: "Roadmap", tagColor: "bg-purple-500/20 text-purple-400" },
    { label: "Live Economic Dashboard", href: "/dashboard", icon: Activity, desc: "Real-time GDP, trade & investment metrics", tag: "Live", tagColor: "bg-blue-500/20 text-blue-400" },
    { label: "Infrastructure Atlas", href: "/provinces", icon: Map, desc: "Province-level project mapping & filtering", tag: "Map", tagColor: "bg-teal-500/20 text-teal-400" },
    { label: "Sector Intelligence", href: "/explorer", icon: PieChart, desc: "Comparative analysis across 50+ sectors", tag: "Intel", tagColor: "bg-indigo-500/20 text-indigo-400" },
    { label: "Investment Inquiry", href: "/contact", icon: Mail, desc: "Submit proposals & request consultations", tag: "Action", tagColor: "bg-rose-500/20 text-rose-400" },
  ],
  highlights: [
    { value: "6", label: "Tools" },
    { value: "Real-time", label: "Data" },
    { value: "50+", label: "Metrics" },
  ]
};

// ─── RESOURCES MENU ─────────────────────────────────────────────
const resourcesData = {
  title: "Knowledge & Research",
  subtitle: "Reports, Policies & Intelligence",
  items: [
    { label: "Publications Library", href: "/publications", icon: BookOpen, desc: "Research papers, white papers & annual reports", tag: "Research", tagColor: "bg-cyan-500/20 text-cyan-400" },
    { label: "Resource Centre", href: "/resource", icon: Database, desc: "Downloadable documents, datasets & guides", tag: "Library", tagColor: "bg-teal-500/20 text-teal-400" },
    { label: "Policy Frameworks", href: "/publications", icon: Shield, desc: "Government regulations & compliance guides", tag: "Policy", tagColor: "bg-slate-500/20 text-slate-400" },
    { label: "Sector Investment Guides", href: "/resource", icon: Target, desc: "Detailed opportunity briefs per industry", tag: "Guides", tagColor: "bg-amber-500/20 text-amber-400" },
    { label: "NERPA Vision Document", href: "/vision", icon: Eye, desc: "Complete national strategic roadmap 2026-2040", tag: "Vision", tagColor: "bg-indigo-500/20 text-indigo-400" },
    { label: "Governance Reports", href: "/governance", icon: Scale, desc: "Institutional reform progress & benchmarks", tag: "Governance", tagColor: "bg-emerald-500/20 text-emerald-400" },
  ],
  highlights: [
    { value: "200+", label: "Documents" },
    { value: "10", label: "Sectors Covered" },
    { value: "Updated", label: "Quarterly" },
  ]
};

// ─── PARTNERSHIP MENU ───────────────────────────────────────────
const partnershipData = {
  title: "Partnership & Engagement",
  subtitle: "Global Collaboration Network",
  items: [
    { label: "Global Partnership Hub", href: "/engagement", icon: Handshake, desc: "Bilateral & multilateral collaboration channels", tag: "Global", tagColor: "bg-blue-500/20 text-blue-400" },
    { label: "Consortium Network", href: "/consortium", icon: Network, desc: "Partner organisations & advisory board", tag: "Network", tagColor: "bg-indigo-500/20 text-indigo-400" },
    { label: "Investor Relations", href: "/contact", icon: Mail, desc: "Direct engagement with investment division", tag: "Invest", tagColor: "bg-rose-500/20 text-rose-400" },
    { label: "Development Partners", href: "/#sectors", icon: Users, desc: "International org & NGO directory", tag: "Partners", tagColor: "bg-emerald-500/20 text-emerald-400" },
    { label: "News & Developments", href: "/#sectors", icon: Sparkles, desc: "Latest project milestones & announcements", tag: "News", tagColor: "bg-amber-500/20 text-amber-400" },
    { label: "Join Initiatives", href: "/#engagement", icon: Rocket, desc: "Volunteer, mentor & programme participation", tag: "Engage", tagColor: "bg-violet-500/20 text-violet-400" },
  ],
  highlights: [
    { value: "50+", label: "Partners" },
    { value: "12", label: "Countries" },
    { value: "Active", label: "Programmes" },
  ]
};

// ─── REGIONS DATA ───────────────────────────────────────────────
const regionsData = {
  title: "All 34 Provinces of Afghanistan",
  regions: [
    {
      name: "Central Region",
      icon: Compass,
      count: 9,
      provinces: [
        { label: "Kabul", href: "/province/kabul", desc: "Capital • 4.6M • 120 projects" },
        { label: "Ghazni", href: "/province/ghazni", desc: "Lithium Hub • 1.3M • 35 projects" },
        { label: "Wardak", href: "/province/wardak", desc: "Agriculture • 650K • 20 projects" },
        { label: "Logar", href: "/province/logar", desc: "Copper • 450K • 45 projects" },
        { label: "Parwan", href: "/province/parwan", desc: "Economic Zone • 750K • 30 projects" },
        { label: "Kapisa", href: "/province/kapisa", desc: "Agriculture • 500K • 18 projects" },
        { label: "Bamyan", href: "/province/bamyan", desc: "Heritage • 500K • 38 projects" },
        { label: "Panjshir", href: "/province/panjshir", desc: "Emeralds • 180K • 15 projects" },
        { label: "Daikundi", href: "/province/daikundi", desc: "Highlands • 500K • 14 projects" },
      ]
    },
    {
      name: "North Region",
      icon: Navigation,
      count: 9,
      provinces: [
        { label: "Balkh", href: "/province/balkh", desc: "Industrial • 1.5M • 48 projects" },
        { label: "Kunduz", href: "/province/kunduz", desc: "Agriculture • 1.1M • 35 projects" },
        { label: "Baghlan", href: "/province/baghlan", desc: "Energy • 1.0M • 32 projects" },
        { label: "Takhar", href: "/province/takhar", desc: "Northeast • 1.1M • 28 projects" },
        { label: "Badakhshan", href: "/province/badakhshan", desc: "Gems • 1.0M • 28 projects" },
        { label: "Faryab", href: "/province/faryab", desc: "Carpets • 1.1M • 25 projects" },
        { label: "Jowzjan", href: "/province/jowzjan", desc: "Gas • 600K • 22 projects" },
        { label: "Samangan", href: "/province/samangan", desc: "Heritage • 450K • 18 projects" },
        { label: "Sar-e-Pol", href: "/province/sar-e-pol", desc: "Coal • 600K • 15 projects" },
      ]
    },
    {
      name: "West Region",
      icon: Compass,
      count: 5,
      provinces: [
        { label: "Herat", href: "/province/herat", desc: "Trade Hub • 2.1M • 65 projects" },
        { label: "Ghor", href: "/province/ghor", desc: "Heritage • 750K • 16 projects" },
        { label: "Badghis", href: "/province/badghis", desc: "Pistachios • 550K • 18 projects" },
        { label: "Farah", href: "/province/farah", desc: "Solar • 550K • 22 projects" },
        { label: "Nimroz", href: "/province/nimroz", desc: "Border Trade • 200K • 20 projects" },
      ]
    },
    {
      name: "South Region",
      icon: Navigation,
      count: 4,
      provinces: [
        { label: "Kandahar", href: "/province/kandahar", desc: "Pomegranates • 1.4M • 55 projects" },
        { label: "Helmand", href: "/province/helmand", desc: "Breadbasket • 1.0M • 38 projects" },
        { label: "Zabul", href: "/province/zabul", desc: "Livestock • 350K • 15 projects" },
        { label: "Uruzgan", href: "/province/uruzgan", desc: "Agriculture • 400K • 14 projects" },
      ]
    },
    {
      name: "East Region",
      icon: Compass,
      count: 7,
      provinces: [
        { label: "Nangarhar", href: "/province/nangarhar", desc: "Trade Corridor • 1.7M • 52 projects" },
        { label: "Paktya", href: "/province/paktya", desc: "Forestry • 600K • 22 projects" },
        { label: "Paktika", href: "/province/paktika", desc: "Border Zone • 500K • 18 projects" },
        { label: "Khost", href: "/province/khost", desc: "Commerce • 650K • 24 projects" },
        { label: "Kunar", href: "/province/kunar", desc: "Hydro • 500K • 20 projects" },
        { label: "Laghman", href: "/province/laghman", desc: "Citrus • 500K • 18 projects" },
        { label: "Nuristan", href: "/province/nuristan", desc: "Eco-Tourism • 170K • 12 projects" },
      ]
    },
  ]
};

const menuDataMap: Record<string, { title: string; subtitle: string; items: any[]; highlights: { value: string; label: string }[] }> = {
  sectors: sectorsData,
  invest: investData,
  explore: exploreData,
  tools: toolsData,
  resources: resourcesData,
  partnership: partnershipData,
};

// ─── STANDARD MENU ITEM ─────────────────────────────────────────
const MenuItem = ({ item, onClose, index }: { item: any; onClose: () => void; index: number }) => {
  const Icon = item.icon;
  const isHash = item.href.startsWith("/#");
  const Comp = isHash ? "a" : Link;
  const props = isHash ? { href: item.href } : { to: item.href };
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.03, duration: 0.2 }}
    >
      <Comp
        {...(props as any)}
        onClick={onClose}
        className="group flex flex-col gap-2.5 p-3.5 rounded-xl hover:bg-white/[0.06] transition-all duration-250 border border-transparent hover:border-white/[0.08] cursor-pointer relative overflow-hidden"
      >
        {/* Subtle glow on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
        
        <div className="flex items-center gap-3 relative z-10">
          <div className="w-9 h-9 rounded-xl bg-white/[0.04] group-hover:bg-primary/15 flex items-center justify-center flex-shrink-0 transition-all duration-250 border border-white/[0.06] group-hover:border-primary/20">
            <Icon className="w-4 h-4 text-white/50 group-hover:text-primary transition-colors duration-250" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <p className="text-sm font-medium text-white/80 group-hover:text-white truncate transition-colors">{item.label}</p>
              {item.tag && (
                <span className={`text-[9px] font-semibold px-1.5 py-0.5 rounded-full ${item.tagColor} flex-shrink-0`}>
                  {item.tag}
                </span>
              )}
            </div>
          </div>
          <ArrowUpRight className="w-3 h-3 text-white/0 group-hover:text-white/40 transition-all duration-250 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0" />
        </div>
        <p className="text-[11px] text-white/35 group-hover:text-white/50 line-clamp-1 pl-12 relative z-10 transition-colors">{item.desc}</p>
      </Comp>
    </motion.div>
  );
};

// ─── PROVINCE ITEM ──────────────────────────────────────────────
const ProvinceItem = ({ item, onClose }: { item: { label: string; href: string; desc: string }; onClose: () => void }) => {
  return (
    <Link
      to={item.href}
      onClick={onClose}
      className="group flex flex-col gap-1 p-2.5 rounded-lg hover:bg-white/[0.06] transition-all duration-200 border border-transparent hover:border-white/[0.08] cursor-pointer"
    >
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-md bg-white/[0.04] group-hover:bg-primary/15 flex items-center justify-center flex-shrink-0 transition-all duration-200 border border-white/[0.05] group-hover:border-primary/20">
          <MapPin className="w-3 h-3 text-white/50 group-hover:text-primary transition-colors" />
        </div>
        <p className="text-xs font-medium text-white/75 group-hover:text-white truncate flex-1 transition-colors">{item.label}</p>
      </div>
      <p className="text-[9px] text-white/30 group-hover:text-white/45 line-clamp-1 pl-8 transition-colors">{item.desc}</p>
    </Link>
  );
};

// ─── HIGHLIGHT STAT ─────────────────────────────────────────────
const HighlightStat = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center gap-0.5 px-4 py-2">
    <span className="text-lg font-bold text-primary">{value}</span>
    <span className="text-[10px] text-white/40 uppercase tracking-wider">{label}</span>
  </div>
);

// ─── MAIN COMPONENT ─────────────────────────────────────────────
export const MegaMenu = ({ activeMenu, onClose }: MegaMenuProps) => {
  if (!activeMenu) return null;

  const isRegions = activeMenu === "regions";
  const standardData = !isRegions ? menuDataMap[activeMenu] : null;

  if (!isRegions && !standardData) return null;

  return (
    <AnimatePresence>
      {activeMenu && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
              const target = e.target as HTMLElement;
              if (target.classList.contains('backdrop-overlay')) onClose();
            }}
            className="backdrop-overlay fixed inset-0 z-[45] pointer-events-auto"
            style={{ backgroundColor: 'transparent', top: '80px' }}
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ opacity: 0, y: 8, scaleY: 0.96 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: 8, scaleY: 0.96 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative z-[60] w-full bg-background/[0.97] backdrop-blur-2xl border border-white/[0.08] rounded-2xl shadow-2xl overflow-hidden mega-menu-container"
            style={{ transformOrigin: "top" }}
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

            <div className="p-5">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                    {isRegions ? (
                      <Globe className="w-4 h-4 text-primary" />
                    ) : (
                      <TrendingUp className="w-4 h-4 text-primary" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white/90 tracking-wide">
                      {isRegions ? regionsData.title : standardData!.title}
                    </h3>
                    <p className="text-[10px] text-white/35">
                      {isRegions ? "Regional Investment Atlas" : standardData!.subtitle}
                    </p>
                  </div>
                </div>

                {/* Highlight Stats */}
                {!isRegions && standardData!.highlights && (
                  <div className="hidden lg:flex items-center gap-0 divide-x divide-white/[0.06]">
                    {standardData!.highlights.map((h, i) => (
                      <HighlightStat key={i} value={h.value} label={h.label} />
                    ))}
                  </div>
                )}
                {isRegions && (
                  <span className="text-xs text-white/30 font-mono">34 Provinces</span>
                )}
              </div>

              {/* Separator */}
              <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mb-4" />

              {/* Content */}
              {isRegions ? (
                <div className="space-y-5 max-h-[550px] overflow-y-auto pr-2 custom-scrollbar">
                  {regionsData.regions.map((region) => {
                    const RegIcon = region.icon;
                    return (
                      <div key={region.name}>
                        <h4 className="text-[11px] font-semibold text-primary/70 uppercase tracking-widest mb-2.5 flex items-center gap-2">
                          <RegIcon className="w-3.5 h-3.5" />
                          {region.name} ({region.count} Provinces)
                        </h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1.5">
                          {region.provinces.map((prov) => (
                            <ProvinceItem key={prov.label} item={prov} onClose={onClose} />
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className={`grid gap-2 ${
                  standardData!.items.length <= 6 
                    ? 'grid-cols-2 md:grid-cols-3' 
                    : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5'
                }`}>
                  {standardData!.items.map((item, i) => (
                    <MenuItem key={item.label} item={item} onClose={onClose} index={i} />
                  ))}
                </div>
              )}
            </div>

            {/* Bottom accent */}
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
