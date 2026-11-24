import { Pickaxe } from "lucide-react";
import { useLanguage } from "@/minerals-portal/contexts/LanguageContext";
import PortalMegaPanel from "./PortalMegaPanel";

interface OperationLink {
  label: string;
  href: string;
  description?: string;
}

interface OperationsDropdownProps {
  operationsLinks: OperationLink[];
  onItemClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

const OperationsDropdown = ({ operationsLinks, onItemClick }: OperationsDropdownProps) => {
  const { t } = useLanguage();
  const midpoint = Math.ceil(operationsLinks.length / 2);

  return (
    <PortalMegaPanel
      icon={Pickaxe}
      title={t.navDropdowns.operations.title}
      subtitle={t.navDropdowns.operations.subtitle}
      viewAll={{ label: t.navDropdowns.operations.viewAll, href: "/operations" }}
      columns={2}
      onItemClick={onItemClick}
      groups={[
        { links: operationsLinks.slice(0, midpoint) },
        { links: operationsLinks.slice(midpoint) },
      ]}
    />
  );
};

export default OperationsDropdown;
