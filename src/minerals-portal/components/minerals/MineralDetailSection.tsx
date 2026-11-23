import { LucideIcon } from "lucide-react";

interface DetailItem {
  title: string;
  description: string;
  icon?: LucideIcon;
}

interface MineralDetailSectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  description: string;
  items: DetailItem[];
  backgroundImage?: string;
  reversed?: boolean;
}

const MineralDetailSection = ({ 
  id,
  title, 
  subtitle,
  description, 
  items,
  backgroundImage,
  reversed = false 
}: MineralDetailSectionProps) => {
  return (
    <section id={id} className="relative min-h-screen w-full overflow-hidden">
      {/* Background */}
      {backgroundImage ? (
        <>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className={`absolute inset-0 ${
            reversed 
              ? "bg-gradient-to-l from-background via-background/95 to-background/60"
              : "bg-gradient-to-r from-background via-background/95 to-background/60"
          }`} />
        </>
      ) : (
        <div className="absolute inset-0 bg-background" />
      )}
      
      {/* Content */}
      <div className={`relative z-10 flex min-h-screen items-center px-8 py-24 md:px-16 lg:px-24`}>
        <div className={`grid w-full gap-16 lg:grid-cols-2 ${reversed ? "lg:flex-row-reverse" : ""}`}>
          {/* Text Content */}
          <div className={`flex flex-col justify-center ${reversed ? "lg:order-2" : ""}`}>
            {subtitle && (
              <span className="mb-4 block font-body text-sm font-medium uppercase tracking-[0.3em] text-primary">
                {subtitle}
              </span>
            )}
            
            <h2 className="font-body text-4xl font-extralight tracking-tight text-foreground md:text-5xl lg:text-6xl">
              {title}
            </h2>
            
            <div className="my-8 h-px w-32 bg-foreground/20" />
            
            <p className="max-w-xl text-lg font-light leading-relaxed text-foreground/70 md:text-xl">
              {description}
            </p>
          </div>
          
          {/* Items Grid */}
          <div className={`grid grid-cols-1 gap-6 sm:grid-cols-2 ${reversed ? "lg:order-1" : ""}`}>
            {items.map((item, index) => (
              <div 
                key={index}
                className="group rounded-lg border border-foreground/10 bg-background/50 p-6 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-background/80"
              >
                {item.icon && (
                  <item.icon className="mb-4 h-8 w-8 text-primary" />
                )}
                <h3 className="mb-2 font-body text-lg font-medium text-foreground">
                  {item.title}
                </h3>
                <p className="font-body text-sm font-light leading-relaxed text-foreground/60">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MineralDetailSection;
