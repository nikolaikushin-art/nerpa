import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

// Footer component with contact info, social links, quick navigation, and partner logos
import {
  Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube,
  Eye, TrendingUp, Calendar, Calculator, BarChart3, Globe, Factory, Search,
  Gem, BookOpen, Handshake, Database, Network, Mail as ContactIcon } from
"lucide-react";

export const Footer = () => {
  const { t } = useLanguage();

  const quickLinks = [
  { label: t("nav.vision"), href: "/vision", icon: Eye },
  { label: t("nav.economy"), href: "/#sectors", icon: TrendingUp },
  { label: t("nav.regions"), href: "/provinces", icon: Globe },
  { label: t("nav.industry"), href: "/manufacturing", icon: Factory },
  { label: t("nav.explore"), href: "/explorer", icon: Search },
  { label: t("nav.invest"), href: "/industries", icon: Gem },
  { label: t("nav.research"), href: "/publications", icon: BookOpen },
  { label: t("nav.connect"), href: "/engagement", icon: Handshake },
  { label: t("nav.search"), href: "/#", icon: Search },
  { label: "Media: TED Talk", href: "/publications", icon: Youtube },
  { label: t("common.contact"), href: "/contact", icon: ContactIcon }];


  const sectorLinks = [
  { label: t("nav.mining"), href: "/sector/mining" },
  { label: t("nav.agriculture"), href: "/sector/agriculture" },
  { label: t("nav.energy"), href: "/sector/energy" },
  { label: t("nav.health"), href: "/sector/healthcare" },
  { label: t("nav.education"), href: "/sector/education" },
  { label: t("nav.infrastructure"), href: "/sector/infrastructure" },
  { label: t("nav.tech"), href: "/sector/technology" },
  { label: t("nav.finance"), href: "/sector/finance" },
  { label: t("nav.water"), href: "/sector/water" },
  { label: t("nav.housing"), href: "/sector/housing" }];


  const partnerLogos = [
  { name: "World Bank", logo: "🌍" },
  { name: "Asian Development Bank", logo: "🏦" },
  { name: "UN Development Programme", logo: "🌐" },
  { name: "European Union", logo: "🇪🇺" },
  { name: "USAID", logo: "🇺🇸" },
  { name: "Islamic Development Bank", logo: "🕌" },
  { name: "JICA", logo: "🇯🇵" },
  { name: "GIZ", logo: "🇩🇪" },
  { name: "British Partners", logo: "🇬🇧" },
  { name: "Commonwealth Countries", logo: "🤝" },
  { name: "JORC Code Standards", logo: "📊" },
  { name: "World Economic Forum (WEF)", logo: "🏛️" },
  { name: "SGS & Certification Bodies", logo: "✅" },
  { name: "BRICS Investment Platforms", logo: "🌏" },
  { name: "GCC Partners", logo: "🇸🇦" },
  { name: "TED Talk", logo: "🎤" }];


  return (
    <footer className="bg-slate-900 text-slate-100 border-t border-slate-800">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-4">{t("hero.title")}</h3>
            <p className="text-slate-400 leading-relaxed">
              {t("hero.subtitle")}
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="YouTube">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">{t("nav.all")}</h4>
            <ul className="space-y-2">
              {quickLinks.slice(0, 6).map((link) =>
              <li key={link.href}>
                  <Link
                  to={link.href}
                  className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                  
                    <link.icon className="w-4 h-4" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Sectors */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">{t("nav.economy")}</h4>
            <ul className="space-y-2">
              {sectorLinks.slice(0, 6).map((link) =>
              <li key={link.href}>
                  <Link
                  to={link.href}
                  className="text-slate-400 hover:text-white transition-colors">
                  
                    {link.label}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">{t("common.contact")}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-slate-400">
                  Kabul, Afghanistan<br />
                  Ministry of Economy
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a className="text-slate-400 hover:text-white transition-colors" href="tel:+44 7741651795 | tel:+93 749922932">
                  ​+44 7741651795  | 
+93 749922932
                
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:info@nerpa.org.af" className="text-slate-400 hover:text-white transition-colors">
                  info@nerpa.org.af
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Partner Logos Section */}
        <div className="border-t border-slate-800 pt-12 mb-12">
          <h4 className="text-lg font-semibold text-white mb-6 text-center">
            {t("stats.partners")}
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center">
            {partnerLogos.map((partner) => <div key={partner.name}
            className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity"
            title={partner.name}>
              
                <div className="text-4xl">
                  {partner.name === "TED Talk" ?
                <span className="text-3xl font-black tracking-tight text-red-500">
                      TED
                    </span> :

                partner.logo
                }
                </div>
                <span className="text-xs text-slate-500 text-center">{partner.name}</span>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            {t("footer.copyright")}
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-slate-400 hover:text-white text-sm transition-colors">
              {t("footer.privacy")}
            </Link>
            <Link to="/terms" className="text-slate-400 hover:text-white text-sm transition-colors">
              {t("footer.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>);

};