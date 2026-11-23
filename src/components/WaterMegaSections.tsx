import { motion } from "framer-motion";
import { useAnimatedValue } from "@/hooks/useAnimatedValue";
import {
  Droplets, Droplet, Mountain, Globe, Target, Award, TrendingUp, Users,
  DollarSign, Building2, Shield, MapPin, Star, Lightbulb, Rocket,
  GraduationCap, Heart, Factory, Home, Package, Leaf, TreePine,
  Layers, BarChart3, Eye, Timer, Activity, Compass, Zap, Sun, Wind,
  Cpu, Network, Database, Hammer, Wrench, Truck, Ship, Crown } from
"lucide-react";

const fadeUp = { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } };
const stagger = (i: number) => ({ ...fadeUp, transition: { duration: 0.8, ease: "easeOut" as const, delay: i * 0.06 } });
const CB = ({ g, children }: {g: string;children: React.ReactNode;}) => <section className="relative py-24 px-6 lg:px-12 overflow-hidden"><div className={`absolute inset-0 ${g}`} /><div className="absolute inset-0 opacity-[0.03]"><div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0id2hpdGUiLz48L3N2Zz4=')]" /></div><div className="relative z-10 max-w-7xl mx-auto">{children}</div></section>;
const MC = ({ icon: Icon, value, label, sub, color, i }: {icon: any;value: string;label: string;sub?: string;color: string;i: number;}) => {const { ref, display } = useAnimatedValue(value);return <motion.div ref={ref} {...stagger(i)} className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-5 hover:border-primary/40 transition-all"><div className="w-11 h-11 rounded-xl flex items-center justify-center mb-3" style={{ background: `${color}15` }}><Icon className="w-5 h-5" style={{ color }} /></div><div className="text-2xl md:text-3xl font-bold mb-1" style={{ color }}>{display}</div><div className="text-sm font-semibold">{label}</div>{sub && <div className="text-xs text-muted-foreground mt-1">{sub}</div>}</motion.div>;};
const PB = ({ label, value, max, color, delay = 0 }: {label: string;value: number;max: number;color: string;delay?: number;}) => <div className="space-y-1"><div className="flex justify-between text-xs"><span className="text-muted-foreground">{label}</span><span className="font-bold" style={{ color }}>{value}%</span></div><div className="h-2.5 bg-muted rounded-full overflow-hidden"><motion.div className="h-full rounded-full" style={{ background: `linear-gradient(90deg, ${color}, ${color}88)` }} initial={{ width: 0 }} whileInView={{ width: `${value / max * 100}%` }} viewport={{ once: true }} transition={{ duration: 1.4, delay, ease: "easeOut" }} /></div></div>;
const SH = ({ tag, title, desc }: {tag: string;title: string;desc?: string;}) => <motion.div {...fadeUp} className="mb-12"><span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-3 block">{tag}</span><h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>{desc && <p className="text-muted-foreground max-w-3xl">{desc}</p>}</motion.div>;
const RC = ({ value, color, size = 100, label }: {value: number;color: string;size?: number;label: string;}) => {const r = (size - 10) / 2;const c = 2 * Math.PI * r;return <div className="flex flex-col items-center gap-2"><div className="relative"><svg width={size} height={size} className="-rotate-90"><circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="hsl(var(--muted))" strokeWidth="5" /><motion.circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth="5" strokeLinecap="round" strokeDasharray={c} initial={{ strokeDashoffset: c }} whileInView={{ strokeDashoffset: c - value / 100 * c }} viewport={{ once: true }} transition={{ duration: 1.8, ease: "easeOut" }} /></svg><div className="absolute inset-0 flex items-center justify-center text-sm font-bold" style={{ color }}>{value}%</div></div><span className="text-xs text-muted-foreground text-center">{label}</span></div>;};

export const WaterMegaSections = () =>
<>
    <CB g="bg-gradient-to-br from-[#051a1a] via-[#082828] to-[#051a1a]">
      <motion.div {...fadeUp} className="text-center mb-16">
        <span className="text-primary text-xs font-semibold tracking-[0.4em] uppercase mb-4 block">Section I — Water Security</span>
        <h2 className="text-5xl md:text-7xl font-bold mb-6">Every Drop<br />Counts</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">100% clean water access for 40 million people — dams, irrigation, desalination, and smart water management.</p>
      </motion.div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <MC icon={Droplets} value="100%" label="Clean Water" sub="Access target" color="#06b6d4" i={0} />
        <MC icon={Mountain} value="75" label="Major Dams" sub="Built or upgraded" color="#3b82f6" i={1} />
        <MC icon={DollarSign} value="$8B" label="Water Investment" sub="15-year plan" color="#22c55e" i={2} />
        <MC icon={Users} value="40M" label="Citizens Served" sub="Universal access" color="#f59e0b" i={3} />
      </div>
    </CB>

    {[
  { sys: "Irrigation Systems", target: "5M hectares", inv: "$3B", coverage: "70%", col: "#22c55e" },
  { sys: "Urban Water Supply", target: "15M people", inv: "$2B", coverage: "95%", col: "#3b82f6" },
  { sys: "Rural Water Wells", target: "25M people", inv: "$1.5B", coverage: "80%", col: "#06b6d4" },
  { sys: "Dam Construction", target: "75 dams", inv: "$5B", coverage: "Nationwide", col: "#8b5cf6" },
  { sys: "Wastewater Treatment", target: "500 plants", inv: "$1B", coverage: "60%", col: "#f59e0b" },
  { sys: "Flood Management", target: "34 provinces", inv: "$500M", coverage: "100%", col: "#ef4444" },
  { sys: "Groundwater Monitoring", target: "10K wells", inv: "$200M", coverage: "All aquifers", col: "#14b8a6" },
  { sys: "Watershed Management", target: "100 basins", inv: "$300M", coverage: "All rivers", col: "#84cc16" },
  { sys: "Desalination Pilots", target: "10 plants", inv: "$200M", coverage: "Arid zones", col: "#ec4899" }].
  map((s, idx) =>
  <CB key={s.sys} g="bg-gradient-to-br from-[#0a0d1a] via-[#101828] to-[#0a0d1a]">
        <SH tag={`Section ${2 + idx} — ${s.sys}`} title={s.sys} desc={`Target: ${s.target}. Investment: ${s.inv}. Coverage: ${s.coverage}.`} />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <MC icon={Droplets} value={s.target} label="Target" sub={s.sys} color={s.col} i={0} />
          <MC icon={DollarSign} value={s.inv} label="Investment" sub="Total" color="#22c55e" i={1} />
          <MC icon={MapPin} value={s.coverage} label="Coverage" sub="Geographic" color="#3b82f6" i={2} />
          <MC icon={Target} value="100%" label="Quality" sub="WHO standard" color="#f59e0b" i={3} />
        </div>
      </CB>
  )}

    {[
  { prov: "Kabul", access: 85, dams: "8", wells: "2,000", col: "#3b82f6" },
  { prov: "Herat", access: 75, dams: "12", wells: "3,000", col: "#22c55e" },
  { prov: "Balkh", access: 70, dams: "6", wells: "1,500", col: "#f59e0b" },
  { prov: "Nangarhar", access: 65, dams: "5", wells: "1,200", col: "#ef4444" },
  { prov: "Kandahar", access: 55, dams: "4", wells: "1,800", col: "#8b5cf6" },
  { prov: "Helmand", access: 60, dams: "10", wells: "2,500", col: "#06b6d4" },
  { prov: "Bamyan", access: 80, dams: "3", wells: "800", col: "#14b8a6" },
  { prov: "Kunduz", access: 65, dams: "4", wells: "1,000", col: "#ec4899" },
  { prov: "Badakhshan", access: 50, dams: "5", wells: "600", col: "#84cc16" },
  { prov: "Paktya", access: 55, dams: "3", wells: "900", col: "#f97316" }].
  map((p, idx) =>
  <CB key={p.prov} g="bg-gradient-to-br from-[#051a1a] via-[#082828] to-[#051a1a]">
        <SH tag={`Section ${11 + idx} — ${p.prov}`} title={`${p.prov} Water`} desc={`${p.dams} dams. ${p.wells} wells.`} />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <MC icon={Mountain} value={p.dams} label="Dams" sub={p.prov} color={p.col} i={0} />
          <MC icon={Droplets} value={p.wells} label="Wells" sub="Active" color="#22c55e" i={1} />
          <RC value={p.access} color={p.col} label="Water Access" />
          <RC value={p.access + 10} color="#3b82f6" label="Quality" />
        </div>
      </CB>
  )}

    {[
  { yr: "2026", focus: "National water audit and baseline mapping", target: "100% basin surveyed", col: "#06b6d4" },
  { yr: "2027", focus: "Urban water system upgrades begin", target: "5M improved access", col: "#3b82f6" },
  { yr: "2028", focus: "10 major dams under construction", target: "2GWh hydro added", col: "#22c55e" },
  { yr: "2029", focus: "Rural well drilling programme", target: "5,000 new wells", col: "#f59e0b" },
  { yr: "2030", focus: "Irrigation modernisation phase 1", target: "1M hectares converted", col: "#8b5cf6" },
  { yr: "2031", focus: "Wastewater treatment expansion", target: "200 plants online", col: "#ef4444" },
  { yr: "2032", focus: "Flood control infrastructure", target: "All rivers managed", col: "#14b8a6" },
  { yr: "2033", focus: "Smart water monitoring network", target: "IoT across all systems", col: "#ec4899" },
  { yr: "2034", focus: "Transboundary water agreements", target: "All neighbours agreed", col: "#84cc16" },
  { yr: "2035", focus: "Vision — 100% water security", target: "Universal clean water", col: "#f97316" }].
  map((y, idx) =>
  <CB key={y.yr} g="bg-gradient-to-br from-[#051a1a] via-[#082828] to-[#051a1a]">
        <SH tag={`Section ${21 + idx} — Year ${y.yr}`} title={`Water ${y.yr}`} desc={y.focus} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div {...fadeUp} className="bg-card/60 border border-border rounded-xl p-6"><div className="text-3xl font-bold mb-2" style={{ color: y.col }}>{y.yr}</div><p className="text-muted-foreground text-sm">{y.focus}</p></motion.div>
          
        </div>
      </CB>
  )}

    {[
  { river: "Helmand River Basin", flow: "11B m³/yr", dams: "15", irrigation: "1.5M ha", col: "#3b82f6" },
  { river: "Kabul River Basin", flow: "26B m³/yr", dams: "10", irrigation: "800K ha", col: "#22c55e" },
  { river: "Amu Darya Basin", flow: "20B m³/yr", dams: "12", irrigation: "1M ha", col: "#06b6d4" },
  { river: "Hari Rud Basin", flow: "3B m³/yr", dams: "8", irrigation: "500K ha", col: "#f59e0b" },
  { river: "Northern Basins", flow: "5B m³/yr", dams: "10", irrigation: "600K ha", col: "#8b5cf6" },
  { river: "Panjshir Valley", flow: "4B m³/yr", dams: "5", irrigation: "200K ha", col: "#ef4444" },
  { river: "Farah Rud Basin", flow: "2B m³/yr", dams: "4", irrigation: "300K ha", col: "#14b8a6" },
  { river: "Arghandab Basin", flow: "3B m³/yr", dams: "6", irrigation: "400K ha", col: "#ec4899" }].
  map((r, idx) =>
  <CB key={r.river} g="bg-gradient-to-br from-[#0a0d1a] via-[#101828] to-[#0a0d1a]">
        <SH tag={`Section ${31 + idx} — ${r.river}`} title={r.river} desc={`Flow: ${r.flow}. Dams: ${r.dams}. Irrigation: ${r.irrigation}.`} />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <MC icon={Droplets} value={r.flow} label="Annual Flow" sub={r.river} color={r.col} i={0} />
          <MC icon={Mountain} value={r.dams} label="Dams" sub="Planned" color="#22c55e" i={1} />
          <MC icon={Leaf} value={r.irrigation} label="Irrigation" sub="Hectares" color="#3b82f6" i={2} />
          <MC icon={Shield} value="100%" label="Managed" sub="Flood control" color="#f59e0b" i={3} />
        </div>
      </CB>
  )}

    <CB g="bg-gradient-to-br from-[#051a0d] via-[#082815] to-[#051a0d]">
      <SH tag="Sections XXXIX-XLIII — Water Quality" title="Water Purification" desc="WHO-standard water quality for every citizen." />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <MC icon={Shield} value="100%" label="WHO Standard" sub="Compliance" color="#22c55e" i={0} />
        <MC icon={Factory} value="500" label="Treatment Plants" sub="Nationwide" color="#3b82f6" i={1} />
        <MC icon={Eye} value="24/7" label="Monitoring" sub="Real-time IoT" color="#8b5cf6" i={2} />
        <MC icon={Award} value="A+" label="Quality Grade" sub="International" color="#f59e0b" i={3} />
      </div>
      <div className="space-y-3">
        <PB label="Bacterial Safety" value={95} max={100} color="#22c55e" delay={0} />
        <PB label="Chemical Safety" value={90} max={100} color="#3b82f6" delay={0.1} />
        <PB label="Heavy Metal Free" value={85} max={100} color="#f59e0b" delay={0.2} />
        <PB label="Fluoride Levels" value={92} max={100} color="#8b5cf6" delay={0.3} />
        <PB label="Arsenic Removal" value={88} max={100} color="#ef4444" delay={0.4} />
      </div>
    </CB>

    <CB g="bg-gradient-to-br from-[#0a0a1a] via-[#0d0d28] to-[#0a0a1a]">
      <SH tag="Sections XLIV-XLVIII — Transboundary Water" title="International Water Diplomacy" />
      










    
    </CB>

    <CB g="bg-gradient-to-br from-[#0a0d1a] via-[#101828] to-[#0a0d1a]">
      <SH tag="Sections XLIX-LIII — Water Metrics" title="Water Security Scorecard" />
      <div className="space-y-3 mb-8">
        <PB label="Urban Clean Water" value={90} max={100} color="#06b6d4" delay={0} />
        <PB label="Rural Clean Water" value={70} max={100} color="#3b82f6" delay={0.1} />
        <PB label="Irrigation Efficiency" value={60} max={100} color="#22c55e" delay={0.2} />
        <PB label="Wastewater Treated" value={45} max={100} color="#f59e0b" delay={0.3} />
        <PB label="Dam Storage" value={55} max={100} color="#8b5cf6" delay={0.4} />
        <PB label="Flood Protection" value={65} max={100} color="#ef4444" delay={0.5} />
        <PB label="Groundwater Monitoring" value={40} max={100} color="#14b8a6" delay={0.6} />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        <RC value={90} color="#06b6d4" label="Urban Water" />
        <RC value={70} color="#3b82f6" label="Rural Water" />
        <RC value={60} color="#22c55e" label="Irrigation" />
        <RC value={55} color="#f59e0b" label="Dam Capacity" />
        <RC value={65} color="#8b5cf6" label="Quality" />
      </div>
    </CB>

    {[
  { mega: "Salma Dam Expansion", cap: "5GWh", cost: "$800M", status: "Phase 2", col: "#3b82f6" },
  { mega: "Kajaki Dam Upgrade", cap: "3GWh", cost: "$600M", status: "Active", col: "#22c55e" },
  { mega: "Shah-e-Arous Dam", cap: "2GWh", cost: "$400M", status: "Planning", col: "#f59e0b" },
  { mega: "Bakhshabad Dam", cap: "1.5GWh", cost: "$300M", status: "Design", col: "#8b5cf6" },
  { mega: "Kokcha River Dam", cap: "4GWh", cost: "$700M", status: "Survey", col: "#ef4444" }].
  map((m, idx) =>
  <CB key={m.mega} g="bg-gradient-to-br from-[#051a1a] via-[#082828] to-[#051a1a]">
        <SH tag={`Section ${54 + idx} — ${m.mega}`} title={m.mega} desc={`Capacity: ${m.cap}. Cost: ${m.cost}. Status: ${m.status}.`} />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <MC icon={Zap} value={m.cap} label="Capacity" sub="Hydropower" color={m.col} i={0} />
          <MC icon={DollarSign} value={m.cost} label="Cost" sub="Total" color="#22c55e" i={1} />
          <MC icon={Timer} value={m.status} label="Status" sub="Current" color="#3b82f6" i={2} />
          <MC icon={Users} value="500K+" label="Beneficiaries" sub="Downstream" color="#f59e0b" i={3} />
        </div>
      </CB>
  )}

    <CB g="bg-gradient-to-br from-[#051a1a] via-[#082828] to-[#051a1a]">
      <motion.div {...fadeUp} className="text-center mb-16">
        <span className="text-primary text-xs font-semibold tracking-[0.4em] uppercase mb-4 block">Sections LIX-LXX — Grand Vision</span>
        <h2 className="text-5xl md:text-7xl font-bold mb-6">Water<br />2040 Vision</h2>
      </motion.div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <MC icon={Droplets} value="100%" label="Clean Water" sub="Universal" color="#06b6d4" i={0} />
        <MC icon={Mountain} value="75" label="Dams Built" sub="Major" color="#3b82f6" i={1} />
        <MC icon={DollarSign} value="$8B" label="Invested" sub="Total" color="#22c55e" i={2} />
        <MC icon={Users} value="40M" label="Citizens" sub="Water secure" color="#f59e0b" i={3} />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        <RC value={100} color="#06b6d4" label="Access" />
        <RC value={95} color="#3b82f6" label="Quality" />
        <RC value={90} color="#22c55e" label="Irrigation" />
        <RC value={85} color="#f59e0b" label="Flood Mgmt" />
        <RC value={80} color="#8b5cf6" label="Sustainability" />
      </div>
    </CB>
  </>;