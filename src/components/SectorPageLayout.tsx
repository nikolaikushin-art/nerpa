import { motion } from "framer-motion";
import { LucideIcon, ArrowLeft, TrendingUp, DollarSign, Users, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCountUp } from "@/hooks/useCountUp";
import { TopNavigation } from "@/components/TopNavigation";
import {
  AreaChart, Area, BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from
"recharts";

interface SectorStat {
  value: string;
  label: string;
}

interface ChartData {
  name: string;
  [key: string]: string | number;
}

interface SectorProject {
  name: string;
  location: string;
  investment: string;
  status: string;
  timeline: string;
  description: string;
}

interface SectorPageProps {
  title: string;
  subtitle: string;
  heroImage: string;
  icon: LucideIcon;
  overview: string;
  stats: SectorStat[];
  historicalData: ChartData[];
  projectionData: ChartData[];
  investmentByRegion: ChartData[];
  sectorBreakdown: {name: string;value: number;color: string;}[];
  keyProjects: SectorProject[];
  opportunities: string[];
  challenges: string[];
  policies: string[];
  partners: string[];
  additionalSections?: React.ReactNode;
}

const CHART_COLORS = [
"hsl(142, 71%, 45%)", "hsl(217, 91%, 60%)", "hsl(47, 96%, 53%)",
"hsl(0, 84%, 60%)", "hsl(262, 83%, 58%)", "hsl(199, 89%, 48%)",
"hsl(25, 95%, 53%)", "hsl(330, 81%, 60%)"];

const AnimatedStat = ({ value, label, delay }: {value: string;label: string;delay: number;}) => {
  const { ref, display } = useCountUp(value);
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay }} className="text-center">
      
      <p className="text-sm text-muted-foreground mt-1">{label}</p>
    </motion.div>);

};

export const SectorPageLayout = ({
  title, subtitle, heroImage, icon: Icon, overview, stats,
  historicalData, projectionData, investmentByRegion, sectorBreakdown,
  keyProjects, opportunities, challenges, policies, partners, additionalSections
}: SectorPageProps) => {
  const { t } = useLanguage();

  return (
    <div className="bg-background text-foreground min-h-screen">
      <TopNavigation />
      {/* Hero */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <img src={heroImage} alt={title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-16 w-full">
          <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">{t("common.learnMore") || "Back to Home"}</span>
          </Link>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-primary/20 backdrop-blur-sm rounded-xl border border-primary/30">
                <Icon className="w-8 h-8 text-primary" />
              </div>
              <span className="text-primary text-sm font-semibold tracking-[0.3em] uppercase">{subtitle}</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4">{title}</h1>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar with Count-Up Animation */}
      <section className="bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) =>
          <AnimatedStat key={i} value={stat.value} label={stat.label} delay={i * 0.1} />
          )}
        </div>
      </section>

      {/* VISUAL BREAK: Full-bleed hero image */}
      <section className="relative h-[50vh] overflow-hidden">
        <motion.div initial={{ scale: 1.1 }} whileInView={{ scale: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }} className="absolute inset-0">
          <img src={heroImage} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-transparent" />
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 p-12 z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-3">{title}</h2>
            <p className="text-lg text-white/70">{subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Sector Overview</h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-5xl">{overview}</p>
          </motion.div>
        </div>
      </section>

      {/* Historical Trends Chart */}
      <section className="py-16 px-6 lg:px-12 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Historical Performance</h2>
            <p className="text-muted-foreground mb-8">Tracking key indicators over the past decade</p>
            <div className="bg-card rounded-2xl border border-border p-6">
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={historicalData}>
                  <defs>
                    <linearGradient id="colorGrowth" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(142, 71%, 45%)" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="hsl(142, 71%, 45%)" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorInvestment" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(217, 91%, 60%)" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="hsl(217, 91%, 60%)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 20%)" />
                  <XAxis dataKey="name" stroke="hsl(0, 0%, 50%)" fontSize={12} />
                  <YAxis stroke="hsl(0, 0%, 50%)" fontSize={12} />
                  <Tooltip contentStyle={{ backgroundColor: "hsl(0, 0%, 10%)", border: "1px solid hsl(0, 0%, 20%)", borderRadius: "12px", color: "#fff" }} />
                  <Legend />
                  <Area type="monotone" dataKey="growth" name="Growth %" stroke="hsl(142, 71%, 45%)" fillOpacity={1} fill="url(#colorGrowth)" strokeWidth={2} />
                  <Area type="monotone" dataKey="investment" name="Investment ($M)" stroke="hsl(217, 91%, 60%)" fillOpacity={1} fill="url(#colorInvestment)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projections Chart */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Growth Projections (2026–2040)</h2>
            <p className="text-muted-foreground mb-8">Forecasted growth trajectories under NERPA framework</p>
            <div className="bg-card rounded-2xl border border-border p-6">
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={projectionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 20%)" />
                  <XAxis dataKey="name" stroke="hsl(0, 0%, 50%)" fontSize={12} />
                  <YAxis stroke="hsl(0, 0%, 50%)" fontSize={12} />
                  <Tooltip contentStyle={{ backgroundColor: "hsl(0, 0%, 10%)", border: "1px solid hsl(0, 0%, 20%)", borderRadius: "12px", color: "#fff" }} />
                  <Legend />
                  <Line type="monotone" dataKey="baseline" name="Baseline" stroke="hsl(0, 0%, 50%)" strokeWidth={2} strokeDasharray="5 5" />
                  <Line type="monotone" dataKey="optimistic" name="Optimistic" stroke="hsl(142, 71%, 45%)" strokeWidth={3} />
                  <Line type="monotone" dataKey="conservative" name="Conservative" stroke="hsl(47, 96%, 53%)" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Investment by Region + Sector Breakdown side by side */}
      <section className="py-16 px-6 lg:px-12 bg-card/50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-bold mb-6">Investment by Region</h3>
            <div className="bg-card rounded-2xl border border-border p-6">
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={investmentByRegion}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 20%)" />
                  <XAxis dataKey="name" stroke="hsl(0, 0%, 50%)" fontSize={11} angle={-45} textAnchor="end" height={80} />
                  <YAxis stroke="hsl(0, 0%, 50%)" fontSize={12} />
                  <Tooltip contentStyle={{ backgroundColor: "hsl(0, 0%, 10%)", border: "1px solid hsl(0, 0%, 20%)", borderRadius: "12px", color: "#fff" }} />
                  <Bar dataKey="value" name="Investment ($M)" fill="hsl(217, 91%, 60%)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-bold mb-6">Sub-sector Breakdown</h3>
            <div className="bg-card rounded-2xl border border-border p-6">
              <ResponsiveContainer width="100%" height={350}>
                <PieChart>
                  <Pie data={sectorBreakdown} cx="50%" cy="50%" outerRadius={120} innerRadius={60} paddingAngle={3} dataKey="value" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`} labelLine={false}>
                    {sectorBreakdown.map((entry, i) =>
                    <Cell key={i} fill={entry.color || CHART_COLORS[i % CHART_COLORS.length]} />
                    )}
                  </Pie>
                  <Tooltip contentStyle={{ backgroundColor: "hsl(0, 0%, 10%)", border: "1px solid hsl(0, 0%, 20%)", borderRadius: "12px", color: "#fff" }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Projects */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Key Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyProjects.map((project, i) =>
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} viewport={{ once: true }}
            className="bg-card rounded-2xl border border-border p-6 hover:border-primary/30 transition-all">
                <div className="flex items-center justify-between mb-4">
                  



                
                  
                </div>
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>📍 {project.location}</span>
                  
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Opportunities & Challenges */}
      <section className="py-16 px-6 lg:px-12 bg-card/50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold mb-6 text-primary">Investment Opportunities</h2>
            <div className="space-y-3">
              {opportunities.map((opp, i) =>
              <div key={i} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border">
                  <TrendingUp className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">{opp}</p>
                </div>
              )}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold mb-6">Key Challenges & Mitigations</h2>
            <div className="space-y-3">
              {challenges.map((ch, i) =>
              <div key={i} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border">
                  <BarChart3 className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">{ch}</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Policy Framework */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Policy & Regulatory Framework</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {policies.map((policy, i) =>
            <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: i * 0.05 }} viewport={{ once: true }}
            className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border">
                <span className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center text-primary font-bold text-sm">{i + 1}</span>
                <p className="text-muted-foreground">{policy}</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 px-6 lg:px-12 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Strategic Partners</h2>
          <div className="flex flex-wrap gap-3">
            {partners.map((partner, i) =>
            <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.03 }} viewport={{ once: true }}
            className="px-5 py-3 bg-card rounded-xl border border-border text-muted-foreground hover:border-primary/30 transition-all">
                {partner}
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {additionalSections}

      {/* CTA */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Invest?</h2>
          <p className="text-xl text-muted-foreground mb-8">Connect with our investment facilitation team to explore opportunities in {title}.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/#contact" className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all">
              Contact Investment Team
            </Link>
            <Link to="/" className="px-8 py-4 border border-border rounded-xl text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>);

};