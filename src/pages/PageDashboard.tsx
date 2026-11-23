import { BarChart3 } from "lucide-react";
import { GenericPageLayout } from "@/components/GenericPageLayout";
import { LiveDashboard } from "@/components/LiveDashboard";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Activity, DollarSign, Users, Building2, Briefcase, Globe, Factory, Zap, Wheat, Pickaxe, BarChart as BarChartIcon, PieChart, LineChart, Target, Award, Clock, AlertCircle, CheckCircle, Shield, ArrowUpRight, ArrowDownRight, Sparkles, Flame, Lightbulb, Brain, Cpu, Database, Network, FileText, Layers, Gauge, Rocket, Star, CheckCircle2, XCircle, Leaf, GraduationCap, Heart, MapPin, Calendar, Info, AlertTriangle, TrendingUp as TrendingUpIcon } from "lucide-react";
import { BarChart, Bar, LineChart as RechartsLineChart, Line, PieChart as RechartsPieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, AreaChart, Area, ComposedChart } from "recharts";

const PageDashboard = () => {
  return (
    <GenericPageLayout
      title="Live Economic Dashboard"
      subtitle="Real-Time Economic Indicators"
      icon={BarChart3}
      overview="Track Afghanistan's economic transformation in real-time through comprehensive metrics and indicators. This dashboard provides up-to-date data on GDP growth, foreign direct investment, employment, exports, energy capacity, and other critical economic indicators that reflect the progress of NERPA's strategic development programme."
      stats={[
      { value: "Real-time", label: "Data Updates" },
      { value: "15+", label: "Key Metrics" },
      { value: "All Sectors", label: "Coverage" },
      { value: "24/7", label: "Monitoring" }]
      }
      sections={
      <>
          {/* Live Dashboard Component */}
          <section className="py-16 px-6 lg:px-12 bg-card/50">
            <div className="max-w-7xl mx-auto">
              <LiveDashboard />
            </div>
          </section>

          {/* Metric Categories */}
          <section className="py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Dashboard Categories</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
              {
                category: "Economic Growth",
                icon: TrendingUp,
                metrics: ["GDP Growth Rate", "GDP Per Capita", "Economic Diversification Index"],
                color: "from-green-500 to-emerald-600"
              },
              {
                category: "Investment",
                icon: DollarSign,
                metrics: ["Foreign Direct Investment", "Domestic Investment", "Investment Pipeline"],
                color: "from-blue-500 to-cyan-600"
              },
              {
                category: "Employment",
                icon: Users,
                metrics: ["Jobs Created", "Unemployment Rate", "Skills Development"],
                color: "from-purple-500 to-violet-600"
              },
              {
                category: "Infrastructure",
                icon: Building2,
                metrics: ["Roads Completed", "Energy Capacity", "Digital Connectivity"],
                color: "from-orange-500 to-amber-600"
              },
              {
                category: "Trade & Exports",
                icon: Globe,
                metrics: ["Export Revenue", "Import Volume", "Trade Balance"],
                color: "from-pink-500 to-rose-600"
              },
              {
                category: "Energy",
                icon: Zap,
                metrics: ["Renewable Capacity", "Energy Access", "Grid Expansion"],
                color: "from-yellow-500 to-orange-600"
              }].
              map((category, i) =>
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card rounded-2xl border border-border p-6 hover:border-primary/30 transition-all">
                
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{category.category}</h3>
                    <ul className="space-y-2">
                      {category.metrics.map((metric, j) =>
                  <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Activity className="w-3 h-3 text-primary" />
                          {metric}
                        </li>
                  )}
                    </ul>
                  </motion.div>
              )}
              </div>
            </div>
          </section>

          {/* Sector Performance Metrics */}
          <section className="py-20 px-6 lg:px-12 bg-card/50">
            <div className="max-w-7xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-4xl md:text-5xl font-bold mb-2">Sector Performance Metrics</h2>
                <p className="text-muted-foreground mb-8">Real-time performance tracking across all major sectors</p>
                <div className="bg-card rounded-2xl border border-border p-6">
                  <ResponsiveContainer width="100%" height={450}>
                    <ComposedChart data={[
                  { sector: "Mining", investment: 8.5, jobs: 120, growth: 25, projects: 45 },
                  { sector: "Energy", investment: 5.1, jobs: 85, growth: 22, projects: 32 },
                  { sector: "Agriculture", investment: 4.2, jobs: 200, growth: 12, projects: 68 },
                  { sector: "Manufacturing", investment: 3.8, jobs: 150, growth: 18, projects: 55 },
                  { sector: "Technology", investment: 2.1, jobs: 50, growth: 35, projects: 28 },
                  { sector: "Infrastructure", investment: 6.3, jobs: 180, growth: 15, projects: 72 },
                  { sector: "Healthcare", investment: 1.8, jobs: 95, growth: 14, projects: 38 },
                  { sector: "Education", investment: 1.5, jobs: 120, growth: 16, projects: 42 }]
                  }>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 20%)" />
                      <XAxis dataKey="sector" stroke="hsl(0, 0%, 50%)" fontSize={11} angle={-45} textAnchor="end" height={80} />
                      <YAxis yAxisId="left" stroke="hsl(0, 0%, 50%)" fontSize={12} />
                      <YAxis yAxisId="right" orientation="right" stroke="hsl(0, 0%, 50%)" fontSize={12} />
                      <Tooltip contentStyle={{ backgroundColor: "hsl(0, 0%, 10%)", border: "1px solid hsl(0, 0%, 20%)", borderRadius: "12px", color: "#fff" }} />
                      <Legend />
                      <Bar yAxisId="left" dataKey="investment" name="Investment ($B)" fill="hsl(217, 91%, 60%)" radius={[4, 4, 0, 0]} />
                      <Bar yAxisId="left" dataKey="jobs" name="Jobs (K)" fill="hsl(142, 71%, 45%)" radius={[4, 4, 0, 0]} />
                      <Line yAxisId="right" type="monotone" dataKey="growth" name="Growth %" stroke="hsl(47, 96%, 53%)" strokeWidth={3} />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Economic Growth Trends */}
          <section className="py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-4xl md:text-5xl font-bold mb-2">Economic Growth Trends (2026–2040)</h2>
                <p className="text-muted-foreground mb-8">Projected economic indicators and growth trajectories under NERPA Vision</p>
                <div className="bg-card rounded-2xl border border-border p-6">
                  <ResponsiveContainer width="100%" height={400}>
                    <AreaChart data={[
                  { year: "2026", GDP: 22.5, FDI: 2.2, Exports: 1.1, Jobs: 80 },
                  { year: "2028", GDP: 28.4, FDI: 4.1, Exports: 1.9, Jobs: 165 },
                  { year: "2030", GDP: 35.2, FDI: 6.8, Exports: 3.0, Jobs: 290 },
                  { year: "2032", GDP: 43.5, FDI: 10.2, Exports: 4.5, Jobs: 440 },
                  { year: "2034", GDP: 52.8, FDI: 14.5, Exports: 6.2, Jobs: 620 },
                  { year: "2036", GDP: 63.0, FDI: 19.8, Exports: 8.4, Jobs: 830 },
                  { year: "2038", GDP: 74.5, FDI: 26.0, Exports: 11.2, Jobs: 1080 },
                  { year: "2040", GDP: 88.0, FDI: 33.5, Exports: 15.0, Jobs: 1400 }]
                  }>
                      <defs>
                        <linearGradient id="colorGDP" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(142, 71%, 45%)" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="hsl(142, 71%, 45%)" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorFDI" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(217, 91%, 60%)" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="hsl(217, 91%, 60%)" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorExports" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(47, 96%, 53%)" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="hsl(47, 96%, 53%)" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 20%)" />
                      <XAxis dataKey="year" stroke="hsl(0, 0%, 50%)" fontSize={12} />
                      <YAxis stroke="hsl(0, 0%, 50%)" fontSize={12} />
                      <Tooltip contentStyle={{ backgroundColor: "hsl(0, 0%, 10%)", border: "1px solid hsl(0, 0%, 20%)", borderRadius: "12px", color: "#fff" }} />
                      <Legend />
                      <Area type="monotone" dataKey="GDP" name="GDP ($B)" stackId="1" stroke="hsl(142, 71%, 45%)" fill="url(#colorGDP)" />
                      <Area type="monotone" dataKey="FDI" name="FDI ($B)" stackId="1" stroke="hsl(217, 91%, 60%)" fill="url(#colorFDI)" />
                      <Area type="monotone" dataKey="Exports" name="Exports ($B)" stackId="1" stroke="hsl(47, 96%, 53%)" fill="url(#colorExports)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Key Performance Indicators */}
          <section className="py-20 px-6 lg:px-12 bg-card/50">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Key Performance Indicators</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
              { metric: "GDP Growth Rate", current: "3.8%", target: "8%", trend: "up", icon: TrendingUp, color: "from-green-500 to-emerald-600" },
              { metric: "Foreign Direct Investment", current: "$2.4B", target: "$10B", trend: "up", icon: DollarSign, color: "from-blue-500 to-cyan-600" },
              { metric: "Jobs Created", current: "142K", target: "500K", trend: "up", icon: Users, color: "from-purple-500 to-violet-600" },
              { metric: "Export Revenue", current: "$1.2B", target: "$5B", trend: "up", icon: Globe, color: "from-pink-500 to-rose-600" },
              { metric: "Energy Capacity", current: "1.8GW", target: "5GW", trend: "up", icon: Zap, color: "from-yellow-500 to-orange-600" },
              { metric: "Roads Completed", current: "2,500km", target: "10,000km", trend: "up", icon: Building2, color: "from-orange-500 to-amber-600" },
              { metric: "Active Projects", current: "847", target: "2,000", trend: "up", icon: Target, color: "from-cyan-500 to-blue-600" },
              { metric: "Financial Inclusion", current: "45%", target: "80%", trend: "up", icon: Activity, color: "from-teal-500 to-green-600" }].
              map((item, i) =>
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card rounded-xl border border-border p-6">
                
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">{item.metric}</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold">{item.current}</span>
                        <TrendingUp className={`w-4 h-4 ${item.trend === "up" ? "text-green-400" : "text-red-400"}`} />
                      </div>
                      <div className="text-sm text-muted-foreground">Target: {item.target}</div>
                      <div className="h-2 bg-background rounded-full overflow-hidden">
                        <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "60%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className="h-full bg-gradient-to-r from-primary to-primary/60" />
                    
                      </div>
                    </div>
                  </motion.div>
              )}
              </div>
            </div>
          </section>

          {/* Data Sources */}
          <section className="py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Data Sources & Methodology</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl border border-border p-8">
                
                  <h3 className="text-2xl font-bold mb-4">Primary Sources</h3>
                  <ul className="space-y-3">
                    {[
                  "National Statistics Office",
                  "Ministry of Finance",
                  "Central Bank of Afghanistan",
                  "Sector-specific ministries",
                  "NERPA monitoring systems",
                  "International development partners"].
                  map((source, i) =>
                  <li key={i} className="flex items-center gap-3 text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        {source}
                      </li>
                  )}
                  </ul>
                </motion.div>

                <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl border border-border p-8">
                
                  <h3 className="text-2xl font-bold mb-4">Update Frequency</h3>
                  <ul className="space-y-3">
                    {[
                  "Real-time: Live project tracking",
                  "Daily: Employment and trade data",
                  "Weekly: Investment and infrastructure",
                  "Monthly: Comprehensive sector reports",
                  "Quarterly: GDP and economic indicators",
                  "Annual: Full statistical yearbook"].
                  map((frequency, i) =>
                  <li key={i} className="flex items-center gap-3 text-muted-foreground">
                        <Clock className="w-4 h-4 text-primary" />
                        {frequency}
                      </li>
                  )}
                  </ul>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Regional Performance Comparison */}
          <section className="py-20 px-6 lg:px-12 bg-card/50">
            <div className="max-w-7xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <h2 className="text-4xl md:text-5xl font-bold mb-2">Regional Performance Comparison</h2>
                <p className="text-muted-foreground mb-8">Investment and project distribution across regions</p>
                <div className="bg-card rounded-2xl border border-border p-6">
                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={[
                  { region: "Central", investment: 18, projects: 280, jobs: 85 },
                  { region: "North", investment: 15, projects: 240, jobs: 72 },
                  { region: "West", investment: 12, projects: 180, jobs: 58 },
                  { region: "South", investment: 10, projects: 140, jobs: 48 },
                  { region: "East", investment: 13, projects: 160, jobs: 62 }]
                  }>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 20%)" />
                      <XAxis dataKey="region" stroke="hsl(0, 0%, 50%)" fontSize={12} />
                      <YAxis stroke="hsl(0, 0%, 50%)" fontSize={12} />
                      <Tooltip contentStyle={{ backgroundColor: "hsl(0, 0%, 10%)", border: "1px solid hsl(0, 0%, 20%)", borderRadius: "12px", color: "#fff" }} />
                      <Legend />
                      <Bar dataKey="investment" name="Investment ($B)" fill="hsl(217, 91%, 60%)" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="projects" name="Projects" fill="hsl(142, 71%, 45%)" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="jobs" name="Jobs (K)" fill="hsl(47, 96%, 53%)" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Related Section 1: Real-Time Alerts & Notifications */}
          <section className="py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Real-Time Alerts & Notifications</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
              { alert: "GDP Growth Surge", status: "Positive", value: "+0.5%", time: "2 hours ago", icon: TrendingUp, color: "from-green-500 to-emerald-600" },
              { alert: "New Investment", status: "High", value: "$250M", time: "5 hours ago", icon: DollarSign, color: "from-blue-500 to-cyan-600" },
              { alert: "Project Milestone", status: "Achieved", value: "50 Projects", time: "1 day ago", icon: Target, color: "from-purple-500 to-pink-600" },
              { alert: "Employment Growth", status: "Rising", value: "+15K Jobs", time: "2 days ago", icon: Users, color: "from-yellow-500 to-orange-600" },
              { alert: "Export Increase", status: "Strong", value: "+12%", time: "3 days ago", icon: Globe, color: "from-cyan-500 to-blue-600" },
              { alert: "Energy Capacity", status: "Expanded", value: "+200MW", time: "4 days ago", icon: Zap, color: "from-orange-500 to-amber-600" }].
              map((item, i) =>
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                className="bg-card rounded-xl border border-border p-5 hover:border-primary/30 hover:shadow-lg transition-all duration-200">
                
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-bold">{item.alert}</h3>
                          <span className={`px-2 py-0.5 text-xs rounded ${
                      item.status === "Positive" || item.status === "High" || item.status === "Strong" ? "bg-green-500/20 text-green-400" :
                      "bg-blue-500/20 text-blue-400"}`
                      }>
                            {item.status}
                          </span>
                        </div>
                        <div className="text-2xl font-bold text-primary mb-1">{item.value}</div>
                        <div className="text-xs text-muted-foreground">{item.time}</div>
                      </div>
                    </div>
                  </motion.div>
              )}
              </div>
            </div>
          </section>

          {/* Related Section 2: Predictive Analytics */}
          <section className="py-20 px-6 lg:px-12 bg-card/50">
            <div className="max-w-7xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <h2 className="text-4xl md:text-5xl font-bold mb-2">Predictive Analytics</h2>
                <p className="text-muted-foreground mb-8">AI-powered forecasts and trend predictions for next 12 months</p>
                <div className="bg-card rounded-2xl border border-border p-6">
                  <ResponsiveContainer width="100%" height={400}>
                    <AreaChart data={[
                  { month: "Jan", "Actual": 3.2, "Forecast": 3.5, "Optimistic": 3.8, "Conservative": 3.2 },
                  { month: "Feb", "Actual": 3.4, "Forecast": 3.7, "Optimistic": 4.0, "Conservative": 3.4 },
                  { month: "Mar", "Actual": 3.6, "Forecast": 3.9, "Optimistic": 4.2, "Conservative": 3.6 },
                  { month: "Apr", "Actual": null, "Forecast": 4.1, "Optimistic": 4.4, "Conservative": 3.8 },
                  { month: "May", "Actual": null, "Forecast": 4.3, "Optimistic": 4.6, "Conservative": 4.0 },
                  { month: "Jun", "Actual": null, "Forecast": 4.5, "Optimistic": 4.8, "Conservative": 4.2 }]
                  }>
                      <defs>
                        <linearGradient id="predActual" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(142, 71%, 45%)" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="hsl(142, 71%, 45%)" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="predForecast" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(217, 91%, 60%)" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="hsl(217, 91%, 60%)" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 20%)" />
                      <XAxis dataKey="month" stroke="hsl(0, 0%, 50%)" fontSize={12} />
                      <YAxis stroke="hsl(0, 0%, 50%)" fontSize={12} />
                      <Tooltip contentStyle={{ backgroundColor: "hsl(0, 0%, 10%)", border: "1px solid hsl(0, 0%, 20%)", borderRadius: "12px", color: "#fff" }} />
                      <Legend />
                      <Area type="monotone" dataKey="Actual" stackId="1" stroke="hsl(142, 71%, 45%)" fill="url(#predActual)" />
                      <Area type="monotone" dataKey="Forecast" stackId="1" stroke="hsl(217, 91%, 60%)" fill="url(#predForecast)" />
                      <Line type="monotone" dataKey="Optimistic" stroke="hsl(47, 96%, 53%)" strokeWidth={2} strokeDasharray="5 5" />
                      <Line type="monotone" dataKey="Conservative" stroke="hsl(0, 0%, 50%)" strokeWidth={2} strokeDasharray="3 3" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Related Section 3: Sector Health Scorecard */}
          <section className="py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Sector Health Scorecard</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
              { sector: "Mining", score: 92, trend: "up", status: "Excellent", icon: Pickaxe, color: "from-blue-500 to-cyan-600" },
              { sector: "Energy", score: 88, trend: "up", status: "Excellent", icon: Zap, color: "from-yellow-500 to-orange-600" },
              { sector: "Agriculture", score: 85, trend: "up", status: "Very Good", icon: Wheat, color: "from-green-500 to-emerald-600" },
              { sector: "Technology", score: 90, trend: "up", status: "Excellent", icon: Cpu, color: "from-purple-500 to-pink-600" },
              { sector: "Infrastructure", score: 87, trend: "up", status: "Very Good", icon: Building2, color: "from-orange-500 to-amber-600" },
              { sector: "Manufacturing", score: 83, trend: "up", status: "Very Good", icon: Factory, color: "from-cyan-500 to-blue-600" },
              { sector: "Healthcare", score: 80, trend: "up", status: "Good", icon: Heart, color: "from-red-500 to-rose-600" },
              { sector: "Education", score: 82, trend: "up", status: "Very Good", icon: GraduationCap, color: "from-indigo-500 to-violet-600" }].
              map((item, i) =>
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                className="bg-card rounded-2xl border border-border p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-200 text-center">
                
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-4`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold mb-2">{item.sector}</h3>
                    <div className="text-4xl font-bold text-primary mb-2">{item.score}</div>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <ArrowUpRight className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-muted-foreground">{item.status}</span>
                    </div>
                    <div className="h-2 bg-background rounded-full overflow-hidden">
                      <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.score}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className="h-full bg-gradient-to-r from-primary to-primary/60" />
                  
                    </div>
                  </motion.div>
              )}
              </div>
            </div>
          </section>

          {/* Related Section 4: Export Performance Dashboard */}
          <section className="py-20 px-6 lg:px-12 bg-card/50">
            <div className="max-w-7xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <h2 className="text-4xl md:text-5xl font-bold mb-2">Export Performance Dashboard</h2>
                <p className="text-muted-foreground mb-8">Real-time export data by product category and destination</p>
                <div className="bg-card rounded-2xl border border-border p-6">
                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={[
                  { category: "Minerals", value: 450, growth: 25, destinations: 12 },
                  { category: "Agriculture", value: 320, growth: 18, destinations: 18 },
                  { category: "Textiles", value: 180, growth: 15, destinations: 15 },
                  { category: "Handicrafts", value: 95, growth: 22, destinations: 25 },
                  { category: "Energy", value: 120, growth: 30, destinations: 8 }]
                  }>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 20%)" />
                      <XAxis dataKey="category" stroke="hsl(0, 0%, 50%)" fontSize={12} />
                      <YAxis stroke="hsl(0, 0%, 50%)" fontSize={12} />
                      <Tooltip contentStyle={{ backgroundColor: "hsl(0, 0%, 10%)", border: "1px solid hsl(0, 0%, 20%)", borderRadius: "12px", color: "#fff" }} />
                      <Legend />
                      <Bar dataKey="value" name="Export Value ($M)" fill="hsl(142, 71%, 45%)" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="growth" name="Growth %" fill="hsl(217, 91%, 60%)" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Related Section 5: Infrastructure Development Tracker */}
          <section className="py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Infrastructure Development Tracker</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
              { project: "Highway Network", completed: "2,500km", target: "10,000km", progress: 25, icon: Building2, color: "from-orange-500 to-amber-600" },
              { project: "Energy Grid", completed: "1.8GW", target: "15GW", progress: 12, icon: Zap, color: "from-yellow-500 to-orange-600" },
              { project: "Railway Lines", completed: "450km", target: "3,000km", progress: 15, icon: Building2, color: "from-blue-500 to-cyan-600" },
              { project: "Airports", completed: "8", target: "15", progress: 53, icon: Globe, color: "from-purple-500 to-pink-600" },
              { project: "Ports", completed: "3", target: "8", progress: 38, icon: Globe, color: "from-cyan-500 to-blue-600" },
              { project: "Digital Infrastructure", completed: "65%", target: "100%", progress: 65, icon: Cpu, color: "from-indigo-500 to-violet-600" }].
              map((item, i) =>
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                className="bg-card rounded-2xl border border-border p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-200">
                
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold">{item.project}</h3>
                        <div className="text-sm text-muted-foreground">{item.completed} / {item.target}</div>
                      </div>
                    </div>
                    <div className="h-3 bg-background rounded-full overflow-hidden">
                      <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className="h-full bg-gradient-to-r from-primary to-primary/60" />
                  
                    </div>
                    <div className="text-right text-sm text-muted-foreground mt-2">{item.progress}% Complete</div>
                  </motion.div>
              )}
              </div>
            </div>
          </section>

          {/* Related Section 6: Foreign Investment Inflows */}
          <section className="py-20 px-6 lg:px-12 bg-card/50">
            <div className="max-w-7xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <h2 className="text-4xl md:text-5xl font-bold mb-2">Foreign Investment Inflows</h2>
                <p className="text-muted-foreground mb-8">Top investing countries and sectors receiving FDI</p>
                <div className="grid md:grid-cols-2 gap-8">
                  






























                
                  <div className="bg-card rounded-2xl border border-border p-6">
                    <h3 className="text-2xl font-bold mb-4">FDI by Sector</h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <RechartsPieChart>
                        <Pie
                        data={[
                        { name: "Mining", value: 35, color: "hsl(217, 91%, 60%)" },
                        { name: "Energy", value: 25, color: "hsl(47, 96%, 53%)" },
                        { name: "Infrastructure", value: 20, color: "hsl(25, 95%, 53%)" },
                        { name: "Technology", value: 12, color: "hsl(262, 83%, 58%)" },
                        { name: "Agriculture", value: 8, color: "hsl(142, 71%, 45%)" }]
                        }
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        innerRadius={50}
                        paddingAngle={3}
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        labelLine={false}>
                        
                          {[
                        { name: "Mining", value: 35, color: "hsl(217, 91%, 60%)" },
                        { name: "Energy", value: 25, color: "hsl(47, 96%, 53%)" },
                        { name: "Infrastructure", value: 20, color: "hsl(25, 95%, 53%)" },
                        { name: "Technology", value: 12, color: "hsl(262, 83%, 58%)" },
                        { name: "Agriculture", value: 8, color: "hsl(142, 71%, 45%)" }].
                        map((entry, i) =>
                        <Cell key={i} fill={entry.color} />
                        )}
                        </Pie>
                        <Tooltip contentStyle={{ backgroundColor: "hsl(0, 0%, 10%)", border: "1px solid hsl(0, 0%, 20%)", borderRadius: "12px", color: "#fff" }} />
                        <Legend />
                      </RechartsPieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Related Section 7: Employment Statistics */}
          <section className="py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <h2 className="text-4xl md:text-5xl font-bold mb-2">Employment Statistics</h2>
                <p className="text-muted-foreground mb-8">Job creation trends and employment by sector</p>
                <div className="bg-card rounded-2xl border border-border p-6">
                  <ResponsiveContainer width="100%" height={400}>
                    <AreaChart data={[
                  { year: "2024", "Direct Jobs": 50, "Indirect Jobs": 120, "Total": 170 },
                  { year: "2025", "Direct Jobs": 85, "Indirect Jobs": 200, "Total": 285 },
                  { year: "2026", "Direct Jobs": 142, "Indirect Jobs": 340, "Total": 482 },
                  { year: "2027", "Direct Jobs": 220, "Indirect Jobs": 520, "Total": 740 },
                  { year: "2028", "Direct Jobs": 320, "Indirect Jobs": 750, "Total": 1070 },
                  { year: "2029", "Direct Jobs": 450, "Indirect Jobs": 1050, "Total": 1500 },
                  { year: "2030", "Direct Jobs": 620, "Indirect Jobs": 1450, "Total": 2070 }]
                  }>
                      <defs>
                        <linearGradient id="empDirect" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(142, 71%, 45%)" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="hsl(142, 71%, 45%)" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="empIndirect" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(217, 91%, 60%)" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="hsl(217, 91%, 60%)" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 20%)" />
                      <XAxis dataKey="year" stroke="hsl(0, 0%, 50%)" fontSize={12} />
                      <YAxis stroke="hsl(0, 0%, 50%)" fontSize={12} />
                      <Tooltip contentStyle={{ backgroundColor: "hsl(0, 0%, 10%)", border: "1px solid hsl(0, 0%, 20%)", borderRadius: "12px", color: "#fff" }} />
                      <Legend />
                      <Area type="monotone" dataKey="Direct Jobs" stackId="1" stroke="hsl(142, 71%, 45%)" fill="url(#empDirect)" />
                      <Area type="monotone" dataKey="Indirect Jobs" stackId="1" stroke="hsl(217, 91%, 60%)" fill="url(#empIndirect)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Related Section 8: Technology Adoption Metrics */}
          <section className="py-20 px-6 lg:px-12 bg-card/50">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Technology Adoption Metrics</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
              { metric: "Internet Penetration", current: "25%", target: "90%", trend: "up", icon: Cpu, color: "from-purple-500 to-pink-600" },
              { metric: "Mobile Coverage", current: "85%", target: "100%", trend: "up", icon: Network, color: "from-blue-500 to-cyan-600" },
              { metric: "E-Government", current: "45%", target: "95%", trend: "up", icon: Database, color: "from-green-500 to-emerald-600" },
              { metric: "Digital Payments", current: "35%", target: "85%", trend: "up", icon: DollarSign, color: "from-yellow-500 to-orange-600" },
              { metric: "Cloud Adoption", current: "20%", target: "70%", trend: "up", icon: Database, color: "from-cyan-500 to-blue-600" },
              { metric: "AI Integration", current: "15%", target: "60%", trend: "up", icon: Brain, color: "from-indigo-500 to-violet-600" },
              { metric: "IoT Deployment", current: "10%", target: "50%", trend: "up", icon: Activity, color: "from-orange-500 to-amber-600" },
              { metric: "5G Coverage", current: "5%", target: "40%", trend: "up", icon: Zap, color: "from-pink-500 to-rose-600" }].
              map((item, i) =>
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                className="bg-card rounded-xl border border-border p-5 hover:border-primary/30 hover:shadow-lg transition-all duration-200 text-center">
                
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-3`}>
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-sm font-semibold mb-2">{item.metric}</h3>
                    <div className="text-2xl font-bold text-primary mb-1">{item.current}</div>
                    <div className="text-xs text-muted-foreground mb-2">Target: {item.target}</div>
                    <ArrowUpRight className="w-4 h-4 text-green-400 mx-auto" />
                  </motion.div>
              )}
              </div>
            </div>
          </section>

          {/* Related Section 9: Environmental Impact Metrics */}
          <section className="py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <h2 className="text-4xl md:text-5xl font-bold mb-2">Environmental Impact Metrics</h2>
                <p className="text-muted-foreground mb-8">Sustainability indicators and environmental performance tracking</p>
                <div className="bg-card rounded-2xl border border-border p-6">
                  <ResponsiveContainer width="100%" height={400}>
                    <ComposedChart data={[
                  { year: "2024", "Renewable Energy": 20, "Carbon Reduction": 15, "Forest Cover": 2, "Water Conservation": 25 },
                  { year: "2025", "Renewable Energy": 30, "Carbon Reduction": 22, "Forest Cover": 3, "Water Conservation": 35 },
                  { year: "2026", "Renewable Energy": 40, "Carbon Reduction": 30, "Forest Cover": 5, "Water Conservation": 45 },
                  { year: "2027", "Renewable Energy": 50, "Carbon Reduction": 40, "Forest Cover": 7, "Water Conservation": 55 },
                  { year: "2028", "Renewable Energy": 60, "Carbon Reduction": 50, "Forest Cover": 10, "Water Conservation": 65 },
                  { year: "2029", "Renewable Energy": 70, "Carbon Reduction": 60, "Forest Cover": 12, "Water Conservation": 75 },
                  { year: "2030", "Renewable Energy": 80, "Carbon Reduction": 70, "Forest Cover": 15, "Water Conservation": 85 }]
                  }>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 20%)" />
                      <XAxis dataKey="year" stroke="hsl(0, 0%, 50%)" fontSize={12} />
                      <YAxis stroke="hsl(0, 0%, 50%)" fontSize={12} />
                      <Tooltip contentStyle={{ backgroundColor: "hsl(0, 0%, 10%)", border: "1px solid hsl(0, 0%, 20%)", borderRadius: "12px", color: "#fff" }} />
                      <Legend />
                      <Bar dataKey="Renewable Energy" name="Renewable Energy %" fill="hsl(142, 71%, 45%)" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="Carbon Reduction" name="Carbon Reduction %" fill="hsl(47, 96%, 53%)" radius={[4, 4, 0, 0]} />
                      <Line type="monotone" dataKey="Forest Cover" name="Forest Cover %" stroke="hsl(25, 95%, 53%)" strokeWidth={3} />
                      <Line type="monotone" dataKey="Water Conservation" name="Water Conservation %" stroke="hsl(199, 89%, 48%)" strokeWidth={3} />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Related Section 10: Financial Market Indicators */}
          <section className="py-20 px-6 lg:px-12 bg-card/50">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Financial Market Indicators</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
              { indicator: "Stock Market Index", value: "1,245", change: "+5.2%", trend: "up", icon: TrendingUp, color: "from-green-500 to-emerald-600" },
              { indicator: "Currency Stability", value: "Stable", change: "+0.2%", trend: "up", icon: DollarSign, color: "from-blue-500 to-cyan-600" },
              { indicator: "Banking Assets", value: "$12.5B", change: "+8.5%", trend: "up", icon: Building2, color: "from-purple-500 to-pink-600" },
              { indicator: "Credit Growth", value: "15.2%", change: "+2.1%", trend: "up", icon: Activity, color: "from-yellow-500 to-orange-600" },
              { indicator: "Foreign Reserves", value: "$8.2B", change: "+12%", trend: "up", icon: Shield, color: "from-cyan-500 to-blue-600" },
              { indicator: "Inflation Rate", value: "3.5%", change: "-0.3%", trend: "down", icon: TrendingDown, color: "from-orange-500 to-amber-600" },
              { indicator: "Interest Rates", value: "8.5%", change: "-0.5%", trend: "down", icon: Gauge, color: "from-pink-500 to-rose-600" },
              { indicator: "Market Capitalization", value: "$45B", change: "+18%", trend: "up", icon: BarChartIcon, color: "from-indigo-500 to-violet-600" }].
              map((item, i) =>
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                className="bg-card rounded-xl border border-border p-5 hover:border-primary/30 hover:shadow-lg transition-all duration-200">
                
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      {item.trend === "up" ? <ArrowUpRight className="w-4 h-4 text-green-400" /> : <ArrowDownRight className="w-4 h-4 text-red-400" />}
                    </div>
                    <div className="text-sm text-muted-foreground mb-1">{item.indicator}</div>
                    <div className="text-2xl font-bold mb-1">{item.value}</div>
                    <div className={`text-sm font-semibold ${item.change.startsWith("+") ? "text-green-400" : "text-red-400"}`}>
                      {item.change}
                    </div>
                  </motion.div>
              )}
              </div>
            </div>
          </section>

          {/* Related Section 11: Research & Development Metrics */}
          <section className="py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <h2 className="text-4xl md:text-5xl font-bold mb-2">Research & Development Metrics</h2>
                <p className="text-muted-foreground mb-8">Innovation indicators and R&D investment tracking</p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-card rounded-2xl border border-border p-6">
                    <h3 className="text-2xl font-bold mb-4">R&D Investment Trends</h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <RechartsLineChart data={[
                    { year: "2024", "Government": 0.3, "Private": 0.2, "International": 0.1 },
                    { year: "2025", "Government": 0.5, "Private": 0.4, "International": 0.2 },
                    { year: "2026", "Government": 0.8, "Private": 0.7, "International": 0.4 },
                    { year: "2027", "Government": 1.2, "Private": 1.1, "International": 0.6 },
                    { year: "2028", "Government": 1.8, "Private": 1.6, "International": 0.9 }]
                    }>
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 20%)" />
                        <XAxis dataKey="year" stroke="hsl(0, 0%, 50%)" fontSize={12} />
                        <YAxis stroke="hsl(0, 0%, 50%)" fontSize={12} />
                        <Tooltip contentStyle={{ backgroundColor: "hsl(0, 0%, 10%)", border: "1px solid hsl(0, 0%, 20%)", borderRadius: "12px", color: "#fff" }} />
                        <Legend />
                        <Line type="monotone" dataKey="Government" stroke="hsl(217, 91%, 60%)" strokeWidth={3} />
                        <Line type="monotone" dataKey="Private" stroke="hsl(142, 71%, 45%)" strokeWidth={3} />
                        <Line type="monotone" dataKey="International" stroke="hsl(47, 96%, 53%)" strokeWidth={3} />
                      </RechartsLineChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="space-y-4">
                    {[
                  { metric: "Research Centers", value: "15", growth: "+5", icon: Brain },
                  { metric: "Patents Filed", value: "120", growth: "+45", icon: FileText },
                  { metric: "Tech Startups", value: "280", growth: "+85", icon: Rocket },
                  { metric: "Innovation Hubs", value: "8", growth: "+3", icon: Lightbulb },
                  { metric: "R&D Spending", value: "$2.1B", growth: "+35%", icon: DollarSign },
                  { metric: "Academic Partnerships", value: "45", growth: "+12", icon: GraduationCap }].
                  map((item, i) =>
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.3 }}
                    className="bg-card rounded-xl border border-border p-5 hover:border-primary/30 hover:shadow-lg transition-all duration-200">
                    
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <item.icon className="w-5 h-5 text-primary" />
                            <span className="font-semibold">{item.metric}</span>
                          </div>
                          <div className="text-right">
                            <div className="text-xl font-bold">{item.value}</div>
                            <div className="text-sm text-green-400">{item.growth}</div>
                          </div>
                        </div>
                      </motion.div>
                  )}
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Related Section 12: Social Development Indicators */}
          <section className="py-20 px-6 lg:px-12 bg-card/50">
            <div className="max-w-7xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <h2 className="text-4xl md:text-5xl font-bold mb-2">Social Development Indicators</h2>
                <p className="text-muted-foreground mb-8">Human development metrics and quality of life improvements</p>
                <div className="bg-card rounded-2xl border border-border p-6">
                  <ResponsiveContainer width="100%" height={400}>
                    <AreaChart data={[
                  { year: "2024", "HDI": 0.45, "Education": 0.42, "Health": 0.48, "Income": 0.45 },
                  { year: "2025", "HDI": 0.48, "Education": 0.45, "Health": 0.50, "Income": 0.48 },
                  { year: "2026", "HDI": 0.52, "Education": 0.50, "Health": 0.54, "Income": 0.52 },
                  { year: "2027", "HDI": 0.56, "Education": 0.54, "Health": 0.58, "Income": 0.56 },
                  { year: "2028", "HDI": 0.60, "Education": 0.58, "Health": 0.62, "Income": 0.60 },
                  { year: "2029", "HDI": 0.64, "Education": 0.62, "Health": 0.66, "Income": 0.64 },
                  { year: "2030", "HDI": 0.68, "Education": 0.66, "Health": 0.70, "Income": 0.68 }]
                  }>
                      <defs>
                        <linearGradient id="socHDI" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(142, 71%, 45%)" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="hsl(142, 71%, 45%)" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="socEducation" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(217, 91%, 60%)" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="hsl(217, 91%, 60%)" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="socHealth" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(0, 84%, 60%)" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="hsl(0, 84%, 60%)" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="socIncome" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(47, 96%, 53%)" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="hsl(47, 96%, 53%)" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 20%)" />
                      <XAxis dataKey="year" stroke="hsl(0, 0%, 50%)" fontSize={12} />
                      <YAxis stroke="hsl(0, 0%, 50%)" fontSize={12} />
                      <Tooltip contentStyle={{ backgroundColor: "hsl(0, 0%, 10%)", border: "1px solid hsl(0, 0%, 20%)", borderRadius: "12px", color: "#fff" }} />
                      <Legend />
                      <Area type="monotone" dataKey="HDI" stackId="1" stroke="hsl(142, 71%, 45%)" fill="url(#socHDI)" />
                      <Area type="monotone" dataKey="Education" stackId="1" stroke="hsl(217, 91%, 60%)" fill="url(#socEducation)" />
                      <Area type="monotone" dataKey="Health" stackId="1" stroke="hsl(0, 84%, 60%)" fill="url(#socHealth)" />
                      <Area type="monotone" dataKey="Income" stackId="1" stroke="hsl(47, 96%, 53%)" fill="url(#socIncome)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            </div>
          </section>
        </>
      } />);


};

export default PageDashboard;