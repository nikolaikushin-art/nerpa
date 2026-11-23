import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface Industry {
  title: string;
  description: string;
  opportunities: string[];
  marketSize: string;
  growthRate: string;
  keyPlayers: string;
  icon: LucideIcon;
}

interface DetailedIndustrySectionProps {
  title: string;
  subtitle: string;
  description: string;
  industries: Industry[];
}

export const DetailedIndustrySection = ({
  title,
  subtitle,
  description,
  industries,
}: DetailedIndustrySectionProps) => {
  return (
    <section className="py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-6 block">
            {subtitle}
          </span>
          <h2 className="text-5xl md:text-7xl font-bold mb-8">{title}</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">{description}</p>
        </motion.div>

        <div className="space-y-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl border border-border/50 overflow-hidden hover:border-primary/30 transition-all duration-500"
            >
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  {/* Icon & Title */}
                  <div className="flex items-center gap-4 lg:w-1/4">
                    <div className="p-4 bg-primary/10 rounded-xl">
                      <industry.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{industry.title}</h3>
                      <p className="text-primary text-sm font-semibold">{industry.growthRate} Growth</p>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="lg:w-2/4">
                    <p className="text-muted-foreground leading-relaxed mb-4">{industry.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {industry.opportunities.slice(0, 3).map((opp, i) => (
                        <span key={i} className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
                          {opp}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="lg:w-1/4 grid grid-cols-2 gap-4">
                    <div className="bg-background/50 rounded-lg p-4 text-center">
                      <p className="text-2xl font-bold text-primary">{industry.marketSize}</p>
                      <p className="text-xs text-muted-foreground">Market Size</p>
                    </div>
                    <div className="bg-background/50 rounded-lg p-4 text-center">
                      <p className="text-2xl font-bold text-primary">{industry.keyPlayers}</p>
                      <p className="text-xs text-muted-foreground">Key Players</p>
                    </div>
                  </div>
                </div>

                {/* Expanded Opportunities */}
                <div className="mt-6 pt-6 border-t border-border/50">
                  <h4 className="text-sm font-semibold text-primary mb-3">Investment Opportunities</h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                    {industry.opportunities.map((opp, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1 h-1 bg-primary rounded-full flex-shrink-0" />
                        {opp}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
