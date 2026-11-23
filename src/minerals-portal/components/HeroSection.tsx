import { ChevronDown } from "lucide-react";
const heroImage = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/hero-mountains.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="animate-fade-up mb-6 text-sm font-body uppercase tracking-[0.3em] text-primary/80">
          Of the Afghan People, for the Afghan people, and by the Afghan people.
        </p>
        
        <h1 className="animate-fade-up animation-delay-200 max-w-5xl font-display text-5xl font-light leading-tight text-foreground md:text-7xl lg:text-8xl">
          National Economic Reform Programme of Afghanistan
        </h1>
        
        <p className="animate-fade-up animation-delay-400 mt-8 max-w-3xl text-lg font-light leading-relaxed text-muted-foreground md:text-xl">
          The future of a nation is not written in the language of chance but in the architecture of intent. 
          And this consortium stands as that intent — a living framework built to carry Afghanistan from resilience into renaissance.
        </p>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <ChevronDown className="h-8 w-8 text-primary/60" />
      </div>
    </section>
  );
};

export default HeroSection;