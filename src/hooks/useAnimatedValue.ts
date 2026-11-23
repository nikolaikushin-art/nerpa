import { useState, useEffect, useRef } from "react";

export const useAnimatedValue = (endValue: string, duration = 1800) => {
  const [display, setDisplay] = useState("0");
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const match = endValue.match(/^([^\d]*)([\d,.]+)(.*)$/);
          if (!match) { setDisplay(endValue); return; }
          const prefix = match[1];
          const numStr = match[2].replace(/,/g, "");
          const suffix = match[3];
          const target = parseFloat(numStr);
          const isDecimal = numStr.includes(".");
          const hasCommas = match[2].includes(",");
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = target * eased;
            let formatted: string;
            if (isDecimal) formatted = current.toFixed(1);
            else {
              const rounded = Math.round(current);
              formatted = hasCommas ? rounded.toLocaleString() : String(rounded);
            }
            setDisplay(`${prefix}${formatted}${suffix}`);
            if (progress < 1) requestAnimationFrame(animate);
            else setDisplay(endValue);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [endValue, duration, hasAnimated]);

  return { ref, display };
};
