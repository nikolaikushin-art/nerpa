import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import MegaNavigationV2 from '@/minerals-portal/components/MegaNavigationV2';
import ContactSection from '@/minerals-portal/components/ContactSection';
import DetailPageLayout from '@/minerals-portal/components/DetailPageLayout';
import NotFound from '@/minerals-portal/pages/NotFound';
import { timelineDatabase } from '@/minerals-portal/data/timelineDatabase';
import { useLanguage } from '@/minerals-portal/contexts/LanguageContext';
import { translateTimelineContent } from '@/minerals-portal/lib/i18n/timelineTranslations';
import { DataVisualization, ComparisonTable } from '@/minerals-portal/components/DataVisualization';
import { FileText, CheckCircle, Target, Settings } from 'lucide-react';
import { getVisualsByCategory } from '@/minerals-portal/data/visualLibrary';
import { getTimelineHeroImage } from '@/minerals-portal/data/heroImageRegistry';

const TimelineDetailPage = () => {
  const params = useParams();
  const { t, language } = useLanguage();
  const timelinePath = params.category || '';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [timelinePath]);

  const baseTimelineData = timelinePath ? timelineDatabase[timelinePath] : undefined;
  if (!timelinePath || !baseTimelineData || !baseTimelineData.title || !baseTimelineData.sections || !baseTimelineData.stats) {
    return <NotFound />;
  }
  const timelineData = translateTimelineContent(baseTimelineData, language, timelinePath);
  const heroImage = timelineData?.heroImage || getTimelineHeroImage(timelinePath);

  return (
    <div className="min-h-screen bg-background">
      <MegaNavigationV2 />

      <DetailPageLayout
        title={timelineData.title}
        subtitle={timelineData.subtitle}
        overview={timelineData.overview}
        stats={timelineData.stats}
        sections={timelineData.sections}
        heroImage={heroImage}
        breadcrumbs={[
          { label: t.nav.home, href: '/minerals-portal' },
          { label: t.nav.timeline, href: '/#timeline' },
          { label: timelineData.title },
        ]}
        downloadLabel={t.detailPage?.timelineDetail?.downloadLabel ?? ''}
        statsLabel={t.detailPage?.timelineDetail?.statsLabel ?? ''}
        pageType="timeline"
        pagePath={timelinePath}
      >

        {/* Detailed Timeline - MASSIVE EXTENT */}
        {timelineData.detailedTimeline && (
          <section className="min-h-[100vh] px-8 py-32 md:px-16 md:py-48 lg:px-24 bg-secondary/10">
            <div className="mx-auto max-w-4xl">
              <span className="mb-4 block font-body text-sm font-medium uppercase tracking-[0.3em] text-primary">
                {t.detailPage?.timelineDetail?.sections?.historicalRecord ?? ''}
              </span>
              <h2 className="mb-16 font-display text-4xl font-light text-foreground md:text-5xl">
                {t.detailPage?.timelineDetail?.sections?.detailedTimeline ?? ''}
              </h2>
              <div className="relative">
                <div className="absolute bottom-0 left-12 top-0 w-px bg-border/50 md:left-24" />
                <div className="space-y-12">
                  {timelineData.detailedTimeline.slice(0, 20).map((item, index) => (
                    <div key={index} className="flex items-start gap-8">
                      <div className="w-12 flex-shrink-0 text-right md:w-24">
                        <span className="font-display text-xl font-light text-primary">{item.year}</span>
                      </div>
                      <div className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full border-2 border-primary bg-background" />
                      <div className="flex-1">
                        <h3 className="mb-1 font-display text-lg font-medium text-foreground">{item.event}</h3>
                        <p className="font-body text-sm font-light text-foreground/70 mb-4">{item.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Milestones - MASSIVE EXTENT */}
        {timelineData.milestones && (
          <section className="min-h-[100vh] px-8 py-32 md:px-16 md:py-48 lg:px-24">
            <div className="mx-auto max-w-7xl">
              <span className="mb-4 block font-body text-sm font-medium uppercase tracking-[0.3em] text-primary">
                {t.detailPage?.timelineDetail?.sections?.achievements ?? ''}
              </span>
              <h2 className="mb-16 font-display text-4xl font-light text-foreground md:text-5xl">
                {t.detailPage?.timelineDetail?.sections?.keyMilestones ?? ''}
              </h2>
              <div className="grid gap-8 md:grid-cols-2">
                {timelineData.milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className="rounded-xl border border-border/30 bg-secondary/10 p-8 transition-colors hover:border-primary/30 overflow-hidden"
                  >
                    <div className="mb-4 font-display text-3xl font-light text-primary">
                      {milestone.year}
                    </div>
                    <h3 className="mb-3 font-display text-xl font-medium text-foreground">
                      {milestone.title}
                    </h3>
                    <p className="mb-4 font-body text-sm font-light leading-relaxed text-foreground">
                      {milestone.description}
                    </p>
                    <p className="font-body text-xs font-medium uppercase tracking-wider text-primary/70">
                      {t.detailPage?.timelineDetail?.sections?.impact ?? ''} {milestone.impact}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Charts Section - MASSIVE EXTENT */}
        {timelineData.charts && timelineData.charts.length > 0 && (
          <section className="min-h-[100vh] px-8 py-32 md:px-16 md:py-48 lg:px-24 bg-secondary/5">
            <div className="mx-auto max-w-7xl">
              <span className="mb-4 block font-body text-sm font-medium uppercase tracking-[0.3em] text-primary">
                {t.detailPage?.timelineDetail?.sections?.dataAnalysis ?? ''}
              </span>
              <h2 className="mb-16 font-display text-4xl font-light text-foreground md:text-5xl">
                {t.detailPage?.timelineDetail?.sections?.historicalDataVisualizations ?? ''}
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {timelineData.charts.map((chart, index) => (
                  <DataVisualization
                    key={index}
                    data={chart.data}
                    type={chart.type}
                    title={chart.title}
                    description={chart.description}
                    dataKey={chart.dataKey || 'value'}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Tables Section - MASSIVE EXTENT */}
        {timelineData.tables && timelineData.tables.length > 0 && (
          <section className="min-h-[100vh] px-8 py-32 md:px-16 md:py-48 lg:px-24 bg-secondary/10">
            <div className="mx-auto max-w-7xl">
              <span className="mb-4 block font-body text-sm font-medium uppercase tracking-[0.3em] text-primary">
                {t.detailPage?.timelineDetail?.sections?.comparativeAnalysis ?? ''}
              </span>
              <h2 className="mb-16 font-display text-4xl font-light text-foreground md:text-5xl">
                {t.detailPage?.timelineDetail?.sections?.dataTablesComparisons ?? ''}
              </h2>
              <div className="space-y-12">
                {timelineData.tables.map((table, index) => (
                  <ComparisonTable
                    key={index}
                    title={table.title}
                    headers={table.headers}
                    rows={table.rows}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Facts, Features, Factors, Functions - MASSIVE EXTENT */}
        {(timelineData.facts || timelineData.features || timelineData.factors || timelineData.functions) && (
          <section className="min-h-[100vh] px-8 py-32 md:px-16 md:py-48 lg:px-24 bg-secondary/5">
            <div className="mx-auto max-w-7xl">
              <span className="mb-4 block font-body text-sm font-medium uppercase tracking-[0.3em] text-primary">
                {t.detailPage?.timelineDetail?.sections?.comprehensiveInformation ?? ''}
              </span>
              <h2 className="mb-16 font-display text-4xl font-light text-foreground md:text-5xl">
                {t.detailPage?.timelineDetail?.sections?.keyInformationCategories ?? ''}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {timelineData.facts && timelineData.facts.map((factSection, index) => (
                  <div key={`facts-${index}`} className="p-8 rounded-xl border border-border/30 bg-background/50">
                    <div className="flex items-center gap-3 mb-6">
                      <FileText className="h-6 w-6 text-primary" />
                      <h3 className="text-2xl font-display font-semibold text-foreground">{factSection.title}</h3>
                    </div>
                    <ul className="space-y-3">
                      {factSection.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <span className="text-primary mt-1">•</span>
                          <span className="font-body text-foreground leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                {timelineData.features && timelineData.features.map((featureSection, index) => (
                  <div key={`features-${index}`} className="p-8 rounded-xl border border-border/30 bg-background/50">
                    <div className="flex items-center gap-3 mb-6">
                      <CheckCircle className="h-6 w-6 text-primary" />
                      <h3 className="text-2xl font-display font-semibold text-foreground">{featureSection.title}</h3>
                    </div>
                    <ul className="space-y-3">
                      {featureSection.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <span className="text-primary mt-1">•</span>
                          <span className="font-body text-foreground leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                {timelineData.factors && timelineData.factors.map((factorSection, index) => (
                  <div key={`factors-${index}`} className="p-8 rounded-xl border border-border/30 bg-background/50">
                    <div className="flex items-center gap-3 mb-6">
                      <Target className="h-6 w-6 text-primary" />
                      <h3 className="text-2xl font-display font-semibold text-foreground">{factorSection.title}</h3>
                    </div>
                    <ul className="space-y-3">
                      {factorSection.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <span className="text-primary mt-1">•</span>
                          <span className="font-body text-foreground leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                {timelineData.functions && timelineData.functions.map((functionSection, index) => (
                  <div key={`functions-${index}`} className="p-8 rounded-xl border border-border/30 bg-background/50">
                    <div className="flex items-center gap-3 mb-6">
                      <Settings className="h-6 w-6 text-primary" />
                      <h3 className="text-2xl font-display font-semibold text-foreground">{functionSection.title}</h3>
                    </div>
                    <ul className="space-y-3">
                      {functionSection.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <span className="text-primary mt-1">•</span>
                          <span className="font-body text-foreground leading-relaxed">{item}</span>
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

export default TimelineDetailPage;
