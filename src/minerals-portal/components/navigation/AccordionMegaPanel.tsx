import { useState } from "react";
import { ChevronDown, ChevronRight, LucideIcon } from "lucide-react";

export interface AccordionMenuLink {
  label: string;
  href: string;
  icon?: LucideIcon;
}

export interface AccordionMenuSection {
  id: string;
  title: string;
  icon: LucideIcon;
  items: AccordionMenuLink[];
}

interface AccordionMegaPanelProps {
  title: string;
  subtitle?: string;
  headerIcon: LucideIcon;
  sections: AccordionMenuSection[];
  onItemClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
  viewAll?: { label: string; href: string };
}

const AccordionMegaPanel = ({
  title,
  subtitle,
  headerIcon: HeaderIcon,
  sections,
  onItemClick,
  viewAll,
}: AccordionMegaPanelProps) => {
  const [openId, setOpenId] = useState<string | null>(null);
  const openSection = sections.find((section) => section.id === openId) ?? null;

  const follow = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    e.stopPropagation();
    onItemClick(e, href);
  };

  return (
    <div
      className="fixed left-4 right-4 top-[7.25rem] z-40 max-h-[calc(100vh-7.25rem-12rem)] overflow-y-auto rounded-2xl border border-white/10 shadow-2xl animate-fade-in"
      style={{ backgroundColor: "#0c0e12" }}
      onMouseDown={(e) => e.stopPropagation()}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="h-1 bg-gradient-to-r from-primary via-amber-200 to-primary" />

      <div className="px-5 pb-4 pt-4">
        <div className="mb-4 flex items-center gap-3 border-b border-white/10 pb-3">
          <div className="rounded-xl bg-primary/10 p-2.5">
            <HeaderIcon className="h-5 w-5 text-primary" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-body text-lg font-semibold text-white">{title}</h3>
            {subtitle && <p className="text-sm text-white/55">{subtitle}</p>}
          </div>
          {viewAll && (
            <a
              href={viewAll.href}
              onClick={(e) => follow(e, viewAll.href)}
              className="hidden shrink-0 items-center gap-1.5 text-sm font-medium text-primary hover:underline sm:flex"
            >
              {viewAll.label}
              <ChevronRight className="h-4 w-4" />
            </a>
          )}
        </div>

        {openSection && (
          <div className="mb-3 rounded-xl border border-primary/35 bg-primary/[0.06] p-3">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.16em] text-primary">
              {openSection.title}
            </p>
            <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 xl:grid-cols-3">
              {openSection.items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => follow(e, item.href)}
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
          {sections.map((section) => {
            const isOpen = openId === section.id;
            return (
              <button
                key={section.id}
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpenId(isOpen ? null : section.id)}
                className={`flex items-center gap-3 rounded-xl border px-3.5 py-3 text-left transition-colors ${
                  isOpen
                    ? "border-primary/50 bg-primary/10"
                    : "border-white/10 bg-white/[0.025] hover:border-white/20 hover:bg-white/[0.04]"
                }`}
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/15">
                  <section.icon className="h-4 w-4 text-primary" />
                </span>
                <span className="min-w-0 flex-1 text-sm font-semibold tracking-wide text-white">
                  {section.title}
                </span>
                <span className="text-sm tabular-nums text-white/40">{section.items.length}</span>
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

export default AccordionMegaPanel;
