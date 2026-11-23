interface SectionHeaderProps {
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
}

const SectionHeader = ({ title, subtitle, description, backgroundImage }: SectionHeaderProps) => {
  return (
    <div className="relative min-h-[70vh] w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-overlay" />
      
      <div className="relative z-10 flex min-h-[70vh] flex-col items-center justify-center px-6 py-24 text-center">
        <p className="mb-4 text-sm font-body uppercase tracking-[0.25em] text-primary/70">
          {subtitle}
        </p>
        
        <h2 className="max-w-4xl font-display text-4xl font-light leading-tight text-foreground md:text-6xl lg:text-7xl">
          {title}
        </h2>
        
        <p className="mt-6 max-w-2xl text-base font-light leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SectionHeader;