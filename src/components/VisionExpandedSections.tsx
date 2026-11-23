import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrendingUp, Users, Building2, Rocket, Globe, Heart, Award, Target,
  Zap, Factory, GraduationCap, Wifi, Shield, Landmark, Ship,
  Plane, Train, Droplets, Sun, Wind, Leaf, Mountain, Gem,
  ChevronDown, CheckCircle2, ArrowRight, BarChart3, PieChart,
  Activity, Layers, CircleDot, Cpu, Database, Network,
  BrainCircuit, Lightbulb, Handshake, Scale, Crown, Sparkles,
  Timer, MapPin, Flag, Star } from
"lucide-react";

/* ═══════════════════════════════════════════════════
   ANIMATED CIRCULAR PROGRESS
   ═══════════════════════════════════════════════════ */
const CircularProgress = ({ value, max, label, color, size = 120 }: {value: number;max: number;label: string;color: string;size?: number;}) => {
  const pct = value / max * 100;
  const r = (size - 12) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - pct / 100 * circ;
  return (
    <div className="flex flex-col items-center gap-2">
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="hsl(var(--muted))" strokeWidth="6" />
        <motion.circle
          cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth="6" strokeLinecap="round"
          strokeDasharray={circ} initial={{ strokeDashoffset: circ }}
          whileInView={{ strokeDashoffset: offset }} viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }} />
        
      </svg>
      <div className="absolute flex flex-col items-center justify-center" style={{ width: size, height: size }}>
        <span className="text-xl font-bold" style={{ color }}>{value}%</span>
      </div>
      <span className="text-xs text-muted-foreground text-center mt-1">{label}</span>
    </div>);

};

/* ═══════════════════════════════════════════════════
   ANIMATED BAR CHART
   ═══════════════════════════════════════════════════ */
const AnimatedBar = ({ label, value, max, color, delay = 0 }: {label: string;value: number;max: number;color: string;delay?: number;}) =>
<div className="space-y-1.5">
    <div className="flex justify-between text-xs">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-semibold" style={{ color }}>{value}%</span>
    </div>
    <div className="h-2.5 bg-muted rounded-full overflow-hidden">
      <motion.div
      className="h-full rounded-full"
      style={{ background: `linear-gradient(90deg, ${color}, ${color}88)` }}
      initial={{ width: 0 }}
      whileInView={{ width: `${value / max * 100}%` }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, delay, ease: "easeOut" }} />
    
    </div>
  </div>;


/* ═══════════════════════════════════════════════════
   COUNTER ANIMATION
   ═══════════════════════════════════════════════════ */
const AnimatedCounter = ({ target, prefix = "", suffix = "", label, icon: Icon, color }: {target: string;prefix?: string;suffix?: string;label: string;icon: any;color: string;}) =>
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="relative group">
  
    <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-500 h-full">
      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: `${color}15` }}>
        <Icon className="w-6 h-6" style={{ color }} />
      </div>
      <div className="text-3xl md:text-4xl font-bold mb-1" style={{ color }}>{prefix}{target}{suffix}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
      <div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: `linear-gradient(90deg, ${color}, transparent)` }} />
    </div>
  </motion.div>;


/* ═══════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════ */
const nationalKPIs = [
{ target: "8", prefix: "", suffix: "%", label: "GDP Growth Target", icon: TrendingUp, color: "#22c55e" },
{ target: "2M+", label: "Jobs Created", icon: Users, color: "#3b82f6" },
{ target: "$75B+", label: "Infrastructure Investment", icon: Building2, color: "#f59e0b" },
{ target: "15GW", label: "Energy Capacity", icon: Zap, color: "#ef4444" },
{ target: "$20B", label: "Export Revenue", icon: Ship, color: "#8b5cf6" },
{ target: "95%", label: "Financial Inclusion", icon: Landmark, color: "#06b6d4" },
{ target: "100%", label: "Digital Connectivity", icon: Wifi, color: "#ec4899" },
{ target: "34", label: "Provinces Connected", icon: MapPin, color: "#f97316" }];


const sectorBreakdown = [
{ sector: "Mining & Minerals", allocation: 22, color: "#f59e0b", icon: Gem, projects: 850, investment: "$16.5B" },
{ sector: "Energy & Power", allocation: 18, color: "#ef4444", icon: Zap, projects: 420, investment: "$13.5B" },
{ sector: "Infrastructure", allocation: 20, color: "#3b82f6", icon: Building2, projects: 1200, investment: "$15B" },
{ sector: "Agriculture", allocation: 12, color: "#22c55e", icon: Leaf, projects: 650, investment: "$9B" },
{ sector: "Technology", allocation: 10, color: "#8b5cf6", icon: Cpu, projects: 380, investment: "$7.5B" },
{ sector: "Education", allocation: 8, color: "#06b6d4", icon: GraduationCap, projects: 290, investment: "$6B" },
{ sector: "Healthcare", allocation: 6, color: "#ec4899", icon: Heart, projects: 210, investment: "$4.5B" },
{ sector: "Tourism", allocation: 4, color: "#f97316", icon: Mountain, projects: 180, investment: "$3B" }];


const developmentPhases = [
{
  year: "2026", phase: "FOUNDATION", title: "Launch & Mobilisation", icon: Rocket, color: "#3b82f6",
  description: "Establishment of institutional frameworks, regulatory reforms, and initial infrastructure investments across all 34 provinces.",
  milestones: ["National Development Council established", "Investment Protection Framework enacted", "50 flagship projects launched", "E-governance platform operational"],
  stats: { investment: "$5B", jobs: "50K", projects: "150" }
},
{
  year: "2028", phase: "ACCELERATION", title: "Infrastructure Surge", icon: Building2, color: "#f59e0b",
  description: "Massive infrastructure development connecting provinces with highways, railways, energy grids, and digital networks.",
  milestones: ["1,500km highway network completed", "National power grid interconnected", "5 industrial zones operational", "Fibre optic backbone deployed"],
  stats: { investment: "$15B", jobs: "250K", projects: "500" }
},
{
  year: "2030", phase: "TRANSFORMATION", title: "Industrial Growth", icon: Factory, color: "#22c55e",
  description: "Manufacturing and industrial sectors reach critical mass with export-oriented production and value-added processing.",
  milestones: ["Manufacturing GDP share reaches 20%", "10 Special Economic Zones active", "Export processing centres operational", "Skills training for 500K workers"],
  stats: { investment: "$25B", jobs: "500K", projects: "1,000" }
},
{
  year: "2032", phase: "INTEGRATION", title: "Regional Connectivity", icon: Globe, color: "#8b5cf6",
  description: "Afghanistan emerges as Central Asian trade hub with rail links, energy exports, and transit trade agreements.",
  milestones: ["Railway network connects 5 countries", "Energy exports to neighbours begin", "$10B annual transit trade", "Regional logistics hub status achieved"],
  stats: { investment: "$35B", jobs: "750K", projects: "1,500" }
},
{
  year: "2035", phase: "INNOVATION", title: "Knowledge Economy", icon: BrainCircuit, color: "#06b6d4",
  description: "Higher education excellence, research institutions, and innovation ecosystems driving knowledge-based growth.",
  milestones: ["10 world-class universities established", "National research centres operational", "AI and tech exports begin", "Healthcare tourism destination"],
  stats: { investment: "$45B", jobs: "1M", projects: "2,000" }
},
{
  year: "2038", phase: "PROSPERITY", title: "Inclusive Growth", icon: Heart, color: "#ec4899",
  description: "Universal access to services, reduced inequality, and sustainable environmental practices across all regions.",
  milestones: ["100% electricity access achieved", "Universal healthcare coverage", "Middle-income country status", "Environmental sustainability targets met"],
  stats: { investment: "$60B", jobs: "1.5M", projects: "3,000" }
},
{
  year: "2040", phase: "VISION ACHIEVED", title: "A Prosperous Afghanistan", icon: Star, color: "#f59e0b",
  description: "Self-reliant, innovative, and globally connected nation with dignity and opportunity for every citizen.",
  milestones: ["Upper middle-income economy", "Regional economic leader", "Sustainable development model", "Global competitiveness achieved"],
  stats: { investment: "$75B+", jobs: "2M+", projects: "5,000+" }
}];


const transformationMetrics = [
{ label: "Poverty Reduction", current: 54, target: 12, color: "#ef4444" },
{ label: "Literacy Rate", current: 43, target: 95, color: "#3b82f6" },
{ label: "Electricity Access", current: 35, target: 100, color: "#f59e0b" },
{ label: "Internet Penetration", current: 22, target: 90, color: "#8b5cf6" },
{ label: "Healthcare Coverage", current: 40, target: 100, color: "#ec4899" },
{ label: "Clean Water Access", current: 55, target: 100, color: "#06b6d4" },
{ label: "Employment Rate", current: 45, target: 85, color: "#22c55e" },
{ label: "Urban Development", current: 26, target: 60, color: "#f97316" }];


const investmentPipeline = [
{ category: "Domestic Public", amount: "$15B", pct: 20, color: "#3b82f6", icon: Landmark },
{ category: "Foreign Direct Investment", amount: "$25B", pct: 33, color: "#22c55e", icon: Globe },
{ category: "International Aid", amount: "$10B", pct: 13, color: "#f59e0b", icon: Handshake },
{ category: "Private Sector", amount: "$18B", pct: 24, color: "#8b5cf6", icon: Building2 },
{ category: "Public-Private Partnership", amount: "$7B", pct: 10, color: "#ec4899", icon: Network }];


const flagshipMegaProjects = [
{ name: "Trans-Afghan Railway", value: "$8.5B", sector: "Transport", status: "Planning", icon: Train, color: "#3b82f6" },
{ name: "Aynak Copper Complex", value: "$5.2B", sector: "Mining", status: "Phase 1", icon: Gem, color: "#f59e0b" },
{ name: "Kabul Smart City", value: "$4.8B", sector: "Urban Dev", status: "Design", icon: Cpu, color: "#8b5cf6" },
{ name: "National Solar Grid", value: "$3.5B", sector: "Energy", status: "Bidding", icon: Sun, color: "#ef4444" },
{ name: "Helmand Agricultural Hub", value: "$2.8B", sector: "Agriculture", status: "Phase 1", icon: Leaf, color: "#22c55e" },
{ name: "National Fibre Network", value: "$2.2B", sector: "Digital", status: "Building", icon: Wifi, color: "#06b6d4" },
{ name: "Herat Industrial Zone", value: "$1.9B", sector: "Industry", status: "Active", icon: Factory, color: "#f97316" },
{ name: "Bamyan Tourism Complex", value: "$1.5B", sector: "Tourism", status: "Planning", icon: Mountain, color: "#ec4899" }];


const provincialClusters = [
{ region: "Central", provinces: ["Kabul", "Parwan", "Kapisa", "Panjshir", "Wardak", "Logar"], focus: "Technology & Services Hub", investment: "$18B", color: "#3b82f6" },
{ region: "Western", provinces: ["Herat", "Farah", "Badghis", "Ghor"], focus: "Trade & Manufacturing", investment: "$12B", color: "#8b5cf6" },
{ region: "Southern", provinces: ["Kandahar", "Helmand", "Zabul", "Uruzgan", "Nimroz"], focus: "Agriculture & Mining", investment: "$14B", color: "#22c55e" },
{ region: "Eastern", provinces: ["Nangarhar", "Laghman", "Kunar", "Nuristan"], focus: "Energy & Gemstones", investment: "$8B", color: "#f59e0b" },
{ region: "Northern", provinces: ["Balkh", "Jowzjan", "Sar-e Pol", "Faryab", "Samangan"], focus: "Gas & Minerals", investment: "$11B", color: "#ef4444" },
{ region: "Northeastern", provinces: ["Badakhshan", "Takhar", "Kunduz", "Baghlan"], focus: "Mining & Tourism", investment: "$12B", color: "#06b6d4" }];


const sdgAlignment = [
{ goal: "No Poverty", number: 1, progress: 35, color: "#e5243b" },
{ goal: "Zero Hunger", number: 2, progress: 40, color: "#DDA63A" },
{ goal: "Good Health", number: 3, progress: 45, color: "#4C9F38" },
{ goal: "Quality Education", number: 4, progress: 50, color: "#C5192D" },
{ goal: "Clean Water", number: 6, progress: 55, color: "#26BDE2" },
{ goal: "Clean Energy", number: 7, progress: 30, color: "#FCC30B" },
{ goal: "Decent Work", number: 8, progress: 42, color: "#A21942" },
{ goal: "Industry", number: 9, progress: 28, color: "#FD6925" },
{ goal: "Reduced Inequality", number: 10, progress: 33, color: "#DD1367" },
{ goal: "Sustainable Cities", number: 11, progress: 25, color: "#FD9D24" },
{ goal: "Climate Action", number: 13, progress: 20, color: "#3F7E44" },
{ goal: "Partnerships", number: 17, progress: 48, color: "#19486A" }];


/* ═══════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════ */
export const VisionExpandedSections = () => {
  const [expandedPhase, setExpandedPhase] = useState<number | null>(0);
  const [activeCluster, setActiveCluster] = useState(0);

  return (
    <>
      {/* ═══ 1. MEGA KPI DASHBOARD ═══ */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-3 block">National Targets</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-3">Vision 2040 Dashboard</h2>
            <p className="text-muted-foreground mb-10 max-w-2xl">Key performance indicators driving Afghanistan's transformation — from current state to 2040 targets.</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {nationalKPIs.map((kpi, i) =>
            <AnimatedCounter key={i} {...kpi} />
            )}
          </div>
        </div>
      </section>

      {/* ═══ 2. SECTOR INVESTMENT BREAKDOWN ═══ */}
      <section className="py-20 px-6 lg:px-12 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-3 block">Investment Allocation</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-3">Sector Investment Breakdown</h2>
            <p className="text-muted-foreground mb-12 max-w-2xl">$75B+ total investment distributed across eight strategic sectors driving economic diversification.</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Visual bar chart */}
            <div className="space-y-5">
              {sectorBreakdown.map((s, i) =>
              <motion.div key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: `${s.color}20` }}>
                      <s.icon className="w-4 h-4" style={{ color: s.color }} />
                    </div>
                    <span className="font-semibold text-sm flex-1">{s.sector}</span>
                    <span className="text-xs text-muted-foreground">{s.projects} projects</span>
                    <span className="font-bold text-sm" style={{ color: s.color }}>{s.investment}</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden ml-12">
                    <motion.div
                    className="h-full rounded-full"
                    style={{ background: `linear-gradient(90deg, ${s.color}, ${s.color}66)` }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.allocation * 4.5}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.08, ease: "easeOut" }} />
                  
                  </div>
                </motion.div>
              )}
            </div>

            {/* Donut visual */}
            <div className="flex flex-col items-center justify-center">
              <div className="relative">
                <svg width="280" height="280" viewBox="0 0 280 280">
                  {sectorBreakdown.reduce((acc, s, i) => {
                    const r = 120;
                    const circ = 2 * Math.PI * r;
                    const prevOffset = acc.offset;
                    const segLen = s.allocation / 100 * circ;
                    acc.elements.push(
                      <motion.circle
                        key={i} cx="140" cy="140" r={r} fill="none" stroke={s.color} strokeWidth="24"
                        strokeDasharray={`${segLen} ${circ - segLen}`} strokeDashoffset={-prevOffset}
                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="-rotate-90 origin-center" />

                    );
                    acc.offset += segLen;
                    return acc;
                  }, { elements: [] as JSX.Element[], offset: 0 }).elements}
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold text-primary">$75B+</span>
                  <span className="text-xs text-muted-foreground">Total Investment</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-x-6 gap-y-2 mt-8">
                {sectorBreakdown.map((s, i) =>
                <div key={i} className="flex items-center gap-2 text-xs">
                    <div className="w-3 h-3 rounded-full" style={{ background: s.color }} />
                    <span className="text-muted-foreground">{s.sector}</span>
                    <span className="font-bold ml-auto">{s.allocation}%</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 3. IMMERSIVE DEVELOPMENT TIMELINE ═══ */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-3 block">Development Roadmap</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-3">Vision 2026–2040</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">Afghanistan's transformative journey from economic reform to national prosperity — a comprehensive development programme spanning infrastructure, industry, innovation, and inclusive growth.</p>
          </motion.div>

          {/* Animated stats row */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            {[
            { icon: TrendingUp, label: "GDP Growth Target", from: "3%", to: "8%", color: "#22c55e" },
            { icon: Users, label: "Jobs Created", from: "50K", to: "2M+", color: "#3b82f6" },
            { icon: Building2, label: "Infrastructure Investment", from: "$5B", to: "$75B+", color: "#f59e0b" },
            { icon: Zap, label: "Energy Capacity", from: "1GW", to: "15GW", color: "#ef4444" },
            { icon: Globe, label: "Export Revenue", from: "$1B", to: "$20B", color: "#8b5cf6" },
            { icon: Landmark, label: "Financial Inclusion", from: "30%", to: "95%", color: "#06b6d4" }].
            map((item, i) =>
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card border border-border rounded-xl p-4 text-center hover:border-primary/30 transition-all">
              
                <item.icon className="w-6 h-6 mx-auto mb-2" style={{ color: item.color }} />
                <div className="text-xs text-muted-foreground mb-2">{item.label}</div>
                <div className="flex items-center justify-center gap-1.5">
                  <span className="text-sm text-muted-foreground">{item.from}</span>
                  <ArrowRight className="w-3 h-3 text-muted-foreground" />
                  <span className="text-lg font-bold" style={{ color: item.color }}>{item.to}</span>
                </div>
              </motion.div>
            )}
          </div>

          {/* Interactive Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/20 hidden lg:block" />

            {developmentPhases.map((phase, i) =>
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex flex-col lg:flex-row items-center gap-8 mb-16 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
              
                {/* Content card */}
                <div className={`flex-1 ${i % 2 === 0 ? "lg:pr-16" : "lg:pl-16"}`}>
                  <motion.div
                  className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 cursor-pointer"
                  onClick={() => setExpandedPhase(expandedPhase === i ? null : i)}
                  whileHover={{ y: -4 }}>
                  
                    {i === 0 &&
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-primary text-xs font-semibold mb-4">
                        <Timer className="w-3 h-3" /> Current Phase
                      </div>
                  }
                    <h3 className="text-2xl font-bold mb-2">{phase.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{phase.description}</p>

                    <AnimatePresence>
                      {expandedPhase === i &&
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                          <div className="space-y-2 mb-5 pt-2 border-t border-border">
                            {phase.milestones.map((m, j) =>
                        <div key={j} className="flex items-start gap-2 text-sm">
                                <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                                <span>{m}</span>
                              </div>
                        )}
                          </div>
                          <div className="grid grid-cols-3 gap-3 pt-3 border-t border-border">
                            {Object.entries(phase.stats).map(([key, val], j) =>
                        <div key={j} className="text-center">
                                <div className="text-lg font-bold" style={{ color: phase.color }}>{val}</div>
                                <div className="text-xs text-muted-foreground capitalize">{key}</div>
                              </div>
                        )}
                          </div>
                        </motion.div>
                    }
                    </AnimatePresence>

                    <div className="flex items-center gap-2 mt-3 text-xs text-muted-foreground">
                      <ChevronDown className={`w-4 h-4 transition-transform ${expandedPhase === i ? "rotate-180" : ""}`} />
                      {expandedPhase === i ? "Collapse" : "View milestones & targets"}
                    </div>
                  </motion.div>
                </div>

                {/* Center node */}
                <div className="relative z-10 flex flex-col items-center">
                  <motion.div
                  className="w-16 h-16 rounded-full flex items-center justify-center border-4 border-background shadow-lg"
                  style={{ background: `${phase.color}30`, borderColor: phase.color }}
                  whileHover={{ scale: 1.15 }}>
                  
                    <phase.icon className="w-7 h-7" style={{ color: phase.color }} />
                  </motion.div>
                  
                  <span className="text-[10px] font-semibold tracking-[0.2em] text-muted-foreground uppercase">{phase.phase}</span>
                </div>

                {/* Spacer for opposite side */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ═══ 4. TRANSFORMATION METRICS — BEFORE & AFTER ═══ */}
      <section className="py-20 px-6 lg:px-12 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-3 block">National Transformation</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-3">From Today to 2040</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Measurable progress across critical development indicators — current baseline versus 2040 targets.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {transformationMetrics.map((m, i) =>
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/30 transition-all">
              
                <div className="relative flex justify-center mb-4">
                  <CircularProgress value={m.target} max={100} label="" color={m.color} size={100} />
                </div>
                <h4 className="font-bold mb-2">{m.label}</h4>
                <div className="flex items-center justify-center gap-3 text-sm">
                  <div>
                    <span className="text-muted-foreground">Now: </span>
                    <span className="font-bold">{m.current}%</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-primary" />
                  <div>
                    <span className="text-muted-foreground">2040: </span>
                    <span className="font-bold" style={{ color: m.color }}>{m.target}%</span>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ═══ 5. INVESTMENT PIPELINE ═══ */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-3 block">Capital Strategy</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-3">Investment Pipeline</h2>
            <p className="text-muted-foreground mb-12 max-w-2xl">Multi-source capital strategy mobilising $75B+ through domestic, international, and private sector channels.</p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-4 mb-12">
            {investmentPipeline.map((item, i) =>
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/30 transition-all group">
              
                <div className="w-14 h-14 rounded-xl mx-auto flex items-center justify-center mb-4 transition-colors" style={{ background: `${item.color}15` }}>
                  <item.icon className="w-7 h-7" style={{ color: item.color }} />
                </div>
                <div className="text-2xl font-bold mb-1" style={{ color: item.color }}>{item.amount}</div>
                <div className="text-sm font-semibold mb-1">{item.category}</div>
                <div className="text-xs text-muted-foreground">{item.pct}% of total</div>
                <div className="h-1.5 bg-muted rounded-full mt-4 overflow-hidden">
                  <motion.div
                  className="h-full rounded-full"
                  style={{ background: item.color }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.pct * 3}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: i * 0.1 }} />
                
                </div>
              </motion.div>
            )}
          </div>

          {/* Stacked bar */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="bg-card border border-border rounded-2xl p-6">
            <h4 className="font-semibold mb-4 text-sm">Capital Allocation Overview</h4>
            <div className="h-10 rounded-full overflow-hidden flex">
              {investmentPipeline.map((item, i) =>
              <motion.div
                key={i}
                className="h-full flex items-center justify-center text-[10px] font-bold text-white"
                style={{ background: item.color }}
                initial={{ width: 0 }}
                whileInView={{ width: `${item.pct}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.15 }}>
                
                  {item.pct > 12 ? `${item.pct}%` : ""}
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ 6. FLAGSHIP MEGA PROJECTS ═══ */}
      <section className="py-20 px-6 lg:px-12 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-3 block">Transformative Projects</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-3">Flagship Mega Projects</h2>
            <p className="text-muted-foreground mb-12 max-w-2xl">Eight landmark projects forming the backbone of Afghanistan's economic transformation.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {flagshipMegaProjects.map((p, i) =>
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-card border border-border rounded-2xl p-5 hover:border-primary/40 transition-all group">
              
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${p.color}15` }}>
                    <p.icon className="w-6 h-6" style={{ color: p.color }} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full border" style={{ color: p.color, borderColor: `${p.color}40` }}>{p.status}</span>
                </div>
                <h4 className="font-bold mb-1 group-hover:text-primary transition-colors">{p.name}</h4>
                <div className="text-xs text-muted-foreground mb-3">{p.sector}</div>
                <div className="text-2xl font-bold" style={{ color: p.color }}>{p.value}</div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ═══ 7. PROVINCIAL ECONOMIC CLUSTERS ═══ */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-3 block">Regional Strategy</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-3">Provincial Economic Clusters</h2>
            <p className="text-muted-foreground mb-12 max-w-2xl">Six strategic regional clusters maximising comparative advantages across Afghanistan's 34 provinces.</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-4 mb-8">
            {provincialClusters.map((c, i) =>
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className={`bg-card border rounded-2xl p-6 cursor-pointer transition-all duration-300 ${activeCluster === i ? "border-primary shadow-lg shadow-primary/10" : "border-border hover:border-primary/30"}`}
              onClick={() => setActiveCluster(i)}>
              
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${c.color}15` }}>
                    <MapPin className="w-5 h-5" style={{ color: c.color }} />
                  </div>
                  <div>
                    <h4 className="font-bold">{c.region} Region</h4>
                    <div className="text-xs text-muted-foreground">{c.focus}</div>
                  </div>
                  <div className="ml-auto text-lg font-bold" style={{ color: c.color }}>{c.investment}</div>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {c.provinces.map((p, j) =>
                <span key={j} className="text-[10px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground">{p}</span>
                )}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ═══ 8. SDG ALIGNMENT GRID ═══ */}
      <section className="py-20 px-6 lg:px-12 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-3 block">Global Alignment</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-3">UN Sustainable Development Goals</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">NERPA's alignment with the UN SDGs — tracking progress towards global development benchmarks.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {sdgAlignment.map((sdg, i) =>
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="bg-card border border-border rounded-xl p-4 hover:border-primary/30 transition-all">
              
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold" style={{ background: sdg.color }}>
                    {sdg.number}
                  </div>
                  <span className="text-xs font-semibold">{sdg.goal}</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                  className="h-full rounded-full"
                  style={{ background: sdg.color }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${sdg.progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.05 }} />
                
                </div>
                <div className="text-right text-xs font-bold mt-1" style={{ color: sdg.color }}>{sdg.progress}%</div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ═══ 9. GOVERNANCE & IMPLEMENTATION FRAMEWORK ═══ */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-3 block">Execution Strategy</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-3">Implementation Architecture</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
            { title: "Policy & Regulation", desc: "Legislative frameworks, investment protection laws, and regulatory reform", icon: Scale, color: "#3b82f6", items: ["Investment Protection Act", "Mining Code Reform", "PPP Framework", "Tax Incentive Policy"] },
            { title: "Institutional Capacity", desc: "Building world-class institutions for programme delivery", icon: Landmark, color: "#22c55e", items: ["National Development Council", "Sector Coordination Units", "Provincial Development Boards", "Monitoring & Evaluation"] },
            { title: "Digital Infrastructure", desc: "E-governance, data systems, and digital service delivery", icon: Database, color: "#8b5cf6", items: ["E-Governance Platform", "National Data Centre", "Digital ID System", "Smart Procurement"] },
            { title: "International Partnerships", desc: "Strategic alliances with global development partners", icon: Handshake, color: "#f59e0b", items: ["Bilateral Agreements", "Multilateral Funds", "Technical Assistance", "Knowledge Transfer"] }].
            map((item, i) =>
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all">
              
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: `${item.color}15` }}>
                  <item.icon className="w-6 h-6" style={{ color: item.color }} />
                </div>
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-xs text-muted-foreground mb-4">{item.desc}</p>
                <div className="space-y-2">
                  {item.items.map((it, j) =>
                <div key={j} className="flex items-center gap-2 text-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>{it}</span>
                    </div>
                )}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ═══ 10. RISK MATRIX & MITIGATION ═══ */}
      <section className="py-20 px-6 lg:px-12 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-3 block">Risk Management</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-3">Strategic Risk Framework</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
            { risk: "Security & Stability", level: 85, mitigation: "Provincial security coordination, community engagement programmes, and international peacekeeping partnerships", color: "#ef4444" },
            { risk: "Climate & Environment", level: 70, mitigation: "Climate adaptation infrastructure, drought-resistant agriculture, and renewable energy transition", color: "#f59e0b" },
            { risk: "Capital Mobilisation", level: 60, mitigation: "Diversified funding sources, sovereign wealth fund establishment, and investor confidence building", color: "#3b82f6" },
            { risk: "Human Capital Gap", level: 75, mitigation: "Mass education programmes, vocational training centres, and international scholarship initiatives", color: "#8b5cf6" },
            { risk: "Institutional Capacity", level: 65, mitigation: "Civil service reform, merit-based recruitment, and international technical assistance", color: "#22c55e" },
            { risk: "Regional Geopolitics", level: 55, mitigation: "Multi-vector diplomacy, trade corridor partnerships, and regional cooperation frameworks", color: "#06b6d4" }].
            map((item, i) =>
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all">
              
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold">{item.risk}</h4>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">Severity</span>
                    <span className="text-sm font-bold" style={{ color: item.color }}>{item.level}%</span>
                  </div>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden mb-3">
                  <motion.div
                  className="h-full rounded-full"
                  style={{ background: `linear-gradient(90deg, ${item.color}, ${item.color}66)` }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: i * 0.08 }} />
                
                </div>
                <div className="flex items-start gap-2">
                  <Shield className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <p className="text-xs text-muted-foreground">{item.mitigation}</p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ═══ 11. SUCCESS INDICATORS DASHBOARD ═══ */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-3 block">Measuring Impact</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-3">Success Indicators</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Comprehensive performance monitoring across economic, social, and environmental dimensions.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
            {
              category: "Economic",
              icon: TrendingUp,
              color: "#22c55e",
              metrics: [
              { label: "GDP per Capita", value: "$2,500+", sub: "from $500" },
              { label: "Export Volume", value: "$20B", sub: "from $1B" },
              { label: "FDI Inflows", value: "$5B/yr", sub: "from $100M" },
              { label: "Tax Revenue", value: "18% GDP", sub: "from 7%" }]

            },
            {
              category: "Social",
              icon: Users,
              color: "#3b82f6",
              metrics: [
              { label: "Life Expectancy", value: "72 years", sub: "from 64" },
              { label: "Literacy Rate", value: "95%", sub: "from 43%" },
              { label: "Poverty Rate", value: "<12%", sub: "from 54%" },
              { label: "Gender Parity", value: "0.95", sub: "from 0.56" }]

            },
            {
              category: "Environmental",
              icon: Leaf,
              color: "#06b6d4",
              metrics: [
              { label: "Renewable Energy", value: "60%", sub: "from 5%" },
              { label: "Forest Cover", value: "5%", sub: "from 2.1%" },
              { label: "Clean Water", value: "100%", sub: "from 55%" },
              { label: "Air Quality", value: "WHO standard", sub: "from critical" }]

            }].
            map((cat, i) =>
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl overflow-hidden">
              
                <div className="p-5 border-b border-border flex items-center gap-3" style={{ background: `${cat.color}08` }}>
                  <cat.icon className="w-5 h-5" style={{ color: cat.color }} />
                  <h4 className="font-bold">{cat.category} Indicators</h4>
                </div>
                <div className="divide-y divide-border">
                  {cat.metrics.map((m, j) =>
                <div key={j} className="p-4 flex items-center justify-between">
                      <div>
                        <div className="text-sm font-semibold">{m.label}</div>
                        <div className="text-[10px] text-muted-foreground">{m.sub}</div>
                      </div>
                      <div className="text-lg font-bold" style={{ color: cat.color }}>{m.value}</div>
                    </div>
                )}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </>);

};