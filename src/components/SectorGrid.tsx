import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface SectorCardProps {
  title: string;
  icon: LucideIcon;
  index: number;
}

const SectorCard = ({ title, icon: Icon, index }: SectorCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="group relative bg-card border border-border rounded-lg p-6 hover:border-primary transition-all duration-300 cursor-pointer overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative z-10">
        <Icon className="w-8 h-8 mb-4 text-primary group-hover:text-accent transition-colors" />
        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

interface SectorGridProps {
  title: string;
  sectors: { title: string; icon: LucideIcon }[];
}

export const SectorGrid = ({ title, sectors }: SectorGridProps) => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
        >
          {title}
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sectors.map((sector, index) => (
            <SectorCard key={sector.title} {...sector} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
