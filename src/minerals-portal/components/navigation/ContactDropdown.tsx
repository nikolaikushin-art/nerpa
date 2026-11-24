import { Mail, Phone, MapPin, MessageSquare, Users, FileText, Globe, Building, LucideIcon } from 'lucide-react';
import { useLanguage } from '@/minerals-portal/contexts/LanguageContext';
import AccordionMegaPanel from './AccordionMegaPanel';

interface ContactDropdownProps {
  onItemClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

const ContactDropdown = ({ onItemClick }: ContactDropdownProps) => {
  const { t } = useLanguage();

  const contactLinks: { label: string; href: string; icon: LucideIcon }[] = [
    { label: t.navDropdowns.contact.form.label, href: '#contact', icon: MessageSquare },
    { label: t.navDropdowns.contact.offices.label, href: '/contact/offices', icon: MapPin },
    { label: t.navDropdowns.contact.email.label, href: '/contact/email', icon: Mail },
    { label: t.navDropdowns.contact.phone.label, href: '/contact/phone', icon: Phone },
    { label: t.navDropdowns.contact.departments.label, href: '/contact/departments', icon: Building },
    { label: t.navDropdowns.contact.international.label, href: '/contact/international', icon: Globe },
    { label: t.navDropdowns.contact.media.label, href: '/contact/media', icon: FileText },
    { label: t.navDropdowns.contact.partnerships.label, href: '/contact/partnerships', icon: Users },
  ];

  const groups: { id: string; title: string; icon: LucideIcon; hrefs: string[] }[] = [
    {
      id: 'reach',
      title: 'Reach the Portal',
      icon: MessageSquare,
      hrefs: ['#contact', '/contact/offices', '/contact/email', '/contact/phone'],
    },
    {
      id: 'organization',
      title: 'Departments & Partners',
      icon: Building,
      hrefs: ['/contact/departments', '/contact/international', '/contact/media', '/contact/partnerships'],
    },
  ];

  const assigned = new Set(groups.flatMap((group) => group.hrefs));
  const sections = groups.map((group) => ({
    id: group.id,
    title: group.title,
    icon: group.icon,
    items: group.hrefs
      .map((href) => contactLinks.find((link) => link.href === href))
      .filter((link): link is (typeof contactLinks)[number] => Boolean(link)),
  }));

  const leftover = contactLinks.filter((link) => !assigned.has(link.href));
  if (leftover.length > 0) {
    sections.push({ id: 'more', title: 'More', icon: Mail, items: leftover });
  }

  return (
    <AccordionMegaPanel
      title={t.navDropdowns.contact.title}
      subtitle={t.navDropdowns.contact.subtitle}
      headerIcon={Mail}
      viewAll={{ label: t.navDropdowns.contact.viewSection, href: '#contact' }}
      sections={sections}
      onItemClick={onItemClick}
    />
  );
};

export default ContactDropdown;
