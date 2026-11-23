import { Calculator, FileText, Scale, Pickaxe, Wheat } from "lucide-react";
import { GenericPageLayout } from "@/components/GenericPageLayout";
import { InvestmentCalculator } from "@/components/InvestmentCalculator";
import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Users, BarChart3, Info, CheckCircle, PieChart, LineChart, BarChart as BarChartIcon, Target, Award, AlertCircle, TrendingDown, Activity, Zap, Globe, Shield, Clock, ArrowUpRight, ArrowDownRight, Sparkles, Flame, Lightbulb, Brain, Cpu, Database, Network, Briefcase, BookOpen, Layers, Gauge, Rocket, Star, CheckCircle2, XCircle, Leaf, Factory, Building2, GraduationCap, Heart, MapPin } from "lucide-react";
import { BarChart, Bar, LineChart as RechartsLineChart, Line, PieChart as RechartsPieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";

const PageCalculator = () => {
  return (
    <GenericPageLayout
      title="ROI Calculator"
      subtitle="Investment Return Projections"
      icon={Calculator}
      overview="Explore projected returns across Afghanistan's priority investment sectors. This comprehensive calculator allows you to model potential outcomes for your investment portfolio by adjusting parameters such as sector selection, investment amount, and time horizon. All calculations are based on sector averages, market conditions, and NERPA's strategic development framework."
      stats={[
        { value: "10", label: "Sectors" },
        { value: "$0.5M-$100M", label: "Investment Range" },
        { value: "1-15", label: "Years" },
        { value: "Real-time", label: "Calculations" },
      ]}
      sections={
        <>
          {/* Calculator Component */}
          <section className="py-16 px-6 lg:px-12 bg-card/50">
            <div className="max-w-7xl mx-auto">
              <InvestmentCalculator />
            </div>
          </section>

          {/* How It Works */}
          <section className="py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">How the Calculator Works</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    step: "1",
                    title: "Select Sector",
                    description: "Choose from 10 priority investment sectors, each with unique ROI profiles, risk levels, and timelines.",
                    icon: BarChart3
                  },
                  {
                    step: "2",
                    title: "Set Parameters",
                    description: "Adjust investment amount ($0.5M - $100M) and time horizon (1-15 years) to match your portfolio strategy.",
                    icon: DollarSign
                  },
                  {
                    step: "3",
                    title: "View Projections",
                    description: "Get real-time calculations showing adjusted ROI, total returns, economic impact, and key success factors.",
                    icon: TrendingUp
                  }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-card rounded-2xl border border-border p-8 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">{item.step}</div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Investment Tiers */}
          <section className="py-20 px-6 lg:px-12 bg-card/50">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Investment Tier Multipliers</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                {[
                  { range: "$0 - $1M", multiplier: "1.0x", description: "Standard ROI" },
                  { range: "$1M - $10M", multiplier: "1.1x", description: "10% bonus" },
                  { range: "$10M - $50M", multiplier: "1.2x", description: "20% bonus" },
                  { range: "$50M - $100M", multiplier: "1.25x", description: "25% bonus" },
                  { range: "$100M+", multiplier: "1.3x", description: "30% bonus" },
                ].map((tier, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-card rounded-xl border border-border p-6 text-center"
                  >
                    <div className="text-3xl font-bold text-primary mb-2">{tier.multiplier}</div>
                    <div className="text-sm font-semibold mb-1">{tier.range}</div>
                    <div className="text-xs text-muted-foreground">{tier.description}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Key Factors */}
          <section className="py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Understanding ROI Calculations</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-2xl border border-border p-8"
                >
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Info className="w-6 h-6 text-primary" />
                    Calculation Methodology
                  </h3>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      ROI calculations are based on sector-specific base returns adjusted by investment tier multipliers. 
                      The calculator uses conservative estimates derived from:
                    </p>
                    <ul className="space-y-2">
                      {[
                        "Historical sector performance data",
                        "NERPA strategic development projections",
                        "International benchmark comparisons",
                        "Risk-adjusted return models",
                        "Market condition assessments"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-2xl border border-border p-8"
                >
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Users className="w-6 h-6 text-primary" />
                    Economic Impact
                  </h3>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Beyond financial returns, every investment generates significant economic and social impact:
                    </p>
                    <ul className="space-y-2">
                      {[
                        "Job creation: ~50 jobs per $1M invested",
                        "Tax contribution: ~15% of investment value",
                        "Supply chain development",
                        "Technology transfer and skills development",
                        "Community infrastructure improvements"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Sector ROI Comparison Chart */}
          <section className="py-20 px-6 lg:px-12 bg-card/50">
            <div className="max-w-7xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-4xl md:text-5xl font-bold mb-2">Sector ROI Comparison</h2>
                <p className="text-muted-foreground mb-8">Average ROI by sector over 10-year investment horizon</p>
                <div className="bg-card rounded-2xl border border-border p-6">
                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={[
                      { sector: "Mining", roi: 28, risk: 7, timeline: 8 },
                      { sector: "Energy", roi: 22, risk: 5, timeline: 6 },
                      { sector: "Technology", roi: 35, risk: 8, timeline: 4 },
                      { sector: "Agriculture", roi: 18, risk: 4, timeline: 5 },
                      { sector: "Infrastructure", roi: 15, risk: 3, timeline: 10 },
                      { sector: "Manufacturing", roi: 20, risk: 5, timeline: 7 },
                      { sector: "Healthcare", roi: 16, risk: 3, timeline: 6 },
                      { sector: "Education", roi: 12, risk: 2, timeline: 8 },
                    ]}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 20%)" />
                      <XAxis dataKey="sector" stroke="hsl(0, 0%, 50%)" fontSize={12} />
                      <YAxis stroke="hsl(0, 0%, 50%)" fontSize={12} />
                      <Tooltip contentStyle={{ backgroundColor: "hsl(0, 0%, 10%)", border: "1px solid hsl(0, 0%, 20%)", borderRadius: "12px", color: "#fff" }} />
                      <Legend />
                      <Bar dataKey="roi" name="ROI %" fill="hsl(142, 71%, 45%)" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Risk-Return Matrix */}
          <section className="py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Risk-Return Analysis</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-2xl border border-border p-6"
                >
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <BarChartIcon className="w-6 h-6 text-primary" />
                    Risk Assessment by Sector
                  </h3>
                  <div className="space-y-4">
                    {[
                      { sector: "Technology", risk: "High", return: "Very High", color: "from-purple-500 to-pink-600" },
                      { sector: "Mining", risk: "High", return: "High", color: "from-blue-500 to-cyan-600" },
                      { sector: "Energy", risk: "Medium", return: "High", color: "from-yellow-500 to-orange-600" },
                      { sector: "Manufacturing", risk: "Medium", return: "Medium-High", color: "from-green-500 to-emerald-600" },
                      { sector: "Agriculture", risk: "Low-Medium", return: "Medium", color: "from-teal-500 to-green-600" },
                      { sector: "Infrastructure", risk: "Low", return: "Medium", color: "from-orange-500 to-amber-600" },
                      { sector: "Healthcare", risk: "Low", return: "Medium", color: "from-red-500 to-rose-600" },
                      { sector: "Education", risk: "Very Low", return: "Low-Medium", color: "from-blue-500 to-indigo-600" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-background rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${item.color}`} />
                          <span className="font-semibold">{item.sector}</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="text-muted-foreground">Risk: {item.risk}</span>
                          <span className="text-primary font-semibold">Return: {item.return}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-2xl border border-border p-6"
                >
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Target className="w-6 h-6 text-primary" />
                    Investment Scenarios
                  </h3>
                  <div className="space-y-4">
                    {[
                      { scenario: "Conservative", investment: "$1M", roi: "12%", timeline: "10 years", total: "$3.1M" },
                      { scenario: "Balanced", investment: "$5M", roi: "18%", timeline: "8 years", total: "$18.7M" },
                      { scenario: "Aggressive", investment: "$10M", roi: "25%", timeline: "7 years", total: "$47.6M" },
                      { scenario: "Portfolio", investment: "$25M", roi: "22%", timeline: "8 years", total: "$122.3M" },
                    ].map((item, i) => (
                      <div key={i} className="p-4 bg-background rounded-lg border border-border">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-bold">{item.scenario}</span>
                          <span className="text-primary font-semibold">{item.roi} ROI</span>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-sm">
                          <div>
                            <span className="text-muted-foreground">Investment</span>
                            <div className="font-semibold">{item.investment}</div>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Timeline</span>
                            <div className="font-semibold">{item.timeline}</div>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Total Return</span>
                            <div className="font-semibold text-primary">{item.total}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Sector Performance Over Time */}
          <section className="py-20 px-6 lg:px-12 bg-card/50">
            <div className="max-w-7xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-4xl md:text-5xl font-bold mb-2">Projected ROI Over Time</h2>
                <p className="text-muted-foreground mb-8">How returns compound across different investment horizons</p>
                <div className="bg-card rounded-2xl border border-border p-6">
                  <ResponsiveContainer width="100%" height={400}>
                    <RechartsLineChart data={[
                      { year: "Year 1", Mining: 5, Energy: 4, Tech: 8, Agriculture: 3, Infrastructure: 2 },
                      { year: "Year 3", Mining: 12, Energy: 10, Tech: 18, Agriculture: 8, Infrastructure: 6 },
                      { year: "Year 5", Mining: 18, Energy: 15, Tech: 25, Agriculture: 12, Infrastructure: 10 },
                      { year: "Year 7", Mining: 23, Energy: 19, Tech: 30, Agriculture: 15, Infrastructure: 13 },
                      { year: "Year 10", Mining: 28, Energy: 22, Tech: 35, Agriculture: 18, Infrastructure: 15 },
                    ]}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 20%)" />
                      <XAxis dataKey="year" stroke="hsl(0, 0%, 50%)" fontSize={12} />
                      <YAxis stroke="hsl(0, 0%, 50%)" fontSize={12} />
                      <Tooltip contentStyle={{ backgroundColor: "hsl(0, 0%, 10%)", border: "1px solid hsl(0, 0%, 20%)", borderRadius: "12px", color: "#fff" }} />
                      <Legend />
                      <Line type="monotone" dataKey="Mining" stroke="hsl(217, 91%, 60%)" strokeWidth={3} />
                      <Line type="monotone" dataKey="Energy" stroke="hsl(47, 96%, 53%)" strokeWidth={3} />
                      <Line type="monotone" dataKey="Tech" stroke="hsl(262, 83%, 58%)" strokeWidth={3} />
                      <Line type="monotone" dataKey="Agriculture" stroke="hsl(142, 71%, 45%)" strokeWidth={3} />
                      <Line type="monotone" dataKey="Infrastructure" stroke="hsl(25, 95%, 53%)" strokeWidth={3} />
                    </RechartsLineChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Investment Success Factors */}
          <section className="py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Key Success Factors</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { factor: "Market Timing", impact: "High", description: "Entry point significantly affects returns", icon: Activity },
                  { factor: "Sector Selection", impact: "Critical", description: "Choosing high-growth sectors is key", icon: Target },
                  { factor: "Investment Size", impact: "High", description: "Larger investments get better terms", icon: DollarSign },
                  { factor: "Time Horizon", impact: "Very High", description: "Longer holds = better returns", icon: TrendingUp },
                  { factor: "Risk Management", impact: "Critical", description: "Diversification reduces volatility", icon: AlertCircle },
                  { factor: "Local Partnerships", impact: "High", description: "Local knowledge accelerates success", icon: Users },
                  { factor: "Regulatory Compliance", impact: "Critical", description: "Following NERPA framework essential", icon: CheckCircle },
                  { factor: "Technology Adoption", impact: "Medium-High", description: "Modern tech improves efficiency", icon: Zap },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-card rounded-xl border border-border p-6"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-primary/20 rounded-lg">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className={`text-xs font-semibold px-2 py-1 rounded ${
                        item.impact === "Critical" ? "bg-red-500/20 text-red-400" :
                        item.impact === "Very High" ? "bg-orange-500/20 text-orange-400" :
                        "bg-yellow-500/20 text-yellow-400"
                      }`}>
                        {item.impact}
                      </span>
                    </div>
                    <h3 className="font-bold mb-2">{item.factor}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Related Section 1: Advanced ROI Scenarios */}
          <section className="py-20 px-6 lg:px-12 bg-card/50">
            <div className="max-w-7xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <h2 className="text-4xl md:text-5xl font-bold mb-2">Advanced ROI Scenarios</h2>
                <p className="text-muted-foreground mb-8">Detailed scenario analysis with best, base, and worst case projections</p>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { scenario: "Best Case", roi: "35%", probability: "20%", factors: ["Optimal market conditions", "Fast execution", "Strong partnerships"], icon: TrendingUp, color: "from-green-500 to-emerald-600" },
                    { scenario: "Base Case", roi: "22%", probability: "60%", factors: ["Normal market conditions", "Standard execution", "Regular partnerships"], icon: Target, color: "from-blue-500 to-cyan-600" },
                    { scenario: "Worst Case", roi: "12%", probability: "20%", factors: ["Challenging conditions", "Delays possible", "Limited support"], icon: AlertCircle, color: "from-orange-500 to-amber-600" },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.3 }}
                      className="bg-card rounded-2xl border border-border p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-200"
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{item.scenario}</h3>
                      <div className="text-3xl font-bold text-primary mb-3">{item.roi} ROI</div>
                      <div className="text-sm text-muted-foreground mb-4">Probability: {item.probability}</div>
                      <ul className="space-y-2">
                        {item.factors.map((factor, j) => (
                          <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-primary" />
                            {factor}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Related Section 2: Tax Incentives & Benefits */}
          <section className="py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <h2 className="text-4xl md:text-5xl font-bold mb-2">Tax Incentives & Benefits</h2>
                <p className="text-muted-foreground mb-8">Comprehensive tax benefits and incentives by investment tier</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { tier: "Tier 1 ($0-$1M)", tax: "15%", benefits: ["Standard rates", "5-year exemption"], icon: DollarSign },
                    { tier: "Tier 2 ($1M-$10M)", tax: "12%", benefits: ["Reduced rates", "7-year exemption", "Import duty waiver"], icon: TrendingUp },
                    { tier: "Tier 3 ($10M-$50M)", tax: "10%", benefits: ["Lower rates", "10-year exemption", "Full import waiver", "Land lease discount"], icon: Award },
                    { tier: "Tier 4 ($50M+)", tax: "8%", benefits: ["Minimum rates", "15-year exemption", "All waivers", "Priority support"], icon: Star },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                      className="bg-card rounded-xl border border-border p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-200"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <item.icon className="w-5 h-5 text-primary" />
                        <h3 className="font-bold">{item.tier}</h3>
                      </div>
                      <div className="text-2xl font-bold text-primary mb-3">{item.tax} Tax Rate</div>
                      <ul className="space-y-1">
                        {item.benefits.map((benefit, j) => (
                          <li key={j} className="text-sm text-muted-foreground flex items-center gap-2">
                            <CheckCircle className="w-3 h-3 text-primary" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Related Section 3: Investment Portfolio Optimization */}
          <section className="py-20 px-6 lg:px-12 bg-card/50">
            <div className="max-w-7xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <h2 className="text-4xl md:text-5xl font-bold mb-2">Investment Portfolio Optimization</h2>
                <p className="text-muted-foreground mb-8">Recommended portfolio allocations for optimal risk-adjusted returns</p>
                <div className="bg-card rounded-2xl border border-border p-6">
                  <ResponsiveContainer width="100%" height={400}>
                    <RechartsPieChart>
                      <Pie
                        data={[
                          { name: "Mining", value: 30, color: "hsl(217, 91%, 60%)" },
                          { name: "Energy", value: 25, color: "hsl(47, 96%, 53%)" },
                          { name: "Infrastructure", value: 20, color: "hsl(25, 95%, 53%)" },
                          { name: "Technology", value: 15, color: "hsl(262, 83%, 58%)" },
                          { name: "Agriculture", value: 10, color: "hsl(142, 71%, 45%)" },
                        ]}
                        cx="50%"
                        cy="50%"
                        outerRadius={120}
                        innerRadius={60}
                        paddingAngle={3}
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        labelLine={false}
                      >
                        {[
                          { name: "Mining", value: 30, color: "hsl(217, 91%, 60%)" },
                          { name: "Energy", value: 25, color: "hsl(47, 96%, 53%)" },
                          { name: "Infrastructure", value: 20, color: "hsl(25, 95%, 53%)" },
                          { name: "Technology", value: 15, color: "hsl(262, 83%, 58%)" },
                          { name: "Agriculture", value: 10, color: "hsl(142, 71%, 45%)" },
                        ].map((entry, i) => (
                          <Cell key={i} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip contentStyle={{ backgroundColor: "hsl(0, 0%, 10%)", border: "1px solid hsl(0, 0%, 20%)", borderRadius: "12px", color: "#fff" }} />
                      <Legend />
                    </RechartsPieChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Related Section 4: Exit Strategy Options */}
          <section className="py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Exit Strategy Options</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { strategy: "IPO Exit", timeline: "7-10 years", roi: "25-35%", description: "Public listing on stock exchange", icon: TrendingUp, color: "from-green-500 to-emerald-600" },
                  { strategy: "Strategic Sale", timeline: "5-8 years", roi: "20-30%", description: "Sale to larger corporation", icon: Briefcase, color: "from-blue-500 to-cyan-600" },
                  { strategy: "Private Equity", timeline: "6-9 years", roi: "22-32%", description: "PE firm acquisition", icon: DollarSign, color: "from-purple-500 to-pink-600" },
                  { strategy: "Dividend Yield", timeline: "Ongoing", roi: "8-12%", description: "Regular dividend payments", icon: Activity, color: "from-yellow-500 to-orange-600" },
                  { strategy: "Asset Sale", timeline: "3-5 years", roi: "15-25%", description: "Partial asset divestment", icon: Building2, color: "from-orange-500 to-amber-600" },
                  { strategy: "Reinvestment", timeline: "Long-term", roi: "Compound", description: "Reinvest for growth", icon: Rocket, color: "from-cyan-500 to-blue-600" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    className="bg-card rounded-2xl border border-border p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-200"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.strategy}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Timeline</span>
                        <span className="font-semibold">{item.timeline}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Expected ROI</span>
                        <span className="font-semibold text-primary">{item.roi}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Related Section 5: Currency & Exchange Risk Analysis */}
          <section className="py-20 px-6 lg:px-12 bg-card/50">
            <div className="max-w-7xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <h2 className="text-4xl md:text-5xl font-bold mb-2">Currency & Exchange Risk Analysis</h2>
                <p className="text-muted-foreground mb-8">Currency stability and hedging strategies for international investors</p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-card rounded-2xl border border-border p-6">
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                      <Shield className="w-6 h-6 text-primary" />
                      Risk Mitigation
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "Multi-currency accounts supported",
                        "Hedging instruments available",
                        "Stable exchange rate regime",
                        "International payment systems",
                        "Currency swap facilities",
                        "Central bank guarantees",
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-card rounded-2xl border border-border p-6">
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                      <BarChartIcon className="w-6 h-6 text-primary" />
                      Exchange Rate Trends
                    </h3>
                    <div className="space-y-4">
                      {[
                        { currency: "USD/AFN", current: "70.5", trend: "Stable", change: "+0.2%", icon: TrendingUp },
                        { currency: "EUR/AFN", current: "76.8", trend: "Stable", change: "+0.1%", icon: Activity },
                        { currency: "GBP/AFN", current: "89.2", trend: "Stable", change: "-0.1%", icon: TrendingDown },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between p-3 bg-background rounded-lg">
                          <div>
                            <div className="font-semibold">{item.currency}</div>
                            <div className="text-sm text-muted-foreground">{item.trend}</div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold">{item.current}</div>
                            <div className={`text-sm ${item.change.startsWith("+") ? "text-green-400" : "text-red-400"}`}>
                              {item.change}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Related Section 6: Comparative Market Analysis */}
          <section className="py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <h2 className="text-4xl md:text-5xl font-bold mb-2">Comparative Market Analysis</h2>
                <p className="text-muted-foreground mb-8">Afghanistan ROI compared to regional and global investment destinations</p>
                <div className="bg-card rounded-2xl border border-border p-6">
                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={[
                      { market: "Afghanistan", roi: 22, risk: 6, ease: 7 },
                      { market: "Pakistan", roi: 18, risk: 7, ease: 6 },
                      { market: "India", roi: 15, risk: 5, ease: 8 },
                      { market: "UAE", roi: 12, risk: 3, ease: 9 },
                      { market: "Turkey", roi: 16, risk: 6, ease: 7 },
                      { market: "Vietnam", roi: 20, risk: 5, ease: 7 },
                    ]}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 20%)" />
                      <XAxis dataKey="market" stroke="hsl(0, 0%, 50%)" fontSize={12} />
                      <YAxis stroke="hsl(0, 0%, 50%)" fontSize={12} />
                      <Tooltip contentStyle={{ backgroundColor: "hsl(0, 0%, 10%)", border: "1px solid hsl(0, 0%, 20%)", borderRadius: "12px", color: "#fff" }} />
                      <Legend />
                      <Bar dataKey="roi" name="Average ROI %" fill="hsl(142, 71%, 45%)" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="risk" name="Risk Level (1-10)" fill="hsl(0, 84%, 60%)" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="ease" name="Ease of Business (1-10)" fill="hsl(217, 91%, 60%)" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Related Section 7: Investment Protection Mechanisms */}
          <section className="py-20 px-6 lg:px-12 bg-card/50">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Investment Protection Mechanisms</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { mechanism: "Bilateral Investment Treaties", coverage: "50+ countries", protection: "Full", icon: Globe, color: "from-blue-500 to-cyan-600" },
                  { mechanism: "Multilateral Guarantees", coverage: "MIGA, OPIC", protection: "Comprehensive", icon: Shield, color: "from-green-500 to-emerald-600" },
                  { mechanism: "Legal Framework", coverage: "Constitutional", protection: "Strong", icon: FileText, color: "from-purple-500 to-pink-600" },
                  { mechanism: "Dispute Resolution", coverage: "ICSID, UNCITRAL", protection: "International", icon: Scale, color: "from-orange-500 to-amber-600" },
                  { mechanism: "Property Rights", coverage: "Secure", protection: "Guaranteed", icon: Building2, color: "from-cyan-500 to-blue-600" },
                  { mechanism: "Repatriation Rights", coverage: "Unrestricted", protection: "Full", icon: DollarSign, color: "from-yellow-500 to-orange-600" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    className="bg-card rounded-2xl border border-border p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-200"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.mechanism}</h3>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="text-muted-foreground">Coverage: </span>
                        <span className="font-semibold">{item.coverage}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Protection: </span>
                        <span className="font-semibold text-primary">{item.protection}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Related Section 8: Real-Time Market Conditions */}
          <section className="py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <h2 className="text-4xl md:text-5xl font-bold mb-2">Real-Time Market Conditions</h2>
                <p className="text-muted-foreground mb-8">Current market indicators affecting investment returns</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { indicator: "Market Sentiment", value: "Positive", trend: "up", icon: TrendingUp, color: "from-green-500 to-emerald-600" },
                    { indicator: "Political Stability", value: "Stable", trend: "up", icon: Shield, color: "from-blue-500 to-cyan-600" },
                    { indicator: "Economic Growth", value: "3.8%", trend: "up", icon: Activity, color: "from-purple-500 to-pink-600" },
                    { indicator: "Investment Climate", value: "Favorable", trend: "up", icon: Star, color: "from-yellow-500 to-orange-600" },
                    { indicator: "Regulatory Environment", value: "Improving", trend: "up", icon: CheckCircle, color: "from-cyan-500 to-blue-600" },
                    { indicator: "Infrastructure", value: "Expanding", trend: "up", icon: Building2, color: "from-orange-500 to-amber-600" },
                    { indicator: "Labor Market", value: "Growing", trend: "up", icon: Users, color: "from-pink-500 to-rose-600" },
                    { indicator: "Technology Adoption", value: "Rapid", trend: "up", icon: Cpu, color: "from-indigo-500 to-violet-600" },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                      className="bg-card rounded-xl border border-border p-5 hover:border-primary/30 hover:shadow-lg transition-all duration-200"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                          <item.icon className="w-5 h-5 text-white" />
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-green-400" />
                      </div>
                      <div className="text-sm text-muted-foreground mb-1">{item.indicator}</div>
                      <div className="font-bold text-lg">{item.value}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Related Section 9: Sector-Specific ROI Deep Dive */}
          <section className="py-20 px-6 lg:px-12 bg-card/50">
            <div className="max-w-7xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <h2 className="text-4xl md:text-5xl font-bold mb-2">Sector-Specific ROI Deep Dive</h2>
                <p className="text-muted-foreground mb-8">Detailed ROI breakdown by sub-sector and investment type</p>
                <div className="bg-card rounded-2xl border border-border p-6">
                  <ResponsiveContainer width="100%" height={450}>
                    <BarChart data={[
                      { sector: "Mining", "Base ROI": 28, "With Incentives": 32, "Premium Projects": 38 },
                      { sector: "Energy", "Base ROI": 22, "With Incentives": 26, "Premium Projects": 30 },
                      { sector: "Technology", "Base ROI": 35, "With Incentives": 40, "Premium Projects": 48 },
                      { sector: "Agriculture", "Base ROI": 18, "With Incentives": 21, "Premium Projects": 25 },
                      { sector: "Infrastructure", "Base ROI": 15, "With Incentives": 18, "Premium Projects": 22 },
                      { sector: "Manufacturing", "Base ROI": 20, "With Incentives": 24, "Premium Projects": 28 },
                    ]}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 20%)" />
                      <XAxis dataKey="sector" stroke="hsl(0, 0%, 50%)" fontSize={11} angle={-45} textAnchor="end" height={80} />
                      <YAxis stroke="hsl(0, 0%, 50%)" fontSize={12} />
                      <Tooltip contentStyle={{ backgroundColor: "hsl(0, 0%, 10%)", border: "1px solid hsl(0, 0%, 20%)", borderRadius: "12px", color: "#fff" }} />
                      <Legend />
                      <Bar dataKey="Base ROI" name="Base ROI %" fill="hsl(142, 71%, 45%)" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="With Incentives" name="With Incentives %" fill="hsl(217, 91%, 60%)" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="Premium Projects" name="Premium Projects %" fill="hsl(47, 96%, 53%)" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Related Section 10: Investment Success Stories */}
          <section className="py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Investment Success Stories</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { company: "Mining Corp A", sector: "Mining", investment: "$50M", roi: "32%", timeline: "5 years", icon: Pickaxe, color: "from-blue-500 to-cyan-600" },
                  { company: "Energy Solutions", sector: "Energy", investment: "$30M", roi: "28%", timeline: "4 years", icon: Zap, color: "from-yellow-500 to-orange-600" },
                  { company: "Tech Startup Hub", sector: "Technology", investment: "$10M", roi: "45%", timeline: "3 years", icon: Cpu, color: "from-purple-500 to-pink-600" },
                  { company: "Agri-Export Co", sector: "Agriculture", investment: "$20M", roi: "24%", timeline: "6 years", icon: Wheat, color: "from-green-500 to-emerald-600" },
                  { company: "Infrastructure Group", sector: "Infrastructure", investment: "$100M", roi: "18%", timeline: "8 years", icon: Building2, color: "from-orange-500 to-amber-600" },
                  { company: "Manufacturing Inc", sector: "Manufacturing", investment: "$40M", roi: "26%", timeline: "5 years", icon: Factory, color: "from-cyan-500 to-blue-600" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    className="bg-card rounded-2xl border border-border p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-200"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-1">{item.company}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{item.sector}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Investment</span>
                        <span className="font-semibold">{item.investment}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">ROI</span>
                        <span className="font-semibold text-primary">{item.roi}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Timeline</span>
                        <span className="font-semibold">{item.timeline}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Related Section 11: Regulatory Compliance Guide */}
          <section className="py-20 px-6 lg:px-12 bg-card/50">
            <div className="max-w-7xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <h2 className="text-4xl md:text-5xl font-bold mb-2">Regulatory Compliance Guide</h2>
                <p className="text-muted-foreground mb-8">Essential compliance requirements and streamlined processes</p>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { requirement: "Business Registration", timeline: "5-7 days", complexity: "Low", support: "Full", icon: FileText },
                    { requirement: "Investment Approval", timeline: "10-15 days", complexity: "Medium", support: "Full", icon: CheckCircle },
                    { requirement: "Tax Registration", timeline: "3-5 days", complexity: "Low", support: "Full", icon: DollarSign },
                    { requirement: "Environmental Clearance", timeline: "20-30 days", complexity: "Medium", support: "Assisted", icon: Leaf },
                    { requirement: "Land Acquisition", timeline: "30-45 days", complexity: "Medium", support: "Assisted", icon: MapPin },
                    { requirement: "Work Permits", timeline: "7-10 days", complexity: "Low", support: "Full", icon: Users },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.3 }}
                      className="bg-card rounded-xl border border-border p-5 hover:border-primary/30 hover:shadow-lg transition-all duration-200"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-primary/20 rounded-lg">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold mb-2">{item.requirement}</h3>
                          <div className="space-y-1 text-sm">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Timeline</span>
                              <span className="font-semibold">{item.timeline}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Complexity</span>
                              <span className="font-semibold">{item.complexity}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Support</span>
                              <span className="font-semibold text-primary">{item.support}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Related Section 12: Performance Benchmarking */}
          <section className="py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <h2 className="text-4xl md:text-5xl font-bold mb-2">Performance Benchmarking</h2>
                <p className="text-muted-foreground mb-8">How Afghanistan investments compare to global benchmarks</p>
                <div className="bg-card rounded-2xl border border-border p-6">
                  <ResponsiveContainer width="100%" height={400}>
                    <RechartsLineChart data={[
                      { year: "Year 1", "Afghanistan": 5, "Global Avg": 4, "Emerging Markets": 6, "Developed Markets": 3 },
                      { year: "Year 3", "Afghanistan": 12, "Global Avg": 10, "Emerging Markets": 13, "Developed Markets": 8 },
                      { year: "Year 5", "Afghanistan": 18, "Global Avg": 15, "Emerging Markets": 19, "Developed Markets": 12 },
                      { year: "Year 7", "Afghanistan": 23, "Global Avg": 20, "Emerging Markets": 24, "Developed Markets": 16 },
                      { year: "Year 10", "Afghanistan": 28, "Global Avg": 25, "Emerging Markets": 29, "Developed Markets": 20 },
                    ]}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 20%)" />
                      <XAxis dataKey="year" stroke="hsl(0, 0%, 50%)" fontSize={12} />
                      <YAxis stroke="hsl(0, 0%, 50%)" fontSize={12} />
                      <Tooltip contentStyle={{ backgroundColor: "hsl(0, 0%, 10%)", border: "1px solid hsl(0, 0%, 20%)", borderRadius: "12px", color: "#fff" }} />
                      <Legend />
                      <Line type="monotone" dataKey="Afghanistan" stroke="hsl(142, 71%, 45%)" strokeWidth={3} />
                      <Line type="monotone" dataKey="Global Avg" stroke="hsl(217, 91%, 60%)" strokeWidth={2} strokeDasharray="5 5" />
                      <Line type="monotone" dataKey="Emerging Markets" stroke="hsl(47, 96%, 53%)" strokeWidth={2} />
                      <Line type="monotone" dataKey="Developed Markets" stroke="hsl(0, 0%, 50%)" strokeWidth={2} strokeDasharray="3 3" />
                    </RechartsLineChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Disclaimer */}
          <section className="py-16 px-6 lg:px-12 bg-amber-500/10 border-y border-amber-500/20">
            <div className="max-w-4xl mx-auto text-center">
              <Info className="w-12 h-12 text-amber-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Important Disclaimer</h3>
              <p className="text-muted-foreground">
                These projections are estimates based on sector averages and market conditions. Actual returns may vary 
                based on specific project characteristics, market dynamics, and external factors. Consult with NERPA 
                investment advisors for detailed analysis tailored to your investment profile.
              </p>
            </div>
          </section>
        </>
      }
    />
  );
};

export default PageCalculator;
