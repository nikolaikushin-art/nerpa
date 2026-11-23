import { motion } from "framer-motion";
import { GenericPageLayout } from "@/components/GenericPageLayout";
import { MapPin, Building2, Users, TrendingUp, DollarSign, Zap, Factory, Wheat, Pickaxe, Heart, GraduationCap, BarChart3, Activity, Target, Award, Globe, Clock, ArrowRight, FileText, PieChart, LineChart as LineChartIcon, CheckCircle, Shield, Leaf, Network, Briefcase, BookOpen, Layers, Gauge, Rocket, Star, CheckCircle2, XCircle, ArrowUpRight, ArrowDownRight, Sparkles, Flame, Lightbulb, Brain, Cpu, Database, Truck, Home, Landmark, Info, AlertTriangle, TrendingDown, Compass, Navigation } from "lucide-react";
import { BarChart, Bar, LineChart as RechartsLineChart, Line, PieChart as RechartsPieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, AreaChart, Area, ComposedChart } from "recharts";
import { ProvinceData } from "@/data/provinces";
import { Link } from "react-router-dom";
import { ProvincePhotoGallery } from "@/components/ProvincePhotoGallery";

// Province hero images mapped by ID
const kabulSkyline = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/kabul-modern-skyline.jpg";
const heratCitadel = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/herat-citadel.jpg";
const balkhMosque = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/balkh-blue-mosque.jpg";
const kandaharPomegranate = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/kandahar-pomegranate.jpg";
const bamyanBuddha = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/bamyan-buddha.jpg";
const nangarharValley = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/nangarhar-valley.jpg";
const panjshirValley = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/panjshir-valley.jpg";
const kunduzCotton = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/kunduz-cotton.jpg";
const badakhshanGems = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/badakhshan-gems.jpg";
const helmandRiver = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/helmand-river.jpg";
const faryabCarpets = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/faryab-carpets.jpg";
const jowzjanGas = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/jowzjan-gas.jpg";
const ghazniMining = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/ghazni-mining.jpg";
const logarCopper = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/logar-copper.jpg";
const kapisa = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/kapisa-grapes.jpg";
const badghis = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/badghis-pistachio.jpg";
const baghlan = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/baghlan-sugar.jpg";
const farah = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/farah-solar.jpg";
const ghor = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/ghor-minaret.jpg";
const kunar = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/kunar-honey.jpg";
const khost = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/khost-trade.jpg";
const laghman = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/laghman-citrus.jpg";
const nimroz = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/nimroz-desert.jpg";
const nuristan = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/nuristan-village.jpg";
const paktya = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/paktya-forests.jpg";
const paktika = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/paktika-wilderness.jpg";
const parwan = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/parwan-salang.jpg";
const samangan = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/samangan-stupa.jpg";
const sarEPol = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/sar-e-pol-sheep.jpg";
const takhar = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/takhar-rice.jpg";
const uruzgan = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/uruzgan-valleys.jpg";
const wardak = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/wardak-apples.jpg";
const zabul = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/zabul-fortress.jpg";
const daykundi = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/daykundi-lakes.jpg";

const provinceImages: Record<string, string> = {
  kabul: kabulSkyline, herat: heratCitadel, balkh: balkhMosque, kandahar: kandaharPomegranate,
  bamyan: bamyanBuddha, nangarhar: nangarharValley, panjshir: panjshirValley, kunduz: kunduzCotton,
  badakhshan: badakhshanGems, helmand: helmandRiver, faryab: faryabCarpets, jowzjan: jowzjanGas,
  ghazni: ghazniMining, logar: logarCopper, kapisa: kapisa, badghis: badghis, baghlan: baghlan,
  farah: farah, ghor: ghor, kunar: kunar, khost: khost, laghman: laghman, nimroz: nimroz,
  nuristan: nuristan, paktya: paktya, paktika: paktika, parwan: parwan, samangan: samangan,
  "sar-e-pol": sarEPol, takhar: takhar, uruzgan: uruzgan, wardak: wardak, zabul: zabul, daykundi: daykundi
};

// Secondary images — unique per province for visual breaks
const kabulFinancial = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/kabul-financial-district.jpg";
const heratAncientCitadel = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/herat-ancient-citadel.jpg";
const balkhBlueDomes = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/balkh-blue-domes.jpg";
const kandaharHarvest = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/kandahar-pomegranate-harvest.jpg";
const bamyanNiches = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/bamyan-buddha-niches.jpg";
const panjshirRiver = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/panjshir-emerald-river.jpg";
const nangarharOranges = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/nangarhar-orange-groves.jpg";
const badakhshanLapis = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/badakhshan-lapis-mines.jpg";
const helmandGreen = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/helmand-green-valley.jpg";
const kunduzHarvest = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/kunduz-cotton-harvest.jpg";
const faryabWeaving = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/faryab-carpet-weaving.jpg";
const jowzjanPlant = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/jowzjan-gas-plant.jpg";
const ghazniHeritage = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/ghazni-minaret-heritage.jpg";
const logarOperation = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/logar-copper-operation.jpg";

const secondaryImages: Record<string, string> = {
  kabul: kabulFinancial, herat: heratAncientCitadel, balkh: balkhBlueDomes, kandahar: kandaharHarvest,
  bamyan: bamyanNiches, panjshir: panjshirRiver, nangarhar: nangarharOranges, badakhshan: badakhshanLapis,
  helmand: helmandGreen, kunduz: kunduzHarvest, faryab: faryabWeaving, jowzjan: jowzjanPlant,
  ghazni: ghazniHeritage, logar: logarOperation,

  // High quality secondary images generated dynamically
  kapisa: kapisa,
  badghis: badghis,
  baghlan: baghlan,
  farah: farah,
  ghor: ghor,
  kunar: kunar,
  khost: khost,
  laghman: laghman,
  nimroz: nimroz,
  nuristan: nuristan,
  paktya: paktya,
  paktika: paktika,
  parwan: parwan,
  samangan: samangan,
  "sar-e-pol": sarEPol,
  takhar: takhar,
  uruzgan: uruzgan,
  wardak: wardak,
  zabul: zabul,
  daykundi: daykundi
};

interface ProvinceDetailPageProps {
  province: ProvinceData;
}

export const ProvinceDetailPage = ({ province }: ProvinceDetailPageProps) => {
  const heroImage = provinceImages[province.id] || kabulSkyline;
  const secondaryImage = secondaryImages[province.id] || heroImage;

  return (
    <GenericPageLayout
      title={province.name}
      subtitle={`${province.region} Region • ${province.capital}`}
      icon={MapPin}
      heroImage={heroImage}
      overview={province.description}
      stats={[
      { value: province.population, label: "Population" },
      { value: province.area, label: "Area" },
      { value: province.investment, label: "Investment" },
      { value: `${province.projects}+`, label: "Projects" }]
      }
      sections={
      <>
          {/* VISUAL BREAK: Full-bleed province image */}
          <section className="relative h-[50vh] overflow-hidden">
            <motion.div initial={{ scale: 1.1 }} whileInView={{ scale: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }} className="absolute inset-0">
              <img src={heroImage} alt={province.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            </motion.div>
            <div className="absolute bottom-0 left-0 right-0 p-12 z-10">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-3">{province.name}</h2>
                <p className="text-lg text-white/80">{province.strategicPotential}</p>
              </motion.div>
            </div>
          </section>

          {/* Section 1: Key Resources */}
          <section className="py-20 px-6 lg:px-12 bg-card/50">
            <div className="max-w-7xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <h2 className="text-4xl md:text-5xl font-bold mb-2">Key Resources & Strategic Assets</h2>
                <p className="text-muted-foreground mb-8">Primary resources and strategic advantages driving {province.name}'s economic development</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {province.keyResources.map((resource, i) =>
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.3 }}
                className="bg-card rounded-xl border border-border p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-200">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-primary/20 rounded-lg"><Star className="w-5 h-5 text-primary" /></div>
                        <h3 className="font-bold">{resource}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">Strategic asset contributing to {province.name}'s competitive advantage</p>
                    </motion.div>
                )}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Section 2: Economic Performance */}
          <section className="py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-4xl md:text-5xl font-bold mb-2">Economic Performance Dashboard</h2>
                <p className="text-muted-foreground mb-8">Comprehensive economic indicators for {province.name}</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                { label: "GDP", value: province.gdp, icon: DollarSign, color: "from-green-500 to-emerald-600", trend: "+" + province.growth },
                { label: "Growth Rate", value: province.growth, icon: TrendingUp, color: "from-blue-500 to-cyan-600", trend: "Rising" },
                { label: "Total Investment", value: province.investment, icon: Briefcase, color: "from-purple-500 to-pink-600", trend: "Active" },
                { label: "Jobs Created", value: province.jobs, icon: Users, color: "from-yellow-500 to-orange-600", trend: "Growing" }].
                map((item, i) =>
                <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="bg-card rounded-xl border border-border p-6 hover:border-primary/30 transition-all text-center">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-4`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-sm text-muted-foreground mb-2">{item.label}</div>
                      <div className="text-2xl font-bold text-primary mb-1">{item.value}</div>
                      <div className="text-xs text-green-400">{item.trend}</div>
                    </motion.div>
                )}
                </div>
              </motion.div>
            </div>
          </section>

          {/* VISUAL BREAK: Elegant cinematic split — compact */}
          <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
            <div className="flex h-full">
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex-1 relative">
                <img src={secondaryImage} alt={province.name} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background" />
              </motion.div>
              <div className="flex-1 flex items-center px-8 lg:px-16">
                <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                  <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-3 block">Vision 2026–2040</span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">{province.name}'s Strategic Future</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-3">{province.description}</p>
                  <div className="flex gap-4">
                    <div className="bg-card/50 rounded-xl border border-border px-4 py-3">
                      <div className="text-xl font-bold text-primary">{province.gdp}</div>
                      <div className="text-xs text-muted-foreground">Provincial GDP</div>
                    </div>
                    <div className="bg-card/50 rounded-xl border border-border px-4 py-3">
                      <div className="text-xl font-bold text-primary">{province.growth}</div>
                      <div className="text-xs text-muted-foreground">Growth Rate</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Section 3: Primary Sectors */}
          <section className="py-20 px-6 lg:px-12 bg-card/50">
            <div className="max-w-7xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-4xl md:text-5xl font-bold mb-2">Primary Economic Sectors</h2>
                <p className="text-muted-foreground mb-8">Sector distribution and contribution to {province.name}'s economy</p>
                <div className="bg-card rounded-2xl border border-border p-6">
                  <ResponsiveContainer width="100%" height={400}>
                    <RechartsPieChart>
                      <Pie
                      data={province.primarySectors.map((sector, i) => ({
                        name: sector,
                        value: 100 / province.primarySectors.length + i * 2,
                        color: ["hsl(217, 91%, 60%)", "hsl(142, 71%, 45%)", "hsl(47, 96%, 53%)", "hsl(25, 95%, 53%)", "hsl(262, 83%, 58%)", "hsl(199, 89%, 48%)"][i % 6]
                      }))}
                      cx="50%" cy="50%" outerRadius={120} innerRadius={60} paddingAngle={3} dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`} labelLine={false}>
                      
                        {province.primarySectors.map((_, i) =>
                      <Cell key={i} fill={["hsl(217, 91%, 60%)", "hsl(142, 71%, 45%)", "hsl(47, 96%, 53%)", "hsl(25, 95%, 53%)", "hsl(262, 83%, 58%)", "hsl(199, 89%, 48%)"][i % 6]} />
                      )}
                      </Pie>
                      <Tooltip contentStyle={{ backgroundColor: "hsl(0, 0%, 10%)", border: "1px solid hsl(0, 0%, 20%)", borderRadius: "12px", color: "#fff" }} />
                      <Legend />
                    </RechartsPieChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Section 4: Infrastructure */}
          <section className="py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Infrastructure Development Status</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
              { label: "Road Network", value: province.infrastructure.roads, icon: Building2, color: "from-orange-500 to-amber-600" },
              { label: "Energy Capacity", value: province.infrastructure.energy, icon: Zap, color: "from-yellow-500 to-orange-600" },
              { label: "Water Access", value: province.infrastructure.water, icon: Leaf, color: "from-cyan-500 to-blue-600" },
              { label: "Telecom Coverage", value: province.infrastructure.telecom, icon: Network, color: "from-purple-500 to-pink-600" }].
              map((item, i) =>
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="bg-card rounded-2xl border border-border p-6 hover:border-primary/30 transition-all">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold mb-2">{item.label}</h3>
                    <div className="text-2xl font-bold text-primary">{item.value}</div>
                    <div className="h-2 bg-background rounded-full overflow-hidden mt-3">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: item.value.replace(/[^0-9]/g, "") + "%" }} viewport={{ once: true }} transition={{ duration: 1, delay: i * 0.1 }}
                  className="h-full bg-gradient-to-r from-primary to-primary/60" />
                    </div>
                  </motion.div>
              )}
              </div>
            </div>
          </section>

          {/* VISUAL BREAK: Full-width with overlay stats */}
          <section className="relative h-[35vh] overflow-hidden">
            <motion.div initial={{ scale: 1.05 }} whileInView={{ scale: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }} className="absolute inset-0">
              <img src={heroImage} alt={province.name} className="w-full h-full object-cover" style={{ objectPosition: "center 70%" }} />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-black/30 to-transparent" />
            </motion.div>
            <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="max-w-7xl mx-auto flex items-end justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">Investment Opportunities</h3>
                  <p className="text-white/70 mt-1 text-sm">Priority sectors driving growth in {province.name}</p>
                </div>
                <div className="hidden md:flex gap-3">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 px-5 py-2">
                    <div className="text-xl font-bold text-white">{province.investment}</div>
                    <div className="text-xs text-white/60">Total Investment</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 px-5 py-2">
                    <div className="text-xl font-bold text-white">{province.projects}+</div>
                    <div className="text-xs text-white/60">Active Projects</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Section 5: Opportunities */}
          <section className="py-20 px-6 lg:px-12 bg-card/50">
            <div className="max-w-7xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-4xl md:text-5xl font-bold mb-8">Investment Opportunities</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {province.opportunities.map((opportunity, i) =>
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="bg-card rounded-xl border border-border p-6 hover:border-primary/30 transition-all">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold mb-2">{opportunity}</h3>
                          <p className="text-sm text-muted-foreground">High-potential investment opportunity in {province.name}</p>
                        </div>
                      </div>
                    </motion.div>
                )}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Section 6: Key Highlights */}
          <section className="py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Key Highlights & Achievements</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {province.highlights.map((highlight, i) =>
              <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl border border-border p-6 hover:border-primary/30 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/20 rounded-lg"><Award className="w-5 h-5 text-primary" /></div>
                      <div>
                        <h3 className="font-bold mb-2">{highlight}</h3>
                        <p className="text-sm text-muted-foreground">Significant achievement contributing to {province.name}'s development</p>
                      </div>
                    </div>
                  </motion.div>
              )}
              </div>
            </div>
          </section>

          {/* Section 7: Challenges */}
          <section className="py-20 px-6 lg:px-12 bg-card/50">
            <div className="max-w-7xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-4xl md:text-5xl font-bold mb-8">Challenges & Mitigation Strategies</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {province.challenges.map((challenge, i) =>
                <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl border border-border p-6 hover:border-primary/30 transition-all">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold mb-2">{challenge}</h3>
                          <p className="text-sm text-muted-foreground">Active mitigation strategies and solutions in place</p>
                        </div>
                      </div>
                    </motion.div>
                )}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Section 8: Project Portfolio Chart */}
          <section className="py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-4xl md:text-5xl font-bold mb-8">Active Project Portfolio</h2>
                <div className="bg-card rounded-2xl border border-border p-6">
                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={[
                  { sector: "Infrastructure", projects: Math.floor(province.projects * 0.25), investment: parseFloat(province.investment.replace("$", "").replace("B", "")) * 0.25 },
                  { sector: "Energy", projects: Math.floor(province.projects * 0.20), investment: parseFloat(province.investment.replace("$", "").replace("B", "")) * 0.20 },
                  { sector: "Agriculture", projects: Math.floor(province.projects * 0.18), investment: parseFloat(province.investment.replace("$", "").replace("B", "")) * 0.18 },
                  { sector: "Manufacturing", projects: Math.floor(province.projects * 0.15), investment: parseFloat(province.investment.replace("$", "").replace("B", "")) * 0.15 },
                  { sector: "Mining", projects: Math.floor(province.projects * 0.12), investment: parseFloat(province.investment.replace("$", "").replace("B", "")) * 0.12 },
                  { sector: "Services", projects: Math.floor(province.projects * 0.10), investment: parseFloat(province.investment.replace("$", "").replace("B", "")) * 0.10 }]
                  }>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 20%)" />
                      <XAxis dataKey="sector" stroke="hsl(0, 0%, 50%)" fontSize={12} />
                      <YAxis stroke="hsl(0, 0%, 50%)" fontSize={12} />
                      <Tooltip contentStyle={{ backgroundColor: "hsl(0, 0%, 10%)", border: "1px solid hsl(0, 0%, 20%)", borderRadius: "12px", color: "#fff" }} />
                      <Legend />
                      <Bar dataKey="projects" name="Projects" fill="hsl(142, 71%, 45%)" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="investment" name="Investment ($B)" fill="hsl(217, 91%, 60%)" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Section 9: Growth Projections */}
          <section className="py-20 px-6 lg:px-12 bg-card/50">
            <div className="max-w-7xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-4xl md:text-5xl font-bold mb-8">Growth Projections (2026–2040)</h2>
                <div className="bg-card rounded-2xl border border-border p-6">
                  <ResponsiveContainer width="100%" height={400}>
                    <AreaChart data={[
                  { year: "2026", GDP: parseFloat(province.gdp.replace("$", "").replace("B", "")) * 0.85, Investment: parseFloat(province.investment.replace("$", "").replace("B", "")) * 0.20 },
                  { year: "2028", GDP: parseFloat(province.gdp.replace("$", "").replace("B", "")) * 0.92, Investment: parseFloat(province.investment.replace("$", "").replace("B", "")) * 0.35 },
                  { year: "2030", GDP: parseFloat(province.gdp.replace("$", "").replace("B", "")), Investment: parseFloat(province.investment.replace("$", "").replace("B", "")) * 0.50 },
                  { year: "2032", GDP: parseFloat(province.gdp.replace("$", "").replace("B", "")) * 1.12, Investment: parseFloat(province.investment.replace("$", "").replace("B", "")) * 0.65 },
                  { year: "2034", GDP: parseFloat(province.gdp.replace("$", "").replace("B", "")) * 1.28, Investment: parseFloat(province.investment.replace("$", "").replace("B", "")) * 0.80 },
                  { year: "2036", GDP: parseFloat(province.gdp.replace("$", "").replace("B", "")) * 1.45, Investment: parseFloat(province.investment.replace("$", "").replace("B", "")) * 0.90 },
                  { year: "2038", GDP: parseFloat(province.gdp.replace("$", "").replace("B", "")) * 1.65, Investment: parseFloat(province.investment.replace("$", "").replace("B", "")) * 0.95 },
                  { year: "2040", GDP: parseFloat(province.gdp.replace("$", "").replace("B", "")) * 1.85, Investment: parseFloat(province.investment.replace("$", "").replace("B", "")) }]
                  }>
                      <defs>
                        <linearGradient id="provGDP" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(142, 71%, 45%)" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="hsl(142, 71%, 45%)" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="provInvestment" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(217, 91%, 60%)" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="hsl(217, 91%, 60%)" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 20%)" />
                      <XAxis dataKey="year" stroke="hsl(0, 0%, 50%)" fontSize={12} />
                      <YAxis stroke="hsl(0, 0%, 50%)" fontSize={12} />
                      <Tooltip contentStyle={{ backgroundColor: "hsl(0, 0%, 10%)", border: "1px solid hsl(0, 0%, 20%)", borderRadius: "12px", color: "#fff" }} />
                      <Legend />
                      <Area type="monotone" dataKey="GDP" name="GDP ($B)" stroke="hsl(142, 71%, 45%)" fill="url(#provGDP)" />
                      <Area type="monotone" dataKey="Investment" name="Investment ($B)" stroke="hsl(217, 91%, 60%)" fill="url(#provInvestment)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Section 10: Regional Comparison */}
          <section className="py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Regional Comparison</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
              { metric: "Investment Ranking", value: "Top 5", icon: Award, color: "from-green-500 to-emerald-600" },
              { metric: "Growth Rate", value: province.growth, icon: TrendingUp, color: "from-blue-500 to-cyan-600" },
              { metric: "Project Density", value: `${Math.floor(province.projects / 10)}/10K`, icon: Target, color: "from-purple-500 to-pink-600" },
              { metric: "Infrastructure Score", value: "85/100", icon: Building2, color: "from-orange-500 to-amber-600" }].
              map((item, i) =>
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="bg-card rounded-xl border border-border p-6 text-center">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-4`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-sm text-muted-foreground mb-2">{item.metric}</div>
                    <div className="text-2xl font-bold text-primary">{item.value}</div>
                  </motion.div>
              )}
              </div>
            </div>
          </section>

          {/* Section 11: Strategic Initiatives */}
          <section className="py-20 px-6 lg:px-12 bg-card/50">
            <div className="max-w-7xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-4xl md:text-5xl font-bold mb-8">Strategic Development Initiatives</h2>
                <div className="space-y-4">
                  {province.primarySectors.slice(0, 6).map((sector, i) =>
                <motion.div key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl border border-border p-6 hover:border-primary/30 transition-all">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/20 rounded-xl"><Rocket className="w-6 h-6 text-primary" /></div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2">{sector} Development Initiative</h3>
                          <p className="text-muted-foreground mb-3">Comprehensive development program for {sector.toLowerCase()} sector in {province.name}</p>
                          <div className="flex items-center gap-4 text-sm">
                            <span className="text-muted-foreground">Status: <span className="text-primary font-semibold">Active</span></span>
                            <span className="text-muted-foreground">Progress: <span className="text-primary font-semibold">65%</span></span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                )}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Section 12: Explore & Engagement */}
          














        

          {/* Section 13: Contact */}
          <section className="py-20 px-6 lg:px-12 bg-card/50">
            <div className="max-w-7xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-4xl md:text-5xl font-bold mb-8">Investment Engagement</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-card rounded-2xl border border-border p-8">
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-3"><Briefcase className="w-6 h-6 text-primary" />Investment Inquiries</h3>
                    <p className="text-muted-foreground mb-6">Contact our investment team to explore opportunities in {province.name}</p>
                    <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all">
                      Contact Investment Team<ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className="bg-card rounded-2xl border border-border p-8">
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-3"><Info className="w-6 h-6 text-primary" />Additional Resources</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2 text-muted-foreground"><FileText className="w-4 h-4 text-primary" /><Link to="/publications" className="hover:text-primary transition-colors">Province Development Reports</Link></li>
                      <li className="flex items-center gap-2 text-muted-foreground"><MapPin className="w-4 h-4 text-primary" /><Link to="/provinces" className="hover:text-primary transition-colors">Regional Investment Atlas</Link></li>
                      <li className="flex items-center gap-2 text-muted-foreground"><BarChart3 className="w-4 h-4 text-primary" /><Link to="/dashboard" className="hover:text-primary transition-colors">Economic Dashboard</Link></li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Cinematic Photo Gallery */}
          <ProvincePhotoGallery provinceId={province.id} provinceName={province.name} />
        </>
      } />);


};