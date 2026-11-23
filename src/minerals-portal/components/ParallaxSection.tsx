interface ParallaxSectionProps {
  backgroundImage: string;
  title: string;
  description: string;
  children?: React.ReactNode;
}

const ParallaxSection = ({ backgroundImage, title, description, children }: ParallaxSectionProps) => {
  return (
    <div className="relative min-h-[50vh] w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      
      <div className="relative z-10 flex min-h-[50vh] flex-col items-center justify-center px-6 py-16 text-center">
        <h2 className="max-w-3xl font-display text-3xl font-light text-foreground md:text-4xl lg:text-5xl">
          {title}
        </h2>
        <p className="mt-6 max-w-2xl text-muted-foreground">
          {description}
        </p>
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;