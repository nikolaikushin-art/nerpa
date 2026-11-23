import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import MegaNavigationV2 from '@/minerals-portal/components/MegaNavigationV2';
import ContactSection from '@/minerals-portal/components/ContactSection';
import DetailPageLayout from '@/minerals-portal/components/DetailPageLayout';
import NotFound from '@/minerals-portal/pages/NotFound';
import { provinceDatabase } from '@/minerals-portal/data/provinceDatabase';
import { useLanguage } from '@/minerals-portal/contexts/LanguageContext';
import { translateProvinceContent } from '@/minerals-portal/lib/i18n/detailPageTranslations';
import { getVisualsByCategory } from '@/minerals-portal/data/visualLibrary';
import { getProvinceHeroImage } from '@/minerals-portal/data/heroImageRegistry';

const ProvinceDetailPage = () => {
  const params = useParams();
  const provinceName = params.province || '';
  const { t, language } = useLanguage();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [provinceName]);

  const baseData = provinceName ? provinceDatabase[provinceName] : undefined;
  if (!provinceName || !baseData || !baseData.name || !baseData.overview) {
    return <NotFound />;
  }
  const provinceData = translateProvinceContent(baseData, language, provinceName);

  // Province sections have 'image' field, which DetailPageLayout supports directly
  const sections = provinceData.sections;

  return (
    <div className="min-h-screen bg-background">
      <MegaNavigationV2 />

      <DetailPageLayout
        title={`${provinceData.name} ${t.provinces.title.split(' ')[0]}`}
        subtitle={provinceData.subtitle}
        overview={provinceData.overview}
        stats={provinceData.stats}
        sections={sections as any}
        heroImage={provinceData.heroImage || getProvinceHeroImage(provinceName)}
        breadcrumbs={[
          { label: t.nav.home, href: '/minerals-portal' },
          { label: t.nav.provinces, href: '/#provinces' },
          { label: provinceData.name },
        ]}
        downloadLabel={t.provinceDetail.downloadBrief}
        overviewTitle={t.provinceDetail.resourceProfile}
        statsLabel={t.provinceDetail.provincialStatistics}
        highlights={[
          t.provinceDetail.highlights.richPotential,
          t.provinceDetail.highlights.strategicOpportunities,
          t.provinceDetail.highlights.investmentReady,
          t.provinceDetail.highlights.infrastructurePlans,
        ]}
        pageType="province"
        pagePath={provinceName}
      >
        {/* Minerals - MASSIVE EXTENT */}
        {provinceData.minerals && provinceData.minerals.length > 0 && (
          <section className="min-h-[100vh] px-8 py-32 md:px-16 md:py-48 lg:px-24 bg-secondary/10">
            <div className="mx-auto max-w-7xl">
              <span className="mb-4 block font-body text-sm font-medium uppercase tracking-[0.3em] text-primary">
                {t.provinceDetail.mineralResources}
              </span>
              <h2 className="mb-16 font-display text-4xl font-light text-foreground md:text-5xl">
                {t.provinceDetail.keyDeposits}
              </h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {provinceData.minerals.map((mineral, index) => (
                  <div
                    key={index}
                    className="rounded-xl border border-border/30 bg-background/50 p-8 transition-colors hover:border-primary/30"
                  >
                    <h3 className="mb-3 font-display text-xl font-medium text-foreground">
                      {mineral.name}
                    </h3>
                    <p className="font-body text-sm font-light leading-relaxed text-muted-foreground">
                      {mineral.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Investment Opportunities - MASSIVE EXTENT */}
        {provinceData.investmentOpportunities && provinceData.investmentOpportunities.length > 0 && (
          <section className="min-h-[100vh] px-8 py-32 md:px-16 md:py-48 lg:px-24">
            <div className="mx-auto max-w-7xl">
              <span className="mb-4 block font-body text-sm font-medium uppercase tracking-[0.3em] text-primary">
                {t.provinceDetail.opportunities}
              </span>
              <h2 className="mb-16 font-display text-4xl font-light text-foreground md:text-5xl">
                {t.provinceDetail.investmentOpportunities}
              </h2>
              <div className="grid gap-8 md:grid-cols-2">
                {provinceData.investmentOpportunities.map((opp, index) => (
                  <div
                    key={index}
                    className="rounded-xl border border-border/30 bg-secondary/10 p-8 transition-colors hover:border-primary/30"
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="font-display text-xl font-medium text-foreground">
                        {opp.title}
                      </h3>
                      <span className="rounded-full bg-primary/10 px-3 py-1 font-body text-xs font-medium text-primary">
                        {opp.status}
                      </span>
                    </div>
                    <p className="mb-4 font-body text-sm font-light leading-relaxed text-muted-foreground">
                      {opp.description}
                    </p>
                    <div className="font-display text-2xl font-light text-primary">
                      {opp.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Timeline - MASSIVE EXTENT */}
        {provinceData.timeline && provinceData.timeline.length > 0 && (
          <section className="min-h-[100vh] px-8 py-32 md:px-16 md:py-48 lg:px-24 bg-secondary/10">
            <div className="mx-auto max-w-4xl">
              <span className="mb-4 block font-body text-sm font-medium uppercase tracking-[0.3em] text-primary">
                {t.provinceDetail.developmentTimeline}
              </span>
              <h2 className="mb-16 font-display text-4xl font-light text-foreground md:text-5xl">
                {t.provinceDetail.keyMilestones}
              </h2>
              <div className="space-y-8">
                {provinceData.timeline.map((item, index) => (
                  <div key={index} className="flex items-start gap-8">
                    <div className="flex-shrink-0 text-right">
                      <span className="font-display text-2xl font-light text-primary">{item.year}</span>
                    </div>
                    <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                    <p className="font-body text-base font-light text-muted-foreground">{item.event}</p>
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

export default ProvinceDetailPage;
