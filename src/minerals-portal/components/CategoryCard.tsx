import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  title: string;
  icon: LucideIcon;
  description?: string;
}

const CategoryCard = ({ title, icon: Icon, description }: CategoryCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-sm border border-border/30 bg-card/50 p-6 backdrop-blur-sm transition-all duration-500 hover:border-primary/50 hover:bg-card/80">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      
      <div className="relative z-10">
        <div className="mb-4 inline-flex rounded-sm bg-primary/10 p-3 text-primary transition-all duration-300 group-hover:bg-primary/20">
          <Icon className="h-6 w-6" />
        </div>
        
        <h3 className="font-display text-xl font-medium text-foreground transition-colors group-hover:text-primary">
          {title}
        </h3>
        
        {description && (
          <p className="mt-2 text-sm text-muted-foreground">
            {description}
          </p>
        )}
      </div>
      
      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-gold-light transition-all duration-500 group-hover:w-full" />
    </div>
  );
};

export default CategoryCard;