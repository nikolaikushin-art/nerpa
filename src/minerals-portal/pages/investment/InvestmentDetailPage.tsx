import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import MegaNavigationV2 from '@/minerals-portal/components/MegaNavigationV2';
import ContactSection from '@/minerals-portal/components/ContactSection';
import DetailPageLayout from '@/minerals-portal/components/DetailPageLayout';
import NotFound from '@/minerals-portal/pages/NotFound';
import { investmentDatabase } from '@/minerals-portal/data/investmentDatabase';
import { useLanguage } from '@/minerals-portal/contexts/LanguageContext';
import { translateInvestmentContent } from '@/minerals-portal/lib/i18n/detailPageTranslations';

const frameworkHero = 'https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/investment/framework-hero.jpg';
const opportunitiesHero = 'https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/investment/opportunities-hero.jpg';
const partnershipsHero = 'https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/investment/partnerships-hero.jpg';
const incentivesHero = 'https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/investment/incentives-hero.jpg';
const riskHero = 'https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/investment/risk-management-hero.jpg';
const partnersHero = 'https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/investment/partners-hero.jpg';
const processHero = 'https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/investment/process-hero.jpg';
const statisticsHero = 'https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/investment/statistics-hero.jpg';
const dueDiligenceHero = 'https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/investment/due-diligence-hero.jpg';
const fiscalHero = 'https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/investment/fiscal-terms-hero.jpg';
const environmentalHero = 'https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/investment/environmental-hero.jpg';
const workforceHero = 'https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/investment/workforce-hero.jpg';
const infrastructureHero = 'https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/investment/infrastructure-hero.jpg';
const disputeHero = 'https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/investment/dispute-hero.jpg';
const technologyHero = 'https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/investment/technology-hero.jpg';
const communityHero = 'https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/investment/community-hero.jpg';

const investmentHeroImages: Record<string, string> = {
  'framework': frameworkHero,
  'opportunities': opportunitiesHero,
  'partnerships': partnershipsHero,
  'incentives': incentivesHero,
  'risk-management': riskHero,
  'partners': partnersHero,
  'process': processHero,
  'statistics': statisticsHero,
  'due-diligence': dueDiligenceHero,
  'fiscal-terms': fiscalHero,
  'environmental-compliance': environmentalHero,
  'workforce-development': workforceHero,
  'infrastructure-support': infrastructureHero,
  'dispute-resolution': disputeHero,
  'technology-innovation': technologyHero,
  'community-benefit': communityHero,
};

const InvestmentDetailPage = () => {
  const params = useParams();
  const { t, language } = useLanguage();
  const investmentPath = params.category || '';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [investmentPath]);

  const baseData = investmentPath ? investmentDatabase[investmentPath] : undefined;
  if (!investmentPath || !baseData || !baseData.title || !baseData.overview) {
    return <NotFound />;
  }
  const investmentData = translateInvestmentContent(baseData, language, investmentPath);

  return (
    <div className="min-h-screen bg-background">
      <MegaNavigationV2 />

      <DetailPageLayout
        title={investmentData.title}
        subtitle={investmentData.subtitle}
        overview={investmentData.overview}
        stats={investmentData.stats}
        sections={investmentData.sections}
        heroImage={investmentHeroImages[investmentPath] || frameworkHero}
        breadcrumbs={[
          { label: t.nav.home, href: '/minerals-portal' },
          { label: t.nav.investment, href: '/#investment' },
          { label: investmentData.title },
        ]}
        downloadLabel={t.detailPage?.investmentDetail?.downloadLabel ?? ''}
        overviewTitle={t.detailPage?.investmentDetail?.overviewTitle ?? ''}
        statsLabel={t.detailPage?.investmentDetail?.statsLabel ?? ''}
        highlights={[
          t.detailPage?.investmentDetail?.highlights?.investorFriendly ?? '',
          t.detailPage?.investmentDetail?.highlights?.transparentProcedures ?? '',
          t.detailPage?.investmentDetail?.highlights?.arbitrationAccess ?? '',
          t.detailPage?.investmentDetail?.highlights?.environmentalStandards ?? '',
        ]}
        pageType="investment"
        pagePath={investmentPath}
      >
        {/* Process Steps - MASSIVE EXTENT */}
        {investmentData.processSteps && (
          <section className="min-h-[100vh] px-8 py-32 md:px-16 md:py-48 lg:px-24 bg-secondary/10">
            <div className="mx-auto max-w-4xl">
              <span className="mb-4 block font-body text-sm font-medium uppercase tracking-[0.3em] text-primary">
                {t.detailPage?.investmentDetail?.sections?.investmentProcess ?? ''}
              </span>
              <h2 className="mb-16 font-display text-4xl font-light text-foreground md:text-5xl">
                {t.detailPage?.investmentDetail?.sections?.stepsToInvestment ?? ''}
              </h2>
              <div className="space-y-12">
                {investmentData.processSteps.map((step, index) => (
                  <div key={index} className="flex gap-8">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 font-display text-xl font-light text-primary">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                    </div>
                    <div>
                      <h3 className="mb-2 font-display text-2xl font-light text-foreground">
                        {step.title}
                      </h3>
                      <p className="font-body text-base font-light leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Benefits - MASSIVE EXTENT */}
        {investmentData.benefits && (
          <section className="min-h-[100vh] px-8 py-32 md:px-16 md:py-48 lg:px-24">
            <div className="mx-auto max-w-7xl">
              <span className="mb-4 block font-body text-sm font-medium uppercase tracking-[0.3em] text-primary">
                {t.detailPage?.investmentDetail?.sections?.investmentBenefits ?? ''}
              </span>
              <h2 className="mb-16 font-display text-4xl font-light text-foreground md:text-5xl">
                {t.detailPage?.investmentDetail?.sections?.whyInvest ?? ''}
              </h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {investmentData.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="rounded-xl border border-border/30 bg-secondary/10 p-8 transition-colors hover:border-primary/30"
                  >
                    <benefit.icon className="mb-4 h-8 w-8 text-primary/60" />
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

export default InvestmentDetailPage;
