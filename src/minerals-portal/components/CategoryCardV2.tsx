import { LucideIcon } from "lucide-react";

interface CategoryCardV2Props {
  title: string;
  icon: LucideIcon;
  isActive?: boolean;
}

const CategoryCardV2 = ({ title, icon: Icon, isActive = false }: CategoryCardV2Props) => {
  return (
    <div 
      className={`group relative overflow-hidden border bg-card/30 p-6 transition-all duration-300 hover:bg-card/50 ${
        isActive 
          ? "border-primary text-primary" 
          : "border-border/30 text-foreground hover:border-primary/50"
      }`}
    >
      {/* Icon Container */}
      <div 
        className={`mb-6 inline-flex rounded-sm p-3 transition-all duration-300 ${
          isActive 
            ? "bg-primary/20 text-primary" 
            : "bg-secondary/50 text-primary/70 group-hover:bg-primary/10 group-hover:text-primary"
        }`}
      >
        <Icon className="h-6 w-6" strokeWidth={1.5} />
      </div>
      
      {/* Title */}
      <h3 
        className={`font-body text-lg font-normal leading-tight transition-colors ${
          isActive ? "text-primary" : "text-foreground group-hover:text-primary"
        }`}
      >
        {title.split(" & ")[0]}
        {title.includes(" & ") && (
          <>
            <br />
            <span className="text-muted-foreground">&</span>
            <br />
            {title.split(" & ")[1]}
          </>
        )}
      </h3>
      
      {/* Active indicator line */}
      <div 
        className={`absolute bottom-0 left-0 h-0.5 transition-all duration-500 ${
          isActive ? "w-full bg-primary" : "w-0 bg-primary group-hover:w-full"
        }`}
      />
    </div>
  );
};

export default CategoryCardV2;