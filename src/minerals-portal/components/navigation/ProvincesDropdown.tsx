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

  return (
    <PortalMegaPanel
      icon={Map}
      title={t.navDropdowns.provinces.title}
      subtitle={t.navDropdowns.provinces.subtitle}
      viewAll={{ label: t.navDropdowns.provinces.viewMap, href: "#map" }}
      columns={4}
      onItemClick={onItemClick}
      groups={[{ links: provinceLinks }]}
    />
  );
};

export default ProvincesDropdown;
