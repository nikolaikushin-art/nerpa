import { LucideIcon, Pickaxe } from 'lucide-react';
import { useLanguage } from '@/minerals-portal/contexts/LanguageContext';


interface OperationLink {
  label: string;
  href: string;
  icon: LucideIcon;
  description?: string;
}

interface OperationsDropdownProps {
  operationsLinks: OperationLink[];
  onItemClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

const OperationsDropdown = ({ operationsLinks, onItemClick }: OperationsDropdownProps) => {
  const { t } = useLanguage();
  
  return (
    <div 
      className="absolute left-4 right-4 top-full z-40 mt-1 max-h-[calc(100vh-8rem)] overflow-y-auto rounded-xl border border-border/50 bg-background/98 shadow-2xl"
    >
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-amber to-primary" />
      
      <div className="p-8">
        <div className="flex items-center gap-4 mb-6 pb-4 border-b border-border/50">
          <div className="p-3 rounded-xl bg-primary/10">
            <Pickaxe className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-body font-bold text-foreground">{t.navDropdowns.operations.title}</h3>
            <p className="text-sm font-body text-foreground">{t.navDropdowns.operations.subtitle}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 py-4">
          {operationsLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => onItemClick(e, link.href)}
              className="flex items-center gap-4 p-4 rounded-lg text-foreground hover:text-primary hover:bg-secondary/50 transition-all duration-200 group"
            >
              <div className="p-2.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <link.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <span className="font-body font-medium text-foreground group-hover:text-primary transition-colors">
                  {link.label}
                </span>
                {link.description && (
                  <p className="text-xs font-body text-foreground mt-0.5">{link.description}</p>
                )}
              </div>
            </a>
          ))}
        </div>

        

        <div className="mt-8 pt-6 border-t border-border/50 text-center">
          <a
            href="/operations"
            className="text-sm font-medium text-primary hover:underline"
          >
            {t.navDropdowns.operations.viewAll} →
          </a>
        </div>
      </div>
    </div>
  );
};

export default OperationsDropdown;
