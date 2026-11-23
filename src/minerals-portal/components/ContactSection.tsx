 import { useLanguage } from '@/minerals-portal/contexts/LanguageContext';
 import ContactForm from './ContactForm';
 import { Mail, MapPin, Phone } from 'lucide-react';
 
 const ContactSection = () => {
   const { t, isRTL } = useLanguage();
 
   return (
     <section id="contact" className="relative min-h-screen w-full overflow-hidden bg-secondary/20 py-24">
       <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-secondary/30" />
       
       <div className={`relative z-10 mx-auto max-w-7xl px-8 md:px-16 ${isRTL ? 'text-right' : 'text-left'}`}>
         <div className="mb-16">
           <span className="mb-4 block font-body text-sm font-medium uppercase tracking-[0.3em] text-primary">
             {t.nav.contact}
           </span>
           <h2 className="font-display text-4xl font-light text-foreground md:text-5xl lg:text-6xl">
             {t.contact.title}
           </h2>
           <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
             {t.contact.subtitle}
           </p>
         </div>
 
         <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
           {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-3">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-semibold text-foreground">{t.contact.addressLabel}</h4>
                  <p className="text-muted-foreground">
                    London, UK | Kabul, Afghanistan
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-3">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-semibold text-foreground">{t.contact.phoneLabel}</h4>
                  <p className="text-muted-foreground">
                    +44 7741651795 | +93 749922932
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-3">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-semibold text-foreground">{t.contact.emailLabel}</h4>
                  <p className="text-muted-foreground">
                    info@nerpa.org.uk | info@nerpa.org.af
                  </p>
                </div>
              </div>
            </div>
 
           {/* Contact Form */}
           <div className="lg:col-span-2">
             <div className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-8">
               <ContactForm />
             </div>
           </div>
         </div>
       </div>
     </section>
   );
 };
 
 export default ContactSection;