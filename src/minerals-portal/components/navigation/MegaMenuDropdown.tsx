import { ChevronRight, Gem } from "lucide-react";
import { useLanguage } from "@/minerals-portal/contexts/LanguageContext";
import type { Language } from "@/minerals-portal/lib/i18n/translations";

interface MineralCategory {
  title: string;
  icon?: unknown;
  items: { label: string; href: string }[];
}

interface MegaMenuDropdownProps {
  strategicMetals: MineralCategory[];
  preciousResources: MineralCategory[];
  industrialMinerals: MineralCategory[];
  onItemClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

const GROUP_TITLES: Record<Language, [string, string, string]> = {
  en: ["Strategic Metals", "Precious Resources", "Industrial Minerals"],
  ps: ["ستراتیژیک فلزات", "قیمتي سرچینې", "صنعتي منرالونه"],
  fa: ["فلزات استراتژیک", "منابع قیمتی", "کانی‌های صنعتی"],
  ar: ["المعادن الاستراتيجية", "الموارد الثمينة", "المعادن الصناعية"],
  zh: ["战略金属", "珍贵资源", "工业矿物"],
  ru: ["Стратегические металлы", "Драгоценные ресурсы", "Промышленные минералы"],
};

const MegaMenuDropdown = ({
  strategicMetals,
  preciousResources,
  industrialMinerals,
  onItemClick,
}: MegaMenuDropdownProps) => {
  const { t, language } = useLanguage();
  const titles = GROUP_TITLES[language] ?? GROUP_TITLES.en;
  const groups = [
    { title: titles[0], categories: strategicMetals },
    { title: titles[1], categories: preciousResources },
    { title: titles[2], categories: industrialMinerals },
  ];

  return (
    <div
      className="absolute left-4 right-4 top-full z-40 mt-1 overflow-hidden rounded-xl border border-white/10 bg-[#0b0c10] shadow-2xl"
      onMouseDown={(e) => e.stopPropagation()}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="h-1 bg-gradient-to-r from-[#f8c757] via-amber-200 to-[#f8c757]" />
      <div className="px-5 pb-3 pt-4">
        <div className="mb-3 flex items-center gap-3 border-b border-white/10 pb-3">
          <div className="rounded-xl bg-[#f8c757]/10 p-2">
            <Gem className="h-5 w-5 text-[#f8c757]" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold text-white">{t.mineralsMegaMenu.title}</h3>
            <p className="text-sm text-white/60">{t.mineralsMegaMenu.subtitle}</p>
          </div>
          <a
            href="/minerals"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onItemClick(e, "/minerals");
            }}
            className="hidden shrink-0 items-center gap-1 text-sm text-[#f8c757] hover:underline sm:flex"
          >
            {t.mineralsMegaMenu.viewComplete}
            <ChevronRight className="h-3.5 w-3.5" />
          </a>
        </div>
        <div className="columns-1 gap-x-8 sm:columns-2 xl:columns-3">
          {groups.map((group) => (
            <div key={group.title} className="mb-4 break-inside-avoid">
              <p className="mb-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#f8c757]">
                {group.title}
              </p>
              {group.categories.map((category) => {
                const href = category.items[0]?.href;
                if (!href) return null;
                return (
                  <a
                    key={`${group.title}-${category.title}`}
                    href={href}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      onItemClick(e, href);
                    }}
                    className="flex items-center gap-2 rounded-md px-1.5 py-1 text-[13.5px] text-white/85 hover:bg-white/5 hover:text-[#f8c757]"
                  >
                    <span className="flex-1">{category.title}</span>
                    <ChevronRight className="h-3 w-3 text-white/25" />
                  </a>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MegaMenuDropdown;
