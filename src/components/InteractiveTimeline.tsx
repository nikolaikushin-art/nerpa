import { motion } from "framer-motion";
import {
  Milestone, Target, Rocket, Globe, Building2, Zap, Users, TrendingUp,
  Factory, GraduationCap, Heart, Droplets, Cpu, Home, Wheat, Pickaxe,
  ChevronRight, CheckCircle, Clock, Star } from
"lucide-react";

const milestones = [
{
  year: "2026",
  phase: "Foundation",
  title: "Launch & Mobilisation",
  description: "Establishment of institutional frameworks, regulatory reforms, and initial infrastructure investments across all 34 provinces.",
  achievements: [
  "National Development Council established",
  "Investment Protection Framework enacted",
  "50 flagship projects launched",
  "E-governance platform operational"],

  stats: { investment: "$5B", jobs: "50K", projects: "150" },
  icon: Rocket,
  color: "from-blue-500 to-blue-600",
  status: "active"
},
{
  year: "2028",
  phase: "Acceleration",
  title: "Infrastructure Surge",
  description: "Major infrastructure development including national highway network, energy grid expansion, and smart city foundations.",
  achievements: [
  "2,000km highways completed",
  "500MW renewable energy online",
  "Universal primary education achieved",
  "20 industrial zones operational"],

  stats: { investment: "$15B", jobs: "200K", projects: "500" },
  icon: Building2,
  color: "from-amber-500 to-amber-600",
  status: "upcoming"
},
{
  year: "2030",
  phase: "Transformation",
  title: "Economic Diversification",
  description: "Industrial manufacturing expansion, export-oriented agriculture, and technology sector maturation driving GDP growth.",
  achievements: [
  "Manufacturing contribution 25% GDP",
  "Agricultural exports reach $3B annually",
  "1,000 tech startups operational",
  "Financial inclusion exceeds 80%"],

  stats: { investment: "$25B", jobs: "500K", projects: "1,000" },
  icon: Factory,
  color: "from-emerald-500 to-emerald-600",
  status: "upcoming"
},
{
  year: "2032",
  phase: "Integration",
  title: "Regional Connectivity",
  description: "Afghanistan emerges as Central Asian trade hub with rail links, energy exports, and transit trade agreements.",
  achievements: [
  "Railway network connects 5 countries",
  "Energy exports to neighbours begin",
  "$10B annual transit trade",
  "Regional logistics hub status achieved"],

  stats: { investment: "$35B", jobs: "750K", projects: "1,500" },
  icon: Globe,
  color: "from-purple-500 to-purple-600",
  status: "upcoming"
},
{
  year: "2035",
  phase: "Innovation",
  title: "Knowledge Economy",
  description: "Higher education excellence, research institutions, and innovation ecosystems driving knowledge-based growth.",
  achievements: [
  "10 world-class universities established",
  "National research centres operational",
  "AI and tech exports begin",
  "Healthcare tourism destination"],

  stats: { investment: "$45B", jobs: "1M", projects: "2,000" },
  icon: GraduationCap,
  color: "from-cyan-500 to-cyan-600",
  status: "upcoming"
},
{
  year: "2038",
  phase: "Prosperity",
  title: "Inclusive Growth",
  description: "Universal access to services, reduced inequality, and sustainable environmental practices across all regions.",
  achievements: [
  "100% electricity access achieved",
  "Universal healthcare coverage",
  "Middle-income country status",
  "Environmental sustainability targets met"],

  stats: { investment: "$60B", jobs: "1.5M", projects: "3,000" },
  icon: Heart,
  color: "from-rose-500 to-rose-600",
  status: "upcoming"
},
{
  year: "2040",
  phase: "Vision Achieved",
  title: "A Prosperous Afghanistan",
  description: "Self-reliant, innovative, and globally connected nation with dignity and opportunity for every citizen.",
  achievements: [
  "Upper middle-income economy",
  "Regional economic leader",
  "Sustainable development model",
  "Global competitiveness achieved"],

  stats: { investment: "$75B+", jobs: "2M+", projects: "5,000+" },
  icon: Star,
  color: "from-yellow-500 to-yellow-600",
  status: "vision"
}];


const keyIndicators = [
{ label: "GDP Growth Target", current: "3%", target: "8%", icon: TrendingUp },
{ label: "Jobs Created", current: "50K", target: "2M+", icon: Users },
{ label: "Infrastructure Investment", current: "$5B", target: "$75B+", icon: Building2 },
{ label: "Energy Capacity", current: "1GW", target: "15GW", icon: Zap },
{ label: "Export Revenue", current: "$1B", target: "$20B", icon: Globe },
{ label: "Financial Inclusion", current: "30%", target: "95%", icon: Factory }];


export const InteractiveTimeline = () => {
  return (
    <section id="timeline" className="py-32 px-6 lg:px-12 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20">
          
          <span className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-6 block">
            Development Roadmap
          </span>
          <h2 className="text-5xl md:text-7xl font-bold mb-8">Vision 2026–2040</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Afghanistan's transformative journey from economic reform to national prosperity — a comprehensive 
            development programme spanning infrastructure, industry, innovation, and inclusive growth.
          </p>
        </motion.div>

        {/* Key Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
          
          {keyIndicators.map((indicator, index) =>
          <motion.div
            key={indicator.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="bg-card rounded-xl border border-border/50 p-4 text-center hover:border-primary/30 transition-all group">
            
              <indicator.icon className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="text-xs text-muted-foreground mb-1">{indicator.label}</div>
              <div className="flex items-center justify-center gap-2 text-sm">
                <span className="text-muted-foreground">{indicator.current}</span>
                <ChevronRight className="w-3 h-3 text-primary" />
                <span className="text-primary font-bold">{indicator.target}</span>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/50 via-primary to-primary/50 rounded-full hidden lg:block" />
          
          {/* Milestones */}
          <div className="space-y-12 lg:space-y-0">
            {milestones.map((milestone, index) => {
              const isLeft = index % 2 === 0;
              const Icon = milestone.icon;

              return (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative lg:flex items-center ${isLeft ? 'lg:justify-end' : 'lg:justify-start'} lg:mb-24`}>
                  
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 -translate-x-1/2 z-20 hidden lg:block">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                      viewport={{ once: true }}
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${milestone.color} flex items-center justify-center shadow-lg shadow-primary/20`}>
                      
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-center">
                      
                      <div className="text-xs text-muted-foreground uppercase tracking-wider">{milestone.phase}</div>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full lg:w-5/12 ${isLeft ? 'lg:pr-24' : 'lg:pl-24'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className={`bg-card rounded-2xl border border-border/50 p-6 hover:border-primary/30 transition-all duration-500 group relative overflow-hidden ${
                      milestone.status === 'active' ? 'ring-2 ring-primary/30' : ''}`
                      }>
                      
                      {/* Gradient Background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${milestone.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                      
                      {/* Mobile Year Badge */}
                      <div className="lg:hidden flex items-center gap-3 mb-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${milestone.color} flex items-center justify-center`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-xl font-bold text-primary">{milestone.year}</div>
                          <div className="text-xs text-muted-foreground uppercase tracking-wider">{milestone.phase}</div>
                        </div>
                        {milestone.status === 'active' &&
                        <span className="ml-auto px-2 py-1 bg-primary/20 text-primary text-xs rounded-full flex items-center gap-1">
                            <Clock className="w-3 h-3" /> Current
                          </span>
                        }
                      </div>

                      {/* Status Badge - Desktop */}
                      {milestone.status === 'active' &&
                      <span className="hidden lg:flex absolute top-4 right-4 px-2 py-1 bg-primary/20 text-primary text-xs rounded-full items-center gap-1">
                          <Clock className="w-3 h-3" /> Current Phase
                        </span>
                      }
                      
                      <div className="relative z-10">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{milestone.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{milestone.description}</p>
                        
                        {/* Achievements */}
                        <div className="space-y-2 mb-4">
                          {milestone.achievements.map((achievement, i) =>
                          <div key={i} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                              <span className="text-foreground/80">{achievement}</span>
                            </div>
                          )}
                        </div>
                        
                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-3 pt-4 border-t border-border/30">
                          <div className="text-center">
                            <div className="text-lg font-bold text-primary">{milestone.stats.investment}</div>
                            <div className="text-xs text-muted-foreground">Investment</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-primary">{milestone.stats.jobs}</div>
                            <div className="text-xs text-muted-foreground">Jobs</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-primary">{milestone.stats.projects}</div>
                            <div className="text-xs text-muted-foreground">Projects</div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>);

            })}
          </div>
        </div>

        {/* Progress Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-24 bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl p-8 md:p-12 border border-primary/20">
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">14-Year Transformation Journey</h3>
              <p className="text-lg text-muted-foreground mb-6">
                From 2026 to 2040, Afghanistan will undergo the most comprehensive economic transformation in its history—building infrastructure, developing industries, fostering innovation, and creating prosperity for every citizen.
              

              </p>
              <div className="flex flex-wrap gap-4">
                <div className="px-4 py-2 bg-primary/20 rounded-lg">
                  <div className="text-2xl font-bold text-primary">$75B+</div>
                  <div className="text-xs text-muted-foreground">Total Investment</div>
                </div>
                <div className="px-4 py-2 bg-primary/20 rounded-lg">
                  <div className="text-2xl font-bold text-primary">2M+</div>
                  <div className="text-xs text-muted-foreground">Jobs Created</div>
                </div>
                <div className="px-4 py-2 bg-primary/20 rounded-lg">
                  <div className="text-2xl font-bold text-primary">5,000+</div>
                  <div className="text-xs text-muted-foreground">Projects</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
              { label: "Phases", value: "7" },
              { label: "Years", value: "14" },
              { label: "Sectors", value: "40+" },
              { label: "Provinces", value: "34" }].
              map((stat) =>
              <div key={stat.label} className="text-center p-4 bg-card/50 rounded-xl border border-border/30">
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

};