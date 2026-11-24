import { Gem } from "lucide-react";
import { LucideIcon } from "lucide-react";
import { useLanguage } from "@/minerals-portal/contexts/LanguageContext";
import AccordionMegaPanel from "./AccordionMegaPanel";

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
  const sections = [...strategicMetals, ...preciousResources, ...industrialMinerals].map((category) => ({
    id: category.title,
    title: category.title,
    icon: category.icon,
    items: category.items,
  }));

  return (
    <AccordionMegaPanel
      title={t.mineralsMegaMenu.title}
      subtitle={t.mineralsMegaMenu.subtitle}
      headerIcon={Gem}
      viewAll={{ label: t.mineralsMegaMenu.viewComplete, href: "/minerals" }}
      sections={sections}
      onItemClick={onItemClick}
    />
  );
};

export default MegaMenuDropdown;
