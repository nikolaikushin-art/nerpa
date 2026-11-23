import { LucideIcon } from "lucide-react";

interface RegionData {
  name: string;
  minerals: string[];
  icon?: LucideIcon;
}

interface MineralRegionsSectionProps {
  title: string;
  subtitle?: string;
  regions: RegionData[];
  backgroundImage?: string;
}

const MineralRegionsSection = ({ title, subtitle, regions, backgroundImage }: MineralRegionsSectionProps) => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background */}
      {backgroundImage ? (
        <>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </>
      ) : (
        <div className="absolute inset-0 bg-background" />
      )}
      
      {/* Content */}
      <div className="relative z-10 px-8 py-32 md:px-16 lg:px-24">
        {/* Header */}
        <div className="mb-20 max-w-3xl">
          {subtitle && (
            <span className="mb-4 block font-body text-sm font-medium uppercase tracking-[0.3em] text-primary">
              {subtitle}
            </span>
          )}
          <h2 className="font-body text-4xl font-extralight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {title}
          </h2>
        </div>
        
        {/* Regions Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {regions.map((region, index) => (
            <div 
              key={index}
              className="group rounded-lg border border-foreground/10 bg-background/50 p-8 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-background/80"
            >
              <h3 className="mb-6 font-body text-xl font-medium text-foreground">
                {region.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {region.minerals.map((mineral, mIndex) => (
                  <span 
                    key={mIndex}
                    className="rounded-full border border-foreground/10 bg-secondary/50 px-3 py-1 font-body text-xs font-light text-foreground/70"
                  >
                    {mineral}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MineralRegionsSection;
