import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  LayoutGrid, Scale, Trophy, Target, GitBranch, Settings, Map, Shield,
  Leaf, AlertTriangle, DollarSign, TrendingUp, Sparkles, ChevronRight,
  ArrowRight, Layers, Eye, Users, Heart, Briefcase, Zap, Building2 } from
"lucide-react";

const partnershipHero = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/nerpa/partnership-hero.jpg";
const governanceImg = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/nerpa/governance-reform.jpg";
const climateImg = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/nerpa/climate-resilience.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 }
};

const resultStats = [
{ value: "14%+", label: "Revenue/GDP" },
{ value: "~6%", label: "Avg Inflation" },
{ value: "6M+", label: "Children in School" },
{ value: "1000s km", label: "Roads Built" }];


export const NERPAPartnershipFrameworkSection = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-muted/10">
      {/* ─── HERO BANNER ─────────────────────────────────────────── */}
      














      

      {/* ─── DELIVERY MODEL ──────────────────────────────────────── */}
      <div className="py-20 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-primary/10 rounded-xl border border-primary/20">
                <LayoutGrid className="w-7 h-7 text-primary" />
              </div>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-2">{t("nerpa.delivery.title")}</h3>
            <p className="text-primary font-medium">{t("nerpa.delivery.subtitle")}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
            { key: "nerpa.delivery.recurrent", icon: DollarSign, title: "Recurrent Cost Support", color: "from-emerald-500/10 to-emerald-600/5" },
            { key: "nerpa.delivery.investment", icon: LayoutGrid, title: "Investment Projects", color: "from-blue-500/10 to-blue-600/5" },
            { key: "nerpa.delivery.technical", icon: Settings, title: "Technical Assistance", color: "from-violet-500/10 to-violet-600/5" },
            { key: "nerpa.delivery.oversight", icon: Shield, title: "Oversight & Results", color: "from-amber-500/10 to-amber-600/5" }].
            map(({ key, icon: Icon, title, color }, i) =>
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative overflow-hidden p-6 rounded-2xl border border-border/30 bg-gradient-to-br ${color} group hover:border-primary/30 transition-all`}>
              
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/40 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-2.5 bg-primary/10 rounded-lg w-fit mb-4 border border-primary/20">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="text-sm font-bold mb-3">{title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{t(key)}</p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* ─── GOVERNANCE (Full Width Image) ───────────────────────── */}
      <div className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-0">
          <motion.div {...fadeUp} className="relative h-[450px] lg:h-auto overflow-hidden">
            
            
          </motion.div>
          <motion.div {...fadeUp} className="p-8 lg:p-16 flex flex-col justify-center bg-primary/[0.03]">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-xl border border-primary/20">
                <Scale className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-3xl font-bold">{t("nerpa.governance.title")}</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">{t("nerpa.governance.desc")}</p>
            <div className="mt-8 grid grid-cols-3 gap-3">
              {["Strategy & Financing", "Program Approval", "Technical Advice"].map((tier, i) =>
              <div key={tier} className="p-4 bg-background/80 border border-border/40 rounded-xl text-center">
                  <p className="text-primary font-bold text-sm mb-1">Tier {i + 1}</p>
                  <p className="text-[11px] text-muted-foreground">{tier}</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ─── RESULTS UNDER NERPA ─────────────────────────────────── */}
      <div className="py-20 px-6 lg:px-16 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-primary/10 rounded-xl border border-primary/20">
                <Trophy className="w-7 h-7 text-primary" />
              </div>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-2">{t("nerpa.results.title")}</h3>
            <p className="text-primary font-medium">{t("nerpa.results.subtitle")}</p>
          </motion.div>

          {/* Stats bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {resultStats.map((s, i) =>
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 bg-primary/5 border border-primary/15 rounded-2xl text-center">
              
                <p className="text-3xl font-bold text-primary mb-1">{s.value}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">{s.label}</p>
              </motion.div>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
            { text: t("nerpa.results.economic"), icon: TrendingUp },
            { text: t("nerpa.results.reforms"), icon: Settings },
            { text: t("nerpa.results.services"), icon: Heart },
            { text: t("nerpa.results.coordination"), icon: Users }].
            map(({ text, icon: Icon }, i) =>
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-5 rounded-xl border border-border/30 bg-card/30 flex gap-4">
              
                <Icon className="w-5 h-5 text-primary shrink-0 mt-1" />
                <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* ─── STRATEGIC PRIORITIES ────────────────────────────────── */}
      <div className="py-20 px-6 lg:px-16 bg-card/30 border-y border-border/30">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="flex items-center gap-3 mb-10">
            <div className="p-3 bg-primary/10 rounded-xl border border-primary/20">
              <Target className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h3 className="text-3xl font-bold">{t("nerpa.strategic.title")}</h3>
              <p className="text-primary font-medium">{t("nerpa.strategic.subtitle")}</p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
            { key: "nerpa.strategic.peace", label: "Peace-building", icon: Shield, color: "border-l-blue-500" },
            { key: "nerpa.strategic.state", label: "State-building", icon: Building2, color: "border-l-emerald-500" },
            { key: "nerpa.strategic.market", label: "Market-building", icon: Briefcase, color: "border-l-amber-500" },
            { key: "nerpa.strategic.poverty", label: "Poverty Reduction", icon: Heart, color: "border-l-red-500" },
            { key: "nerpa.strategic.npp", label: "National Priority Programs", icon: Layers, color: "border-l-violet-500" }].
            map(({ key, label, icon: Icon, color }, i) =>
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`p-6 rounded-xl border border-border/30 bg-background/80 border-l-4 ${color}`}>
              
                <div className="flex items-center gap-3 mb-3">
                  <Icon className="w-5 h-5 text-primary" />
                  <h4 className="font-bold">{label}</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{t(key)}</p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* ─── INTERVENTION LOGIC ──────────────────────────────────── */}
      <motion.div {...fadeUp} className="py-20 px-6 lg:px-16 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-primary/10 rounded-xl border border-primary/20">
              <GitBranch className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-3xl font-bold">{t("nerpa.intervention.title")}</h3>
          </div>
          
          {/* Visual flow */}
          <div className="relative">
            <div className="p-6 bg-primary/10 border border-primary/30 rounded-2xl mb-6">
              <p className="text-sm font-semibold text-primary mb-1">Overarching Outcome</p>
              <p className="text-muted-foreground text-sm">{t("nerpa.intervention.outcome")}</p>
            </div>
            <div className="flex justify-center mb-6">
              <div className="w-px h-8 bg-primary/30" />
            </div>
            <div className="p-6 bg-card/50 border border-border/40 rounded-2xl mb-6">
              <p className="text-sm font-semibold text-foreground mb-2">Three Intermediate Outcomes</p>
              <p className="text-muted-foreground text-sm">{t("nerpa.intervention.three")}</p>
            </div>
            <div className="flex justify-center mb-6">
              <div className="w-px h-8 bg-primary/30" />
            </div>
            <div className="p-6 bg-card/30 border border-border/40 rounded-2xl">
              <p className="text-sm font-semibold text-foreground mb-2">Four Output Areas</p>
              <p className="text-muted-foreground text-sm">{t("nerpa.intervention.outputs")}</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ─── OPERATING PRIORITIES ────────────────────────────────── */}
      <div className="py-0">
        <div className="grid lg:grid-cols-2 gap-0">
          <motion.div {...fadeUp} className="p-8 lg:p-16 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-primary/10 rounded-xl border border-primary/20">
                <Settings className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-3xl font-bold">{t("nerpa.operating.title")}</h3>
            </div>
            <div className="space-y-4">
              {[
              { key: "nerpa.operating.gender", icon: Sparkles, label: "Gender Equality" },
              { key: "nerpa.operating.climate", icon: Leaf, label: "Climate Resilience" },
              { key: "nerpa.operating.conflict", icon: AlertTriangle, label: "Conflict Sensitivity" },
              { key: "nerpa.operating.value", icon: Shield, label: "Value for Money" },
              { key: "nerpa.operating.coordination", icon: LayoutGrid, label: "Coordinated TA" },
              { key: "nerpa.operating.results", icon: Target, label: "Results-Focused" }].
              map(({ key, icon: Icon, label }, i) =>
              <motion.div
                key={key}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-3 p-4 rounded-xl border border-border/30 bg-card/30 hover:border-primary/20 transition-colors">
                
                  <Icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold mb-1">{label}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{t(key)}</p>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
          <motion.div {...fadeUp} className="relative h-[600px] lg:h-auto overflow-hidden">
            <img src={climateImg} alt="Climate resilience" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background/20" />
          </motion.div>
        </div>
      </div>

      {/* ─── SCENARIO-BASED PLANNING ─────────────────────────────── */}
      <div className="py-20 px-6 lg:px-16 bg-background border-t border-border/30">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-primary/10 rounded-xl border border-primary/20">
                <Map className="w-7 h-7 text-primary" />
              </div>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-2">{t("nerpa.scenarios.title")}</h3>
            <p className="text-primary font-medium">{t("nerpa.scenarios.subtitle")}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
            { key: "nerpa.scenarios.safeguard", icon: Shield, title: "Safeguarding Gains", level: "Tier 1", levelColor: "bg-red-500/10 text-red-400" },
            { key: "nerpa.scenarios.maintain", icon: TrendingUp, title: "Maintaining Progress", level: "Tier 2", levelColor: "bg-amber-500/10 text-amber-400" },
            { key: "nerpa.scenarios.expand", icon: Map, title: "Expanding with Peace", level: "Tier 3", levelColor: "bg-green-500/10 text-green-400" },
            { key: "nerpa.scenarios.flexible", icon: GitBranch, title: "Flexible Response", level: "Adaptive", levelColor: "bg-blue-500/10 text-blue-400" }].
            map(({ key, icon: Icon, title, level, levelColor }, i) =>
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl border border-border/30 bg-card/30 hover:border-primary/20 transition-all group">
              
                <div className="flex items-center justify-between mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${levelColor}`}>{level}</span>
                </div>
                <h4 className="font-bold mb-3">{title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{t(key)}</p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>);

};