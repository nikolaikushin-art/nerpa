import { Search } from "lucide-react";
import { GenericPageLayout } from "@/components/GenericPageLayout";
import { InteractiveSectorExplorer } from "@/components/InteractiveSectorExplorer";
import { motion } from "framer-motion";
import { Filter, Grid, List, TrendingUp, BarChart3, PieChart, Target, Award, DollarSign, Users, Activity, Zap, Globe, Building2, CheckCircle, Factory } from "lucide-react";
import { BarChart, Bar, PieChart as RechartsPieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const PageExplorer = () => {
  return (
    <GenericPageLayout
      title="Interactive Sector Explorer"
      subtitle="Discovery Hub"
      icon={Search}
      overview="Explore Afghanistan's comprehensive investment landscape through our interactive sector explorer. Filter, search, and discover over 50 investment sectors across multiple categories. Each sector profile includes detailed information about investment requirements, job potential, growth projections, and strategic opportunities. Use advanced filters to find sectors matching your investment profile, risk tolerance, and strategic objectives."
      stats={[
        { value: "50+", label: "Sectors" },
        { value: "10+", label: "Categories" },
        { value: "Real-time", label: "Filtering" },
        { value: "100%", label: "Coverage" },
      ]}
      sections={
        <>
          {/* Interactive Explorer Component */}
          <section className="py-16 px-6 lg:px-12 bg-card/50">
            <div className="max-w-7xl mx-auto">
              <InteractiveSectorExplorer />
            </div>
          </section>

          {/* Explorer Features */}
          <section className="py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Explorer Features</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    feature: "Advanced Search",
                    icon: Search,
                    description: "Search across all sectors by name, category, or keywords. Find exactly what you're looking for with intelligent search algorithms.",
                    color: "from-blue-500 to-cyan-600"
                  },
                  {
                    feature: "Smart Filtering",
                    icon: Filter,
                    description: "Filter sectors by investment range, risk level, timeline, category, and more. Narrow down options to match your criteria.",
                    color: "from-purple-500 to-pink-600"
                  },
                  {
                    feature: "Multiple Views",
                    icon: Grid,
                    description: "Switch between grid and list views. Compare sectors side-by-side or browse in detail view for comprehensive information.",
                    color: "from-green-500 to-emerald-600"
                  }
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-card rounded-2xl border border-border p-8 text-center"
                  >
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mx-auto mb-4`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{feature.feature}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Sector Categories */}
          <section className="py-20 px-6 lg:px-12 bg-card/50">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Sector Categories</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { category: "Natural Resources", count: 12, investment: "$30B", icon: TrendingUp, color: "from-blue-500 to-cyan-600" },
                  { category: "Agriculture", count: 8, investment: "$8B", icon: TrendingUp, color: "from-green-500 to-emerald-600" },
                  { category: "Energy", count: 6, investment: "$15B", icon: Zap, color: "from-yellow-500 to-orange-600" },
                  { category: "Manufacturing", count: 15, investment: "$15B", icon: Factory, color: "from-purple-500 to-pink-600" },
                  { category: "Services", count: 10, investment: "$12B", icon: Activity, color: "from-cyan-500 to-blue-600" },
                  { category: "Technology", count: 5, investment: "$2B", icon: Globe, color: "from-indigo-500 to-violet-600" },
                  { category: "Infrastructure", count: 8, investment: "$50B", icon: Building2, color: "from-orange-500 to-amber-600" },
                  { category: "Healthcare", count: 4, investment: "$3B", icon: Award, color: "from-red-500 to-rose-600" },
                ].map((cat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03 }}
                    className="bg-card rounded-xl border border-border p-6 text-center hover:border-primary/30 transition-all"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center mx-auto mb-3`}>
                      <cat.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold mb-1">{cat.category}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{cat.count} Sectors</p>
                    <p className="text-sm font-semibold text-primary">{cat.investment}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Sector Investment Distribution */}
          <section className="py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-4xl md:text-5xl font-bold mb-2">Sector Investment Distribution</h2>
                <p className="text-muted-foreground mb-8">Total investment allocation across all sector categories</p>
                <div className="bg-card rounded-2xl border border-border p-6">
                  <ResponsiveContainer width="100%" height={400}>
                    <PieChart>
                      <Pie
                        data={[
                          { name: "Infrastructure", value: 50, color: "hsl(25, 95%, 53%)" },
                          { name: "Natural Resources", value: 30, color: "hsl(217, 91%, 60%)" },
                          { name: "Energy", value: 15, color: "hsl(47, 96%, 53%)" },
                          { name: "Manufacturing", value: 15, color: "hsl(262, 83%, 58%)" },
                          { name: "Services", value: 12, color: "hsl(199, 89%, 48%)" },
                          { name: "Agriculture", value: 8, color: "hsl(142, 71%, 45%)" },
                          { name: "Healthcare", value: 3, color: "hsl(0, 84%, 60%)" },
                          { name: "Technology", value: 2, color: "hsl(330, 81%, 60%)" },
                        ]}
                        cx="50%"
                        cy="50%"
                        outerRadius={140}
                        innerRadius={70}
                        paddingAngle={3}
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        labelLine={false}
                      >
                        {[
                          { name: "Infrastructure", value: 50, color: "hsl(25, 95%, 53%)" },
                          { name: "Natural Resources", value: 30, color: "hsl(217, 91%, 60%)" },
                          { name: "Energy", value: 15, color: "hsl(47, 96%, 53%)" },
                          { name: "Manufacturing", value: 15, color: "hsl(262, 83%, 58%)" },
                          { name: "Services", value: 12, color: "hsl(199, 89%, 48%)" },
                          { name: "Agriculture", value: 8, color: "hsl(142, 71%, 45%)" },
                          { name: "Healthcare", value: 3, color: "hsl(0, 84%, 60%)" },
                          { name: "Technology", value: 2, color: "hsl(330, 81%, 60%)" },
                        ].map((entry, i) => (
                          <Cell key={i} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip contentStyle={{ backgroundColor: "hsl(0, 0%, 10%)", border: "1px solid hsl(0, 0%, 20%)", borderRadius: "12px", color: "#fff" }} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Top Investment Sectors */}
          <section className="py-20 px-6 lg:px-12 bg-card/50">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Top Investment Sectors</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { sector: "Mining & Minerals", investment: "$30B", projects: 120, jobs: "500K+", roi: "28%", icon: Target },
                  { sector: "Infrastructure", investment: "$50B", projects: 200, jobs: "300K+", roi: "15%", icon: Building2 },
                  { sector: "Energy & Power", investment: "$15B", projects: 85, jobs: "150K+", roi: "22%", icon: Zap },
                  { sector: "Manufacturing", investment: "$15B", projects: 150, jobs: "500K+", roi: "20%", icon: Factory },
                  { sector: "Agriculture", investment: "$8B", projects: 180, jobs: "400K+", roi: "18%", icon: TrendingUp },
                  { sector: "Technology", investment: "$2B", projects: 80, jobs: "50K+", roi: "35%", icon: Globe },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-card rounded-2xl border border-border p-6 hover:border-primary/30 transition-all"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-primary/20 rounded-lg">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold">{item.sector}</h3>
                        <p className="text-primary font-semibold">{item.investment}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-sm">
                      <div>
                        <span className="text-muted-foreground">Projects</span>
                        <div className="font-semibold">{item.projects}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Jobs</span>
                        <div className="font-semibold">{item.jobs}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">ROI</span>
                        <div className="font-semibold text-primary">{item.roi}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Sector Comparison Chart */}
          <section className="py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-4xl md:text-5xl font-bold mb-2">Sector Comparison Matrix</h2>
                <p className="text-muted-foreground mb-8">Investment, jobs, and ROI comparison across top sectors</p>
                <div className="bg-card rounded-2xl border border-border p-6">
                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={[
                      { sector: "Mining", investment: 30, jobs: 500, roi: 28 },
                      { sector: "Infrastructure", investment: 50, jobs: 300, roi: 15 },
                      { sector: "Energy", investment: 15, jobs: 150, roi: 22 },
                      { sector: "Manufacturing", investment: 15, jobs: 500, roi: 20 },
                      { sector: "Agriculture", investment: 8, jobs: 400, roi: 18 },
                      { sector: "Technology", investment: 2, jobs: 50, roi: 35 },
                    ]}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 20%)" />
                      <XAxis dataKey="sector" stroke="hsl(0, 0%, 50%)" fontSize={11} angle={-45} textAnchor="end" height={80} />
                      <YAxis stroke="hsl(0, 0%, 50%)" fontSize={12} />
                      <Tooltip contentStyle={{ backgroundColor: "hsl(0, 0%, 10%)", border: "1px solid hsl(0, 0%, 20%)", borderRadius: "12px", color: "#fff" }} />
                      <Legend />
                      <Bar dataKey="investment" name="Investment ($B)" fill="hsl(217, 91%, 60%)" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="jobs" name="Jobs (K)" fill="hsl(142, 71%, 45%)" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="roi" name="ROI %" fill="hsl(47, 96%, 53%)" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            </div>
          </section>
        </>
      }
    />
  );
};

export default PageExplorer;
