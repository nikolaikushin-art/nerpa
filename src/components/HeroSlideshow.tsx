import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";
import { slides } from "@/data/heroSlides";

interface HeroSlideshowProps {
  tagline?: string;
  title: string;
  subtitle?: string;
}

const heroStats = [
  { end: "$75B+", label: "Investment Target" },
  { end: "2M+", label: "Jobs Created" },
  { end: "34", label: "Provinces" },
  { end: "15GW", label: "Energy Capacity" },
];

const AnimatedStat = ({ end, label }: { end: string; label: string }) => {
  const { ref, display } = useCountUp(end, 2500);
  return (
    <div ref={ref} className="text-center">
      <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">{display}</p>
      <p className="text-[10px] md:text-xs text-white/60 uppercase tracking-wider mt-1">{label}</p>
    </div>
  );
};

export const HeroSlideshow = ({ tagline, title, subtitle }: HeroSlideshowProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const statsY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section ref={sectionRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
          style={{ y: bgY }}
        >
          <img src={slides[currentSlide].image} alt={slides[currentSlide].title} className="w-full h-[120%] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </motion.div>
      </AnimatePresence>

      <button onClick={prevSlide} className="absolute left-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all" aria-label="Previous slide">
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button onClick={nextSlide} className="absolute right-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all" aria-label="Next slide">
        <ChevronRight className="w-6 h-6" />
      </button>

      <motion.div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12" style={{ y: contentY, opacity }}>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} className="max-w-5xl">
          {tagline && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.3 }} className="text-primary text-sm md:text-base font-medium mb-6 tracking-[0.2em] uppercase">
              {tagline}
            </motion.p>
          )}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 tracking-tight leading-[0.95]">{title}</h1>
          {subtitle && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} className="text-xl md:text-2xl lg:text-3xl text-white/90 font-light max-w-4xl leading-relaxed">
              {subtitle}
            </motion.p>
          )}

          <AnimatePresence mode="wait">
            <motion.div key={currentSlide} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }} className="mt-12 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 max-w-lg">
              <h3 className="text-xl font-semibold text-white mb-2">{slides[currentSlide].title}</h3>
              <p className="text-white/70">{slides[currentSlide].subtitle}</p>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Animated Stats Bar with Parallax */}
      <motion.div
        className="absolute bottom-32 left-0 right-0 z-20"
        style={{ y: statsY }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 p-4 md:p-6 rounded-2xl bg-black/30 backdrop-blur-md border border-white/10"
          >
            {heroStats.map((stat) => (
              <AnimatedStat key={stat.label} end={stat.end} label={stat.label} />
            ))}
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 ${index === currentSlide ? "w-8 h-1.5 bg-primary rounded-full" : "w-1.5 h-1.5 bg-white/30 rounded-full hover:bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute bottom-14 left-0 right-0 h-0.5 bg-white/10">
        <motion.div key={currentSlide} initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 5, ease: "linear" }} className="h-full bg-primary" />
      </div>

      <motion.div className="absolute bottom-4 left-1/2 transform -translate-x-1/2" animate={{ y: [0, 12, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
        <ChevronDown className="w-8 h-8 text-white/60" />
      </motion.div>
    </section>
  );
};
