import { motion } from "framer-motion";
import { useAnimatedValue } from "@/hooks/useAnimatedValue";
import {
  Heart, Stethoscope, Users, Building2, Globe, Target, Award, TrendingUp,
  DollarSign, Briefcase, GraduationCap, Shield, MapPin, Star, Lightbulb,
  Rocket, Cpu, Database, Network, Factory, Home, Package, Truck, Activity,
  Layers, BarChart3, Eye, Timer, Compass, Zap, Droplets, Leaf, Sun, Crown } from
"lucide-react";

const fadeUp = { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } };
const stagger = (i: number) => ({ ...fadeUp, transition: { duration: 0.8, ease: "easeOut" as const, delay: i * 0.06 } });
const CB = ({ g, children }: {g: string;children: React.ReactNode;}) => <section className="relative py-24 px-6 lg:px-12 overflow-hidden"><div className={`absolute inset-0 ${g}`} /><div className="absolute inset-0 opacity-[0.03]"><div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0id2hpdGUiLz48L3N2Zz4=')]" /></div><div className="relative z-10 max-w-7xl mx-auto">{children}</div></section>;
const MC = ({ icon: Icon, value, label, sub, color, i }: {icon: any;value: string;label: string;sub?: string;color: string;i: number;}) => {const { ref, display } = useAnimatedValue(value);return <motion.div ref={ref} {...stagger(i)} className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-5 hover:border-primary/40 transition-all"><div className="w-11 h-11 rounded-xl flex items-center justify-center mb-3" style={{ background: `${color}15` }}><Icon className="w-5 h-5" style={{ color }} /></div><div className="text-2xl md:text-3xl font-bold mb-1" style={{ color }}>{display}</div><div className="text-sm font-semibold">{label}</div>{sub && <div className="text-xs text-muted-foreground mt-1">{sub}</div>}</motion.div>;};
const PB = ({ label, value, max, color, delay = 0 }: {label: string;value: number;max: number;color: string;delay?: number;}) => <div className="space-y-1"><div className="flex justify-between text-xs"><span className="text-muted-foreground">{label}</span><span className="font-bold" style={{ color }}>{value}%</span></div><div className="h-2.5 bg-muted rounded-full overflow-hidden"><motion.div className="h-full rounded-full" style={{ background: `linear-gradient(90deg, ${color}, ${color}88)` }} initial={{ width: 0 }} whileInView={{ width: `${value / max * 100}%` }} viewport={{ once: true }} transition={{ duration: 1.4, delay, ease: "easeOut" }} /></div></div>;
const SH = ({ tag, title, desc }: {tag: string;title: string;desc?: string;}) => <motion.div {...fadeUp} className="mb-12"><span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-3 block">{tag}</span><h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>{desc && <p className="text-muted-foreground max-w-3xl">{desc}</p>}</motion.div>;
const RC = ({ value, color, size = 100, label }: {value: number;color: string;size?: number;label: string;}) => {const r = (size - 10) / 2;const c = 2 * Math.PI * r;return <div className="flex flex-col items-center gap-2"><div className="relative"><svg width={size} height={size} className="-rotate-90"><circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="hsl(var(--muted))" strokeWidth="5" /><motion.circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth="5" strokeLinecap="round" strokeDasharray={c} initial={{ strokeDashoffset: c }} whileInView={{ strokeDashoffset: c - value / 100 * c }} viewport={{ once: true }} transition={{ duration: 1.8, ease: "easeOut" }} /></svg><div className="absolute inset-0 flex items-center justify-center text-sm font-bold" style={{ color }}>{value}%</div></div><span className="text-xs text-muted-foreground text-center">{label}</span></div>;};

export const HealthcareMegaSections = () =>
<>
    <CB g="bg-gradient-to-br from-[#1a0505] via-[#2d0808] to-[#1a0505]">
      <motion.div {...fadeUp} className="text-center mb-16">
        <span className="text-primary text-xs font-semibold tracking-[0.4em] uppercase mb-4 block">Section I — Healthcare Revolution</span>
        <h2 className="text-5xl md:text-7xl font-bold mb-6">Universal<br />Healthcare</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">100% healthcare coverage for 40 million citizens — from village clinics to world-class hospitals.</p>
      </motion.div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <MC icon={Heart} value="100%" label="Coverage Target" sub="Universal access" color="#ef4444" i={0} />
        <MC icon={Building2} value="5,000" label="Health Facilities" sub="Nationwide" color="#22c55e" i={1} />
        <MC icon={Users} value="200K" label="Health Workers" sub="Trained" color="#3b82f6" i={2} />
        <MC icon={DollarSign} value="$10B" label="Health Budget" sub="15-year plan" color="#f59e0b" i={3} />
      </div>
    </CB>

    {[
  { dept: "Primary Care", facilities: "3,000", workers: "50K", inv: "$2B", col: "#22c55e" },
  { dept: "Hospitals", facilities: "200", workers: "30K", inv: "$3B", col: "#3b82f6" },
  { dept: "Maternal Health", facilities: "500", workers: "20K", inv: "$1B", col: "#ec4899" },
  { dept: "Child Health", facilities: "400", workers: "15K", inv: "$800M", col: "#f59e0b" },
  { dept: "Mental Health", facilities: "100", workers: "5K", inv: "$500M", col: "#8b5cf6" },
  { dept: "Emergency & Trauma", facilities: "50", workers: "10K", inv: "$1B", col: "#ef4444" },
  { dept: "Pharmaceutical", facilities: "20", workers: "5K", inv: "$500M", col: "#06b6d4" },
  { dept: "Telemedicine", facilities: "1,000", workers: "3K", inv: "$300M", col: "#14b8a6" },
  { dept: "Dental Care", facilities: "200", workers: "5K", inv: "$200M", col: "#84cc16" }].
  map((d, idx) =>
  <CB key={d.dept} g="bg-gradient-to-br from-[#0d0a1a] via-[#150d28] to-[#0d0a1a]">
        <SH tag={`Section ${2 + idx} — ${d.dept}`} title={d.dept} desc={`${d.facilities} facilities. ${d.workers} health workers. Investment: ${d.inv}.`} />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <MC icon={Building2} value={d.facilities} label="Facilities" sub={d.dept} color={d.col} i={0} />
          <MC icon={Users} value={d.workers} label="Staff" sub="Health workers" color="#22c55e" i={1} />
          <MC icon={DollarSign} value={d.inv} label="Investment" sub="Total" color="#3b82f6" i={2} />
          <MC icon={Target} value="100%" label="Coverage" sub="Target" color="#f59e0b" i={3} />
        </div>
      </CB>
  )}

    {[
  { prov: "Kabul", hospitals: "50", clinics: "500", coverage: 90, col: "#3b82f6" },
  { prov: "Herat", hospitals: "20", clinics: "300", coverage: 80, col: "#22c55e" },
  { prov: "Balkh", hospitals: "15", clinics: "250", coverage: 75, col: "#f59e0b" },
  { prov: "Nangarhar", hospitals: "12", clinics: "200", coverage: 70, col: "#ef4444" },
  { prov: "Kandahar", hospitals: "10", clinics: "180", coverage: 65, col: "#8b5cf6" },
  { prov: "Kunduz", hospitals: "8", clinics: "150", coverage: 60, col: "#06b6d4" },
  { prov: "Bamyan", hospitals: "5", clinics: "100", coverage: 75, col: "#14b8a6" },
  { prov: "Helmand", hospitals: "8", clinics: "120", coverage: 55, col: "#ec4899" },
  { prov: "Badakhshan", hospitals: "5", clinics: "80", coverage: 50, col: "#84cc16" },
  { prov: "Paktya", hospitals: "5", clinics: "100", coverage: 55, col: "#f97316" }].
  map((p, idx) =>
  <CB key={p.prov} g="bg-gradient-to-br from-[#0a1a0a] via-[#0d2810] to-[#0a1a0a]">
        <SH tag={`Section ${11 + idx} — ${p.prov}`} title={`${p.prov} Healthcare`} desc={`${p.hospitals} hospitals. ${p.clinics} clinics.`} />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <MC icon={Building2} value={p.hospitals} label="Hospitals" sub={p.prov} color={p.col} i={0} />
          <MC icon={Stethoscope} value={p.clinics} label="Clinics" sub="Primary care" color="#22c55e" i={1} />
          <RC value={p.coverage} color={p.col} label="Coverage" />
          <RC value={p.coverage + 5} color="#3b82f6" label="Vaccination" />
        </div>
      </CB>
  )}

    {[
  { yr: "2026", focus: "Primary healthcare rollout to all districts", target: "1,000 new clinics", col: "#ef4444" },
  { yr: "2027", focus: "50 district hospitals upgraded", target: "20K health workers trained", col: "#22c55e" },
  { yr: "2028", focus: "Telemedicine platform nationwide", target: "5M patients connected", col: "#06b6d4" },
  { yr: "2029", focus: "Pharmaceutical manufacturing begins", target: "30% domestic medicines", col: "#8b5cf6" },
  { yr: "2030", focus: "Mental health centres in every province", target: "100 centres operational", col: "#3b82f6" },
  { yr: "2031", focus: "Medical school expansion", target: "10,000 doctors graduated", col: "#f59e0b" },
  { yr: "2032", focus: "Universal vaccination achieved", target: "100% child immunisation", col: "#84cc16" },
  { yr: "2033", focus: "Cancer treatment centres", target: "5 specialist hospitals", col: "#ef4444" },
  { yr: "2034", focus: "Health insurance for all", target: "100% coverage", col: "#14b8a6" },
  { yr: "2035", focus: "Vision — world-class healthcare", target: "Life expectancy 70+", col: "#ec4899" }].
  map((y, idx) =>
  <CB key={y.yr} g="bg-gradient-to-br from-[#1a0505] via-[#2d0808] to-[#1a0505]">
        <SH tag={`Section ${21 + idx} — Year ${y.yr}`} title={`Healthcare ${y.yr}`} desc={y.focus} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <motion.div {...stagger(1)} className="bg-card/60 border border-border rounded-xl p-6"><div className="text-sm text-muted-foreground mb-1">Milestone</div><div className="text-2xl font-bold" style={{ color: y.col }}>{y.target}</div></motion.div>
        </div>
      </CB>
  )}

    {[
  { spec: "Cardiology Centre", beds: "500", staff: "2K", inv: "$300M", col: "#ef4444" },
  { spec: "Cancer Hospital", beds: "300", staff: "1.5K", inv: "$500M", col: "#8b5cf6" },
  { spec: "Children's Hospital", beds: "400", staff: "2K", inv: "$200M", col: "#f59e0b" },
  { spec: "Neurology Centre", beds: "200", staff: "800", inv: "$250M", col: "#3b82f6" },
  { spec: "Orthopedic Centre", beds: "300", staff: "1K", inv: "$150M", col: "#22c55e" },
  { spec: "Eye Hospital", beds: "150", staff: "500", inv: "$100M", col: "#06b6d4" },
  { spec: "Burn Centre", beds: "100", staff: "400", inv: "$80M", col: "#14b8a6" },
  { spec: "Rehabilitation Centre", beds: "200", staff: "600", inv: "$120M", col: "#ec4899" }].
  map((s, idx) =>
  <CB key={s.spec} g="bg-gradient-to-br from-[#0d0a1a] via-[#150d28] to-[#0d0a1a]">
        <SH tag={`Section ${31 + idx} — ${s.spec}`} title={s.spec} desc={`${s.beds} beds. ${s.staff} staff. Investment: ${s.inv}.`} />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <MC icon={Building2} value={s.beds} label="Beds" sub={s.spec} color={s.col} i={0} />
          <MC icon={Users} value={s.staff} label="Staff" sub="Specialists" color="#22c55e" i={1} />
          <MC icon={DollarSign} value={s.inv} label="Investment" sub="Total" color="#3b82f6" i={2} />
          <MC icon={Award} value="Intl" label="Accreditation" sub="JCI standard" color="#f59e0b" i={3} />
        </div>
      </CB>
  )}

    <CB g="bg-gradient-to-br from-[#051a0d] via-[#082815] to-[#051a0d]">
      <SH tag="Sections XXXIX-XLIII — Disease Prevention" title="Disease Eradication" desc="Eliminating preventable diseases through vaccination, sanitation, and public health." />
      <div className="space-y-3">
        <PB label="Polio Eradication" value={95} max={100} color="#ef4444" delay={0} />
        <PB label="Measles Vaccination" value={90} max={100} color="#22c55e" delay={0.1} />
        <PB label="Malaria Control" value={85} max={100} color="#3b82f6" delay={0.2} />
        <PB label="TB Treatment" value={75} max={100} color="#f59e0b" delay={0.3} />
        <PB label="HIV Prevention" value={80} max={100} color="#8b5cf6" delay={0.4} />
        <PB label="Clean Water Access" value={70} max={100} color="#06b6d4" delay={0.5} />
        <PB label="Nutrition Programmes" value={65} max={100} color="#84cc16" delay={0.6} />
        <PB label="Mental Health Services" value={40} max={100} color="#ec4899" delay={0.7} />
      </div>
    </CB>

    <CB g="bg-gradient-to-br from-[#1a0a05] via-[#280d08] to-[#1a0a05]">
      <SH tag="Sections XLIV-XLVIII — Medical Education" title="Health Workforce Training" desc="200,000 trained health professionals by 2035." />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <MC icon={GraduationCap} value="20" label="Medical Schools" sub="Universities" color="#3b82f6" i={0} />
        <MC icon={Users} value="50K" label="Doctors" sub="Graduated" color="#22c55e" i={1} />
        <MC icon={Heart} value="100K" label="Nurses" sub="Trained" color="#ec4899" i={2} />
        <MC icon={Lightbulb} value="30K" label="Specialists" sub="Advanced training" color="#f59e0b" i={3} />
      </div>
      <div className="space-y-3">
        <PB label="Doctor Ratio" value={70} max={100} color="#3b82f6" delay={0} />
        <PB label="Nurse Ratio" value={60} max={100} color="#ec4899" delay={0.1} />
        <PB label="Specialist Ratio" value={40} max={100} color="#f59e0b" delay={0.2} />
        <PB label="Midwife Ratio" value={55} max={100} color="#22c55e" delay={0.3} />
        <PB label="Community Health" value={75} max={100} color="#8b5cf6" delay={0.4} />
      </div>
    </CB>

    <CB g="bg-gradient-to-br from-[#0a0a1a] via-[#0d0d28] to-[#0a0a1a]">
      <SH tag="Sections XLIX-LIII — Partnerships" title="Global Health Alliances" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
      { n: "WHO", r: "Health Systems", v: "$500M", c: "#3b82f6" }, { n: "UNICEF", r: "Child Health", v: "$300M", c: "#22c55e" },
      { n: "GAVI", r: "Vaccines", v: "$200M", c: "#ef4444" }, { n: "World Bank", r: "Health Finance", v: "$1B", c: "#f59e0b" },
      { n: "Gates Foundation", r: "Disease Control", v: "$300M", c: "#8b5cf6" }, { n: "Red Cross", r: "Emergency", v: "$100M", c: "#06b6d4" },
      { n: "MSF", r: "Frontline Care", v: "$50M", c: "#14b8a6" }, { n: "USAID Health", r: "Maternal", v: "$400M", c: "#ec4899" }].
      map((p, i) =>
      <motion.div key={p.n} {...stagger(i)} className="bg-card/60 border border-border rounded-xl p-4">
            <div className="text-lg font-bold" style={{ color: p.c }}>{p.n}</div><div className="text-xs text-muted-foreground">{p.r}</div><div className="text-sm font-semibold mt-1">{p.v}</div>
          </motion.div>
      )}
      </div>
    </CB>

    <CB g="bg-gradient-to-br from-[#1a0505] via-[#2d0808] to-[#1a0505]">
      <motion.div {...fadeUp} className="text-center mb-16">
        <span className="text-primary text-xs font-semibold tracking-[0.4em] uppercase mb-4 block">Sections LIV-LXX — Grand Vision</span>
        <h2 className="text-5xl md:text-7xl font-bold mb-6">Healthcare<br />2040 Vision</h2>
      </motion.div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <MC icon={Heart} value="100%" label="Coverage" sub="Universal" color="#ef4444" i={0} />
        <MC icon={Building2} value="5,000" label="Facilities" sub="Built" color="#22c55e" i={1} />
        <MC icon={Users} value="200K" label="Health Workers" sub="Trained" color="#3b82f6" i={2} />
        <MC icon={Target} value="70+" label="Life Expectancy" sub="Years" color="#f59e0b" i={3} />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        <RC value={100} color="#ef4444" label="Coverage" />
        <RC value={100} color="#22c55e" label="Vaccination" />
        <RC value={95} color="#3b82f6" label="Maternal Care" />
        <RC value={90} color="#f59e0b" label="Child Health" />
        <RC value={85} color="#8b5cf6" label="Mental Health" />
      </div>
    </CB>
  </>;