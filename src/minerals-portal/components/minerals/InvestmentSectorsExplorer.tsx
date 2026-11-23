import { useState } from "react";
import { 
  Search, Grid, List, Filter, Pickaxe, Gem, Atom, Factory, 
  MapPin, Cog, FlaskConical, Globe, Leaf, Target, ChevronDown 
} from "lucide-react";
import { useLanguage } from '@/minerals-portal/contexts/LanguageContext';

interface Sector {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  value?: string;
  projects?: number;
}

interface InvestmentSectorsExplorerProps {
  sectors: Sector[];
}

const InvestmentSectorsExplorer = ({ sectors }: InvestmentSectorsExplorerProps) => {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    { id: "metallic", label: "Metallic Minerals", icon: Pickaxe },
    { id: "precious", label: "Precious Stones", icon: Gem },
    { id: "strategic", label: "Strategic Minerals", icon: Atom },
    { id: "industrial", label: "Industrial Minerals", icon: Factory },
    { id: "provinces", label: "Provincial Resources", icon: MapPin },
    { id: "processing", label: "Value Chain", icon: Cog },
    { id: "research", label: "Research & Survey", icon: FlaskConical },
    { id: "trade", label: "Trade & Commerce", icon: Globe },
    { id: "sustainability", label: "Sustainability", icon: Leaf },
    { id: "future", label: "Future Vision", icon: Target },
  ];

  const filteredSectors = sectors.filter(sector => {
    const matchesSearch = sector.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sector.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = !activeFilter || sector.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="explore" className="relative min-h-screen w-full bg-background py-24">
      {/* Header */}
      <div className="mx-auto max-w-7xl px-8 text-center md:px-16">
        <span className="inline-block rounded-full bg-primary/20 px-4 py-1.5 font-body text-sm font-medium text-primary">
          {t.investmentSectors?.badge || '50+ Industries'}
        </span>
        
        <h2 className="mt-6 font-body text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
          {t.investmentSectors?.title || 'Explore Investment Sectors'}
        </h2>
        
        <p className="mx-auto mt-6 max-w-3xl font-body text-lg font-light text-foreground/60">
          Comprehensive database of investment opportunities across all economic sectors. 
          Filter, search, and discover the perfect opportunity for your investment goals.
        </p>
      </div>

      {/* Search & Filters */}
      <div className="mx-auto mt-12 max-w-7xl px-8 md:px-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-2xl">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-foreground/40" />
            <input
              type="text"
              placeholder={t.investmentSectors?.searchPlaceholder ?? ''}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-14 w-full rounded-xl border border-foreground/10 bg-background/50 pl-12 pr-4 font-body text-foreground placeholder:text-foreground/40 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50"
            />
          </div>

          {/* View Toggle & Filters */}
          <div className="flex items-center gap-3">
            {/* View Mode Toggle */}
            <div className="flex rounded-lg border border-foreground/10 p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`flex h-10 w-10 items-center justify-center rounded-md transition-all ${
                  viewMode === "grid" 
                    ? "bg-primary text-primary-foreground" 
                    : "text-foreground/60 hover:text-foreground"
                }`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`flex h-10 w-10 items-center justify-center rounded-md transition-all ${
                  viewMode === "list" 
                    ? "bg-primary text-primary-foreground" 
                    : "text-foreground/60 hover:text-foreground"
                }`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>

            {/* Filter Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex h-12 items-center gap-2 rounded-xl border border-foreground/10 px-4 font-body text-sm text-foreground/70 transition-all hover:border-foreground/20 hover:text-foreground"
            >
              <Filter className="h-4 w-4" />
              Filters
              <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? "rotate-180" : ""}`} />
            </button>
          </div>
        </div>

        {/* Filter Categories */}
        {showFilters && (
          <div className="mt-6 flex flex-wrap gap-3 rounded-xl border border-foreground/10 bg-background/50 p-4">
            <button
              onClick={() => setActiveFilter(null)}
              className={`rounded-lg px-4 py-2 font-body text-sm transition-all ${
                !activeFilter 
                  ? "bg-primary text-primary-foreground" 
                  : "border border-foreground/10 text-foreground/60 hover:text-foreground"
              }`}
            >
              All Sectors
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center gap-2 rounded-lg px-4 py-2 font-body text-sm transition-all ${
                  activeFilter === category.id 
                    ? "bg-primary text-primary-foreground" 
                    : "border border-foreground/10 text-foreground/60 hover:text-foreground"
                }`}
              >
                <category.icon className="h-4 w-4" />
                {category.label}
              </button>
            ))}
          </div>
        )}

        {/* Results Count */}
        <p className="mt-6 font-body text-sm text-foreground/50">
          Showing {filteredSectors.length} of {sectors.length} sectors
        </p>
      </div>

      {/* Sectors Grid */}
      <div className="mx-auto mt-8 max-w-7xl px-8 md:px-16">
        <div className={`grid gap-6 ${
          viewMode === "grid" 
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
            : "grid-cols-1"
        }`}>
          {filteredSectors.map((sector) => (
            <button
              key={sector.id}
              onClick={() => scrollToSection(sector.id)}
              className={`group relative overflow-hidden rounded-2xl border border-foreground/10 transition-all hover:border-primary/30 ${
                viewMode === "list" ? "flex items-center gap-6 p-4" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative overflow-hidden ${
                viewMode === "grid" ? "aspect-[4/3]" : "h-24 w-32 shrink-0 rounded-xl"
              }`}>
                <img
                  src={sector.image}
                  alt={sector.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                
                {/* Category Badge */}
                <span className="absolute left-3 top-3 rounded-md bg-primary/90 px-2 py-1 font-body text-xs font-medium text-primary-foreground">
                  Mining & Minerals
                </span>
                
                {/* Icon Badge */}
                <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary/80">
                  <Gem className="h-4 w-4 text-primary-foreground" />
                </div>
              </div>

              {/* Content */}
              <div className={`${viewMode === "grid" ? "p-4" : "flex-1"}`}>
                <h3 className="font-body text-xl font-medium text-foreground transition-colors group-hover:text-primary">
                  {sector.title}
                </h3>
                <p className="mt-2 line-clamp-2 font-body text-sm text-foreground/60">
                  {sector.description}
                </p>
                
                {sector.value && (
                  <div className="mt-3 flex items-center gap-4">
                    <span className="font-body text-sm text-primary">{sector.value}</span>
                    {sector.projects && (
                      <span className="font-body text-xs text-foreground/40">
                        {sector.projects} projects
                      </span>
                    )}
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentSectorsExplorer;
