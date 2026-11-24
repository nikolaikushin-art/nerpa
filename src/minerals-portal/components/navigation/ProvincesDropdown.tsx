import { Map } from "lucide-react";
import { useLanguage } from "@/minerals-portal/contexts/LanguageContext";
import PortalMegaPanel from "./PortalMegaPanel";

interface ProvinceLink {
  label: string;
  href: string;
}

interface ProvincesDropdownProps {
  provinceLinks: ProvinceLink[];
  onItemClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

const ProvincesDropdown = ({ provinceLinks, onItemClick }: ProvincesDropdownProps) => {
  const { t } = useLanguage();
  const size = Math.ceil(provinceLinks.length / 4) || 1;
  const groups = [0, 1, 2, 3]
    .map((index) => ({ links: provinceLinks.slice(index * size, (index + 1) * size) }))
    .filter((group) => group.links.length > 0);

  return (
    <PortalMegaPanel
      icon={Map}
      title={t.navDropdowns.provinces.title}
      subtitle={t.navDropdowns.provinces.subtitle}
      viewAll={{ label: t.navDropdowns.provinces.viewMap, href: "#map" }}
      columns={4}
      onItemClick={onItemClick}
      groups={groups}
    />
  );
};

export default ProvincesDropdown;
