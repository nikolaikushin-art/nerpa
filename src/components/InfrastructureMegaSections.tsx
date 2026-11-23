import { motion } from "framer-motion";
import { useAnimatedValue } from "@/hooks/useAnimatedValue";
import {
  Building2, Train, Plane, Ship, Truck, MapPin, Globe, Target,
  TrendingUp, Users, DollarSign, Award, Crown, Sparkles, Rocket,
  Shield, Flag, Star, Briefcase, GraduationCap, Heart, Mountain,
  Factory, Compass, Eye, Timer, Activity, Layers, BarChart3,
  Network, Database, Cpu, Zap, Lightbulb, Handshake, Scale,
  BookOpen, Home, Hammer, Wrench, Package, Signal,
  Gem, Leaf, TreePine, Sun, Wind, Droplets, Battery, Power } from
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


const ICard = ({ icon: Icon, value, label, sub, color, i }: {icon: any;value: string;label: string;sub?: string;color: string;i: number;}) => {
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

export const InfrastructureMegaSections = () => {
  return (
    <>
      {/* ═══ 1. INFRASTRUCTURE RENAISSANCE HERO ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#0a0d1a] via-[#101828] to-[#0a0d1a]">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="text-primary text-xs font-semibold tracking-[0.4em] uppercase mb-4 block">Section I — Infrastructure Renaissance</span>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">Building<br />A Nation</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">$50 billion transforming Afghanistan's infrastructure — roads, railways, airports, and smart cities connecting every province.</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ICard icon={Compass} value="10,000km" label="Roads Planned" sub="Modern highways" color="#3b82f6" i={0} />
          <ICard icon={Train} value="2,000km" label="Rail Network" sub="New railways" color="#22c55e" i={1} />
          <ICard icon={DollarSign} value="$50B" label="Total Investment" sub="15-year plan" color="#f59e0b" i={2} />
          <ICard icon={Users} value="1M+" label="Jobs Created" sub="Construction" color="#8b5cf6" i={3} />
        </div>
      </CBlock>

      {/* ═══ 2. NATIONAL HIGHWAY NETWORK ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#0d0d1a] via-[#151528] to-[#0d0d1a]">
        <SH tag="Section II — Highways" title="Ring Road & Beyond" desc="Complete 3,360km national ring road with modern dual-carriageway connecting all major cities." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ICard icon={Compass} value="3,360km" label="Ring Road" sub="Complete circuit" color="#3b82f6" i={0} />
          <ICard icon={DollarSign} value="$5B" label="Highway Investment" sub="Total" color="#22c55e" i={1} />
          <ICard icon={Building2} value="100+" label="Major Bridges" sub="New construction" color="#f59e0b" i={2} />
          <ICard icon={Target} value="2032" label="Completion" sub="Target year" color="#ef4444" i={3} />
        </div>
        <div className="mt-8 space-y-3">
          <PBar label="Kabul-Kandahar Highway" value={75} max={100} color="#3b82f6" delay={0} />
          <PBar label="Kandahar-Herat Highway" value={60} max={100} color="#22c55e" delay={0.1} />
          <PBar label="Herat-Mazar Highway" value={45} max={100} color="#f59e0b" delay={0.2} />
          <PBar label="Mazar-Kabul Highway" value={55} max={100} color="#8b5cf6" delay={0.3} />
        </div>
      </CBlock>

      {/* ═══ 3. RAILWAY REVOLUTION ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#0a1a0a] via-[#0d2810] to-[#0a1a0a]">
        <SH tag="Section III — Railways" title="Railway Revolution" desc="2,000km of new railway connecting Central Asia to South Asia through Afghanistan." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ICard icon={Train} value="2,000km" label="Track Length" sub="New railway" color="#22c55e" i={0} />
          <ICard icon={DollarSign} value="$8B" label="Rail Investment" sub="Total" color="#3b82f6" i={1} />
          <ICard icon={MapPin} value="50+" label="Stations" sub="Planned" color="#f59e0b" i={2} />
          <ICard icon={Users} value="20M" label="Passengers" sub="Annual target" color="#8b5cf6" i={3} />
        </div>
      </CBlock>

      {/* ═══ 4. AIRPORT MODERNISATION ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#1a1505] via-[#2d2008] to-[#1a1505]">
        <SH tag="Section IV — Aviation" title="Sky-High Ambitions" desc="5 international airports with modern terminals and cargo facilities." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ICard icon={Plane} value="5" label="Int'l Airports" sub="Upgraded" color="#06b6d4" i={0} />
          <ICard icon={Users} value="20M" label="Passengers" sub="Annual capacity" color="#3b82f6" i={1} />
          <ICard icon={DollarSign} value="$3B" label="Aviation Investment" sub="Total" color="#22c55e" i={2} />
          <ICard icon={Package} value="500K" label="Cargo Tonnes" sub="Annual capacity" color="#f59e0b" i={3} />
        </div>
      </CBlock>

      {/* ═══ 5. URBAN TRANSIT ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#0d0a1a] via-[#150d28] to-[#0d0a1a]">
        <SH tag="Section V — Urban Transit" title="City Mobility Systems" desc="Metro, BRT, and modern bus networks in Kabul, Herat, and Mazar-i-Sharif." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ICard icon={Train} value="20km" label="Kabul Metro" sub="Line 1" color="#8b5cf6" i={0} />
          <ICard icon={Truck} value="100km" label="BRT Routes" sub="3 cities" color="#22c55e" i={1} />
          <ICard icon={Users} value="2M" label="Daily Riders" sub="Transit users" color="#3b82f6" i={2} />
          <ICard icon={DollarSign} value="$4B" label="Transit Investment" sub="Total" color="#f59e0b" i={3} />
        </div>
      </CBlock>

      {/* ═══ 6. BRIDGE BUILDING ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#1a0d05] via-[#281508] to-[#1a0d05]">
        <SH tag="Section VI — Bridges" title="100+ Major Bridges" desc="Connecting communities across rivers and mountain valleys nationwide." />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <ICard icon={Building2} value="100+" label="Major Bridges" sub="New construction" color="#f59e0b" i={0} />
          <ICard icon={DollarSign} value="$1.2B" label="Bridge Investment" sub="Total" color="#22c55e" i={1} />
          <ICard icon={MapPin} value="34" label="Provinces" sub="All connected" color="#3b82f6" i={2} />
        </div>
      </CBlock>

      {/* ═══ 7. SALANG TUNNEL ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#051a1a] via-[#082828] to-[#051a1a]">
        <SH tag="Section VII — Mega Tunnel" title="Salang Tunnel Upgrade" desc="Modern twin-bore tunnel replacing the aging pass for year-round north-south transit." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ICard icon={Mountain} value="$800M" label="Investment" sub="Tunnel upgrade" color="#06b6d4" i={0} />
          <ICard icon={Compass} value="2.6km" label="Tunnel Length" sub="Twin bore" color="#3b82f6" i={1} />
          <ICard icon={Target} value="365" label="Days Open" sub="Year-round" color="#22c55e" i={2} />
          <ICard icon={Truck} value="10K" label="Daily Vehicles" sub="Capacity" color="#f59e0b" i={3} />
        </div>
      </CBlock>

      {/* ═══ 8. SMART CITIES ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#0d0a1a] via-[#150d28] to-[#0d0a1a]">
        <SH tag="Section VIII — Smart Cities" title="Digital Urban Future" desc="Smart city infrastructure with IoT, fibre optic, and digital governance." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ICard icon={Cpu} value="5" label="Smart Cities" sub="Kabul, Herat, Mazar, Kandahar, Jalalabad" color="#8b5cf6" i={0} />
          <ICard icon={Network} value="100%" label="Fibre Coverage" sub="Urban areas" color="#3b82f6" i={1} />
          <ICard icon={Database} value="$2B" label="Smart Investment" sub="Digital infra" color="#22c55e" i={2} />
          <ICard icon={Signal} value="5G" label="Mobile Network" sub="All cities" color="#f59e0b" i={3} />
        </div>
      </CBlock>

      {/* ═══ 9-18: MEGA PROJECT DASHBOARDS ═══ */}
      {[
      { name: "Ring Road Completion", loc: "National", inv: "$5B", len: "3,360km", status: "Under Construction", col: "#3b82f6" },
      { name: "Kabul-Mazar Railway", loc: "Northern Corridor", inv: "$3.5B", len: "500km", status: "Under Construction", col: "#22c55e" },
      { name: "Kabul International Airport", loc: "Kabul", inv: "$1.5B", len: "10M pax", status: "Under Construction", col: "#f59e0b" },
      { name: "Herat-Chabahar Corridor", loc: "Western", inv: "$2.5B", len: "800km", status: "Planned", col: "#06b6d4" },
      { name: "Kabul Metro Line 1", loc: "Kabul", inv: "$2B", len: "20km", status: "Planned", col: "#8b5cf6" },
      { name: "Smart Highway System", loc: "Major Corridors", inv: "$500M", len: "5,000km", status: "Planned", col: "#ef4444" },
      { name: "Trans-Afghan Railway", loc: "National", inv: "$5B", len: "1,200km", status: "Planned", col: "#14b8a6" },
      { name: "Wakhan Corridor Road", loc: "Badakhshan", inv: "$1B", len: "350km", status: "Planned", col: "#ec4899" },
      { name: "Kabul New City", loc: "Kabul", inv: "$3B", len: "1M residents", status: "Under Construction", col: "#84cc16" },
      { name: "National Fibre Network", loc: "Nationwide", inv: "$500M", len: "50,000km", status: "Under Construction", col: "#f97316" }].
      map((p, idx) =>
      <CBlock key={p.name} gradient={`bg-gradient-to-br from-[#0a0d1a] via-[#101828] to-[#0a0d1a]`}>
          <SH tag={`Section ${9 + idx} — Mega Project`} title={p.name} desc={`Location: ${p.loc}. Status: ${p.status}.`} />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ICard icon={Building2} value={p.len} label="Scale" sub={p.loc} color={p.col} i={0} />
            <ICard icon={DollarSign} value={p.inv} label="Investment" sub="Total" color="#22c55e" i={1} />
            <ICard icon={MapPin} value={p.loc} label="Location" sub="Region" color="#3b82f6" i={2} />
            <ICard icon={Activity} value={p.status} label="Status" sub="Current" color="#f59e0b" i={3} />
          </div>
        </CBlock>
      )}

      {/* ═══ 19-28: PROVINCIAL INFRASTRUCTURE PROFILES ═══ */}
      {[
      { prov: "Kabul", focus: "Metro + Smart City", inv: "$8B", pct: 90, col: "#3b82f6" },
      { prov: "Herat", focus: "Airport + Rail Hub", inv: "$5B", pct: 85, col: "#22c55e" },
      { prov: "Balkh", focus: "Trade Gateway", inv: "$4B", pct: 80, col: "#f59e0b" },
      { prov: "Kandahar", focus: "Highway Hub", inv: "$3.5B", pct: 75, col: "#ef4444" },
      { prov: "Nangarhar", focus: "Border Gateway", inv: "$3B", pct: 70, col: "#8b5cf6" },
      { prov: "Kunduz", focus: "Agricultural Infra", inv: "$2B", pct: 65, col: "#06b6d4" },
      { prov: "Bamyan", focus: "Tourism Infra", inv: "$1.5B", pct: 60, col: "#14b8a6" },
      { prov: "Helmand", focus: "Agricultural Roads", inv: "$1.5B", pct: 55, col: "#84cc16" },
      { prov: "Badakhshan", focus: "Mountain Connectivity", inv: "$2B", pct: 50, col: "#ec4899" },
      { prov: "Paktya", focus: "Border Infrastructure", inv: "$1B", pct: 45, col: "#f97316" }].
      map((p, idx) =>
      <CBlock key={p.prov} gradient={`bg-gradient-to-br from-[#0a1a0a] via-[#0d2810] to-[#0a1a0a]`}>
          <SH tag={`Section ${19 + idx} — ${p.prov}`} title={`${p.prov}: ${p.focus}`} desc={`Investment: ${p.inv}. Development priority: ${p.focus}.`} />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ICard icon={MapPin} value={p.inv} label="Investment" sub={p.prov} color={p.col} i={0} />
            <ICard icon={TrendingUp} value={`${p.pct}%`} label="Progress" sub="Completion" color="#22c55e" i={1} />
            <RingChart value={p.pct} color={p.col} label="Infrastructure" />
            <RingChart value={p.pct - 10} color="#3b82f6" label="Connectivity" />
          </div>
        </CBlock>
      )}

      {/* ═══ 29. CONSTRUCTION WORKFORCE ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#1a0a0a] via-[#280d0d] to-[#1a0a0a]">
        <SH tag="Section XXIX — Workforce" title="1 Million Construction Jobs" desc="Vocational training for 500,000 construction workers." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ICard icon={Users} value="1M+" label="Total Jobs" sub="Construction" color="#ef4444" i={0} />
          <ICard icon={GraduationCap} value="500K" label="Workers Trained" sub="Vocational" color="#3b82f6" i={1} />
          <ICard icon={Building2} value="50" label="Training Centres" sub="Nationwide" color="#22c55e" i={2} />
          <ICard icon={Award} value="20K" label="Engineers" sub="Graduated" color="#f59e0b" i={3} />
        </div>
      </CBlock>

      {/* ═══ 30. CONSTRUCTION MATERIALS ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#0d1a0d] via-[#152815] to-[#0d1a0d]">
        <SH tag="Section XXX — Materials" title="Domestic Materials Industry" desc="Cement, steel, and aggregates for the $50B construction programme." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ICard icon={Factory} value="20" label="Cement Plants" sub="20M tonnes/yr" color="#f59e0b" i={0} />
          <ICard icon={Hammer} value="10" label="Steel Mills" sub="5M tonnes/yr" color="#3b82f6" i={1} />
          <ICard icon={Package} value="100" label="Quarries" sub="Aggregates" color="#22c55e" i={2} />
          <ICard icon={DollarSign} value="$5B" label="Materials Industry" sub="Annual value" color="#8b5cf6" i={3} />
        </div>
      </CBlock>

      {/* ═══ 31-40: YEAR-BY-YEAR INFRASTRUCTURE ROADMAP ═══ */}
      {[
      { yr: "2026", focus: "Foundation — Priority corridor surveys and design", target: "500km roads started", col: "#3b82f6" },
      { yr: "2027", focus: "Scale Up — Major highway and railway construction begins", target: "1,500km under construction", col: "#22c55e" },
      { yr: "2028", focus: "Bridges — 30 major bridges completed", target: "2,500km roads completed", col: "#f59e0b" },
      { yr: "2029", focus: "Rail Launch — First railway segment operational", target: "500km railway open", col: "#8b5cf6" },
      { yr: "2030", focus: "Airport Upgrade — Kabul new terminal opens", target: "10M passenger capacity", col: "#06b6d4" },
      { yr: "2031", focus: "Transit — BRT systems in 3 major cities", target: "1M daily transit riders", col: "#ef4444" },
      { yr: "2032", focus: "Ring Road — Complete national highway circuit", target: "3,360km connected", col: "#14b8a6" },
      { yr: "2033", focus: "Smart Infrastructure — IoT and monitoring deployed", target: "5 smart cities", col: "#ec4899" },
      { yr: "2034", focus: "Rail Network — 1,500km railway operational", target: "10M rail passengers", col: "#84cc16" },
      { yr: "2035", focus: "Vision Complete — Full national connectivity", target: "$50B invested", col: "#f97316" }].
      map((y, idx) =>
      <CBlock key={y.yr} gradient={`bg-gradient-to-br from-[#0a0d1a] via-[#101828] to-[#0a0d1a]`}>
          <SH tag={`Section ${31 + idx} — Year ${y.yr}`} title={`Infrastructure ${y.yr}`} desc={y.focus} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div {...fadeUp} className="bg-card/60 border border-border rounded-xl p-6">
              <div className="text-3xl font-bold mb-2" style={{ color: y.col }}>{y.yr}</div>
              <p className="text-muted-foreground text-sm">{y.focus}</p>
            </motion.div>
            


          
          </div>
        </CBlock>
      )}

      {/* ═══ 41-50: TRANSPORT CORRIDORS ═══ */}
      {[
      { corridor: "Kabul-Kandahar Express", type: "Highway", len: "480km", inv: "$1.5B", pct: 75, col: "#3b82f6" },
      { corridor: "Herat-Islam Qala Gateway", type: "Border Road", len: "120km", inv: "$400M", pct: 80, col: "#22c55e" },
      { corridor: "Kabul-Torkham Express", type: "Highway", len: "230km", inv: "$800M", pct: 70, col: "#f59e0b" },
      { corridor: "Mazar-Hairatan Rail", type: "Railway", len: "75km", inv: "$300M", pct: 100, col: "#8b5cf6" },
      { corridor: "Kabul-Bamyan Highway", type: "Mountain Road", len: "180km", inv: "$600M", pct: 50, col: "#ef4444" },
      { corridor: "Herat-Chabahar Corridor", type: "Trade Route", len: "800km", inv: "$2.5B", pct: 25, col: "#06b6d4" },
      { corridor: "Northern Rail Corridor", type: "Railway", len: "500km", inv: "$3.5B", pct: 35, col: "#14b8a6" },
      { corridor: "Spin Boldak Highway", type: "Border Road", len: "100km", inv: "$350M", pct: 65, col: "#ec4899" },
      { corridor: "Kunduz-Tajik Bridge", type: "Bridge", len: "1km", inv: "$200M", pct: 45, col: "#84cc16" },
      { corridor: "Wakhan Pass Road", type: "Mountain Road", len: "350km", inv: "$1B", pct: 15, col: "#f97316" }].
      map((c, idx) =>
      <CBlock key={c.corridor} gradient={`bg-gradient-to-br from-[#0a1a0a] via-[#102810] to-[#0a1a0a]`}>
          <SH tag={`Section ${41 + idx} — Corridor`} title={c.corridor} desc={`Type: ${c.type}. Length: ${c.len}.`} />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <ICard icon={Compass} value={c.len} label="Length" sub={c.type} color={c.col} i={0} />
            <ICard icon={DollarSign} value={c.inv} label="Investment" sub="Total" color="#22c55e" i={1} />
            <RingChart value={c.pct} color={c.col} label="Completion" size={120} />
          </div>
        </CBlock>
      )}

      {/* ═══ 51-60: HOUSING & URBAN DEVELOPMENT ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#1a0d05] via-[#281508] to-[#1a0d05]">
        <SH tag="Sections LI-LX — Housing" title="National Housing Programme" desc="2 million new affordable homes across all provinces." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <ICard icon={Home} value="2M" label="New Homes" sub="Built by 2040" color="#f59e0b" i={0} />
          <ICard icon={DollarSign} value="$10B" label="Housing Investment" sub="Total" color="#22c55e" i={1} />
          <ICard icon={Users} value="10M" label="People Housed" sub="Families" color="#3b82f6" i={2} />
          <ICard icon={Building2} value="5" label="New Cities" sub="Satellite towns" color="#8b5cf6" i={3} />
        </div>
        <div className="space-y-3">
          <PBar label="Kabul New City" value={40} max={100} color="#3b82f6" delay={0} />
          <PBar label="Herat Expansion" value={55} max={100} color="#22c55e" delay={0.1} />
          <PBar label="Mazar Urban Plan" value={35} max={100} color="#f59e0b" delay={0.2} />
          <PBar label="Kandahar Housing" value={30} max={100} color="#8b5cf6" delay={0.3} />
          <PBar label="Rural Housing" value={25} max={100} color="#ef4444" delay={0.4} />
        </div>
      </CBlock>

      {/* ═══ 61-70: WATER INFRASTRUCTURE ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#051a1a] via-[#082828] to-[#051a1a]">
        <SH tag="Sections LXI-LXX — Water" title="National Water Network" desc="Clean water and sanitation infrastructure for 40 million citizens." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <ICard icon={Droplets} value="100%" label="Clean Water" sub="Access target" color="#06b6d4" i={0} />
          <ICard icon={DollarSign} value="$5B" label="Water Investment" sub="Total" color="#22c55e" i={1} />
          <ICard icon={Building2} value="500" label="Treatment Plants" sub="Water facilities" color="#3b82f6" i={2} />
          <ICard icon={MapPin} value="34" label="Provinces" sub="Full coverage" color="#f59e0b" i={3} />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          <RingChart value={85} color="#06b6d4" label="Urban Water" />
          <RingChart value={65} color="#3b82f6" label="Rural Water" />
          <RingChart value={70} color="#22c55e" label="Sanitation" />
          <RingChart value={55} color="#f59e0b" label="Wastewater" />
          <RingChart value={45} color="#8b5cf6" label="Stormwater" />
        </div>
      </CBlock>

      {/* ═══ 71-80: TELECOM INFRASTRUCTURE ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#0d0a1a] via-[#150d28] to-[#0d0a1a]">
        <SH tag="Sections LXXI-LXXX — Telecom" title="Digital Connectivity" desc="5G networks, fibre optic backbone, and satellite internet across Afghanistan." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ICard icon={Signal} value="5G" label="Mobile Network" sub="All cities" color="#8b5cf6" i={0} />
          <ICard icon={Network} value="50,000km" label="Fibre Optic" sub="Backbone" color="#3b82f6" i={1} />
          <ICard icon={Globe} value="100%" label="Internet Access" sub="National" color="#22c55e" i={2} />
          <ICard icon={DollarSign} value="$2B" label="Telecom Investment" sub="Total" color="#f59e0b" i={3} />
        </div>
        <div className="mt-8 space-y-3">
          <PBar label="4G Coverage" value={90} max={100} color="#3b82f6" delay={0} />
          <PBar label="5G Rollout" value={40} max={100} color="#8b5cf6" delay={0.1} />
          <PBar label="Fibre to Home" value={55} max={100} color="#22c55e" delay={0.2} />
          <PBar label="Rural Connectivity" value={65} max={100} color="#f59e0b" delay={0.3} />
          <PBar label="Satellite Internet" value={30} max={100} color="#06b6d4" delay={0.4} />
        </div>
      </CBlock>

      {/* ═══ 81-85: PPP FRAMEWORK ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#1a1505] via-[#2d2008] to-[#1a1505]">
        <SH tag="Sections LXXXI-LXXXV — PPP" title="Public-Private Partnerships" desc="$15B+ in PPP projects across toll roads, airports, and transit systems." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
          { type: "Toll Roads", amt: "$5B", col: "#3b82f6" },
          { type: "Airport Concessions", amt: "$3B", col: "#22c55e" },
          { type: "Transit Operations", amt: "$2B", col: "#f59e0b" },
          { type: "Smart City PPP", amt: "$2B", col: "#8b5cf6" },
          { type: "Housing PPP", amt: "$1.5B", col: "#ef4444" },
          { type: "Water PPP", amt: "$1B", col: "#06b6d4" },
          { type: "Telecom PPP", amt: "$500M", col: "#14b8a6" },
          { type: "Energy PPP", amt: "$1B", col: "#eab308" }].
          map((p, i) =>
          <motion.div key={p.type} {...stagger(i)} className="bg-card/60 border border-border rounded-xl p-4">
              <div className="text-lg font-bold" style={{ color: p.col }}>{p.type}</div>
              <div className="text-2xl font-bold mt-1">{p.amt}</div>
            </motion.div>
          )}
        </div>
      </CBlock>

      {/* ═══ 86-90: ENVIRONMENTAL INFRASTRUCTURE ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#051a0d] via-[#082815] to-[#051a0d]">
        <SH tag="Sections LXXXVI-XC — Green Infra" title="Green Infrastructure" desc="Sustainable construction and environmental protection across all projects." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <ICard icon={Leaf} value="100%" label="EIA Compliance" sub="All projects" color="#22c55e" i={0} />
          <ICard icon={TreePine} value="10M" label="Trees Planted" sub="Reforestation" color="#84cc16" i={1} />
          <ICard icon={Sun} value="50%" label="Green Energy" sub="Construction power" color="#eab308" i={2} />
          <ICard icon={Droplets} value="Zero" label="Water Pollution" sub="Target" color="#06b6d4" i={3} />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          <RingChart value={85} color="#22c55e" label="Green Building" />
          <RingChart value={70} color="#3b82f6" label="Waste Recycling" />
          <RingChart value={60} color="#84cc16" label="Carbon Neutral" />
          <RingChart value={75} color="#f59e0b" label="Local Materials" />
          <RingChart value={90} color="#8b5cf6" label="Worker Safety" />
        </div>
      </CBlock>

      {/* ═══ 91-95: INTERNATIONAL PARTNERSHIPS ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#0a0a1a] via-[#0d0d28] to-[#0a0a1a]">
        <SH tag="Sections XCI-XCV — Partners" title="Global Infrastructure Alliances" desc="Strategic partnerships with leading infrastructure organizations worldwide." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
          { name: "World Bank", role: "Transport Finance", inv: "$5B", col: "#3b82f6" },
          { name: "ADB", role: "Regional Connectivity", inv: "$3B", col: "#22c55e" },
          { name: "AIIB", role: "Infrastructure Fund", inv: "$2B", col: "#f59e0b" },
          { name: "IsDB", role: "Urban Development", inv: "$1.5B", col: "#8b5cf6" },
          { name: "JICA", role: "Road & Bridge", inv: "$1B", col: "#06b6d4" },
          { name: "Korean EXIM", role: "Railway", inv: "$800M", col: "#84cc16" },
          { name: "EU Connectivity", role: "Cross-Border", inv: "$500M", col: "#ef4444" },
          { name: "Turkey", role: "Construction", inv: "$1B", col: "#ec4899" }].
          map((p, i) =>
          <motion.div key={p.name} {...stagger(i)} className="bg-card/60 border border-border rounded-xl p-4">
              <div className="text-lg font-bold" style={{ color: p.col }}>{p.name}</div>
              <div className="text-xs text-muted-foreground">{p.role}</div>
              <div className="text-sm font-semibold mt-1">{p.inv}</div>
            </motion.div>
          )}
        </div>
      </CBlock>

      {/* ═══ 96-100: GRAND VISION SUMMARY ═══ */}
      <CBlock gradient="bg-gradient-to-br from-[#0a0d1a] via-[#101828] to-[#0a0d1a]">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="text-primary text-xs font-semibold tracking-[0.4em] uppercase mb-4 block">Sections XCVI-C — Grand Vision</span>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">Infrastructure<br />2040 Vision</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Complete national connectivity — every province connected by road, rail, and digital network.</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <ICard icon={Compass} value="10,000km" label="Highways" sub="Built" color="#3b82f6" i={0} />
          <ICard icon={Train} value="2,000km" label="Railways" sub="Operational" color="#22c55e" i={1} />
          <ICard icon={Plane} value="5" label="Int'l Airports" sub="Modern" color="#f59e0b" i={2} />
          <ICard icon={Users} value="1M+" label="Jobs Created" sub="Construction" color="#8b5cf6" i={3} />
          <ICard icon={DollarSign} value="$50B" label="Total Invested" sub="15 years" color="#ef4444" i={4} />
          <ICard icon={Building2} value="100+" label="Bridges" sub="Major" color="#06b6d4" i={5} />
          <ICard icon={Home} value="2M" label="Homes Built" sub="Affordable" color="#14b8a6" i={6} />
          <ICard icon={Network} value="100%" label="Connectivity" sub="All provinces" color="#eab308" i={7} />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          <RingChart value={100} color="#3b82f6" label="Road Network" />
          <RingChart value={100} color="#22c55e" label="Rail Network" />
          <RingChart value={100} color="#f59e0b" label="Aviation" />
          <RingChart value={95} color="#8b5cf6" label="Urban Transit" />
          <RingChart value={100} color="#ef4444" label="Digital Infra" />
        </div>
      </CBlock>
    </>);

};