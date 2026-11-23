import { MapPin } from "lucide-react";

interface Province {
  name: string;
  minerals: string[];
  value?: string;
  description: string;
}

interface ProvincialResourceSectionProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  provinces: Province[];
  backgroundImage: string;
}

const ProvincialResourceSection = ({
  id,
  title,
  subtitle,
  description,
  provinces,
  backgroundImage
}: ProvincialResourceSectionProps) => {
  return (
    <section id={id} className="relative min-h-screen w-full overflow-hidden py-24">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/60" />
      
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-8 md:px-16">
        {/* Header */}
        <div className="text-center">
          <span className="font-body text-sm font-medium uppercase tracking-[0.2em] text-primary">
            {subtitle}
          </span>
          
          <h2 className="mt-4 font-body text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {title}
          </h2>
          
          <p className="mx-auto mt-6 max-w-3xl font-body text-lg font-light text-foreground/70">
            {description}
          </p>
        </div>
        
        {/* Provinces Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {provinces.map((province, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-foreground/10 bg-background/30 p-6 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-background/50"
            >
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <h3 className="font-body text-xl font-medium text-foreground">
                  {province.name}
                </h3>
              </div>
              
              {province.value && (
                <p className="mt-2 font-body text-sm font-medium text-primary">
                  {province.value}
                </p>
              )}
              
              <p className="mt-3 font-body text-sm text-foreground/60">
                {province.description}
              </p>
              
              <div className="mt-4 flex flex-wrap gap-2">
                {province.minerals.map((mineral, idx) => (
                  <span
                    key={idx}
                    className="rounded-full bg-foreground/5 px-3 py-1 font-body text-xs text-foreground/70"
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

export default ProvincialResourceSection;
