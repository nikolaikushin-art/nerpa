import { useLanguage } from '@/minerals-portal/contexts/LanguageContext';
import FooterMegaMenu from './FooterMegaMenu';

const FooterSection = () => {
  const { t } = useLanguage();
  
  return (
    <>
      {/* Ultra-Comprehensive Footer Mega Menu */}
      <FooterMegaMenu />
      
      {/* Footer Quote Section */}
      <footer className="w-full bg-mountain px-6 py-24 md:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="font-display text-2xl font-light italic leading-relaxed text-foreground md:text-3xl">
              {t.footer?.quote || 'A nation\'s strength is measured not by what it endures, but by what it builds. This is the foundation. This is the framework. This is Afghanistan.'}
            </p>
            <p className="mt-8 text-muted-foreground">
              {t.footer?.journey || 'The journey from resilience to renaissance is not a sprint but a marathon — measured not in days but in generations. And it begins here, now, with intent.'}
            </p>
          </div>
          
          <div className="border-t border-border/30 pt-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-sm text-muted-foreground">
                {t.footer?.copyright || '© 2024 National Economic Reform Programme of Afghanistan'}
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  {t.footer?.privacy || 'Privacy'}
                </a>
                <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  {t.footer?.terms || 'Terms'}
                </a>
                <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  {t.footer?.contact || 'Contact'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterSection;