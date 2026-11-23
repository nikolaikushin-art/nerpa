import { useState, useEffect, useRef } from "react";

export const useCountUp = (end: string, duration = 2000) => {
  const [display, setDisplay] = useState(end);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          // Extract numeric part
          const match = end.match(/^([^\d]*)([\d,.]+)(.*)$/);
          if (!match) {
            setDisplay(end);
            return;
          }
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
            if (isDecimal) {
              formatted = current.toFixed(1);
            } else {
              const rounded = Math.round(current);
              formatted = hasCommas ? rounded.toLocaleString() : String(rounded);
            }
            setDisplay(`${prefix}${formatted}${suffix}`);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setDisplay(end);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return { ref, display };
};
