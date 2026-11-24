import { Mail } from "lucide-react";
import { useLanguage } from "@/minerals-portal/contexts/LanguageContext";
import PortalMegaPanel from "./PortalMegaPanel";

interface ContactDropdownProps {
  onItemClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

const ContactDropdown = ({ onItemClick }: ContactDropdownProps) => {
  const { t } = useLanguage();
  const links = [
    { label: t.navDropdowns.contact.form.label, href: "#contact" },
    { label: t.navDropdowns.contact.offices.label, href: "/contact/offices" },
    { label: t.navDropdowns.contact.email.label, href: "/contact/email" },
    { label: t.navDropdowns.contact.phone.label, href: "/contact/phone" },
    { label: t.navDropdowns.contact.departments.label, href: "/contact/departments" },
    { label: t.navDropdowns.contact.international.label, href: "/contact/international" },
    { label: t.navDropdowns.contact.media.label, href: "/contact/media" },
    { label: t.navDropdowns.contact.partnerships.label, href: "/contact/partnerships" },
  ];

  return (
    <PortalMegaPanel
      icon={Mail}
      title={t.navDropdowns.contact.title}
      subtitle={t.navDropdowns.contact.subtitle}
      viewAll={{ label: t.navDropdowns.contact.viewSection, href: "#contact" }}
      columns={4}
      onItemClick={onItemClick}
      groups={[{ links }]}
    />
  );
};

export default ContactDropdown;
