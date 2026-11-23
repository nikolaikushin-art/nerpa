import { motion } from "framer-motion";
import { useAnimatedValue } from "@/hooks/useAnimatedValue";
import {
  Landmark, DollarSign, Users, Building2, Globe, Target, Award, TrendingUp,
  Shield, MapPin, Star, Lightbulb, Rocket, Cpu, Database, Network,
  Briefcase, GraduationCap, Heart, Factory, Home, Package, Signal,
  Layers, BarChart3, Eye, Timer, Activity, Compass, Zap, Crown,
  Sparkles, BookOpen, Hammer, Wrench, Truck, Ship, Plane, Train, Scale } from
"lucide-react";

const fadeUp = { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } };
const stagger = (i: number) => ({ ...fadeUp, transition: { duration: 0.8, ease: "easeOut" as const, delay: i * 0.06 } });
const CB = ({ g, children }: {g: string;children: React.ReactNode;}) => <section className="relative py-24 px-6 lg:px-12 overflow-hidden"><div className={`absolute inset-0 ${g}`} /><div className="absolute inset-0 opacity-[0.03]"><div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0id2hpdGUiLz48L3N2Zz4=')]" /></div><div className="relative z-10 max-w-7xl mx-auto">{children}</div></section>;
const MC = ({ icon: Icon, value, label, sub, color, i }: {icon: any;value: string;label: string;sub?: string;color: string;i: number;}) => {const { ref, display } = useAnimatedValue(value);return <motion.div ref={ref} {...stagger(i)} className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-5 hover:border-primary/40 transition-all"><div className="w-11 h-11 rounded-xl flex items-center justify-center mb-3" style={{ background: `${color}15` }}><Icon className="w-5 h-5" style={{ color }} /></div><div className="text-2xl md:text-3xl font-bold mb-1" style={{ color }}>{display}</div><div className="text-sm font-semibold">{label}</div>{sub && <div className="text-xs text-muted-foreground mt-1">{sub}</div>}</motion.div>;};
const PB = ({ label, value, max, color, delay = 0 }: {label: string;value: number;max: number;color: string;delay?: number;}) => <div className="space-y-1"><div className="flex justify-between text-xs"><span className="text-muted-foreground">{label}</span><span className="font-bold" style={{ color }}>{value}%</span></div><div className="h-2.5 bg-muted rounded-full overflow-hidden"><motion.div className="h-full rounded-full" style={{ background: `linear-gradient(90deg, ${color}, ${color}88)` }} initial={{ width: 0 }} whileInView={{ width: `${value / max * 100}%` }} viewport={{ once: true }} transition={{ duration: 1.4, delay, ease: "easeOut" }} /></div></div>;
const SH = ({ tag, title, desc }: {tag: string;title: string;desc?: string;}) => <motion.div {...fadeUp} className="mb-12"><span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-3 block">{tag}</span><h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>{desc && <p className="text-muted-foreground max-w-3xl">{desc}</p>}</motion.div>;
const RC = ({ value, color, size = 100, label }: {value: number;color: string;size?: number;label: string;}) => {const r = (size - 10) / 2;const c = 2 * Math.PI * r;return <div className="flex flex-col items-center gap-2"><div className="relative"><svg width={size} height={size} className="-rotate-90"><circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="hsl(var(--muted))" strokeWidth="5" /><motion.circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth="5" strokeLinecap="round" strokeDasharray={c} initial={{ strokeDashoffset: c }} whileInView={{ strokeDashoffset: c - value / 100 * c }} viewport={{ once: true }} transition={{ duration: 1.8, ease: "easeOut" }} /></svg><div className="absolute inset-0 flex items-center justify-center text-sm font-bold" style={{ color }}>{value}%</div></div><span className="text-xs text-muted-foreground text-center">{label}</span></div>;};

export const FinanceMegaSections = () =>
<>
    <CB g="bg-gradient-to-br from-[#0a0d1a] via-[#101828] to-[#0a0d1a]">
      <motion.div {...fadeUp} className="text-center mb-16">
        <span className="text-primary text-xs font-semibold tracking-[0.4em] uppercase mb-4 block">Section I — Financial Revolution</span>
        <h2 className="text-5xl md:text-7xl font-bold mb-6">Inclusive<br />Finance</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">80% financial inclusion — bringing banking to 30 million citizens through mobile, Islamic finance, and digital payments.</p>
      </motion.div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <MC icon={Landmark} value="80%" label="Financial Inclusion" sub="Target" color="#3b82f6" i={0} />
        <MC icon={DollarSign} value="$5B" label="Credit Target" sub="Lending capacity" color="#22c55e" i={1} />
        <MC icon={Users} value="10M" label="Mobile Banking" sub="Users" color="#f59e0b" i={2} />
        <MC icon={Building2} value="500+" label="Bank Branches" sub="Nationwide" color="#8b5cf6" i={3} />
      </div>
    </CB>

    {[
  { sector: "Commercial Banking", share: "30%", inv: "$1.5B", branches: "200", col: "#3b82f6" },
  { sector: "Mobile/Digital Banking", share: "22%", inv: "$800M", branches: "Virtual", col: "#22c55e" },
  { sector: "Islamic Finance", share: "18%", inv: "$1B", branches: "200", col: "#f59e0b" },
  { sector: "Microfinance", share: "12%", inv: "$500M", branches: "500", col: "#ef4444" },
  { sector: "Insurance", share: "10%", inv: "$300M", branches: "100", col: "#8b5cf6" },
  { sector: "Capital Markets", share: "8%", inv: "$200M", branches: "1", col: "#06b6d4" },
  { sector: "Remittances", share: "N/A", inv: "$3B", branches: "1,000", col: "#14b8a6" },
  { sector: "Credit Bureau", share: "N/A", inv: "$100M", branches: "34", col: "#ec4899" },
  { sector: "Fintech Startups", share: "N/A", inv: "$200M", branches: "500", col: "#84cc16" }].
  map((s, idx) =>
  <CB key={s.sector} g="bg-gradient-to-br from-[#0d0d1a] via-[#151528] to-[#0d0d1a]">
        <SH tag={`Section ${2 + idx} — ${s.sector}`} title={s.sector} desc={`Market share: ${s.share}. Investment: ${s.inv}. Distribution: ${s.branches} points.`} />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <MC icon={Landmark} value={s.share} label="Market Share" sub={s.sector} color={s.col} i={0} />
          <MC icon={DollarSign} value={s.inv} label="Investment" sub="Total" color="#22c55e" i={1} />
          <MC icon={Building2} value={s.branches} label="Distribution" sub="Points" color="#3b82f6" i={2} />
          <MC icon={Target} value="100%" label="Compliance" sub="Regulated" color="#f59e0b" i={3} />
        </div>
      </CB>
  )}

    {[
  { prov: "Kabul", banks: "120", accounts: "3M", inclusion: 85, col: "#3b82f6" },
  { prov: "Herat", banks: "60", accounts: "1.5M", inclusion: 70, col: "#22c55e" },
  { prov: "Balkh", banks: "45", accounts: "1M", inclusion: 65, col: "#f59e0b" },
  { prov: "Nangarhar", banks: "35", accounts: "800K", inclusion: 55, col: "#ef4444" },
  { prov: "Kandahar", banks: "30", accounts: "700K", inclusion: 50, col: "#8b5cf6" },
  { prov: "Kunduz", banks: "20", accounts: "500K", inclusion: 45, col: "#06b6d4" },
  { prov: "Bamyan", banks: "10", accounts: "200K", inclusion: 60, col: "#14b8a6" },
  { prov: "Helmand", banks: "15", accounts: "400K", inclusion: 40, col: "#ec4899" },
  { prov: "Badakhshan", banks: "8", accounts: "150K", inclusion: 35, col: "#84cc16" },
  { prov: "Paktya", banks: "12", accounts: "300K", inclusion: 42, col: "#f97316" }].
  map((p, idx) =>
  <CB key={p.prov} g="bg-gradient-to-br from-[#0a1a0a] via-[#0d2810] to-[#0a1a0a]">
        <SH tag={`Section ${11 + idx} — ${p.prov}`} title={`${p.prov} Finance`} desc={`${p.banks} banks. ${p.accounts} accounts.`} />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <MC icon={Landmark} value={p.banks} label="Banks" sub={p.prov} color={p.col} i={0} />
          <MC icon={Users} value={p.accounts} label="Accounts" sub="Active" color="#22c55e" i={1} />
          <RC value={p.inclusion} color={p.col} label="Inclusion %" />
          <RC value={p.inclusion + 10} color="#3b82f6" label="Mobile Banking" />
        </div>
      </CB>
  )}

    {[
  { yr: "2026", focus: "Banking reform act and digital payment infrastructure", target: "5M mobile users", col: "#3b82f6" },
  { yr: "2027", focus: "Islamic banking expansion to 200 branches", target: "$1B Islamic deposits", col: "#22c55e" },
  { yr: "2028", focus: "National digital payment system live", target: "10M transactions/month", col: "#f59e0b" },
  { yr: "2029", focus: "Microfinance revolution reaches 1M borrowers", target: "$500M loans disbursed", col: "#ef4444" },
  { yr: "2030", focus: "Afghanistan Stock Exchange opens", target: "50 listed companies", col: "#8b5cf6" },
  { yr: "2031", focus: "Insurance market launch", target: "5M insured citizens", col: "#06b6d4" },
  { yr: "2032", focus: "Credit bureau covering all borrowers", target: "10M credit profiles", col: "#14b8a6" },
  { yr: "2033", focus: "International banking partnerships", target: "SWIFT full integration", col: "#ec4899" },
  { yr: "2034", focus: "Fintech hub established in Kabul", target: "500 fintech startups", col: "#84cc16" },
  { yr: "2035", focus: "Vision — 80% financial inclusion", target: "$5B credit market", col: "#f97316" }].
  map((y, idx) =>
  <CB key={y.yr} g="bg-gradient-to-br from-[#0a1a0a] via-[#0d2810] to-[#0a1a0a]">
        <SH tag={`Section ${21 + idx} — Year ${y.yr}`} title={`Finance ${y.yr}`} desc={y.focus} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div {...fadeUp} className="bg-card/60 border border-border rounded-xl p-6"><div className="text-3xl font-bold mb-2" style={{ color: y.col }}>{y.yr}</div><p className="text-muted-foreground text-sm">{y.focus}</p></motion.div>
          
        </div>
      </CB>
  )}

    {[
  { product: "Savings Accounts", penetration: 60, growth: 25, col: "#3b82f6" },
  { product: "Mobile Wallets", penetration: 45, growth: 80, col: "#22c55e" },
  { product: "Microloans", penetration: 30, growth: 50, col: "#f59e0b" },
  { product: "Islamic Bonds (Sukuk)", penetration: 15, growth: 90, col: "#8b5cf6" },
  { product: "Crop Insurance", penetration: 10, growth: 120, col: "#ef4444" },
  { product: "SME Lending", penetration: 20, growth: 60, col: "#06b6d4" },
  { product: "Mortgage Finance", penetration: 5, growth: 200, col: "#ec4899" },
  { product: "Trade Finance", penetration: 25, growth: 40, col: "#14b8a6" },
  { product: "Pension Funds", penetration: 8, growth: 150, col: "#84cc16" },
  { product: "Venture Capital", penetration: 3, growth: 300, col: "#f97316" }].
  map((p, idx) =>
  <CB key={p.product} g="bg-gradient-to-br from-[#0d0d1a] via-[#151528] to-[#0d0d1a]">
        <SH tag={`Section ${31 + idx} — ${p.product}`} title={p.product} desc={`Penetration: ${p.penetration}%. Growth potential: ${p.growth}%.`} />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <MC icon={TrendingUp} value={`${p.penetration}%`} label="Penetration" sub="Current" color={p.col} i={0} />
          <MC icon={Rocket} value={`${p.growth}%`} label="Growth Rate" sub="Projected" color="#22c55e" i={1} />
          <RC value={p.penetration} color={p.col} label="Market Share" />
          <RC value={Math.min(p.penetration + 30, 100)} color="#3b82f6" label="2035 Target" />
        </div>
      </CB>
  )}

    <CB g="bg-gradient-to-br from-[#1a0a05] via-[#280d08] to-[#1a0a05]">
      <SH tag="Sections XLI-XLV — Regulatory Framework" title="Financial Regulation" desc="Building world-class regulatory infrastructure for market stability." />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <MC icon={Shield} value="100%" label="AML Compliance" sub="Anti-money laundering" color="#ef4444" i={0} />
        <MC icon={Scale} value="100%" label="Basel III" sub="Capital adequacy" color="#3b82f6" i={1} />
        <MC icon={Eye} value="24/7" label="Monitoring" sub="Real-time" color="#22c55e" i={2} />
        <MC icon={Database} value="10M" label="KYC Records" sub="Digital identity" color="#8b5cf6" i={3} />
      </div>
      <div className="space-y-3">
        <PB label="AML/CFT Framework" value={90} max={100} color="#ef4444" delay={0} />
        <PB label="Banking Supervision" value={85} max={100} color="#3b82f6" delay={0.1} />
        <PB label="Consumer Protection" value={70} max={100} color="#22c55e" delay={0.2} />
        <PB label="Digital Regulation" value={60} max={100} color="#f59e0b" delay={0.3} />
        <PB label="Insurance Regulation" value={55} max={100} color="#8b5cf6" delay={0.4} />
      </div>
    </CB>

    <CB g="bg-gradient-to-br from-[#050d1a] via-[#081528] to-[#050d1a]">
      <SH tag="Sections XLVI-L — Islamic Finance" title="Islamic Banking Excellence" desc="Sharia-compliant financial products serving 15 million citizens." />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <MC icon={Landmark} value="$2B" label="Islamic Assets" sub="Total" color="#f59e0b" i={0} />
        <MC icon={Users} value="15M" label="Customers" sub="Sharia banking" color="#22c55e" i={1} />
        <MC icon={Building2} value="200" label="Branches" sub="Islamic banks" color="#3b82f6" i={2} />
        <MC icon={Award} value="AAA" label="Sharia Rating" sub="Compliance" color="#8b5cf6" i={3} />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        <RC value={95} color="#f59e0b" label="Murabaha" />
        <RC value={80} color="#22c55e" label="Ijara" />
        <RC value={70} color="#3b82f6" label="Sukuk" />
        <RC value={60} color="#8b5cf6" label="Takaful" />
        <RC value={50} color="#ef4444" label="Musharaka" />
      </div>
    </CB>

    <CB g="bg-gradient-to-br from-[#0a0a1a] via-[#0d0d28] to-[#0a0a1a]">
      <SH tag="Sections LI-LV — Digital Payments" title="Payment Revolution" desc="From cash economy to digital-first — 50M transactions per month." />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <MC icon={Cpu} value="50M" label="Monthly Txns" sub="Digital" color="#8b5cf6" i={0} />
        <MC icon={Signal} value="99.9%" label="Uptime" sub="Payment network" color="#22c55e" i={1} />
        <MC icon={Zap} value="<2s" label="Processing" sub="Transaction speed" color="#f59e0b" i={2} />
        <MC icon={Globe} value="20+" label="Currencies" sub="Supported" color="#3b82f6" i={3} />
      </div>
      <div className="space-y-3">
        <PB label="QR Code Payments" value={75} max={100} color="#8b5cf6" delay={0} />
        <PB label="P2P Transfers" value={85} max={100} color="#22c55e" delay={0.1} />
        <PB label="Bill Payments" value={70} max={100} color="#f59e0b" delay={0.2} />
        <PB label="Merchant Payments" value={60} max={100} color="#3b82f6" delay={0.3} />
        <PB label="Cross-border" value={45} max={100} color="#ef4444" delay={0.4} />
      </div>
    </CB>

    <CB g="bg-gradient-to-br from-[#1a050d] via-[#280815] to-[#1a050d]">
      <SH tag="Sections LVI-LX — Partnerships" title="Global Financial Alliances" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
      { n: "World Bank", r: "Financial Infra", v: "$1B", c: "#3b82f6" }, { n: "IMF", r: "Monetary Policy", v: "$500M", c: "#22c55e" },
      { n: "ADB", r: "SME Finance", v: "$300M", c: "#f59e0b" }, { n: "IFC", r: "Private Sector", v: "$400M", c: "#8b5cf6" },
      { n: "IsDB", r: "Islamic Finance", v: "$500M", c: "#ef4444" }, { n: "USAID", r: "Inclusion", v: "$200M", c: "#06b6d4" },
      { n: "GIZ", r: "Microfinance", v: "$100M", c: "#14b8a6" }, { n: "Mastercard", r: "Digital Pay", v: "$50M", c: "#ec4899" }].
      map((p, i) =>
      <motion.div key={p.n} {...stagger(i)} className="bg-card/60 border border-border rounded-xl p-4">
            <div className="text-lg font-bold" style={{ color: p.c }}>{p.n}</div><div className="text-xs text-muted-foreground">{p.r}</div><div className="text-sm font-semibold mt-1">{p.v}</div>
          </motion.div>
      )}
      </div>
    </CB>

    <CB g="bg-gradient-to-br from-[#0d0d1a] via-[#151528] to-[#0d0d1a]">
      <SH tag="Sections LXI-LXV — Financial Metrics" title="Financial Inclusion Scorecard" />
      <div className="space-y-3 mb-8">
        <PB label="Bank Account Access" value={80} max={100} color="#3b82f6" delay={0} />
        <PB label="Mobile Banking Adoption" value={65} max={100} color="#22c55e" delay={0.1} />
        <PB label="Islamic Finance Access" value={50} max={100} color="#f59e0b" delay={0.2} />
        <PB label="Insurance Coverage" value={30} max={100} color="#8b5cf6" delay={0.3} />
        <PB label="Credit Access" value={45} max={100} color="#ef4444" delay={0.4} />
        <PB label="Financial Literacy" value={55} max={100} color="#06b6d4" delay={0.5} />
        <PB label="Digital Payments" value={70} max={100} color="#14b8a6" delay={0.6} />
        <PB label="Remittance Efficiency" value={75} max={100} color="#ec4899" delay={0.7} />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        <RC value={80} color="#3b82f6" label="Inclusion" />
        <RC value={65} color="#22c55e" label="Digital" />
        <RC value={50} color="#f59e0b" label="Islamic" />
        <RC value={70} color="#8b5cf6" label="AML/CFT" />
        <RC value={45} color="#ef4444" label="Capital Mkts" />
      </div>
    </CB>

    {[
  { zone: "Kabul Financial District", gdp: "$2B", banks: "80", col: "#3b82f6" },
  { zone: "Herat Trade Finance Hub", gdp: "$800M", banks: "40", col: "#22c55e" },
  { zone: "Balkh Commercial Zone", gdp: "$600M", banks: "30", col: "#f59e0b" },
  { zone: "Kandahar Business Centre", gdp: "$400M", banks: "20", col: "#8b5cf6" },
  { zone: "Nangarhar Border Finance", gdp: "$500M", banks: "25", col: "#ef4444" }].
  map((z, idx) =>
  <CB key={z.zone} g="bg-gradient-to-br from-[#0a0d1a] via-[#101828] to-[#0a0d1a]">
        <SH tag={`Section ${66 + idx} — ${z.zone}`} title={z.zone} desc={`GDP contribution: ${z.gdp}. Banks: ${z.banks}.`} />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <MC icon={DollarSign} value={z.gdp} label="GDP Share" sub={z.zone} color={z.col} i={0} />
          <MC icon={Landmark} value={z.banks} label="Banks" sub="Active" color="#22c55e" i={1} />
          <MC icon={Users} value="500K+" label="Customers" sub="Served" color="#3b82f6" i={2} />
          <MC icon={TrendingUp} value="25%" label="Growth" sub="Annual" color="#f59e0b" i={3} />
        </div>
      </CB>
  )}

    <CB g="bg-gradient-to-br from-[#0a0d1a] via-[#101828] to-[#0a0d1a]">
      <motion.div {...fadeUp} className="text-center mb-16">
        <span className="text-primary text-xs font-semibold tracking-[0.4em] uppercase mb-4 block">Sections LXXI-C — Grand Vision</span>
        <h2 className="text-5xl md:text-7xl font-bold mb-6">Finance<br />2040 Vision</h2>
      </motion.div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <MC icon={Landmark} value="80%" label="Inclusion" sub="Financial access" color="#3b82f6" i={0} />
        <MC icon={DollarSign} value="$5B" label="Credit Market" sub="Total lending" color="#22c55e" i={1} />
        <MC icon={Users} value="30M" label="Banked Citizens" sub="Digital + branch" color="#f59e0b" i={2} />
        <MC icon={Award} value="A" label="Credit Rating" sub="Investment grade" color="#8b5cf6" i={3} />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        <RC value={80} color="#3b82f6" label="Inclusion" />
        <RC value={90} color="#22c55e" label="Digital Pay" />
        <RC value={70} color="#f59e0b" label="Islamic" />
        <RC value={85} color="#8b5cf6" label="Regulation" />
        <RC value={75} color="#ef4444" label="Stability" />
      </div>
    </CB>
  </>;