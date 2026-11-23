import { motion } from "framer-motion";
import { useAnimatedValue } from "@/hooks/useAnimatedValue";
import {
  Cpu, Database, Network, Globe, Target, Award, TrendingUp, Users,
  DollarSign, Building2, Shield, MapPin, Star, Lightbulb, Rocket,
  GraduationCap, Heart, Briefcase, Factory, Home, Package, Signal,
  Layers, BarChart3, Eye, Timer, Activity, Compass, Zap, Crown,
  Sparkles, BookOpen, Hammer, Wrench, Truck, Ship, Plane, Train
} from "lucide-react";

const fadeUp = { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } };
const stagger = (i: number) => ({ ...fadeUp, transition: { duration: 0.8, ease: "easeOut" as const, delay: i * 0.06 } });
const CB = ({ g, children }: { g: string; children: React.ReactNode }) => (<section className="relative py-24 px-6 lg:px-12 overflow-hidden"><div className={`absolute inset-0 ${g}`} /><div className="absolute inset-0 opacity-[0.03]"><div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0id2hpdGUiLz48L3N2Zz4=')]" /></div><div className="relative z-10 max-w-7xl mx-auto">{children}</div></section>);
const MC = ({ icon: Icon, value, label, sub, color, i }: { icon: any; value: string; label: string; sub?: string; color: string; i: number }) => { const { ref, display } = useAnimatedValue(value); return (<motion.div ref={ref} {...stagger(i)} className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-5 hover:border-primary/40 transition-all"><div className="w-11 h-11 rounded-xl flex items-center justify-center mb-3" style={{ background: `${color}15` }}><Icon className="w-5 h-5" style={{ color }} /></div><div className="text-2xl md:text-3xl font-bold mb-1" style={{ color }}>{display}</div><div className="text-sm font-semibold">{label}</div>{sub && <div className="text-xs text-muted-foreground mt-1">{sub}</div>}</motion.div>); };
const PB = ({ label, value, max, color, delay = 0 }: { label: string; value: number; max: number; color: string; delay?: number }) => (<div className="space-y-1"><div className="flex justify-between text-xs"><span className="text-muted-foreground">{label}</span><span className="font-bold" style={{ color }}>{value}%</span></div><div className="h-2.5 bg-muted rounded-full overflow-hidden"><motion.div className="h-full rounded-full" style={{ background: `linear-gradient(90deg, ${color}, ${color}88)` }} initial={{ width: 0 }} whileInView={{ width: `${(value / max) * 100}%` }} viewport={{ once: true }} transition={{ duration: 1.4, delay, ease: "easeOut" }} /></div></div>);
const SH = ({ tag, title, desc }: { tag: string; title: string; desc?: string }) => (<motion.div {...fadeUp} className="mb-12"><span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-3 block">{tag}</span><h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>{desc && <p className="text-muted-foreground max-w-3xl">{desc}</p>}</motion.div>);
const RC = ({ value, color, size = 100, label }: { value: number; color: string; size?: number; label: string }) => { const r = (size - 10) / 2; const c = 2 * Math.PI * r; return (<div className="flex flex-col items-center gap-2"><div className="relative"><svg width={size} height={size} className="-rotate-90"><circle cx={size/2} cy={size/2} r={r} fill="none" stroke="hsl(var(--muted))" strokeWidth="5" /><motion.circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth="5" strokeLinecap="round" strokeDasharray={c} initial={{ strokeDashoffset: c }} whileInView={{ strokeDashoffset: c - (value / 100) * c }} viewport={{ once: true }} transition={{ duration: 1.8, ease: "easeOut" }} /></svg><div className="absolute inset-0 flex items-center justify-center text-sm font-bold" style={{ color }}>{value}%</div></div><span className="text-xs text-muted-foreground text-center">{label}</span></div>); };

export const TechnologyMegaSections = () => (
  <>
    <CB g="bg-gradient-to-br from-[#0d0a1a] via-[#150d28] to-[#0d0a1a]">
      <motion.div {...fadeUp} className="text-center mb-16">
        <span className="text-primary text-xs font-semibold tracking-[0.4em] uppercase mb-4 block">Section I — Digital Transformation</span>
        <h2 className="text-5xl md:text-7xl font-bold mb-6">Silicon<br/>Valley East</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Building Afghanistan's $5B digital economy — from AI and blockchain to cybersecurity and smart government.</p>
      </motion.div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <MC icon={Cpu} value="$5B" label="Digital Economy" sub="By 2035" color="#8b5cf6" i={0} />
        <MC icon={Users} value="500K" label="Tech Jobs" sub="Created" color="#3b82f6" i={1} />
        <MC icon={Rocket} value="5,000" label="Startups" sub="Tech ecosystem" color="#22c55e" i={2} />
        <MC icon={Globe} value="100%" label="Internet Access" sub="National" color="#f59e0b" i={3} />
      </div>
    </CB>

    {[
      { tech: "Artificial Intelligence", jobs: "50K", inv: "$500M", startups: "200", col: "#8b5cf6" },
      { tech: "Cybersecurity", jobs: "30K", inv: "$300M", startups: "100", col: "#ef4444" },
      { tech: "Cloud Computing", jobs: "40K", inv: "$400M", startups: "150", col: "#3b82f6" },
      { tech: "Blockchain & Fintech", jobs: "25K", inv: "$200M", startups: "300", col: "#22c55e" },
      { tech: "E-Commerce", jobs: "100K", inv: "$500M", startups: "1,000", col: "#f59e0b" },
      { tech: "Smart Government", jobs: "20K", inv: "$300M", startups: "50", col: "#06b6d4" },
      { tech: "Data Science", jobs: "30K", inv: "$200M", startups: "100", col: "#14b8a6" },
      { tech: "IoT & Robotics", jobs: "20K", inv: "$300M", startups: "80", col: "#ec4899" },
      { tech: "Gaming & VR", jobs: "15K", inv: "$100M", startups: "200", col: "#84cc16" },
    ].map((t, idx) => (
      <CB key={t.tech} g="bg-gradient-to-br from-[#0a0d1a] via-[#101828] to-[#0a0d1a]">
        <SH tag={`Section ${2 + idx} — ${t.tech}`} title={t.tech} desc={`${t.jobs} jobs. ${t.startups} startups. Investment: ${t.inv}.`} />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <MC icon={Users} value={t.jobs} label="Jobs" sub={t.tech} color={t.col} i={0} />
          <MC icon={DollarSign} value={t.inv} label="Investment" sub="Total" color="#22c55e" i={1} />
          <MC icon={Rocket} value={t.startups} label="Startups" sub="Ecosystem" color="#3b82f6" i={2} />
          <MC icon={Globe} value="34" label="Provinces" sub="Coverage" color="#f59e0b" i={3} />
        </div>
      </CB>
    ))}

    {[
      { prov: "Kabul", focus: "AI & Fintech Hub", startups: "2,000", inv: "$1.5B", pct: 90, col: "#8b5cf6" },
      { prov: "Herat", focus: "E-Commerce Centre", startups: "500", inv: "$400M", pct: 75, col: "#22c55e" },
      { prov: "Balkh", focus: "Data Centre Hub", startups: "300", inv: "$300M", pct: 70, col: "#3b82f6" },
      { prov: "Nangarhar", focus: "Border Tech Zone", startups: "200", inv: "$200M", pct: 60, col: "#f59e0b" },
      { prov: "Kandahar", focus: "AgriTech Centre", startups: "150", inv: "$200M", pct: 55, col: "#ef4444" },
      { prov: "Bamyan", focus: "Tourism Tech", startups: "80", inv: "$100M", pct: 50, col: "#06b6d4" },
      { prov: "Kunduz", focus: "HealthTech Hub", startups: "100", inv: "$100M", pct: 45, col: "#14b8a6" },
      { prov: "Panjshir", focus: "CleanTech", startups: "50", inv: "$80M", pct: 40, col: "#ec4899" },
      { prov: "Helmand", focus: "Energy Tech", startups: "80", inv: "$150M", pct: 45, col: "#84cc16" },
      { prov: "Badakhshan", focus: "Mining Tech", startups: "60", inv: "$100M", pct: 35, col: "#f97316" },
    ].map((p, idx) => (
      <CB key={p.prov} g="bg-gradient-to-br from-[#0d0a1a] via-[#150d28] to-[#0d0a1a]">
        <SH tag={`Section ${11 + idx} — ${p.prov}`} title={`${p.prov}: ${p.focus}`} desc={`${p.startups} startups. Investment: ${p.inv}.`} />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <MC icon={MapPin} value={p.inv} label="Investment" sub={p.prov} color={p.col} i={0} />
          <MC icon={Rocket} value={p.startups} label="Startups" sub="Active" color="#22c55e" i={1} />
          <RC value={p.pct} color={p.col} label="Digital Readiness" />
          <RC value={p.pct + 5} color="#3b82f6" label="Connectivity" />
        </div>
      </CB>
    ))}

    {[
      { yr: "2026", focus: "5G rollout and national fibre backbone", target: "80% internet access", col: "#8b5cf6" },
      { yr: "2027", focus: "Digital ID for all citizens", target: "30M digital IDs", col: "#3b82f6" },
      { yr: "2028", focus: "E-government platform launch", target: "100 services online", col: "#22c55e" },
      { yr: "2029", focus: "Tech startup accelerator programme", target: "1,000 startups funded", col: "#f59e0b" },
      { yr: "2030", focus: "AI Centre of Excellence opens", target: "10K AI engineers", col: "#ef4444" },
      { yr: "2031", focus: "Cybersecurity national centre", target: "Zero major breaches", col: "#06b6d4" },
      { yr: "2032", focus: "Data centre infrastructure", target: "5 tier-3 centres", col: "#14b8a6" },
      { yr: "2033", focus: "Blockchain government records", target: "100% digital records", col: "#ec4899" },
      { yr: "2034", focus: "Tech export programme", target: "$1B tech exports", col: "#84cc16" },
      { yr: "2035", focus: "Vision — digital economy leader", target: "$5B digital GDP", col: "#f97316" },
    ].map((y, idx) => (
      <CB key={y.yr} g="bg-gradient-to-br from-[#0a0d1a] via-[#101828] to-[#0a0d1a]">
        <SH tag={`Section ${21 + idx} — Year ${y.yr}`} title={`Tech ${y.yr}`} desc={y.focus} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div {...fadeUp} className="bg-card/60 border border-border rounded-xl p-6"><div className="text-3xl font-bold mb-2" style={{ color: y.col }}>{y.yr}</div><p className="text-muted-foreground text-sm">{y.focus}</p></motion.div>
          <motion.div {...stagger(1)} className="bg-card/60 border border-border rounded-xl p-6"><div className="text-sm text-muted-foreground mb-1">Milestone</div><div className="text-2xl font-bold" style={{ color: y.col }}>{y.target}</div></motion.div>
        </div>
      </CB>
    ))}

    {[
      { infra: "5G Towers", count: "10,000", coverage: 85, inv: "$1B", col: "#8b5cf6" },
      { infra: "Fibre Optic (km)", count: "50,000", coverage: 75, inv: "$800M", col: "#3b82f6" },
      { infra: "Data Centres", count: "10", coverage: 60, inv: "$500M", col: "#22c55e" },
      { infra: "Satellite Stations", count: "20", coverage: 95, inv: "$200M", col: "#f59e0b" },
      { infra: "WiFi Hotspots", count: "100K", coverage: 70, inv: "$100M", col: "#06b6d4" },
      { infra: "Submarine Cables", count: "3", coverage: 50, inv: "$300M", col: "#ef4444" },
      { infra: "IXP Exchanges", count: "5", coverage: 80, inv: "$50M", col: "#14b8a6" },
      { infra: "Smart City Nodes", count: "5,000", coverage: 40, inv: "$400M", col: "#ec4899" },
    ].map((inf, idx) => (
      <CB key={inf.infra} g="bg-gradient-to-br from-[#0d0d1a] via-[#151528] to-[#0d0d1a]">
        <SH tag={`Section ${31 + idx} — ${inf.infra}`} title={inf.infra} desc={`Count: ${inf.count}. Investment: ${inf.inv}.`} />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <MC icon={Network} value={inf.count} label="Deployed" sub={inf.infra} color={inf.col} i={0} />
          <MC icon={DollarSign} value={inf.inv} label="Investment" sub="Total" color="#22c55e" i={1} />
          <RC value={inf.coverage} color={inf.col} label="Coverage %" />
          <RC value={Math.min(inf.coverage + 15, 100)} color="#3b82f6" label="2035 Target" />
        </div>
      </CB>
    ))}

    <CB g="bg-gradient-to-br from-[#0d0a1a] via-[#150d28] to-[#0d0a1a]">
      <SH tag="Sections XXXIX-XLIII — Digital Infrastructure" title="National Digital Backbone" />
      <div className="space-y-3">
        <PB label="5G Network Coverage" value={85} max={100} color="#8b5cf6" delay={0} />
        <PB label="Fibre Optic Backbone" value={75} max={100} color="#3b82f6" delay={0.1} />
        <PB label="Data Centre Capacity" value={60} max={100} color="#22c55e" delay={0.2} />
        <PB label="Satellite Internet" value={50} max={100} color="#f59e0b" delay={0.3} />
        <PB label="Rural Connectivity" value={65} max={100} color="#06b6d4" delay={0.4} />
        <PB label="Smart City Systems" value={40} max={100} color="#ef4444" delay={0.5} />
        <PB label="Cloud Infrastructure" value={55} max={100} color="#14b8a6" delay={0.6} />
        <PB label="Cybersecurity Readiness" value={70} max={100} color="#ec4899" delay={0.7} />
      </div>
    </CB>

    <CB g="bg-gradient-to-br from-[#050d1a] via-[#081528] to-[#050d1a]">
      <SH tag="Sections XLIV-XLVIII — E-Government" title="Digital Government Services" desc="100 government services available online for all citizens." />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <MC icon={Shield} value="100" label="Services Online" sub="Government" color="#3b82f6" i={0} />
        <MC icon={Users} value="30M" label="Digital IDs" sub="Issued" color="#22c55e" i={1} />
        <MC icon={Database} value="100%" label="Records Digital" sub="All ministries" color="#8b5cf6" i={2} />
        <MC icon={Eye} value="24/7" label="Availability" sub="Uptime" color="#f59e0b" i={3} />
      </div>
      <div className="space-y-3">
        <PB label="Land Registry" value={80} max={100} color="#3b82f6" delay={0} />
        <PB label="Business Registration" value={90} max={100} color="#22c55e" delay={0.1} />
        <PB label="Tax Filing" value={75} max={100} color="#f59e0b" delay={0.2} />
        <PB label="Health Records" value={60} max={100} color="#ef4444" delay={0.3} />
        <PB label="Education Certificates" value={85} max={100} color="#8b5cf6" delay={0.4} />
      </div>
    </CB>

    <CB g="bg-gradient-to-br from-[#0a0a1a] via-[#0d0d28] to-[#0a0a1a]">
      <SH tag="Sections XLIX-LIII — Tech Partnerships" title="Global Tech Alliances" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { n: "Google", r: "AI & Cloud", v: "$200M", c: "#3b82f6" }, { n: "Microsoft", r: "Azure Gov", v: "$150M", c: "#22c55e" },
          { n: "Huawei", r: "5G Infra", v: "$500M", c: "#ef4444" }, { n: "Samsung", r: "Smart City", v: "$100M", c: "#8b5cf6" },
          { n: "Starlink", r: "Satellite Net", v: "$50M", c: "#f59e0b" }, { n: "IBM", r: "Blockchain", v: "$80M", c: "#06b6d4" },
          { n: "AWS", r: "Data Centres", v: "$300M", c: "#14b8a6" }, { n: "Meta", r: "Connectivity", v: "$100M", c: "#ec4899" },
        ].map((p, i) => (
          <motion.div key={p.n} {...stagger(i)} className="bg-card/60 border border-border rounded-xl p-4">
            <div className="text-lg font-bold" style={{ color: p.c }}>{p.n}</div><div className="text-xs text-muted-foreground">{p.r}</div><div className="text-sm font-semibold mt-1">{p.v}</div>
          </motion.div>
        ))}
      </div>
    </CB>

    <CB g="bg-gradient-to-br from-[#0d0a1a] via-[#150d28] to-[#0d0a1a]">
      <motion.div {...fadeUp} className="text-center mb-16">
        <span className="text-primary text-xs font-semibold tracking-[0.4em] uppercase mb-4 block">Sections LIV-LXX — Grand Vision</span>
        <h2 className="text-5xl md:text-7xl font-bold mb-6">Technology<br/>2040 Vision</h2>
      </motion.div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <MC icon={Cpu} value="$5B" label="Digital GDP" sub="By 2035" color="#8b5cf6" i={0} />
        <MC icon={Rocket} value="5,000" label="Startups" sub="Ecosystem" color="#22c55e" i={1} />
        <MC icon={Users} value="500K" label="Tech Jobs" sub="Created" color="#3b82f6" i={2} />
        <MC icon={Globe} value="100%" label="Connected" sub="Internet access" color="#f59e0b" i={3} />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        <RC value={100} color="#8b5cf6" label="Connectivity" />
        <RC value={90} color="#3b82f6" label="Digital Gov" />
        <RC value={85} color="#22c55e" label="AI Adoption" />
        <RC value={80} color="#f59e0b" label="Cybersecurity" />
        <RC value={95} color="#ef4444" label="E-Commerce" />
      </div>
    </CB>
  </>
);
