import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Globe,
  ShieldAlert,
  Scale,
  Users,
  BookOpen,
  Leaf,
  type LucideIcon,
} from "lucide-react";

const crossCuttingConfig: { icon: LucideIcon; titleKey: string; descKey: string }[] = [
  { icon: Globe, titleKey: "ands.cross.regional.title", descKey: "ands.cross.regional.desc" },
  { icon: ShieldAlert, titleKey: "ands.cross.narcotics.title", descKey: "ands.cross.narcotics.desc" },
  { icon: Scale, titleKey: "ands.cross.anticorruption.title", descKey: "ands.cross.anticorruption.desc" },
  { icon: Users, titleKey: "ands.cross.gender.title", descKey: "ands.cross.gender.desc" },
  { icon: BookOpen, titleKey: "ands.cross.capacity.title", descKey: "ands.cross.capacity.desc" },
  { icon: Leaf, titleKey: "ands.cross.environment.title", descKey: "ands.cross.environment.desc" },
];

export const ANDSCrossCuttingSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-6 lg:px-12 bg-[hsl(var(--nerpa-dark-elevated))]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
            NERPA
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Cross-Cutting Priorities</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Priorities that cut across security, governance, and economic and social development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {crossCuttingConfig.map(({ icon: Icon, titleKey, descKey }, index) => (
            <motion.div
              key={titleKey}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group bg-card/50 backdrop-blur-sm border border-border/30 rounded-xl p-6 hover:border-primary/40 transition-all duration-300"
            >
              <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{t(titleKey)}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{t(descKey)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
