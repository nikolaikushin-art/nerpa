interface Stat {
  value: string;
  label: string;
}

interface StatisticsSectionProps {
  stats: Stat[];
  title?: string;
}

const StatisticsSection = ({ stats, title }: StatisticsSectionProps) => {
  return (
    <div className="w-full bg-secondary/20 px-6 py-20 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        {title && (
          <h3 className="mb-12 text-center font-display text-3xl font-light text-foreground">
            {title}
          </h3>
        )}
        
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-display text-4xl font-light text-primary md:text-5xl lg:text-6xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatisticsSection;