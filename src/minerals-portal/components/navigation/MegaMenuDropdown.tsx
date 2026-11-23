import { useState } from "react";
import { LucideIcon, Gem, ChevronDown, ChevronRight } from "lucide-react";
import { useLanguage } from "@/minerals-portal/contexts/LanguageContext";

interface MineralCategory {
  title: string;
  icon: LucideIcon;
  items: { label: string; href: string; icon?: LucideIcon }[];
}

interface MegaMenuDropdownProps {
  strategicMetals: MineralCategory[];
  preciousResources: MineralCategory[];
  industrialMinerals: MineralCategory[];
  onItemClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

const MegaMenuDropdown = ({
  strategicMetals,
  preciousResources,
  industrialMinerals,
  onItemClick,
}: MegaMenuDropdownProps) => {
  const { t } = useLanguage();
  const allCategories = [...strategicMetals, ...preciousResources, ...industrialMinerals];
  const [openTitle, setOpenTitle] = useState<string | null>(null);
  const openCategory = allCategories.find((category) => category.title === openTitle) ?? null;

  return (
    <div
      className="fixed left-4 right-4 top-[7.25rem] z-40 max-h-[calc(100vh-7.25rem-12rem)] overflow-y-auto rounded-2xl border border-white/10 bg-[#0c0e12]/98 shadow-2xl animate-fade-in"
      onMouseDown={(e) => e.stopPropagation()}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="h-1 bg-gradient-to-r from-primary via-amber-200 to-primary" />

      <div className="px-5 pt-4 pb-4">
        <div className="mb-4 flex items-center gap-3 border-b border-white/10 pb-3">
          <div className="rounded-xl bg-primary/10 p-2.5">
            <Gem className="h-5 w-5 text-primary" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-body text-lg font-semibold text-white">{t.mineralsMegaMenu.title}</h3>
            <p className="text-sm text-white/55">{t.mineralsMegaMenu.subtitle}</p>
          </div>
          <a
            href="/minerals"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onItemClick(e, "/minerals");
            }}
            className="hidden shrink-0 items-center gap-1.5 text-sm font-medium text-primary hover:underline sm:flex"
          >
            {t.mineralsMegaMenu.viewComplete}
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>

        {openCategory && (
          <div className="mb-3 rounded-xl border border-primary/35 bg-primary/[0.06] p-3">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.16em] text-primary">
              {openCategory.title}
            </p>
            <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 xl:grid-cols-3">
              {openCategory.items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onItemClick(e, item.href);
                  }}
                  className="flex items-center gap-2 rounded-lg px-2.5 py-2 text-sm text-white/85 hover:bg-white/5 hover:text-primary"
                >
                  {item.icon && <item.icon className="h-3.5 w-3.5 shrink-0 text-primary/80" />}
                  <span className="min-w-0 flex-1">{item.label}</span>
                  <ChevronRight className="h-3.5 w-3.5 shrink-0 text-white/25" />
                </a>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3">
          {allCategories.map((category) => {
            const isOpen = openTitle === category.title;
            return (
              <button
                key={category.title}
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpenTitle(isOpen ? null : category.title)}
                className={`flex items-center gap-3 rounded-xl border px-3 py-2.5 text-left transition-colors ${
                  isOpen
                    ? "border-primary/50 bg-primary/10"
                    : "border-white/10 bg-white/[0.025] hover:border-white/20 hover:bg-white/[0.04]"
                }`}
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/15">
                  <category.icon className="h-4 w-4 text-primary" />
                </span>
                <span className="min-w-0 flex-1 text-sm font-semibold tracking-wide text-white">
                  {category.title}
                </span>
                <span className="text-xs tabular-nums text-white/35">{category.items.length}</span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-primary transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MegaMenuDropdown;
