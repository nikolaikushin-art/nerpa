import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import MegaNavigationV2 from '@/minerals-portal/components/MegaNavigationV2';
import ContactSection from '@/minerals-portal/components/ContactSection';
import DetailPageLayout from '@/minerals-portal/components/DetailPageLayout';
import NotFound from '@/minerals-portal/pages/NotFound';
import { operationsDatabase } from '@/minerals-portal/data/operationsDatabase';
import { useLanguage } from '@/minerals-portal/contexts/LanguageContext';
import { translateOperationsContent } from '@/minerals-portal/lib/i18n/detailPageTranslations';
import { getVisualsByCategory } from '@/minerals-portal/data/visualLibrary';
import { getOperationsHeroImage } from '@/minerals-portal/data/heroImageRegistry';

const OperationsDetailPage = () => {
  const params = useParams();
  const { t, language } = useLanguage();
  const operationPath = params.operation || '';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [operationPath]);

  const baseData = operationPath ? operationsDatabase[operationPath] : undefined;
  if (!operationPath || !baseData || !baseData.title || !baseData.overview) {
    return <NotFound />;
  }
  const operationsData = translateOperationsContent(baseData, language, operationPath);

  return (
    <div className="min-h-screen bg-background">
      <MegaNavigationV2 />

      <DetailPageLayout
        title={operationsData.title}
        subtitle={operationsData.subtitle}
        overview={operationsData.overview}
        stats={operationsData.stats}
        sections={operationsData.sections}
        heroImage={getOperationsHeroImage(operationPath)}
        breadcrumbs={[
          { label: t.nav.home, href: '/minerals-portal' },
          { label: t.nav.operations, href: '/#operations' },
          { label: operationsData.title },
        ]}
        downloadLabel={t.detailPage?.operationsDetail?.downloadLabel ?? ''}
        overviewTitle={t.detailPage?.operationsDetail?.overviewTitle ?? ''}
        statsLabel={t.detailPage?.operationsDetail?.statsLabel ?? ''}
        highlights={[
          t.detailPage?.operationsDetail?.highlights?.worldClassStandards ?? '',
          t.detailPage?.operationsDetail?.highlights?.advancedTechnology ?? '',
          t.detailPage?.operationsDetail?.highlights?.safetyProtocols ?? '',
          t.detailPage?.operationsDetail?.highlights?.environmentalResponsibility ?? '',
        ]}
        pageType="operations"
        pagePath={operationPath}
      >
        {/* Process Steps - MASSIVE EXTENT */}
        {operationsData.processes && (
          <section className="min-h-[100vh] px-8 py-32 md:px-16 md:py-48 lg:px-24 bg-secondary/10">
            <div className="mx-auto max-w-4xl">
              <span className="mb-4 block font-body text-sm font-medium uppercase tracking-[0.3em] text-primary">
                {t.detailPage?.operationsDetail?.sections?.operationalProcesses ?? ''}
              </span>
              <h2 className="mb-16 font-display text-4xl font-light text-foreground md:text-5xl">
                {t.detailPage?.operationsDetail?.sections?.processFramework ?? ''}
              </h2>
              {operationsData.processes.map((process, index) => (
                <div key={index} className="mb-16 last:mb-0">
                  <h3 className="mb-8 font-display text-2xl font-light text-foreground">{process.title}</h3>
                  <div className="space-y-4">
                    {process.steps.map((step, sIndex) => (
                      <div key={sIndex} className="flex items-start gap-6">
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-primary/30 font-body text-xs font-medium text-primary">
                          {sIndex + 1}
                        </div>
                        <p className="pt-1 font-body text-base font-light text-muted-foreground">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Benefits - MASSIVE EXTENT */}
        {operationsData.benefits && (
          <section className="min-h-[100vh] px-8 py-32 md:px-16 md:py-48 lg:px-24">
            <div className="mx-auto max-w-7xl">
              <span className="mb-4 block font-body text-sm font-medium uppercase tracking-[0.3em] text-primary">
                {t.detailPage?.operationsDetail?.sections?.operationalBenefits ?? ''}
              </span>
              <h2 className="mb-16 font-display text-4xl font-light text-foreground md:text-5xl">
                {t.detailPage?.operationsDetail?.sections?.strategicAdvantages ?? ''}
              </h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {operationsData.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="rounded-xl border border-border/30 bg-secondary/10 p-8 transition-colors hover:border-primary/30"
                  >
                    <h3 className="mb-3 font-display text-xl font-medium text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="font-body text-sm font-light leading-relaxed text-muted-foreground">
                      {benefit.description}
                    </p>
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

export default OperationsDetailPage;
