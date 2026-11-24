import { DollarSign } from "lucide-react";
import { useLanguage } from "@/minerals-portal/contexts/LanguageContext";
import PortalMegaPanel from "./PortalMegaPanel";

interface InvestmentDropdownProps {
  onItemClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

const groups = [
  {
    title: "Legal & Regulatory",
    links: [
      { label: "Investment Framework", href: "/investment/framework" },
      { label: "Fiscal Terms & Revenue", href: "/investment/fiscal-terms" },
      { label: "Dispute Resolution", href: "/investment/dispute-resolution" },
      { label: "Risk Management", href: "/investment/risk-management" },
    ],
  },
  {
    title: "Opportunities & Partnerships",
    links: [
      { label: "Investment Opportunities", href: "/investment/opportunities" },
      { label: "Partnership Models", href: "/investment/partnerships" },
      { label: "Financial Incentives", href: "/investment/incentives" },
      { label: "International Partners", href: "/investment/partners" },
    ],
  },
  {
    title: "Process & Support",
    links: [
      { label: "Investment Process", href: "/investment/process" },
      { label: "Due Diligence & Assessment", href: "/investment/due-diligence" },
      { label: "Infrastructure Support", href: "/investment/infrastructure-support" },
      { label: "Investment Statistics", href: "/investment/statistics" },
    ],
  },
  {
    title: "Development & Impact",
    links: [
      { label: "Workforce Development", href: "/investment/workforce-development" },
      { label: "Community Benefit", href: "/investment/community-benefit" },
      { label: "Environmental Compliance", href: "/investment/environmental-compliance" },
      { label: "Mining Technology", href: "/investment/technology-innovation" },
    ],
  },
];

const InvestmentDropdown = ({ onItemClick }: InvestmentDropdownProps) => {
  const { t } = useLanguage();

  return (
    <PortalMegaPanel
      icon={DollarSign}
      title={t.navDropdowns.investment.title}
      subtitle={t.navDropdowns.investment.subtitle}
      viewAll={{ label: t.navDropdowns.investment.viewComplete, href: "/investment" }}
      columns={4}
      onItemClick={onItemClick}
      groups={groups}
    />
  );
};

export default InvestmentDropdown;
