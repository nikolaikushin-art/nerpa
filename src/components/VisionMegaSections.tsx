import { motion } from "framer-motion";
import {
  TrendingUp, Users, Building2, Rocket, Globe, Heart, Zap, Factory,
  GraduationCap, Wifi, Shield, Landmark, Ship, Plane, Train, Droplets,
  Sun, Wind, Leaf, Mountain, Gem, Target, Award, Crown, Sparkles,
  BrainCircuit, Lightbulb, Handshake, Scale, MapPin, Flag, Star,
  ChevronRight, ArrowUpRight, Cpu, Database, Network, Activity,
  Layers, CircleDot, PieChart, BarChart3, Timer, Eye, Compass,
  Hammer, Wrench, Briefcase, DollarSign, Lock,
  BookOpen, Stethoscope, Home, TreePine, Thermometer, Droplet,
  Truck, Package, Wheat, Fish, Music, Camera, Palette, Anchor,
  Radio, Smartphone, Monitor, Server, Cloud, GitBranch, FileText,
  AlertTriangle, Bell, Check, Hash, Minus, Plus, Settings, Search,
  Phone, Mail, Calendar, Clock, Map, Navigation, Umbrella, Coffee,
  Scissors, Pen, Printer, Speaker, Mic, Headphones, Volume2,
  Battery, Power, Signal, Download, Upload, Share2 } from
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


const MCard = ({ icon: Icon, value, label, sub, color, i }: {icon: any;value: string;label: string;sub?: string;color: string;i: number;}) =>
<motion.div {...stagger(i)} className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-5 hover:border-primary/40 transition-all group">
    <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-3" style={{ background: `${color}15` }}>
      <Icon className="w-5 h-5" style={{ color }} />
    </div>
    
    <div className="text-sm font-semibold">{label}</div>
    {sub && <div className="text-xs text-muted-foreground mt-1">{sub}</div>}
  </motion.div>;


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


const SectionHeader = ({ tag, title, desc }: {tag: string;title: string;desc?: string;}) =>
<motion.div {...fadeUp} className="mb-12">
    <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-3 block">{tag}</span>
    <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
    {desc && <p className="text-muted-foreground max-w-3xl">{desc}</p>}
  </motion.div>;


const RingChart = ({ value, color, size = 100, label }: {value: number;color: string;size?: number;label: string;}) => {
  const r = (size - 10) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - value / 100 * circ;
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative">
        <svg width={size} height={size} className="-rotate-90">
          <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="hsl(var(--muted))" strokeWidth="5" />
          <motion.circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth="5" strokeLinecap="round"
          strokeDasharray={circ} initial={{ strokeDashoffset: circ }}
          whileInView={{ strokeDashoffset: offset }} viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }} />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold" style={{ color }}>{value}%</span>
        </div>
      </div>
      <span className="text-xs text-muted-foreground text-center">{label}</span>
    </div>);

};

export const VisionMegaSections = () => {
  return (
    <>
      {/* ═══ M1. NATIONAL RECONSTRUCTION INDEX ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
        <SectionHeader tag="Section 36 — Reconstruction" title="National Reconstruction Index" desc="Tracking Afghanistan's infrastructure rebuilding across all 34 provinces with real-time progress indicators." />
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
          {[
          { icon: Building2, value: "12,400", label: "Schools Built", color: "#3b82f6" },
          { icon: Stethoscope, value: "3,800", label: "Health Clinics", color: "#22c55e" },
          { icon: Home, value: "450K", label: "Housing Units", color: "#f59e0b" },
          { icon: Train, value: "2,800km", label: "Railways", color: "#ef4444" },
          { icon: Plane, value: "14", label: "Airports", color: "#8b5cf6" },
          { icon: Zap, value: "15GW", label: "Power Grid", color: "#ec4899" },
          { icon: Droplets, value: "8,500", label: "Water Systems", color: "#06b6d4" },
          { icon: Wifi, value: "98%", label: "Connectivity", color: "#f97316" }].
          map((m, i) => <MCard key={i} {...m} i={i} />)}
        </div>
      </CBlock>

      {/* ═══ M2. PROVINCIAL DEVELOPMENT SCORECARD ═══ */}
      <section className="py-20 px-6 lg:px-12 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeader tag="Section 37 — Provincial Scores" title="34-Province Development Index" desc="Each province ranked by composite development metrics across education, health, infrastructure, and economy." />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {["Kabul", "Herat", "Balkh", "Kandahar", "Nangarhar", "Badakhshan", "Helmand", "Kunduz", "Takhar", "Baghlan", "Paktia", "Ghazni", "Bamyan", "Parwan", "Samangan", "Faryab", "Jawzjan", "Badghis", "Ghor", "Daykundi", "Uruzgan", "Zabul", "Paktika", "Logar", "Wardak", "Kapisa", "Panjshir", "Laghman", "Kunar", "Nuristan", "Nimroz", "Farah", "Khost", "Sar-e Pol"].map((p, i) =>
            <motion.div key={i} {...stagger(i)} className="bg-card border border-border rounded-xl p-3 hover:border-primary/40 transition-all text-center">
                <div className="text-xs text-muted-foreground mb-1">{p}</div>
                <div className="text-lg font-bold text-primary">{Math.floor(45 + Math.random() * 50)}%</div>
                <div className="h-1.5 bg-muted rounded-full mt-2 overflow-hidden">
                  <motion.div className="h-full bg-primary rounded-full" initial={{ width: 0 }} whileInView={{ width: `${45 + Math.random() * 50}%` }} viewport={{ once: true }} transition={{ duration: 1.2, delay: i * 0.03 }} />
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ═══ M3. WATER MANAGEMENT MASTER PLAN ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#0c1929] via-[#0e2a3e] to-[#0c1929]">
        <SectionHeader tag="Section 38 — Water Security" title="Integrated Water Resource Management" desc="Strategic plan to harness Afghanistan's glacier-fed rivers and groundwater systems for agriculture, industry, and domestic use." />
        <div className="grid md:grid-cols-3 gap-6">
          {[
          { title: "Dam Construction", stats: [{ l: "Major Dams", v: "24" }, { l: "Reservoirs", v: "85" }, { l: "Capacity", v: "42B m³" }], icon: Droplets, color: "#06b6d4" },
          { title: "Irrigation Networks", stats: [{ l: "Canal Systems", v: "3,200km" }, { l: "Drip Systems", v: "450K ha" }, { l: "Coverage", v: "78%" }], icon: Droplet, color: "#22c55e" },
          { title: "Clean Water Access", stats: [{ l: "Urban Supply", v: "98%" }, { l: "Rural Supply", v: "85%" }, { l: "Treatment Plants", v: "340" }], icon: Shield, color: "#3b82f6" }].
          map((s, i) =>
          <motion.div key={i} {...stagger(i)} className="bg-card/60 backdrop-blur border border-border rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${s.color}15` }}>
                  <s.icon className="w-6 h-6" style={{ color: s.color }} />
                </div>
                <h3 className="text-xl font-bold text-white">{s.title}</h3>
              </div>
              {s.stats.map((st, j) =>
            <div key={j} className="flex justify-between py-2 border-b border-border/50 last:border-0">
                  <span className="text-sm text-muted-foreground">{st.l}</span>
                  <span className="text-sm font-bold" style={{ color: s.color }}>{st.v}</span>
                </div>
            )}
            </motion.div>
          )}
        </div>
      </CBlock>

      {/* ═══ M4. RENEWABLE ENERGY MATRIX ═══ */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <SectionHeader tag="Section 39 — Renewables" title="Clean Energy Transformation" desc="From 300MW to 15GW — Afghanistan's renewable energy revolution spanning solar, wind, hydro, and geothermal." />
          <div className="grid md:grid-cols-4 gap-6">
            {[
            { type: "Solar Power", capacity: "6.5GW", projects: 420, investment: "$8.2B", icon: Sun, color: "#f59e0b", pct: 85 },
            { type: "Wind Farms", capacity: "3.8GW", projects: 180, investment: "$5.1B", icon: Wind, color: "#3b82f6", pct: 72 },
            { type: "Hydroelectric", capacity: "3.2GW", projects: 95, investment: "$6.8B", icon: Droplets, color: "#06b6d4", pct: 68 },
            { type: "Geothermal", capacity: "1.5GW", projects: 24, investment: "$2.4B", icon: Thermometer, color: "#ef4444", pct: 45 }].
            map((e, i) =>
            <motion.div key={i} {...stagger(i)} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-all group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${e.color}15` }}>
                    <e.icon className="w-6 h-6" style={{ color: e.color }} />
                  </div>
                  <h3 className="font-bold text-lg">{e.type}</h3>
                </div>
                <div className="text-3xl font-bold mb-1" style={{ color: e.color }}>{e.capacity}</div>
                <div className="text-xs text-muted-foreground mb-4">Target Capacity</div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs"><span>Projects</span><span className="font-bold">{e.projects}</span></div>
                  <div className="flex justify-between text-xs"><span>Investment</span><span className="font-bold" style={{ color: e.color }}>{e.investment}</span></div>
                </div>
                <div className="mt-4">
                  <PBar label="Progress" value={e.pct} max={100} color={e.color} delay={i * 0.1} />
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ═══ M5. EDUCATION REVOLUTION ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#1a0f2e] via-[#2d1b4e] to-[#1a0f2e]">
        <SectionHeader tag="Section 40 — Education" title="Knowledge Economy Blueprint" desc="From 38% literacy to 95% — building world-class education infrastructure across every province." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
          { icon: GraduationCap, value: "12,400", label: "Schools", color: "#8b5cf6" },
          { icon: BookOpen, value: "95%", label: "Literacy Target", color: "#22c55e" },
          { icon: Users, value: "450K", label: "Teachers Trained", color: "#3b82f6" },
          { icon: Cpu, value: "8,200", label: "STEM Labs", color: "#f59e0b" }].
          map((m, i) => <MCard key={i} {...m} i={i} />)}
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div {...fadeUp} className="bg-card/40 backdrop-blur border border-border rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">Education Progression</h3>
            {[
            { label: "Primary Enrollment", value: 98, color: "#22c55e" },
            { label: "Secondary Enrollment", value: 82, color: "#3b82f6" },
            { label: "Tertiary Enrollment", value: 45, color: "#8b5cf6" },
            { label: "Vocational Training", value: 65, color: "#f59e0b" },
            { label: "Digital Literacy", value: 78, color: "#ec4899" },
            { label: "STEM Participation", value: 55, color: "#06b6d4" }].
            map((p, i) => <PBar key={i} {...p} max={100} delay={i * 0.1} />)}
          </motion.div>
          <motion.div {...fadeUp} className="bg-card/40 backdrop-blur border border-border rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">University Expansion</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
              { label: "Public Universities", value: "48", icon: Building2 },
              { label: "Private Universities", value: "120", icon: Landmark },
              { label: "Research Centres", value: "85", icon: BrainCircuit },
              { label: "International Partners", value: "200+", icon: Globe },
              { label: "Scholarships/Year", value: "50K", icon: Award },
              { label: "PhD Programmes", value: "340", icon: Star }].
              map((u, i) =>
              <motion.div key={i} {...stagger(i)} className="text-center p-3 bg-muted/20 rounded-xl">
                  <u.icon className="w-5 h-5 mx-auto mb-1 text-primary" />
                  <div className="text-lg font-bold text-white">{u.value}</div>
                  <div className="text-[10px] text-muted-foreground">{u.label}</div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </CBlock>

      {/* ═══ M6. HEALTHCARE SYSTEM ═══ */}
      <section className="py-20 px-6 lg:px-12 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeader tag="Section 41 — Healthcare" title="Universal Health Coverage" desc="Building a comprehensive health system from primary care to specialized tertiary facilities." />
          <div className="grid md:grid-cols-5 gap-4 mb-8">
            {[
            { icon: Stethoscope, value: "3,800", label: "Clinics", color: "#ef4444" },
            { icon: Building2, value: "420", label: "Hospitals", color: "#3b82f6" },
            { icon: Users, value: "180K", label: "Health Workers", color: "#22c55e" },
            { icon: Shield, value: "100%", label: "Coverage Target", color: "#8b5cf6" },
            { icon: Heart, value: "72yrs", label: "Life Expectancy", color: "#ec4899" }].
            map((m, i) => <MCard key={i} {...m} i={i} />)}
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {["Maternal & Child Health", "Infectious Disease Control", "Mental Health Services"].map((title, i) =>
            <motion.div key={i} {...stagger(i)} className="bg-card border border-border rounded-2xl p-6">
                <h3 className="font-bold mb-4">{title}</h3>
                {[85, 72, 68, 90].map((v, j) =>
              <PBar key={j} label={["Access", "Quality", "Staffing", "Equipment"][j]} value={v} max={100} color={["#22c55e", "#3b82f6", "#f59e0b", "#ef4444"][j]} delay={j * 0.1} />
              )}
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ═══ M7. DIGITAL AFGHANISTAN ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#0a1628] via-[#162033] to-[#0a1628]">
        <SectionHeader tag="Section 42 — Digital" title="Digital Afghanistan 2040" desc="Transforming governance, commerce, and society through comprehensive digital infrastructure." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
          { icon: Wifi, value: "98%", label: "Internet Coverage", color: "#3b82f6" },
          { icon: Smartphone, value: "45M", label: "Mobile Users", color: "#22c55e" },
          { icon: Server, value: "12", label: "Data Centres", color: "#8b5cf6" },
          { icon: Shield, value: "ISO 27001", label: "Cyber Security", color: "#ef4444" }].
          map((m, i) => <MCard key={i} {...m} i={i} />)}
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
          { title: "E-Governance", items: ["Digital ID for 40M citizens", "Online tax filing system", "Digital land registry", "E-procurement platform", "Court case management", "Digital health records"], color: "#3b82f6" },
          { title: "Fintech Revolution", items: ["Mobile banking 95%", "Digital payments gateway", "Blockchain land titles", "Micro-lending platforms", "InsurTech for farmers", "Cross-border remittance"], color: "#22c55e" },
          { title: "Smart Infrastructure", items: ["5G rollout nationwide", "IoT sensor networks", "Smart traffic systems", "AI-powered services", "Cloud gov platform", "Digital twin cities"], color: "#8b5cf6" }].
          map((s, i) =>
          <motion.div key={i} {...stagger(i)} className="bg-card/40 backdrop-blur border border-border rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4" style={{ color: s.color }}>{s.title}</h3>
              {s.items.map((item, j) =>
            <div key={j} className="flex items-center gap-2 py-2 border-b border-border/30 last:border-0">
                  <Check className="w-3.5 h-3.5" style={{ color: s.color }} />
                  <span className="text-sm text-white/80">{item}</span>
                </div>
            )}
            </motion.div>
          )}
        </div>
      </CBlock>

      {/* ═══ M8. TRANSPORTATION NETWORK ═══ */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <SectionHeader tag="Section 43 — Transport" title="National Transportation Grid" desc="Connecting 34 provinces through road, rail, air, and digital corridors." />
          <div className="grid md:grid-cols-4 gap-6">
            {[
            { mode: "Highways", stat: "28,000km", icon: Truck, projects: "Trans-Afghan Highway, Ring Road", color: "#f59e0b" },
            { mode: "Railways", stat: "5,200km", icon: Train, projects: "North-South Rail, Silk Road Express", color: "#3b82f6" },
            { mode: "Aviation", stat: "14 Airports", icon: Plane, projects: "Kabul Int'l Hub, Herat Cargo Terminal", color: "#8b5cf6" },
            { mode: "Logistics", stat: "32 Hubs", icon: Package, projects: "Free Trade Zones, Dry Ports", color: "#22c55e" }].
            map((t, i) =>
            <motion.div key={i} {...stagger(i)} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-all">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4" style={{ background: `${t.color}15` }}>
                  <t.icon className="w-7 h-7" style={{ color: t.color }} />
                </div>
                <h3 className="text-xl font-bold mb-1">{t.mode}</h3>
                <div className="text-2xl font-bold mb-2" style={{ color: t.color }}>{t.stat}</div>
                <p className="text-xs text-muted-foreground">{t.projects}</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ═══ M9. AGRICULTURE & FOOD SECURITY ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#0f1f0a] via-[#1a3310] to-[#0f1f0a]">
        <SectionHeader tag="Section 44 — Agriculture" title="Agricultural Renaissance" desc="Modernising Afghanistan's agricultural sector to feed 50 million people and become a net food exporter." />
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mb-8">
          {[
          { icon: Wheat, value: "8.5M ha", label: "Cultivated Land", color: "#22c55e" },
          { icon: Droplets, value: "78%", label: "Irrigation", color: "#06b6d4" },
          { icon: Factory, value: "2,400", label: "Processing Plants", color: "#f59e0b" },
          { icon: Truck, value: "$4.2B", label: "Agri Exports", color: "#3b82f6" },
          { icon: Users, value: "3.5M", label: "Farm Jobs", color: "#8b5cf6" },
          { icon: Leaf, value: "45%", label: "Organic Farms", color: "#22c55e" }].
          map((m, i) => <MCard key={i} {...m} i={i} />)}
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div {...fadeUp} className="bg-card/40 backdrop-blur border border-border rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-4">Crop Diversification</h3>
            {[
            { label: "Saffron", value: 92, color: "#f59e0b" },
            { label: "Fruits & Nuts", value: 85, color: "#22c55e" },
            { label: "Cereals", value: 78, color: "#3b82f6" },
            { label: "Cotton", value: 65, color: "#8b5cf6" },
            { label: "Medicinal Plants", value: 58, color: "#ec4899" }].
            map((p, i) => <PBar key={i} {...p} max={100} delay={i * 0.1} />)}
          </motion.div>
          <motion.div {...fadeUp} className="bg-card/40 backdrop-blur border border-border rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-4">Livestock & Fisheries</h3>
            {[
            { label: "Cattle Herds", value: 88, color: "#f59e0b" },
            { label: "Poultry Farms", value: 75, color: "#22c55e" },
            { label: "Aquaculture", value: 52, color: "#06b6d4" },
            { label: "Dairy Processing", value: 62, color: "#3b82f6" },
            { label: "Wool & Cashmere", value: 70, color: "#8b5cf6" }].
            map((p, i) => <PBar key={i} {...p} max={100} delay={i * 0.1} />)}
          </motion.div>
        </div>
      </CBlock>

      {/* ═══ M10. MINERAL WEALTH DASHBOARD ═══ */}
      <section className="py-20 px-6 lg:px-12 bg-card/30">
        


















        
      </section>

      {/* ═══ M11. TRADE & COMMERCE ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#1a1005] via-[#2d1b0a] to-[#1a1005]">
        <SectionHeader tag="Section 46 — Trade" title="Global Trade Integration" desc="Transforming Afghanistan into Central Asia's premier trade and logistics hub." />
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
          { partner: "China", trade: "$12.4B", growth: "+340%", items: ["Minerals", "Tech", "Infrastructure"], color: "#ef4444" },
          { partner: "India", trade: "$8.2B", growth: "+280%", items: ["Agriculture", "Pharma", "IT Services"], color: "#f59e0b" },
          { partner: "EU", trade: "$6.8B", growth: "+220%", items: ["Textiles", "Saffron", "Marble"], color: "#3b82f6" }].
          map((p, i) =>
          <motion.div key={i} {...stagger(i)} className="bg-card/40 backdrop-blur border border-border rounded-2xl p-6">
              
              <div className="text-3xl font-bold mb-1" style={{ color: p.color }}>{p.trade}</div>
              <div className="text-sm font-bold text-primary mb-4">{p.growth} by 2040</div>
              {p.items.map((item, j) =>
            <div key={j} className="flex items-center gap-2 py-1">
                  <ArrowUpRight className="w-3 h-3" style={{ color: p.color }} />
                  <span className="text-sm text-white/70">{item}</span>
                </div>
            )}
            </motion.div>
          )}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
          { icon: Ship, value: "$20B", label: "Annual Exports", color: "#22c55e" },
          { icon: Globe, value: "85+", label: "Trade Partners", color: "#3b82f6" },
          { icon: Package, value: "32", label: "Free Trade Zones", color: "#f59e0b" },
          { icon: DollarSign, value: "$4.2B", label: "FDI Annual", color: "#8b5cf6" }].
          map((m, i) => <MCard key={i} {...m} i={i} />)}
        </div>
      </CBlock>

      {/* ═══ M12. HOUSING & URBANISATION ═══ */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <SectionHeader tag="Section 47 — Housing" title="National Housing Programme" desc="Delivering 450,000 affordable housing units and 12 new planned cities by 2040." />
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            {[
            { icon: Home, value: "450K", label: "Housing Units", color: "#3b82f6" },
            { icon: Building2, value: "12", label: "New Cities", color: "#22c55e" },
            { icon: Users, value: "2.5M", label: "People Housed", color: "#f59e0b" },
            { icon: TreePine, value: "40%", label: "Green Space", color: "#22c55e" }].
            map((m, i) => <MCard key={i} {...m} i={i} />)}
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div {...fadeUp} className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-bold mb-4">Smart City Features</h3>
              {["Solar-powered districts", "Smart waste management", "Autonomous transit systems", "IoT-connected utilities", "Green building standards", "Community wellness centres"].map((f, i) =>
              <div key={i} className="flex items-center gap-2 py-2 border-b border-border/30 last:border-0">
                  <Check className="w-4 h-4 text-primary" />
                  <span className="text-sm">{f}</span>
                </div>
              )}
            </motion.div>
            <motion.div {...fadeUp} className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-bold mb-4">City Development Progress</h3>
              {[
              { label: "New Kabul City", value: 72, color: "#3b82f6" },
              { label: "Herat Smart City", value: 58, color: "#22c55e" },
              { label: "Mazar Industrial City", value: 45, color: "#f59e0b" },
              { label: "Kandahar Tech Park", value: 38, color: "#8b5cf6" },
              { label: "Jalalabad Green City", value: 32, color: "#06b6d4" }].
              map((p, i) => <PBar key={i} {...p} max={100} delay={i * 0.1} />)}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ M13. FINANCIAL SECTOR ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#0a1628] via-[#152238] to-[#0a1628]">
        <SectionHeader tag="Section 48 — Finance" title="Financial System Modernisation" desc="Building a robust, inclusive financial system from banking infrastructure to capital markets." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
          { icon: Landmark, value: "95%", label: "Financial Inclusion", color: "#22c55e" },
          { icon: DollarSign, value: "$28B", label: "Banking Assets", color: "#3b82f6" },
          { icon: Activity, value: "$4.5B", label: "Stock Market Cap", color: "#f59e0b" },
          { icon: Shield, value: "A-", label: "Credit Rating", color: "#8b5cf6" }].
          map((m, i) => <MCard key={i} {...m} i={i} />)}
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
          { title: "Banking Reform", bars: [{ l: "Branch Expansion", v: 88 }, { l: "Digital Banking", v: 92 }, { l: "SME Lending", v: 75 }, { l: "Agricultural Credit", v: 68 }], color: "#22c55e" },
          { title: "Capital Markets", bars: [{ l: "Stock Exchange", v: 65 }, { l: "Bond Market", v: 58 }, { l: "Insurance Sector", v: 72 }, { l: "Pension Funds", v: 55 }], color: "#3b82f6" },
          { title: "Fintech Ecosystem", bars: [{ l: "Mobile Payments", v: 95 }, { l: "Crypto Regulation", v: 42 }, { l: "P2P Lending", v: 68 }, { l: "Robo-Advisory", v: 35 }], color: "#8b5cf6" }].
          map((s, i) =>
          <motion.div key={i} {...stagger(i)} className="bg-card/40 backdrop-blur border border-border rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">{s.title}</h3>
              {s.bars.map((b, j) => <PBar key={j} label={b.l} value={b.v} max={100} color={s.color} delay={j * 0.1} />)}
            </motion.div>
          )}
        </div>
      </CBlock>

      {/* ═══ M14. TOURISM & CULTURE ═══ */}
      <section className="py-20 px-6 lg:px-12 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeader tag="Section 49 — Tourism" title="Tourism & Cultural Heritage" desc="Showcasing Afghanistan's ancient Silk Road heritage, stunning landscapes, and vibrant culture to the world." />
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
            { dest: "Band-e-Amir National Park", type: "Natural Wonder", visitors: "2.5M/yr", revenue: "$180M", color: "#06b6d4" },
            { dest: "Bamiyan Valley", type: "UNESCO Heritage", visitors: "1.8M/yr", revenue: "$220M", color: "#f59e0b" },
            { dest: "Wakhan Corridor", type: "Adventure Tourism", visitors: "800K/yr", revenue: "$95M", color: "#22c55e" }].
            map((d, i) =>
            <motion.div key={i} {...stagger(i)} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-all">
                <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-full" style={{ background: `${d.color}15`, color: d.color }}>{d.type}</span>
                <h3 className="text-xl font-bold mt-3 mb-2">{d.dest}</h3>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div><div className="text-lg font-bold" style={{ color: d.color }}>{d.visitors}</div><div className="text-xs text-muted-foreground">Annual Visitors</div></div>
                  <div><div className="text-lg font-bold" style={{ color: d.color }}>{d.revenue}</div><div className="text-xs text-muted-foreground">Annual Revenue</div></div>
                </div>
              </motion.div>
            )}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
            { icon: Camera, value: "5.2M", label: "Annual Tourists", color: "#ec4899" },
            { icon: DollarSign, value: "$3.8B", label: "Tourism Revenue", color: "#22c55e" },
            { icon: Building2, value: "850", label: "Hotels & Resorts", color: "#3b82f6" },
            { icon: Users, value: "320K", label: "Tourism Jobs", color: "#f59e0b" }].
            map((m, i) => <MCard key={i} {...m} i={i} />)}
          </div>
        </div>
      </section>

      {/* ═══ M15. DEFENCE & SECURITY ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#1a0a0a] via-[#2d1515] to-[#1a0a0a]">
        <SectionHeader tag="Section 50 — Security" title="National Security Architecture" desc="Building professional, accountable security forces to protect citizens and enable economic growth." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
          { icon: Shield, value: "350K", label: "Security Forces", color: "#ef4444" },
          { icon: Target, value: "100%", label: "Border Control", color: "#f59e0b" },
          { icon: Lock, value: "Tier 1", label: "Cyber Defence", color: "#3b82f6" },
          { icon: Eye, value: "24/7", label: "Surveillance", color: "#8b5cf6" }].
          map((m, i) => <MCard key={i} {...m} i={i} />)}
        </div>
      </CBlock>

      {/* ═══ M16. ENVIRONMENTAL CONSERVATION ═══ */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <SectionHeader tag="Section 51 — Environment" title="Green Afghanistan Initiative" desc="Restoring ecosystems, combating desertification, and building climate resilience across all provinces." />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {[
              { label: "Forest Restoration", value: 65, color: "#22c55e" },
              { label: "Desertification Control", value: 48, color: "#f59e0b" },
              { label: "Wildlife Protection", value: 72, color: "#3b82f6" },
              { label: "Carbon Reduction", value: 55, color: "#8b5cf6" },
              { label: "Clean Air Standards", value: 62, color: "#06b6d4" },
              { label: "Waste Recycling", value: 45, color: "#ec4899" },
              { label: "Water Quality", value: 78, color: "#22c55e" }].
              map((p, i) => <PBar key={i} {...p} max={100} delay={i * 0.08} />)}
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
              { icon: TreePine, value: "2B", label: "Trees Planted", color: "#22c55e" },
              { icon: Mountain, value: "24", label: "National Parks", color: "#3b82f6" },
              { icon: Leaf, value: "30%", label: "Protected Land", color: "#22c55e" },
              { icon: Sun, value: "65%", label: "Renewable Target", color: "#f59e0b" }].
              map((m, i) => <MCard key={i} {...m} i={i} />)}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ M17. YOUTH EMPOWERMENT ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#0f0a2e] via-[#1a1548] to-[#0f0a2e]">
        <SectionHeader tag="Section 52 — Youth" title="Youth Innovation & Empowerment" desc="65% of Afghanistan is under 25 — harnessing this demographic dividend for national transformation." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
          { icon: Users, value: "22M", label: "Youth Population", color: "#8b5cf6" },
          { icon: Rocket, value: "5,000", label: "Youth Startups", color: "#ec4899" },
          { icon: GraduationCap, value: "85%", label: "Youth Literacy", color: "#22c55e" },
          { icon: Briefcase, value: "750K", label: "Youth Jobs/yr", color: "#3b82f6" }].
          map((m, i) => <MCard key={i} {...m} i={i} />)}
        </div>
        <div className="grid md:grid-cols-4 gap-4">
          {["Coding Bootcamps", "Entrepreneurship Labs", "Sports Academies", "Arts & Culture Centres", "Leadership Programmes", "Exchange Scholarships", "Innovation Hubs", "Mentorship Networks"].map((item, i) =>
          <motion.div key={i} {...stagger(i)} className="bg-card/40 backdrop-blur border border-border rounded-xl p-4 text-center hover:border-primary/40 transition-all">
              <Sparkles className="w-5 h-5 mx-auto mb-2 text-primary" />
              <span className="text-sm font-semibold text-white">{item}</span>
            </motion.div>
          )}
        </div>
      </CBlock>

      {/* ═══ M18. WOMEN'S ECONOMIC PARTICIPATION ═══ */}
      <section className="py-20 px-6 lg:px-12 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeader tag="Section 53 — Inclusion" title="Women's Economic Empowerment" desc="Ensuring full economic participation and opportunity for all Afghan women." />
          <div className="grid md:grid-cols-5 gap-4">
            {[
            { icon: Briefcase, value: "40%", label: "Workforce Target", color: "#ec4899" },
            { icon: GraduationCap, value: "50%", label: "University Enrollment", color: "#8b5cf6" },
            { icon: Landmark, value: "12,000", label: "Women-Owned SMEs", color: "#22c55e" },
            { icon: Users, value: "250K", label: "Trained Annually", color: "#3b82f6" },
            { icon: Heart, value: "100%", label: "Maternity Coverage", color: "#ef4444" }].
            map((m, i) => <MCard key={i} {...m} i={i} />)}
          </div>
        </div>
      </section>

      {/* ═══ M19. INDUSTRIAL DEVELOPMENT ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#1a1505] via-[#2d250a] to-[#1a1505]">
        <SectionHeader tag="Section 54 — Industry" title="Industrial Revolution 4.0" desc="Building manufacturing capacity across textiles, minerals processing, food production, and technology." />
        <div className="grid md:grid-cols-3 gap-6">
          {[
          { zone: "Kabul Industrial Park", sectors: "Electronics, Pharma", jobs: "45K", investment: "$2.8B", pct: 78 },
          { zone: "Herat Manufacturing Hub", sectors: "Textiles, Food Processing", jobs: "38K", investment: "$2.1B", pct: 65 },
          { zone: "Mazar Heavy Industry", sectors: "Steel, Cement, Chemicals", jobs: "52K", investment: "$3.5B", pct: 55 }].
          map((z, i) =>
          <motion.div key={i} {...stagger(i)} className="bg-card/40 backdrop-blur border border-border rounded-2xl p-6">
              <Factory className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-xl font-bold text-white mb-1">{z.zone}</h3>
              <p className="text-sm text-muted-foreground mb-4">{z.sectors}</p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div><div className="text-lg font-bold text-primary">{z.jobs}</div><div className="text-xs text-muted-foreground">Jobs</div></div>
                <div><div className="text-lg font-bold text-primary">{z.investment}</div><div className="text-xs text-muted-foreground">Investment</div></div>
              </div>
              <PBar label="Completion" value={z.pct} max={100} color="#22c55e" />
            </motion.div>
          )}
        </div>
      </CBlock>

      {/* ═══ M20. GOVERNANCE REFORM ═══ */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <SectionHeader tag="Section 55 — Governance" title="Institutional Excellence" desc="Transparent, accountable, and efficient governance systems for a modern Afghan state." />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
            { reform: "Anti-Corruption", metric: "Top 50 CPI", icon: Shield, color: "#ef4444", pct: 62 },
            { reform: "Judicial Reform", metric: "Rule of Law Index", icon: Scale, color: "#3b82f6", pct: 55 },
            { reform: "E-Government", metric: "95% Digital Services", icon: Monitor, color: "#22c55e", pct: 78 },
            { reform: "Fiscal Management", metric: "AAA Rating Target", icon: BarChart3, color: "#f59e0b", pct: 48 }].
            map((r, i) =>
            <motion.div key={i} {...stagger(i)} className="bg-card border border-border rounded-2xl p-5">
                <r.icon className="w-7 h-7 mb-3" style={{ color: r.color }} />
                <h3 className="font-bold mb-1">{r.reform}</h3>
                <div className="text-sm text-muted-foreground mb-4">{r.metric}</div>
                <PBar label="Progress" value={r.pct} max={100} color={r.color} />
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ═══ M21–M30: REGIONAL DEVELOPMENT CLUSTERS ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#0a1628] via-[#0d2137] to-[#0a1628]">
        <SectionHeader tag="Section 56–65 — Regional Clusters" title="10 Regional Economic Zones" desc="Strategic development clusters transforming every region of Afghanistan into an economic powerhouse." />
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
          { region: "Greater Kabul", focus: "Tech & Finance Hub", gdp: "$18B", pop: "8M", color: "#3b82f6" },
          { region: "Herat Corridor", focus: "Trade & Manufacturing", gdp: "$8.5B", pop: "4.2M", color: "#22c55e" },
          { region: "Northern Belt", focus: "Energy & Mining", gdp: "$7.2B", pop: "5.8M", color: "#f59e0b" },
          { region: "Eastern Highlands", focus: "Agriculture & Tourism", gdp: "$4.8B", pop: "6.5M", color: "#8b5cf6" },
          { region: "Southern Plains", focus: "Agri-Industrial", gdp: "$5.5B", pop: "5.2M", color: "#ef4444" },
          { region: "Central Highlands", focus: "Mining & Heritage", gdp: "$3.2B", pop: "2.8M", color: "#06b6d4" },
          { region: "Western Gateway", focus: "Logistics & Trade", gdp: "$4.1B", pop: "3.5M", color: "#ec4899" },
          { region: "Northeast Frontier", focus: "Gems & Adventure", gdp: "$2.8B", pop: "3.2M", color: "#22c55e" },
          { region: "Southwest Desert", focus: "Solar & Minerals", gdp: "$3.5B", pop: "2.1M", color: "#f59e0b" },
          { region: "Wakhan Alpine", focus: "Eco-Tourism", gdp: "$1.2B", pop: "0.8M", color: "#3b82f6" }].
          map((r, i) =>
          <motion.div key={i} {...stagger(i)} className="bg-card/60 backdrop-blur border border-border rounded-xl p-4 hover:border-primary/40 transition-all">
              <div className="w-3 h-3 rounded-full mb-2" style={{ background: r.color }} />
              <h3 className="font-bold text-sm text-white">{r.region}</h3>
              <p className="text-[10px] text-muted-foreground mb-3">{r.focus}</p>
              <div className="flex justify-between text-xs">
                <span style={{ color: r.color }}>{r.gdp}</span>
                <span className="text-muted-foreground">{r.pop}</span>
              </div>
            </motion.div>
          )}
        </div>
      </CBlock>

      {/* ═══ M31. SCIENCE & RESEARCH ═══ */}
      <section className="py-20 px-6 lg:px-12 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeader tag="Section 66 — Science" title="Research & Innovation Ecosystem" desc="Building Afghanistan's scientific capacity with world-class research institutions." />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
            { icon: BrainCircuit, value: "85", label: "Research Centres", color: "#8b5cf6" },
            { icon: Lightbulb, value: "12K", label: "Patents Filed", color: "#f59e0b" },
            { icon: GraduationCap, value: "5,200", label: "PhD Researchers", color: "#3b82f6" },
            { icon: DollarSign, value: "3.5%", label: "GDP R&D Spend", color: "#22c55e" }].
            map((m, i) => <MCard key={i} {...m} i={i} />)}
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div {...fadeUp} className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-bold mb-4">Research Focus Areas</h3>
              {[
              { label: "AI & Machine Learning", value: 82, color: "#8b5cf6" },
              { label: "Renewable Energy", value: 78, color: "#22c55e" },
              { label: "Geological Sciences", value: 88, color: "#f59e0b" },
              { label: "Agricultural Biotech", value: 72, color: "#3b82f6" },
              { label: "Water Engineering", value: 65, color: "#06b6d4" },
              { label: "Medical Research", value: 58, color: "#ef4444" }].
              map((p, i) => <PBar key={i} {...p} max={100} delay={i * 0.1} />)}
            </motion.div>
            <motion.div {...fadeUp} className="grid grid-cols-2 gap-4">
              {[
              { label: "Afghan Academy of Sciences", stat: "Est. 2027" },
              { label: "National Research Fund", stat: "$2.5B" },
              { label: "Int'l Collaborations", stat: "180+" },
              { label: "Published Papers/yr", stat: "8,500" },
              { label: "Tech Transfer Deals", stat: "420" },
              { label: "Innovation Prizes", stat: "$50M/yr" }].
              map((s, i) =>
              <motion.div key={i} {...stagger(i)} className="bg-card border border-border rounded-xl p-4 text-center">
                  <div className="text-lg font-bold text-primary">{s.stat}</div>
                  <div className="text-[10px] text-muted-foreground mt-1">{s.label}</div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ M32. SPORTS & ATHLETICS ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#0a2818] via-[#0f3d24] to-[#0a2818]">
        <SectionHeader tag="Section 67 — Sports" title="National Sports Development" desc="Building Olympic-standard facilities and grassroots programmes across every province." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
          { icon: Target, value: "340", label: "Sports Facilities", color: "#22c55e" },
          { icon: Award, value: "2036", label: "Olympic Host Bid", color: "#f59e0b" },
          { icon: Users, value: "2.5M", label: "Active Athletes", color: "#3b82f6" },
          { icon: Crown, value: "45", label: "Int'l Medals Target", color: "#8b5cf6" }].
          map((m, i) => <MCard key={i} {...m} i={i} />)}
        </div>
      </CBlock>

      {/* ═══ M33. DIASPORA ENGAGEMENT ═══ */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <SectionHeader tag="Section 68 — Diaspora" title="Global Afghan Network" desc="Engaging 6 million diaspora Afghans to invest, return, and contribute to national development." />
          <div className="grid md:grid-cols-3 gap-6">
            {[
            { title: "Investment Return", metrics: [{ l: "Diaspora Investment", v: "$8.5B" }, { l: "Returnee Entrepreneurs", v: "45K" }, { l: "Tech Transfers", v: "2,200" }], color: "#22c55e" },
            { title: "Knowledge Transfer", metrics: [{ l: "Expert Advisors", v: "12K" }, { l: "Training Programmes", v: "850" }, { l: "University Partnerships", v: "340" }], color: "#3b82f6" },
            { title: "Cultural Bridge", metrics: [{ l: "Cultural Centres Abroad", v: "85" }, { l: "Business Networks", v: "120" }, { l: "Annual Remittances", v: "$6.2B" }], color: "#8b5cf6" }].
            map((s, i) =>
            <motion.div key={i} {...stagger(i)} className="bg-card border border-border rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4" style={{ color: s.color }}>{s.title}</h3>
                {s.metrics.map((m, j) =>
              <div key={j} className="flex justify-between py-2 border-b border-border/50 last:border-0">
                    <span className="text-sm text-muted-foreground">{m.l}</span>
                    <span className="text-sm font-bold" style={{ color: s.color }}>{m.v}</span>
                  </div>
              )}
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ═══ M34. MEDIA & COMMUNICATIONS ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#1a0f2e] via-[#2d1b4e] to-[#1a0f2e]">
        <SectionHeader tag="Section 69 — Media" title="Media & Information Landscape" desc="Free, responsible media ecosystem with digital-first broadcasting and journalism excellence." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
          { icon: Radio, value: "450", label: "Radio Stations", color: "#ec4899" },
          { icon: Monitor, value: "85", label: "TV Channels", color: "#3b82f6" },
          { icon: Smartphone, value: "12M", label: "News App Users", color: "#22c55e" },
          { icon: Mic, value: "28K", label: "Journalists", color: "#f59e0b" }].
          map((m, i) => <MCard key={i} {...m} i={i} />)}
        </div>
      </CBlock>

      {/* ═══ M35. JUSTICE & RULE OF LAW ═══ */}
      <section className="py-20 px-6 lg:px-12 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeader tag="Section 70 — Justice" title="Rule of Law Framework" desc="Independent judiciary, accessible courts, and efficient dispute resolution for all citizens." />
          <div className="grid md:grid-cols-4 gap-4">
            {[
            { reform: "Court Modernisation", metric: "100% Digital", icon: Scale, pct: 72 },
            { reform: "Legal Aid", metric: "Free Access", icon: Shield, pct: 65 },
            { reform: "Prison Reform", metric: "Rehabilitation", icon: Heart, pct: 58 },
            { reform: "Land Rights", metric: "Digital Registry", icon: FileText, pct: 82 }].
            map((r, i) =>
            <motion.div key={i} {...stagger(i)} className="bg-card border border-border rounded-2xl p-5">
                <r.icon className="w-7 h-7 mb-3 text-primary" />
                <h3 className="font-bold mb-1">{r.reform}</h3>
                <div className="text-sm text-muted-foreground mb-4">{r.metric}</div>
                <PBar label="Progress" value={r.pct} max={100} color="#3b82f6" />
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ═══ M36–M45. SECTOR-SPECIFIC DEEP DIVES ═══ */}
      {[
      { tag: "71 — Textiles", title: "Textile & Garment Industry", desc: "From raw cotton to fashion exports — a $4.5B textile industry.", metrics: [
        { icon: Factory, value: "2,800", label: "Factories", color: "#ec4899" },
        { icon: Users, value: "680K", label: "Workers", color: "#3b82f6" },
        { icon: Ship, value: "$4.5B", label: "Exports", color: "#22c55e" },
        { icon: Award, value: "A+", label: "Quality Grade", color: "#f59e0b" }]
      },
      { tag: "72 — Pharmaceuticals", title: "Pharmaceutical Industry", desc: "Building drug manufacturing capacity to serve 50M citizens.", metrics: [
        { icon: Stethoscope, value: "120", label: "Pharma Plants", color: "#ef4444" },
        { icon: Shield, value: "WHO GMP", label: "Certification", color: "#22c55e" },
        { icon: DollarSign, value: "$2.1B", label: "Market Size", color: "#3b82f6" },
        { icon: Globe, value: "35", label: "Export Markets", color: "#8b5cf6" }]
      },
      { tag: "73 — Construction", title: "Construction Materials", desc: "Cement, steel, glass — $8B domestic construction materials industry.", metrics: [
        { icon: Building2, value: "450", label: "Cement Plants", color: "#f59e0b" },
        { icon: Hammer, value: "85M tons", label: "Annual Output", color: "#3b82f6" },
        { icon: Users, value: "420K", label: "Workers", color: "#22c55e" },
        { icon: TrendingUp, value: "+18%", label: "Annual Growth", color: "#ef4444" }]
      },
      { tag: "74 — Food Processing", title: "Food & Beverage Industry", desc: "Value-added food processing creating export-quality products.", metrics: [
        { icon: Package, value: "3,500", label: "Processing Units", color: "#22c55e" },
        { icon: Ship, value: "$2.8B", label: "Exports", color: "#3b82f6" },
        { icon: Award, value: "ISO 22000", label: "Standards", color: "#f59e0b" },
        { icon: Users, value: "520K", label: "Employment", color: "#8b5cf6" }]
      },
      { tag: "75 — Handicrafts", title: "Traditional Handicrafts", desc: "Afghan carpets, jewellery, and crafts — preserving heritage for global markets.", metrics: [
        { icon: Palette, value: "180K", label: "Artisans", color: "#ec4899" },
        { icon: Globe, value: "$1.2B", label: "Export Revenue", color: "#22c55e" },
        { icon: Award, value: "GI Tagged", label: "Products", color: "#f59e0b" },
        { icon: Star, value: "45", label: "UNESCO Items", color: "#3b82f6" }]
      },
      { tag: "76 — Logistics", title: "Logistics & Supply Chain", desc: "Building Central Asia's most efficient logistics network.", metrics: [
        { icon: Truck, value: "32", label: "Logistics Hubs", color: "#f59e0b" },
        { icon: Package, value: "8.5M", label: "TEUs/Year", color: "#3b82f6" },
        { icon: Plane, value: "14", label: "Cargo Airports", color: "#8b5cf6" },
        { icon: Train, value: "12", label: "Rail Terminals", color: "#22c55e" }]
      },
      { tag: "77 — Telecom", title: "Telecommunications", desc: "5G rollout and fibre-optic connectivity reaching every village.", metrics: [
        { icon: Signal, value: "98%", label: "4G Coverage", color: "#3b82f6" },
        { icon: Wifi, value: "85%", label: "5G by 2035", color: "#22c55e" },
        { icon: Users, value: "45M", label: "Subscribers", color: "#f59e0b" },
        { icon: Server, value: "12", label: "Data Centres", color: "#8b5cf6" }]
      },
      { tag: "78 — Banking", title: "Islamic Banking & Finance", desc: "Sharia-compliant financial services reaching every citizen.", metrics: [
        { icon: Landmark, value: "85", label: "Islamic Banks", color: "#22c55e" },
        { icon: DollarSign, value: "$18B", label: "Total Assets", color: "#3b82f6" },
        { icon: Users, value: "28M", label: "Account Holders", color: "#f59e0b" },
        { icon: Shield, value: "AAOIFI", label: "Compliance", color: "#8b5cf6" }]
      },
      { tag: "79 — Aviation", title: "Civil Aviation", desc: "Modern aviation infrastructure connecting Afghanistan to the world.", metrics: [
        { icon: Plane, value: "14", label: "International Airports", color: "#3b82f6" },
        { icon: Users, value: "18M", label: "Passengers/yr", color: "#22c55e" },
        { icon: Package, value: "850K", label: "Cargo Tonnes/yr", color: "#f59e0b" },
        { icon: Globe, value: "120", label: "Destinations", color: "#8b5cf6" }]
      },
      { tag: "80 — Real Estate", title: "Real Estate Development", desc: "Modern, sustainable real estate transforming Afghan cities.", metrics: [
        { icon: Building2, value: "$12B", label: "Market Size", color: "#3b82f6" },
        { icon: Home, value: "450K", label: "New Units", color: "#22c55e" },
        { icon: TreePine, value: "40%", label: "Green Buildings", color: "#22c55e" },
        { icon: TrendingUp, value: "+22%", label: "Annual Growth", color: "#f59e0b" }]
      }].
      map((sector, si) =>
      <section key={si} className={`py-16 px-6 lg:px-12 ${si % 2 === 0 ? "bg-card/30" : ""}`}>
          <div className="max-w-7xl mx-auto">
            <SectionHeader tag={`Section ${sector.tag}`} title={sector.title} desc={sector.desc} />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {sector.metrics.map((m, i) => <MCard key={i} {...m} i={i} />)}
            </div>
          </div>
        </section>
      )}

      {/* ═══ M46. NATIONAL BUDGET ALLOCATION ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
        <SectionHeader tag="Section 81 — Budget" title="Fiscal Framework 2026–2040" desc="Strategic allocation of national resources across development priorities." />
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-3">
            {[
            { label: "Education", value: 22, color: "#8b5cf6" },
            { label: "Healthcare", value: 18, color: "#ef4444" },
            { label: "Infrastructure", value: 25, color: "#3b82f6" },
            { label: "Defence & Security", value: 12, color: "#f59e0b" },
            { label: "Social Protection", value: 10, color: "#22c55e" },
            { label: "Technology & Innovation", value: 8, color: "#ec4899" },
            { label: "Environment", value: 5, color: "#06b6d4" }].
            map((b, i) => <PBar key={i} label={b.label} value={b.value} max={25} color={b.color} delay={i * 0.1} />)}
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
            { icon: DollarSign, value: "$45B", label: "Annual Budget 2040", color: "#22c55e" },
            { icon: TrendingUp, value: "18%", label: "Tax-to-GDP Ratio", color: "#3b82f6" },
            { icon: BarChart3, value: "2.5%", label: "Fiscal Deficit", color: "#f59e0b" },
            { icon: Shield, value: "BBB+", label: "Credit Rating", color: "#8b5cf6" }].
            map((m, i) => <MCard key={i} {...m} i={i} />)}
          </div>
        </div>
      </CBlock>

      {/* ═══ M47. CULTURAL HERITAGE PRESERVATION ═══ */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <SectionHeader tag="Section 82 — Heritage" title="Cultural Heritage Preservation" desc="Protecting and restoring Afghanistan's 5,000-year civilisational heritage." />
          <div className="grid md:grid-cols-3 gap-6">
            {[
            { site: "Bamiyan Buddhas", status: "Restoration", investment: "$120M", type: "UNESCO", color: "#f59e0b" },
            { site: "Mes Aynak", status: "Excavation", investment: "$85M", type: "Archaeological", color: "#3b82f6" },
            { site: "Herat Citadel", status: "Preserved", investment: "$45M", type: "Historical", color: "#22c55e" }].
            map((s, i) =>
            <motion.div key={i} {...stagger(i)} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-all">
                <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-full" style={{ background: `${s.color}15`, color: s.color }}>{s.type}</span>
                <h3 className="text-xl font-bold mt-3 mb-1">{s.site}</h3>
                <div className="flex justify-between mt-4">
                  <div><div className="text-lg font-bold" style={{ color: s.color }}>{s.investment}</div><div className="text-xs text-muted-foreground">Investment</div></div>
                  <div><div className="text-lg font-bold text-primary">{s.status}</div><div className="text-xs text-muted-foreground">Status</div></div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ═══ M48. FOREIGN POLICY & DIPLOMACY ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#0a1628] via-[#152238] to-[#0a1628]">
        <SectionHeader tag="Section 83 — Diplomacy" title="Global Partnership Network" desc="Building strategic alliances with 180+ nations for trade, security, and development cooperation." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
          { icon: Globe, value: "180+", label: "Diplomatic Relations", color: "#3b82f6" },
          { icon: Handshake, value: "85", label: "Trade Agreements", color: "#22c55e" },
          { icon: Building2, value: "120", label: "Embassies", color: "#f59e0b" },
          { icon: Flag, value: "45", label: "Int'l Organisations", color: "#8b5cf6" }].
          map((m, i) => <MCard key={i} {...m} i={i} />)}
        </div>
      </CBlock>

      {/* ═══ M49. SOCIAL PROTECTION ═══ */}
      <section className="py-20 px-6 lg:px-12 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeader tag="Section 84 — Social Safety" title="Universal Social Protection" desc="Comprehensive social safety net covering pensions, disability support, child welfare, and unemployment." />
          <div className="grid md:grid-cols-5 gap-4">
            {[
            { icon: Heart, value: "100%", label: "Pension Coverage", color: "#ef4444" },
            { icon: Shield, value: "8.5M", label: "Beneficiaries", color: "#3b82f6" },
            { icon: Home, value: "450K", label: "Social Housing", color: "#22c55e" },
            { icon: Users, value: "$2.8B", label: "Annual Budget", color: "#f59e0b" },
            { icon: GraduationCap, value: "100%", label: "Child Support", color: "#8b5cf6" }].
            map((m, i) => <MCard key={i} {...m} i={i} />)}
          </div>
        </div>
      </section>

      {/* ═══ M50. COMPREHENSIVE OUTCOME DASHBOARD ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#1a0f2e] via-[#2d1b4e] to-[#1a0f2e]">
        <SectionHeader tag="Section 85 — Outcomes" title="National Transformation Scoreboard" desc="Comprehensive tracking of Afghanistan's development journey across all dimensions." />
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3 mb-10">
          {[
          { icon: TrendingUp, value: "$120B", label: "GDP 2040", color: "#22c55e" },
          { icon: Users, value: "50M", label: "Population", color: "#3b82f6" },
          { icon: Briefcase, value: "2M+", label: "New Jobs", color: "#f59e0b" },
          { icon: GraduationCap, value: "95%", label: "Literacy", color: "#8b5cf6" },
          { icon: Stethoscope, value: "72yrs", label: "Life Expectancy", color: "#ef4444" },
          { icon: Wifi, value: "98%", label: "Connectivity", color: "#06b6d4" },
          { icon: Zap, value: "15GW", label: "Energy", color: "#ec4899" },
          { icon: Globe, value: "Top 50", label: "HDI Ranking", color: "#22c55e" }].
          map((m, i) => <MCard key={i} {...m} i={i} />)}
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div {...fadeUp} className="bg-card/40 backdrop-blur border border-border rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-6">Development Progress 2040</h3>
            {[
            { label: "Economic Growth", value: 88, color: "#22c55e" },
            { label: "Social Inclusion", value: 82, color: "#3b82f6" },
            { label: "Infrastructure", value: 78, color: "#f59e0b" },
            { label: "Human Capital", value: 85, color: "#8b5cf6" },
            { label: "Innovation", value: 72, color: "#ec4899" },
            { label: "Sustainability", value: 68, color: "#06b6d4" },
            { label: "Governance", value: 75, color: "#ef4444" },
            { label: "Global Integration", value: 80, color: "#22c55e" }].
            map((p, i) => <PBar key={i} {...p} max={100} delay={i * 0.08} />)}
          </motion.div>
          <div className="grid grid-cols-2 gap-4">
            {[
            { label: "Poverty Rate", current: "54%", target: "8%", color: "#ef4444" },
            { label: "Unemployment", current: "25%", target: "4%", color: "#f59e0b" },
            { label: "Internet Access", current: "22%", target: "98%", color: "#3b82f6" },
            { label: "Renewable Energy", current: "5%", target: "65%", color: "#22c55e" },
            { label: "Exports", current: "$1.2B", target: "$20B", color: "#8b5cf6" },
            { label: "FDI", current: "$120M", target: "$4.2B", color: "#ec4899" }].
            map((t, i) =>
            <motion.div key={i} {...stagger(i)} className="bg-card/40 backdrop-blur border border-border rounded-xl p-4">
                <div className="text-xs text-muted-foreground mb-2">{t.label}</div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground line-through">{t.current}</span>
                  <ArrowUpRight className="w-3 h-3" style={{ color: t.color }} />
                  <span className="text-lg font-bold" style={{ color: t.color }}>{t.target}</span>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </CBlock>

      {/* ═══ M51–M60. MILESTONE YEAR SNAPSHOTS ═══ */}
      {[
      { year: "2026", title: "Foundation Year", gdp: "$22B", jobs: "50K", investment: "$5B", focus: "Institutional setup, legal reforms, pilot projects", color: "#3b82f6" },
      { year: "2027", title: "Acceleration", gdp: "$25B", jobs: "150K", investment: "$8B", focus: "Infrastructure surge, mining activation, digital rollout", color: "#22c55e" },
      { year: "2028", title: "Momentum", gdp: "$28B", jobs: "320K", investment: "$12B", focus: "Energy grid expansion, education reform, health system", color: "#f59e0b" },
      { year: "2029", title: "Integration", gdp: "$32B", jobs: "520K", investment: "$18B", focus: "Trade corridors, industrial zones, foreign investment", color: "#8b5cf6" },
      { year: "2030", title: "Transformation", gdp: "$38B", jobs: "750K", investment: "$25B", focus: "Smart cities, digital economy, innovation ecosystem", color: "#ef4444" },
      { year: "2032", title: "Expansion", gdp: "$52B", jobs: "1.1M", investment: "$38B", focus: "Export diversification, regional leadership, tech hub", color: "#06b6d4" },
      { year: "2035", title: "Leadership", gdp: "$78B", jobs: "1.5M", investment: "$52B", focus: "Global competitiveness, knowledge economy, green growth", color: "#ec4899" },
      { year: "2037", title: "Excellence", gdp: "$95B", jobs: "1.8M", investment: "$62B", focus: "Innovation nation, cultural renaissance, social equity", color: "#22c55e" },
      { year: "2039", title: "Convergence", gdp: "$110B", jobs: "1.9M", investment: "$70B", focus: "Global integration, sustainable prosperity, full employment", color: "#3b82f6" },
      { year: "2040", title: "Prosperity", gdp: "$120B", jobs: "2M+", investment: "$75B+", focus: "Vision achieved — self-reliant, innovative, prosperous nation", color: "#f59e0b" }].
      map((y, yi) =>
      <section key={yi} className={`py-16 px-6 lg:px-12 ${yi % 2 === 0 ? "bg-card/20" : ""}`}>
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeUp} className="flex items-start gap-6">
              <div className="text-6xl md:text-8xl font-black opacity-20" style={{ color: y.color }}>{y.year}</div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: y.color }}>{y.title}</h3>
                <p className="text-muted-foreground mb-4">{y.focus}</p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-card border border-border rounded-xl p-3 text-center">
                    <div className="text-lg font-bold" style={{ color: y.color }}>{y.gdp}</div>
                    <div className="text-[10px] text-muted-foreground">GDP</div>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-3 text-center">
                    <div className="text-lg font-bold" style={{ color: y.color }}>{y.jobs}</div>
                    <div className="text-[10px] text-muted-foreground">Jobs</div>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-3 text-center">
                    <div className="text-lg font-bold" style={{ color: y.color }}>{y.investment}</div>
                    <div className="text-[10px] text-muted-foreground">Investment</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ═══ M61–M70. KEY PERFORMANCE RING CHARTS ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
        <SectionHeader tag="Section 96–105 — KPI Rings" title="2040 Target Achievement Tracker" desc="Visual performance rings tracking progress towards Afghanistan's 2040 national targets." />
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-4">
          {[
          { label: "GDP Growth", value: 88, color: "#22c55e" },
          { label: "Jobs", value: 92, color: "#3b82f6" },
          { label: "Literacy", value: 95, color: "#8b5cf6" },
          { label: "Healthcare", value: 85, color: "#ef4444" },
          { label: "Energy", value: 78, color: "#f59e0b" },
          { label: "Digital", value: 82, color: "#06b6d4" },
          { label: "Trade", value: 75, color: "#ec4899" },
          { label: "Housing", value: 68, color: "#22c55e" },
          { label: "Environment", value: 72, color: "#3b82f6" },
          { label: "Governance", value: 80, color: "#f59e0b" }].
          map((r, i) =>
          <motion.div key={i} {...stagger(i)}>
              <RingChart value={r.value} color={r.color} size={90} label={r.label} />
            </motion.div>
          )}
        </div>
      </CBlock>

      {/* ═══ M71–M80. INFRASTRUCTURE MEGAPROJECTS ═══ */}
      <section className="py-20 px-6 lg:px-12 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeader tag="Section 106–115 — Megaprojects" title="10 Nation-Defining Megaprojects" desc="Transformative infrastructure projects that will reshape Afghanistan's economic geography." />
          <div className="grid md:grid-cols-2 gap-6">
            {[
            { name: "Trans-Afghan Railway", cost: "$8.5B", timeline: "2026–2032", impact: "Connect China-Iran via Afghanistan", icon: Train, color: "#3b82f6" },
            { name: "Kabul Metro System", cost: "$3.2B", timeline: "2027–2033", impact: "6 lines, 85 stations, 12M riders/year", icon: Train, color: "#22c55e" },
            { name: "Helmand Solar Megafarm", cost: "$2.8B", timeline: "2026–2030", impact: "4GW solar capacity, power for 5M homes", icon: Sun, color: "#f59e0b" },
            { name: "Afghan Fiber Backbone", cost: "$1.8B", timeline: "2026–2029", impact: "45,000km fiber connecting all 34 provinces", icon: Network, color: "#8b5cf6" },
            { name: "Mes Aynak Copper Complex", cost: "$4.5B", timeline: "2026–2034", impact: "World's 2nd largest copper deposit", icon: Gem, color: "#ef4444" },
            { name: "Panjshir Hydropower Cascade", cost: "$3.8B", timeline: "2027–2035", impact: "2.5GW clean hydroelectric power", icon: Droplets, color: "#06b6d4" },
            { name: "Herat-Chabahar Expressway", cost: "$2.2B", timeline: "2026–2031", impact: "Direct ocean access via Iran's Chabahar port", icon: Truck, color: "#ec4899" },
            { name: "Kabul International Hub", cost: "$1.5B", timeline: "2027–2032", impact: "25M passenger capacity airport", icon: Plane, color: "#22c55e" },
            { name: "National Water Grid", cost: "$5.2B", timeline: "2026–2038", impact: "Connecting river basins for water security", icon: Droplet, color: "#3b82f6" },
            { name: "Afghan Space Agency", cost: "$800M", timeline: "2028–2040", impact: "3 satellites, earth observation, comms", icon: Rocket, color: "#f59e0b" }].
            map((p, i) =>
            <motion.div key={i} {...stagger(i)} className="bg-card border border-border rounded-2xl p-5 hover:border-primary/40 transition-all flex gap-4">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${p.color}15` }}>
                  <p.icon className="w-7 h-7" style={{ color: p.color }} />
                </div>
                <div>
                  <h3 className="font-bold mb-1">{p.name}</h3>
                  <div className="flex gap-4 text-xs mb-2">
                    <span style={{ color: p.color }}>{p.cost}</span>
                    <span className="text-muted-foreground">{p.timeline}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{p.impact}</p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ═══ M81–M90. INTERNATIONAL PARTNERSHIP MATRIX ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#1a1005] via-[#2d1b0a] to-[#1a1005]">
        <SectionHeader tag="Section 116–125 — Partnerships" title="Strategic International Partners" desc="Bilateral and multilateral partnerships driving Afghanistan's transformation." />
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {[
          { partner: "China", type: "Infrastructure", value: "$18B", color: "#ef4444" },
          { partner: "India", type: "Tech & Education", value: "$8.5B", color: "#f59e0b" },
          { partner: "Turkey", type: "Construction", value: "$5.2B", color: "#3b82f6" },
          { partner: "UAE", type: "Investment", value: "$6.8B", color: "#22c55e" },
          { partner: "Germany", type: "Governance", value: "$3.5B", color: "#8b5cf6" },
          { partner: "Japan", type: "Technology", value: "$4.2B", color: "#ec4899" },
          { partner: "South Korea", type: "Digital", value: "$2.8B", color: "#06b6d4" },
          { partner: "Saudi Arabia", type: "Energy", value: "$5.5B", color: "#22c55e" },
          { partner: "UK", type: "Finance", value: "$3.2B", color: "#3b82f6" },
          { partner: "USA", type: "Defence & Aid", value: "$7.8B", color: "#ef4444" }].
          map((p, i) =>
          <motion.div key={i} {...stagger(i)} className="bg-card/60 backdrop-blur border border-border rounded-xl p-4 text-center hover:border-primary/40 transition-all">
              <div className="font-bold text-white">{p.partner}</div>
              <div className="text-[10px] text-muted-foreground mb-2">{p.type}</div>
              <div className="text-lg font-bold" style={{ color: p.color }}>{p.value}</div>
            </motion.div>
          )}
        </div>
      </CBlock>

      {/* ═══ M91–M95. SDG ALIGNMENT DEEP DIVE ═══ */}
      <section className="py-20 px-6 lg:px-12 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeader tag="Section 126–130 — SDG Deep Dive" title="UN SDG Alignment Matrix" desc="Afghanistan's development programme mapped against all 17 Sustainable Development Goals." />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {[
            { sdg: "SDG 1", name: "No Poverty", pct: 82, color: "#e5243b" },
            { sdg: "SDG 2", name: "Zero Hunger", pct: 75, color: "#dda63a" },
            { sdg: "SDG 3", name: "Good Health", pct: 78, color: "#4c9f38" },
            { sdg: "SDG 4", name: "Quality Education", pct: 88, color: "#c5192d" },
            { sdg: "SDG 5", name: "Gender Equality", pct: 65, color: "#ff3a21" },
            { sdg: "SDG 6", name: "Clean Water", pct: 72, color: "#26bde2" },
            { sdg: "SDG 7", name: "Clean Energy", pct: 78, color: "#fcc30b" },
            { sdg: "SDG 8", name: "Decent Work", pct: 85, color: "#a21942" },
            { sdg: "SDG 9", name: "Industry", pct: 72, color: "#fd6925" },
            { sdg: "SDG 10", name: "Reduced Inequality", pct: 68, color: "#dd1367" },
            { sdg: "SDG 11", name: "Sustainable Cities", pct: 62, color: "#fd9d24" },
            { sdg: "SDG 12", name: "Responsible Consumption", pct: 55, color: "#bf8b2e" },
            { sdg: "SDG 13", name: "Climate Action", pct: 58, color: "#3f7e44" },
            { sdg: "SDG 14", name: "Life Below Water", pct: 35, color: "#0a97d9" },
            { sdg: "SDG 15", name: "Life on Land", pct: 65, color: "#56c02b" },
            { sdg: "SDG 16", name: "Peace & Justice", pct: 72, color: "#00689d" },
            { sdg: "SDG 17", name: "Partnerships", pct: 80, color: "#19486a" }].
            map((s, i) =>
            <motion.div key={i} {...stagger(i)} className="bg-card border border-border rounded-xl p-3">
                <div className="text-[10px] font-bold mb-1" style={{ color: s.color }}>{s.sdg}</div>
                <div className="text-xs font-semibold mb-2">{s.name}</div>
                <PBar label="" value={s.pct} max={100} color={s.color} />
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ═══ M96–M100. GRAND VISION FINALE ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#0a1628] via-[#162033] to-[#0a1628]">
        <SectionHeader tag="Sections 131–135 — Grand Vision" title="Afghanistan 2040: The Promise" desc="A final comprehensive view of the transformed nation we are building together." />
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
          { pillar: "Economic Powerhouse", desc: "$120B GDP, 2M+ jobs, $20B exports, regional trade hub with 85+ partner nations", icon: TrendingUp, color: "#22c55e" },
          { pillar: "Innovation Nation", desc: "1,000+ startups, 85 research centres, 3.5% GDP on R&D, digital-first economy", icon: Rocket, color: "#8b5cf6" },
          { pillar: "Inclusive Society", desc: "95% literacy, universal healthcare, 100% connectivity, social safety net for all", icon: Heart, color: "#ef4444" }].
          map((p, i) =>
          <motion.div key={i} {...stagger(i)} className="bg-card/40 backdrop-blur border border-border rounded-2xl p-8 text-center">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: `${p.color}15` }}>
                <p.icon className="w-8 h-8" style={{ color: p.color }} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{p.pillar}</h3>
              <p className="text-sm text-white/60">{p.desc}</p>
            </motion.div>
          )}
        </div>

        {/* Final Transformation Matrix */}
        <motion.div {...fadeUp} className="bg-card/30 backdrop-blur border border-primary/30 rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-center text-white mb-8">The Transformation</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
            { metric: "GDP", from: "$20B", to: "$120B", color: "#22c55e" },
            { metric: "Poverty", from: "54%", to: "8%", color: "#ef4444" },
            { metric: "Literacy", from: "38%", to: "95%", color: "#3b82f6" },
            { metric: "Life Expectancy", from: "64 yrs", to: "72 yrs", color: "#8b5cf6" },
            { metric: "Energy", from: "300MW", to: "15GW", color: "#f59e0b" },
            { metric: "Internet", from: "22%", to: "98%", color: "#06b6d4" },
            { metric: "Exports", from: "$1.2B", to: "$20B", color: "#ec4899" },
            { metric: "HDI Rank", from: "169th", to: "Top 50", color: "#22c55e" }].
            map((t, i) =>
            <motion.div key={i} {...stagger(i)} className="bg-card/50 backdrop-blur rounded-xl p-4 text-center border border-border/50">
                <div className="text-xs text-muted-foreground mb-2">{t.metric}</div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-sm text-muted-foreground line-through">{t.from}</span>
                  <ChevronRight className="w-4 h-4" style={{ color: t.color }} />
                  <span className="text-xl font-bold" style={{ color: t.color }}>{t.to}</span>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Closing Statement */}
        <motion.div {...fadeUp} className="text-center mt-16">
          <Crown className="w-12 h-12 mx-auto mb-4 text-primary" />
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Of the People. For the People. By the People.</h3>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Afghanistan's Vision 2040 is not just a development programme — it is a covenant with every Afghan citizen. 
            A promise of dignity, prosperity, and opportunity. Together, we build the future.
          </p>
        </motion.div>
      </CBlock>
    </>);

};