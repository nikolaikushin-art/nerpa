import { motion } from "framer-motion";
import { useAnimatedValue } from "@/hooks/useAnimatedValue";
import {
  Home, Building2, Users, Globe, Target, Award, TrendingUp,
  DollarSign, Shield, MapPin, Star, Lightbulb, Rocket, Cpu,
  GraduationCap, Heart, Factory, Package, Leaf, TreePine,
  Layers, BarChart3, Eye, Timer, Activity, Compass, Zap, Sun,
  Network, Database, Hammer, Wrench, Truck, Crown, Wind, Droplets } from
"lucide-react";

const fadeUp = { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } };
const stagger = (i: number) => ({ ...fadeUp, transition: { duration: 0.8, ease: "easeOut" as const, delay: i * 0.06 } });
const CB = ({ g, children }: {g: string;children: React.ReactNode;}) => <section className="relative py-24 px-6 lg:px-12 overflow-hidden"><div className={`absolute inset-0 ${g}`} /><div className="absolute inset-0 opacity-[0.03]"><div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0id2hpdGUiLz48L3N2Zz4=')]" /></div><div className="relative z-10 max-w-7xl mx-auto">{children}</div></section>;
const MC = ({ icon: Icon, value, label, sub, color, i }: {icon: any;value: string;label: string;sub?: string;color: string;i: number;}) => {const { ref, display } = useAnimatedValue(value);return <motion.div ref={ref} {...stagger(i)} className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-5 hover:border-primary/40 transition-all"><div className="w-11 h-11 rounded-xl flex items-center justify-center mb-3" style={{ background: `${color}15` }}><Icon className="w-5 h-5" style={{ color }} /></div><div className="text-2xl md:text-3xl font-bold mb-1" style={{ color }}>{display}</div><div className="text-sm font-semibold">{label}</div>{sub && <div className="text-xs text-muted-foreground mt-1">{sub}</div>}</motion.div>;};
const PB = ({ label, value, max, color, delay = 0 }: {label: string;value: number;max: number;color: string;delay?: number;}) => <div className="space-y-1"><div className="flex justify-between text-xs"><span className="text-muted-foreground">{label}</span><span className="font-bold" style={{ color }}>{value}%</span></div><div className="h-2.5 bg-muted rounded-full overflow-hidden"><motion.div className="h-full rounded-full" style={{ background: `linear-gradient(90deg, ${color}, ${color}88)` }} initial={{ width: 0 }} whileInView={{ width: `${value / max * 100}%` }} viewport={{ once: true }} transition={{ duration: 1.4, delay, ease: "easeOut" }} /></div></div>;
const SH = ({ tag, title, desc }: {tag: string;title: string;desc?: string;}) => <motion.div {...fadeUp} className="mb-12"><span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-3 block">{tag}</span><h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>{desc && <p className="text-muted-foreground max-w-3xl">{desc}</p>}</motion.div>;
const RC = ({ value, color, size = 100, label }: {value: number;color: string;size?: number;label: string;}) => {const r = (size - 10) / 2;const c = 2 * Math.PI * r;return <div className="flex flex-col items-center gap-2"><div className="relative"><svg width={size} height={size} className="-rotate-90"><circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="hsl(var(--muted))" strokeWidth="5" /><motion.circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth="5" strokeLinecap="round" strokeDasharray={c} initial={{ strokeDashoffset: c }} whileInView={{ strokeDashoffset: c - value / 100 * c }} viewport={{ once: true }} transition={{ duration: 1.8, ease: "easeOut" }} /></svg><div className="absolute inset-0 flex items-center justify-center text-sm font-bold" style={{ color }}>{value}%</div></div><span className="text-xs text-muted-foreground text-center">{label}</span></div>;};

export const HousingMegaSections = () =>
<>
    <CB g="bg-gradient-to-br from-[#1a0d05] via-[#281508] to-[#1a0d05]">
      <motion.div {...fadeUp} className="text-center mb-16">
        <span className="text-primary text-xs font-semibold tracking-[0.4em] uppercase mb-4 block">Section I — Urban Renaissance</span>
        <h2 className="text-5xl md:text-7xl font-bold mb-6">A Home For<br />Every Family</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">2 million new affordable homes, 5 satellite cities, and green urban planning for all 34 provinces.</p>
      </motion.div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <MC icon={Home} value="2M" label="New Homes" sub="Built by 2040" color="#f59e0b" i={0} />
        <MC icon={Building2} value="5" label="New Cities" sub="Satellite towns" color="#3b82f6" i={1} />
        <MC icon={DollarSign} value="$15B" label="Housing Investment" sub="Total" color="#22c55e" i={2} />
        <MC icon={Users} value="10M" label="People Housed" sub="Families served" color="#8b5cf6" i={3} />
      </div>
    </CB>

    {[
  { type: "Affordable Housing", units: "1M", inv: "$5B", target: "Low-income", col: "#22c55e" },
  { type: "Middle-Class Housing", units: "500K", inv: "$4B", target: "Working families", col: "#3b82f6" },
  { type: "Social Housing", units: "200K", inv: "$1.5B", target: "Vulnerable groups", col: "#ef4444" },
  { type: "Smart Apartments", units: "100K", inv: "$2B", target: "Urban professionals", col: "#8b5cf6" },
  { type: "Rural Housing", units: "300K", inv: "$1.5B", target: "Farming families", col: "#f59e0b" },
  { type: "Green Buildings", units: "50K", inv: "$1B", target: "Net-zero homes", col: "#84cc16" },
  { type: "Student Housing", units: "50K", inv: "$500M", target: "University students", col: "#06b6d4" },
  { type: "Senior Housing", units: "20K", inv: "$300M", target: "Elderly citizens", col: "#14b8a6" },
  { type: "Heritage Restoration", units: "5K", inv: "$200M", target: "Historic buildings", col: "#ec4899" }].
  map((t, idx) =>
  <CB key={t.type} g="bg-gradient-to-br from-[#0a0d1a] via-[#101828] to-[#0a0d1a]">
        <SH tag={`Section ${2 + idx} — ${t.type}`} title={t.type} desc={`${t.units} units. Investment: ${t.inv}. Target: ${t.target}.`} />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <MC icon={Home} value={t.units} label="Units" sub={t.type} color={t.col} i={0} />
          <MC icon={DollarSign} value={t.inv} label="Investment" sub="Total" color="#22c55e" i={1} />
          <MC icon={Users} value={t.target} label="Target Group" sub="Beneficiaries" color="#3b82f6" i={2} />
          <MC icon={Target} value="100%" label="Standard" sub="Building code" color="#f59e0b" i={3} />
        </div>
      </CB>
  )}

    {[
  { prov: "Kabul", homes: "500K", demand: "800K", gap: 38, col: "#3b82f6" },
  { prov: "Herat", homes: "200K", demand: "350K", gap: 43, col: "#22c55e" },
  { prov: "Balkh", homes: "150K", demand: "250K", gap: 40, col: "#f59e0b" },
  { prov: "Nangarhar", homes: "120K", demand: "200K", gap: 40, col: "#ef4444" },
  { prov: "Kandahar", homes: "100K", demand: "180K", gap: 44, col: "#8b5cf6" },
  { prov: "Kunduz", homes: "80K", demand: "120K", gap: 33, col: "#06b6d4" },
  { prov: "Bamyan", homes: "30K", demand: "50K", gap: 40, col: "#14b8a6" },
  { prov: "Helmand", homes: "60K", demand: "100K", gap: 40, col: "#ec4899" },
  { prov: "Badakhshan", homes: "25K", demand: "45K", gap: 44, col: "#84cc16" },
  { prov: "Paktya", homes: "40K", demand: "70K", gap: 43, col: "#f97316" }].
  map((p, idx) =>
  <CB key={p.prov} g="bg-gradient-to-br from-[#1a0d05] via-[#281508] to-[#1a0d05]">
        <SH tag={`Section ${11 + idx} — ${p.prov}`} title={`${p.prov} Housing`} desc={`Current: ${p.homes}. Demand: ${p.demand}.`} />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <MC icon={Home} value={p.homes} label="Current Homes" sub={p.prov} color={p.col} i={0} />
          <MC icon={Users} value={p.demand} label="Demand" sub="Total need" color="#ef4444" i={1} />
          <RC value={100 - p.gap} color={p.col} label="Coverage" />
          <RC value={p.gap} color="#ef4444" label="Gap %" />
        </div>
      </CB>
  )}

    {[
  { yr: "2026", focus: "National housing survey and urban master plans", target: "34 city plans completed", col: "#f59e0b" },
  { yr: "2027", focus: "First 100,000 affordable homes under construction", target: "50K homes delivered", col: "#22c55e" },
  { yr: "2028", focus: "Kabul New City Phase 1 operational", target: "200K residents", col: "#3b82f6" },
  { yr: "2029", focus: "Green building standards mandatory", target: "100% code compliance", col: "#84cc16" },
  { yr: "2030", focus: "5 satellite cities under construction", target: "500K homes total", col: "#8b5cf6" },
  { yr: "2031", focus: "Mortgage market established", target: "$2B mortgages", col: "#ef4444" },
  { yr: "2032", focus: "Smart city infrastructure in 5 cities", target: "IoT enabled housing", col: "#06b6d4" },
  { yr: "2033", focus: "Rural housing programme reaches all provinces", target: "200K rural homes", col: "#14b8a6" },
  { yr: "2034", focus: "Heritage restoration and urban regeneration", target: "50 historic areas restored", col: "#ec4899" },
  { yr: "2035", focus: "Vision — adequate housing for all", target: "2M homes delivered", col: "#f97316" }].
  map((y, idx) =>
  <CB key={y.yr} g="bg-gradient-to-br from-[#1a0d05] via-[#281508] to-[#1a0d05]">
        <SH tag={`Section ${21 + idx} — Year ${y.yr}`} title={`Housing ${y.yr}`} desc={y.focus} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div {...fadeUp} className="bg-card/60 border border-border rounded-xl p-6"><div className="text-3xl font-bold mb-2" style={{ color: y.col }}>{y.yr}</div><p className="text-muted-foreground text-sm">{y.focus}</p></motion.div>
          
        </div>
      </CB>
  )}

    {[
  { city: "Kabul New City", pop: "1M", area: "200 km²", inv: "$5B", col: "#3b82f6" },
  { city: "Herat Smart City", pop: "500K", area: "120 km²", inv: "$3B", col: "#22c55e" },
  { city: "Balkh Green City", pop: "300K", area: "80 km²", inv: "$2B", col: "#84cc16" },
  { city: "Kandahar Modern City", pop: "400K", area: "100 km²", inv: "$2.5B", col: "#f59e0b" },
  { city: "Nangarhar Gateway City", pop: "250K", area: "60 km²", inv: "$1.5B", col: "#8b5cf6" }].
  map((c, idx) =>
  <CB key={c.city} g="bg-gradient-to-br from-[#0a0d1a] via-[#101828] to-[#0a0d1a]">
        <SH tag={`Section ${31 + idx} — ${c.city}`} title={c.city} desc={`Population: ${c.pop}. Area: ${c.area}. Investment: ${c.inv}.`} />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <MC icon={Building2} value={c.pop} label="Population" sub="Target" color={c.col} i={0} />
          <MC icon={MapPin} value={c.area} label="Area" sub="Planned" color="#22c55e" i={1} />
          <MC icon={DollarSign} value={c.inv} label="Investment" sub="Total" color="#3b82f6" i={2} />
          <MC icon={Leaf} value="100%" label="Green" sub="Net-zero" color="#84cc16" i={3} />
        </div>
      </CB>
  )}

    <CB g="bg-gradient-to-br from-[#051a05] via-[#082808] to-[#051a05]">
      <SH tag="Sections XXXVI-XL — Construction Industry" title="Building Materials Revolution" desc="Domestic production of cement, steel, and sustainable materials." />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <MC icon={Factory} value="50" label="Cement Plants" sub="Domestic" color="#f59e0b" i={0} />
        <MC icon={Hammer} value="20" label="Steel Mills" sub="New" color="#3b82f6" i={1} />
        <MC icon={Leaf} value="30%" label="Green Materials" sub="Sustainable" color="#84cc16" i={2} />
        <MC icon={Users} value="1M" label="Construction Jobs" sub="Created" color="#22c55e" i={3} />
      </div>
      <div className="space-y-3">
        <PB label="Cement Production" value={80} max={100} color="#f59e0b" delay={0} />
        <PB label="Steel Production" value={60} max={100} color="#3b82f6" delay={0.1} />
        <PB label="Brick Manufacturing" value={90} max={100} color="#ef4444" delay={0.2} />
        <PB label="Timber Sustainable" value={45} max={100} color="#84cc16" delay={0.3} />
        <PB label="Glass Production" value={35} max={100} color="#8b5cf6" delay={0.4} />
      </div>
    </CB>

    <CB g="bg-gradient-to-br from-[#0a0a1a] via-[#0d0d28] to-[#0a0a1a]">
      <SH tag="Sections XLI-XLV — Smart Housing" title="Smart Home Technology" desc="IoT-enabled homes with solar, water recycling, and digital connectivity." />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <MC icon={Cpu} value="500K" label="Smart Homes" sub="IoT enabled" color="#8b5cf6" i={0} />
        <MC icon={Sun} value="100%" label="Solar Homes" sub="New builds" color="#f59e0b" i={1} />
        <MC icon={Droplets} value="80%" label="Water Recycling" sub="Greywater" color="#06b6d4" i={2} />
        <MC icon={Network} value="5G" label="Connectivity" sub="All homes" color="#22c55e" i={3} />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        <RC value={85} color="#8b5cf6" label="IoT Ready" />
        <RC value={100} color="#f59e0b" label="Solar" />
        <RC value={80} color="#06b6d4" label="Water Recycle" />
        <RC value={90} color="#22c55e" label="Energy Eff." />
        <RC value={75} color="#ef4444" label="Earthquake Safe" />
      </div>
    </CB>

    <CB g="bg-gradient-to-br from-[#1a050a] via-[#28080d] to-[#1a050a]">
      <SH tag="Sections XLVI-L — Partnerships" title="Housing Development Partners" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
      { n: "UN-Habitat", r: "Urban Planning", v: "$500M", c: "#3b82f6" }, { n: "World Bank", r: "Housing Finance", v: "$1B", c: "#22c55e" },
      { n: "ADB", r: "Infrastructure", v: "$800M", c: "#f59e0b" }, { n: "IsDB", r: "Social Housing", v: "$400M", c: "#8b5cf6" },
      { n: "Saudi Fund", r: "New Cities", v: "$2B", c: "#ef4444" }, { n: "UAE Dev", r: "Smart Housing", v: "$1B", c: "#06b6d4" },
      { n: "Turkey TOKI", r: "Mass Housing", v: "$500M", c: "#14b8a6" }, { n: "China CSCEC", r: "Construction", v: "$1.5B", c: "#ec4899" }].
      map((p, i) =>
      <motion.div key={p.n} {...stagger(i)} className="bg-card/60 border border-border rounded-xl p-4">
            <div className="text-lg font-bold" style={{ color: p.c }}>{p.n}</div><div className="text-xs text-muted-foreground">{p.r}</div><div className="text-sm font-semibold mt-1">{p.v}</div>
          </motion.div>
      )}
      </div>
    </CB>

    <CB g="bg-gradient-to-br from-[#0d0d1a] via-[#151528] to-[#0d0d1a]">
      <SH tag="Sections LI-LX — Urban Metrics" title="Urban Development Scorecard" />
      <div className="space-y-3 mb-8">
        <PB label="Housing Adequacy" value={70} max={100} color="#f59e0b" delay={0} />
        <PB label="Urban Planning" value={65} max={100} color="#3b82f6" delay={0.1} />
        <PB label="Green Buildings" value={40} max={100} color="#84cc16" delay={0.2} />
        <PB label="Public Spaces" value={55} max={100} color="#8b5cf6" delay={0.3} />
        <PB label="Sewerage Systems" value={50} max={100} color="#06b6d4" delay={0.4} />
        <PB label="Waste Management" value={45} max={100} color="#ef4444" delay={0.5} />
        <PB label="Street Infrastructure" value={60} max={100} color="#22c55e" delay={0.6} />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        <RC value={70} color="#f59e0b" label="Housing" />
        <RC value={65} color="#3b82f6" label="Planning" />
        <RC value={50} color="#22c55e" label="Infrastructure" />
        <RC value={40} color="#84cc16" label="Green" />
        <RC value={55} color="#8b5cf6" label="Livability" />
      </div>
    </CB>

    <CB g="bg-gradient-to-br from-[#1a0d05] via-[#281508] to-[#1a0d05]">
      <motion.div {...fadeUp} className="text-center mb-16">
        <span className="text-primary text-xs font-semibold tracking-[0.4em] uppercase mb-4 block">Sections LXI-LXX — Grand Vision</span>
        <h2 className="text-5xl md:text-7xl font-bold mb-6">Housing<br />2040 Vision</h2>
      </motion.div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <MC icon={Home} value="2M" label="Homes Built" sub="Total" color="#f59e0b" i={0} />
        <MC icon={Building2} value="5" label="New Cities" sub="Satellite" color="#3b82f6" i={1} />
        <MC icon={DollarSign} value="$15B" label="Invested" sub="Total" color="#22c55e" i={2} />
        <MC icon={Users} value="10M" label="Housed" sub="Citizens" color="#8b5cf6" i={3} />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        <RC value={100} color="#f59e0b" label="Adequacy" />
        <RC value={95} color="#3b82f6" label="Urban Plan" />
        <RC value={90} color="#22c55e" label="Safety" />
        <RC value={85} color="#84cc16" label="Green" />
        <RC value={80} color="#8b5cf6" label="Smart" />
      </div>
    </CB>
  </>;