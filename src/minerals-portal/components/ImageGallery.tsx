// Ultra-Deep Image Gallery Component with Lightbox, Zoom, and Carousel
import { useState } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight, Download, Maximize2 } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/minerals-portal/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/minerals-portal/components/ui/carousel';
import { Button } from '@/minerals-portal/components/ui/button';
import { useLanguage } from '@/minerals-portal/contexts/LanguageContext';

interface ImageItem {
  src: string;
  alt: string;
  title?: string;
  description?: string;
  category?: string;
}

interface ImageGalleryProps {
  images: ImageItem[];
  title?: string;
  columns?: 2 | 3 | 4;
  showTitle?: boolean;
}

export const ImageGallery = ({ images, title, columns = 3, showTitle = true }: ImageGalleryProps) => {
  const { t } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(100);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    setIsOpen(true);
    setZoomLevel(100);
  };

  const nextImage = () => {
    setSelectedIndex((prev) => (prev + 1) % images.length);
    setZoomLevel(100);
  };

  const prevImage = () => {
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
    setZoomLevel(100);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'Escape') setIsOpen(false);
    if (e.key === '+' || e.key === '=') setZoomLevel((prev) => Math.min(prev + 10, 200));
    if (e.key === '-') setZoomLevel((prev) => Math.max(prev - 10, 50));
  };

  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <>
      {showTitle && title && (
        <div className="mb-8 text-center">
          <h3 className="text-3xl font-display font-light text-foreground mb-2">{title}</h3>
          <p className="font-body text-muted-foreground">{t.imageGallery?.clickToView || 'Click any image to view in full screen'}</p>
        </div>
      )}

      {/* Image Grid */}
      <div className={`grid grid-cols-1 ${gridCols[columns]} gap-4 mb-8`}>
        {images.map((image, index) => (
          <div
            key={index}
            className="group relative aspect-video overflow-hidden rounded-xl border border-border/50 hover:border-primary/50 transition-all cursor-pointer hover:shadow-xl"
            onClick={() => openLightbox(index)}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
              <div className="p-3 rounded-full bg-primary/90 backdrop-blur-sm">
                <ZoomIn className="h-6 w-6 text-primary-foreground" />
              </div>
            </div>
            {image.title && (
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <p className="font-display text-sm font-semibold text-white">{image.title}</p>
                {image.description && (
                  <p className="font-body text-xs text-white/80 mt-1">{image.description}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent
          className="max-w-7xl w-full h-[90vh] p-0 bg-black/95 border-none"
          onKeyDown={handleKeyDown}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-50 text-white hover:bg-white/20"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Navigation Buttons */}
            {images.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 z-50 text-white hover:bg-white/20"
                  onClick={prevImage}
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 z-50 text-white hover:bg-white/20"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>
              </>
            )}

            {/* Image Counter */}
            {images.length > 1 && (
              <div className="absolute top-4 left-4 z-50 px-4 py-2 bg-black/60 backdrop-blur-sm rounded-full">
                <span className="font-body text-sm text-white">
                  {selectedIndex + 1} / {images.length}
                </span>
              </div>
            )}

            {/* Main Image */}
            <div className="relative w-full h-full flex items-center justify-center p-8">
              <img
                src={images[selectedIndex]?.src}
                alt={images[selectedIndex]?.alt}
                className="max-w-full max-h-full object-contain transition-transform duration-300"
                style={{ transform: `scale(${zoomLevel / 100})` }}
              />
            </div>

            {/* Image Info */}
            {(images[selectedIndex]?.title || images[selectedIndex]?.description) && (
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                <h4 className="font-display text-xl font-semibold text-white mb-2">
                  {images[selectedIndex]?.title}
                </h4>
                {images[selectedIndex]?.description && (
                  <p className="font-body text-sm text-white/80">
                    {images[selectedIndex]?.description}
                  </p>
                )}
              </div>
            )}

            {/* Zoom Controls */}
            <div className="absolute bottom-4 right-4 z-50 flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20"
                onClick={() => setZoomLevel((prev) => Math.max(prev - 10, 50))}
              >
                <span className="text-lg">-</span>
              </Button>
              <div className="px-4 py-2 bg-black/60 backdrop-blur-sm rounded-full flex items-center">
                <span className="font-body text-sm text-white">{zoomLevel}%</span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20"
                onClick={() => setZoomLevel((prev) => Math.min(prev + 10, 200))}
              >
                <span className="text-lg">+</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20"
                onClick={() => setZoomLevel(100)}
              >
                <Maximize2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

// Image Comparison Slider Component
interface ImageComparisonProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export const ImageComparison = ({ beforeImage, afterImage, beforeLabel = 'Before', afterLabel = 'After' }: ImageComparisonProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percent)));
  };

  return (
    <div
      className="relative w-full aspect-video rounded-xl overflow-hidden border border-border/50 cursor-col-resize group"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setSliderPosition(50)}
    >
      {/* Before Image */}
      <img
        src={beforeImage}
        alt="Before"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* After Image */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={afterImage}
          alt="After"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Slider Line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-primary shadow-lg z-10"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary border-4 border-white shadow-xl flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-white" />
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 px-4 py-2 bg-black/60 backdrop-blur-sm rounded-full">
        <span className="font-body text-sm font-semibold text-white">{beforeLabel}</span>
      </div>
      <div className="absolute top-4 right-4 px-4 py-2 bg-black/60 backdrop-blur-sm rounded-full">
        <span className="font-body text-sm font-semibold text-white">{afterLabel}</span>
      </div>
    </div>
  );
};
