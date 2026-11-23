import { Globe } from "lucide-react";
import { GenericPageLayout } from "@/components/GenericPageLayout";
import { ProvinceShowcase } from "@/components/ProvinceShowcase";
import { AfghanistanMap } from "@/components/AfghanistanMap";
import { ProvinceInfrastructureMap } from "@/components/ProvinceInfrastructureMap";
import { motion } from "framer-motion";
import { MapPin, Building2, Users, TrendingUp, DollarSign, Zap, Factory, Wheat, Pickaxe, Heart, GraduationCap, BarChart3, Activity, Target, Award } from "lucide-react";
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Treemap } from "recharts";

const PageProvinces = () => {
  return (
    <GenericPageLayout
      title="34 Provinces of Afghanistan"
      subtitle="Regional Investment Atlas"
      icon={Globe}
      overview="Afghanistan's 34 provinces represent diverse investment landscapes, each with unique economic drivers, natural resources, and development potential. From the mineral-rich mountains of Badakhshan to the agricultural plains of Kandahar, from the cultural heritage of Herat to the technological hub of Kabul, every province offers distinct opportunities for investment and development. Explore comprehensive profiles, infrastructure maps, and strategic initiatives for each province."
      stats={[
        { value: "34", label: "Provinces" },
        { value: "1,000+", label: "Projects" },
        { value: "$75B+", label: "Investment" },
        { value: "100%", label: "Coverage" },
      ]}
      sections={
        <>
          {/* Interactive Map — section uses own Nerpa background */}
          <section className="px-0">
            <AfghanistanMap />
          </section>

          {/* Province Showcase */}
          <section className="py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <ProvinceShowcase />
            </div>
          </section>

          {/* Infrastructure Maps */}
          <section className="py-20 px-6 lg:px-12 bg-card/50">
            <div className="max-w-7xl mx-auto">
              <ProvinceInfrastructureMap />
            </div>
          </section>

          {/* Regional Statistics */}
          <section className="py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Regional Statistics</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                {[
                  { region: "Central", provinces: 9, population: "8.5M", projects: 280, investment: "$18B", icon: MapPin },
                  { region: "North", provinces: 9, population: "7.2M", projects: 240, investment: "$15B", icon: Building2 },
                  { region: "West", provinces: 5, population: "3.8M", projects: 180, investment: "$12B", icon: Users },
                  { region: "South", provinces: 4, population: "3.2M", projects: 140, investment: "$10B", icon: TrendingUp },
                  { region: "East", provinces: 7, population: "5.3M", projects: 160, investment: "$13B", icon: MapPin },
                ].map((region, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-card rounded-2xl border border-border p-6 text-center"
                  >
                    <region.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">{region.region}</h3>
                    <div className="space-y-2 text-sm">
                      <div className="text-muted-foreground">{region.provinces} Provinces</div>
                      <div className="text-muted-foreground">{region.population} Population</div>
                      <div className="text-primary font-semibold">{region.projects} Projects</div>
                      <div className="text-primary font-bold">{region.investment}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Investment Distribution by Region */}
          <section className="py-20 px-6 lg:px-12 bg-card/50">
            <div className="max-w-7xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-4xl md:text-5xl font-bold mb-2">Investment Distribution by Region</h2>
                <p className="text-muted-foreground mb-8">Total investment allocation across Afghanistan's five regions</p>
                <div className="bg-card rounded-2xl border border-border p-6">
                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={[
                      { region: "Central", investment: 18, projects: 280, population: 8.5 },
                      { region: "North", investment: 15, projects: 240, population: 7.2 },
                      { region: "West", investment: 12, projects: 180, population: 3.8 },
                      { region: "South", investment: 10, projects: 140, population: 3.2 },
                      { region: "East", investment: 13, projects: 160, population: 5.3 },
                    ]}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 20%)" />
                      <XAxis dataKey="region" stroke="hsl(0, 0%, 50%)" fontSize={12} />
                      <YAxis stroke="hsl(0, 0%, 50%)" fontSize={12} />
                      <Tooltip contentStyle={{ backgroundColor: "hsl(0, 0%, 10%)", border: "1px solid hsl(0, 0%, 20%)", borderRadius: "12px", color: "#fff" }} />
                      <Legend />
                      <Bar dataKey="investment" name="Investment ($B)" fill="hsl(217, 91%, 60%)" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="projects" name="Projects" fill="hsl(142, 71%, 45%)" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Top Investment Provinces */}
          <section className="py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Top Investment Provinces</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { province: "Kabul", investment: "$8.5B", projects: 120, sectors: ["Tech", "Finance", "Infrastructure"], icon: Building2 },
                  { province: "Logar", investment: "$5.2B", projects: 45, sectors: ["Mining", "Energy"], icon: Pickaxe },
                  { province: "Herat", investment: "$4.8B", projects: 65, sectors: ["Manufacturing", "Trade"], icon: Factory },
                  { province: "Bamyan", investment: "$4.5B", projects: 38, sectors: ["Mining", "Tourism"], icon: Award },
                  { province: "Kandahar", investment: "$4.2B", projects: 55, sectors: ["Agriculture", "Logistics"], icon: Wheat },
                  { province: "Nangarhar", investment: "$3.8B", projects: 52, sectors: ["Agriculture", "Trade"], icon: TrendingUp },
                  { province: "Badakhshan", investment: "$3.5B", projects: 28, sectors: ["Mining", "Energy"], icon: Pickaxe },
                  { province: "Balkh", investment: "$3.2B", projects: 48, sectors: ["Agriculture", "Manufacturing"], icon: Factory },
                  { province: "Ghazni", investment: "$3.0B", projects: 35, sectors: ["Mining", "Energy"], icon: Zap },
                ].map((province, i) => (
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
                        <province.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{province.province}</h3>
                        <p className="text-primary font-semibold">{province.investment}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">{province.projects} Active Projects</div>
                      <div className="flex flex-wrap gap-2">
                        {province.sectors.map((sector, j) => (
                          <span key={j} className="px-2 py-1 text-xs bg-background rounded border border-border text-muted-foreground">
                            {sector}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Sector Distribution by Province */}
          <section className="py-20 px-6 lg:px-12 bg-card/50">
            <div className="max-w-7xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-4xl md:text-5xl font-bold mb-2">Sector Distribution Across Provinces</h2>
                <p className="text-muted-foreground mb-8">Primary economic sectors by province</p>
                <div className="bg-card rounded-2xl border border-border p-6">
                  <ResponsiveContainer width="100%" height={400}>
                    <PieChart>
                      <Pie
                        data={[
                          { name: "Mining", value: 320, color: "hsl(217, 91%, 60%)" },
                          { name: "Agriculture", value: 280, color: "hsl(142, 71%, 45%)" },
                          { name: "Energy", value: 180, color: "hsl(47, 96%, 53%)" },
                          { name: "Manufacturing", value: 150, color: "hsl(25, 95%, 53%)" },
                          { name: "Technology", value: 120, color: "hsl(262, 83%, 58%)" },
                          { name: "Infrastructure", value: 200, color: "hsl(199, 89%, 48%)" },
                          { name: "Healthcare", value: 140, color: "hsl(0, 84%, 60%)" },
                          { name: "Education", value: 110, color: "hsl(330, 81%, 60%)" },
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
                          { name: "Mining", value: 320, color: "hsl(217, 91%, 60%)" },
                          { name: "Agriculture", value: 280, color: "hsl(142, 71%, 45%)" },
                          { name: "Energy", value: 180, color: "hsl(47, 96%, 53%)" },
                          { name: "Manufacturing", value: 150, color: "hsl(25, 95%, 53%)" },
                          { name: "Technology", value: 120, color: "hsl(262, 83%, 58%)" },
                          { name: "Infrastructure", value: 200, color: "hsl(199, 89%, 48%)" },
                          { name: "Healthcare", value: 140, color: "hsl(0, 84%, 60%)" },
                          { name: "Education", value: 110, color: "hsl(330, 81%, 60%)" },
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

          {/* Infrastructure Development by Region */}
          <section className="py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Infrastructure Development Status</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { region: "Central", roads: "2,500km", energy: "3.2GW", water: "85%", telecom: "95%", icon: Building2 },
                  { region: "North", roads: "1,800km", energy: "2.1GW", water: "72%", telecom: "78%", icon: Activity },
                  { region: "West", roads: "1,200km", energy: "1.5GW", water: "68%", telecom: "72%", icon: Target },
                  { region: "South", roads: "950km", energy: "1.2GW", water: "65%", telecom: "70%", icon: Zap },
                  { region: "East", roads: "1,400km", energy: "1.8GW", water: "70%", telecom: "75%", icon: MapPin },
                ].map((region, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-card rounded-2xl border border-border p-6"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <region.icon className="w-6 h-6 text-primary" />
                      <h3 className="text-xl font-bold">{region.region} Region</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Roads</span>
                        <span className="font-semibold">{region.roads}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Energy Capacity</span>
                        <span className="font-semibold">{region.energy}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Water Access</span>
                        <span className="font-semibold">{region.water}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Telecom Coverage</span>
                        <span className="font-semibold">{region.telecom}</span>
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

export default PageProvinces;
