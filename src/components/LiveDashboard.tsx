import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  TrendingUp, TrendingDown, Activity, DollarSign, Users, Building2,
  Briefcase, Globe, Factory, Zap, Wheat, Pickaxe, ChartBar, ArrowUpRight } from
"lucide-react";

interface MetricData {
  current: number;
  previous: number;
  target: number;
  unit: string;
}

interface DashboardMetric {
  id: string;
  label: string;
  icon: React.ElementType;
  data: MetricData;
  color: string;
  format: "currency" | "number" | "percent";
}

const generateRandomChange = (base: number, variance: number = 0.05) => {
  return base * (1 + (Math.random() * variance * 2 - variance));
};

export const LiveDashboard = () => {
  const [metrics, setMetrics] = useState<DashboardMetric[]>([
  {
    id: "gdp",
    label: "GDP Growth Rate",
    icon: TrendingUp,
    data: { current: 3.8, previous: 3.2, target: 5.0, unit: "%" },
    color: "emerald",
    format: "percent"
  },
  {
    id: "fdi",
    label: "Foreign Direct Investment",
    icon: DollarSign,
    data: { current: 2.4, previous: 1.8, target: 10, unit: "B" },
    color: "blue",
    format: "currency"
  },
  {
    id: "employment",
    label: "Jobs Created (2026)",
    icon: Users,
    data: { current: 142000, previous: 98000, target: 500000, unit: "" },
    color: "purple",
    format: "number"
  },
  {
    id: "projects",
    label: "Active Projects",
    icon: Building2,
    data: { current: 847, previous: 623, target: 2000, unit: "" },
    color: "amber",
    format: "number"
  },
  {
    id: "exports",
    label: "Export Revenue",
    icon: Globe,
    data: { current: 1.2, previous: 0.9, target: 5, unit: "B" },
    color: "cyan",
    format: "currency"
  },
  {
    id: "energy",
    label: "Clean Energy Capacity",
    icon: Zap,
    data: { current: 1.8, previous: 1.2, target: 5, unit: "GW" },
    color: "yellow",
    format: "number"
  }]
  );

  const [sectorInvestments, setSectorInvestments] = useState([
  { sector: "Mining & Minerals", amount: 8.5, change: 12.3, icon: Pickaxe },
  { sector: "Agriculture", amount: 4.2, change: 8.7, icon: Wheat },
  { sector: "Manufacturing", amount: 3.8, change: 15.2, icon: Factory },
  { sector: "Energy", amount: 5.1, change: 22.4, icon: Zap },
  { sector: "Technology", amount: 2.1, change: 34.5, icon: Activity },
  { sector: "Infrastructure", amount: 6.3, change: 18.9, icon: Building2 }]
  );

  const [projectProgress, setProjectProgress] = useState([
  { name: "Aynak Copper Mine", progress: 34, sector: "Mining" },
  { name: "Kajaki Dam Expansion", progress: 67, sector: "Energy" },
  { name: "Kabul Ring Road", progress: 82, sector: "Infrastructure" },
  { name: "National Grid Modernization", progress: 45, sector: "Energy" },
  { name: "Saffron Processing Hub", progress: 91, sector: "Agriculture" },
  { name: "Tech Innovation Centre", progress: 28, sector: "Technology" }]
  );

  // Simulate live updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) => prev.map((metric) => ({
        ...metric,
        data: {
          ...metric.data,
          current: generateRandomChange(metric.data.current, 0.02)
        }
      })));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const formatValue = (value: number, format: string, unit: string) => {
    if (format === "currency") return `$${value.toFixed(1)}${unit}`;
    if (format === "percent") return `${value.toFixed(1)}${unit}`;
    if (value >= 1000) return `${(value / 1000).toFixed(1)}K${unit}`;
    return `${value.toFixed(1)}${unit}`;
  };

  const getChangePercent = (current: number, previous: number) => {
    return ((current - previous) / previous * 100).toFixed(1);
  };

  return (
    <section className="py-32 bg-gradient-to-b from-slate-950 via-background to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              LIVE DATA
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Economic Dashboard
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Real-time indicators tracking Afghanistan's economic transformation, investment flows, and development milestones
          </p>
        </motion.div>

        {/* Main Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            const changePercent = getChangePercent(metric.data.current, metric.data.previous);
            const isPositive = parseFloat(changePercent) > 0;
            const progressPercent = metric.data.current / metric.data.target * 100;

            return (
              <motion.div
                key={metric.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden group hover:bg-white/10 transition-all">
                
                {/* Glow Effect */}
                <div className={`absolute -inset-px rounded-2xl bg-gradient-to-r from-${metric.color}-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
                
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-${metric.color}-500/20`}>
                      <Icon className={`w-6 h-6 text-${metric.color}-400`} />
                    </div>
                    <div className={`flex items-center gap-1 text-sm ${isPositive ? 'text-emerald-400' : 'text-red-400'}`}>
                      {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                      {changePercent}%
                    </div>
                  </div>

                  
                  <p className="text-3xl font-bold text-white mb-4">
                    {formatValue(metric.data.current, metric.format, metric.data.unit)}
                  </p>

                  {/* Progress to Target */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-white/40">
                      <span>Progress to Target</span>
                      <span>{progressPercent.toFixed(0)}%</span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${Math.min(progressPercent, 100)}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className={`h-full bg-gradient-to-r from-${metric.color}-500 to-${metric.color}-400 rounded-full`} />
                      
                    </div>
                    <p className="text-xs text-white/30">
                      Target: {formatValue(metric.data.target, metric.format, metric.data.unit)} by 2040
                    </p>
                  </div>
                </div>
              </motion.div>);

          })}
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Sector Investment Flow */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-semibold text-white">Investment by Sector</h3>
              
            </div>

            <div className="space-y-6">
              {sectorInvestments.map((sector, index) => {
                const Icon = sector.icon;
                const maxAmount = Math.max(...sectorInvestments.map((s) => s.amount));
                const barWidth = sector.amount / maxAmount * 100;

                return (
                  <div key={sector.sector} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <Icon className="w-5 h-5 text-primary" />
                        <span className="text-white/80">{sector.sector}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-white font-medium">${sector.amount}B</span>
                        <span className="text-emerald-400 text-sm flex items-center gap-1">
                          <ArrowUpRight className="w-3 h-3" />
                          {sector.change}%
                        </span>
                      </div>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${barWidth}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full" />
                      
                    </div>
                  </div>);

              })}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="flex items-center justify-between">
                
                <span className="text-2xl font-bold text-primary">
                  ${sectorInvestments.reduce((acc, s) => acc + s.amount, 0).toFixed(1)}B
                </span>
              </div>
            </div>
          </motion.div>

          {/* Major Project Progress */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-semibold text-white">Major Project Progress</h3>
              <span className="text-sm text-white/40">Live Status</span>
            </div>

            <div className="space-y-5">
              {projectProgress.map((project, index) =>
              <div key={project.name} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="text-white font-medium">{project.name}</p>
                      <p className="text-white/40 text-sm">{project.sector}</p>
                    </div>
                    <span className={`text-lg font-bold ${
                  project.progress >= 75 ? 'text-emerald-400' :
                  project.progress >= 50 ? 'text-amber-400' : 'text-blue-400'}`
                  }>
                      {project.progress}%
                    </span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${project.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className={`h-full rounded-full ${
                    project.progress >= 75 ? 'bg-gradient-to-r from-emerald-500 to-emerald-400' :
                    project.progress >= 50 ? 'bg-gradient-to-r from-amber-500 to-amber-400' :
                    'bg-gradient-to-r from-blue-500 to-blue-400'}`
                    } />
                  
                  </div>
                </div>
              )}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-emerald-400">3</p>
                <p className="text-xs text-white/40">Near Complete</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-amber-400">2</p>
                <p className="text-xs text-white/40">In Progress</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-400">1</p>
                <p className="text-xs text-white/40">Early Stage</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-primary/20 to-blue-500/20 border border-primary/30">
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <ChartBar className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-3xl font-bold text-white mb-1">$75B+</p>
              <p className="text-sm text-white/50">2040 Investment Target</p>
            </div>
            <div className="text-center">
              <Users className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-3xl font-bold text-white mb-1">2M+</p>
              <p className="text-sm text-white/50">Jobs by 2040</p>
            </div>
            <div className="text-center">
              <Globe className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-3xl font-bold text-white mb-1">50+</p>
              <p className="text-sm text-white/50">Partner Nations</p>
            </div>
            <div className="text-center">
              <Building2 className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-3xl font-bold text-white mb-1">2,000+</p>
              <p className="text-sm text-white/50">Projects Planned</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

};