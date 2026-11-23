import { motion } from "framer-motion";
import {
  TrendingUp, Users, Building2, Rocket, Globe, Heart, Zap, Factory,
  GraduationCap, Wifi, Shield, Landmark, Ship, Plane, Train, Droplets,
  Sun, Wind, Leaf, Mountain, Gem, Target, Award, Crown, Sparkles,
  BrainCircuit, Lightbulb, Handshake, Scale, MapPin, Flag, Star,
  ChevronRight, ArrowUpRight, Cpu, Database, Network, Activity,
  Layers, CircleDot, PieChart, BarChart3, Timer, Eye, Compass,
  Hammer, Wrench, Briefcase, DollarSign, TrendingDown, Lock,
  BookOpen, Stethoscope, Home, TreePine, Thermometer, Droplet } from
"lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }
};

const stagger = (i: number) => ({ ...fadeUp, transition: { duration: 0.8, ease: "easeOut" as const, delay: i * 0.06 } });

/* ═══════════════════════════════════════════════════
   CINEMATIC FULL-WIDTH SECTION
   ═══════════════════════════════════════════════════ */
const CinematicBlock = ({ gradient, children, className = "" }: {gradient: string;children: React.ReactNode;className?: string;}) =>
<section className={`relative py-24 px-6 lg:px-12 overflow-hidden ${className}`}>
    <div className={`absolute inset-0 ${gradient}`} />
    <div className="absolute inset-0 opacity-[0.03]">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0id2hpdGUiLz48L3N2Zz4=')]" />
    </div>
    <div className="relative z-10 max-w-7xl mx-auto">{children}</div>
  </section>;


/* ═══════════════════════════════════════════════════
   ANIMATED METRIC CARD
   ═══════════════════════════════════════════════════ */
const MetricCard = ({ icon: Icon, value, label, sub, color, i }: {icon: any;value: string;label: string;sub?: string;color: string;i: number;}) =>
<motion.div {...stagger(i)} className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-5 hover:border-primary/40 transition-all group">
    <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-3" style={{ background: `${color}15` }}>
      <Icon className="w-5 h-5" style={{ color }} />
    </div>
    <div className="text-2xl md:text-3xl font-bold mb-1" style={{ color }}>{value}</div>
    <div className="text-sm font-semibold">{label}</div>
    {sub && <div className="text-xs text-muted-foreground mt-1">{sub}</div>}
  </motion.div>;


/* ═══════════════════════════════════════════════════
   PROGRESS ROW
   ═══════════════════════════════════════════════════ */
const ProgressRow = ({ label, value, max, color, delay = 0 }: {label: string;value: number;max: number;color: string;delay?: number;}) =>
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


/* ═══════════════════════════════════════════════════
   35 VIDEO-STYLE SECTIONS
   ═══════════════════════════════════════════════════ */
export const VisionVideoSections = () => {
  return (
    <>
      {/* ═══ V1. NATIONAL ECONOMIC REVIVAL — HERO CINEMATIC ═══ */}
      <CinematicBlock gradient="bg-gradient-to-br from-[#0a1628] via-[#0d2137] to-[#0a1628]">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="text-primary text-xs font-semibold tracking-[0.4em] uppercase mb-4 block">Section I — Economic Revival</span>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">The Economic <br />Renaissance</h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">Afghanistan's journey from fragility to prosperity — a $75 billion transformation programme spanning 14 years.</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
          { icon: TrendingUp, value: "$75B+", label: "Total Investment", color: "#22c55e" },
          { icon: Users, value: "2M+", label: "Jobs Created", color: "#3b82f6" },
          { icon: Globe, value: "40+", label: "Sectors Targeted", color: "#f59e0b" },
          { icon: Building2, value: "5,000+", label: "Projects Planned", color: "#ef4444" }].
          map((m, i) => <MetricCard key={i} {...m} i={i} />)}
        </div>
      </CinematicBlock>

      {/* ═══ V2. GDP GROWTH TRAJECTORY ═══ */}
      <section className="py-20 px-6 lg:px-12 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp}>
            <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-3 block">GDP Trajectory</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Growth Path 2026–2040</h2>
          </motion.div>
          <div className="grid md:grid-cols-7 gap-3">
            {[
            { year: "2026", gdp: "$22B", growth: "3.5%", color: "#3b82f6" },
            { year: "2028", gdp: "$28B", growth: "5.2%", color: "#22c55e" },
            { year: "2030", gdp: "$38B", growth: "6.8%", color: "#f59e0b" },
            { year: "2032", gdp: "$52B", growth: "7.5%", color: "#8b5cf6" },
            { year: "2035", gdp: "$72B", growth: "8.0%", color: "#ef4444" },
            { year: "2038", gdp: "$95B", growth: "7.2%", color: "#ec4899" },
            { year: "2040", gdp: "$120B", growth: "6.5%", color: "#06b6d4" }].
            map((d, i) =>
            <motion.div key={i} {...stagger(i)} className="bg-card border border-border rounded-2xl p-5 text-center hover:border-primary/40 transition-all">
                <div className="text-xs text-muted-foreground mb-2">{d.year}</div>
                <div className="relative mx-auto w-full mb-3">
                  <div className="bg-muted rounded-full overflow-hidden h-32 flex items-end justify-center">
                    <motion.div className="w-full rounded-t-lg" style={{ background: d.color }}
                  initial={{ height: 0 }} whileInView={{ height: `${20 + i * 12}%` }} viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.1 }} />
                  
                  </div>
                </div>
                <div className="text-lg font-bold" style={{ color: d.color }}>{d.gdp}</div>
                <div className="text-xs text-muted-foreground">Growth: {d.growth}</div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ═══ V3. EMPLOYMENT GENERATION ENGINE ═══ */}
      <CinematicBlock gradient="bg-gradient-to-br from-[#071a0e] via-[#0d2918] to-[#071a0e]">
        <motion.div {...fadeUp} className="text-center mb-12">
          <span className="text-emerald-400 text-xs font-semibold tracking-[0.3em] uppercase mb-3 block">Employment Strategy</span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">2 Million Jobs</h2>
          <p className="text-white/50 max-w-2xl mx-auto">Sector-specific employment generation across construction, mining, agriculture, technology, and services.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
          { sector: "Construction", jobs: "450K", icon: Building2, color: "#f59e0b", pct: 22 },
          { sector: "Mining", jobs: "350K", icon: Gem, color: "#8b5cf6", pct: 18 },
          { sector: "Agriculture", jobs: "400K", icon: Leaf, color: "#22c55e", pct: 20 },
          { sector: "Technology", jobs: "300K", icon: Cpu, color: "#3b82f6", pct: 15 },
          { sector: "Services", jobs: "500K", icon: Briefcase, color: "#ec4899", pct: 25 }].
          map((s, i) =>
          <motion.div key={i} {...stagger(i)} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
              <s.icon className="w-8 h-8 mx-auto mb-3" style={{ color: s.color }} />
              <div className="text-2xl font-bold text-white mb-1">{s.jobs}</div>
              <div className="text-sm text-white/70 mb-3">{s.sector}</div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div className="h-full rounded-full" style={{ background: s.color }}
              initial={{ width: 0 }} whileInView={{ width: `${s.pct * 4}%` }} viewport={{ once: true }}
              transition={{ duration: 1.2, delay: i * 0.1 }} />
              
              </div>
              <div className="text-xs text-white/40 mt-2">{s.pct}% of total</div>
            </motion.div>
          )}
        </div>
      </CinematicBlock>

      {/* ═══ V4. INFRASTRUCTURE MEGA DASHBOARD ═══ */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp}>
            <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-3 block">Infrastructure Dashboard</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Building the Backbone</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
            { icon: Train, label: "Railways", value: "4,500 km", target: "5 international links", investment: "$12B", color: "#3b82f6" },
            { icon: Plane, label: "Airports", value: "8 international", target: "24 domestic", investment: "$4.5B", color: "#8b5cf6" },
            { icon: Building2, label: "Highways", value: "15,000 km", target: "Ring road complete", investment: "$8B", color: "#f59e0b" },
            { icon: Wifi, label: "Digital", value: "100% coverage", target: "5G nationwide", investment: "$3.5B", color: "#22c55e" }].
            map((item, i) =>
            <motion.div key={i} {...stagger(i)} className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/40 transition-all group">
                <div className="h-3 w-full" style={{ background: `linear-gradient(90deg, ${item.color}, ${item.color}44)` }} />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${item.color}15` }}>
                      <item.icon className="w-6 h-6" style={{ color: item.color }} />
                    </div>
                    <div>
                      <h4 className="font-bold">{item.label}</h4>
                      <div className="text-xs text-muted-foreground">{item.target}</div>
                    </div>
                  </div>
                  <div className="text-3xl font-bold mb-1" style={{ color: item.color }}>{item.value}</div>
                  <div className="text-sm text-muted-foreground">Investment: {item.investment}</div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ═══ V5. ENERGY TRANSFORMATION ═══ */}
      <CinematicBlock gradient="bg-gradient-to-br from-[#1a0a05] via-[#2d1508] to-[#1a0a05]">
        <motion.div {...fadeUp} className="text-center mb-12">
          <span className="text-amber-400 text-xs font-semibold tracking-[0.3em] uppercase mb-3 block">Energy Revolution</span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">15 Gigawatts by 2040</h2>
          <p className="text-white/50 max-w-2xl mx-auto">From 1GW to 15GW — a 15x expansion across solar, wind, hydro, and natural gas.</p>
        </motion.div>
        <div className="grid md:grid-cols-4 gap-4">
          {[
          { source: "Solar", capacity: "5.5 GW", icon: Sun, pct: 37, color: "#f59e0b" },
          { source: "Hydropower", capacity: "4.2 GW", icon: Droplets, pct: 28, color: "#3b82f6" },
          { source: "Wind", capacity: "3.0 GW", icon: Wind, pct: 20, color: "#22c55e" },
          { source: "Natural Gas", capacity: "2.3 GW", icon: Zap, pct: 15, color: "#ef4444" }].
          map((e, i) =>
          <motion.div key={i} {...stagger(i)} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
              <e.icon className="w-10 h-10 mx-auto mb-4" style={{ color: e.color }} />
              <div className="text-3xl font-bold text-white mb-1">{e.capacity}</div>
              <div className="text-sm text-white/70 mb-4">{e.source}</div>
              <div className="relative w-20 h-20 mx-auto">
                <svg width="80" height="80" className="-rotate-90">
                  <circle cx="40" cy="40" r="32" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="6" />
                  <motion.circle cx="40" cy="40" r="32" fill="none" stroke={e.color} strokeWidth="6" strokeLinecap="round"
                strokeDasharray={201} initial={{ strokeDashoffset: 201 }}
                whileInView={{ strokeDashoffset: 201 - e.pct / 100 * 201 }} viewport={{ once: true }}
                transition={{ duration: 1.5, delay: i * 0.15 }} />
                
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm">{e.pct}%</div>
              </div>
            </motion.div>
          )}
        </div>
      </CinematicBlock>

      {/* ═══ V6. EDUCATION & HUMAN CAPITAL ═══ */}
      <section className="py-20 px-6 lg:px-12 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="mb-12">
            <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-3 block">Human Capital</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Education Revolution</h2>
            <p className="text-muted-foreground max-w-2xl">From 43% literacy to 95% — transforming Afghanistan's human capital through universal education and skills development.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
            { level: "Primary & Secondary", students: "12M+", schools: "25,000", teachers: "400K", icon: BookOpen, color: "#3b82f6", metrics: [
              { label: "Enrollment Rate", value: 98, color: "#3b82f6" },
              { label: "Girl Enrollment", value: 95, color: "#ec4899" },
              { label: "Teacher Training", value: 90, color: "#22c55e" }]
            },
            { level: "Higher Education", students: "2M", schools: "150", teachers: "50K", icon: GraduationCap, color: "#8b5cf6", metrics: [
              { label: "University Access", value: 45, color: "#8b5cf6" },
              { label: "Research Output", value: 35, color: "#f59e0b" },
              { label: "STEM Enrollment", value: 60, color: "#06b6d4" }]
            },
            { level: "Vocational Training", students: "5M", schools: "500", teachers: "80K", icon: Wrench, color: "#f59e0b", metrics: [
              { label: "Employment Rate", value: 85, color: "#f59e0b" },
              { label: "Industry Partnership", value: 70, color: "#22c55e" },
              { label: "Certification Rate", value: 92, color: "#3b82f6" }]
            }].
            map((ed, i) =>
            <motion.div key={i} {...stagger(i)} className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="p-6 border-b border-border" style={{ background: `${ed.color}08` }}>
                  <ed.icon className="w-8 h-8 mb-3" style={{ color: ed.color }} />
                  <h3 className="text-xl font-bold mb-1">{ed.level}</h3>
                  <div className="grid grid-cols-3 gap-2 mt-3">
                    <div><div className="text-lg font-bold" style={{ color: ed.color }}>{ed.students}</div><div className="text-[10px] text-muted-foreground">Students</div></div>
                    <div><div className="text-lg font-bold" style={{ color: ed.color }}>{ed.schools}</div><div className="text-[10px] text-muted-foreground">Institutions</div></div>
                    <div><div className="text-lg font-bold" style={{ color: ed.color }}>{ed.teachers}</div><div className="text-[10px] text-muted-foreground">Teachers</div></div>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  {ed.metrics.map((m, j) => <ProgressRow key={j} label={m.label} value={m.value} max={100} color={m.color} delay={j * 0.15} />)}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ═══ V7. HEALTHCARE TRANSFORMATION ═══ */}
      <CinematicBlock gradient="bg-gradient-to-br from-[#1a0520] via-[#280a30] to-[#1a0520]">
        <motion.div {...fadeUp} className="text-center mb-12">
          <span className="text-pink-400 text-xs font-semibold tracking-[0.3em] uppercase mb-3 block">Healthcare System</span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Universal Healthcare</h2>
          <p className="text-white/50 max-w-2xl mx-auto">100% healthcare coverage by 2040 — hospitals, clinics, and telemedicine across all 34 provinces.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
          { label: "Hospitals", value: "500+", sub: "Provincial & district", icon: Stethoscope, color: "#ec4899" },
          { label: "Clinics", value: "5,000+", sub: "Community health centres", icon: Heart, color: "#ef4444" },
          { label: "Doctors", value: "50,000", sub: "Trained physicians", icon: Users, color: "#3b82f6" },
          { label: "Coverage", value: "100%", sub: "Universal access", icon: Shield, color: "#22c55e" }].
          map((h, i) =>
          <motion.div key={i} {...stagger(i)} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
              <h.icon className="w-8 h-8 mx-auto mb-3" style={{ color: h.color }} />
              <div className="text-3xl font-bold text-white mb-1">{h.value}</div>
              <div className="text-sm text-white/70 font-semibold">{h.label}</div>
              <div className="text-xs text-white/40 mt-1">{h.sub}</div>
            </motion.div>
          )}
        </div>
      </CinematicBlock>

      {/* ═══ V8. TRADE & EXPORT CORRIDORS ═══ */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="mb-12">
            <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-3 block">Global Trade</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Export Corridors</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
            { corridor: "Southern Route", destination: "Pakistan → Gwadar Port", exports: "$4.5B", commodities: ["Minerals", "Agriculture", "Textiles"], icon: Ship, color: "#3b82f6" },
            { corridor: "Western Route", destination: "Iran → Chabahar Port", exports: "$3.8B", commodities: ["Iron Ore", "Marble", "Saffron"], icon: Ship, color: "#8b5cf6" },
            { corridor: "Northern Route", destination: "Central Asia → Europe", exports: "$5.2B", commodities: ["Copper", "Lithium", "Gems"], icon: Train, color: "#22c55e" },
            { corridor: "Eastern Route", destination: "China via Wakhan", exports: "$2.8B", commodities: ["Rare Earths", "Gold", "Lapis"], icon: Train, color: "#f59e0b" },
            { corridor: "Air Freight Hub", destination: "Global — Dubai, Istanbul", exports: "$2.5B", commodities: ["Saffron", "Gems", "Tech"], icon: Plane, color: "#ef4444" },
            { corridor: "Digital Trade", destination: "Global E-Commerce", exports: "$1.2B", commodities: ["Software", "BPO", "Digital Services"], icon: Wifi, color: "#06b6d4" }].
            map((c, i) =>
            <motion.div key={i} {...stagger(i)} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: `${c.color}15` }}>
                    <c.icon className="w-5 h-5" style={{ color: c.color }} />
                  </div>
                  <div>
                    <h4 className="font-bold">{c.corridor}</h4>
                    <div className="text-xs text-muted-foreground">{c.destination}</div>
                  </div>
                </div>
                <div className="text-2xl font-bold mb-3" style={{ color: c.color }}>{c.exports}</div>
                <div className="flex flex-wrap gap-1.5">
                  {c.commodities.map((com, j) =>
                <span key={j} className="px-2 py-0.5 text-[10px] rounded-full bg-muted text-muted-foreground">{com}</span>
                )}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ═══ V9. MINING & MINERALS DEEP DIVE ═══ */}
      <CinematicBlock gradient="bg-gradient-to-br from-[#1a1005] via-[#2d1a08] to-[#1a1005]">
        <motion.div {...fadeUp} className="text-center mb-12">
          <span className="text-amber-400 text-xs font-semibold tracking-[0.3em] uppercase mb-3 block">Mineral Wealth</span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">$30 Trillion in Resources</h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {[
          { mineral: "Copper", reserve: "60M tonnes", value: "$420B", color: "#f59e0b" },
          { mineral: "Lithium", reserve: "21M tonnes", value: "$1.2T", color: "#06b6d4" },
          { mineral: "Iron Ore", reserve: "2.2B tonnes", value: "$350B", color: "#ef4444" },
          { mineral: "Gold", reserve: "2,700 tonnes", value: "$180B", color: "#f59e0b" },
          { mineral: "Rare Earths", reserve: "1.4M tonnes", value: "$500B", color: "#8b5cf6" },
          { mineral: "Chromite", reserve: "35M tonnes", value: "$28B", color: "#22c55e" }].
          map((m, i) =>
          <motion.div key={i} {...stagger(i)} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
              <Gem className="w-6 h-6 mx-auto mb-2" style={{ color: m.color }} />
              <div className="text-sm font-bold text-white">{m.mineral}</div>
              <div className="text-lg font-bold mt-1" style={{ color: m.color }}>{m.value}</div>
              <div className="text-[10px] text-white/40">{m.reserve}</div>
            </motion.div>
          )}
        </div>
      </CinematicBlock>

      {/* ═══ V10. AGRICULTURE MODERNISATION ═══ */}
      <section className="py-20 px-6 lg:px-12 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="mb-12">
            <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-3 block">Food Security</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Agricultural Transformation</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
            { crop: "Saffron", production: "250 tonnes", revenue: "$3.5B", growth: "+400%", color: "#ef4444" },
            { crop: "Fruits & Nuts", production: "2M tonnes", revenue: "$4.2B", growth: "+300%", color: "#22c55e" },
            { crop: "Wheat", production: "8M tonnes", revenue: "$2.8B", growth: "+150%", color: "#f59e0b" },
            { crop: "Cotton", production: "500K tonnes", revenue: "$1.5B", growth: "+250%", color: "#3b82f6" }].
            map((a, i) =>
            <motion.div key={i} {...stagger(i)} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-all">
                <Leaf className="w-8 h-8 mb-3" style={{ color: a.color }} />
                <h4 className="text-xl font-bold mb-1">{a.crop}</h4>
                <div className="text-2xl font-bold" style={{ color: a.color }}>{a.revenue}</div>
                <div className="text-xs text-muted-foreground mt-1">{a.production} annual</div>
                <div className="mt-3 inline-flex px-2 py-0.5 rounded-full text-xs font-bold" style={{ background: `${a.color}15`, color: a.color }}>{a.growth}</div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ═══ V11. TECHNOLOGY & DIGITAL ECOSYSTEM ═══ */}
      <CinematicBlock gradient="bg-gradient-to-br from-[#0a0520] via-[#150a30] to-[#0a0520]">
        <motion.div {...fadeUp} className="text-center mb-12">
          <span className="text-violet-400 text-xs font-semibold tracking-[0.3em] uppercase mb-3 block">Digital Afghanistan</span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Tech Ecosystem 2040</h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
          { title: "AI & Data", stats: [{ l: "Data Centres", v: "12" }, { l: "AI Startups", v: "500+" }, { l: "Tech Jobs", v: "150K" }], icon: BrainCircuit, color: "#8b5cf6" },
          { title: "Fintech", stats: [{ l: "Digital Banks", v: "25" }, { l: "Mobile Payments", v: "80%" }, { l: "Fintech Revenue", v: "$2B" }], icon: DollarSign, color: "#22c55e" },
          { title: "E-Governance", stats: [{ l: "Digital Services", v: "500+" }, { l: "Digital ID", v: "100%" }, { l: "Cyber Security", v: "Tier 1" }], icon: Database, color: "#06b6d4" }].
          map((t, i) =>
          <motion.div key={i} {...stagger(i)} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <t.icon className="w-10 h-10 mb-4" style={{ color: t.color }} />
              <h3 className="text-2xl font-bold text-white mb-4">{t.title}</h3>
              <div className="space-y-3">
                {t.stats.map((s, j) =>
              <div key={j} className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="text-sm text-white/60">{s.l}</span>
                    <span className="text-lg font-bold" style={{ color: t.color }}>{s.v}</span>
                  </div>
              )}
              </div>
            </motion.div>
          )}
        </div>
      </CinematicBlock>

      {/* ═══ V12. WATER RESOURCE MANAGEMENT ═══ */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="mb-12">
            <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-3 block">Water Security</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Water Infrastructure</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
            { label: "Dams & Reservoirs", value: "42", sub: "Major water storage", icon: Droplets, color: "#3b82f6" },
            { label: "Irrigation Networks", value: "8,500 km", sub: "Canal systems", icon: Droplet, color: "#06b6d4" },
            { label: "Clean Water Access", value: "100%", sub: "All provinces", icon: Shield, color: "#22c55e" },
            { label: "Hydropower", value: "4.2 GW", sub: "From water resources", icon: Zap, color: "#8b5cf6" }].
            map((w, i) => <MetricCard key={i} {...w} i={i} />)}
          </div>
        </div>
      </section>

      {/* ═══ V13. HOUSING & URBAN DEVELOPMENT ═══ */}
      <CinematicBlock gradient="bg-gradient-to-br from-[#0a1015] via-[#121a22] to-[#0a1015]">
        <motion.div {...fadeUp} className="text-center mb-12">
          <span className="text-sky-400 text-xs font-semibold tracking-[0.3em] uppercase mb-3 block">Urban Planning</span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Smart Cities Programme</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
          { city: "Kabul", investment: "$8.5B", housing: "500K units", pop: "6M", color: "#3b82f6" },
          { city: "Herat", investment: "$3.2B", housing: "180K units", pop: "2.5M", color: "#8b5cf6" },
          { city: "Mazar-i-Sharif", investment: "$2.8B", housing: "150K units", pop: "2M", color: "#22c55e" },
          { city: "Kandahar", investment: "$2.5B", housing: "140K units", pop: "1.8M", color: "#f59e0b" },
          { city: "Jalalabad", investment: "$1.8B", housing: "100K units", pop: "1.5M", color: "#ef4444" }].
          map((c, i) =>
          <motion.div key={i} {...stagger(i)} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center">
              <Home className="w-7 h-7 mx-auto mb-2" style={{ color: c.color }} />
              <h4 className="text-lg font-bold text-white">{c.city}</h4>
              <div className="text-2xl font-bold mt-2" style={{ color: c.color }}>{c.investment}</div>
              <div className="text-xs text-white/50 mt-1">{c.housing}</div>
              <div className="text-xs text-white/40">Pop: {c.pop}</div>
            </motion.div>
          )}
        </div>
      </CinematicBlock>

      {/* ═══ V14. CLIMATE & ENVIRONMENT ═══ */}
      <section className="py-20 px-6 lg:px-12 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="mb-12">
            <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-3 block">Sustainability</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Climate Action Plan</h2>
          </motion.div>
          <div className="space-y-4">
            {[
            { label: "Renewable Energy Share", value: 60, color: "#22c55e" },
            { label: "Forest Restoration", value: 45, color: "#15803d" },
            { label: "Carbon Emission Reduction", value: 35, color: "#06b6d4" },
            { label: "Clean Water Systems", value: 80, color: "#3b82f6" },
            { label: "Waste Management Coverage", value: 70, color: "#f59e0b" },
            { label: "Protected Natural Areas", value: 25, color: "#8b5cf6" }].
            map((p, i) => <ProgressRow key={i} label={p.label} value={p.value} max={100} color={p.color} delay={i * 0.1} />)}
          </div>
        </div>
      </section>

      {/* ═══ V15. SECURITY & GOVERNANCE ═══ */}
      <CinematicBlock gradient="bg-gradient-to-br from-[#0f0a1a] via-[#1a1028] to-[#0f0a1a]">
        <motion.div {...fadeUp} className="text-center mb-12">
          <span className="text-indigo-400 text-xs font-semibold tracking-[0.3em] uppercase mb-3 block">Governance</span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Rule of Law & Security</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
          { label: "Provincial Courts", value: "340+", icon: Scale, color: "#8b5cf6" },
          { label: "Police Force", value: "200K", icon: Shield, color: "#3b82f6" },
          { label: "Anti-Corruption Index", value: "Top 50", icon: Eye, color: "#22c55e" },
          { label: "Digital ID Coverage", value: "100%", icon: Lock, color: "#f59e0b" }].
          map((g, i) =>
          <motion.div key={i} {...stagger(i)} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
              <g.icon className="w-8 h-8 mx-auto mb-3" style={{ color: g.color }} />
              <div className="text-3xl font-bold text-white">{g.value}</div>
              <div className="text-sm text-white/60 mt-1">{g.label}</div>
            </motion.div>
          )}
        </div>
      </CinematicBlock>

      {/* ═══ V16. TOURISM & CULTURE ═══ */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="mb-12">
            <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-3 block">Cultural Heritage</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Tourism & Heritage</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
            { dest: "Bamyan Valley", type: "UNESCO Heritage", visitors: "2M/year", revenue: "$800M", color: "#f59e0b" },
            { dest: "Band-e-Amir", type: "National Park", visitors: "1.5M/year", revenue: "$500M", color: "#3b82f6" },
            { dest: "Herat Citadel", type: "Historical", visitors: "1.2M/year", revenue: "$400M", color: "#8b5cf6" },
            { dest: "Wakhan Corridor", type: "Adventure", visitors: "800K/year", revenue: "$350M", color: "#22c55e" },
            { dest: "Panjshir Valley", type: "Eco-Tourism", visitors: "1M/year", revenue: "$450M", color: "#06b6d4" },
            { dest: "Balkh & Mazar", type: "Pilgrimage", visitors: "3M/year", revenue: "$1.2B", color: "#ef4444" }].
            map((t, i) =>
            <motion.div key={i} {...stagger(i)} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-all">
                <div className="flex items-center gap-2 mb-3">
                  <Mountain className="w-5 h-5" style={{ color: t.color }} />
                  <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: `${t.color}15`, color: t.color }}>{t.type}</span>
                </div>
                <h4 className="text-xl font-bold mb-2">{t.dest}</h4>
                <div className="text-2xl font-bold" style={{ color: t.color }}>{t.revenue}</div>
                <div className="text-xs text-muted-foreground mt-1">{t.visitors} target</div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ═══ V17. FINANCIAL SECTOR DEVELOPMENT ═══ */}
      <CinematicBlock gradient="bg-gradient-to-br from-[#051a0a] via-[#0a2d12] to-[#051a0a]">
        <motion.div {...fadeUp} className="text-center mb-12">
          <span className="text-emerald-400 text-xs font-semibold tracking-[0.3em] uppercase mb-3 block">Financial System</span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Banking & Finance</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
          { label: "Bank Branches", value: "5,000+", sub: "Nationwide coverage", color: "#22c55e" },
          { label: "Mobile Banking", value: "30M users", sub: "Digital first", color: "#3b82f6" },
          { label: "Microfinance", value: "$5B", sub: "Rural access", color: "#f59e0b" },
          { label: "Insurance", value: "60%", sub: "Population covered", color: "#8b5cf6" }].
          map((f, i) =>
          <motion.div key={i} {...stagger(i)} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
              <DollarSign className="w-8 h-8 mx-auto mb-3" style={{ color: f.color }} />
              <div className="text-3xl font-bold text-white">{f.value}</div>
              <div className="text-sm text-white/70 font-semibold">{f.label}</div>
              <div className="text-xs text-white/40 mt-1">{f.sub}</div>
            </motion.div>
          )}
        </div>
      </CinematicBlock>

      {/* ═══ V18. PROVINCIAL INVESTMENT MAP ═══ */}
      <section className="py-20 px-6 lg:px-12 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="mb-12">
            <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-3 block">Regional Distribution</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Provincial Investment Allocation</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {[
            { province: "Kabul", investment: "$12B", color: "#3b82f6" },
            { province: "Herat", investment: "$6.5B", color: "#8b5cf6" },
            { province: "Balkh", investment: "$5.8B", color: "#22c55e" },
            { province: "Kandahar", investment: "$5.2B", color: "#f59e0b" },
            { province: "Nangarhar", investment: "$4.5B", color: "#ef4444" },
            { province: "Badakhshan", investment: "$3.8B", color: "#06b6d4" },
            { province: "Baghlan", investment: "$3.2B", color: "#ec4899" },
            { province: "Helmand", investment: "$4.0B", color: "#f97316" },
            { province: "Kunduz", investment: "$2.8B", color: "#14b8a6" },
            { province: "Takhar", investment: "$2.5B", color: "#a855f7" },
            { province: "Logar", investment: "$2.2B", color: "#84cc16" },
            { province: "Parwan", investment: "$2.0B", color: "#0ea5e9" }].
            map((p, i) =>
            <motion.div key={i} {...stagger(i)} className="bg-card border border-border rounded-xl p-4 text-center hover:border-primary/40 transition-all">
                <MapPin className="w-5 h-5 mx-auto mb-1" style={{ color: p.color }} />
                <div className="text-xs font-semibold">{p.province}</div>
                <div className="text-lg font-bold mt-1" style={{ color: p.color }}>{p.investment}</div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ═══ V19. WOMEN'S EMPOWERMENT ═══ */}
      <CinematicBlock gradient="bg-gradient-to-br from-[#1a0515] via-[#2d0a22] to-[#1a0515]">
        <motion.div {...fadeUp} className="text-center mb-12">
          <span className="text-rose-400 text-xs font-semibold tracking-[0.3em] uppercase mb-3 block">Gender Equality</span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Women's Empowerment</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
          { label: "Women in Workforce", value: "45%", target: "from 15%", color: "#ec4899" },
          { label: "Female Entrepreneurs", value: "200K+", target: "Business owners", color: "#f43f5e" },
          { label: "Girls' Education", value: "95%", target: "Enrollment rate", color: "#d946ef" },
          { label: "Women in Leadership", value: "30%", target: "Public sector", color: "#a855f7" }].
          map((w, i) =>
          <motion.div key={i} {...stagger(i)} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
              <Users className="w-8 h-8 mx-auto mb-3" style={{ color: w.color }} />
              <div className="text-3xl font-bold text-white">{w.value}</div>
              <div className="text-sm text-white/70 font-semibold">{w.label}</div>
              <div className="text-xs text-white/40 mt-1">{w.target}</div>
            </motion.div>
          )}
        </div>
      </CinematicBlock>

      {/* ═══ V20. INDUSTRIAL ZONES & SEZS ═══ */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="mb-12">
            <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-3 block">Industrial Strategy</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Special Economic Zones</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
            { zone: "Kabul Tech City", focus: "Software & AI", jobs: "50K", fdi: "$2.5B", color: "#8b5cf6" },
            { zone: "Herat Trade Zone", focus: "Manufacturing", jobs: "80K", fdi: "$3.2B", color: "#3b82f6" },
            { zone: "Mazar Industrial", focus: "Processing", jobs: "60K", fdi: "$2.8B", color: "#22c55e" },
            { zone: "Kandahar Agri Hub", focus: "Food Processing", jobs: "45K", fdi: "$1.8B", color: "#f59e0b" },
            { zone: "Nangarhar Mining", focus: "Mineral Processing", jobs: "35K", fdi: "$2.0B", color: "#ef4444" }].
            map((z, i) =>
            <motion.div key={i} {...stagger(i)} className="bg-card border border-border rounded-2xl p-5 hover:border-primary/40 transition-all">
                <Factory className="w-7 h-7 mb-3" style={{ color: z.color }} />
                <h4 className="font-bold mb-1">{z.zone}</h4>
                <div className="text-xs text-muted-foreground mb-3">{z.focus}</div>
                <div className="text-xl font-bold" style={{ color: z.color }}>{z.fdi}</div>
                <div className="text-xs text-muted-foreground">{z.jobs} jobs</div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ═══ V21. DEFENCE & BORDER INFRASTRUCTURE ═══ */}
      <CinematicBlock gradient="bg-gradient-to-br from-[#0a0f1a] via-[#121828] to-[#0a0f1a]">
        <motion.div {...fadeUp} className="text-center mb-12">
          <span className="text-blue-400 text-xs font-semibold tracking-[0.3em] uppercase mb-3 block">National Security</span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Border & Defence</h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-4">
          {[
          { label: "Border Posts", value: "250+", sub: "Modern checkpoints", stats: [{ l: "Smart surveillance", v: "100%" }, { l: "Trade facilitation", v: "$8B/yr" }], color: "#3b82f6" },
          { label: "Defence Modernisation", value: "$5B", sub: "Equipment & training", stats: [{ l: "Personnel", v: "250K" }, { l: "Air capability", v: "Tier 2" }], color: "#ef4444" },
          { label: "Cybersecurity", value: "Tier 1", sub: "National cyber defence", stats: [{ l: "Centres", v: "5" }, { l: "Trained staff", v: "10K" }], color: "#8b5cf6" }].
          map((d, i) =>
          <motion.div key={i} {...stagger(i)} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <Shield className="w-8 h-8 mb-3" style={{ color: d.color }} />
              <div className="text-3xl font-bold text-white mb-1">{d.value}</div>
              <div className="text-sm text-white/70 font-semibold">{d.label}</div>
              <div className="text-xs text-white/40 mb-4">{d.sub}</div>
              {d.stats.map((s, j) =>
            <div key={j} className="flex justify-between border-t border-white/10 py-2 text-sm">
                  <span className="text-white/50">{s.l}</span>
                  <span className="font-bold" style={{ color: d.color }}>{s.v}</span>
                </div>
            )}
            </motion.div>
          )}
        </div>
      </CinematicBlock>

      {/* ═══ V22. DIASPORA ENGAGEMENT ═══ */}
      <section className="py-20 px-6 lg:px-12 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="mb-12">
            <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-3 block">Global Afghans</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Diaspora Mobilisation</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
            { region: "North America", diaspora: "600K", investment: "$3.2B", remittances: "$1.5B/yr", color: "#3b82f6" },
            { region: "Europe", diaspora: "800K", investment: "$2.8B", remittances: "$1.8B/yr", color: "#8b5cf6" },
            { region: "Middle East", diaspora: "2M", investment: "$1.5B", remittances: "$3.2B/yr", color: "#f59e0b" },
            { region: "Asia-Pacific", diaspora: "400K", investment: "$1.0B", remittances: "$800M/yr", color: "#22c55e" }].
            map((d, i) =>
            <motion.div key={i} {...stagger(i)} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-all">
                <Globe className="w-7 h-7 mb-3" style={{ color: d.color }} />
                <h4 className="font-bold mb-1">{d.region}</h4>
                <div className="text-2xl font-bold" style={{ color: d.color }}>{d.diaspora}</div>
                <div className="text-xs text-muted-foreground">Afghans abroad</div>
                <div className="mt-3 space-y-1">
                  <div className="flex justify-between text-xs"><span className="text-muted-foreground">Investment</span><span className="font-bold">{d.investment}</span></div>
                  <div className="flex justify-between text-xs"><span className="text-muted-foreground">Remittances</span><span className="font-bold">{d.remittances}</span></div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ═══ V23. RESEARCH & INNOVATION ═══ */}
      <CinematicBlock gradient="bg-gradient-to-br from-[#050a1a] via-[#0a1530] to-[#050a1a]">
        <motion.div {...fadeUp} className="text-center mb-12">
          <span className="text-cyan-400 text-xs font-semibold tracking-[0.3em] uppercase mb-3 block">R&D Strategy</span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Innovation Ecosystem</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
          { label: "Research Centres", value: "50+", icon: Lightbulb, color: "#f59e0b" },
          { label: "Patent Applications", value: "5,000+/yr", icon: Award, color: "#8b5cf6" },
          { label: "R&D Spending", value: "2.5% GDP", icon: TrendingUp, color: "#22c55e" },
          { label: "Tech Incubators", value: "100+", icon: Rocket, color: "#06b6d4" }].
          map((r, i) =>
          <motion.div key={i} {...stagger(i)} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
              <r.icon className="w-8 h-8 mx-auto mb-3" style={{ color: r.color }} />
              <div className="text-3xl font-bold text-white">{r.value}</div>
              <div className="text-sm text-white/60 mt-1">{r.label}</div>
            </motion.div>
          )}
        </div>
      </CinematicBlock>

      {/* ═══ V24. TRANSPORT CONNECTIVITY MATRIX ═══ */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="mb-12">
            <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-3 block">Connectivity</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Transport Network</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
            { mode: "Rail Network", km: "4,500 km", routes: 12, international: 5, icon: Train, color: "#3b82f6",
              lines: [{ l: "Kabul-Mazar", v: "420km" }, { l: "Herat-Kandahar", v: "580km" }, { l: "Trans-Afghan", v: "1,200km" }] },
            { mode: "Highway System", km: "15,000 km", routes: 34, international: 8, icon: Compass, color: "#22c55e",
              lines: [{ l: "Ring Road", v: "2,200km" }, { l: "Provincial Roads", v: "8,500km" }, { l: "Rural Access", v: "4,300km" }] },
            { mode: "Aviation", km: "8 intl airports", routes: 45, international: 25, icon: Plane, color: "#f59e0b",
              lines: [{ l: "Kabul Hub", v: "25 routes" }, { l: "Herat Intl", v: "12 routes" }, { l: "Mazar Intl", v: "8 routes" }] }].
            map((t, i) =>
            <motion.div key={i} {...stagger(i)} className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="p-6 border-b border-border" style={{ background: `${t.color}08` }}>
                  <t.icon className="w-8 h-8 mb-3" style={{ color: t.color }} />
                  <h3 className="text-xl font-bold">{t.mode}</h3>
                  <div className="text-2xl font-bold mt-2" style={{ color: t.color }}>{t.km}</div>
                </div>
                <div className="divide-y divide-border">
                  {t.lines.map((line, j) =>
                <div key={j} className="p-4 flex justify-between items-center">
                      <span className="text-sm">{line.l}</span>
                      <span className="font-bold text-sm" style={{ color: t.color }}>{line.v}</span>
                    </div>
                )}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ═══ V25. YOUTH & SPORTS DEVELOPMENT ═══ */}
      <CinematicBlock gradient="bg-gradient-to-br from-[#1a0a0a] via-[#2d1212] to-[#1a0a0a]">
        <motion.div {...fadeUp} className="text-center mb-12">
          <span className="text-red-400 text-xs font-semibold tracking-[0.3em] uppercase mb-3 block">Youth Strategy</span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Youth & Sports</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
          { label: "Youth Centres", value: "500+", sub: "Community facilities", color: "#ef4444" },
          { label: "Sports Stadiums", value: "34", sub: "One per province", color: "#f59e0b" },
          { label: "Athletes in Training", value: "100K+", sub: "Olympic programme", color: "#3b82f6" },
          { label: "Youth Employment", value: "85%", sub: "Under-30 workforce", color: "#22c55e" }].
          map((y, i) =>
          <motion.div key={i} {...stagger(i)} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
              <Star className="w-8 h-8 mx-auto mb-3" style={{ color: y.color }} />
              <div className="text-3xl font-bold text-white">{y.value}</div>
              <div className="text-sm text-white/70 font-semibold">{y.label}</div>
              <div className="text-xs text-white/40 mt-1">{y.sub}</div>
            </motion.div>
          )}
        </div>
      </CinematicBlock>

      {/* ═══ V26. SOVEREIGN WEALTH FUND ═══ */}
      <section className="py-20 px-6 lg:px-12 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="mb-12">
            <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-3 block">National Savings</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Sovereign Wealth Fund</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div {...fadeUp} className="bg-card border border-border rounded-2xl p-8 text-center md:col-span-1">
              <Crown className="w-12 h-12 mx-auto mb-4 text-amber-500" />
              <div className="text-5xl font-bold text-amber-500 mb-2">$25B</div>
              <div className="text-lg font-semibold">Target Fund Size by 2040</div>
              <div className="text-sm text-muted-foreground mt-2">Funded by mineral royalties, surplus revenue, and strategic investments</div>
            </motion.div>
            <div className="md:col-span-2 space-y-4">
              {[
              { label: "Infrastructure Fund", allocation: 35, value: "$8.75B", color: "#3b82f6" },
              { label: "Education Endowment", allocation: 20, value: "$5B", color: "#8b5cf6" },
              { label: "Healthcare Reserve", allocation: 15, value: "$3.75B", color: "#ec4899" },
              { label: "Climate Adaptation", allocation: 15, value: "$3.75B", color: "#22c55e" },
              { label: "Innovation & R&D", allocation: 10, value: "$2.5B", color: "#f59e0b" },
              { label: "Emergency Reserve", allocation: 5, value: "$1.25B", color: "#ef4444" }].
              map((f, i) =>
              <motion.div key={i} {...stagger(i)}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-semibold">{f.label}</span>
                    <span className="font-bold" style={{ color: f.color }}>{f.value} ({f.allocation}%)</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <motion.div className="h-full rounded-full" style={{ background: f.color }}
                  initial={{ width: 0 }} whileInView={{ width: `${f.allocation * 2.8}%` }} viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: i * 0.1 }} />
                  
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ V27. INTERNATIONAL PARTNERSHIPS ═══ */}
      <CinematicBlock gradient="bg-gradient-to-br from-[#0a1a15] via-[#122d22] to-[#0a1a15]">
        <motion.div {...fadeUp} className="text-center mb-12">
          <span className="text-teal-400 text-xs font-semibold tracking-[0.3em] uppercase mb-3 block">Global Partnerships</span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Strategic Alliances</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
          { partner: "China (BRI)", focus: "Infrastructure & Mining", value: "$15B", projects: 45, color: "#ef4444" },
          { partner: "India (INSTC)", focus: "Trade & Connectivity", value: "$8B", projects: 28, color: "#f59e0b" },
          { partner: "Turkey", focus: "Industry & Defence", value: "$5B", projects: 22, color: "#3b82f6" },
          { partner: "UAE & Saudi", focus: "Energy & Finance", value: "$12B", projects: 35, color: "#22c55e" },
          { partner: "EU", focus: "Governance & Aid", value: "$6B", projects: 40, color: "#8b5cf6" },
          { partner: "Japan & Korea", focus: "Technology & Education", value: "$4B", projects: 18, color: "#06b6d4" }].
          map((p, i) =>
          <motion.div key={i} {...stagger(i)} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <Handshake className="w-7 h-7 mb-3" style={{ color: p.color }} />
              <h4 className="text-lg font-bold text-white">{p.partner}</h4>
              <div className="text-xs text-white/50 mb-3">{p.focus}</div>
              <div className="text-2xl font-bold" style={{ color: p.color }}>{p.value}</div>
              <div className="text-xs text-white/40 mt-1">{p.projects} joint projects</div>
            </motion.div>
          )}
        </div>
      </CinematicBlock>

      {/* ═══ V28. YEAR-BY-YEAR SPENDING ═══ */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="mb-12">
            <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-3 block">Fiscal Planning</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Annual Budget Projection</h2>
          </motion.div>
          <div className="space-y-3">
            {[
            { year: "2026", budget: "$4.2B", revenue: "$3.5B", deficit: "16%", color: "#3b82f6" },
            { year: "2028", budget: "$6.8B", revenue: "$6.2B", deficit: "9%", color: "#22c55e" },
            { year: "2030", budget: "$10.5B", revenue: "$10.0B", deficit: "5%", color: "#f59e0b" },
            { year: "2032", budget: "$14.2B", revenue: "$14.0B", deficit: "1.4%", color: "#8b5cf6" },
            { year: "2035", budget: "$19.5B", revenue: "$20.0B", deficit: "Surplus", color: "#22c55e" },
            { year: "2038", budget: "$25.0B", revenue: "$26.5B", deficit: "Surplus", color: "#06b6d4" },
            { year: "2040", budget: "$30.0B", revenue: "$32.0B", deficit: "Surplus", color: "#f59e0b" }].
            map((b, i) =>
            <motion.div key={i} {...stagger(i)} className="bg-card border border-border rounded-xl p-4 flex items-center gap-4 hover:border-primary/40 transition-all">
                
                <div className="flex-1">
                  <div className="h-3 bg-muted rounded-full overflow-hidden flex">
                    <motion.div className="h-full rounded-l-full" style={{ background: b.color }}
                  initial={{ width: 0 }} whileInView={{ width: "60%" }} viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.08 }} />
                  
                    <motion.div className="h-full rounded-r-full" style={{ background: `${b.color}44` }}
                  initial={{ width: 0 }} whileInView={{ width: "40%" }} viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.08 + 0.2 }} />
                  
                  </div>
                </div>
                <div className="text-right min-w-[120px]">
                  <span className="text-sm font-bold">{b.budget}</span>
                  <span className="text-xs text-muted-foreground ml-2">{b.deficit}</span>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ═══ V29. SOCIAL PROTECTION ═══ */}
      <CinematicBlock gradient="bg-gradient-to-br from-[#1a1005] via-[#28180a] to-[#1a1005]">
        <motion.div {...fadeUp} className="text-center mb-12">
          <span className="text-orange-400 text-xs font-semibold tracking-[0.3em] uppercase mb-3 block">Safety Net</span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Social Protection</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
          { label: "Pension System", value: "100%", sub: "Workers covered", color: "#f59e0b" },
          { label: "Food Security", value: "Zero Hunger", sub: "By 2035", color: "#22c55e" },
          { label: "Social Housing", value: "1M units", sub: "Affordable homes", color: "#3b82f6" },
          { label: "Disability Support", value: "Full coverage", sub: "Inclusive access", color: "#8b5cf6" }].
          map((s, i) =>
          <motion.div key={i} {...stagger(i)} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
              <Heart className="w-8 h-8 mx-auto mb-3" style={{ color: s.color }} />
              <div className="text-2xl font-bold text-white">{s.value}</div>
              <div className="text-sm text-white/70 font-semibold">{s.label}</div>
              <div className="text-xs text-white/40 mt-1">{s.sub}</div>
            </motion.div>
          )}
        </div>
      </CinematicBlock>

      {/* ═══ V30. TELECOMMUNICATIONS ═══ */}
      <section className="py-20 px-6 lg:px-12 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="mb-12">
            <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-3 block">Digital Infrastructure</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Telecom & Connectivity</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
            { label: "5G Coverage", value: "85%", icon: Wifi, color: "#3b82f6" },
            { label: "Fibre Optic", value: "50,000 km", icon: Network, color: "#8b5cf6" },
            { label: "Internet Users", value: "35M", icon: Globe, color: "#22c55e" },
            { label: "Data Centres", value: "12", icon: Database, color: "#f59e0b" }].
            map((t, i) => <MetricCard key={i} {...t} i={i} />)}
          </div>
        </div>
      </section>

      {/* ═══ V31. CULTURAL PRESERVATION ═══ */}
      <CinematicBlock gradient="bg-gradient-to-br from-[#15100a] via-[#221a10] to-[#15100a]">
        <motion.div {...fadeUp} className="text-center mb-12">
          <span className="text-amber-400 text-xs font-semibold tracking-[0.3em] uppercase mb-3 block">Heritage</span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Cultural Preservation</h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-4">
          {[
          { label: "UNESCO Sites Restored", value: "15+", sub: "Including Bamyan Buddhas interpretation centre", color: "#f59e0b" },
          { label: "Museums & Galleries", value: "50+", sub: "National network preserving 5,000 years of heritage", color: "#8b5cf6" },
          { label: "Cultural Festivals", value: "200+/yr", sub: "Celebrating Afghanistan's diverse traditions", color: "#ef4444" }].
          map((c, i) =>
          <motion.div key={i} {...stagger(i)} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
              <Award className="w-8 h-8 mx-auto mb-3" style={{ color: c.color }} />
              <div className="text-3xl font-bold text-white">{c.value}</div>
              <div className="text-sm text-white/70 font-semibold">{c.label}</div>
              <div className="text-xs text-white/40 mt-2">{c.sub}</div>
            </motion.div>
          )}
        </div>
      </CinematicBlock>

      {/* ═══ V32. FOOD PROCESSING & VALUE CHAIN ═══ */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="mb-12">
            <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-3 block">Agri-Business</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Food Processing Industry</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
            { product: "Dried Fruits", plants: 120, export: "$1.8B", color: "#f59e0b" },
            { product: "Saffron Products", plants: 45, export: "$2.5B", color: "#ef4444" },
            { product: "Dairy", plants: 80, export: "$600M", color: "#3b82f6" },
            { product: "Honey", plants: 35, export: "$200M", color: "#f97316" },
            { product: "Spices", plants: 60, export: "$400M", color: "#22c55e" }].
            map((p, i) =>
            <motion.div key={i} {...stagger(i)} className="bg-card border border-border rounded-2xl p-5 hover:border-primary/40 transition-all text-center">
                <Leaf className="w-6 h-6 mx-auto mb-2" style={{ color: p.color }} />
                <h4 className="font-bold text-sm">{p.product}</h4>
                <div className="text-xl font-bold mt-2" style={{ color: p.color }}>{p.export}</div>
                <div className="text-xs text-muted-foreground">{p.plants} processing plants</div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ═══ V33. CLIMATE RESILIENCE INFRASTRUCTURE ═══ */}
      <CinematicBlock gradient="bg-gradient-to-br from-[#0a150f] via-[#12281a] to-[#0a150f]">
        <motion.div {...fadeUp} className="text-center mb-12">
          <span className="text-emerald-400 text-xs font-semibold tracking-[0.3em] uppercase mb-3 block">Resilience</span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Climate Resilience</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
          { label: "Flood Defence", value: "$2.5B", sub: "River management systems", icon: Droplets, color: "#3b82f6" },
          { label: "Drought Response", value: "100%", sub: "Early warning coverage", icon: Thermometer, color: "#ef4444" },
          { label: "Reforestation", value: "1B trees", sub: "Green Afghanistan initiative", icon: TreePine, color: "#22c55e" },
          { label: "Earthquake Ready", value: "All cities", sub: "Building code enforcement", icon: Shield, color: "#f59e0b" }].
          map((c, i) =>
          <motion.div key={i} {...stagger(i)} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
              <c.icon className="w-8 h-8 mx-auto mb-3" style={{ color: c.color }} />
              <div className="text-2xl font-bold text-white">{c.value}</div>
              <div className="text-sm text-white/70 font-semibold">{c.label}</div>
              <div className="text-xs text-white/40 mt-1">{c.sub}</div>
            </motion.div>
          )}
        </div>
      </CinematicBlock>

      {/* ═══ V34. PRIVATE SECTOR GROWTH ═══ */}
      <section className="py-20 px-6 lg:px-12 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="mb-12">
            <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-3 block">Enterprise</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Private Sector Growth</h2>
          </motion.div>
          <div className="space-y-4">
            {[
            { label: "Registered Businesses", value: 85, color: "#22c55e" },
            { label: "SME Access to Finance", value: 70, color: "#3b82f6" },
            { label: "Ease of Doing Business", value: 65, color: "#f59e0b" },
            { label: "Women-owned Enterprises", value: 40, color: "#ec4899" },
            { label: "Export-oriented Firms", value: 55, color: "#8b5cf6" },
            { label: "Digital Commerce Adoption", value: 75, color: "#06b6d4" }].
            map((p, i) => <ProgressRow key={i} label={`${p.label} (Target: ${p.value}%)`} value={p.value} max={100} color={p.color} delay={i * 0.1} />)}
          </div>
        </div>
      </section>

      {/* ═══ V35. LEGACY & FUTURE GENERATIONS ═══ */}
      <CinematicBlock gradient="bg-gradient-to-br from-[#0a0a1a] via-[#151530] to-[#0a0a1a]">
        <motion.div {...fadeUp} className="text-center max-w-4xl mx-auto">
          <Sparkles className="w-12 h-12 mx-auto mb-6 text-primary" />
          <h2 className="text-4xl md:text-7xl font-bold text-white mb-8 leading-tight">A Legacy for <br />Future Generations</h2>
          <p className="text-xl text-white/60 leading-relaxed mb-12">
            By 2040, Afghanistan will stand as a beacon of resilience and transformation — a nation that turned its challenges into opportunities, 
            its resources into shared prosperity, and its diversity into strength. This is not just a vision. It is a promise to every Afghan child 
            that their future will be brighter than the past.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
            { label: "GDP Per Capita", value: "$2,500+", color: "#22c55e" },
            { label: "Life Expectancy", value: "72 years", color: "#3b82f6" },
            { label: "Literacy Rate", value: "95%", color: "#8b5cf6" },
            { label: "Global Peace Index", value: "Top 80", color: "#f59e0b" }].
            map((l, i) =>
            <motion.div key={i} {...stagger(i)} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <div className="text-2xl font-bold" style={{ color: l.color }}>{l.value}</div>
                <div className="text-xs text-white/50 mt-1">{l.label}</div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </CinematicBlock>
    </>);

};