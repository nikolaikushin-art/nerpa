import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { CheckCircle, AlertCircle } from "lucide-react";

export const AchievementsChallengesSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-6 lg:px-12 bg-background border-y border-border/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 lg:gap-16"
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold">{t("ands.achievements.title")}</h3>
            </div>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0" />
                <span>{t("ands.achievements.1")}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0" />
                <span>{t("ands.achievements.2")}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0" />
                <span>{t("ands.achievements.3")}</span>
              </li>
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle className="w-8 h-8 text-amber-500" />
              <h3 className="text-2xl font-bold">{t("ands.challenges.title")}</h3>
            </div>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2.5 flex-shrink-0" />
                <span>{t("ands.challenges.1")}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2.5 flex-shrink-0" />
                <span>{t("ands.challenges.2")}</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
