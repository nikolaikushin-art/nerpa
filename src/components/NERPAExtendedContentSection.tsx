import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Target, MapPin, FileCheck, HeartHandshake, Users, TrendingUp, Layers,
  ChevronRight, Globe, BarChart3, ShieldCheck, Sparkles } from
"lucide-react";

const frameworkHero = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/nerpa/framework-hero.jpg";
const nationalPrioritiesImg = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/nerpa/national-priorities.jpg";
const participatoryImg = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/nerpa/participatory-planning.jpg";
const provincialImg = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/nerpa/provincial-planning.jpg";
const implementImg = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/nerpa/implementation-monitor.jpg";
const socialImg = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/nerpa/social-protection.jpg";
const refugeesImg = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/nerpa/refugees-return.jpg";
const macroImg = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/nerpa/macro-economy.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 }
};

// Stats data
const frameworkStats = [
{ value: "34", label: "Provincial Plans" },
{ value: "17,000+", label: "Participants" },
{ value: "11", label: "Key Sectors" },
{ value: "47%", label: "Women Involved" }];


const provincialStats = [
{ value: "17,000+", label: "Participants" },
{ value: "47%", label: "Women Involved" },
{ value: "18,500", label: "Village Plans" },
{ value: "34", label: "Provincial Plans" }];


const macroStats = [
{ value: "7-9%", label: "GDP Growth Target" },
{ value: "2%", label: "Annual Poverty Reduction" },
{ value: "14%+", label: "Revenue/GDP Ratio" },
{ value: "<10%", label: "Inflation Target" }];


export const NERPAExtendedContentSection = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-background">
      {/* ─── HERO BANNER ─────────────────────────────────────────── */}
      <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img src={frameworkHero} alt="NERPA Framework" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
        <div className="relative z-10 h-full flex items-end pb-20 px-6 lg:px-16">
          <motion.div {...fadeUp} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-4">
              <Sparkles className="w-4 h-4" /> NERPA
            </span>
            <h2 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">Framework in Detail</h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Evidence-based priorities, participatory planning, and implementation structures drawn from national development priorities across all 34 provinces.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ─── NATIONAL PRIORITIES & PARTICIPATORY PLANNING ─────────── */}
      <div className="py-0">
        {/* Stats Bar */}
        <div className="bg-primary/5 border-y border-primary/10">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-primary/10">
            {frameworkStats.map((s) =>
            <motion.div key={s.label} {...fadeUp} className="py-8 px-6 text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary mb-1">{s.value}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">{s.label}</p>
              </motion.div>
            )}
          </div>
        </div>

        {/* National Development Priorities */}
        <div className="grid lg:grid-cols-2 gap-0">
          <motion.div {...fadeUp} className="relative h-[500px] lg:h-auto overflow-hidden">
            <img src={nationalPrioritiesImg} alt="National development planning council" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/20" />
          </motion.div>
          <motion.div {...fadeUp} className="p-8 lg:p-16 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-xl border border-primary/20">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-3xl font-bold">National Development Priorities</h3>
                <p className="text-sm text-primary font-medium">Evidence-based strategic planning across all sectors</p>
              </div>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>The NERPA framework establishes national development priorities through comprehensive evidence-based analysis, integrating data from all 34 provinces to identify critical investment areas and reform opportunities across security, governance, economic growth, and human development.</p>
              <p>Participatory consultations with over 17,000 stakeholders — including community leaders, provincial officials, civil society, and private sector representatives — ensure that priorities reflect the genuine needs and aspirations of the Afghan people.</p>
              <p className="border-l-4 border-primary/40 pl-4 bg-primary/5 rounded-r-lg py-3 text-sm">Stakeholder priorities across all 34 provinces: access to clean drinking water; improvement of provincial and tertiary roads; quality of public services and trained teachers and doctors; alternatives to poppy cultivation; vocational training for returnees and disabled; access to electricity; and tackling corruption in public administration.</p>
              <p>Policy responses integrate cross-cutting themes including gender equity, environmental sustainability, and anti-corruption measures into every sector strategy, ensuring holistic and inclusive development outcomes.</p>
            </div>
          </motion.div>
        </div>

        {/* Participatory Planning */}
        <div className="grid lg:grid-cols-2 gap-0">
          <motion.div {...fadeUp} className="p-8 lg:p-16 flex flex-col justify-center order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-xl border border-primary/20">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-3xl font-bold">Participatory Planning Process</h3>
                <p className="text-sm text-primary font-medium">Bottom-up development from village to national level</p>
              </div>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Afghanistan's development framework is built on a unique participatory planning process that begins at the village level, aggregates through district and provincial councils, and culminates in nationally coordinated strategies aligned with fiscal realities and international commitments.</p>
              <p className="border-l-4 border-primary/40 pl-4 bg-primary/5 rounded-r-lg py-3 text-sm">Over 18,500 village development plans and 34 provincial development plans have been consolidated into the national framework, with 47% women participation in the consultation process.</p>
            </div>
          </motion.div>
          <motion.div {...fadeUp} className="relative h-[500px] lg:h-auto overflow-hidden order-1 lg:order-2">
            
            
          </motion.div>
        </div>
      </div>

      {/* ─── PROVINCIAL DEVELOPMENT ──────────────────────────────── */}
      <div className="py-0">
        <div className="grid lg:grid-cols-2 gap-0">
          <motion.div {...fadeUp} className="p-8 lg:p-16 flex flex-col justify-center order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-xl border border-primary/20">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-3xl font-bold">{t("nerpa.provincial.title")}</h3>
                <p className="text-sm text-primary font-medium">{t("nerpa.provincial.subtitle")}</p>
              </div>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>{t("nerpa.provincial.pdp")}</p>
              <p>{t("nerpa.provincial.priorities")}</p>
              <p className="border-l-4 border-primary/40 pl-4 bg-primary/5 rounded-r-lg py-3 text-sm">{t("nerpa.provincial.regional")}</p>
            </div>
          </motion.div>
          <motion.div {...fadeUp} className="relative h-[500px] lg:h-auto overflow-hidden order-1 lg:order-2">
            <img src={provincialImg} alt="Provincial planning" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background/20" />
          </motion.div>
        </div>

        {/* Provincial Stats */}
        <div className="bg-card/50 border-y border-border/30">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-border/30">
            {provincialStats.map((s) =>
            <motion.div key={s.label} {...fadeUp} className="py-8 px-6 text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary mb-1">{s.value}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">{s.label}</p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* ─── IMPLEMENTATION & MONITORING ─────────────────────────── */}
      <div className="relative">
        <div className="grid lg:grid-cols-2 gap-0">
          <motion.div {...fadeUp} className="relative h-[500px] lg:h-auto overflow-hidden">
            <img src={implementImg} alt="Implementation monitoring" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/30" />
          </motion.div>
          <motion.div {...fadeUp} className="p-8 lg:p-16 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-xl border border-primary/20">
                <FileCheck className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-3xl font-bold">{t("nerpa.implementation.title")}</h3>
                <p className="text-sm text-primary font-medium">{t("nerpa.implementation.subtitle")}</p>
              </div>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>{t("nerpa.implementation.budget")}</p>
              <p>{t("nerpa.implementation.structures")}</p>
            </div>
            {/* Visual process flow */}
            <div className="mt-8 grid grid-cols-3 gap-3">
              {["Policy & Planning", "Budget Alignment", "Monitoring"].map((step, i) =>
              <div key={step} className="relative">
                  <div className="p-4 bg-primary/5 border border-primary/20 rounded-xl text-center">
                    <p className="text-xs font-semibold text-primary mb-1">Phase {i + 1}</p>
                    <p className="text-[11px] text-muted-foreground">{step}</p>
                  </div>
                  {i < 2 && <ChevronRight className="absolute -right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/40 z-10" />}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ─── SOCIAL PROTECTION + REFUGEES (Side by Side) ─────────── */}
      <div className="grid lg:grid-cols-2 gap-0">
        {/* Social Protection */}
        <motion.div {...fadeUp} className="relative overflow-hidden group">
          <img src={socialImg} alt="Social protection" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
          <div className="relative z-10 p-8 lg:p-12 min-h-[500px] flex flex-col justify-end">
            <div className="p-3 bg-primary/10 rounded-xl border border-primary/20 w-fit mb-4">
              <HeartHandshake className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-3">{t("nerpa.socialprotection.title")}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">{t("nerpa.socialprotection.desc")}</p>
            <div className="mt-6 flex items-center gap-4">
              <div className="px-4 py-2 bg-primary/10 rounded-lg border border-primary/20">
                <p className="text-lg font-bold text-primary">2.5M+</p>
                <p className="text-[10px] text-muted-foreground uppercase">People Covered</p>
              </div>
              <div className="px-4 py-2 bg-primary/10 rounded-lg border border-primary/20">
                <p className="text-lg font-bold text-primary">5</p>
                <p className="text-[10px] text-muted-foreground uppercase">Key Groups</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Refugees */}
        <motion.div {...fadeUp} className="relative overflow-hidden group">
          <img src={refugeesImg} alt="Refugees returning" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
          <div className="relative z-10 p-8 lg:p-12 min-h-[500px] flex flex-col justify-end">
            <div className="p-3 bg-primary/10 rounded-xl border border-primary/20 w-fit mb-4">
              <Users className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-3">{t("nerpa.refugees.title")}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">{t("nerpa.refugees.desc")}</p>
            <div className="mt-6 flex items-center gap-4">
              <div className="px-4 py-2 bg-primary/10 rounded-lg border border-primary/20">
                <p className="text-lg font-bold text-primary">5M+</p>
                <p className="text-[10px] text-muted-foreground uppercase">Returned</p>
              </div>
              <div className="px-4 py-2 bg-primary/10 rounded-lg border border-primary/20">
                <p className="text-lg font-bold text-primary">20+</p>
                <p className="text-[10px] text-muted-foreground uppercase">Years of Return</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ─── MACROECONOMIC FRAMEWORK ─────────────────────────────── */}
      <div className="grid lg:grid-cols-2 gap-0">
        <motion.div {...fadeUp} className="p-8 lg:p-16 flex flex-col justify-center bg-card/30">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-primary/10 rounded-xl border border-primary/20">
              <TrendingUp className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-3xl font-bold">{t("nerpa.macro.title")}</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-8">{t("nerpa.macro.desc")}</p>
          <div className="grid grid-cols-2 gap-4">
            {macroStats.map((s) =>
            <div key={s.label} className="p-4 bg-primary/5 border border-primary/15 rounded-xl">
                <p className="text-2xl font-bold text-primary">{s.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
              </div>
            )}
          </div>
        </motion.div>
        <motion.div {...fadeUp} className="relative h-[500px] lg:h-auto overflow-hidden">
          <img src={macroImg} alt="Economic growth" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background/20" />
        </motion.div>
      </div>

      {/* ─── SECTOR PRIORITIES ────────────────────────────────────── */}
      <motion.div {...fadeUp} className="py-16 px-6 lg:px-16 bg-primary/5 border-y border-primary/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Layers className="w-7 h-7 text-primary" />
            <h3 className="text-2xl font-bold">{t("nerpa.sectorpriorities.title")}</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {["Agriculture", "Security", "Education", "Governance", "Health", "Private Sector", "Roads", "Energy & Water", "Social Protection"].map((sector) =>
            <span key={sector} className="px-5 py-2.5 bg-background/80 border border-border/50 rounded-full text-sm text-foreground/80 font-medium">
                {sector}
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </section>);

};