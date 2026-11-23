import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface FullScreenSectionProps {
  children: ReactNode;
  backgroundImage?: string;
  dark?: boolean;
}

export const FullScreenSection = ({ children, backgroundImage, dark = true }: FullScreenSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <motion.section
      ref={ref}
      style={{ opacity }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {backgroundImage && (
        <motion.div style={{ y }} className="absolute inset-0">
          <img
            src={backgroundImage}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 ${dark ? 'bg-gradient-to-b from-background/95 via-background/85 to-background' : 'bg-gradient-to-b from-background/60 via-background/40 to-background/80'}`}></div>
        </motion.div>
      )}
      
      <motion.div
        style={{ scale }}
        className="relative z-10 w-full"
      >
        {children}
      </motion.div>
    </motion.section>
  );
};
