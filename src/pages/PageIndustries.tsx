import { Gem } from "lucide-react";
import { GenericPageLayout } from "@/components/GenericPageLayout";
import { DetailedIndustrySection } from "@/components/DetailedIndustrySection";
import { motion } from "framer-motion";
import { Pickaxe, Wheat, Zap, Cpu, Building2, Heart, GraduationCap, Truck, BarChart3, PieChart, Target, Award, DollarSign, Users, TrendingUp, Activity, BarChart as BarChartIcon, Factory } from "lucide-react";
import { BarChart, Bar, PieChart as RechartsPieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, LineChart, Line } from "recharts";

const PageIndustries = () => {
  return (
    <GenericPageLayout
      title="Strategic Industries"
      subtitle="Investment Opportunities"
      icon={Gem}
      overview="Afghanistan's strategic industries offer exceptional growth potential across diverse sectors, from natural resources to technology and infrastructure. Each industry presents unique opportunities for investment, development, and sustainable economic impact. This comprehensive overview highlights key industries with detailed market analysis, growth projections, investment requirements, and strategic positioning within NERPA's development framework."
      stats={[
        { value: "100+", label: "Industries" },
        { value: "$50B+", label: "Market Size" },
        { value: "500K+", label: "Jobs" },
        { value: "15%+", label: "Growth Rate" },
      ]}
      sections={
        <>
          {/* Industries Section */}
          <section className="py-16 px-6 lg:px-12 bg-card/50">
            <div className="max-w-7xl mx-auto">
              <DetailedIndustrySection
                title="Key Industries"
                subtitle="Investment Opportunities"
                description="Afghanistan's strategic industries offer exceptional growth potential across diverse sectors, from natural resources to technology and infrastructure. Each industry presents unique opportunities for investment, development, and sustainable economic impact."
                industries={[
                  {
                    title: "Mining & Minerals",
                    description: "Afghanistan possesses some of the world's largest untapped mineral reserves, including lithium, copper, iron ore, and rare earth elements.",
                    opportunities: [
                      "Lithium extraction and processing",
                      "Copper mining operations",
                      "Iron ore development",
                      "Gemstone mining and cutting",
                      "Rare earth elements extraction",
                      "Coal mining and power generation",
                      "Marble and construction materials",
                      "Gold and precious metals"
                    ],
                    marketSize: "$30T+",
                    growthRate: "25%",
                    keyPlayers: "100+",
                    icon: Pickaxe
                  },
                  {
                    title: "Agriculture & Food Processing",
                    description: "With fertile valleys and diverse climates, Afghanistan produces world-class agricultural products including saffron, pomegranates, almonds, and grapes.",
                    opportunities: [
                      "Saffron cultivation and export",
                      "Fruit processing and packaging",
                      "Dairy and livestock development",
                      "Organic farming initiatives",
                      "Agricultural technology solutions",
                      "Food processing facilities",
                      "Export-oriented production",
                      "Cold chain infrastructure"
                    ],
                    marketSize: "$8B",
                    growthRate: "12%",
                    keyPlayers: "200+",
                    icon: Wheat
                  },
                  {
                    title: "Energy & Power",
                    description: "Afghanistan's abundant water resources, solar potential, and wind corridors position it as a future energy exporter.",
                    opportunities: [
                      "Hydropower development",
                      "Solar energy projects",
                      "Wind farm installations",
                      "Energy transmission infrastructure",
                      "Regional energy exports",
                      "Rural electrification",
                      "Energy storage solutions",
                      "Smart grid technology"
                    ],
                    marketSize: "$15B",
                    growthRate: "20%",
                    keyPlayers: "30+",
                    icon: Zap
                  },
                  {
                    title: "Technology & Digital Services",
                    description: "A young, tech-savvy population and growing digital infrastructure are driving rapid expansion in technology services.",
                    opportunities: [
                      "Software development",
                      "IT services and outsourcing",
                      "E-commerce platforms",
                      "Fintech solutions",
                      "Digital payment systems",
                      "Telecommunications infrastructure",
                      "Data centers",
                      "Tech education and training"
                    ],
                    marketSize: "$2B",
                    growthRate: "25%",
                    keyPlayers: "150+",
                    icon: Cpu
                  },
                  {
                    title: "Infrastructure & Construction",
                    description: "Massive infrastructure development needs across transportation, housing, and urban development create sustained demand.",
                    opportunities: [
                      "Road and highway construction",
                      "Residential and commercial development",
                      "Bridge and tunnel projects",
                      "Airport and port development",
                      "Smart city infrastructure",
                      "Industrial parks and zones",
                      "Water and sanitation systems",
                      "Public facilities construction"
                    ],
                    marketSize: "$50B",
                    growthRate: "18%",
                    keyPlayers: "100+",
                    icon: Building2
                  },
                  {
                    title: "Healthcare & Pharmaceuticals",
                    description: "Expanding healthcare infrastructure and pharmaceutical manufacturing capabilities address critical needs while creating export opportunities.",
                    opportunities: [
                      "Hospital and clinic development",
                      "Pharmaceutical manufacturing",
                      "Medical equipment supply",
                      "Telemedicine services",
                      "Healthcare training",
                      "Medical tourism",
                      "Traditional medicine production",
                      "Public health programs"
                    ],
                    marketSize: "$3B",
                    growthRate: "14%",
                    keyPlayers: "80+",
                    icon: Heart
                  },
                  {
                    title: "Education & Training",
                    description: "Investment in education infrastructure, vocational training, and higher education institutions builds human capital.",
                    opportunities: [
                      "University and college development",
                      "Vocational training centers",
                      "Educational technology",
                      "Online learning platforms",
                      "Teacher training programs",
                      "Research and development",
                      "International partnerships",
                      "Skills development initiatives"
                    ],
                    marketSize: "$4B",
                    growthRate: "16%",
                    keyPlayers: "120+",
                    icon: GraduationCap
                  },
                  {
                    title: "Transport & Logistics",
                    description: "Afghanistan's strategic location as a regional transit hub creates opportunities in transportation and logistics.",
                    opportunities: [
                      "Railway development",
                      "Logistics and warehousing",
                      "Freight forwarding",
                      "Border crossing facilities",
                      "Air cargo services",
                      "Transit trade facilitation",
                      "Transport technology",
                      "Supply chain management"
                    ],
                    marketSize: "$6B",
                    growthRate: "17%",
                    keyPlayers: "60+",
                    icon: Truck
                  }
                ]}
              />
            </div>
          </section>

          {/* Industry Market Analysis */}
          <section className="py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-4xl md:text-5xl font-bold mb-2">Industry Market Analysis</h2>
                <p className="text-muted-foreground mb-8">Market size, growth rates, and investment potential by industry</p>
                <div className="bg-card rounded-2xl border border-border p-6">
                  <ResponsiveContainer width="100%" height={450}>
                    <BarChart data={[
                      { industry: "Mining", marketSize: 30, growth: 25, investment: 8.5, jobs: 500 },
                      { industry: "Infrastructure", marketSize: 50, growth: 18, investment: 6.3, jobs: 300 },
                      { industry: "Energy", marketSize: 15, growth: 20, investment: 5.1, jobs: 150 },
                      { industry: "Manufacturing", marketSize: 15, growth: 18, investment: 3.8, jobs: 500 },
                      { industry: "Agriculture", marketSize: 8, growth: 12, investment: 4.2, jobs: 400 },
                      { industry: "Technology", marketSize: 2, growth: 25, investment: 2.1, jobs: 50 },
                      { industry: "Healthcare", marketSize: 3, growth: 14, investment: 1.8, jobs: 95 },
                      { industry: "Education", marketSize: 4, growth: 16, investment: 1.5, jobs: 120 },
                    ]}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 20%)" />
                      <XAxis dataKey="industry" stroke="hsl(0, 0%, 50%)" fontSize={11} angle={-45} textAnchor="end" height={80} />
                      <YAxis stroke="hsl(0, 0%, 50%)" fontSize={12} />
                      <Tooltip contentStyle={{ backgroundColor: "hsl(0, 0%, 10%)", border: "1px solid hsl(0, 0%, 20%)", borderRadius: "12px", color: "#fff" }} />
                      <Legend />
                      <Bar dataKey="marketSize" name="Market Size ($B)" fill="hsl(217, 91%, 60%)" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="growth" name="Growth %" fill="hsl(142, 71%, 45%)" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Investment Deep-Dive by Industry */}
          <section className="py-20 px-6 lg:px-12 bg-card/50">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Investment Deep-Dive by Industry</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { industry: "Mining", investment: "$30B", projects: 120, roi: "28%", timeline: "8-12 years", icon: Pickaxe, color: "from-blue-500 to-cyan-600" },
                  { industry: "Infrastructure", investment: "$50B", projects: 200, roi: "15%", timeline: "10-15 years", icon: Building2, color: "from-orange-500 to-amber-600" },
                  { industry: "Energy", investment: "$15B", projects: 85, roi: "22%", timeline: "6-10 years", icon: Zap, color: "from-yellow-500 to-orange-600" },
                  { industry: "Manufacturing", investment: "$15B", projects: 150, roi: "20%", timeline: "5-8 years", icon: Factory, color: "from-purple-500 to-pink-600" },
                  { industry: "Agriculture", investment: "$8B", projects: 180, roi: "18%", timeline: "3-7 years", icon: Wheat, color: "from-green-500 to-emerald-600" },
                  { industry: "Technology", investment: "$2B", projects: 80, roi: "35%", timeline: "2-5 years", icon: Cpu, color: "from-indigo-500 to-violet-600" },
                  { industry: "Healthcare", investment: "$3B", projects: 95, roi: "16%", timeline: "5-10 years", icon: Heart, color: "from-red-500 to-rose-600" },
                  { industry: "Education", investment: "$4B", projects: 120, roi: "12%", timeline: "8-12 years", icon: GraduationCap, color: "from-cyan-500 to-blue-600" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-card rounded-2xl border border-border p-6 hover:border-primary/30 transition-all"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold mb-2">{item.industry}</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Investment</span>
                        <span className="font-semibold text-primary">{item.investment}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Projects</span>
                        <span className="font-semibold">{item.projects}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">ROI</span>
                        <span className="font-semibold">{item.roi}</span>
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

          {/* Growth Projections by Industry */}
          <section className="py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-4xl md:text-5xl font-bold mb-2">Growth Projections by Industry (2026-2030)</h2>
                <p className="text-muted-foreground mb-8">Forecasted market growth and investment trends</p>
                <div className="bg-card rounded-2xl border border-border p-6">
                  <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={[
                      { year: "2026", Mining: 8.5, Infrastructure: 6.3, Energy: 5.1, Manufacturing: 3.8, Agriculture: 4.2 },
                      { year: "2027", Mining: 10.2, Infrastructure: 7.8, Energy: 6.2, Manufacturing: 4.6, Agriculture: 4.8 },
                      { year: "2028", Mining: 12.5, Infrastructure: 9.5, Energy: 7.5, Manufacturing: 5.5, Agriculture: 5.5 },
                      { year: "2029", Mining: 15.2, Infrastructure: 11.5, Energy: 9.0, Manufacturing: 6.6, Agriculture: 6.3 },
                      { year: "2030", Mining: 18.5, Infrastructure: 13.8, Energy: 10.8, Manufacturing: 7.9, Agriculture: 7.2 },
                    ]}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 20%)" />
                      <XAxis dataKey="year" stroke="hsl(0, 0%, 50%)" fontSize={12} />
                      <YAxis stroke="hsl(0, 0%, 50%)" fontSize={12} />
                      <Tooltip contentStyle={{ backgroundColor: "hsl(0, 0%, 10%)", border: "1px solid hsl(0, 0%, 20%)", borderRadius: "12px", color: "#fff" }} />
                      <Legend />
                      <Line type="monotone" dataKey="Mining" stroke="hsl(217, 91%, 60%)" strokeWidth={3} />
                      <Line type="monotone" dataKey="Infrastructure" stroke="hsl(25, 95%, 53%)" strokeWidth={3} />
                      <Line type="monotone" dataKey="Energy" stroke="hsl(47, 96%, 53%)" strokeWidth={3} />
                      <Line type="monotone" dataKey="Manufacturing" stroke="hsl(262, 83%, 58%)" strokeWidth={3} />
                      <Line type="monotone" dataKey="Agriculture" stroke="hsl(142, 71%, 45%)" strokeWidth={3} />
                    </LineChart>
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

export default PageIndustries;
