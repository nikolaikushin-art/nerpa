interface MineralTimelineItem {
  year: string;
  title: string;
  description: string;
}

interface MineralTimelineSectionProps {
  title: string;
  subtitle?: string;
  items: MineralTimelineItem[];
}

const MineralTimelineSection = ({ title, subtitle, items }: MineralTimelineSectionProps) => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background">
      <div className="relative z-10 px-8 py-32 md:px-16 lg:px-24">
        {/* Header */}
        <div className="mb-24 max-w-3xl">
          {subtitle && (
            <span className="mb-4 block font-body text-sm font-medium uppercase tracking-[0.3em] text-primary">
              {subtitle}
            </span>
          )}
          <h2 className="font-body text-4xl font-extralight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {title}
          </h2>
        </div>
        
        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 h-full w-px bg-foreground/10 md:left-1/2" />
          
          {/* Items */}
          <div className="space-y-24">
            {items.map((item, index) => (
              <div 
                key={index}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-8 top-0 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full border-2 border-primary bg-background md:left-1/2" />
                
                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                }`}>
                  <div className="mb-2 font-body text-3xl font-extralight text-primary md:text-4xl">
                    {item.year}
                  </div>
                  <h3 className="mb-4 font-body text-xl font-medium text-foreground md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="font-body text-base font-light leading-relaxed text-foreground/60">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MineralTimelineSection;
