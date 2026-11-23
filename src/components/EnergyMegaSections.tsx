import { motion } from "framer-motion";
import { useAnimatedValue } from "@/hooks/useAnimatedValue";
import {
  Zap, Sun, Wind, Droplets, Battery, Power, Lightbulb, Factory,
  TrendingUp, Users, Building2, Globe, Target, Award, Crown, Sparkles,
  Rocket, Shield, MapPin, Flag, Star, DollarSign, Briefcase,
  GraduationCap, Heart, Mountain, TreePine, Thermometer, Compass,
  Eye, Timer, Activity, Layers, BarChart3, Network, Database, Cpu,
  Leaf, Gem, Ship, Plane, Train, Truck, Package, Home,
  Handshake, Scale, BookOpen, Hammer, Wrench, Signal
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
};
const stagger = (i: number) => ({ ...fadeUp, transition: { duration: 0.8, ease: "easeOut" as const, delay: i * 0.06 } });

const CBlock = ({ gradient, children }: { gradient: string; children: React.ReactNode }) => (
  <section className="relative py-24 px-6 lg:px-12 overflow-hidden">
    <div className={`absolute inset-0 ${gradient}`} />
    <div className="absolute inset-0 opacity-[0.03]">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0id2hpdGUiLz48L3N2Zz4=')]" />
    </div>
    <div className="relative z-10 max-w-7xl mx-auto">{children}</div>
  </section>
);

const ECard = ({ icon: Icon, value, label, sub, color, i }: { icon: any; value: string; label: string; sub?: string; color: string; i: number }) => {
  const { ref, display } = useAnimatedValue(value);
  return (
    <motion.div ref={ref} {...stagger(i)} className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-5 hover:border-primary/40 transition-all">
      <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-3" style={{ background: `${color}15` }}>
        <Icon className="w-5 h-5" style={{ color }} />
      </div>
      <div className="text-2xl md:text-3xl font-bold mb-1" style={{ color }}>{display}</div>
      <div className="text-sm font-semibold">{label}</div>
      {sub && <div className="text-xs text-muted-foreground mt-1">{sub}</div>}
    </motion.div>
  );
};

const PBar = ({ label, value, max, color, delay = 0 }: { label: string; value: number; max: number; color: string; delay?: number }) => (
  <div className="space-y-1">
    <div className="flex justify-between text-xs">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-bold" style={{ color }}>{value}%</span>
    </div>
    <div className="h-2.5 bg-muted rounded-full overflow-hidden">
      <motion.div className="h-full rounded-full" style={{ background: `linear-gradient(90deg, ${color}, ${color}88)` }}
        initial={{ width: 0 }} whileInView={{ width: `${(value / max) * 100}%` }} viewport={{ once: true }}
        transition={{ duration: 1.4, delay, ease: "easeOut" }} />
    </div>
  </div>
);

const SH = ({ tag, title, desc }: { tag: string; title: string; desc?: string }) => (
  <motion.div {...fadeUp} className="mb-12">
    <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-3 block">{tag}</span>
    <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
    {desc && <p className="text-muted-foreground max-w-3xl">{desc}</p>}
  </motion.div>
);

const RingChart = ({ value, color, size = 100, label }: { value: number; color: string; size?: number; label: string }) => {
  const r = (size - 10) / 2; const circ = 2 * Math.PI * r; const offset = circ - (value / 100) * circ;
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative">
        <svg width={size} height={size} className="-rotate-90">
          <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="hsl(var(--muted))" strokeWidth="5" />
          <motion.circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth="5" strokeLinecap="round"
            strokeDasharray={circ} initial={{ strokeDashoffset: circ }}
            whileInView={{ strokeDashoffset: offset }} viewport={{ once: true }}
            transition={{ duration: 1.8, ease: "easeOut" }} />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-sm font-bold" style={{ color }}>{value}%</div>
      </div>
      <span className="text-xs text-muted-foreground text-center">{label}</span>
    </div>
  );
};

export const EnergyMegaSections = () => {
  return (
    <>
      {/* ═══ 1. ENERGY REVOLUTION HERO ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#1a1505] via-[#2d2008] to-[#1a1505]">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="text-primary text-xs font-semibold tracking-[0.4em] uppercase mb-4 block">Section I — Energy Revolution</span>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">Powering<br/>The Future</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">From energy importer to renewable energy superpower — Afghanistan's $15B clean energy transformation.</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ECard icon={Zap} value="5GW" label="Capacity Target" sub="By 2035" color="#f59e0b" i={0} />
          <ECard icon={Sun} value="300+" label="Sunny Days" sub="Per year" color="#eab308" i={1} />
          <ECard icon={DollarSign} value="$15B" label="Investment" sub="Total opportunity" color="#22c55e" i={2} />
          <ECard icon={Target} value="100%" label="Clean Energy" sub="By 2040" color="#3b82f6" i={3} />
        </div>
      </CBlock>

      {/* ═══ 2. SOLAR POWER DOMINANCE ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#1a1a05] via-[#28280d] to-[#1a1a05]">
        <SH tag="Section II — Solar Dominance" title="Harvesting Sunshine" desc="Afghanistan's southern provinces receive among the highest solar irradiance globally — perfect for utility-scale solar." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ECard icon={Sun} value="2GW" label="Solar Target" sub="Installed capacity" color="#eab308" i={0} />
          <ECard icon={MapPin} value="5,000" label="Hectares" sub="Solar parks" color="#f59e0b" i={1} />
          <ECard icon={DollarSign} value="$4B" label="Solar Investment" sub="Total" color="#22c55e" i={2} />
          <ECard icon={Users} value="50K" label="Solar Jobs" sub="Created" color="#3b82f6" i={3} />
        </div>
        <div className="mt-8 space-y-3">
          <PBar label="Helmand Solar Park" value={65} max={100} color="#eab308" delay={0} />
          <PBar label="Kandahar Solar Farm" value={45} max={100} color="#f59e0b" delay={0.1} />
          <PBar label="Nimroz Solar Zone" value={30} max={100} color="#22c55e" delay={0.2} />
          <PBar label="Farah Solar Corridor" value={20} max={100} color="#3b82f6" delay={0.3} />
        </div>
      </CBlock>

      {/* ═══ 3. HYDROELECTRIC POWER ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#051a1a] via-[#082828] to-[#051a1a]">
        <SH tag="Section III — Hydroelectric" title="Mountain Water Power" desc="25GW of untapped hydro potential in the Hindu Kush mountain system." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ECard icon={Droplets} value="25GW" label="Hydro Potential" sub="Untapped" color="#06b6d4" i={0} />
          <ECard icon={Target} value="1.5GW" label="2035 Target" sub="Installed" color="#3b82f6" i={1} />
          <ECard icon={Building2} value="200+" label="Dam Sites" sub="Identified" color="#22c55e" i={2} />
          <ECard icon={DollarSign} value="$5B" label="Hydro Investment" sub="Required" color="#f59e0b" i={3} />
        </div>
      </CBlock>

      {/* ═══ 4. WIND ENERGY ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#0a0d1a] via-[#101828] to-[#0a0d1a]">
        <SH tag="Section IV — Wind Power" title="Harnessing the Winds" desc="Herat-Farah wind corridor and northern highlands offer world-class wind resources." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ECard icon={Wind} value="1GW" label="Wind Target" sub="By 2035" color="#06b6d4" i={0} />
          <ECard icon={MapPin} value="120" label="Wind Days" sub="Consistent corridor" color="#3b82f6" i={1} />
          <ECard icon={DollarSign} value="$3B" label="Wind Investment" sub="Total" color="#22c55e" i={2} />
          <ECard icon={Factory} value="500" label="Turbines" sub="Planned" color="#f59e0b" i={3} />
        </div>
      </CBlock>

      {/* ═══ 5. BATTERY STORAGE ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#0d0a1a] via-[#150d28] to-[#0d0a1a]">
        <SH tag="Section V — Energy Storage" title="Battery Revolution" desc="Grid-scale storage ensuring 24/7 reliable power from variable renewables." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ECard icon={Battery} value="2GWh" label="Storage Target" sub="By 2035" color="#8b5cf6" i={0} />
          <ECard icon={DollarSign} value="$2B" label="Storage Investment" sub="Total" color="#22c55e" i={1} />
          <ECard icon={Power} value="99.9%" label="Grid Reliability" sub="Target uptime" color="#3b82f6" i={2} />
          <ECard icon={Zap} value="500MW" label="Kandahar Hub" sub="Largest site" color="#f59e0b" i={3} />
        </div>
      </CBlock>

      {/* ═══ 6. NATIONAL GRID ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#0a1a0a] via-[#0d2810] to-[#0a1a0a]">
        <SH tag="Section VI — Smart Grid" title="National Grid Modernisation" desc="Smart grid connecting all 34 provinces with reliable electricity for the first time." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ECard icon={Network} value="34" label="Provinces" sub="Connected" color="#22c55e" i={0} />
          <ECard icon={DollarSign} value="$3B" label="Grid Investment" sub="Total" color="#3b82f6" i={1} />
          <ECard icon={Signal} value="50,000km" label="Power Lines" sub="Transmission" color="#f59e0b" i={2} />
          <ECard icon={Cpu} value="100%" label="Smart Meters" sub="Digital coverage" color="#8b5cf6" i={3} />
        </div>
      </CBlock>

      {/* ═══ 7. RURAL ELECTRIFICATION ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#1a1005] via-[#281808] to-[#1a1005]">
        <SH tag="Section VII — Rural Power" title="Light for Every Village" desc="10 million people gaining first-time electricity access through off-grid solar." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ECard icon={Lightbulb} value="10M" label="People Powered" sub="First-time access" color="#f59e0b" i={0} />
          <ECard icon={Home} value="2M" label="Homes" sub="Solar systems" color="#22c55e" i={1} />
          <ECard icon={MapPin} value="10,000" label="Villages" sub="Electrified" color="#3b82f6" i={2} />
          <ECard icon={DollarSign} value="$1B" label="Investment" sub="Off-grid" color="#8b5cf6" i={3} />
        </div>
      </CBlock>

      {/* ═══ 8. ENERGY INDEPENDENCE ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#1a0505] via-[#2d0808] to-[#1a0505]">
        <SH tag="Section VIII — Independence" title="End of Energy Imports" desc="From importing 80% of electricity to becoming a net energy exporter." />
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          <RingChart value={20} color="#ef4444" label="2024 Domestic" />
          <RingChart value={45} color="#f59e0b" label="2028 Target" />
          <RingChart value={70} color="#22c55e" label="2032 Target" />
          <RingChart value={100} color="#3b82f6" label="2035 Target" />
          <RingChart value={120} color="#8b5cf6" label="2040 Export" />
        </div>
      </CBlock>

      {/* ═══ 9-18: MEGA PROJECT DASHBOARDS ═══ */}
      {[
        { name: "Helmand Solar Mega-Park", loc: "Helmand", inv: "$2B", cap: "1GW", status: "Under Construction", col: "#eab308" },
        { name: "Kajaki Dam Expansion", loc: "Helmand", inv: "$800M", cap: "150MW", status: "Under Construction", col: "#06b6d4" },
        { name: "Herat Wind Farm", loc: "Herat", inv: "$1.5B", cap: "500MW", status: "Planned", col: "#3b82f6" },
        { name: "Kandahar Battery Hub", loc: "Kandahar", inv: "$500M", cap: "500MWh", status: "Planned", col: "#8b5cf6" },
        { name: "Panjshir Micro-Hydro", loc: "Panjshir", inv: "$200M", cap: "50MW", status: "Operational", col: "#22c55e" },
        { name: "Bamyan Geothermal", loc: "Bamyan", inv: "$300M", cap: "100MW", status: "Planned", col: "#ef4444" },
        { name: "Balkh Solar Farm", loc: "Balkh", inv: "$400M", cap: "200MW", status: "Under Construction", col: "#f59e0b" },
        { name: "Kunar Run-of-River", loc: "Kunar", inv: "$600M", cap: "300MW", status: "Planned", col: "#14b8a6" },
        { name: "Farah Wind Corridor", loc: "Farah", inv: "$800M", cap: "300MW", status: "Planned", col: "#ec4899" },
        { name: "Nangarhar Solar Zone", loc: "Nangarhar", inv: "$350M", cap: "150MW", status: "Under Construction", col: "#84cc16" },
      ].map((p, idx) => (
        <CBlock key={p.name} gradient={`bg-gradient-to-br from-[#0a1a0a] via-[#102810] to-[#0a1a0a]`}>
          <SH tag={`Section ${9 + idx} — Mega Project`} title={p.name} desc={`Location: ${p.loc}. Status: ${p.status}.`} />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ECard icon={Zap} value={p.cap} label="Capacity" sub={p.loc} color={p.col} i={0} />
            <ECard icon={DollarSign} value={p.inv} label="Investment" sub="Total" color="#22c55e" i={1} />
            <ECard icon={MapPin} value={p.loc} label="Province" sub="Location" color="#3b82f6" i={2} />
            <ECard icon={Activity} value={p.status} label="Status" sub="Current" color="#f59e0b" i={3} />
          </div>
        </CBlock>
      ))}

      {/* ═══ 19-28: PROVINCIAL ENERGY PROFILES ═══ */}
      {[
        { prov: "Herat", type: "Wind + Solar", cap: "800MW", inv: "$2.5B", pct: 90, col: "#f59e0b" },
        { prov: "Helmand", type: "Solar Mega", cap: "1.2GW", inv: "$3B", pct: 85, col: "#eab308" },
        { prov: "Kandahar", type: "Solar + Storage", cap: "600MW", inv: "$1.5B", pct: 80, col: "#22c55e" },
        { prov: "Bamyan", type: "Hydro + Geothermal", cap: "400MW", inv: "$1.2B", pct: 75, col: "#06b6d4" },
        { prov: "Kabul", type: "Grid Hub", cap: "500MW", inv: "$1.5B", pct: 95, col: "#3b82f6" },
        { prov: "Balkh", type: "Solar + Wind", cap: "350MW", inv: "$900M", pct: 70, col: "#8b5cf6" },
        { prov: "Panjshir", type: "Micro-Hydro", cap: "100MW", inv: "$300M", pct: 65, col: "#14b8a6" },
        { prov: "Kunar", type: "Run-of-River", cap: "300MW", inv: "$600M", pct: 60, col: "#84cc16" },
        { prov: "Nangarhar", type: "Solar", cap: "200MW", inv: "$500M", pct: 55, col: "#f97316" },
        { prov: "Kunduz", type: "Solar + Wind", cap: "250MW", inv: "$600M", pct: 50, col: "#ef4444" },
      ].map((p, idx) => (
        <CBlock key={p.prov} gradient={`bg-gradient-to-br from-[#1a1505] via-[#2d2008] to-[#1a1505]`}>
          <SH tag={`Section ${19 + idx} — ${p.prov}`} title={`${p.prov}: ${p.type}`} desc={`Capacity: ${p.cap}. Investment: ${p.inv}.`} />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ECard icon={Zap} value={p.cap} label="Capacity" sub={p.prov} color={p.col} i={0} />
            <ECard icon={DollarSign} value={p.inv} label="Investment" sub="Total" color="#22c55e" i={1} />
            <RingChart value={p.pct} color={p.col} label="Completion" />
            <RingChart value={p.pct - 10} color="#3b82f6" label="Grid Connected" />
          </div>
        </CBlock>
      ))}

      {/* ═══ 29. SOLAR MANUFACTURING ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#1a1a05] via-[#28280d] to-[#1a1a05]">
        <SH tag="Section XXIX — Manufacturing" title="Domestic Solar Panel Production" desc="Building Afghanistan's solar panel manufacturing industry for cost reduction and jobs." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ECard icon={Factory} value="10" label="Factories" sub="Solar panels" color="#eab308" i={0} />
          <ECard icon={Package} value="1GW" label="Annual Output" sub="Panel capacity" color="#22c55e" i={1} />
          <ECard icon={Users} value="20K" label="Factory Jobs" sub="Manufacturing" color="#3b82f6" i={2} />
          <ECard icon={DollarSign} value="30%" label="Cost Reduction" sub="vs imports" color="#f59e0b" i={3} />
        </div>
      </CBlock>

      {/* ═══ 30. CROSS-BORDER ENERGY TRADE ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#0a0d1a] via-[#101828] to-[#0a0d1a]">
        <SH tag="Section XXX — Energy Trade" title="Regional Energy Hub" desc="CASA-1000 and bilateral agreements creating $2B annual energy export market." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ECard icon={Globe} value="$2B" label="Export Revenue" sub="Annual target" color="#3b82f6" i={0} />
          <ECard icon={Handshake} value="6" label="Trade Partners" sub="Countries" color="#22c55e" i={1} />
          <ECard icon={Network} value="5,000km" label="Cross-Border Lines" sub="Transmission" color="#f59e0b" i={2} />
          <ECard icon={Ship} value="10GW" label="Export Capacity" sub="By 2040" color="#8b5cf6" i={3} />
        </div>
      </CBlock>

      {/* ═══ 31-40: TECHNOLOGY DEEP DIVES ═══ */}
      {[
        { tech: "Photovoltaic Cells", desc: "Latest mono-crystalline and bifacial panel technology", eff: 85, col: "#eab308" },
        { tech: "Wind Turbines", desc: "5MW+ turbines designed for Afghan wind conditions", eff: 75, col: "#06b6d4" },
        { tech: "Pumped Hydro Storage", desc: "Mountain reservoirs for gravity-based energy storage", eff: 70, col: "#3b82f6" },
        { tech: "Lithium-Ion Batteries", desc: "Grid-scale battery systems for load balancing", eff: 80, col: "#8b5cf6" },
        { tech: "Smart Grid AI", desc: "Artificial intelligence optimising power distribution", eff: 60, col: "#22c55e" },
        { tech: "Micro-Grid Systems", desc: "Independent power systems for remote communities", eff: 65, col: "#f59e0b" },
        { tech: "Solar Thermal", desc: "Concentrated solar power for industrial heat", eff: 45, col: "#ef4444" },
        { tech: "Green Hydrogen", desc: "Electrolyser technology for hydrogen fuel production", eff: 30, col: "#14b8a6" },
        { tech: "Geothermal Energy", desc: "Tapping volcanic heat in Bamyan and Band-e-Amir", eff: 40, col: "#ec4899" },
        { tech: "Biomass Gasification", desc: "Agricultural waste conversion to clean energy", eff: 50, col: "#84cc16" },
      ].map((t, idx) => (
        <CBlock key={t.tech} gradient={`bg-gradient-to-br from-[#0a1a0a] via-[#102810] to-[#0a1a0a]`}>
          <SH tag={`Section ${31 + idx} — Technology`} title={t.tech} desc={t.desc} />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <RingChart value={t.eff} color={t.col} label="Deployment %" size={120} />
            <motion.div {...fadeUp} className="bg-card/60 border border-border rounded-xl p-6 flex flex-col justify-center">
              <div className="text-sm text-muted-foreground mb-1">Technology Readiness</div>
              <PBar label="Deployed" value={t.eff} max={100} color={t.col} />
            </motion.div>
            <motion.div {...stagger(1)} className="bg-card/60 border border-border rounded-xl p-6 flex flex-col justify-center">
              <div className="text-sm text-muted-foreground mb-1">Growth Potential</div>
              <PBar label="Upside" value={100 - t.eff} max={100} color="#22c55e" />
            </motion.div>
          </div>
        </CBlock>
      ))}

      {/* ═══ 41. ENERGY WORKFORCE ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#0d0a1a] via-[#150d28] to-[#0d0a1a]">
        <SH tag="Section XLI — Workforce" title="200,000 Energy Jobs" desc="Training the next generation of energy technicians, engineers, and managers." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ECard icon={Users} value="200K" label="Total Jobs" sub="Energy sector" color="#8b5cf6" i={0} />
          <ECard icon={GraduationCap} value="20K" label="Technicians" sub="Trained annually" color="#3b82f6" i={1} />
          <ECard icon={Building2} value="10" label="Energy Academies" sub="Established" color="#22c55e" i={2} />
          <ECard icon={Award} value="5,000" label="Engineers" sub="Graduated" color="#f59e0b" i={3} />
        </div>
      </CBlock>

      {/* ═══ 42-51: YEAR-BY-YEAR ENERGY ROADMAP ═══ */}
      {[
        { yr: "2026", focus: "Foundation — Grid assessment, pilot solar installations", target: "500MW installed", col: "#f59e0b" },
        { yr: "2027", focus: "Scale — First utility-scale solar parks operational", target: "1GW milestone", col: "#22c55e" },
        { yr: "2028", focus: "Hydro Push — Major dam projects begin generating", target: "1.5GW total", col: "#06b6d4" },
        { yr: "2029", focus: "Wind Launch — Herat wind corridor farms online", target: "2GW total", col: "#3b82f6" },
        { yr: "2030", focus: "Storage — Grid-scale batteries deployed", target: "2.5GW + 500MWh", col: "#8b5cf6" },
        { yr: "2031", focus: "Grid Complete — All provinces connected", target: "3GW total", col: "#14b8a6" },
        { yr: "2032", focus: "Export — Cross-border energy trade begins", target: "3.5GW capacity", col: "#ec4899" },
        { yr: "2033", focus: "Manufacturing — Domestic panel production scales", target: "4GW total", col: "#84cc16" },
        { yr: "2034", focus: "Hydrogen — Green hydrogen pilot plants", target: "4.5GW capacity", col: "#f97316" },
        { yr: "2035", focus: "Vision Achieved — 5GW clean energy independence", target: "5GW + exports", col: "#ef4444" },
      ].map((y, idx) => (
        <CBlock key={y.yr} gradient={`bg-gradient-to-br from-[#1a1505] via-[#2d2008] to-[#1a1505]`}>
          <SH tag={`Section ${42 + idx} — Year ${y.yr}`} title={`Energy ${y.yr}`} desc={y.focus} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div {...fadeUp} className="bg-card/60 border border-border rounded-xl p-6">
              <div className="text-3xl font-bold mb-2" style={{ color: y.col }}>{y.yr}</div>
              <p className="text-muted-foreground text-sm">{y.focus}</p>
            </motion.div>
            <motion.div {...stagger(1)} className="bg-card/60 border border-border rounded-xl p-6">
              <div className="text-sm text-muted-foreground mb-1">Milestone</div>
              <div className="text-2xl font-bold" style={{ color: y.col }}>{y.target}</div>
            </motion.div>
          </div>
        </CBlock>
      ))}

      {/* ═══ 52. ENERGY EFFICIENCY ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#0a1a0a] via-[#0d2810] to-[#0a1a0a]">
        <SH tag="Section LII — Efficiency" title="Energy Efficiency Standards" desc="Mandatory efficiency standards reducing consumption by 30% across all sectors." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ECard icon={Lightbulb} value="30%" label="Energy Saved" sub="Efficiency gains" color="#22c55e" i={0} />
          <ECard icon={Home} value="100%" label="New Buildings" sub="Green standard" color="#3b82f6" i={1} />
          <ECard icon={Factory} value="50%" label="Industrial" sub="Efficiency upgrade" color="#f59e0b" i={2} />
          <ECard icon={DollarSign} value="$2B" label="Annual Savings" sub="Energy costs" color="#8b5cf6" i={3} />
        </div>
      </CBlock>

      {/* ═══ 53-60: INVESTMENT SOURCES ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#0d0d1a] via-[#151528] to-[#0d0d1a]">
        <SH tag="Sections LIII-LX — Financing" title="$15B Investment Sources" desc="Diversified funding from multilateral banks, private equity, and green bonds." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { source: "World Bank", amt: "$3B", col: "#3b82f6" },
            { source: "ADB", amt: "$2.5B", col: "#22c55e" },
            { source: "Green Climate Fund", amt: "$2B", col: "#84cc16" },
            { source: "IsDB", amt: "$1.5B", col: "#f59e0b" },
            { source: "Private Equity", amt: "$2B", col: "#8b5cf6" },
            { source: "Sovereign Bonds", amt: "$1.5B", col: "#ef4444" },
            { source: "PPP", amt: "$1.5B", col: "#06b6d4" },
            { source: "Bilateral Aid", amt: "$1B", col: "#ec4899" },
          ].map((s, i) => (
            <motion.div key={s.source} {...stagger(i)} className="bg-card/60 border border-border rounded-xl p-4">
              <div className="text-lg font-bold" style={{ color: s.col }}>{s.source}</div>
              <div className="text-2xl font-bold mt-1">{s.amt}</div>
            </motion.div>
          ))}
        </div>
      </CBlock>

      {/* ═══ 61-70: ENVIRONMENTAL IMPACT ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#051a0d] via-[#082815] to-[#051a0d]">
        <SH tag="Sections LXI-LXX — Environment" title="Carbon Reduction Impact" desc="Clean energy preventing 50M tonnes of CO2 emissions annually by 2040." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <ECard icon={Leaf} value="50M" label="Tonnes CO2" sub="Prevented annually" color="#22c55e" i={0} />
          <ECard icon={TreePine} value="100M" label="Trees Equivalent" sub="Carbon offset" color="#84cc16" i={1} />
          <ECard icon={Globe} value="$500M" label="Carbon Credits" sub="Annual revenue" color="#3b82f6" i={2} />
          <ECard icon={Target} value="Net Zero" label="By 2045" sub="National goal" color="#f59e0b" i={3} />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          <RingChart value={90} color="#22c55e" label="Clean Generation" />
          <RingChart value={75} color="#3b82f6" label="Grid Efficiency" />
          <RingChart value={60} color="#84cc16" label="E-Mobility" />
          <RingChart value={45} color="#f59e0b" label="Industrial Clean" />
          <RingChart value={80} color="#8b5cf6" label="Residential Clean" />
        </div>
      </CBlock>

      {/* ═══ 71-80: ENERGY ACCESS METRICS ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#1a0a0a] via-[#280d0d] to-[#1a0a0a]">
        <SH tag="Sections LXXI-LXXX — Access" title="Universal Energy Access" desc="From 30% electrification to 100% — powering every home, school, and hospital." />
        <div className="space-y-3 mb-8">
          <PBar label="Urban Electrification" value={95} max={100} color="#3b82f6" delay={0} />
          <PBar label="Rural Electrification" value={75} max={100} color="#22c55e" delay={0.1} />
          <PBar label="Industrial Power" value={90} max={100} color="#f59e0b" delay={0.2} />
          <PBar label="Agricultural Power" value={60} max={100} color="#84cc16" delay={0.3} />
          <PBar label="Healthcare Facilities" value={100} max={100} color="#ef4444" delay={0.4} />
          <PBar label="Educational Institutions" value={100} max={100} color="#8b5cf6" delay={0.5} />
          <PBar label="Government Buildings" value={100} max={100} color="#06b6d4" delay={0.6} />
          <PBar label="Telecom Towers" value={95} max={100} color="#ec4899" delay={0.7} />
          <PBar label="Water Pumping Stations" value={85} max={100} color="#14b8a6" delay={0.8} />
          <PBar label="Street Lighting" value={80} max={100} color="#f97316" delay={0.9} />
        </div>
      </CBlock>

      {/* ═══ 81-90: PARTNERSHIPS ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#0a0a1a] via-[#0d0d28] to-[#0a0a1a]">
        <SH tag="Sections LXXXI-XC — Partnerships" title="Global Energy Alliances" desc="Strategic partnerships with 30+ international energy organizations." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "IRENA", role: "Renewable Strategy", inv: "$200M", col: "#22c55e" },
            { name: "World Bank Energy", role: "Grid Finance", inv: "$3B", col: "#3b82f6" },
            { name: "Masdar (UAE)", role: "Solar Development", inv: "$1B", col: "#eab308" },
            { name: "ACWA Power", role: "Wind & Solar", inv: "$800M", col: "#06b6d4" },
            { name: "JICA Energy", role: "Hydro Development", inv: "$500M", col: "#8b5cf6" },
            { name: "GIZ Programme", role: "Rural Energy", inv: "$300M", col: "#84cc16" },
            { name: "EU Green Deal", role: "Climate Finance", inv: "$400M", col: "#f59e0b" },
            { name: "India NTPC", role: "Technical Advisory", inv: "$200M", col: "#ef4444" },
          ].map((p, i) => (
            <motion.div key={p.name} {...stagger(i)} className="bg-card/60 border border-border rounded-xl p-4">
              <div className="text-lg font-bold" style={{ color: p.col }}>{p.name}</div>
              <div className="text-xs text-muted-foreground">{p.role}</div>
              <div className="text-sm font-semibold mt-1">{p.inv}</div>
            </motion.div>
          ))}
        </div>
      </CBlock>

      {/* ═══ 91-95: INNOVATION LAB ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#0d0a1a] via-[#150d28] to-[#0d0a1a]">
        <SH tag="Sections XCI-XCV — Innovation" title="Energy R&D Hub" desc="National energy research driving next-generation clean technology." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ECard icon={Rocket} value="$500M" label="R&D Budget" sub="10-year" color="#8b5cf6" i={0} />
          <ECard icon={Lightbulb} value="100+" label="Patents Filed" sub="Clean energy" color="#22c55e" i={1} />
          <ECard icon={GraduationCap} value="2,000" label="Researchers" sub="Energy science" color="#3b82f6" i={2} />
          <ECard icon={Globe} value="20" label="Global Labs" sub="Partnerships" color="#f59e0b" i={3} />
        </div>
      </CBlock>

      {/* ═══ 96-100: GRAND VISION SUMMARY ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#1a1505] via-[#2d2008] to-[#1a1505]">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="text-primary text-xs font-semibold tracking-[0.4em] uppercase mb-4 block">Sections XCVI-C — Grand Vision</span>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">Energy<br/>2040 Vision</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Complete energy independence and regional export leadership through 100% renewable energy.</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <ECard icon={Zap} value="5GW" label="Clean Capacity" sub="Installed" color="#f59e0b" i={0} />
          <ECard icon={Users} value="200K" label="Energy Jobs" sub="Created" color="#3b82f6" i={1} />
          <ECard icon={DollarSign} value="$15B" label="Total Invested" sub="Clean energy" color="#22c55e" i={2} />
          <ECard icon={Globe} value="$2B" label="Export Revenue" sub="Annual" color="#8b5cf6" i={3} />
          <ECard icon={Lightbulb} value="100%" label="Electrification" sub="Universal" color="#eab308" i={4} />
          <ECard icon={Leaf} value="50M" label="CO2 Prevented" sub="Tonnes/year" color="#84cc16" i={5} />
          <ECard icon={Battery} value="2GWh" label="Storage" sub="Grid-scale" color="#06b6d4" i={6} />
          <ECard icon={Target} value="Net Zero" label="By 2045" sub="National goal" color="#ef4444" i={7} />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          <RingChart value={100} color="#22c55e" label="Clean Energy" />
          <RingChart value={100} color="#3b82f6" label="Grid Coverage" />
          <RingChart value={95} color="#f59e0b" label="Reliability" />
          <RingChart value={85} color="#8b5cf6" label="Efficiency" />
          <RingChart value={100} color="#ef4444" label="Independence" />
        </div>
      </CBlock>
    </>
  );
};
