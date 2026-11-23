import { motion } from "framer-motion";
import { useAnimatedValue } from "@/hooks/useAnimatedValue";
import {
  GraduationCap, BookOpen, Users, Building2, Globe, Target, Award,
  TrendingUp, DollarSign, Briefcase, Heart, Lightbulb, Rocket, Shield,
  MapPin, Star, Crown, Sparkles, Cpu, Database, Network, Layers,
  Factory, Home, Hammer, Wrench, Package, Truck, Ship, Plane, Train,
  Gem, Leaf, Sun, Zap, Eye, Timer, Activity, BarChart3, Compass,
  Handshake, Scale, Mountain, TreePine, Wind, Droplets, Battery, Signal } from
"lucide-react";

const fadeUp = { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } };
const stagger = (i: number) => ({ ...fadeUp, transition: { duration: 0.8, ease: "easeOut" as const, delay: i * 0.06 } });
const CB = ({ g, children }: {g: string;children: React.ReactNode;}) =>
<section className="relative py-24 px-6 lg:px-12 overflow-hidden"><div className={`absolute inset-0 ${g}`} /><div className="absolute inset-0 opacity-[0.03]"><div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0id2hpdGUiLz48L3N2Zz4=')]" /></div><div className="relative z-10 max-w-7xl mx-auto">{children}</div></section>;

const MC = ({ icon: Icon, value, label, sub, color, i }: {icon: any;value: string;label: string;sub?: string;color: string;i: number;}) => {
  const { ref, display } = useAnimatedValue(value);
  return <motion.div ref={ref} {...stagger(i)} className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-5 hover:border-primary/40 transition-all"><div className="w-11 h-11 rounded-xl flex items-center justify-center mb-3" style={{ background: `${color}15` }}><Icon className="w-5 h-5" style={{ color }} /></div><div className="text-2xl md:text-3xl font-bold mb-1" style={{ color }}>{display}</div><div className="text-sm font-semibold">{label}</div>{sub && <div className="text-xs text-muted-foreground mt-1">{sub}</div>}</motion.div>;
};
const PB = ({ label, value, max, color, delay = 0 }: {label: string;value: number;max: number;color: string;delay?: number;}) =>
<div className="space-y-1"><div className="flex justify-between text-xs"><span className="text-muted-foreground">{label}</span><span className="font-bold" style={{ color }}>{value}%</span></div><div className="h-2.5 bg-muted rounded-full overflow-hidden"><motion.div className="h-full rounded-full" style={{ background: `linear-gradient(90deg, ${color}, ${color}88)` }} initial={{ width: 0 }} whileInView={{ width: `${value / max * 100}%` }} viewport={{ once: true }} transition={{ duration: 1.4, delay, ease: "easeOut" }} /></div></div>;

const SH = ({ tag, title, desc }: {tag: string;title: string;desc?: string;}) => <motion.div {...fadeUp} className="mb-12"><span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-3 block">{tag}</span><h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>{desc && <p className="text-muted-foreground max-w-3xl">{desc}</p>}</motion.div>;
const RC = ({ value, color, size = 100, label }: {value: number;color: string;size?: number;label: string;}) => {
  const r = (size - 10) / 2;const c = 2 * Math.PI * r;
  return <div className="flex flex-col items-center gap-2"><div className="relative"><svg width={size} height={size} className="-rotate-90"><circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="hsl(var(--muted))" strokeWidth="5" /><motion.circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth="5" strokeLinecap="round" strokeDasharray={c} initial={{ strokeDashoffset: c }} whileInView={{ strokeDashoffset: c - value / 100 * c }} viewport={{ once: true }} transition={{ duration: 1.8, ease: "easeOut" }} /></svg><div className="absolute inset-0 flex items-center justify-center text-sm font-bold" style={{ color }}>{value}%</div></div><span className="text-xs text-muted-foreground text-center">{label}</span></div>;
};

export const EducationMegaSections = () =>
<>
    <CB g="bg-gradient-to-br from-[#0a0d1a] via-[#101828] to-[#0a0d1a]">
      <motion.div {...fadeUp} className="text-center mb-16">
        <span className="text-primary text-xs font-semibold tracking-[0.4em] uppercase mb-4 block">Section I — Educational Renaissance</span>
        <h2 className="text-5xl md:text-7xl font-bold mb-6">Knowledge<br />Revolution</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">From 30% literacy to universal education — building the world's fastest education transformation.</p>
      </motion.div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <MC icon={GraduationCap} value="100%" label="Literacy Target" sub="By 2040" color="#3b82f6" i={0} />
        <MC icon={Building2} value="10,000" label="Schools Built" sub="New facilities" color="#22c55e" i={1} />
        <MC icon={Users} value="15M" label="Students" sub="Enrolled" color="#f59e0b" i={2} />
        <MC icon={DollarSign} value="$8B" label="Education Budget" sub="15-year plan" color="#8b5cf6" i={3} />
      </div>
    </CB>

    {/* 2-10: EDUCATION TIERS */}
    {[
  { tier: "Early Childhood", target: "3M children", investment: "$500M", metric: "100% pre-school", col: "#ec4899" },
  { tier: "Primary Education", target: "8M students", investment: "$2B", metric: "100% enrollment", col: "#22c55e" },
  { tier: "Secondary Education", target: "5M students", investment: "$1.5B", metric: "90% completion", col: "#3b82f6" },
  { tier: "Higher Education", target: "1M students", investment: "$2B", metric: "50 universities", col: "#8b5cf6" },
  { tier: "Vocational Training", target: "2M trainees", investment: "$1B", metric: "500 centres", col: "#f59e0b" },
  { tier: "Teacher Training", target: "500K teachers", investment: "$500M", metric: "All certified", col: "#ef4444" },
  { tier: "Digital Learning", target: "10M users", investment: "$300M", metric: "100% online access", col: "#06b6d4" },
  { tier: "Special Education", target: "200K students", investment: "$200M", metric: "Full inclusion", col: "#14b8a6" },
  { tier: "Adult Literacy", target: "5M adults", investment: "$500M", metric: "90% literate", col: "#84cc16" }].
  map((t, idx) =>
  <CB key={t.tier} g="bg-gradient-to-br from-[#0d0a1a] via-[#150d28] to-[#0d0a1a]">
        <SH tag={`Section ${2 + idx} — ${t.tier}`} title={t.tier} desc={`Target: ${t.target}. Investment: ${t.investment}.`} />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <MC icon={Users} value={t.target} label="Students" sub="Target" color={t.col} i={0} />
          <MC icon={DollarSign} value={t.investment} label="Investment" sub="Total" color="#22c55e" i={1} />
          <MC icon={Target} value={t.metric} label="Key Metric" sub="Goal" color="#3b82f6" i={2} />
          <MC icon={Building2} value="34" label="Provinces" sub="Coverage" color="#f59e0b" i={3} />
        </div>
      </CB>
  )}

    {/* 11-20: PROVINCIAL EDUCATION PROFILES */}
    {[
  { prov: "Kabul", schools: "2,000", literacy: 85, inv: "$1.5B", col: "#3b82f6" },
  { prov: "Herat", schools: "1,200", literacy: 75, inv: "$800M", col: "#22c55e" },
  { prov: "Balkh", schools: "800", literacy: 70, inv: "$600M", col: "#f59e0b" },
  { prov: "Nangarhar", schools: "700", literacy: 65, inv: "$500M", col: "#ef4444" },
  { prov: "Kandahar", schools: "600", literacy: 55, inv: "$500M", col: "#8b5cf6" },
  { prov: "Kunduz", schools: "400", literacy: 60, inv: "$300M", col: "#06b6d4" },
  { prov: "Bamyan", schools: "300", literacy: 80, inv: "$200M", col: "#14b8a6" },
  { prov: "Helmand", schools: "350", literacy: 45, inv: "$400M", col: "#ec4899" },
  { prov: "Badakhshan", schools: "250", literacy: 50, inv: "$250M", col: "#84cc16" },
  { prov: "Paktya", schools: "200", literacy: 55, inv: "$200M", col: "#f97316" }].
  map((p, idx) =>
  <CB key={p.prov} g="bg-gradient-to-br from-[#0a1a0a] via-[#0d2810] to-[#0a1a0a]">
        <SH tag={`Section ${11 + idx} — ${p.prov}`} title={`${p.prov} Education`} desc={`${p.schools} schools. Literacy: ${p.literacy}%.`} />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <MC icon={Building2} value={p.schools} label="Schools" sub={p.prov} color={p.col} i={0} />
          <MC icon={DollarSign} value={p.inv} label="Investment" sub="Total" color="#22c55e" i={1} />
          <RC value={p.literacy} color={p.col} label="Literacy Rate" />
          <RC value={p.literacy + 10} color="#3b82f6" label="Enrollment" />
        </div>
      </CB>
  )}

    {/* 21-30: YEAR ROADMAP */}
    {[
  { yr: "2026", focus: "National curriculum reform and teacher recruitment", target: "50,000 teachers hired", col: "#3b82f6" },
  { yr: "2027", focus: "2,000 new schools under construction", target: "2M new enrollments", col: "#22c55e" },
  { yr: "2028", focus: "Digital learning platform launch nationwide", target: "5M online learners", col: "#06b6d4" },
  { yr: "2029", focus: "Vocational training centres in all districts", target: "500K skilled workers", col: "#f59e0b" },
  { yr: "2030", focus: "10 new universities operational", target: "500K university students", col: "#8b5cf6" },
  { yr: "2031", focus: "STEM education excellence programme", target: "100K STEM graduates", col: "#ef4444" },
  { yr: "2032", focus: "International accreditation for 20 universities", target: "Global recognition", col: "#14b8a6" },
  { yr: "2033", focus: "Research excellence with 50 research centres", target: "10,000 researchers", col: "#ec4899" },
  { yr: "2034", focus: "Adult literacy campaign completion", target: "95% national literacy", col: "#84cc16" },
  { yr: "2035", focus: "Vision achieved — world-class education system", target: "100% literacy", col: "#f97316" }].
  map((y, idx) =>
  <CB key={y.yr} g="bg-gradient-to-br from-[#0d0d1a] via-[#151528] to-[#0d0d1a]">
        <SH tag={`Section ${21 + idx} — Year ${y.yr}`} title={`Education ${y.yr}`} desc={y.focus} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div {...fadeUp} className="bg-card/60 border border-border rounded-xl p-6"><div className="text-3xl font-bold mb-2" style={{ color: y.col }}>{y.yr}</div><p className="text-muted-foreground text-sm">{y.focus}</p></motion.div>
          
        </div>
      </CB>
  )}

    {/* 31-50: SPECIALIZED PROGRAMMES */}
    <CB g="bg-gradient-to-br from-[#1a051a] via-[#280828] to-[#1a051a]">
      <SH tag="Sections XXXI-XL — Girls' Education" title="Women & Girls in Education" desc="5 million girls enrolled with dedicated scholarship and mentoring programmes." />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <MC icon={Users} value="5M" label="Girls Enrolled" sub="All levels" color="#ec4899" i={0} />
        <MC icon={GraduationCap} value="1M" label="Women Graduates" sub="University" color="#8b5cf6" i={1} />
        <MC icon={DollarSign} value="$1B" label="Scholarships" sub="Women's fund" color="#22c55e" i={2} />
        <MC icon={Award} value="50%" label="STEM Women" sub="Target" color="#3b82f6" i={3} />
      </div>
      <div className="space-y-3">
        <PB label="Primary Girls Enrollment" value={95} max={100} color="#ec4899" delay={0} />
        <PB label="Secondary Girls Enrollment" value={80} max={100} color="#8b5cf6" delay={0.1} />
        <PB label="University Women" value={50} max={100} color="#3b82f6" delay={0.2} />
        <PB label="Women Teachers" value={45} max={100} color="#22c55e" delay={0.3} />
        <PB label="STEM Women" value={35} max={100} color="#f59e0b" delay={0.4} />
      </div>
    </CB>

    <CB g="bg-gradient-to-br from-[#0d0a1a] via-[#150d28] to-[#0d0a1a]">
      <SH tag="Sections XLI-L — Innovation" title="EdTech & Innovation" desc="500 educational technology startups transforming learning." />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <MC icon={Cpu} value="500" label="EdTech Startups" sub="Afghan-built" color="#8b5cf6" i={0} />
        <MC icon={Globe} value="10M" label="Online Learners" sub="Platform users" color="#3b82f6" i={1} />
        <MC icon={Database} value="1M+" label="Courses" sub="Digital library" color="#22c55e" i={2} />
        <MC icon={Rocket} value="$200M" label="EdTech Investment" sub="Total" color="#f59e0b" i={3} />
      </div>
    </CB>

    {/* 51-60: RESEARCH & PARTNERSHIPS */}
    <CB g="bg-gradient-to-br from-[#0a0a1a] via-[#0d0d28] to-[#0a0a1a]">
      <SH tag="Sections LI-LX — Research" title="Research Excellence" desc="50 research centres driving innovation across agriculture, health, and technology." />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
      { name: "UNESCO", role: "Curriculum", inv: "$200M", col: "#3b82f6" }, { name: "UNICEF", role: "Primary Ed", inv: "$300M", col: "#22c55e" },
      { name: "World Bank", role: "Higher Ed", inv: "$500M", col: "#f59e0b" }, { name: "EU Education", role: "Vocational", inv: "$200M", col: "#8b5cf6" },
      { name: "USAID", role: "Literacy", inv: "$300M", col: "#ef4444" }, { name: "JICA", role: "STEM", inv: "$150M", col: "#06b6d4" },
      { name: "Qatar Foundation", role: "Digital", inv: "$100M", col: "#14b8a6" }, { name: "Mastercard", role: "Scholarships", inv: "$50M", col: "#ec4899" }].
      map((p, i) =>
      <motion.div key={p.name} {...stagger(i)} className="bg-card/60 border border-border rounded-xl p-4">
            <div className="text-lg font-bold" style={{ color: p.col }}>{p.name}</div>
            <div className="text-xs text-muted-foreground">{p.role}</div>
            <div className="text-sm font-semibold mt-1">{p.inv}</div>
          </motion.div>
      )}
      </div>
    </CB>

    {/* 61-70: GRAND SUMMARY */}
    <CB g="bg-gradient-to-br from-[#0a0d1a] via-[#101828] to-[#0a0d1a]">
      <motion.div {...fadeUp} className="text-center mb-16">
        <span className="text-primary text-xs font-semibold tracking-[0.4em] uppercase mb-4 block">Sections LXI-LXX — Grand Vision</span>
        <h2 className="text-5xl md:text-7xl font-bold mb-6">Education<br />2040 Vision</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">100% literacy, 50 world-class universities, and a knowledge-driven economy.</p>
      </motion.div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <MC icon={GraduationCap} value="100%" label="Literacy" sub="National" color="#3b82f6" i={0} />
        <MC icon={Building2} value="10,000" label="Schools" sub="Built" color="#22c55e" i={1} />
        <MC icon={Users} value="15M" label="Students" sub="Enrolled" color="#f59e0b" i={2} />
        <MC icon={Award} value="50" label="Universities" sub="World-class" color="#8b5cf6" i={3} />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        <RC value={100} color="#3b82f6" label="Literacy" />
        <RC value={100} color="#22c55e" label="Enrollment" />
        <RC value={90} color="#f59e0b" label="Completion" />
        <RC value={80} color="#8b5cf6" label="University" />
        <RC value={95} color="#ef4444" label="Digital Access" />
      </div>
    </CB>
  </>;