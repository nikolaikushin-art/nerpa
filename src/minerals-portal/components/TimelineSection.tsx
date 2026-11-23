interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface TimelineSectionProps {
  items: TimelineItem[];
  title?: string;
}

const TimelineSection = ({ items, title }: TimelineSectionProps) => {
  return (
    <div className="w-full bg-background px-6 py-20 md:px-12 lg:px-24">
      <div className="mx-auto max-w-5xl">
        {title && (
          <h3 className="mb-16 text-center font-display text-3xl font-light text-foreground md:text-4xl">
            {title}
          </h3>
        )}
        
        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-primary/50 via-primary to-primary/50" />
          
          {items.map((item, index) => (
            <div
              key={index}
              className={`relative mb-16 flex items-center ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"}`}>
                <div className="font-display text-4xl font-light text-primary">
                  {item.year}
                </div>
                <h4 className="mt-2 font-display text-xl font-medium text-foreground">
                  {item.title}
                </h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
              
              <div className="absolute left-1/2 -translate-x-1/2">
                <div className="h-4 w-4 rounded-full border-2 border-primary bg-background shadow-gold" />
              </div>
              
              <div className="w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;