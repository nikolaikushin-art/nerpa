import { motion } from "framer-motion";
import { useAnimatedValue } from "@/hooks/useAnimatedValue";
import {
  Wheat, Leaf, Sun, Droplets, Mountain, TreePine, Target, Award,
  TrendingUp, Users, Building2, Globe, Heart, Factory, Truck, Package,
  Gem, Star, Crown, Sparkles, Lightbulb, Handshake, Scale, MapPin,
  Flag, Shield, Rocket, Zap, Ship, Plane, Train, GraduationCap,
  Briefcase, DollarSign, BookOpen, Home, Thermometer, Droplet,
  Compass, Eye, Timer, Activity, Layers, BarChart3, PieChart,
  CircleDot, Network, Database, Cpu, Wind, Hammer, Wrench } from
"lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }
};
const stagger = (i: number) => ({ ...fadeUp, transition: { duration: 0.8, ease: "easeOut" as const, delay: i * 0.06 } });

const CBlock = ({ gradient, children }: {gradient: string;children: React.ReactNode;}) =>
<section className="relative py-24 px-6 lg:px-12 overflow-hidden">
    <div className={`absolute inset-0 ${gradient}`} />
    <div className="absolute inset-0 opacity-[0.03]">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0id2hpdGUiLz48L3N2Zz4=')]" />
    </div>
    <div className="relative z-10 max-w-7xl mx-auto">{children}</div>
  </section>;


const ACard = ({ icon: Icon, value, label, sub, color, i }: {icon: any;value: string;label: string;sub?: string;color: string;i: number;}) => {
  const { ref, display } = useAnimatedValue(value);
  return (
    <motion.div ref={ref} {...stagger(i)} className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-5 hover:border-primary/40 transition-all">
      <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-3" style={{ background: `${color}15` }}>
        <Icon className="w-5 h-5" style={{ color }} />
      </div>
      <div className="text-2xl md:text-3xl font-bold mb-1" style={{ color }}>{display}</div>
      <div className="text-sm font-semibold">{label}</div>
      {sub && <div className="text-xs text-muted-foreground mt-1">{sub}</div>}
    </motion.div>);

};

const PBar = ({ label, value, max, color, delay = 0 }: {label: string;value: number;max: number;color: string;delay?: number;}) =>
<div className="space-y-1">
    <div className="flex justify-between text-xs">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-bold" style={{ color }}>{value}%</span>
    </div>
    <div className="h-2.5 bg-muted rounded-full overflow-hidden">
      <motion.div className="h-full rounded-full" style={{ background: `linear-gradient(90deg, ${color}, ${color}88)` }}
    initial={{ width: 0 }} whileInView={{ width: `${value / max * 100}%` }} viewport={{ once: true }}
    transition={{ duration: 1.4, delay, ease: "easeOut" }} />
    </div>
  </div>;


const SH = ({ tag, title, desc }: {tag: string;title: string;desc?: string;}) =>
<motion.div {...fadeUp} className="mb-12">
    <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-3 block">{tag}</span>
    <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
    {desc && <p className="text-muted-foreground max-w-3xl">{desc}</p>}
  </motion.div>;


const RingChart = ({ value, color, size = 100, label }: {value: number;color: string;size?: number;label: string;}) => {
  const r = (size - 10) / 2;const circ = 2 * Math.PI * r;const offset = circ - value / 100 * circ;
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative">
        <svg width={size} height={size} className="-rotate-90">
          <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="hsl(var(--muted))" strokeWidth="5" />
          <motion.circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth="5" strokeLinecap="round"
          strokeDasharray={circ} initial={{ strokeDashoffset: circ }}
          whileInView={{ strokeDashoffset: offset }} viewport={{ once: true }}
          transition={{ duration: 1.8, ease: "easeOut" }} />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-sm font-bold" style={{ color }}>{value}%</div>
      </div>
      <span className="text-xs text-muted-foreground text-center">{label}</span>
    </div>);

};

export const AgricultureMegaSections = () => {
  return (
    <>
      {/* ═══ 1. AGRICULTURAL RENAISSANCE HERO ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#0a1a0a] via-[#0d2810] to-[#0a1a0a]">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="text-primary text-xs font-semibold tracking-[0.4em] uppercase mb-4 block">Section I — Agricultural Renaissance</span>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">The Green <br />Revolution</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Transforming Afghanistan into the saffron capital of the world and a premier organic exporter.</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ACard icon={Wheat} value="60%" label="Workforce Share" sub="Largest employer" color="#22c55e" i={0} />
          <ACard icon={DollarSign} value="$2B" label="Export Target" sub="By 2035" color="#f59e0b" i={1} />
          <ACard icon={MapPin} value="500K" label="Hectares Expansion" sub="New farmland" color="#3b82f6" i={2} />
          <ACard icon={Award} value="#1" label="Saffron Quality" sub="Global ranking" color="#ef4444" i={3} />
        </div>
      </CBlock>

      {/* ═══ 2. SAFFRON DOMINANCE ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#1a1505] via-[#2d2008] to-[#1a1505]">
        <SH tag="Section II — Saffron Dominance" title="The Red Gold Empire" desc="Afghanistan's saffron consistently ranks #1 globally for quality, commanding $3,000-$5,000 per kilogram." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ACard icon={Crown} value="$5,000" label="Price per KG" sub="Premium grade" color="#f59e0b" i={0} />
          <ACard icon={TrendingUp} value="15%" label="Annual Growth" sub="Demand increase" color="#22c55e" i={1} />
          <ACard icon={Globe} value="30+" label="Export Markets" sub="Countries served" color="#3b82f6" i={2} />
          <ACard icon={Users} value="100K" label="Saffron Farmers" sub="Direct employment" color="#ef4444" i={3} />
        </div>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-6">
          {["Herat", "Badghis", "Farah", "Ghor", "Bamyan"].map((p, i) =>
          <motion.div key={p} {...stagger(i)} className="bg-card/60 backdrop-blur-sm border border-border rounded-xl p-4 text-center">
              <div className="text-lg font-bold text-primary mb-1">{p}</div>
              <div className="text-xs text-muted-foreground">Major saffron region</div>
              <PBar label="Production" value={90 - i * 10} max={100} color="#f59e0b" delay={i * 0.1} />
            </motion.div>
          )}
        </div>
      </CBlock>

      {/* ═══ 3. POMEGRANATE EXPORT HUB ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#1a0505] via-[#2d0808] to-[#1a0505]">
        <SH tag="Section III — Fruit Excellence" title="Pomegranate Empire" desc="Kandahar's legendary pomegranates are prized worldwide for their sweetness and ruby-red arils." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ACard icon={Star} value="$500M" label="Export Revenue" sub="By 2030" color="#ef4444" i={0} />
          <ACard icon={Truck} value="200K" label="Tonnes Annual" sub="Production target" color="#f59e0b" i={1} />
          <ACard icon={Ship} value="15" label="Export Routes" sub="Sea & air" color="#3b82f6" i={2} />
          <ACard icon={Factory} value="50+" label="Processing Plants" sub="Juice & extract" color="#22c55e" i={3} />
        </div>
      </CBlock>

      {/* ═══ 4. NUT PRODUCTION POWERHOUSE ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#0d1a0d] via-[#152815] to-[#0d1a0d]">
        <SH tag="Section IV — Nuts & Dried Fruits" title="Premium Nut Exports" desc="Afghan pistachios and almonds command premium prices in global markets worth $35B annually." />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <ACard icon={Gem} value="$800M" label="Pistachio Revenue" sub="Target 2035" color="#22c55e" i={0} />
          <ACard icon={Award} value="200K" label="Hectares Restored" sub="Badghis pistachios" color="#f59e0b" i={1} />
          <ACard icon={Package} value="150K" label="Tonnes Almonds" sub="Annual production" color="#3b82f6" i={2} />
        </div>
        <div className="mt-8 space-y-3">
          <PBar label="Pistachio Forest Restoration" value={45} max={100} color="#22c55e" delay={0} />
          <PBar label="Almond Orchard Expansion" value={60} max={100} color="#f59e0b" delay={0.1} />
          <PBar label="Walnut Production Growth" value={35} max={100} color="#3b82f6" delay={0.2} />
          <PBar label="Pine Nut Harvesting" value={25} max={100} color="#ef4444" delay={0.3} />
        </div>
      </CBlock>

      {/* ═══ 5. IRRIGATION TRANSFORMATION ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#051a1a] via-[#082828] to-[#051a1a]">
        <SH tag="Section V — Water Systems" title="Irrigation Revolution" desc="Converting 70% of flood irrigation to efficient drip and sprinkler systems." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ACard icon={Droplets} value="70%" label="Modern Irrigation" sub="Conversion target" color="#06b6d4" i={0} />
          <ACard icon={Droplet} value="$3B" label="Water Investment" sub="Infrastructure" color="#3b82f6" i={1} />
          <ACard icon={Target} value="40%" label="Water Savings" sub="Efficiency gain" color="#22c55e" i={2} />
          <ACard icon={Mountain} value="200+" label="Reservoirs" sub="New & upgraded" color="#f59e0b" i={3} />
        </div>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
          { label: "Drip Irrigation", val: 65, col: "#06b6d4" },
          { label: "Sprinkler Systems", val: 55, col: "#3b82f6" },
          { label: "Canal Lining", val: 40, col: "#22c55e" },
          { label: "Reservoir Capacity", val: 50, col: "#f59e0b" }].
          map((m, i) => <RingChart key={i} value={m.val} color={m.col} label={m.label} />)}
        </div>
      </CBlock>

      {/* ═══ 6. COLD CHAIN INFRASTRUCTURE ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#0a0a1a] via-[#0d0d28] to-[#0a0a1a]">
        <SH tag="Section VI — Cold Chain" title="Post-Harvest Revolution" desc="Reducing post-harvest losses from 40% to under 10% through modern cold chain networks." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ACard icon={Thermometer} value="500+" label="Cold Stores" sub="Nationwide" color="#3b82f6" i={0} />
          <ACard icon={Truck} value="2,000" label="Reefer Trucks" sub="Transport fleet" color="#06b6d4" i={1} />
          <ACard icon={Factory} value="$500M" label="Investment" sub="Cold chain" color="#22c55e" i={2} />
          <ACard icon={TrendingUp} value="30%" label="Loss Reduction" sub="Already achieved" color="#f59e0b" i={3} />
        </div>
      </CBlock>

      {/* ═══ 7. ORGANIC CERTIFICATION ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#0a1a05] via-[#152808] to-[#0a1a05]">
        <SH tag="Section VII — Organic Farming" title="Premium Organic Markets" desc="EU and USDA organic certification enabling 30-50% premium pricing." />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <ACard icon={Leaf} value="50,000" label="Certified Farmers" sub="And growing" color="#22c55e" i={0} />
          <ACard icon={Globe} value="50%" label="Price Premium" sub="Over conventional" color="#f59e0b" i={1} />
          <ACard icon={Shield} value="100%" label="Chemical Free" sub="Organic standard" color="#3b82f6" i={2} />
        </div>
        <div className="mt-8 space-y-3">
          <PBar label="EU Certification Progress" value={65} max={100} color="#22c55e" delay={0} />
          <PBar label="USDA Organic Status" value={55} max={100} color="#f59e0b" delay={0.1} />
          <PBar label="JAS (Japan) Certification" value={30} max={100} color="#3b82f6" delay={0.2} />
          <PBar label="Farmer Training Completion" value={70} max={100} color="#ef4444" delay={0.3} />
        </div>
      </CBlock>

      {/* ═══ 8. PRECISION AGRICULTURE ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#0a0d1a] via-[#101828] to-[#0a0d1a]">
        <SH tag="Section VIII — AgriTech" title="Precision Farming Revolution" desc="Drone monitoring, AI-powered crop management, and satellite-guided precision irrigation." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ACard icon={Cpu} value="500+" label="Drones Deployed" sub="Crop monitoring" color="#8b5cf6" i={0} />
          <ACard icon={Database} value="1M+" label="Data Points" sub="Soil analysis" color="#3b82f6" i={1} />
          <ACard icon={Lightbulb} value="$80M" label="R&D Centre" sub="Kabul-based" color="#f59e0b" i={2} />
          <ACard icon={Network} value="34" label="Provinces" sub="Coverage target" color="#22c55e" i={3} />
        </div>
      </CBlock>

      {/* ═══ 9. LIVESTOCK MODERNISATION ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#1a0d05] via-[#281508] to-[#1a0d05]">
        <SH tag="Section IX — Livestock" title="Animal Husbandry 2.0" desc="Modern veterinary services, breeding programmes, and dairy processing for 30M+ livestock." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ACard icon={Heart} value="30M+" label="Livestock Head" sub="Sheep, goats, cattle" color="#ef4444" i={0} />
          <ACard icon={Factory} value="100+" label="Dairy Plants" sub="Processing" color="#f59e0b" i={1} />
          <ACard icon={Shield} value="90%" label="Vaccination" sub="Coverage target" color="#22c55e" i={2} />
          <ACard icon={Users} value="5M" label="Herder Families" sub="Supported" color="#3b82f6" i={3} />
        </div>
      </CBlock>

      {/* ═══ 10. GREENHOUSE REVOLUTION ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#051a0d] via-[#082815] to-[#051a0d]">
        <SH tag="Section X — Protected Agriculture" title="Year-Round Growing" desc="50,000 greenhouses enabling winter production of high-value vegetables and herbs." />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <ACard icon={Home} value="50,000" label="Greenhouses" sub="Nationwide target" color="#22c55e" i={0} />
          <ACard icon={Sun} value="365" label="Days Growing" sub="Year-round" color="#f59e0b" i={1} />
          <ACard icon={DollarSign} value="$300M" label="Revenue" sub="Annual target" color="#3b82f6" i={2} />
        </div>
      </CBlock>

      {/* ═══ 11. HONEY PRODUCTION ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#1a1505] via-[#2d2008] to-[#1a1505]">
        <SH tag="Section XI — Apiculture" title="Mountain Valley Honey" desc="Premium honey from pristine valleys of Kunar, Nuristan, and Panjshir." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ACard icon={Sparkles} value="500K" label="Beehives" sub="Target" color="#f59e0b" i={0} />
          <ACard icon={DollarSign} value="$50M" label="Export Revenue" sub="By 2030" color="#22c55e" i={1} />
          <ACard icon={MapPin} value="12" label="Provinces" sub="Production zones" color="#3b82f6" i={2} />
          <ACard icon={Award} value="100%" label="Organic" sub="Natural purity" color="#ef4444" i={3} />
        </div>
      </CBlock>

      {/* ═══ 12. WHEAT SELF-SUFFICIENCY ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#0d1a05] via-[#152808] to-[#0d1a05]">
        <SH tag="Section XII — Food Security" title="Wheat Independence" desc="Achieving 100% domestic wheat production to end import dependency." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ACard icon={Wheat} value="7M" label="Tonnes Target" sub="Annual production" color="#f59e0b" i={0} />
          <ACard icon={Target} value="100%" label="Self-Sufficiency" sub="By 2032" color="#22c55e" i={1} />
          <ACard icon={MapPin} value="2M" label="Hectares" sub="Wheat cultivation" color="#3b82f6" i={2} />
          <ACard icon={Users} value="3M" label="Farming Families" sub="Wheat growers" color="#ef4444" i={3} />
        </div>
      </CBlock>

      {/* ═══ 13. REGIONAL AGRICULTURAL ZONES ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#0a1a0a] via-[#0d2810] to-[#0a1a0a]">
        <SH tag="Section XIII — Regional Clusters" title="8 Agri-Economic Zones" desc="Specialized agricultural production clusters across Afghanistan's diverse agro-ecological regions." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
          { zone: "Herat Saffron Belt", specialty: "Saffron, Grapes", investment: "$400M", col: "#f59e0b" },
          { zone: "Kandahar Fruit Hub", specialty: "Pomegranate, Figs", investment: "$350M", col: "#ef4444" },
          { zone: "Balkh Grain Basket", specialty: "Wheat, Cotton", investment: "$300M", col: "#22c55e" },
          { zone: "Nangarhar Citrus Zone", specialty: "Oranges, Lemons", investment: "$250M", col: "#f97316" },
          { zone: "Badghis Pistachio Forest", specialty: "Pistachios, Almonds", investment: "$200M", col: "#84cc16" },
          { zone: "Kunduz Rice Corridor", specialty: "Rice, Vegetables", investment: "$180M", col: "#06b6d4" },
          { zone: "Panjshir Valley Organics", specialty: "Honey, Herbs", investment: "$100M", col: "#8b5cf6" },
          { zone: "Helmand Cotton Basin", specialty: "Cotton, Melons", investment: "$150M", col: "#3b82f6" }].
          map((z, i) =>
          <motion.div key={z.zone} {...stagger(i)} className="bg-card/60 backdrop-blur-sm border border-border rounded-xl p-5">
              <div className="text-lg font-bold mb-1" style={{ color: z.col }}>{z.zone}</div>
              <div className="text-xs text-muted-foreground mb-2">{z.specialty}</div>
              <div className="text-sm font-semibold">{z.investment}</div>
            </motion.div>
          )}
        </div>
      </CBlock>

      {/* ═══ 14. CROP DIVERSIFICATION ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#051a0a] via-[#082815] to-[#051a0a]">
        <SH tag="Section XIV — Diversification" title="Beyond Traditional Crops" desc="Introducing high-value crops: quinoa, avocados, berries, and medicinal herbs." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ACard icon={Leaf} value="20+" label="New Crops" sub="Introduced" color="#22c55e" i={0} />
          <ACard icon={Globe} value="$200M" label="New Revenue" sub="By 2035" color="#3b82f6" i={1} />
          <ACard icon={Lightbulb} value="10" label="Research Stations" sub="Crop trials" color="#f59e0b" i={2} />
          <ACard icon={Users} value="100K" label="Farmers Trained" sub="New techniques" color="#8b5cf6" i={3} />
        </div>
      </CBlock>

      {/* ═══ 15. SEED TECHNOLOGY ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#0d0d1a] via-[#151528] to-[#0d0d1a]">
        <SH tag="Section XV — Seed Science" title="Certified Seed Programme" desc="National seed banks and certified varieties for drought resistance and high yields." />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <ACard icon={Database} value="500+" label="Seed Varieties" sub="Certified" color="#8b5cf6" i={0} />
          <ACard icon={Shield} value="80%" label="Seed Coverage" sub="Certified supply" color="#22c55e" i={1} />
          <ACard icon={Building2} value="34" label="Seed Banks" sub="Provincial" color="#3b82f6" i={2} />
        </div>
      </CBlock>

      {/* ═══ 16. AGRICULTURAL FINANCE ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#1a0a0a] via-[#280d0d] to-[#1a0a0a]">
        <SH tag="Section XVI — Farm Finance" title="Agricultural Credit Revolution" desc="Low-interest loans and crop insurance protecting millions of farming families." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ACard icon={DollarSign} value="$2B" label="Credit Disbursed" sub="By 2030" color="#22c55e" i={0} />
          <ACard icon={Shield} value="5M" label="Insured Farmers" sub="Crop insurance" color="#3b82f6" i={1} />
          <ACard icon={Briefcase} value="200+" label="Microfinance Branches" sub="Rural access" color="#f59e0b" i={2} />
          <ACard icon={Heart} value="3%" label="Interest Rate" sub="Subsidized" color="#ef4444" i={3} />
        </div>
      </CBlock>

      {/* ═══ 17. FARM-TO-MARKET ROADS ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#0a0d1a] via-[#101828] to-[#0a0d1a]">
        <SH tag="Section XVII — Rural Roads" title="Connecting Farms to Markets" desc="15,000km of farm-to-market roads reducing transport costs by 60%." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ACard icon={Compass} value="15,000km" label="Farm Roads" sub="To be built" color="#3b82f6" i={0} />
          <ACard icon={Truck} value="60%" label="Cost Reduction" sub="Transport savings" color="#22c55e" i={1} />
          <ACard icon={MapPin} value="5,000" label="Villages" sub="Connected" color="#f59e0b" i={2} />
          <ACard icon={Timer} value="50%" label="Time Savings" sub="Market access" color="#8b5cf6" i={3} />
        </div>
      </CBlock>

      {/* ═══ 18. FOOD PROCESSING INDUSTRY ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#0d1a0a] via-[#152810] to-[#0d1a0a]">
        <SH tag="Section XVIII — Value Addition" title="Food Processing Boom" desc="200+ food processing plants transforming raw produce into premium packaged products." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ACard icon={Factory} value="200+" label="Processing Plants" sub="Nationwide" color="#f59e0b" i={0} />
          <ACard icon={DollarSign} value="$1.5B" label="Value Addition" sub="Annual revenue" color="#22c55e" i={1} />
          <ACard icon={Users} value="300K" label="Jobs Created" sub="Processing sector" color="#3b82f6" i={2} />
          <ACard icon={Package} value="500+" label="Product Lines" sub="Packaged foods" color="#ef4444" i={3} />
        </div>
      </CBlock>

      {/* ═══ 19. EXPORT MARKET EXPANSION ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#1a1005] via-[#281808] to-[#1a1005]">
        <SH tag="Section XIX — Global Markets" title="Export Revolution" desc="From local production to global distribution across 50+ countries." />
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
          { market: "EU Markets", val: 75, col: "#3b82f6" },
          { market: "Gulf States", val: 85, col: "#f59e0b" },
          { market: "South Asia", val: 90, col: "#22c55e" },
          { market: "East Asia", val: 45, col: "#ef4444" },
          { market: "North America", val: 35, col: "#8b5cf6" }].
          map((m, i) => <RingChart key={i} value={m.val} color={m.col} label={m.market} />)}
        </div>
      </CBlock>

      {/* ═══ 20. WOMEN IN AGRICULTURE ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#1a051a] via-[#280828] to-[#1a051a]">
        <SH tag="Section XX — Women Empowerment" title="Women Leading Agriculture" desc="2 million women entrepreneurs in farming, processing, and agricultural business." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ACard icon={Users} value="2M" label="Women Farmers" sub="Empowered" color="#ec4899" i={0} />
          <ACard icon={Briefcase} value="500K" label="Women-Led Businesses" sub="Agri-business" color="#8b5cf6" i={1} />
          <ACard icon={GraduationCap} value="1M" label="Women Trained" sub="Skills programs" color="#3b82f6" i={2} />
          <ACard icon={DollarSign} value="$500M" label="Women's Credit" sub="Dedicated fund" color="#22c55e" i={3} />
        </div>
      </CBlock>

      {/* ═══ 21-30: PROVINCIAL DEEP DIVES ═══ */}
      {[
      { prov: "Herat", spec: "Saffron Capital", inv: "$400M", crops: "Saffron, Grapes, Cotton", growth: 85, col: "#f59e0b" },
      { prov: "Kandahar", spec: "Fruit Paradise", inv: "$350M", crops: "Pomegranate, Figs, Dates", growth: 80, col: "#ef4444" },
      { prov: "Balkh", spec: "Grain Heartland", inv: "$300M", crops: "Wheat, Rice, Melons", growth: 75, col: "#22c55e" },
      { prov: "Nangarhar", spec: "Citrus Valley", inv: "$250M", crops: "Oranges, Olives, Sugarcane", growth: 70, col: "#f97316" },
      { prov: "Badghis", spec: "Pistachio Forests", inv: "$200M", crops: "Pistachios, Almonds, Wheat", growth: 65, col: "#84cc16" },
      { prov: "Kunduz", spec: "Rice Bowl", inv: "$180M", crops: "Rice, Vegetables, Cotton", growth: 60, col: "#06b6d4" },
      { prov: "Helmand", spec: "Cotton Basin", inv: "$150M", crops: "Cotton, Melons, Wheat", growth: 55, col: "#3b82f6" },
      { prov: "Bamyan", spec: "Potato Kingdom", inv: "$120M", crops: "Potatoes, Almonds, Cherries", growth: 50, col: "#8b5cf6" },
      { prov: "Kapisa", spec: "Mulberry Valley", inv: "$100M", crops: "Mulberries, Walnuts, Grapes", growth: 45, col: "#ec4899" },
      { prov: "Panjshir", spec: "Organic Haven", inv: "$80M", crops: "Honey, Herbs, Walnuts", growth: 40, col: "#14b8a6" }].
      map((p, idx) =>
      <CBlock key={p.prov} gradient={`bg-gradient-to-br from-[#0a1a0a] via-[#0d${idx % 2 === 0 ? '28' : '1a'}10] to-[#0a1a0a]`}>
          <SH tag={`Section ${21 + idx} — ${p.prov} Province`} title={`${p.prov}: ${p.spec}`} desc={`Major crops: ${p.crops}. Investment: ${p.inv}.`} />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ACard icon={MapPin} value={p.inv} label="Investment" sub={p.prov} color={p.col} i={0} />
            <ACard icon={Wheat} value={`${p.growth}%`} label="Growth Rate" sub="Agricultural" color="#22c55e" i={1} />
            <ACard icon={Users} value={`${50 + idx * 10}K`} label="Farm Families" sub="Supported" color="#3b82f6" i={2} />
            <ACard icon={Truck} value={`${10 + idx * 5}`} label="Market Links" sub="Connected" color="#f59e0b" i={3} />
          </div>
          <div className="mt-6 space-y-2">
            <PBar label="Irrigation Coverage" value={p.growth} max={100} color={p.col} delay={0} />
            <PBar label="Organic Certification" value={p.growth - 15} max={100} color="#22c55e" delay={0.1} />
            <PBar label="Cold Chain Access" value={p.growth - 20} max={100} color="#3b82f6" delay={0.2} />
          </div>
        </CBlock>
      )}

      {/* ═══ 31. SOIL HEALTH PROGRAMME ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#1a0d05] via-[#281508] to-[#1a0d05]">
        <SH tag="Section XXXI — Soil Health" title="National Soil Revival" desc="Comprehensive soil testing, restoration, and nutrient management across all provinces." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ACard icon={Layers} value="10M" label="Hectares Tested" sub="Soil analysis" color="#8b5cf6" i={0} />
          <ACard icon={Leaf} value="5M" label="Hectares Restored" sub="Organic matter" color="#22c55e" i={1} />
          <ACard icon={Database} value="34" label="Soil Labs" sub="Provincial" color="#3b82f6" i={2} />
          <ACard icon={TrendingUp} value="40%" label="Yield Increase" sub="After restoration" color="#f59e0b" i={3} />
        </div>
      </CBlock>

      {/* ═══ 32. AGRICULTURAL EDUCATION ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#0a0a1a] via-[#0d0d28] to-[#0a0a1a]">
        <SH tag="Section XXXII — Education" title="Farming Knowledge Revolution" desc="10 agricultural universities and 100 vocational training centres." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ACard icon={GraduationCap} value="10" label="Agri Universities" sub="Established" color="#8b5cf6" i={0} />
          <ACard icon={BookOpen} value="100" label="Training Centres" sub="Vocational" color="#3b82f6" i={1} />
          <ACard icon={Users} value="500K" label="Graduates" sub="By 2035" color="#22c55e" i={2} />
          <ACard icon={Lightbulb} value="1,000" label="Researchers" sub="Agricultural" color="#f59e0b" i={3} />
        </div>
      </CBlock>

      {/* ═══ 33. AGRI-TECH STARTUPS ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#0d0a1a] via-[#150d28] to-[#0d0a1a]">
        <SH tag="Section XXXIII — Innovation Hub" title="AgriTech Startup Ecosystem" desc="500 agricultural technology startups creating solutions for Afghan farming challenges." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ACard icon={Rocket} value="500" label="Startups" sub="AgriTech" color="#8b5cf6" i={0} />
          <ACard icon={DollarSign} value="$200M" label="Venture Capital" sub="Invested" color="#22c55e" i={1} />
          <ACard icon={Cpu} value="50" label="AI Solutions" sub="Crop management" color="#3b82f6" i={2} />
          <ACard icon={Globe} value="20" label="Global Partners" sub="Tech transfer" color="#f59e0b" i={3} />
        </div>
      </CBlock>

      {/* ═══ 34. DAIRY INDUSTRY ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#1a1a05] via-[#28280d] to-[#1a1a05]">
        <SH tag="Section XXXIV — Dairy" title="National Dairy Transformation" desc="100 modern dairy processing plants producing milk, cheese, yogurt, and butter." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ACard icon={Droplet} value="5B" label="Litres Milk" sub="Annual target" color="#f59e0b" i={0} />
          <ACard icon={Factory} value="100" label="Dairy Plants" sub="Processing" color="#3b82f6" i={1} />
          <ACard icon={DollarSign} value="$800M" label="Industry Value" sub="By 2035" color="#22c55e" i={2} />
          <ACard icon={Users} value="1M" label="Dairy Farmers" sub="Supported" color="#ef4444" i={3} />
        </div>
      </CBlock>

      {/* ═══ 35. POULTRY EXPANSION ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#0d1a0d] via-[#152815] to-[#0d1a0d]">
        <SH tag="Section XXXV — Poultry" title="Poultry Industry Growth" desc="500 modern poultry farms meeting 100% domestic demand for eggs and chicken." />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <ACard icon={Target} value="500" label="Poultry Farms" sub="Modern facilities" color="#f59e0b" i={0} />
          <ACard icon={TrendingUp} value="100%" label="Self-Sufficiency" sub="Eggs & chicken" color="#22c55e" i={1} />
          <ACard icon={Users} value="200K" label="Jobs Created" sub="Poultry sector" color="#3b82f6" i={2} />
        </div>
      </CBlock>

      {/* ═══ 36. FISHERIES & AQUACULTURE ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#051a1a] via-[#082828] to-[#051a1a]">
        <SH tag="Section XXXVI — Fisheries" title="Aquaculture Revolution" desc="Modern fish farming in Afghanistan's rivers and reservoirs." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ACard icon={Droplets} value="50K" label="Tonnes Fish" sub="Annual target" color="#06b6d4" i={0} />
          <ACard icon={MapPin} value="500" label="Fish Farms" sub="Nationwide" color="#3b82f6" i={1} />
          <ACard icon={DollarSign} value="$100M" label="Industry Value" sub="By 2032" color="#22c55e" i={2} />
          <ACard icon={Users} value="50K" label="Jobs" sub="Aquaculture" color="#f59e0b" i={3} />
        </div>
      </CBlock>

      {/* ═══ 37. SPICE PRODUCTION ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#1a0d05] via-[#281508] to-[#1a0d05]">
        <SH tag="Section XXXVII — Spices" title="Spice Trade Expansion" desc="Cumin, coriander, black seed, and rare mountain herbs for global export." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ACard icon={Sparkles} value="15+" label="Spice Varieties" sub="Exported" color="#f59e0b" i={0} />
          <ACard icon={Globe} value="$150M" label="Export Revenue" sub="Target 2035" color="#22c55e" i={1} />
          <ACard icon={Award} value="100%" label="Natural" sub="No additives" color="#ef4444" i={2} />
          <ACard icon={MapPin} value="20" label="Provinces" sub="Growing regions" color="#3b82f6" i={3} />
        </div>
      </CBlock>

      {/* ═══ 38. GRAPE & WINE INDUSTRY ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#1a051a] via-[#280828] to-[#1a051a]">
        <SH tag="Section XXXVIII — Viticulture" title="Grape Excellence" desc="Afghanistan's ancient grape varieties for raisins, juice, and fresh fruit export." />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <ACard icon={Leaf} value="300K" label="Tonnes Grapes" sub="Annual target" color="#8b5cf6" i={0} />
          <ACard icon={DollarSign} value="$400M" label="Raisin Exports" sub="Target 2035" color="#f59e0b" i={1} />
          <ACard icon={MapPin} value="8" label="Provinces" sub="Grape regions" color="#22c55e" i={2} />
        </div>
      </CBlock>

      {/* ═══ 39. COTTON REVIVAL ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#0a0d1a] via-[#101828] to-[#0a0d1a]">
        <SH tag="Section XXXIX — Cotton" title="White Gold Revival" desc="Restoring Afghanistan's once-thriving cotton industry in Helmand, Kunduz, and Balkh." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ACard icon={Factory} value="200K" label="Tonnes Cotton" sub="Target production" color="#3b82f6" i={0} />
          <ACard icon={Building2} value="50" label="Ginning Mills" sub="Processing" color="#f59e0b" i={1} />
          <ACard icon={DollarSign} value="$300M" label="Industry Value" sub="By 2035" color="#22c55e" i={2} />
          <ACard icon={Users} value="500K" label="Farmers" sub="Cotton growers" color="#ef4444" i={3} />
        </div>
      </CBlock>

      {/* ═══ 40. MEDICINAL PLANTS ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#051a0a] via-[#082815] to-[#051a0a]">
        <SH tag="Section XL — Medicinal Herbs" title="Pharmaceutical Botany" desc="Wild medicinal plants from Afghan mountains for global pharmaceutical markets." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ACard icon={Heart} value="200+" label="Plant Species" sub="Medicinal" color="#22c55e" i={0} />
          <ACard icon={DollarSign} value="$100M" label="Export Potential" sub="Pharmaceutical" color="#3b82f6" i={1} />
          <ACard icon={Mountain} value="15" label="Mountain Zones" sub="Harvesting" color="#f59e0b" i={2} />
          <ACard icon={Shield} value="100%" label="Wild Organic" sub="Natural growth" color="#8b5cf6" i={3} />
        </div>
      </CBlock>

      {/* ═══ 41-50: CROP-SPECIFIC DASHBOARDS ═══ */}
      {[
      { crop: "Saffron", target: "50 tonnes", rev: "$250M", farmers: "100K", province: "Herat", col: "#f59e0b" },
      { crop: "Pomegranate", target: "200K tonnes", rev: "$500M", farmers: "80K", province: "Kandahar", col: "#ef4444" },
      { crop: "Pistachio", target: "100K tonnes", rev: "$800M", farmers: "60K", province: "Badghis", col: "#84cc16" },
      { crop: "Almond", target: "150K tonnes", rev: "$450M", farmers: "70K", province: "Samangan", col: "#f97316" },
      { crop: "Walnut", target: "80K tonnes", rev: "$200M", farmers: "40K", province: "Nuristan", col: "#8b5cf6" },
      { crop: "Pine Nut", target: "30K tonnes", rev: "$300M", farmers: "50K", province: "Khost", col: "#22c55e" },
      { crop: "Dried Fruits", target: "500K tonnes", rev: "$600M", farmers: "200K", province: "Multiple", col: "#3b82f6" },
      { crop: "Olives", target: "50K tonnes", rev: "$100M", farmers: "30K", province: "Nangarhar", col: "#14b8a6" },
      { crop: "Cumin", target: "20K tonnes", rev: "$80M", farmers: "25K", province: "Takhar", col: "#ec4899" },
      { crop: "Rice", target: "500K tonnes", rev: "$300M", farmers: "150K", province: "Kunduz", col: "#06b6d4" }].
      map((c, idx) =>
      <CBlock key={c.crop} gradient={`bg-gradient-to-br from-[#0a1a0a] via-[#0d2810] to-[#0a1a0a]`}>
          <SH tag={`Section ${41 + idx} — ${c.crop}`} title={`${c.crop} Dashboard`} desc={`Primary region: ${c.province}. Production target: ${c.target}.`} />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ACard icon={Target} value={c.target} label="Production" sub="Annual target" color={c.col} i={0} />
            <ACard icon={DollarSign} value={c.rev} label="Revenue" sub="Export target" color="#22c55e" i={1} />
            <ACard icon={Users} value={c.farmers} label="Farmers" sub="Involved" color="#3b82f6" i={2} />
            <ACard icon={MapPin} value={c.province} label="Main Region" sub="Production centre" color="#f59e0b" i={3} />
          </div>
        </CBlock>
      )}

      {/* ═══ 51. AGRICULTURAL COOPERATIVES ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#0d0d1a] via-[#151528] to-[#0d0d1a]">
        <SH tag="Section LI — Cooperatives" title="Farmer Cooperative Network" desc="10,000 agricultural cooperatives empowering small farmers through collective bargaining." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ACard icon={Handshake} value="10,000" label="Cooperatives" sub="Nationwide" color="#8b5cf6" i={0} />
          <ACard icon={Users} value="2M" label="Members" sub="Small farmers" color="#22c55e" i={1} />
          <ACard icon={Scale} value="30%" label="Better Prices" sub="Collective power" color="#f59e0b" i={2} />
          <ACard icon={Shield} value="100%" label="Fair Trade" sub="Certified" color="#3b82f6" i={3} />
        </div>
      </CBlock>

      {/* ═══ 52. PEST MANAGEMENT ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#1a0a0a] via-[#280d0d] to-[#1a0a0a]">
        <SH tag="Section LII — Pest Control" title="Integrated Pest Management" desc="Biological pest control replacing chemical pesticides across all provinces." />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <ACard icon={Shield} value="90%" label="IPM Coverage" sub="By 2035" color="#22c55e" i={0} />
          <ACard icon={Leaf} value="80%" label="Pesticide Reduction" sub="Chemical-free" color="#84cc16" i={1} />
          <ACard icon={Award} value="500" label="Bio-Control Labs" sub="Established" color="#3b82f6" i={2} />
        </div>
      </CBlock>

      {/* ═══ 53. CLIMATE ADAPTATION ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#051a1a] via-[#082828] to-[#051a1a]">
        <SH tag="Section LIII — Climate Resilience" title="Climate-Smart Agriculture" desc="Drought-resistant varieties and water harvesting for climate adaptation." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ACard icon={Thermometer} value="50+" label="Drought Varieties" sub="Developed" color="#ef4444" i={0} />
          <ACard icon={Droplets} value="10,000" label="Water Harvests" sub="Systems built" color="#06b6d4" i={1} />
          <ACard icon={Sun} value="$500M" label="Climate Fund" sub="Adaptation" color="#f59e0b" i={2} />
          <ACard icon={TreePine} value="1M" label="Trees Planted" sub="Agroforestry" color="#22c55e" i={3} />
        </div>
      </CBlock>

      {/* ═══ 54. DIGITAL MARKETPLACE ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#0d0a1a] via-[#150d28] to-[#0d0a1a]">
        <SH tag="Section LIV — Digital Markets" title="E-Agriculture Platform" desc="Digital marketplace connecting 5 million farmers directly with buyers worldwide." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ACard icon={Cpu} value="5M" label="Users" sub="Farmers & buyers" color="#8b5cf6" i={0} />
          <ACard icon={Globe} value="50+" label="Countries" sub="Connected" color="#3b82f6" i={1} />
          <ACard icon={DollarSign} value="$1B" label="Transactions" sub="Annual value" color="#22c55e" i={2} />
          <ACard icon={Network} value="100%" label="Price Transparency" sub="Real-time" color="#f59e0b" i={3} />
        </div>
      </CBlock>

      {/* ═══ 55. AGROFORESTRY ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#0a1a05] via-[#152808] to-[#0a1a05]">
        <SH tag="Section LV — Agroforestry" title="Trees Meet Crops" desc="5 million hectares of integrated tree-crop systems for sustainability and income." />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <ACard icon={TreePine} value="5M" label="Hectares" sub="Agroforestry" color="#22c55e" i={0} />
          <ACard icon={Wind} value="50%" label="Erosion Reduced" sub="Soil protection" color="#06b6d4" i={1} />
          <ACard icon={DollarSign} value="$200M" label="Extra Income" sub="Tree products" color="#f59e0b" i={2} />
        </div>
      </CBlock>

      {/* ═══ 56-65: YEAR-BY-YEAR AGRICULTURE ROADMAP ═══ */}
      {[
      { yr: "2026", focus: "Foundation — Seed banks, soil testing, baseline surveys", target: "$650M investment", col: "#3b82f6" },
      { yr: "2027", focus: "Irrigation — 100,000 hectares converted to drip systems", target: "15% yield increase", col: "#22c55e" },
      { yr: "2028", focus: "Cold Chain — 200 facilities operational nationwide", target: "20% loss reduction", col: "#06b6d4" },
      { yr: "2029", focus: "Organic Push — 30,000 farmers certified organic", target: "$500M organic exports", col: "#84cc16" },
      { yr: "2030", focus: "Processing — 100 food processing plants online", target: "$1B value addition", col: "#f59e0b" },
      { yr: "2031", focus: "Tech Integration — AI and drones across 50% of farms", target: "30% productivity gain", col: "#8b5cf6" },
      { yr: "2032", focus: "Wheat Self-Sufficiency — 100% domestic production", target: "Zero wheat imports", col: "#ef4444" },
      { yr: "2033", focus: "Export Surge — $1.5B agricultural exports achieved", target: "40+ export markets", col: "#f97316" },
      { yr: "2034", focus: "Full Mechanisation — Modern equipment across 80% of farms", target: "50% labour efficiency", col: "#14b8a6" },
      { yr: "2035", focus: "Vision Achieved — $2B+ exports, 100% food security", target: "Global top-20 exporter", col: "#ec4899" }].
      map((y, idx) =>
      <CBlock key={y.yr} gradient={`bg-gradient-to-br from-[#0a1a0a] via-[#102810] to-[#0a1a0a]`}>
          <SH tag={`Section ${56 + idx} — Year ${y.yr}`} title={`Agriculture ${y.yr}`} desc={y.focus} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div {...fadeUp} className="bg-card/60 backdrop-blur-sm border border-border rounded-xl p-6">
              
              <p className="text-muted-foreground text-sm">{y.focus}</p>
            </motion.div>
            <motion.div {...stagger(1)} className="bg-card/60 backdrop-blur-sm border border-border rounded-xl p-6">
              <div className="text-sm text-muted-foreground mb-1">Key Target</div>
              <div className="text-xl font-bold" style={{ color: y.col }}>{y.target}</div>
            </motion.div>
          </div>
        </CBlock>
      )}

      {/* ═══ 66. FERTILIZER INDUSTRY ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#0d1a0d] via-[#152815] to-[#0d1a0d]">
        <SH tag="Section LXVI — Fertilizers" title="Domestic Fertilizer Production" desc="5 factories producing organic and mineral fertilizers from domestic resources." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ACard icon={Factory} value="5" label="Factories" sub="Built" color="#22c55e" i={0} />
          <ACard icon={Package} value="1M" label="Tonnes Annual" sub="Production" color="#f59e0b" i={1} />
          <ACard icon={DollarSign} value="$200M" label="Import Savings" sub="Annually" color="#3b82f6" i={2} />
          <ACard icon={Leaf} value="60%" label="Organic Share" sub="Green fertilizer" color="#84cc16" i={3} />
        </div>
      </CBlock>

      {/* ═══ 67. MECHANISATION PROGRAMME ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#0a0d1a] via-[#101828] to-[#0a0d1a]">
        <SH tag="Section LXVII — Mechanisation" title="Farm Machinery Revolution" desc="100,000 tractors and modern equipment transforming Afghan agriculture." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ACard icon={Hammer} value="100K" label="Tractors" sub="Deployed" color="#3b82f6" i={0} />
          <ACard icon={Wrench} value="500" label="Service Centres" sub="Maintenance" color="#f59e0b" i={1} />
          <ACard icon={DollarSign} value="$1B" label="Equipment Value" sub="Invested" color="#22c55e" i={2} />
          <ACard icon={TrendingUp} value="300%" label="Productivity" sub="Increase" color="#ef4444" i={3} />
        </div>
      </CBlock>

      {/* ═══ 68-75: TRANSFORMATION METRICS ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#1a0a0a] via-[#280d0d] to-[#1a0a0a]">
        <SH tag="Section LXVIII-LXXV — Transformation Matrix" title="Agricultural Transformation Scorecard" desc="Before and after metrics showing the agricultural revolution." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
          { label: "Crop Yield", before: "1.5 t/ha", after: "4.5 t/ha", pct: 75, col: "#22c55e" },
          { label: "Irrigated Land", before: "30%", after: "70%", pct: 70, col: "#3b82f6" },
          { label: "Post-Harvest Loss", before: "40%", after: "8%", pct: 80, col: "#ef4444" },
          { label: "Organic Certified", before: "2%", after: "30%", pct: 30, col: "#84cc16" },
          { label: "Mechanisation", before: "10%", after: "80%", pct: 80, col: "#f59e0b" },
          { label: "Export Revenue", before: "$200M", after: "$2B", pct: 90, col: "#8b5cf6" },
          { label: "Food Security", before: "60%", after: "100%", pct: 100, col: "#06b6d4" },
          { label: "Farm Income", before: "$500/yr", after: "$3,000/yr", pct: 85, col: "#ec4899" }].
          map((m, i) =>
          <motion.div key={m.label} {...stagger(i)} className="bg-card/60 backdrop-blur-sm border border-border rounded-xl p-4 text-center">
              <RingChart value={m.pct} color={m.col} label={m.label} size={80} />
              <div className="mt-2 text-xs">
                <span className="text-muted-foreground">{m.before}</span>
                <span className="mx-1">→</span>
                <span className="font-bold" style={{ color: m.col }}>{m.after}</span>
              </div>
            </motion.div>
          )}
        </div>
      </CBlock>

      {/* ═══ 76-85: SUPPLY CHAIN SECTIONS ═══ */}
      {[
      { title: "Farm Inputs Supply", desc: "Seeds, fertilizers, and equipment distribution networks", icon: Package, metrics: [{ v: "10K", l: "Agri-shops" }, { v: "$500M", l: "Supply Value" }] },
      { title: "Harvest Logistics", desc: "Efficient collection and transport from farm to market", icon: Truck, metrics: [{ v: "5K", l: "Collection Points" }, { v: "24hr", l: "Max Transit" }] },
      { title: "Quality Testing", desc: "International standard labs for food safety certification", icon: Shield, metrics: [{ v: "100", l: "Testing Labs" }, { v: "99%", l: "Compliance" }] },
      { title: "Packaging Industry", desc: "Modern food packaging meeting international export standards", icon: Package, metrics: [{ v: "200", l: "Facilities" }, { v: "$300M", l: "Industry" }] },
      { title: "Brand Development", desc: "Afghan agricultural brands competing globally", icon: Award, metrics: [{ v: "50", l: "Global Brands" }, { v: "30+", l: "Countries" }] },
      { title: "Trade Facilitation", desc: "Customs, certifications, and trade agreements for exports", icon: Globe, metrics: [{ v: "20", l: "Trade Deals" }, { v: "48hr", l: "Clearance" }] },
      { title: "Market Intelligence", desc: "Real-time pricing and demand data for farmers", icon: BarChart3, metrics: [{ v: "5M", l: "Data Users" }, { v: "100%", l: "Coverage" }] },
      { title: "Storage Networks", desc: "Modern warehousing with climate control", icon: Building2, metrics: [{ v: "1000", l: "Warehouses" }, { v: "5M t", l: "Capacity" }] },
      { title: "Transport Fleet", desc: "Refrigerated and standard vehicle fleets for agriculture", icon: Truck, metrics: [{ v: "10K", l: "Vehicles" }, { v: "34", l: "Provinces" }] },
      { title: "Export Terminals", desc: "Dedicated agricultural export processing zones", icon: Ship, metrics: [{ v: "5", l: "Terminals" }, { v: "$2B", l: "Throughput" }] }].
      map((s, idx) =>
      <CBlock key={s.title} gradient={`bg-gradient-to-br from-[#0a1a0a] via-[#0d2810] to-[#0a1a0a]`}>
          <SH tag={`Section ${76 + idx} — Supply Chain`} title={s.title} desc={s.desc} />
          <div className="grid grid-cols-2 gap-4">
            {s.metrics.map((m, i) =>
          <ACard key={i} icon={s.icon} value={m.v} label={m.l} color={idx % 2 === 0 ? "#22c55e" : "#3b82f6"} i={i} />
          )}
          </div>
        </CBlock>
      )}

      {/* ═══ 86-90: SUSTAINABILITY METRICS ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#051a0d] via-[#082815] to-[#051a0d]">
        <SH tag="Sections LXXXVI-XC — Sustainability" title="Environmental Stewardship" desc="Sustainable farming practices protecting Afghanistan's natural heritage." />
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <RingChart value={75} color="#22c55e" label="Sustainable Practices" />
          <RingChart value={60} color="#3b82f6" label="Water Efficiency" />
          <RingChart value={80} color="#84cc16" label="Soil Health" />
          <RingChart value={45} color="#f59e0b" label="Carbon Sequestration" />
          <RingChart value={90} color="#06b6d4" label="Biodiversity" />
        </div>
        <div className="mt-8 space-y-3">
          <PBar label="Organic Land Conversion" value={30} max={100} color="#22c55e" delay={0} />
          <PBar label="Water Recycling Systems" value={45} max={100} color="#3b82f6" delay={0.1} />
          <PBar label="Renewable Energy in Farms" value={35} max={100} color="#f59e0b" delay={0.2} />
          <PBar label="Zero-Waste Processing" value={25} max={100} color="#8b5cf6" delay={0.3} />
          <PBar label="Carbon-Neutral Farming" value={20} max={100} color="#ef4444" delay={0.4} />
        </div>
      </CBlock>

      {/* ═══ 91-95: INTERNATIONAL PARTNERSHIPS ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#0a0a1a] via-[#0d0d28] to-[#0a0a1a]">
        <SH tag="Sections XCI-XCV — Partnerships" title="Global Agricultural Alliances" desc="Strategic partnerships with 50+ international organizations and nations." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
          { name: "FAO", role: "Technical Assistance", inv: "$200M", col: "#3b82f6" },
          { name: "World Bank", role: "Rural Development", inv: "$500M", col: "#22c55e" },
          { name: "USAID", role: "Market Access", inv: "$300M", col: "#ef4444" },
          { name: "EU AgriAid", role: "Organic Standards", inv: "$150M", col: "#f59e0b" },
          { name: "JICA", role: "Irrigation Tech", inv: "$200M", col: "#06b6d4" },
          { name: "GIZ", role: "Value Chains", inv: "$100M", col: "#8b5cf6" },
          { name: "ICARDA", role: "Crop Research", inv: "$80M", col: "#84cc16" },
          { name: "IsDB", role: "Rural Finance", inv: "$250M", col: "#ec4899" }].
          map((p, i) =>
          <motion.div key={p.name} {...stagger(i)} className="bg-card/60 backdrop-blur-sm border border-border rounded-xl p-4">
              <div className="text-lg font-bold" style={{ color: p.col }}>{p.name}</div>
              <div className="text-xs text-muted-foreground">{p.role}</div>
              <div className="text-sm font-semibold mt-1">{p.inv}</div>
            </motion.div>
          )}
        </div>
      </CBlock>

      {/* ═══ 96-100: VISION SUMMARY DASHBOARD ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#0a1a0a] via-[#0d2810] to-[#0a1a0a]">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="text-primary text-xs font-semibold tracking-[0.4em] uppercase mb-4 block">Sections XCVI-C — Grand Summary</span>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">Agriculture<br />2040 Vision</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">The complete transformation of Afghanistan's agricultural sector — from subsistence to global excellence.</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <ACard icon={DollarSign} value="$2B+" label="Annual Exports" sub="By 2035" color="#22c55e" i={0} />
          <ACard icon={Users} value="10M" label="Jobs Supported" sub="Direct & indirect" color="#3b82f6" i={1} />
          <ACard icon={Target} value="100%" label="Food Security" sub="Self-sufficient" color="#f59e0b" i={2} />
          <ACard icon={Globe} value="50+" label="Export Markets" sub="Worldwide" color="#8b5cf6" i={3} />
          <ACard icon={Wheat} value="7M" label="Tonnes Grain" sub="Annual" color="#ef4444" i={4} />
          <ACard icon={Leaf} value="50K" label="Organic Farmers" sub="Certified" color="#84cc16" i={5} />
          <ACard icon={Factory} value="200+" label="Processing Plants" sub="Value addition" color="#06b6d4" i={6} />
          <ACard icon={Award} value="#1" label="Saffron" sub="Global leader" color="#f59e0b" i={7} />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          <RingChart value={100} color="#22c55e" label="Food Security" />
          <RingChart value={90} color="#3b82f6" label="Irrigation" />
          <RingChart value={80} color="#f59e0b" label="Mechanisation" />
          <RingChart value={70} color="#8b5cf6" label="Organic Share" />
          <RingChart value={95} color="#ef4444" label="Market Access" />
        </div>
      </CBlock>
    </>);

};