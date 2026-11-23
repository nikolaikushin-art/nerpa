interface MineralMegaSectionProps {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  backgroundImage: string;
  alignment?: "left" | "center" | "right";
  variant?: "light" | "dark";
}

const MineralMegaSection = ({ 
  id,
  title, 
  subtitle,
  description, 
  backgroundImage, 
  alignment = "left",
  variant = "dark"
}: MineralMegaSectionProps) => {
  const isLight = variant === "light";
  
  return (
    <section id={id} className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {/* Deep Dark Overlay - Maximum readability, no white fog */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
      <div className="absolute inset-0 bg-gradient-to-br from-background/60 via-background/30 to-transparent" />
      
      {/* Content */}
      <div className={`relative z-10 flex min-h-screen flex-col justify-end px-8 pb-32 md:px-16 lg:px-24 ${
        alignment === "center" ? "items-center text-center" : 
        alignment === "right" ? "items-end text-right" : "items-start"
      }`}>
        <div className={`max-w-4xl ${alignment === "center" ? "mx-auto" : ""}`}>
          {subtitle && (
            <span className={`mb-4 block font-body text-sm font-medium uppercase tracking-[0.3em] ${
              isLight ? "text-primary" : "text-primary"
            }`}>
              {subtitle}
            </span>
          )}
          
          <h2 className={`font-body text-5xl font-extralight leading-tight tracking-tight md:text-6xl lg:text-7xl xl:text-8xl ${
            isLight ? "text-foreground" : "text-foreground"
          }`}>
            {title}
          </h2>
          
          <div className={`my-8 h-px w-48 ${
            isLight ? "bg-foreground/20" : "bg-foreground/30"
          } ${alignment === "center" ? "mx-auto" : alignment === "right" ? "ml-auto" : ""}`} />
          
          <p className={`text-lg font-light leading-relaxed md:text-xl lg:text-2xl ${
            isLight ? "text-foreground/70" : "text-foreground/80"
          } ${alignment === "center" ? "max-w-3xl" : "max-w-2xl"}`}>
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default MineralMegaSection;
