import { LucideIcon } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
  image?: string;
}

interface MineralAdvancedSectionProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: Feature[];
  backgroundImage: string;
  variant?: "dark" | "light";
}

const MineralAdvancedSection = ({
  id,
  title,
  subtitle,
  description,
  features,
  backgroundImage,
  variant = "dark"
}: MineralAdvancedSectionProps) => {
  return (
    <section id={id} className="relative min-h-screen w-full overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {/* Dark Overlay - Maximum readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col justify-center px-8 py-24 md:px-16 lg:px-24">
        <div className="max-w-7xl">
          {/* Header */}
          <span className="font-body text-sm font-medium uppercase tracking-[0.2em] text-primary">
            {subtitle}
          </span>
          
          <h2 className="mt-4 font-body text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
            {title}
          </h2>
          
          <p className="mt-6 max-w-2xl font-body text-lg font-light leading-relaxed text-foreground/70 md:text-xl">
            {description}
          </p>
          
          {/* Features Grid */}
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-foreground/10 bg-background/30 p-6 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-background/50"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-body text-lg font-medium text-foreground">
                      {feature.title}
                    </h3>
                    <p className="mt-2 font-body text-sm leading-relaxed text-foreground/60">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* NERPA Badge */}
      <div className="absolute left-6 top-6 z-20 rounded bg-foreground/90 px-3 py-1.5 text-xs font-medium tracking-wider text-background">
        NERPA
      </div>
    </section>
  );
};

export default MineralAdvancedSection;
