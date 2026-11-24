import { Mail, Phone, MapPin, MessageSquare, Users, FileText, Globe, Building } from 'lucide-react';
import { useLanguage } from '@/minerals-portal/contexts/LanguageContext';


interface ContactDropdownProps {
  onItemClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

const ContactDropdown = ({ onItemClick }: ContactDropdownProps) => {
  const { t } = useLanguage();
  
  const contactLinks = [
    {
      label: t.navDropdowns.contact.form.label,
      href: '#contact',
      icon: MessageSquare,
      description: t.navDropdowns.contact.form.description
    },
    {
      label: t.navDropdowns.contact.offices.label,
      href: '/contact/offices',
      icon: MapPin,
      description: t.navDropdowns.contact.offices.description
    },
    {
      label: t.navDropdowns.contact.email.label,
      href: '/contact/email',
      icon: Mail,
      description: t.navDropdowns.contact.email.description
    },
    {
      label: t.navDropdowns.contact.phone.label,
      href: '/contact/phone',
      icon: Phone,
      description: t.navDropdowns.contact.phone.description
    },
    {
      label: t.navDropdowns.contact.departments.label,
      href: '/contact/departments',
      icon: Building,
      description: t.navDropdowns.contact.departments.description
    },
    {
      label: t.navDropdowns.contact.international.label,
      href: '/contact/international',
      icon: Globe,
      description: t.navDropdowns.contact.international.description
    },
    {
      label: t.navDropdowns.contact.media.label,
      href: '/contact/media',
      icon: FileText,
      description: t.navDropdowns.contact.media.description
    },
    {
      label: t.navDropdowns.contact.partnerships.label,
      href: '/contact/partnerships',
      icon: Users,
      description: t.navDropdowns.contact.partnerships.description
    }
  ];
  return (
    <div 
      className="absolute left-4 right-4 top-full z-40 mt-1 max-h-[calc(100vh-8rem)] overflow-y-auto rounded-xl border border-border/50 bg-background/98 shadow-2xl"
    >
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-amber to-primary" />
      
      <div className="p-8">
        <div className="flex items-center gap-4 mb-6 pb-4 border-b border-border/50">
          <div className="p-3 rounded-xl bg-primary/10">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-body font-bold text-foreground">{t.navDropdowns.contact.title}</h3>
            <p className="text-sm font-body text-foreground">{t.navDropdowns.contact.subtitle}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-start py-4">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onItemClick(e, link.href);
              }}
              className="flex items-start gap-3 p-3 rounded-lg border border-border/30 hover:border-primary/50 hover:bg-primary/5 transition-all group"
            >
              <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                <link.icon className="h-4 w-4 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-body font-bold text-foreground group-hover:text-primary transition-colors mb-0.5 break-words">
                  {link.label}
                </h4>
                <p className="text-xs font-body text-foreground leading-tight">{link.description}</p>
              </div>
            </a>
          ))}
        </div>

        

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-border/50 flex items-center justify-between">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onItemClick(e, '#contact');
            }}
            className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            <Mail className="h-4 w-4" />
            {t.navDropdowns.contact.viewSection} →
          </a>
          <div className="text-xs font-body text-foreground">
            {t.navDropdowns.contact.clickToExplore}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDropdown;
