import { Calendar } from "lucide-react";
import { GenericPageLayout } from "@/components/GenericPageLayout";
import { InteractiveTimeline } from "@/components/InteractiveTimeline";
import { motion } from "framer-motion";
import { CheckCircle, Target, TrendingUp, Users, Building2, Zap, Globe, Factory, GraduationCap, Heart, Star, Award, BarChart3, DollarSign, MapPin, Clock, ArrowRight, FileText, PieChart, LineChart as LineChartIcon, Activity, Pickaxe, Rocket, Shield, Leaf, Network, Briefcase, BookOpen, Layers, Gauge, TrendingDown, AlertTriangle, CheckCircle2, XCircle, ArrowUpRight, ArrowDownRight, Sparkles, Flame, Lightbulb, Brain, Cpu, Database } from "lucide-react";
import { AreaChart, Area, BarChart, Bar, LineChart as RechartsLineChart, Line, PieChart as RechartsPieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, ComposedChart } from "recharts";

const PageTimeline = () => {
  return (
    <GenericPageLayout
      title="Development Timeline"
      subtitle="2025-2035 Transformation Roadmap"
      icon={Calendar}
      overview="Afghanistan's comprehensive 10-year transformation journey from economic reform to national prosperity. This timeline outlines major milestones, achievements, and strategic phases that will guide the nation's development across infrastructure, industry, innovation, and inclusive growth."
      stats={[
      { value: "10", label: "Years" },
      { value: "7", label: "Phases" },
      { value: "$75B+", label: "Total Investment" },
      { value: "2M+", label: "Jobs Created" }]
      }
      sections={
      <>
          {/* Interactive Timeline Component */}
          <section className="py-16 px-6 lg:px-12 bg-card/50">
            <div className="max-w-7xl mx-auto">
              <InteractiveTimeline />
            </div>
          </section>

          {/* Phase Details */}
          <section className="py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Strategic Phases</h2>
              <div className="space-y-8">
                {[
              {
                phase: "Foundation (2026)",
                icon: Target,
                color: "from-blue-500 to-blue-600",
                focus: "Institutional frameworks and regulatory reforms",
                keyInitiatives: [
                "National Development Council establishment",
                "Investment Protection Framework",
                "E-governance platform launch",
                "50 flagship projects initiation"]

              },
              {
                phase: "Acceleration (2028)",
                icon: Building2,
                color: "from-amber-500 to-amber-600",
                focus: "Major infrastructure development surge",
                keyInitiatives: [
                "2,000km national highway network",
                "500MW renewable energy capacity",
                "Universal primary education",
                "20 operational industrial zones"]

              },
              {
                phase: "Transformation (2030)",
                icon: Factory,
                color: "from-emerald-500 to-emerald-600",
                focus: "Economic diversification and industrial growth",
                keyInitiatives: [
                "25% GDP from manufacturing",
                "$3B annual agricultural exports",
                "1,000 operational tech startups",
                "80% financial inclusion"]

              },
              {
                phase: "Integration (2032)",
                icon: Globe,
                color: "from-purple-500 to-purple-600",
                focus: "Regional connectivity and trade hub status",
                keyInitiatives: [
                "Railway network connecting 5 countries",
                "Energy exports to neighbours",
                "$10B annual transit trade",
                "Regional logistics hub establishment"]

              },
              {
                phase: "Innovation (2035)",
                icon: GraduationCap,
                color: "from-cyan-500 to-cyan-600",
                focus: "Knowledge economy and research excellence",
                keyInitiatives: [
                "10 world-class universities",
                "National research centres",
                "AI and tech exports",
                "Healthcare tourism destination"]

              },
              {
                phase: "Prosperity (2038)",
                icon: Heart,
                color: "from-rose-500 to-rose-600",
                focus: "Inclusive growth and universal access",
                keyInitiatives: [
                "100% electricity access",
                "Universal healthcare coverage",
                "Middle-income country status",
                "Environmental sustainability targets"]

              },
              {
                phase: "Vision Achieved (2040)",
                icon: Star,
                color: "from-yellow-500 to-yellow-600",
                focus: "Self-reliant, innovative, globally connected nation",
                keyInitiatives: [
                "Upper middle-income economy",
                "Regional economic leader",
                "Sustainable development model",
                "Global competitiveness achieved"]

              }].
              map((phase, i) =>
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl border border-border p-8 hover:border-primary/30 transition-all">
                
                    <div className="flex items-start gap-6">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${phase.color} flex items-center justify-center flex-shrink-0`}>
                        <phase.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2">{phase.phase}</h3>
                        <p className="text-muted-foreground mb-4">{phase.focus}</p>
                        <div className="grid md:grid-cols-2 gap-3">
                          {phase.keyInitiatives.map((initiative, j) =>
                      <div key={j} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                              <span className="text-muted-foreground">{initiative}</span>
                            </div>
                      )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
              )}
              </div>
            </div>
          </section>

          {/* Key Indicators Progress */}
          <section className="py-20 px-6 lg:px-12 bg-card/50">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Progress Indicators</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
              { label: "GDP Growth", current: "3%", target: "8%", icon: TrendingUp },
              { label: "Jobs Created", current: "50K", target: "2M+", icon: Users },
              { label: "Infrastructure Investment", current: "$5B", target: "$75B+", icon: Building2 },
              { label: "Energy Capacity", current: "1GW", target: "15GW", icon: Zap },
              { label: "Export Revenue", current: "$1B", target: "$20B", icon: Globe },
              { label: "Financial Inclusion", current: "30%", target: "95%", icon: Factory }].
              map((indicator, i) =>
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card rounded-xl border border-border p-6">
                
                    <div className="flex items-center gap-3 mb-4">
                      <indicator.icon className="w-6 h-6 text-primary" />
                      <h3 className="font-semibold">{indicator.label}</h3>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Current</span>
                        <span className="font-semibold">{indicator.current}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Target (2040)</span>
                        <span className="font-semibold text-primary">{indicator.target}</span>
                      </div>
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

          {/* Annual Investment Breakdown Chart */}
          <section className="py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-4xl md:text-5xl font-bold mb-2">Annual Investment Breakdown</h2>
                <p className="text-muted-foreground mb-8">Cumulative investment by phase and sector allocation</p>
                <div className="bg-card rounded-2xl border border-border p-6">
                  <ResponsiveContainer width="100%" height={450}>
                    <ComposedChart data={[
                  { year: "2026", infrastructure: 8, mining: 5, energy: 4, agriculture: 3, tech: 2, healthcare: 2, education: 1, total: 25 },
                  { year: "2028", infrastructure: 12, mining: 8, energy: 7, agriculture: 5, tech: 4, healthcare: 3, education: 2, total: 41 },
                  { year: "2030", infrastructure: 18, mining: 12, energy: 10, agriculture: 8, tech: 7, healthcare: 5, education: 4, total: 64 },
                  { year: "2032", infrastructure: 25, mining: 18, energy: 15, agriculture: 12, tech: 10, healthcare: 8, education: 6, total: 94 },
                  { year: "2034", infrastructure: 32, mining: 25, energy: 20, agriculture: 16, tech: 14, healthcare: 11, education: 9, total: 127 },
                  { year: "2036", infrastructure: 40, mining: 32, energy: 26, agriculture: 20, tech: 18, healthcare: 15, education: 12, total: 163 },
                  { year: "2038", infrastructure: 48, mining: 40, energy: 32, agriculture: 25, tech: 22, healthcare: 19, education: 16, total: 202 },
                  { year: "2040", infrastructure: 55, mining: 48, energy: 38, agriculture: 30, tech: 26, healthcare: 23, education: 20, total: 240 }]
                  }>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 20%)" />
                      <XAxis dataKey="year" stroke="hsl(0, 0%, 50%)" fontSize={12} />
                      <YAxis stroke="hsl(0, 0%, 50%)" fontSize={12} />
                      <Tooltip contentStyle={{ backgroundColor: "hsl(0, 0%, 10%)", border: "1px solid hsl(0, 0%, 20%)", borderRadius: "12px", color: "#fff" }} />
                      <Legend />
                      <Bar dataKey="infrastructure" stackId="a" fill="hsl(25, 95%, 53%)" name="Infrastructure" />
                      <Bar dataKey="mining" stackId="a" fill="hsl(217, 91%, 60%)" name="Mining" />
                      <Bar dataKey="energy" stackId="a" fill="hsl(47, 96%, 53%)" name="Energy" />
                      <Bar dataKey="agriculture" stackId="a" fill="hsl(142, 71%, 45%)" name="Agriculture" />
                      <Bar dataKey="tech" stackId="a" fill="hsl(262, 83%, 58%)" name="Technology" />
                      <Bar dataKey="healthcare" stackId="a" fill="hsl(0, 84%, 60%)" name="Healthcare" />
                      <Bar dataKey="education" stackId="a" fill="hsl(199, 89%, 48%)" name="Education" />
                      <Line type="monotone" dataKey="total" stroke="hsl(142, 71%, 45%)" strokeWidth={3} name="Total Investment" />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Milestone Achievements Timeline */}
          <section className="py-20 px-6 lg:px-12 bg-card/50">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Key Milestones & Achievements</h2>
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />
                <div className="space-y-12">
                  {[
                { year: "2026 Q1", milestone: "National Development Council Established", achievement: "50 flagship projects launched", icon: Award },
                { year: "2026 Q3", milestone: "Investment Protection Framework Enacted", achievement: "$5B in secured commitments", icon: FileText },
                { year: "2027 Q2", milestone: "First Major Mining Contract Signed", achievement: "Aynak Copper Mine development begins", icon: Pickaxe },
                { year: "2028 Q1", milestone: "2,000km Highway Network Completed", achievement: "All 34 provinces connected", icon: MapPin },
                { year: "2029 Q4", milestone: "500MW Renewable Energy Online", achievement: "1M+ households electrified", icon: Zap },
                { year: "2030 Q2", milestone: "Universal Primary Education Achieved", achievement: "100% enrollment rate", icon: GraduationCap },
                { year: "2031 Q3", milestone: "Regional Railway Network Operational", achievement: "5-country connectivity", icon: Globe },
                { year: "2032 Q4", milestone: "$10B Annual Transit Trade", achievement: "Regional logistics hub status", icon: TrendingUp },
                { year: "2035 Q1", milestone: "10 World-Class Universities Established", achievement: "50,000+ graduates annually", icon: GraduationCap },
                { year: "2038 Q2", milestone: "100% Electricity Access", achievement: "15GW total capacity", icon: Zap },
                { year: "2040 Q4", milestone: "Upper Middle-Income Status", achievement: "Vision 2040 achieved", icon: Star }].
                map((item, i) =>
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="relative flex items-start gap-6">
                  
                      <div className="hidden md:block absolute left-6 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />
                      <div className="md:ml-16 flex-1 bg-card rounded-2xl border border-border p-6 hover:border-primary/30 transition-all">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-2 bg-primary/20 rounded-lg">
                            <item.icon className="w-5 h-5 text-primary" />
                          </div>
                          
                        </div>
                        <h3 className="text-xl font-bold mb-2">{item.milestone}</h3>
                        <p className="text-muted-foreground">{item.achievement}</p>
                      </div>
                    </motion.div>
                )}
                </div>
              </div>
            </div>
          </section>

          {/* Sector Growth Projections */}
          <section className="py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-4xl md:text-5xl font-bold mb-2">Sector Growth Projections</h2>
                <p className="text-muted-foreground mb-8">Expected GDP contribution by sector through 2040</p>
                <div className="bg-card rounded-2xl border border-border p-6">
                  <ResponsiveContainer width="100%" height={400}>
                    <AreaChart data={[
                  { year: "2026", Mining: 8, Agriculture: 12, Energy: 5, Manufacturing: 6, Services: 15, Infrastructure: 10 },
                  { year: "2028", Mining: 12, Agriculture: 14, Energy: 8, Manufacturing: 10, Services: 18, Infrastructure: 12 },
                  { year: "2030", Mining: 18, Agriculture: 16, Energy: 12, Manufacturing: 15, Services: 22, Infrastructure: 15 },
                  { year: "2032", Mining: 22, Agriculture: 18, Energy: 16, Manufacturing: 20, Services: 25, Infrastructure: 18 },
                  { year: "2034", Mining: 25, Agriculture: 20, Energy: 20, Manufacturing: 24, Services: 28, Infrastructure: 20 },
                  { year: "2036", Mining: 28, Agriculture: 22, Energy: 24, Manufacturing: 27, Services: 30, Infrastructure: 22 },
                  { year: "2038", Mining: 30, Agriculture: 24, Energy: 28, Manufacturing: 30, Services: 32, Infrastructure: 24 },
                  { year: "2040", Mining: 32, Agriculture: 26, Energy: 30, Manufacturing: 32, Services: 35, Infrastructure: 26 }]
                  }>
                      <defs>
                        <linearGradient id="colorMining" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(217, 91%, 60%)" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="hsl(217, 91%, 60%)" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorAgriculture" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(142, 71%, 45%)" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="hsl(142, 71%, 45%)" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorEnergy" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(47, 96%, 53%)" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="hsl(47, 96%, 53%)" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorManufacturing" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(25, 95%, 53%)" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="hsl(25, 95%, 53%)" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorServices" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(262, 83%, 58%)" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="hsl(262, 83%, 58%)" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorInfrastructure" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(199, 89%, 48%)" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="hsl(199, 89%, 48%)" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 20%)" />
                      <XAxis dataKey="year" stroke="hsl(0, 0%, 50%)" fontSize={12} />
                      <YAxis stroke="hsl(0, 0%, 50%)" fontSize={12} />
                      <Tooltip contentStyle={{ backgroundColor: "hsl(0, 0%, 10%)", border: "1px solid hsl(0, 0%, 20%)", borderRadius: "12px", color: "#fff" }} />
                      <Legend />
                      <Area type="monotone" dataKey="Mining" stackId="1" stroke="hsl(217, 91%, 60%)" fill="url(#colorMining)" />
                      <Area type="monotone" dataKey="Agriculture" stackId="1" stroke="hsl(142, 71%, 45%)" fill="url(#colorAgriculture)" />
                      <Area type="monotone" dataKey="Energy" stackId="1" stroke="hsl(47, 96%, 53%)" fill="url(#colorEnergy)" />
                      <Area type="monotone" dataKey="Manufacturing" stackId="1" stroke="hsl(25, 95%, 53%)" fill="url(#colorManufacturing)" />
                      <Area type="monotone" dataKey="Services" stackId="1" stroke="hsl(262, 83%, 58%)" fill="url(#colorServices)" />
                      <Area type="monotone" dataKey="Infrastructure" stackId="1" stroke="hsl(199, 89%, 48%)" fill="url(#colorInfrastructure)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Regional Development Phases */}
          <section className="py-20 px-6 lg:px-12 bg-card/50">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Regional Development Phases</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
              { region: "Central", phases: ["2025-2027", "2028-2030", "2031-2033", "2034-2035"], focus: "Capital region, tech hub, financial center", projects: 280 },
              { region: "North", phases: ["2025-2028", "2029-2031", "2032-2034", "2035"], focus: "Agriculture, mining, trade routes", projects: 240 },
              { region: "West", phases: ["2025-2027", "2028-2030", "2031-2033", "2034-2035"], focus: "Energy, manufacturing, transit hub", projects: 180 },
              { region: "South", phases: ["2025-2028", "2029-2031", "2032-2034", "2035"], focus: "Agriculture, mining, logistics", projects: 140 },
              { region: "East", phases: ["2025-2028", "2029-2031", "2032-2034", "2035"], focus: "Mining, energy, border trade", projects: 160 }].
              map((region, i) =>
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl border border-border p-6">
                
                    <h3 className="text-xl font-bold mb-3">{region.region} Region</h3>
                    <p className="text-sm text-muted-foreground mb-4">{region.focus}</p>
                    <div className="space-y-2 mb-4">
                      {region.phases.map((phase, j) =>
                  <div key={j} className="flex items-center gap-2 text-xs">
                          <Clock className="w-3 h-3 text-primary" />
                          <span className="text-muted-foreground">{phase}</span>
                        </div>
                  )}
                    </div>
                    <div className="pt-4 border-t border-border">
                      <div className="text-primary font-semibold">{region.projects} Projects</div>
                    </div>
                  </motion.div>
              )}
              </div>
            </div>
          </section>

          {/* Success Metrics Dashboard */}
          <section className="py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Success Metrics Dashboard</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
              { metric: "GDP Per Capita", current: "$650", target: "$5,000", icon: DollarSign, color: "from-green-500 to-emerald-600" },
              { metric: "Life Expectancy", current: "65 years", target: "75 years", icon: Heart, color: "from-red-500 to-rose-600" },
              { metric: "Literacy Rate", current: "43%", target: "95%", icon: GraduationCap, color: "from-blue-500 to-cyan-600" },
              { metric: "Internet Penetration", current: "25%", target: "90%", icon: Activity, color: "from-purple-500 to-pink-600" },
              { metric: "Access to Clean Water", current: "65%", target: "100%", icon: Globe, color: "from-cyan-500 to-blue-600" },
              { metric: "Women in Workforce", current: "15%", target: "45%", icon: Users, color: "from-pink-500 to-rose-600" },
              { metric: "Rural Electrification", current: "40%", target: "100%", icon: Zap, color: "from-yellow-500 to-orange-600" },
              { metric: "Road Density", current: "0.3 km/km²", target: "1.2 km/km²", icon: MapPin, color: "from-orange-500 to-amber-600" }].
              map((item, i) =>
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                className="bg-card rounded-xl border border-border p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-200">
                
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-3">{item.metric}</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Current</span>
                        <span className="font-semibold">{item.current}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Target (2040)</span>
                        <span className="font-semibold text-primary">{item.target}</span>
                      </div>
                    </div>
                  </motion.div>
              )}
              </div>
            </div>
          </section>

          {/* Related Section 1: Quarterly Progress Tracking */}
          <section className="py-20 px-6 lg:px-12 bg-card/50">
            <div className="max-w-7xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <h2 className="text-4xl md:text-5xl font-bold mb-2">Quarterly Progress Tracking</h2>
                <p className="text-muted-foreground mb-8">Detailed quarterly milestones and achievements across all phases</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                { quarter: "2026 Q1", achievements: 12, investment: "$2.5B", projects: 50, icon: Rocket },
                { quarter: "2026 Q2", achievements: 15, investment: "$3.2B", projects: 65, icon: Flame },
                { quarter: "2026 Q3", achievements: 18, investment: "$4.1B", projects: 82, icon: Lightbulb },
                { quarter: "2026 Q4", achievements: 22, investment: "$5.5B", projects: 105, icon: Star },
                { quarter: "2027 Q1", achievements: 25, investment: "$6.8B", projects: 128, icon: Brain },
                { quarter: "2027 Q2", achievements: 28, investment: "$8.2B", projects: 152, icon: Cpu },
                { quarter: "2027 Q3", achievements: 32, investment: "$9.5B", projects: 178, icon: Database },
                { quarter: "2027 Q4", achievements: 35, investment: "$11.2B", projects: 205, icon: Network }].
                map((item, i) =>
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="bg-card rounded-xl border border-border p-5 hover:border-primary/30 hover:shadow-lg transition-all duration-200">
                  
                      <div className="flex items-center gap-3 mb-3">
                        <item.icon className="w-5 h-5 text-primary" />
                        
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Achievements</span>
                          <span className="font-semibold">{item.achievements}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Investment</span>
                          <span className="font-semibold text-primary">{item.investment}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Projects</span>
                          <span className="font-semibold">{item.projects}</span>
                        </div>
                      </div>
                    </motion.div>
                )}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Related Section 2: Sector Investment Timeline */}
          <section className="py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <h2 className="text-4xl md:text-5xl font-bold mb-2">Sector Investment Timeline</h2>
                <p className="text-muted-foreground mb-8">Investment allocation timeline by sector showing phased approach</p>
                <div className="bg-card rounded-2xl border border-border p-6">
                  <ResponsiveContainer width="100%" height={450}>
                    <AreaChart data={[
                  { year: "2026", Mining: 5, Energy: 4, Infrastructure: 8, Agriculture: 3, Tech: 2, Manufacturing: 3 },
                  { year: "2028", Mining: 8, Energy: 7, Infrastructure: 12, Agriculture: 5, Tech: 4, Manufacturing: 5 },
                  { year: "2030", Mining: 12, Energy: 10, Infrastructure: 18, Agriculture: 8, Tech: 7, Manufacturing: 8 },
                  { year: "2032", Mining: 18, Energy: 15, Infrastructure: 25, Agriculture: 12, Tech: 10, Manufacturing: 12 },
                  { year: "2034", Mining: 25, Energy: 20, Infrastructure: 32, Agriculture: 16, Tech: 14, Manufacturing: 16 },
                  { year: "2036", Mining: 32, Energy: 26, Infrastructure: 40, Agriculture: 20, Tech: 18, Manufacturing: 20 },
                  { year: "2038", Mining: 40, Energy: 32, Infrastructure: 48, Agriculture: 25, Tech: 22, Manufacturing: 24 },
                  { year: "2040", Mining: 48, Energy: 38, Infrastructure: 55, Agriculture: 30, Tech: 26, Manufacturing: 28 }]
                  }>
                      <defs>
                        <linearGradient id="timelineMining" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(217, 91%, 60%)" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="hsl(217, 91%, 60%)" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="timelineEnergy" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(47, 96%, 53%)" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="hsl(47, 96%, 53%)" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="timelineInfrastructure" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(25, 95%, 53%)" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="hsl(25, 95%, 53%)" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="timelineAgriculture" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(142, 71%, 45%)" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="hsl(142, 71%, 45%)" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="timelineTech" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(262, 83%, 58%)" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="hsl(262, 83%, 58%)" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="timelineManufacturing" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(199, 89%, 48%)" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="hsl(199, 89%, 48%)" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 20%)" />
                      <XAxis dataKey="year" stroke="hsl(0, 0%, 50%)" fontSize={12} />
                      <YAxis stroke="hsl(0, 0%, 50%)" fontSize={12} />
                      <Tooltip contentStyle={{ backgroundColor: "hsl(0, 0%, 10%)", border: "1px solid hsl(0, 0%, 20%)", borderRadius: "12px", color: "#fff" }} />
                      <Legend />
                      <Area type="monotone" dataKey="Mining" stackId="1" stroke="hsl(217, 91%, 60%)" fill="url(#timelineMining)" />
                      <Area type="monotone" dataKey="Energy" stackId="1" stroke="hsl(47, 96%, 53%)" fill="url(#timelineEnergy)" />
                      <Area type="monotone" dataKey="Infrastructure" stackId="1" stroke="hsl(25, 95%, 53%)" fill="url(#timelineInfrastructure)" />
                      <Area type="monotone" dataKey="Agriculture" stackId="1" stroke="hsl(142, 71%, 45%)" fill="url(#timelineAgriculture)" />
                      <Area type="monotone" dataKey="Tech" stackId="1" stroke="hsl(262, 83%, 58%)" fill="url(#timelineTech)" />
                      <Area type="monotone" dataKey="Manufacturing" stackId="1" stroke="hsl(199, 89%, 48%)" fill="url(#timelineManufacturing)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Related Section 3: Critical Success Factors */}
          <section className="py-20 px-6 lg:px-12 bg-card/50">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Critical Success Factors</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
              { factor: "Political Stability", importance: "Critical", status: "Improving", icon: Shield, color: "from-blue-500 to-cyan-600", description: "Stable governance framework enabling long-term planning" },
              { factor: "Infrastructure Development", importance: "Critical", status: "On Track", icon: Building2, color: "from-orange-500 to-amber-600", description: "Foundation for all economic activities" },
              { factor: "International Partnerships", importance: "Very High", status: "Expanding", icon: Network, color: "from-purple-500 to-pink-600", description: "Global support and investment flows" },
              { factor: "Human Capital Development", importance: "Very High", status: "Accelerating", icon: GraduationCap, color: "from-indigo-500 to-violet-600", description: "Skilled workforce for modern economy" },
              { factor: "Technology Adoption", importance: "High", status: "Rapid", icon: Cpu, color: "from-cyan-500 to-blue-600", description: "Digital transformation across sectors" },
              { factor: "Environmental Sustainability", importance: "High", status: "Integrated", icon: Leaf, color: "from-green-500 to-emerald-600", description: "Green growth and climate resilience" },
              { factor: "Financial Systems", importance: "Very High", status: "Modernizing", icon: DollarSign, color: "from-yellow-500 to-orange-600", description: "Robust banking and capital markets" },
              { factor: "Regional Integration", importance: "High", status: "Advancing", icon: Globe, color: "from-teal-500 to-green-600", description: "Trade and connectivity with neighbors" },
              { factor: "Innovation Ecosystem", importance: "High", status: "Emerging", icon: Lightbulb, color: "from-pink-500 to-rose-600", description: "Startups and research institutions" }].
              map((item, i) =>
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                className="bg-card rounded-2xl border border-border p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-200">
                
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-bold">{item.factor}</h3>
                          <span className={`px-2 py-0.5 text-xs rounded ${
                      item.importance === "Critical" ? "bg-red-500/20 text-red-400" :
                      item.importance === "Very High" ? "bg-orange-500/20 text-orange-400" :
                      "bg-yellow-500/20 text-yellow-400"}`
                      }>
                            {item.importance}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                        <div className="flex items-center gap-2 text-xs">
                          <span className="text-muted-foreground">Status:</span>
                          <span className="font-semibold text-primary">{item.status}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
              )}
              </div>
            </div>
          </section>

          {/* Related Section 4: Risk Mitigation Strategies */}
          <section className="py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <h2 className="text-4xl md:text-5xl font-bold mb-2">Risk Mitigation Strategies</h2>
                <p className="text-muted-foreground mb-8">Comprehensive risk management framework for timeline execution</p>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                { risk: "Political Instability", mitigation: "Multi-party consensus, international guarantees", probability: "Low", impact: "High", icon: Shield },
                { risk: "Funding Gaps", mitigation: "Diversified financing, contingency reserves", probability: "Medium", impact: "High", icon: DollarSign },
                { risk: "Infrastructure Delays", mitigation: "Phased approach, buffer timelines", probability: "Medium", impact: "Medium", icon: Building2 },
                { risk: "Skills Shortage", mitigation: "Training programs, international expertise", probability: "Medium", impact: "Medium", icon: GraduationCap },
                { risk: "Climate Events", mitigation: "Resilient design, adaptation measures", probability: "Low", impact: "Medium", icon: Leaf },
                { risk: "Market Volatility", mitigation: "Diversified portfolio, hedging strategies", probability: "Medium", impact: "Low", icon: BarChart3 }].
                map((item, i) =>
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.3 }}
                  className="bg-card rounded-2xl border border-border p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-200">
                  
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-primary/20 rounded-lg">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold mb-2">{item.risk}</h3>
                          <p className="text-sm text-muted-foreground mb-3">{item.mitigation}</p>
                          <div className="flex items-center gap-4 text-xs">
                            <div>
                              <span className="text-muted-foreground">Probability: </span>
                              <span className="font-semibold">{item.probability}</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Impact: </span>
                              <span className="font-semibold">{item.impact}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                )}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Related Section 5: Technology Integration Roadmap */}
          <section className="py-20 px-6 lg:px-12 bg-card/50">
            <div className="max-w-7xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <h2 className="text-4xl md:text-5xl font-bold mb-2">Technology Integration Roadmap</h2>
                <p className="text-muted-foreground mb-8">Digital transformation milestones across development phases</p>
                <div className="bg-card rounded-2xl border border-border p-6">
                  <ResponsiveContainer width="100%" height={400}>
                    <RechartsLineChart data={[
                  { year: "2026", "E-Governance": 30, "Digital Infrastructure": 25, "AI Integration": 10, "IoT Deployment": 15 },
                  { year: "2028", "E-Governance": 60, "Digital Infrastructure": 50, "AI Integration": 25, "IoT Deployment": 35 },
                  { year: "2030", "E-Governance": 85, "Digital Infrastructure": 75, "AI Integration": 50, "IoT Deployment": 60 },
                  { year: "2032", "E-Governance": 95, "Digital Infrastructure": 90, "AI Integration": 70, "IoT Deployment": 80 },
                  { year: "2034", "E-Governance": 100, "Digital Infrastructure": 100, "AI Integration": 85, "IoT Deployment": 95 },
                  { year: "2036", "E-Governance": 100, "Digital Infrastructure": 100, "AI Integration": 95, "IoT Deployment": 100 }]
                  }>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 20%)" />
                      <XAxis dataKey="year" stroke="hsl(0, 0%, 50%)" fontSize={12} />
                      <YAxis stroke="hsl(0, 0%, 50%)" fontSize={12} />
                      <Tooltip contentStyle={{ backgroundColor: "hsl(0, 0%, 10%)", border: "1px solid hsl(0, 0%, 20%)", borderRadius: "12px", color: "#fff" }} />
                      <Legend />
                      <Line type="monotone" dataKey="E-Governance" stroke="hsl(217, 91%, 60%)" strokeWidth={3} />
                      <Line type="monotone" dataKey="Digital Infrastructure" stroke="hsl(142, 71%, 45%)" strokeWidth={3} />
                      <Line type="monotone" dataKey="AI Integration" stroke="hsl(262, 83%, 58%)" strokeWidth={3} />
                      <Line type="monotone" dataKey="IoT Deployment" stroke="hsl(47, 96%, 53%)" strokeWidth={3} />
                    </RechartsLineChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Related Section 6: Employment Generation Timeline */}
          <section className="py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <h2 className="text-4xl md:text-5xl font-bold mb-2">Employment Generation Timeline</h2>
                <p className="text-muted-foreground mb-8">Job creation projections by sector and phase</p>
                <div className="bg-card rounded-2xl border border-border p-6">
                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={[
                  { phase: "2026", Direct: 50, Indirect: 120, Total: 170 },
                  { phase: "2028", Direct: 180, Indirect: 420, Total: 600 },
                  { phase: "2030", Direct: 450, Indirect: 1050, Total: 1500 },
                  { phase: "2032", Direct: 800, Indirect: 2000, Total: 2800 },
                  { phase: "2034", Direct: 1200, Indirect: 3000, Total: 4200 },
                  { phase: "2036", Direct: 1600, Indirect: 4000, Total: 5600 },
                  { phase: "2038", Direct: 2000, Indirect: 5000, Total: 7000 },
                  { phase: "2040", Direct: 2500, Indirect: 6250, Total: 8750 }]
                  }>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 20%)" />
                      <XAxis dataKey="phase" stroke="hsl(0, 0%, 50%)" fontSize={12} />
                      <YAxis stroke="hsl(0, 0%, 50%)" fontSize={12} />
                      <Tooltip contentStyle={{ backgroundColor: "hsl(0, 0%, 10%)", border: "1px solid hsl(0, 0%, 20%)", borderRadius: "12px", color: "#fff" }} />
                      <Legend />
                      <Bar dataKey="Direct" name="Direct Jobs (K)" fill="hsl(142, 71%, 45%)" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="Indirect" name="Indirect Jobs (K)" fill="hsl(217, 91%, 60%)" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Related Section 7: International Benchmarking */}
          <section className="py-20 px-6 lg:px-12 bg-card/50">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">International Benchmarking</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
              { country: "Singapore (1960s)", metric: "GDP Growth", afghan: "8%", benchmark: "9%", icon: TrendingUp, color: "from-green-500 to-emerald-600" },
              { country: "South Korea (1970s)", metric: "Manufacturing", afghan: "25%", benchmark: "28%", icon: Factory, color: "from-blue-500 to-cyan-600" },
              { country: "UAE (2000s)", metric: "Infrastructure", afghan: "$50B", benchmark: "$65B", icon: Building2, color: "from-orange-500 to-amber-600" },
              { country: "Rwanda (2010s)", metric: "E-Governance", afghan: "95%", benchmark: "98%", icon: Cpu, color: "from-purple-500 to-pink-600" },
              { country: "Vietnam (1990s)", metric: "Export Growth", afghan: "20%", benchmark: "22%", icon: Globe, color: "from-cyan-500 to-blue-600" },
              { country: "Botswana (1980s)", metric: "Resource Management", afghan: "85%", benchmark: "90%", icon: Pickaxe, color: "from-yellow-500 to-orange-600" }].
              map((item, i) =>
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                className="bg-card rounded-2xl border border-border p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-200">
                
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold mb-1">{item.country}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{item.metric}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Afghanistan</span>
                        <span className="font-semibold text-primary">{item.afghan}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Benchmark</span>
                        <span className="font-semibold">{item.benchmark}</span>
                      </div>
                    </div>
                  </motion.div>
              )}
              </div>
            </div>
          </section>

          {/* Related Section 8: Stakeholder Engagement Timeline */}
          <section className="py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <h2 className="text-4xl md:text-5xl font-bold mb-2">Stakeholder Engagement Timeline</h2>
                <p className="text-muted-foreground mb-8">Key stakeholder participation milestones and engagement phases</p>
                <div className="space-y-6">
                  {[
                { phase: "2026", stakeholders: ["Government", "International Donors", "Development Banks"], engagement: "Foundation", icon: Network },
                { phase: "2028", stakeholders: ["Private Sector", "NGOs", "Academic Institutions"], engagement: "Expansion", icon: Briefcase },
                { phase: "2030", stakeholders: ["Regional Partners", "Tech Companies", "Investors"], engagement: "Integration", icon: Globe },
                { phase: "2032", stakeholders: ["Global Markets", "Innovation Hubs", "Research Centers"], engagement: "Maturation", icon: Rocket },
                { phase: "2035+", stakeholders: ["All Sectors", "Global Network", "Sustainable Partners"], engagement: "Optimization", icon: Star }].
                map((item, i) =>
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.3 }}
                  className="bg-card rounded-2xl border border-border p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-200">
                  
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/20 rounded-xl">
                          <item.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <h3 className="text-xl font-bold">{item.phase}</h3>
                            <span className="px-3 py-1 bg-primary/20 text-primary text-sm font-semibold rounded-full">{item.engagement}</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {item.stakeholders.map((stakeholder, j) =>
                        <span key={j} className="px-3 py-1 bg-background rounded-lg border border-border text-sm text-muted-foreground">
                                {stakeholder}
                              </span>
                        )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                )}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Related Section 9: Environmental Impact Timeline */}
          <section className="py-20 px-6 lg:px-12 bg-card/50">
            <div className="max-w-7xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <h2 className="text-4xl md:text-5xl font-bold mb-2">Environmental Impact & Sustainability Timeline</h2>
                <p className="text-muted-foreground mb-8">Environmental protection and sustainability milestones</p>
                <div className="bg-card rounded-2xl border border-border p-6">
                  <ResponsiveContainer width="100%" height={400}>
                    <AreaChart data={[
                  { year: "2026", "Renewable Energy": 20, "Carbon Reduction": 15, "Forest Cover": 2, "Water Conservation": 25 },
                  { year: "2028", "Renewable Energy": 40, "Carbon Reduction": 30, "Forest Cover": 5, "Water Conservation": 45 },
                  { year: "2030", "Renewable Energy": 60, "Carbon Reduction": 50, "Forest Cover": 10, "Water Conservation": 65 },
                  { year: "2032", "Renewable Energy": 75, "Carbon Reduction": 70, "Forest Cover": 15, "Water Conservation": 80 },
                  { year: "2034", "Renewable Energy": 85, "Carbon Reduction": 85, "Forest Cover": 20, "Water Conservation": 90 },
                  { year: "2036", "Renewable Energy": 95, "Carbon Reduction": 95, "Forest Cover": 25, "Water Conservation": 95 },
                  { year: "2038", "Renewable Energy": 100, "Carbon Reduction": 100, "Forest Cover": 30, "Water Conservation": 100 }]
                  }>
                      <defs>
                        <linearGradient id="envRenewable" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(142, 71%, 45%)" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="hsl(142, 71%, 45%)" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="envCarbon" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(47, 96%, 53%)" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="hsl(47, 96%, 53%)" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="envForest" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(25, 95%, 53%)" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="hsl(25, 95%, 53%)" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="envWater" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(199, 89%, 48%)" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="hsl(199, 89%, 48%)" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 20%)" />
                      <XAxis dataKey="year" stroke="hsl(0, 0%, 50%)" fontSize={12} />
                      <YAxis stroke="hsl(0, 0%, 50%)" fontSize={12} />
                      <Tooltip contentStyle={{ backgroundColor: "hsl(0, 0%, 10%)", border: "1px solid hsl(0, 0%, 20%)", borderRadius: "12px", color: "#fff" }} />
                      <Legend />
                      <Area type="monotone" dataKey="Renewable Energy" stackId="1" stroke="hsl(142, 71%, 45%)" fill="url(#envRenewable)" />
                      <Area type="monotone" dataKey="Carbon Reduction" stackId="1" stroke="hsl(47, 96%, 53%)" fill="url(#envCarbon)" />
                      <Area type="monotone" dataKey="Forest Cover" stackId="1" stroke="hsl(25, 95%, 53%)" fill="url(#envForest)" />
                      <Area type="monotone" dataKey="Water Conservation" stackId="1" stroke="hsl(199, 89%, 48%)" fill="url(#envWater)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Related Section 10: Funding Sources Breakdown */}
          <section className="py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <h2 className="text-4xl md:text-5xl font-bold mb-2">Funding Sources Breakdown</h2>
                <p className="text-muted-foreground mb-8">Investment financing by source across timeline</p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-card rounded-2xl border border-border p-6">
                    <ResponsiveContainer width="100%" height={350}>
                      <RechartsPieChart>
                        <Pie
                        data={[
                        { name: "Development Banks", value: 35, color: "hsl(217, 91%, 60%)" },
                        { name: "Private Investment", value: 30, color: "hsl(142, 71%, 45%)" },
                        { name: "Government Budget", value: 20, color: "hsl(47, 96%, 53%)" },
                        { name: "International Grants", value: 10, color: "hsl(25, 95%, 53%)" },
                        { name: "Public-Private Partnerships", value: 5, color: "hsl(262, 83%, 58%)" }]
                        }
                        cx="50%"
                        cy="50%"
                        outerRadius={120}
                        innerRadius={60}
                        paddingAngle={3}
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        labelLine={false}>
                        
                          {[
                        { name: "Development Banks", value: 35, color: "hsl(217, 91%, 60%)" },
                        { name: "Private Investment", value: 30, color: "hsl(142, 71%, 45%)" },
                        { name: "Government Budget", value: 20, color: "hsl(47, 96%, 53%)" },
                        { name: "International Grants", value: 10, color: "hsl(25, 95%, 53%)" },
                        { name: "Public-Private Partnerships", value: 5, color: "hsl(262, 83%, 58%)" }].
                        map((entry, i) =>
                        <Cell key={i} fill={entry.color} />
                        )}
                        </Pie>
                        <Tooltip contentStyle={{ backgroundColor: "hsl(0, 0%, 10%)", border: "1px solid hsl(0, 0%, 20%)", borderRadius: "12px", color: "#fff" }} />
                        <Legend />
                      </RechartsPieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="space-y-4">
                    {[
                  { source: "Development Banks", amount: "$26.25B", projects: 350, icon: Building2 },
                  { source: "Private Investment", amount: "$22.5B", projects: 280, icon: Briefcase },
                  { source: "Government Budget", amount: "$15B", projects: 200, icon: DollarSign },
                  { source: "International Grants", amount: "$7.5B", projects: 120, icon: Globe },
                  { source: "Public-Private Partnerships", amount: "$3.75B", projects: 50, icon: Network }].
                  map((item, i) =>
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.3 }}
                    className="bg-card rounded-xl border border-border p-5 hover:border-primary/30 hover:shadow-lg transition-all duration-200">
                    
                        <div className="flex items-center gap-4">
                          <div className="p-2 bg-primary/20 rounded-lg">
                            <item.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold mb-1">{item.source}</h3>
                            <div className="flex items-center gap-4 text-sm">
                              <span className="text-primary font-semibold">{item.amount}</span>
                              <span className="text-muted-foreground">{item.projects} Projects</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                  )}
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Related Section 11: Innovation & Research Timeline */}
          <section className="py-20 px-6 lg:px-12 bg-card/50">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Innovation & Research Timeline</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
              { year: "2026", innovation: "Tech Hubs", research: "5 Centers", patents: 12, icon: Cpu, color: "from-purple-500 to-pink-600" },
              { year: "2028", innovation: "AI Labs", research: "10 Centers", patents: 45, icon: Brain, color: "from-indigo-500 to-violet-600" },
              { year: "2030", innovation: "Research Universities", research: "15 Centers", patents: 120, icon: GraduationCap, color: "from-blue-500 to-cyan-600" },
              { year: "2032", innovation: "Innovation Districts", research: "20 Centers", patents: 280, icon: Lightbulb, color: "from-yellow-500 to-orange-600" },
              { year: "2034", innovation: "Tech Exports", research: "25 Centers", patents: 450, icon: Rocket, color: "from-green-500 to-emerald-600" },
              { year: "2036", innovation: "Global R&D", research: "30 Centers", patents: 680, icon: Globe, color: "from-cyan-500 to-blue-600" },
              { year: "2038", innovation: "Innovation Leader", research: "35 Centers", patents: 950, icon: Star, color: "from-pink-500 to-rose-600" },
              { year: "2040", innovation: "Tech Powerhouse", research: "40 Centers", patents: 1200, icon: Sparkles, color: "from-amber-500 to-yellow-600" }].
              map((item, i) =>
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                className="bg-card rounded-2xl border border-border p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-200 text-center">
                
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-4`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold mb-2">{item.year}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{item.innovation}</p>
                    <div className="space-y-1 text-xs">
                      
                      <div className="text-primary font-semibold">{item.patents} Patents</div>
                    </div>
                  </motion.div>
              )}
              </div>
            </div>
          </section>

          {/* Related Section 12: Quality of Life Indicators */}
          <section className="py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <h2 className="text-4xl md:text-5xl font-bold mb-2">Quality of Life Indicators</h2>
                <p className="text-muted-foreground mb-8">Social development metrics tracking human development index improvements</p>
                <div className="bg-card rounded-2xl border border-border p-6">
                  <ResponsiveContainer width="100%" height={400}>
                    <RechartsLineChart data={[
                  { year: "2026", "HDI": 0.45, "Education Index": 0.42, "Health Index": 0.48, "Income Index": 0.45 },
                  { year: "2028", "HDI": 0.52, "Education Index": 0.50, "Health Index": 0.54, "Income Index": 0.52 },
                  { year: "2030", "HDI": 0.60, "Education Index": 0.58, "Health Index": 0.62, "Income Index": 0.60 },
                  { year: "2032", "HDI": 0.68, "Education Index": 0.66, "Health Index": 0.70, "Income Index": 0.68 },
                  { year: "2034", "HDI": 0.75, "Education Index": 0.73, "Health Index": 0.77, "Income Index": 0.75 },
                  { year: "2036", "HDI": 0.82, "Education Index": 0.80, "Health Index": 0.84, "Income Index": 0.82 },
                  { year: "2038", "HDI": 0.88, "Education Index": 0.86, "Health Index": 0.90, "Income Index": 0.88 },
                  { year: "2040", "HDI": 0.92, "Education Index": 0.90, "Health Index": 0.94, "Income Index": 0.92 }]
                  }>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 20%)" />
                      <XAxis dataKey="year" stroke="hsl(0, 0%, 50%)" fontSize={12} />
                      <YAxis stroke="hsl(0, 0%, 50%)" fontSize={12} />
                      <Tooltip contentStyle={{ backgroundColor: "hsl(0, 0%, 10%)", border: "1px solid hsl(0, 0%, 20%)", borderRadius: "12px", color: "#fff" }} />
                      <Legend />
                      <Line type="monotone" dataKey="HDI" stroke="hsl(142, 71%, 45%)" strokeWidth={3} />
                      <Line type="monotone" dataKey="Education Index" stroke="hsl(217, 91%, 60%)" strokeWidth={2} />
                      <Line type="monotone" dataKey="Health Index" stroke="hsl(0, 84%, 60%)" strokeWidth={2} />
                      <Line type="monotone" dataKey="Income Index" stroke="hsl(47, 96%, 53%)" strokeWidth={2} />
                    </RechartsLineChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            </div>
          </section>
        </>
      } />);


};

export default PageTimeline;