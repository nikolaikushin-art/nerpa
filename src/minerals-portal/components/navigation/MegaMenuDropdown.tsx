import { Gem } from "lucide-react";
import { useLanguage } from "@/minerals-portal/contexts/LanguageContext";
import type { Language } from "@/minerals-portal/lib/i18n/translations";
import PortalMegaPanel from "./PortalMegaPanel";

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
    <PortalMegaPanel
      icon={Gem}
      title={t.mineralsMegaMenu.title}
      subtitle={t.mineralsMegaMenu.subtitle}
      viewAll={{ label: t.mineralsMegaMenu.viewComplete, href: "/minerals" }}
      columns={4}
      onItemClick={onItemClick}
      groups={groups.map((group) => ({
        title: group.title,
        links: group.categories
          .map((category) => ({ label: category.title, href: category.items[0]?.href || "" }))
          .filter((link) => link.href),
      }))}
    />
  );
};

export default MegaMenuDropdown;
