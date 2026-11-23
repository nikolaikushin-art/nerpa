import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import MegaNavigationV2 from '@/minerals-portal/components/MegaNavigationV2';
import ContactSection from '@/minerals-portal/components/ContactSection';
import DetailPageLayout from '@/minerals-portal/components/DetailPageLayout';
import NotFound from '@/minerals-portal/pages/NotFound';
import { contactDatabase } from '@/minerals-portal/data/contactDatabase';
const dataCenter = 'https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/data-mega-center-01.jpg';
import { useLanguage } from '@/minerals-portal/contexts/LanguageContext';
import { translateContactContent } from '@/minerals-portal/lib/i18n/detailPageTranslations';
import { getVisualsByCategory } from '@/minerals-portal/data/visualLibrary';

const ContactDetailPage = () => {
  const params = useParams();
  const { t, language } = useLanguage();
  const contactPath = params.category || '';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [contactPath]);

  const baseData = contactPath ? contactDatabase[contactPath] : undefined;
  if (!contactPath || !baseData || !baseData.title || !baseData.overview) {
    return <NotFound />;
  }
  const contactData = translateContactContent(baseData, language, contactPath);

  return (
    <div className="min-h-screen bg-background">
      <MegaNavigationV2 />

      <DetailPageLayout
        title={contactData.title}
        subtitle={contactData.subtitle}
        overview={contactData.overview}
        stats={contactData.stats}
        sections={contactData.sections}
        heroImage={dataCenter}
        breadcrumbs={[
          { label: t.nav.home, href: '/minerals-portal' },
          { label: t.nav.contact, href: '/#contact' },
          { label: contactData.title },
        ]}
        downloadLabel={t.detailPage?.contactDetail?.downloadLabel ?? ''}
        overviewTitle={t.detailPage?.contactDetail?.overviewTitle ?? ''}
        statsLabel={t.detailPage?.contactDetail?.statsLabel ?? ''}
        highlights={[
          t.detailPage?.contactDetail?.highlights?.multipleChannels ?? '',
          t.detailPage?.contactDetail?.highlights?.responsiveService ?? '',
          t.detailPage?.contactDetail?.highlights?.multiLanguage ?? '',
          t.detailPage?.contactDetail?.highlights?.secureCommunications ?? '',
        ]}
        
      >
        {/* Contact Methods - MASSIVE EXTENT */}
        {contactData.contactMethods && (
          <section className="min-h-[100vh] px-8 py-32 md:px-16 md:py-48 lg:px-24 bg-secondary/10">
            <div className="mx-auto max-w-7xl">
              <span className="mb-4 block font-body text-sm font-medium uppercase tracking-[0.3em] text-primary">
                {t.detailPage?.contactDetail?.sections?.contactChannels ?? ''}
              </span>
              <h2 className="mb-16 font-display text-4xl font-light text-foreground md:text-5xl">
                {t.detailPage?.contactDetail?.sections?.howToReach ?? ''}
              </h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {contactData.contactMethods.map((method, index) => (
                  <div
                    key={index}
                    className="rounded-xl border border-border/30 bg-background/50 p-8 transition-colors hover:border-primary/30"
                  >
                    <method.icon className="mb-4 h-8 w-8 text-primary/60" />
                    <h3 className="mb-4 font-display text-xl font-medium text-foreground">
                      {method.title}
                    </h3>
                    <ul className="space-y-2">
                      {method.details.map((detail, dIndex) => (
                        <li key={dIndex} className="font-body text-sm font-light text-muted-foreground">
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Departments - MASSIVE EXTENT */}
        {contactData.departments && (
          <section className="min-h-[100vh] px-8 py-32 md:px-16 md:py-48 lg:px-24">
            <div className="mx-auto max-w-7xl">
              <span className="mb-4 block font-body text-sm font-medium uppercase tracking-[0.3em] text-primary">
                {t.detailPage?.contactDetail?.sections?.departments ?? ''}
              </span>
              <h2 className="mb-16 font-display text-4xl font-light text-foreground md:text-5xl">
                {t.detailPage?.contactDetail?.sections?.ministryDepartments ?? ''}
              </h2>
              <div className="grid gap-8 md:grid-cols-2">
                {contactData.departments.map((dept, index) => (
                  <div
                    key={index}
                    className="rounded-xl border border-border/30 bg-secondary/10 p-8 transition-colors hover:border-primary/30"
                  >
                    <h3 className="mb-3 font-display text-xl font-medium text-foreground">
                      {dept.name}
                    </h3>
                    <p className="mb-4 font-body text-sm font-light leading-relaxed text-muted-foreground">
                      {dept.description}
                    </p>
                    <ul className="space-y-1">
                      {dept.contacts.map((contact, cIndex) => (
                        <li key={cIndex} className="font-body text-xs text-primary/70">
                          {contact}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </DetailPageLayout>

      <ContactSection />
    </div>
  );
};

export default ContactDetailPage;
