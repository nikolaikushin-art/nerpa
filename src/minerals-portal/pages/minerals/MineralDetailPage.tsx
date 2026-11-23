import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import MegaNavigationV2 from '@/minerals-portal/components/MegaNavigationV2';
import ContactSection from '@/minerals-portal/components/ContactSection';
import DetailPageLayout from '@/minerals-portal/components/DetailPageLayout';
import NotFound from '@/minerals-portal/pages/NotFound';
import { mineralDatabase } from '@/minerals-portal/data/mineralDatabase';
import { useLanguage } from '@/minerals-portal/contexts/LanguageContext';
import { translateMineralContent } from '@/minerals-portal/lib/i18n/mineralTranslations';
import { getVisualsByCategory, VisualAsset } from '@/minerals-portal/data/visualLibrary';
import { getMineralHeroImage } from '@/minerals-portal/data/heroImageRegistry';

const getMineralGallery = (path: string): VisualAsset[] => {
  if (path.startsWith('copper')) return getVisualsByCategory('copper').slice(0, 200);
  if (path.startsWith('lithium')) return getVisualsByCategory('lithium').slice(0, 200);
  if (path.startsWith('gems') || path.startsWith('emerald') || path.startsWith('lapis') || path.startsWith('ruby') || path.startsWith('tourmaline') || path.startsWith('aquamarine')) return getVisualsByCategory('gemstone').slice(0, 200);
  if (path.startsWith('iron')) return getVisualsByCategory('iron').slice(0, 200);
  if (path.startsWith('gold')) return getVisualsByCategory('gold').slice(0, 200);
  if (path.startsWith('ree') || path.startsWith('rare')) return getVisualsByCategory('rareearth').slice(0, 200);
  if (path.startsWith('chromite') || path.startsWith('coal') || path.startsWith('marble') || path.startsWith('talc') || path.startsWith('barite') || path.startsWith('salt') || path.startsWith('cement')) return getVisualsByCategory('industrial').slice(0, 200);
  if (path.startsWith('cobalt') || path.startsWith('nickel') || path.startsWith('lead') || path.startsWith('zinc')) return getVisualsByCategory('industrial').slice(0, 200);
  if (path.startsWith('uranium')) return getVisualsByCategory('energy').slice(0, 200);
  return getVisualsByCategory('copper').slice(0, 100);
};

const MineralDetailPage = () => {
  const params = useParams();
  const { language, t } = useLanguage();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [params.category, params.deposit]);

  const mineralPath = params.category && params.deposit ? `${params.category}/${params.deposit}` : '';
  const baseMineralData = mineralPath ? mineralDatabase[mineralPath] : undefined;

  if (!mineralPath || !baseMineralData || !baseMineralData.title || !baseMineralData.overview) {
    return <NotFound />;
  }

  const mineralData = translateMineralContent(baseMineralData, language, mineralPath);

  return (
    <div className="min-h-screen bg-background">
      <MegaNavigationV2 />

      <DetailPageLayout
        title={mineralData.title}
        subtitle={mineralData.subtitle}
        overview={mineralData.overview}
        stats={mineralData.stats}
        sections={mineralData.sections as any}
        heroImage={mineralData.heroImage || getMineralHeroImage(mineralPath)}
        breadcrumbs={[
          { label: t.nav.home, href: '/minerals-portal' },
          { label: t.nav.minerals, href: '/minerals' },
          { label: params.category || '', href: `/minerals` },
          { label: mineralData.title },
        ]}
        downloadLabel={t.detailPage?.mineralDetail?.downloadLabel ?? ''}
        overviewTitle={t.detailPage?.mineralDetail?.overviewTitle ?? ''}
        statsLabel={t.detailPage?.mineralDetail?.statsLabel ?? ''}
        highlights={[
          t.detailPage?.mineralDetail?.highlights?.worldClass ?? '',
          t.detailPage?.mineralDetail?.highlights?.exceptionalValue ?? '',
          t.detailPage?.mineralDetail?.highlights?.comprehensiveFramework ?? '',
          t.detailPage?.mineralDetail?.highlights?.sustainableCommitment ?? '',
        ]}
        pageType="mineral"
        pagePath={mineralPath}
        
      >
        {/* Detailed Sections */}
        {(mineralData as any).detailedSections && (mineralData as any).detailedSections.length > 0 && (
          <section className="min-h-[100vh] px-8 py-32 md:px-16 md:py-48 lg:px-24 bg-secondary/10">
            <div className="mx-auto max-w-4xl">
              <span className="mb-4 block font-body text-sm font-medium uppercase tracking-[0.3em] text-primary">
                {t.detailPage?.mineralDetail?.sections?.inDepthAnalysis ?? ''}
              </span>
              <h2 className="mb-16 font-display text-4xl font-light text-foreground md:text-5xl">
                {t.detailPage?.mineralDetail?.sections?.technicalDetails ?? ''}
              </h2>
              <div className="space-y-20">
                {(mineralData as any).detailedSections.map((ds: any, index: number) => (
                  <div key={index} className="min-h-[60vh]">
                    <h3 className="mb-6 font-display text-2xl font-light text-foreground">{ds.title}</h3>
                    <div className="space-y-6">
                      {ds.content
                        .split('\n\n')
                        .filter((p: string) => p.trim().length > 0 && !p.startsWith('[COMPREHENSIVE') && !p.startsWith('[ULTRA-DEEP') && !p.startsWith('[DIRECT') && !p.startsWith('[HISTORICAL') && !p.startsWith('[EVIDENCE') && p.trim().length < 2000)
                        .slice(0, 4)
                        .map((p: string, pi: number) => (
                          <p key={pi} className="font-body text-base font-light leading-relaxed text-muted-foreground">
                            {p}
                          </p>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Timeline - MASSIVE EXTENT */}
        {mineralData.timeline && mineralData.timeline.length > 0 && (
          <section className="min-h-[100vh] px-8 py-32 md:px-16 md:py-48 lg:px-24">
            <div className="mx-auto max-w-4xl">
              <span className="mb-4 block font-body text-sm font-medium uppercase tracking-[0.3em] text-primary">
                {t.detailPage?.mineralDetail?.sections?.developmentRoadmap ?? ''}
              </span>
              <h2 className="mb-16 font-display text-4xl font-light text-foreground md:text-5xl">
                {t.detailPage?.mineralDetail?.sections?.projectTimeline ?? ''}
              </h2>
              <div className="space-y-8">
                {mineralData.timeline.map((item: any, index: number) => (
                  <div key={index} className="flex items-start gap-8">
                    <div className="w-20 flex-shrink-0 text-right">
                      <span className="font-display text-xl font-light text-primary">{item.year}</span>
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

export default MineralDetailPage;
