interface Stat {
  value: string;
  label: string;
  description?: string;
}

interface MineralStatsSectionProps {
  stats: Stat[];
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
}

const MineralStatsSection = ({ stats, title, subtitle, backgroundImage }: MineralStatsSectionProps) => {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden">
      {/* Background */}
      {backgroundImage ? (
        <>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-background" />
      )}
      
      {/* Content */}
      <div className="relative z-10 flex min-h-[70vh] flex-col justify-center px-8 py-24 md:px-16 lg:px-24">
        {(title || subtitle) && (
          <div className="mb-16">
            {subtitle && (
              <span className="mb-4 block font-body text-sm font-medium uppercase tracking-[0.3em] text-primary">
                {subtitle}
              </span>
            )}
            {title && (
              <h2 className="font-body text-4xl font-extralight tracking-tight text-foreground md:text-5xl lg:text-6xl">
                {title}
              </h2>
            )}
          </div>
        )}
        
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:gap-16">
          {stats.map((stat, index) => (
            <div key={index} className="group">
              <div className="mb-4 font-body text-5xl font-extralight tracking-tight text-primary md:text-6xl lg:text-7xl">
                {stat.value}
              </div>
              <div className="mb-2 font-body text-lg font-medium text-foreground md:text-xl">
                {stat.label}
              </div>
              {stat.description && (
                <div className="font-body text-sm font-light text-foreground/60">
                  {stat.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MineralStatsSection;
