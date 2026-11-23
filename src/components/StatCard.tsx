import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  number: string;
  label: string;
  icon: LucideIcon;
  delay?: number;
}

export const StatCard = ({ number, label, icon: Icon, delay = 0 }: StatCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -10 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative bg-card border border-border rounded-2xl p-8 hover:border-primary transition-all duration-500">
        <Icon className="w-10 h-10 text-primary mb-6" />
        <div className="text-5xl font-bold text-foreground mb-3">{number}</div>
        <div className="text-lg text-muted-foreground">{label}</div>
      </div>
    </motion.div>
  );
};
