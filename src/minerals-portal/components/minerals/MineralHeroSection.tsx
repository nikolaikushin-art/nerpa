import { useState } from "react";
import { 
  Mountain, Gem, Pickaxe, Atom, Crown, Factory, Flame, Hammer, Sparkles,
  FlaskConical, Microscope, Database, TrendingUp, Globe, Ship, Truck, 
  Shield, Leaf, Users, Building, FileText, BarChart, Award, Target,
  Compass, Layers, Search, Map, Shovel, Scale, Cog, Zap, MapPin,
  ChevronRight, X
} from "lucide-react";
import { useLanguage } from "@/minerals-portal/contexts/LanguageContext";

interface MineralHeroSectionProps {
  backgroundImage: string;
}

const iconMap: Record<string, typeof Mountain> = {
  overview: Mountain, metallic: Pickaxe, precious: Gem, strategic: Atom,
  'industrial-cat': Factory, provinces: MapPin, 'value-chain': Cog,
  'research-cat': FlaskConical, 'trade-cat': Globe, 'sustainability-cat': Leaf, future: Target,
};

const MineralHeroSection = ({ backgroundImage }: MineralHeroSectionProps) => {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const menuCategories = (t.mineralHero?.menuCategories ?? []).map((cat) => ({
    ...cat,
    icon: iconMap[cat.id] ?? Mountain,
  }));

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
    setActiveCategory(null);
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {/* Deep Dark Gradient Overlay - Maximum readability, no white fog */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
      <div className="absolute inset-0 bg-gradient-to-br from-background/50 via-background/20 to-transparent" />
      
      {/* Bottom menu trigger. Hidden while open so it cannot cover the list. */}
      {!isMenuOpen && (
        <button
          onClick={() => setIsMenuOpen(true)}
          className="fixed bottom-8 left-8 z-[80] flex h-14 w-14 items-center justify-center rounded-full bg-[#1a1a2e]/95 shadow-[0_0_0_2px_rgba(255,255,255,0.08),0_0_0_4px_rgba(255,255,255,0.04)] backdrop-blur-md transition-all hover:scale-105 hover:shadow-[0_0_0_2px_rgba(255,255,255,0.15),0_0_0_4px_rgba(255,255,255,0.08)] md:h-16 md:w-16"
          aria-label="Open mining menu"
        >
          <Compass className="h-6 w-6 text-white/80" />
        </button>
      )}

      {/* Sits above both site bars so the list is never covered by them. */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[120] flex flex-col bg-background/98 backdrop-blur-xl">
          <div className="flex items-start justify-between gap-6 border-b border-foreground/10 px-8 py-6 md:px-16">
            <div>
              <h2 className="font-body text-sm font-medium uppercase tracking-[0.3em] text-primary">
                Navigation
              </h2>
              <p className="mt-1 font-body text-2xl font-extralight text-foreground md:text-3xl">
                Mining & Minerals
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                setIsMenuOpen(false);
                setActiveCategory(null);
              }}
              className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-foreground/15 bg-[#1a1a2e] text-white"
              aria-label="Close mining menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Menu Content */}
          <div className="flex min-h-0 flex-1 overflow-hidden">
            {/* Categories List */}
            <div className="w-full border-r border-foreground/10 overflow-y-auto md:w-1/3 lg:w-1/4">
              {menuCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(activeCategory === category.id ? null : category.id)}
                  className={`group flex w-full items-center justify-between border-b border-foreground/5 px-8 py-5 text-left transition-all hover:bg-foreground/5 ${
                    activeCategory === category.id ? "bg-foreground/5" : ""
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <category.icon className={`h-5 w-5 transition-colors ${
                      activeCategory === category.id ? "text-primary" : "text-foreground/40"
                    }`} />
                    <span className={`font-body text-lg font-light transition-colors ${
                      activeCategory === category.id ? "text-foreground" : "text-foreground/70"
                    }`}>
                      {category.label}
                    </span>
                  </div>
                  <ChevronRight className={`h-4 w-4 text-foreground/30 transition-transform ${
                    activeCategory === category.id ? "rotate-90" : ""
                  }`} />
                </button>
              ))}
            </div>

            {/* Subsections Panel */}
            <div className="hidden flex-1 overflow-y-auto p-8 md:block lg:p-12">
              {activeCategory ? (
                <div>
                  <h3 className="mb-8 font-body text-sm font-medium uppercase tracking-[0.2em] text-primary">
                    {menuCategories.find(c => c.id === activeCategory)?.label}
                  </h3>
                  <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
                    {menuCategories
                      .find(c => c.id === activeCategory)
                      ?.subsections.map((sub) => (
                        <button
                          key={sub.id}
                          onClick={() => scrollToSection(sub.id)}
                          className="group rounded-lg border border-foreground/10 p-6 text-left transition-all hover:border-primary/30 hover:bg-foreground/5"
                        >
                          <span className="font-body text-xl font-light text-foreground/70 transition-colors group-hover:text-foreground">
                            {sub.label}
                          </span>
                        </button>
                      ))}
                  </div>
                </div>
              ) : (
                <div className="flex h-full items-center justify-center">
                  <p className="font-body text-lg font-light text-foreground/40">
                    {t.mineralHero?.selectCategory || 'Select a category to explore'}
                  </p>
                </div>
              )}
            </div>

            {/* Mobile Subsections */}
            {activeCategory && (
              <div className="absolute left-0 top-[140px] h-[calc(100vh-140px)] w-full overflow-y-auto bg-background p-8 md:hidden">
                <button
                  onClick={() => setActiveCategory(null)}
                  className="mb-6 flex items-center gap-2 text-primary"
                >
                  <ChevronRight className="h-4 w-4 rotate-180" />
                  <span className="font-body text-sm">Back</span>
                </button>
                <h3 className="mb-6 font-body text-lg font-medium text-foreground">
                  {menuCategories.find(c => c.id === activeCategory)?.label}
                </h3>
                <div className="space-y-3">
                  {menuCategories
                    .find(c => c.id === activeCategory)
                    ?.subsections.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => scrollToSection(sub.id)}
                        className="block w-full rounded-lg border border-foreground/10 p-4 text-left transition-all hover:border-primary/30"
                      >
                        <span className="font-body text-lg font-light text-foreground/70">
                          {sub.label}
                        </span>
                      </button>
                    ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      
      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col justify-end px-8 pb-24 md:px-16 lg:px-24">
        <div className="max-w-5xl">
          <h1 className="font-body text-6xl font-extralight leading-none tracking-tight text-foreground md:text-7xl lg:text-8xl xl:text-9xl">
            {t.indexPage.hero.title}
          </h1>
          
          <div className="mt-8 h-px w-full max-w-3xl bg-foreground/20" />
          
          <p className="mt-8 max-w-2xl font-body text-lg font-light leading-relaxed text-foreground/70 md:text-xl">
            {t.indexPage.hero.subtitle}
          </p>
        </div>

        {/* Read More Button */}
        <div className="absolute bottom-24 right-24 hidden md:block lg:right-32">
          <button 
            onClick={() => scrollToSection("overview")}
            className="rounded-full border border-primary/50 px-8 py-3 font-body text-sm font-light tracking-wider text-primary transition-all hover:bg-primary hover:text-primary-foreground"
          >
            {t.indexPage.hero.readMore}
          </button>
        </div>
      </div>
    </section>
  );
};

export default MineralHeroSection;
