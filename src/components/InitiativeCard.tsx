import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface InitiativeCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

export const InitiativeCard = ({ title, description, icon: Icon, index }: InitiativeCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-card/50 backdrop-blur-sm border border-border/30 rounded-2xl p-8 hover:border-primary/50 transition-all duration-500 hover:bg-card/80"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl" />
      
      <div className="flex items-start gap-6">
        <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
