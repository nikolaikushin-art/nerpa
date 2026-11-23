import { useState, useEffect } from "react";

const navItems = [
  { label: "Overview", href: "#overview" },
  { label: "Copper", href: "#copper" },
  { label: "Lithium", href: "#lithium" },
  { label: "Gold", href: "#gold" },
  { label: "Gemstones", href: "#gemstones" },
  { label: "Lapis", href: "#lapis" },
  { label: "Emerald", href: "#emerald" },
  { label: "Ruby", href: "#ruby" },
  { label: "Iron", href: "#iron" },
  { label: "Rare Earth", href: "#rare-earth" },
  { label: "Cobalt", href: "#cobalt" },
  { label: "Chromite", href: "#chromite" },
  { label: "Marble", href: "#marble" },
  { label: "Coal", href: "#coal" },
  { label: "Provinces", href: "#provinces" },
  { label: "Processing", href: "#processing" },
  { label: "Research", href: "#research" },
  { label: "Sustainability", href: "#sustainability" },
  { label: "Investment", href: "#investment" },
  { label: "Vision 2026-2040", href: "#vision" },
];

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      
      // Find active section
      const sections = navItems.map(item => item.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav 
      className={`fixed right-4 top-1/2 z-50 -translate-y-1/2 transition-all duration-500 ${
        isScrolled ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
      }`}
    >
      <div className="flex flex-col items-end gap-2 rounded-2xl bg-background/20 backdrop-blur-sm p-3 border border-foreground/5">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={(e) => handleClick(e, item.href)}
            className={`group flex items-center gap-2 transition-all duration-300`}
          >
            <span className={`text-[10px] uppercase tracking-wider transition-all duration-300 ${
              activeSection === item.href.slice(1) 
                ? "text-primary opacity-100" 
                : "text-muted-foreground/60 opacity-0 group-hover:opacity-100"
            }`}>
              {item.label}
            </span>
            <div 
              className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                activeSection === item.href.slice(1) 
                  ? "bg-primary scale-150" 
                  : "bg-foreground/20 group-hover:bg-primary/50 group-hover:scale-125"
              }`}
            />
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;