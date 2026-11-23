import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/minerals-portal/components/ui/button';
import { LucideIcon } from 'lucide-react';
import { useLanguage } from '@/minerals-portal/contexts/LanguageContext';
import { getSectionImage } from '@/minerals-portal/data/sectionImageRegistry';

interface Stat {
  value: string;
  label: string;
  description: string;
}

interface Section {
  title: string;
  content: string;
  icon?: LucideIcon;
  image?: string;
  alignment: 'left' | 'right';
}

interface GalleryImage {
  src: string;
  alt: string;
  title: string;
  description: string;
}

interface DetailPageLayoutProps {
  title: string;
  subtitle: string;
  overview: string;
  stats: Stat[];
  sections: Section[];
  heroImage: string;
  breadcrumbs: { label: string; href?: string }[];
  downloadLabel?: string;
  overviewTitle?: string;
  statsLabel?: string;
  highlights?: string[];
  galleryImages?: GalleryImage[];
  pageType?: 'mineral' | 'operations' | 'province' | 'timeline' | 'investment';
  pagePath?: string;
  children?: React.ReactNode;
}

const GALLERY_PAGE = 48;

const GallerySection = ({ images, t }: { images: GalleryImage[]; t: any }) => {
  const [visible, setVisible] = useState(GALLERY_PAGE);
  const shown = images.slice(0, visible);
  const hasMore = visible < images.length;

  return (
    <section className="min-h-[80vh] px-6 py-24 md:px-12 md:py-32 lg:px-20 bg-secondary/10">
      <div className="mx-auto max-w-[1800px]">
        <span className="mb-3 block font-body text-xs font-medium uppercase tracking-[0.3em] text-primary">
          {images.length}+ Visual Assets
        </span>
        <h2 className="mb-8 font-display text-4xl font-light text-foreground md:text-5xl">
          {(t.detailPage as any)?.projectImagery || 'Project Imagery'}
        </h2>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8">
          {shown.map((img, index) => (
            <div key={index} className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-border/20 hover:border-primary/40 transition-all cursor-pointer hover:shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
              <img src={img.src} alt={img.alt} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              <div className="absolute bottom-0 left-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <p className="font-body text-[10px] font-semibold text-white truncate">{img.title}</p>
                <p className="font-body text-[8px] text-white/70 truncate">{img.description}</p>
              </div>
            </div>
          ))}
        </div>
        {hasMore && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setVisible(prev => prev + GALLERY_PAGE)}
              className="rounded-full border border-primary/30 bg-primary/5 px-8 py-3 font-body text-sm font-medium text-primary transition-all hover:bg-primary hover:text-primary-foreground"
            >
              Load More ({Math.min(GALLERY_PAGE, images.length - visible)} more visuals)
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

const DetailPageLayout = ({
  title,
  subtitle,
  overview,
  stats,
  sections,
  heroImage,
  breadcrumbs,
  downloadLabel,
  overviewTitle,
  statsLabel,
  highlights,
  galleryImages,
  pageType,
  pagePath,
  children,
}: DetailPageLayoutProps) => {
  const { t } = useLanguage();
  
  const defaultDownloadLabel = downloadLabel || t.detailPage.downloadReport;
  const defaultOverviewTitle = overviewTitle || t.detailPage.strategicOverview;
  const defaultStatsLabel = statsLabel || t.detailPage.keyMetrics;
  
  return (
    <>
      {/* Hero Section - MASSIVE EXTENT */}
      <section className="relative min-h-[95vh] w-full overflow-hidden pt-48">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />

        <div className="relative z-10 flex min-h-[85vh] flex-col justify-end px-8 pb-24 md:px-16 lg:px-24">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <ChevronRight className="h-4 w-4" />}
                {crumb.href ? (
                  <Link to={crumb.href} className="transition-colors hover:text-primary">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-primary">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>

          <span className="mb-4 block font-body text-sm font-medium uppercase tracking-[0.3em] text-primary">
            {subtitle}
          </span>

          <h1 className="max-w-5xl font-body text-5xl font-extralight leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl xl:text-8xl">
            {title}
          </h1>

          <div className="my-8 h-px w-48 bg-foreground/30" />

          <div className="flex flex-wrap gap-4">
            <Link to="/minerals-portal">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                {t.detailPage.backToHome}
              </Button>
            </Link>
            <Button className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
              <FileText className="h-4 w-4" />
              {defaultDownloadLabel}
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section - MASSIVE EXTENT */}
      <section className="min-h-[80vh] px-8 py-32 md:px-16 md:py-48 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <span className="mb-4 block font-body text-sm font-medium uppercase tracking-[0.3em] text-primary">
              {defaultStatsLabel}
            </span>
            <h2 className="font-display text-4xl font-light text-foreground md:text-5xl">
              {t.detailPage.byTheNumbers}
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-12 md:grid-cols-3 lg:grid-cols-4 lg:gap-16">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="mb-3 font-display text-4xl font-light tracking-tight text-primary md:text-5xl lg:text-6xl">
                  {stat.value}
                </div>
                <div className="mb-1 font-body text-base font-medium text-foreground">
                  {stat.label}
                </div>
                <div className="font-body text-sm font-light text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Section - MASSIVE EXTENT */}
      <section className="min-h-[100vh] px-8 py-32 md:px-16 md:py-48 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className={`grid items-start gap-16 ${highlights && highlights.length > 0 ? 'lg:grid-cols-12' : 'lg:grid-cols-1'}`}>
            <div className={highlights && highlights.length > 0 ? 'lg:col-span-8' : 'lg:col-span-1'}>
              <span className="mb-4 block font-body text-sm font-medium uppercase tracking-[0.3em] text-primary">
                {t.detailPage.comprehensiveOverview}
              </span>
              {defaultOverviewTitle && (
                <h2 className="mb-12 font-display text-4xl font-light text-foreground md:text-5xl">
                  {defaultOverviewTitle}
                </h2>
              )}

              <div className="space-y-6">
                {overview
                  .split('\n\n')
                  .filter((p) => !p.startsWith('[ULTRA-DEEP') && !p.startsWith('[COMPREHENSIVE') && !p.startsWith('[DIRECT') && !p.startsWith('Comprehensive Overview Part') && !p.startsWith('[HISTORICAL') && !p.startsWith('[EVIDENCE') && p.trim().length > 0 && p.trim().length < 2000)
                  .slice(0, 3)
                  .map((paragraph, index) => (
                    <p
                      key={index}
                      className="font-body text-lg font-light leading-relaxed text-muted-foreground"
                    >
                      {paragraph}
                    </p>
                  ))}
              </div>
            </div>

            {highlights && highlights.length > 0 && (
              <div className="lg:col-span-4">
                <div className="sticky top-32 rounded-xl border border-border/50 bg-secondary/20 p-8">
                  <h3 className="mb-6 flex items-center gap-2 font-display text-xl font-medium text-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    {t.detailPage.keyHighlights}
                  </h3>
                  <ul className="space-y-4">
                    {highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        <span className="font-body text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Content Sections - MASSIVE EXTENT: min 100vh per section */}
      {sections.map((section, index) => (
        <section
          key={index}
          className={`relative min-h-[100vh] px-8 py-32 md:px-16 md:py-48 lg:px-24 ${
            index % 2 === 0 ? 'bg-secondary/10' : ''
          }`}
        >
          <div className="mx-auto max-w-7xl">
            <div
              className={`grid items-center gap-16 lg:grid-cols-2 ${
                section.alignment === 'right' ? '' : ''
              }`}
            >
              <div className={section.alignment === 'right' ? 'lg:order-2' : ''}>
                <span className="mb-4 block font-body text-xs font-medium uppercase tracking-[0.3em] text-primary">
                  {t.detailPage.section} {String(index + 1).padStart(2, '0')}
                </span>
                <h2 className="mb-8 font-display text-3xl font-light leading-tight text-foreground md:text-4xl lg:text-5xl">
                  {section.title}
                </h2>
                <div className="space-y-6">
                  {section.content
                    .split('\n\n')
                    .filter((p) => p.trim().length > 0 && !p.startsWith('[COMPREHENSIVE') && !p.startsWith('[ULTRA-DEEP') && !p.startsWith('[DIRECT') && !p.startsWith('[HISTORICAL') && !p.startsWith('[EVIDENCE') && !p.startsWith('Comprehensive Overview') && p.trim().length < 2000)
                    .slice(0, 4)
                    .map((paragraph, pIndex) => (
                      <p
                        key={pIndex}
                        className="font-body text-base font-light leading-relaxed text-muted-foreground"
                      >
                        {paragraph}
                      </p>
                    ))}
                </div>
              </div>

              <div className={section.alignment === 'right' ? 'lg:order-1' : ''}>
                {(() => {
                  const imgSrc = section.image || (pageType && pagePath ? getSectionImage(pageType, pagePath, index) : null);
                  return imgSrc ? (
                    <div className="aspect-[4/3] overflow-hidden rounded-xl border border-border/30">
                      <img src={imgSrc} alt={section.title} className="h-full w-full object-cover" loading="lazy" />
                    </div>
                  ) : (
                    <div className="flex aspect-[4/3] items-center justify-center rounded-xl border border-border/30 bg-secondary/20">
                      {section.icon && <section.icon className="h-24 w-24 text-primary/20" />}
                    </div>
                  );
                })()}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Visual Gallery Section — supports 200+ images with load more */}
      {galleryImages && galleryImages.length > 0 && (
        <GallerySection images={galleryImages} t={t} />
      )}

      {/* Additional Content */}
      {children}
    </>
  );
};

export default DetailPageLayout;
