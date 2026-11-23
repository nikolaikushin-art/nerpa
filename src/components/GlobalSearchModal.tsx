import { motion, AnimatePresence } from "framer-motion";
import { Search, X, MapPin, Building2, FileText, Factory, Sparkles, ArrowRight, Keyboard } from "lucide-react";
import { useState, useEffect, useMemo, useCallback } from "react";

interface SearchResult {
  id: string;
  type: "sector" | "province" | "publication" | "industry" | "section";
  title: string;
  description: string;
  section: string;
  icon: React.ElementType;
  keywords: string[];
}

const searchData: SearchResult[] = [
  // Sections
  { id: "vision", type: "section", title: "Vision", description: "Strategic roadmap for Afghanistan's future", section: "vision", icon: Sparkles, keywords: ["vision", "roadmap", "strategy", "future", "transformation"] },
  { id: "sectors", type: "section", title: "Key Sectors", description: "12+ economic development areas", section: "sectors", icon: Building2, keywords: ["sectors", "economy", "development", "growth"] },
  { id: "provinces", type: "section", title: "Provinces", description: "All 34 provincial profiles", section: "provinces", icon: MapPin, keywords: ["provinces", "regions", "map", "afghanistan"] },
  { id: "publications", type: "section", title: "Publications", description: "Reports & research documents", section: "publications", icon: FileText, keywords: ["publications", "reports", "research", "documents"] },
  
  // Major Sectors
  { id: "mining", type: "sector", title: "Minerals & Mining", description: "$30+ trillion in mineral reserves", section: "sectors", icon: Building2, keywords: ["mining", "minerals", "copper", "lithium", "resources", "extraction"] },
  { id: "agriculture", type: "sector", title: "Agriculture & Food Security", description: "World's finest saffron & pomegranates", section: "sectors", icon: Building2, keywords: ["agriculture", "farming", "saffron", "pomegranate", "food", "crops"] },
  { id: "energy", type: "sector", title: "Energy & Sustainability", description: "300+ days of sunshine annually", section: "sectors", icon: Building2, keywords: ["energy", "solar", "wind", "renewable", "power", "electricity"] },
  { id: "healthcare", type: "sector", title: "Health & Medicine", description: "Universal healthcare access", section: "sectors", icon: Building2, keywords: ["health", "healthcare", "hospital", "medicine", "medical", "doctors"] },
  { id: "education", type: "sector", title: "Education & Skills", description: "Knowledge economy development", section: "sectors", icon: Building2, keywords: ["education", "schools", "university", "training", "skills", "learning"] },
  { id: "housing", type: "sector", title: "Housing & Urban Development", description: "100,000+ affordable homes planned", section: "sectors", icon: Building2, keywords: ["housing", "urban", "homes", "construction", "real estate"] },
  { id: "banking", type: "sector", title: "Banking & Finance", description: "Modern financial infrastructure", section: "sectors", icon: Building2, keywords: ["banking", "finance", "loans", "investment", "money"] },
  { id: "technology", type: "sector", title: "Technology & Digital", description: "Smart cities & digital transformation", section: "sectors", icon: Building2, keywords: ["technology", "digital", "tech", "smart city", "innovation", "IT"] },
  { id: "infrastructure", type: "sector", title: "Infrastructure & Transport", description: "Roads, railways, airports", section: "sectors", icon: Building2, keywords: ["infrastructure", "roads", "transport", "railway", "airport", "highway"] },
  { id: "water", type: "sector", title: "Water & Sanitation", description: "Clean water access for all", section: "sectors", icon: Building2, keywords: ["water", "sanitation", "dam", "irrigation", "clean water"] },
  
  // Industries
  { id: "copper-mining", type: "industry", title: "Copper Mining", description: "Aynak copper deposit", section: "explorer", icon: Factory, keywords: ["copper", "aynak", "mining", "metal"] },
  { id: "lithium", type: "industry", title: "Lithium Extraction", description: "EV battery production potential", section: "explorer", icon: Factory, keywords: ["lithium", "batteries", "electric vehicles", "green energy"] },
  { id: "saffron-production", type: "industry", title: "Saffron Production", description: "World's highest quality saffron", section: "explorer", icon: Factory, keywords: ["saffron", "spice", "herat", "agriculture"] },
  { id: "marble-quarry", type: "industry", title: "Marble & Stone", description: "Premium construction materials", section: "explorer", icon: Factory, keywords: ["marble", "stone", "quarry", "construction"] },
  { id: "carpet-weaving", type: "industry", title: "Carpet & Textile", description: "Traditional Afghan craftsmanship", section: "explorer", icon: Factory, keywords: ["carpet", "textile", "weaving", "traditional", "crafts"] },
  { id: "solar-energy", type: "industry", title: "Solar Energy", description: "Utility-scale solar installations", section: "explorer", icon: Factory, keywords: ["solar", "photovoltaic", "renewable", "clean energy"] },
  { id: "wind-energy", type: "industry", title: "Wind Energy", description: "Wind corridor development", section: "explorer", icon: Factory, keywords: ["wind", "turbine", "renewable", "clean energy"] },
  { id: "pharmaceuticals", type: "industry", title: "Pharmaceuticals", description: "Local medicine production", section: "explorer", icon: Factory, keywords: ["pharma", "medicine", "drugs", "healthcare"] },
  { id: "food-processing", type: "industry", title: "Food Processing", description: "Value-added agricultural products", section: "explorer", icon: Factory, keywords: ["food", "processing", "dried fruit", "export"] },
  { id: "cement", type: "industry", title: "Cement & Construction", description: "Building materials manufacturing", section: "explorer", icon: Factory, keywords: ["cement", "construction", "building", "infrastructure"] },
  
  // Provinces
  { id: "kabul", type: "province", title: "Kabul", description: "Capital & financial hub", section: "provinces", icon: MapPin, keywords: ["kabul", "capital", "city", "financial"] },
  { id: "herat", type: "province", title: "Herat", description: "Cultural heritage & saffron capital", section: "provinces", icon: MapPin, keywords: ["herat", "culture", "saffron", "citadel"] },
  { id: "balkh", type: "province", title: "Balkh", description: "Blue Mosque & historical treasures", section: "provinces", icon: MapPin, keywords: ["balkh", "mazar", "mosque", "shrine"] },
  { id: "kandahar", type: "province", title: "Kandahar", description: "Pomegranate orchards", section: "provinces", icon: MapPin, keywords: ["kandahar", "pomegranate", "orchards", "south"] },
  { id: "nangarhar", type: "province", title: "Nangarhar", description: "Citrus valley & trade gateway", section: "provinces", icon: MapPin, keywords: ["nangarhar", "jalalabad", "citrus", "oranges"] },
  { id: "badakhshan", type: "province", title: "Badakhshan", description: "Lapis lazuli & precious gems", section: "provinces", icon: MapPin, keywords: ["badakhshan", "lapis", "gems", "mountains"] },
  { id: "bamyan", type: "province", title: "Bamyan", description: "Cliffs, Band-e-Amir lakes, heritage", section: "provinces", icon: MapPin, keywords: ["bamyan", "band-e-amir", "heritage", "tourism", "cliffs"] },
  { id: "panjshir", type: "province", title: "Panjshir", description: "Emerald valley & hydropower", section: "provinces", icon: MapPin, keywords: ["panjshir", "emerald", "valley", "hydro"] },
  { id: "helmand", type: "province", title: "Helmand", description: "Agricultural heartland", section: "provinces", icon: MapPin, keywords: ["helmand", "agriculture", "irrigation", "farming"] },
  { id: "kunduz", type: "province", title: "Kunduz", description: "Cotton plains & textiles", section: "provinces", icon: MapPin, keywords: ["kunduz", "cotton", "textile", "north"] },
  
  // Publications
  { id: "annual-report", type: "publication", title: "Annual Economic Report 2026", description: "Comprehensive economic analysis", section: "publications", icon: FileText, keywords: ["report", "annual", "economic", "analysis"] },
  { id: "investment-guide", type: "publication", title: "Investment Guide", description: "Foreign direct investment opportunities", section: "publications", icon: FileText, keywords: ["investment", "guide", "fdi", "opportunities"] },
  { id: "mining-policy", type: "publication", title: "Mining Policy Framework", description: "Regulatory guidelines for mining", section: "publications", icon: FileText, keywords: ["mining", "policy", "regulation", "framework"] },
  { id: "energy-strategy", type: "publication", title: "National Energy Strategy", description: "Roadmap to energy independence", section: "publications", icon: FileText, keywords: ["energy", "strategy", "renewable", "independence"] },
];

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GlobalSearchModal = ({ isOpen, onClose }: GlobalSearchModalProps) => {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const filteredResults = useMemo(() => {
    if (!query.trim() && !selectedType) {
      return searchData.slice(0, 8);
    }

    return searchData.filter((item) => {
      const matchesType = !selectedType || item.type === selectedType;
      const matchesQuery = !query.trim() || 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.keywords.some(k => k.toLowerCase().includes(query.toLowerCase()));
      return matchesType && matchesQuery;
    });
  }, [query, selectedType]);

  const groupedResults = useMemo(() => {
    const groups: Record<string, SearchResult[]> = {};
    filteredResults.forEach((result) => {
      if (!groups[result.type]) {
        groups[result.type] = [];
      }
      groups[result.type].push(result);
    });
    return groups;
  }, [filteredResults]);

  const handleNavigate = useCallback((result: SearchResult) => {
    const element = document.getElementById(result.section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    onClose();
    setQuery("");
    setSelectedType(null);
  }, [onClose]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => Math.min(prev + 1, filteredResults.length - 1));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => Math.max(prev - 1, 0));
      }
      if (e.key === "Enter" && filteredResults[selectedIndex]) {
        handleNavigate(filteredResults[selectedIndex]);
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, onClose, filteredResults, selectedIndex, handleNavigate]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query, selectedType]);

  const typeFilters = [
    { type: null, label: "All" },
    { type: "sector", label: "Sectors" },
    { type: "province", label: "Provinces" },
    { type: "industry", label: "Industries" },
    { type: "publication", label: "Publications" },
  ];

  const typeLabels: Record<string, string> = {
    sector: "Sectors",
    province: "Provinces",
    publication: "Publications",
    industry: "Industries",
    section: "Sections",
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-background/90 backdrop-blur-xl"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed left-1/2 top-[15%] z-[101] w-full max-w-2xl -translate-x-1/2"
          >
            <div className="mx-4 overflow-hidden rounded-2xl border border-border/50 bg-card/98 shadow-2xl shadow-black/50 backdrop-blur-2xl">
              {/* Search Input */}
              <div className="relative border-b border-border/30">
                <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search sectors, provinces, industries, publications..."
                  autoFocus
                  className="w-full bg-transparent py-5 pl-14 pr-14 text-lg outline-none placeholder:text-muted-foreground/60"
                />
                <button
                  onClick={onClose}
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-lg p-2 hover:bg-white/5"
                >
                  <X className="h-5 w-5 text-muted-foreground" />
                </button>
              </div>

              {/* Type Filters */}
              <div className="flex gap-2 border-b border-border/30 px-4 py-3">
                {typeFilters.map((filter) => (
                  <button
                    key={filter.label}
                    onClick={() => setSelectedType(filter.type)}
                    className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                      selectedType === filter.type
                        ? "bg-foreground text-background"
                        : "bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-foreground"
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>

              {/* Results */}
              <div className="max-h-[50vh] overflow-y-auto p-2">
                {Object.keys(groupedResults).length > 0 ? (
                  Object.entries(groupedResults).map(([type, results]) => (
                    <div key={type} className="mb-4">
                      <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {typeLabels[type] || type}
                      </div>
                      {results.map((result, idx) => {
                        const globalIndex = filteredResults.indexOf(result);
                        const Icon = result.icon;
                        return (
                          <button
                            key={result.id}
                            onClick={() => handleNavigate(result)}
                            onMouseEnter={() => setSelectedIndex(globalIndex)}
                            className={`group flex w-full items-center gap-4 rounded-xl px-3 py-3 text-left transition-all ${
                              selectedIndex === globalIndex
                                ? "bg-white/10"
                                : "hover:bg-white/5"
                            }`}
                          >
                            <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                              selectedIndex === globalIndex
                                ? "bg-white/15 text-foreground"
                                : "bg-white/5 text-muted-foreground"
                            }`}>
                              <Icon className="h-5 w-5" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className={`font-medium ${
                                selectedIndex === globalIndex ? "text-foreground" : "text-foreground"
                              }`}>
                                {result.title}
                              </div>
                              <div className="truncate text-sm text-muted-foreground">
                                {result.description}
                              </div>
                            </div>
                            <ArrowRight className={`h-4 w-4 transition-all ${
                              selectedIndex === globalIndex
                                ? "translate-x-0 text-foreground opacity-100"
                                : "-translate-x-2 text-muted-foreground opacity-0"
                            }`} />
                          </button>
                        );
                      })}
                    </div>
                  ))
                ) : (
                  <div className="py-12 text-center">
                    <div className="mb-2 text-lg font-medium text-muted-foreground">No results found</div>
                    <div className="text-sm text-muted-foreground/60">Try a different search term</div>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between border-t border-border/30 px-4 py-3 text-xs text-muted-foreground">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5">
                    <Keyboard className="h-3.5 w-3.5" />
                    <kbd className="rounded bg-white/10 px-1.5 py-0.5 font-mono">↑↓</kbd>
                    Navigate
                  </span>
                  <span className="flex items-center gap-1.5">
                    <kbd className="rounded bg-white/10 px-1.5 py-0.5 font-mono">Enter</kbd>
                    Select
                  </span>
                  <span className="flex items-center gap-1.5">
                    <kbd className="rounded bg-white/10 px-1.5 py-0.5 font-mono">Esc</kbd>
                    Close
                  </span>
                </div>
                <span>{filteredResults.length} results</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
