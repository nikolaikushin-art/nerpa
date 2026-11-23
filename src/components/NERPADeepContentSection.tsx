import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Shield, Scale, Handshake, ClipboardList, BarChart3, TrendingDown,
  AlertTriangle, Heart, ShieldCheck, Briefcase, Zap, Mountain, Truck,
  Wifi, Building2, GraduationCap, Stethoscope, Wheat, Palette, Sparkles,
  ChevronRight, Globe, Eye, Factory, Droplets, Lock } from
"lucide-react";

const strategyHero = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/nerpa/strategy-hero.jpg";
const securityImg = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/nerpa/security-stability.jpg";
const governanceImg = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/nerpa/governance-reform.jpg";
const implementImg = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/nerpa/implementation-monitor.jpg";
const macroImg = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/nerpa/macro-economy.jpg";
const climateImg = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/nerpa/climate-resilience.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 }
};

const sectorIcons: Record<string, any> = {
  "nerpa.sector.private.detail": Briefcase,
  "nerpa.sector.energy.detail": Zap,
  "nerpa.sector.mining.detail": Mountain,
  "nerpa.sector.water.detail": Droplets,
  "nerpa.sector.transport.detail": Truck,
  "nerpa.sector.ict.detail": Wifi,
  "nerpa.sector.urban.detail": Building2,
  "nerpa.sector.education.detail": GraduationCap,
  "nerpa.sector.health.detail": Stethoscope,
  "nerpa.sector.agriculture.detail": Wheat,
  "nerpa.sector.culture.detail": Palette
};

const sectorLabels: Record<string, string> = {
  "nerpa.sector.private.detail": "Private Sector Development",
  "nerpa.sector.energy.detail": "Energy Sector",
  "nerpa.sector.mining.detail": "Mining & Extractives",
  "nerpa.sector.water.detail": "Water Resources",
  "nerpa.sector.transport.detail": "Transport Infrastructure",
  "nerpa.sector.ict.detail": "ICT & Telecommunications",
  "nerpa.sector.urban.detail": "Urban Development",
  "nerpa.sector.education.detail": "Education & Training",
  "nerpa.sector.health.detail": "Healthcare Systems",
  "nerpa.sector.agriculture.detail": "Agriculture & Rural Dev",
  "nerpa.sector.culture.detail": "Culture, Youth & Media"
};

const sectorColors = [
"border-l-emerald-500", "border-l-yellow-500", "border-l-amber-600",
"border-l-blue-500", "border-l-sky-500", "border-l-violet-500",
"border-l-orange-500", "border-l-indigo-500", "border-l-red-500",
"border-l-green-500", "border-l-rose-500"];


export const NERPADeepContentSection = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-background">
      {/* ─── HERO BANNER ─────────────────────────────────────────── */}
      <div className="relative h-[65vh] min-h-[450px] overflow-hidden">
        <img src={strategyHero} alt="Strategy in depth" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
        <div className="relative z-10 h-full flex items-end pb-20 px-6 lg:px-16">
          <motion.div {...fadeUp} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-4">
              <Sparkles className="w-4 h-4" /> NERPA
            </span>
            <h2 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">Strategy in Depth</h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Security, governance, aid effectiveness, implementation, context, crisis response, risk management, and full sector strategies.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ─── SECURITY & GOVERNANCE (Side by Side Images) ─────────── */}
      <div className="grid lg:grid-cols-2 gap-0">
        {/* Security */}
        <motion.div {...fadeUp} className="relative overflow-hidden group">
          <img src={securityImg} alt="Security" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
          <div className="relative z-10 p-8 lg:p-12 min-h-[500px] flex flex-col justify-end">
            <div className="p-3 bg-primary/10 rounded-xl border border-primary/20 w-fit mb-4">
              <Shield className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Security</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">{t("nerpa.security.detail")}</p>
          </div>
        </motion.div>

        {/* Governance */}
        <motion.div {...fadeUp} className="relative overflow-hidden group">
          
          
          





          
        </motion.div>
      </div>

      {/* ─── AID EFFECTIVENESS (Full Width) ──────────────────────── */}
      <motion.div {...fadeUp} className="py-16 px-6 lg:px-16 bg-primary/[0.03] border-y border-primary/10">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-primary/10 rounded-xl border border-primary/20">
              <Handshake className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-3xl font-bold">{t("nerpa.aid.title")}</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">{t("nerpa.aid.desc")}</p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Budget Alignment", "Fund Pooling", "Aid Monitoring", "PEFA Framework"].map((item) =>
            <div key={item} className="p-4 bg-background/80 border border-border/40 rounded-xl text-center">
                <p className="text-sm font-semibold text-foreground/80">{item}</p>
              </div>
            )}
          </div>
        </div>
      </motion.div>

      {/* ─── IMPLEMENTATION FRAMEWORK ────────────────────────────── */}
      <div className="grid lg:grid-cols-2 gap-0">
        <motion.div {...fadeUp} className="relative h-[450px] lg:h-auto overflow-hidden">
          <img src={implementImg} alt="Implementation" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/30" />
        </motion.div>
        <motion.div {...fadeUp} className="p-8 lg:p-16 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-primary/10 rounded-xl border border-primary/20">
              <ClipboardList className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-3xl font-bold">Implementation Framework</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-6">{t("nerpa.impl.detail")}</p>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-primary/10 rounded-xl border border-primary/20">
              <BarChart3 className="w-6 h-6 text-primary" />
            </div>
            <h4 className="text-xl font-bold">{t("nerpa.monitoring.title")}</h4>
          </div>
          <p className="text-muted-foreground leading-relaxed text-sm">{t("nerpa.monitoring.desc")}</p>
        </motion.div>
      </div>

      {/* ─── ECONOMIC CONTEXT (Stats + Image) ────────────────────── */}
      <div className="py-0">
        <div className="grid lg:grid-cols-2 gap-0">
          <motion.div {...fadeUp} className="p-8 lg:p-16 flex flex-col justify-center bg-card/30">
            <h3 className="text-3xl font-bold mb-8">Economic, Fiscal & Fragility Context</h3>
            <div className="space-y-4">
              {[
              { key: "nerpa.context.economic", icon: TrendingDown, label: "Economic Structure" },
              { key: "nerpa.context.fiscal", icon: BarChart3, label: "Fiscal Outlook" },
              { key: "nerpa.context.fragility", icon: AlertTriangle, label: "Fragility Dynamics" }].
              map(({ key, icon: Icon, label }, i) =>
              <motion.div
                key={key}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-5 rounded-xl border border-border/30 bg-background/80 flex gap-4">
                
                  <Icon className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <div>
                    <p className="text-sm font-semibold mb-1">{label}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{t(key)}</p>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
          <motion.div {...fadeUp} className="relative h-[500px] lg:h-auto overflow-hidden">
            <img src={macroImg} alt="Economic indicators" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background/20" />
          </motion.div>
        </div>
      </div>

      {/* ─── CRISIS RESPONSE & RISK MANAGEMENT ──────────────────── */}
      <div className="grid lg:grid-cols-2 gap-0">
        <motion.div {...fadeUp} className="relative overflow-hidden group">
          <img src={climateImg} alt="Crisis response" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
          <div className="relative z-10 p-8 lg:p-12 min-h-[450px] flex flex-col justify-end">
            <div className="p-3 bg-primary/10 rounded-xl border border-primary/20 w-fit mb-4">
              <Heart className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-3">{t("nerpa.covid.title")}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">{t("nerpa.covid.desc")}</p>
          </div>
        </motion.div>

        <motion.div {...fadeUp} className="p-8 lg:p-12 flex flex-col justify-center bg-card/30">
          <div className="p-3 bg-primary/10 rounded-xl border border-primary/20 w-fit mb-4">
            <ShieldCheck className="w-7 h-7 text-primary" />
          </div>
          <h3 className="text-2xl font-bold mb-3">{t("nerpa.risk.title")}</h3>
          <p className="text-muted-foreground leading-relaxed text-sm mb-6">{t("nerpa.risk.desc")}</p>
          <div className="grid grid-cols-2 gap-3">
            {["Project-Level Controls", "Portfolio Monitoring", "Fiduciary Oversight", "Safeguards & Audit"].map((item) =>
            <div key={item} className="p-3 bg-primary/5 border border-primary/15 rounded-lg flex items-center gap-2">
                <Lock className="w-3 h-3 text-primary" />
                <p className="text-[11px] text-muted-foreground font-medium">{item}</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* ─── SECTOR STRATEGIES ───────────────────────────────────── */}
      <div className="py-20 px-6 lg:px-16 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-primary/10 rounded-xl border border-primary/20">
                <Globe className="w-7 h-7 text-primary" />
              </div>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-2">Sector Strategies in Detail</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive strategies across 11 key sectors driving Afghanistan's economic transformation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {Object.entries(sectorIcons).map(([key, Icon], i) =>
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className={`p-5 rounded-xl border border-border/30 bg-card/30 border-l-4 ${sectorColors[i]} hover:border-primary/20 transition-all group`}>
              
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg border border-primary/15">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <h4 className="text-sm font-bold">{sectorLabels[key]}</h4>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{t(key)}</p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>);

};