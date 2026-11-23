import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Shield, Scale, TrendingUp, FileText } from "lucide-react";

export const ANDSFoundationSection = () => {
  const { t } = useLanguage();

  return (
    <section id="nerpa-vision" className="py-24 px-6 lg:px-12 bg-[hsl(var(--nerpa-dark-elevated))]">
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
          <h2 className="text-4xl md:text-6xl font-bold mb-4">{t("ands.title")}</h2>
          <p className="text-xl text-muted-foreground mb-2">{t("ands.subtitle")}</p>
          <p className="text-sm text-muted-foreground/80">{t("ands.timeline")} · {t("ands.visionBy")}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <h3 className="text-lg font-semibold text-primary mb-4">Vision for Afghanistan</h3>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
              <span>{t("ands.vision.1")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
              <span>{t("ands.vision.2")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
              <span>{t("ands.vision.3")}</span>
            </li>
          </ul>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: Shield, key: "1", titleKey: "ands.pillar1.title", descKey: "ands.pillar1.desc" },
            { icon: Scale, key: "2", titleKey: "ands.pillar2.title", descKey: "ands.pillar2.desc" },
            { icon: TrendingUp, key: "3", titleKey: "ands.pillar3.title", descKey: "ands.pillar3.desc" },
          ].map(({ icon: Icon, key: k, titleKey, descKey }, index) => (
            <motion.div
              key={k}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card/50 border border-border/30 rounded-xl p-6 hover:border-primary/40 transition-colors"
            >
              <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{t(titleKey)}</h3>
              <p className="text-sm text-muted-foreground">{t(descKey)}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <p className="text-muted-foreground italic">{t("ands.crosscutting")}</p>
          <p className="text-foreground/90 max-w-2xl mx-auto">{t("ands.nerpaLink")}</p>
        </motion.div>
      </div>
    </section>
  );
};
