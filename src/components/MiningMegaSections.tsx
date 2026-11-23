import { motion } from "framer-motion";
import { useAnimatedValue } from "@/hooks/useAnimatedValue";
import {
  Pickaxe, Gem, Mountain, Factory, TrendingUp, Users, Building2, Globe,
  Target, Award, Crown, Sparkles, Rocket, Shield, MapPin, Flag, Star,
  DollarSign, Briefcase, GraduationCap, Heart, Compass, Eye, Timer,
  Activity, Layers, BarChart3, Network, Database, Cpu, Zap, Lightbulb,
  Handshake, Scale, BookOpen, Hammer, Wrench, Package, Truck, Ship,
  Plane, Train, Home, TreePine, Leaf, Sun, Wind, Droplets, Battery } from
"lucide-react";

const fadeUp = { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } };
const stagger = (i: number) => ({ ...fadeUp, transition: { duration: 0.8, ease: "easeOut" as const, delay: i * 0.06 } });

const CB = ({ g, children }: {g: string;children: React.ReactNode;}) =>
<section className="relative py-24 px-6 lg:px-12 overflow-hidden">
    <div className={`absolute inset-0 ${g}`} />
    <div className="absolute inset-0 opacity-[0.03]"><div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0id2hpdGUiLz48L3N2Zz4=')]" /></div>
    <div className="relative z-10 max-w-7xl mx-auto">{children}</div>
  </section>;


const MC = ({ icon: Icon, value, label, sub, color, i }: {icon: any;value: string;label: string;sub?: string;color: string;i: number;}) => {
  const { ref, display } = useAnimatedValue(value);
  return (
    <motion.div ref={ref} {...stagger(i)} className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-5 hover:border-primary/40 transition-all">
      <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-3" style={{ background: `${color}15` }}><Icon className="w-5 h-5" style={{ color }} /></div>
      <div className="text-2xl md:text-3xl font-bold mb-1" style={{ color }}>{display}</div>
      <div className="text-sm font-semibold">{label}</div>
      {sub && <div className="text-xs text-muted-foreground mt-1">{sub}</div>}
    </motion.div>);

};

const PB = ({ label, value, max, color, delay = 0 }: {label: string;value: number;max: number;color: string;delay?: number;}) =>
<div className="space-y-1">
    <div className="flex justify-between text-xs"><span className="text-muted-foreground">{label}</span><span className="font-bold" style={{ color }}>{value}%</span></div>
    <div className="h-2.5 bg-muted rounded-full overflow-hidden">
      <motion.div className="h-full rounded-full" style={{ background: `linear-gradient(90deg, ${color}, ${color}88)` }}
    initial={{ width: 0 }} whileInView={{ width: `${value / max * 100}%` }} viewport={{ once: true }} transition={{ duration: 1.4, delay, ease: "easeOut" }} />
    </div>
  </div>;


const SH = ({ tag, title, desc }: {tag: string;title: string;desc?: string;}) =>
<motion.div {...fadeUp} className="mb-12">
    <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-3 block">{tag}</span>
    <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
    {desc && <p className="text-muted-foreground max-w-3xl">{desc}</p>}
  </motion.div>;


const RC = ({ value, color, size = 100, label }: {value: number;color: string;size?: number;label: string;}) => {
  const r = (size - 10) / 2;const c = 2 * Math.PI * r;
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative">
        <svg width={size} height={size} className="-rotate-90">
          <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="hsl(var(--muted))" strokeWidth="5" />
          <motion.circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth="5" strokeLinecap="round"
          strokeDasharray={c} initial={{ strokeDashoffset: c }} whileInView={{ strokeDashoffset: c - value / 100 * c }} viewport={{ once: true }} transition={{ duration: 1.8, ease: "easeOut" }} />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-sm font-bold" style={{ color }}>{value}%</div>
      </div>
      <span className="text-xs text-muted-foreground text-center">{label}</span>
    </div>);

};

export const MiningMegaSections = () =>
<>
    <CB g="bg-gradient-to-br from-[#1a1005] via-[#2d1a08] to-[#1a1005]">
      <motion.div {...fadeUp} className="text-center mb-16">
        <span className="text-primary text-xs font-semibold tracking-[0.4em] uppercase mb-4 block">Section I — Mineral Wealth</span>
        <h2 className="text-5xl md:text-7xl font-bold mb-6">The $3 Trillion<br />Treasure</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Afghanistan sits atop one of the world's largest untapped mineral reserves — copper, lithium, rare earths, gold, and precious gems.</p>
      </motion.div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <MC icon={Gem} value="$3T" label="Mineral Wealth" sub="Estimated reserves" color="#f59e0b" i={0} />
        <MC icon={Mountain} value="1,400+" label="Mineral Sites" sub="Identified deposits" color="#22c55e" i={1} />
        <MC icon={DollarSign} value="$10B" label="Annual Revenue" sub="Target by 2035" color="#3b82f6" i={2} />
        <MC icon={Users} value="500K" label="Mining Jobs" sub="Created" color="#8b5cf6" i={3} />
      </div>
    </CB>

    {/* 2-10: MINERAL DEEP DIVES */}
    {[
  { mineral: "Copper", reserve: "60M tonnes", value: "$500B", loc: "Mes Aynak, Logar", col: "#f97316", pct: 85 },
  { mineral: "Lithium", reserve: "50M tonnes", value: "$1T+", loc: "Ghazni, Nuristan", col: "#06b6d4", pct: 70 },
  { mineral: "Iron Ore", reserve: "2.2B tonnes", value: "$350B", loc: "Hajigak, Bamyan", col: "#ef4444", pct: 65 },
  { mineral: "Gold", reserve: "2,700 tonnes", value: "$150B", loc: "Badakhshan, Takhar", col: "#eab308", pct: 55 },
  { mineral: "Rare Earths", reserve: "1.4M tonnes", value: "$200B+", loc: "Helmand, Khost", col: "#8b5cf6", pct: 45 },
  { mineral: "Chromite", reserve: "500K tonnes", value: "$50B", loc: "Logar, Paktya", col: "#22c55e", pct: 60 },
  { mineral: "Lapis Lazuli", reserve: "Vast deposits", value: "$100B", loc: "Badakhshan", col: "#3b82f6", pct: 75 },
  { mineral: "Marble & Granite", reserve: "Unlimited", value: "$30B", loc: "Helmand, Nangarhar", col: "#ec4899", pct: 80 },
  { mineral: "Emeralds & Rubies", reserve: "Significant", value: "$50B", loc: "Panjshir, Jegdalek", col: "#14b8a6", pct: 50 }].
  map((m, idx) =>
  <CB key={m.mineral} g="bg-gradient-to-br from-[#0a0d1a] via-[#101828] to-[#0a0d1a]">
        <SH tag={`Section ${2 + idx} — ${m.mineral}`} title={`${m.mineral} Reserves`} desc={`Location: ${m.loc}. Estimated value: ${m.value}.`} />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <MC icon={Mountain} value={m.reserve} label="Reserve Size" sub={m.mineral} color={m.col} i={0} />
          <MC icon={DollarSign} value={m.value} label="Estimated Value" sub="Total" color="#22c55e" i={1} />
          <MC icon={MapPin} value={m.loc.split(",")[0]} label="Primary Location" sub="Province" color="#3b82f6" i={2} />
          <RC value={m.pct} color={m.col} label="Exploration %" />
        </div>
      </CB>
  )}

    {/* 11-20: PROVINCIAL MINING PROFILES */}
    {[
  { prov: "Logar", mineral: "Copper", inv: "$3B", pct: 80, col: "#f97316" },
  { prov: "Bamyan", mineral: "Iron Ore", inv: "$2.5B", pct: 70, col: "#ef4444" },
  { prov: "Badakhshan", mineral: "Lapis & Gold", inv: "$1.5B", pct: 75, col: "#3b82f6" },
  { prov: "Ghazni", mineral: "Lithium", inv: "$2B", pct: 50, col: "#06b6d4" },
  { prov: "Helmand", mineral: "Marble & REE", inv: "$1B", pct: 55, col: "#8b5cf6" },
  { prov: "Panjshir", mineral: "Emeralds", inv: "$800M", pct: 65, col: "#14b8a6" },
  { prov: "Nangarhar", mineral: "Granite & Chrome", inv: "$600M", pct: 60, col: "#22c55e" },
  { prov: "Nuristan", mineral: "Lithium & REE", inv: "$1.5B", pct: 35, col: "#ec4899" },
  { prov: "Takhar", mineral: "Gold & Silver", inv: "$500M", pct: 45, col: "#eab308" },
  { prov: "Herat", mineral: "Iron & Copper", inv: "$1B", pct: 40, col: "#f59e0b" }].
  map((p, idx) =>
  <CB key={p.prov} g="bg-gradient-to-br from-[#1a0d05] via-[#281508] to-[#1a0d05]">
        <SH tag={`Section ${11 + idx} — ${p.prov}`} title={`${p.prov}: ${p.mineral}`} desc={`Investment: ${p.inv}. Primary mineral: ${p.mineral}.`} />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <MC icon={MapPin} value={p.inv} label="Investment" sub={p.prov} color={p.col} i={0} />
          <MC icon={Pickaxe} value={p.mineral} label="Minerals" sub="Primary" color="#22c55e" i={1} />
          <RC value={p.pct} color={p.col} label="Development" />
          <RC value={p.pct - 10} color="#3b82f6" label="Infrastructure" />
        </div>
      </CB>
  )}

    {/* 21-30: YEAR-BY-YEAR MINING ROADMAP */}
    {[
  { yr: "2026", focus: "Geological surveys and exploration licensing", target: "$500M investment", col: "#f59e0b" },
  { yr: "2027", focus: "Mes Aynak copper mine construction begins", target: "5,000 jobs created", col: "#22c55e" },
  { yr: "2028", focus: "Hajigak iron ore extraction starts", target: "$1B annual revenue", col: "#ef4444" },
  { yr: "2029", focus: "Lithium mining pilot in Ghazni", target: "Global supply chain entry", col: "#06b6d4" },
  { yr: "2030", focus: "Gold refinery operational in Kabul", target: "$2B mining exports", col: "#eab308" },
  { yr: "2031", focus: "Rare earth processing facility online", target: "Strategic global partner", col: "#8b5cf6" },
  { yr: "2032", focus: "Gem cutting and export hub established", target: "$3B annual revenue", col: "#3b82f6" },
  { yr: "2033", focus: "Full mechanised mining across 10 sites", target: "200K workers trained", col: "#14b8a6" },
  { yr: "2034", focus: "Downstream processing and manufacturing", target: "$5B value addition", col: "#ec4899" },
  { yr: "2035", focus: "Vision achieved — global mining leader", target: "$10B annual revenue", col: "#f97316" }].
  map((y, idx) =>
  <CB key={y.yr} g="bg-gradient-to-br from-[#0a1a0a] via-[#102810] to-[#0a1a0a]">
        <SH tag={`Section ${21 + idx} — Year ${y.yr}`} title={`Mining ${y.yr}`} desc={y.focus} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div {...fadeUp} className="bg-card/60 border border-border rounded-xl p-6">
            <div className="text-3xl font-bold mb-2" style={{ color: y.col }}>{y.yr}</div>
            <p className="text-muted-foreground text-sm">{y.focus}</p>
          </motion.div>
          <motion.div {...stagger(1)} className="bg-card/60 border border-border rounded-xl p-6">
            <div className="text-sm text-muted-foreground mb-1">Key Target</div>
            <div className="text-2xl font-bold" style={{ color: y.col }}>{y.target}</div>
          </motion.div>
        </div>
      </CB>
  )}

    {/* 31-40: PROCESSING & VALUE CHAIN */}
    {[
  { stage: "Exploration & Survey", val: 90, col: "#f59e0b" },
  { stage: "Extraction & Mining", val: 65, col: "#ef4444" },
  { stage: "Crushing & Sorting", val: 55, col: "#22c55e" },
  { stage: "Smelting & Refining", val: 40, col: "#3b82f6" },
  { stage: "Gem Cutting & Polish", val: 70, col: "#8b5cf6" },
  { stage: "Quality Certification", val: 50, col: "#06b6d4" },
  { stage: "Packaging & Branding", val: 35, col: "#ec4899" },
  { stage: "Export Logistics", val: 45, col: "#14b8a6" },
  { stage: "Downstream Manufacturing", val: 25, col: "#84cc16" },
  { stage: "R&D & Innovation", val: 30, col: "#f97316" }].
  map((s, idx) => idx % 5 === 0 ?
  <CB key={s.stage} g="bg-gradient-to-br from-[#0d0d1a] via-[#151528] to-[#0d0d1a]">
        <SH tag={`Sections ${31 + idx}-${35 + idx} — Value Chain`} title="Mining Value Chain" desc="From exploration to global export — building the full mining ecosystem." />
        <div className="space-y-3">
          {[0, 1, 2, 3, 4].map((j) => {
        const item = [
        { stage: "Exploration & Survey", val: 90, col: "#f59e0b" },
        { stage: "Extraction & Mining", val: 65, col: "#ef4444" },
        { stage: "Crushing & Sorting", val: 55, col: "#22c55e" },
        { stage: "Smelting & Refining", val: 40, col: "#3b82f6" },
        { stage: "Gem Cutting & Polish", val: 70, col: "#8b5cf6" },
        { stage: "Quality Certification", val: 50, col: "#06b6d4" },
        { stage: "Packaging & Branding", val: 35, col: "#ec4899" },
        { stage: "Export Logistics", val: 45, col: "#14b8a6" },
        { stage: "Downstream Manufacturing", val: 25, col: "#84cc16" },
        { stage: "R&D & Innovation", val: 30, col: "#f97316" }][
        idx + j];
        return item ? <PB key={j} label={item.stage} value={item.val} max={100} color={item.col} delay={j * 0.1} /> : null;
      })}
        </div>
      </CB> :
  null).filter(Boolean)}

    {/* 41-50: ENVIRONMENTAL & SAFETY */}
    <CB g="bg-gradient-to-br from-[#051a0d] via-[#082815] to-[#051a0d]">
      <SH tag="Sections XLI-L — Safety & Environment" title="Responsible Mining" desc="World-class environmental standards and worker safety in every operation." />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <MC icon={Shield} value="100%" label="EIA Compliance" sub="All projects" color="#22c55e" i={0} />
        <MC icon={TreePine} value="5M" label="Trees Planted" sub="Rehabilitation" color="#84cc16" i={1} />
        <MC icon={Heart} value="Zero" label="Fatality Goal" sub="Worker safety" color="#ef4444" i={2} />
        <MC icon={Leaf} value="90%" label="Water Recycled" sub="Processing" color="#06b6d4" i={3} />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        <RC value={95} color="#22c55e" label="Safety Standards" />
        <RC value={85} color="#3b82f6" label="Land Rehab" />
        <RC value={75} color="#84cc16" label="Air Quality" />
        <RC value={90} color="#f59e0b" label="Water Management" />
        <RC value={80} color="#8b5cf6" label="Community Benefit" />
      </div>
    </CB>

    {/* 51-60: PARTNERSHIPS & INVESTMENT */}
    <CB g="bg-gradient-to-br from-[#0a0a1a] via-[#0d0d28] to-[#0a0a1a]">
      <SH tag="Sections LI-LX — Investment" title="Global Mining Partnerships" desc="$30B+ in international mining investment commitments." />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
      { name: "China MCC", amt: "$5B", col: "#ef4444" }, { name: "Saudi Mining", amt: "$3B", col: "#22c55e" },
      { name: "India Steel", amt: "$2B", col: "#f59e0b" }, { name: "UAE Investment", amt: "$2.5B", col: "#3b82f6" },
      { name: "Rio Tinto", amt: "$1.5B", col: "#8b5cf6" }, { name: "Turkey Mining", amt: "$1B", col: "#06b6d4" },
      { name: "Korean Resources", amt: "$800M", col: "#ec4899" }, { name: "World Bank", amt: "$1B", col: "#14b8a6" }].
      map((p, i) =>
      <motion.div key={p.name} {...stagger(i)} className="bg-card/60 border border-border rounded-xl p-4">
            <div className="text-lg font-bold" style={{ color: p.col }}>{p.name}</div>
            <div className="text-2xl font-bold mt-1">{p.amt}</div>
          </motion.div>
      )}
      </div>
    </CB>

    {/* 61-70: GRAND SUMMARY */}
    <CB g="bg-gradient-to-br from-[#1a1005] via-[#2d1a08] to-[#1a1005]">
      <motion.div {...fadeUp} className="text-center mb-16">
        <span className="text-primary text-xs font-semibold tracking-[0.4em] uppercase mb-4 block">Sections LXI-LXX — Grand Vision</span>
        <h2 className="text-5xl md:text-7xl font-bold mb-6">Mining<br />2040 Vision</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Responsible extraction of $30T in mineral wealth — powering Afghanistan's prosperity.</p>
      </motion.div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <MC icon={Gem} value="$3T" label="Mineral Wealth" sub="Total reserves" color="#f59e0b" i={0} />
        <MC icon={Users} value="500K" label="Jobs Created" sub="Mining sector" color="#3b82f6" i={1} />
        <MC icon={DollarSign} value="$10B" label="Annual Revenue" sub="By 2035" color="#22c55e" i={2} />
        <MC icon={Globe} value="50+" label="Export Markets" sub="Worldwide" color="#8b5cf6" i={3} />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        <RC value={100} color="#f59e0b" label="Exploration" />
        <RC value={85} color="#22c55e" label="Extraction" />
        <RC value={70} color="#3b82f6" label="Processing" />
        <RC value={90} color="#8b5cf6" label="Safety" />
        <RC value={95} color="#ef4444" label="Sustainability" />
      </div>
    </CB>
  </>;