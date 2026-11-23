import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { InteractiveCard } from "./InteractiveCard";

interface GridItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface AnimatedGridProps {
  items: GridItem[];
  columns?: number;
}

export const AnimatedGrid = ({ items, columns = 3 }: AnimatedGridProps) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-8`}>
      {items.map((item, index) => (
        <InteractiveCard
          key={index}
          title={item.title}
          description={item.description}
          icon={item.icon}
          index={index}
        />
      ))}
    </div>
  );
};
