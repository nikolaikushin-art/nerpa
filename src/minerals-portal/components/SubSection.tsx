import { LucideIcon } from "lucide-react";
import CategoryCard from "./CategoryCard";

interface SubItem {
  title: string;
  icon: LucideIcon;
  description?: string;
}

interface SubSectionProps {
  title: string;
  description: string;
  items: SubItem[];
  reversed?: boolean;
}

const SubSection = ({ title, description, items, reversed = false }: SubSectionProps) => {
  return (
    <div className={`w-full bg-mountain/50 px-6 py-20 md:px-12 lg:px-24 ${reversed ? 'bg-secondary/30' : ''}`}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h3 className="font-display text-3xl font-light text-foreground md:text-4xl">
            {title}
          </h3>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <CategoryCard
              key={index}
              title={item.title}
              icon={item.icon}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubSection;