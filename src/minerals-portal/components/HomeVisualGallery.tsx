import { useState, useMemo } from 'react';
import { getVisualsByCategory, VisualAsset, TOTAL_VISUAL_COUNT } from '@/minerals-portal/data/visualLibrary';
import { useLanguage } from '@/minerals-portal/contexts/LanguageContext';

const CATEGORIES = [
  { key: 'all', label: 'All Visuals' },
  { key: 'copper', label: 'Copper' },
  { key: 'lithium', label: 'Lithium' },
  { key: 'iron', label: 'Iron & Steel' },
  { key: 'gold', label: 'Gold' },
  { key: 'gemstone', label: 'Gemstones' },
  { key: 'rareearth', label: 'Rare Earth' },
  { key: 'provinces', label: 'Provinces' },
  { key: 'operations', label: 'Operations' },
  { key: 'investment', label: 'Investment' },
  { key: 'timeline', label: 'Timeline' },
  { key: 'energy', label: 'Energy' },
  { key: 'community', label: 'Community' },
  { key: 'industrial', label: 'Industrial' },
];

const PAGE_SIZE = 80;

const HomeVisualGallery = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const visuals = useMemo(() => {
    if (activeCategory === 'all') {
      // Get a mix from all categories
      const allCats = CATEGORIES.filter(c => c.key !== 'all');
      const mixed: VisualAsset[] = [];
      const perCat = Math.ceil(1000 / allCats.length);
      allCats.forEach(cat => {
        mixed.push(...getVisualsByCategory(cat.key).slice(0, perCat));
      });
      return mixed;
    }
    return getVisualsByCategory(activeCategory);
  }, [activeCategory]);

  const displayed = visuals.slice(0, visibleCount);
  const hasMore = visibleCount < visuals.length;

  return (
    <section id="visual-gallery" className="min-h-screen px-6 py-24 md:px-12 lg:px-20 bg-secondary/5">
      <div className="mx-auto max-w-[1800px]">
        {/* Header */}
        <div className="mb-8">
          <span className="mb-3 block font-body text-xs font-medium uppercase tracking-[0.3em] text-primary">
            {TOTAL_VISUAL_COUNT.toLocaleString()}+ Visual Assets
          </span>
          <h2 className="mb-4 font-display text-4xl font-light text-foreground md:text-5xl lg:text-6xl">
            Visual Gallery
          </h2>
          <p className="max-w-2xl font-body text-base font-light text-muted-foreground">
            Comprehensive visual documentation of Afghanistan's mineral wealth across all categories, provinces, and operations.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mb-8 flex flex-wrap gap-2">
          {CATEGORIES.map(cat => (
            <button
              key={cat.key}
              onClick={() => { setActiveCategory(cat.key); setVisibleCount(PAGE_SIZE); }}
              className={`rounded-full px-4 py-1.5 font-body text-xs font-medium transition-all ${
                activeCategory === cat.key
                  ? 'bg-primary text-primary-foreground'
                  : 'border border-border/50 bg-secondary/20 text-muted-foreground hover:border-primary/30 hover:text-foreground'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Count */}
        <p className="mb-6 font-body text-sm text-muted-foreground">
          Showing {displayed.length} of {visuals.length.toLocaleString()} visuals
        </p>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8">
          {displayed.map((img, index) => (
            <div
              key={`${img.category}-${index}`}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-border/20 hover:border-primary/40 transition-all cursor-pointer hover:shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <p className="font-body text-[10px] font-semibold text-white truncate">{img.title}</p>
                <p className="font-body text-[8px] text-white/70 truncate">{img.description}</p>
              </div>
              <div className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <span className="rounded-full bg-primary/80 px-1.5 py-0.5 font-body text-[7px] font-medium text-primary-foreground uppercase">
                  {img.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        {hasMore && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setVisibleCount(prev => prev + PAGE_SIZE)}
              className="rounded-full border border-primary/30 bg-primary/5 px-8 py-3 font-body text-sm font-medium text-primary transition-all hover:bg-primary hover:text-primary-foreground"
            >
              Load More ({Math.min(PAGE_SIZE, visuals.length - visibleCount)} more)
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default HomeVisualGallery;
