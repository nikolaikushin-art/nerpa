interface IntroSectionProps {
  title: string;
  description: string;
}

const IntroSection = ({ title, description }: IntroSectionProps) => {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center bg-background px-8 py-24 text-center">
      <div className="absolute left-6 top-6 rounded bg-foreground/90 px-3 py-1.5 text-xs font-medium tracking-wider text-background">
        NERPA
      </div>
      
      <h1 className="max-w-5xl font-body text-5xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
        {title}
      </h1>
      
      <p className="mt-10 max-w-3xl text-lg font-light leading-relaxed text-muted-foreground md:text-xl">
        {description}
      </p>
    </section>
  );
};

export default IntroSection;