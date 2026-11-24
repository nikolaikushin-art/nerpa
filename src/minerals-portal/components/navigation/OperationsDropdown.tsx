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

  return (
    <PortalMegaPanel
      icon={Pickaxe}
      title={t.navDropdowns.operations.title}
      subtitle={t.navDropdowns.operations.subtitle}
      viewAll={{ label: t.navDropdowns.operations.viewAll, href: "/operations" }}
      columns={4}
      onItemClick={onItemClick}
      groups={[{ links: operationsLinks }]}
    />
  );
};

export default OperationsDropdown;
