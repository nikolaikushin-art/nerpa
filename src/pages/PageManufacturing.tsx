import { Factory } from "lucide-react";
import { GenericPageLayout } from "@/components/GenericPageLayout";
import { ExpandedManufacturingSection } from "@/components/ExpandedManufacturingSection";
import { motion } from "framer-motion";
import { CheckCircle, TrendingUp, Users, Building2, DollarSign, BarChart3, PieChart, Award, Target, Zap, Globe, MapPin, Activity } from "lucide-react";
import { BarChart, Bar, PieChart as RechartsPieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, LineChart, Line } from "recharts";

const PageManufacturing = () => {
  return (
    <GenericPageLayout
      title="Manufacturing & Industrial Complex"
      subtitle="50+ Manufacturing Industries"
      icon={Factory}
      overview="Afghanistan's manufacturing sector represents a cornerstone of economic diversification and job creation. With over 50 distinct manufacturing industries spanning textiles, food processing, construction materials, electronics, pharmaceuticals, and advanced manufacturing, the sector is positioned to transform Afghanistan from a resource exporter to a value-added producer. Strategic industrial zones, modern facilities, and skilled workforce development are creating a competitive manufacturing ecosystem."
      stats={[
        { value: "50+", label: "Industries" },
        { value: "500K+", label: "Jobs" },
        { value: "$15B+", label: "Investment" },
        { value: "25%", label: "GDP Target" },
      ]}
      sections={
        <>
          {/* Manufacturing Section */}
          <section className="py-16 px-6 lg:px-12 bg-card/50">
            <div className="max-w-7xl mx-auto">
              <ExpandedManufacturingSection />
            </div>
          </section>

          {/* Industrial Zones */}
          <section className="py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Industrial Zones & Parks</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: "Kabul Industrial Park",
                    location: "Kabul Province",
                    size: "500 hectares",
                    industries: ["Electronics", "Pharmaceuticals", "Food Processing"],
                    status: "Operational"
                  },
                  {
                    name: "Mazar Industrial Zone",
                    location: "Balkh Province",
                    size: "300 hectares",
                    industries: ["Textiles", "Cement", "Fertilizers"],
                    status: "Under Construction"
                  },
                  {
                    name: "Herat Manufacturing Hub",
                    location: "Herat Province",
                    size: "400 hectares",
                    industries: ["Textiles", "Carpets", "Crafts"],
                    status: "Operational"
                  },
                  {
                    name: "Kandahar Agro-Processing Zone",
                    location: "Kandahar Province",
                    size: "250 hectares",
                    industries: ["Food Processing", "Cold Storage", "Packaging"],
                    status: "Planned"
                  },
                  {
                    name: "Jalalabad Tech Manufacturing",
                    location: "Nangarhar Province",
                    size: "200 hectares",
                    industries: ["Electronics", "Components", "Assembly"],
                    status: "Planned"
                  },
                  {
                    name: "Bagram Economic Zone",
                    location: "Parwan Province",
                    size: "600 hectares",
                    industries: ["Multi-sector", "Export-oriented", "Logistics"],
                    status: "Under Construction"
                  }
                ].map((zone, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-card rounded-2xl border border-border p-6"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold">{zone.name}</h3>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        zone.status === "Operational" ? "bg-green-500/20 text-green-400" :
                        zone.status === "Under Construction" ? "bg-yellow-500/20 text-yellow-400" :
                        "bg-blue-500/20 text-blue-400"
                      }`}>
                        {zone.status}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">📍 {zone.location}</p>
                    <p className="text-sm text-muted-foreground mb-4">📏 {zone.size}</p>
                    <div className="flex flex-wrap gap-2">
                      {zone.industries.map((industry, j) => (
                        <span key={j} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                          {industry}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Key Manufacturing Sectors */}
          <section className="py-20 px-6 lg:px-12 bg-card/50">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Priority Manufacturing Sectors</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    sector: "Textiles & Garments",
                    description: "Leveraging Afghanistan's cotton production and traditional craftsmanship",
                    opportunities: ["Cotton processing", "Garment manufacturing", "Carpet production", "Export-oriented production"],
                    jobs: "150K+",
                    investment: "$2.5B",
                    growth: "18%"
                  },
                  {
                    sector: "Food Processing",
                    description: "Value-added processing of agricultural products for domestic and export markets",
                    opportunities: ["Dried fruits", "Spice processing", "Dairy products", "Beverages"],
                    jobs: "100K+",
                    investment: "$1.8B",
                    growth: "15%"
                  },
                  {
                    sector: "Construction Materials",
                    description: "Meeting massive infrastructure development needs",
                    opportunities: ["Cement production", "Steel manufacturing", "Marble processing", "Glass production"],
                    jobs: "80K+",
                    investment: "$2.2B",
                    growth: "20%"
                  },
                  {
                    sector: "Pharmaceuticals",
                    description: "Local medicine production ensuring healthcare security",
                    opportunities: ["Generic medicines", "Traditional medicine", "Medical devices", "Packaging"],
                    jobs: "50K+",
                    investment: "$800M",
                    growth: "16%"
                  }
                ].map((sector, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-card rounded-2xl border border-border p-8"
                  >
                    <h3 className="text-2xl font-bold mb-3">{sector.sector}</h3>
                    <p className="text-muted-foreground mb-4">{sector.description}</p>
                    <div className="mb-4 grid grid-cols-3 gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Users className="w-4 h-4 text-primary" />
                          <span className="text-sm text-muted-foreground">Jobs</span>
                        </div>
                        <span className="font-semibold">{sector.jobs}</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <DollarSign className="w-4 h-4 text-primary" />
                          <span className="text-sm text-muted-foreground">Investment</span>
                        </div>
                        <span className="font-semibold">{sector.investment}</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <TrendingUp className="w-4 h-4 text-primary" />
                          <span className="text-sm text-muted-foreground">Growth</span>
                        </div>
                        <span className="font-semibold">{sector.growth}</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Key Opportunities:</h4>
                      <ul className="space-y-1">
                        {sector.opportunities.map((opp, j) => (
                          <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-3 h-3 text-primary" />
                            {opp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Manufacturing Output by Sector */}
          <section className="py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-4xl md:text-5xl font-bold mb-2">Manufacturing Output by Sector</h2>
                <p className="text-muted-foreground mb-8">Production value and growth across manufacturing industries</p>
                <div className="bg-card rounded-2xl border border-border p-6">
                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={[
                      { sector: "Textiles", output: 2.5, growth: 18, jobs: 150 },
                      { sector: "Food", output: 1.8, growth: 15, jobs: 100 },
                      { sector: "Construction", output: 2.2, growth: 20, jobs: 80 },
                      { sector: "Pharma", output: 0.8, growth: 16, jobs: 50 },
                      { sector: "Electronics", output: 1.2, growth: 25, jobs: 60 },
                      { sector: "Chemicals", output: 1.5, growth: 17, jobs: 70 },
                      { sector: "Metals", output: 2.0, growth: 19, jobs: 90 },
                      { sector: "Machinery", output: 1.0, growth: 14, jobs: 45 },
                    ]}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 20%)" />
                      <XAxis dataKey="sector" stroke="hsl(0, 0%, 50%)" fontSize={11} />
                      <YAxis stroke="hsl(0, 0%, 50%)" fontSize={12} />
                      <Tooltip contentStyle={{ backgroundColor: "hsl(0, 0%, 10%)", border: "1px solid hsl(0, 0%, 20%)", borderRadius: "12px", color: "#fff" }} />
                      <Legend />
                      <Bar dataKey="output" name="Output ($B)" fill="hsl(217, 91%, 60%)" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="growth" name="Growth %" fill="hsl(142, 71%, 45%)" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Production Growth Projections */}
          <section className="py-20 px-6 lg:px-12 bg-card/50">
            <div className="max-w-7xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-4xl md:text-5xl font-bold mb-2">Production Growth Projections (2026-2030)</h2>
                <p className="text-muted-foreground mb-8">Forecasted manufacturing output across key sectors</p>
                <div className="bg-card rounded-2xl border border-border p-6">
                  <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={[
                      { year: "2026", Textiles: 2.5, Food: 1.8, Construction: 2.2, Electronics: 1.2 },
                      { year: "2027", Textiles: 3.0, Food: 2.2, Construction: 2.8, Electronics: 1.6 },
                      { year: "2028", Textiles: 3.6, Food: 2.7, Construction: 3.5, Electronics: 2.1 },
                      { year: "2029", Textiles: 4.3, Food: 3.3, Construction: 4.3, Electronics: 2.7 },
                      { year: "2030", Textiles: 5.1, Food: 4.0, Construction: 5.2, Electronics: 3.5 },
                    ]}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 20%)" />
                      <XAxis dataKey="year" stroke="hsl(0, 0%, 50%)" fontSize={12} />
                      <YAxis stroke="hsl(0, 0%, 50%)" fontSize={12} />
                      <Tooltip contentStyle={{ backgroundColor: "hsl(0, 0%, 10%)", border: "1px solid hsl(0, 0%, 20%)", borderRadius: "12px", color: "#fff" }} />
                      <Legend />
                      <Line type="monotone" dataKey="Textiles" stroke="hsl(217, 91%, 60%)" strokeWidth={3} />
                      <Line type="monotone" dataKey="Food" stroke="hsl(142, 71%, 45%)" strokeWidth={3} />
                      <Line type="monotone" dataKey="Construction" stroke="hsl(25, 95%, 53%)" strokeWidth={3} />
                      <Line type="monotone" dataKey="Electronics" stroke="hsl(262, 83%, 58%)" strokeWidth={3} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Top Manufacturing Companies */}
          <section className="py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Leading Manufacturing Companies</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: "Afghan Textile Industries", sector: "Textiles", employees: "15,000", revenue: "$450M", location: "Kabul, Herat", icon: Factory },
                  { name: "National Food Processing Co", sector: "Food Processing", employees: "8,500", revenue: "$280M", location: "Kandahar, Nangarhar", icon: Award },
                  { name: "Afghan Cement Corporation", sector: "Construction", employees: "12,000", revenue: "$520M", location: "Balkh, Herat", icon: Building2 },
                  { name: "Pharma Afghanistan Ltd", sector: "Pharmaceuticals", employees: "3,200", revenue: "$180M", location: "Kabul", icon: Activity },
                  { name: "Electronics Manufacturing Hub", sector: "Electronics", employees: "5,800", revenue: "$320M", location: "Kabul, Jalalabad", icon: Zap },
                  { name: "Steel & Metals Processing", sector: "Metals", employees: "9,500", revenue: "$410M", location: "Balkh, Herat", icon: Target },
                ].map((company, i) => (
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
                        <company.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold">{company.name}</h3>
                        <p className="text-sm text-muted-foreground">{company.sector}</p>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Employees</span>
                        <span className="font-semibold">{company.employees}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Revenue</span>
                        <span className="font-semibold text-primary">{company.revenue}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        <span>{company.location}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </>
      }
    />
  );
};

export default PageManufacturing;
