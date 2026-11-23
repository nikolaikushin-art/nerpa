import { LucideIcon } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface FeaturedSectionProps {
  title: string;
  subtitle: string;
  features: Feature[];
}

const FeaturedSection = ({ title, subtitle, features }: FeaturedSectionProps) => {
  return (
    <div className="w-full bg-gradient-to-b from-mountain to-background px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-body uppercase tracking-[0.25em] text-primary/70">
            {subtitle}
          </p>
          <h2 className="font-display text-4xl font-light text-foreground md:text-5xl">
            {title}
          </h2>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-sm border border-border/20 bg-card/30 p-8 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:bg-card/50"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150" />
              
              <div className="relative z-10">
                <feature.icon className="mb-6 h-10 w-10 text-primary" />
                <h3 className="mb-4 font-display text-2xl font-medium text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;