interface MegaSectionProps {
  title: string;
  description: string;
  backgroundImage: string;
  alignment?: "left" | "center";
}

const MegaSection = ({ 
  title, 
  description, 
  backgroundImage, 
  alignment = "left" 
}: MegaSectionProps) => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
      
      {/* Content */}
      <div className={`relative z-10 flex min-h-screen flex-col justify-center px-8 md:px-16 lg:px-24 ${
        alignment === "center" ? "items-center text-center" : "items-start"
      }`}>
        <div className={`max-w-4xl ${alignment === "center" ? "mx-auto" : ""}`}>
          <h2 className="font-body text-5xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl xl:text-8xl">
            {title}
          </h2>
          
          <p className={`mt-8 text-lg font-light leading-relaxed text-foreground/80 md:text-xl lg:text-2xl ${
            alignment === "center" ? "max-w-3xl" : "max-w-2xl"
          }`}>
            {description}
          </p>
        </div>
      </div>
      
      {/* NERPA Badge */}
      <div className="absolute left-6 top-6 z-20 rounded bg-foreground/90 px-3 py-1.5 text-xs font-medium tracking-wider text-background">
        NERPA
      </div>
    </section>
  );
};

export default MegaSection;