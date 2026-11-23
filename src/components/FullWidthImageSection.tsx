import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FullWidthImageSectionProps {
  backgroundImage: string;
  title: string;
  description: string;
  children?: ReactNode;
  overlay?: "dark" | "gradient" | "light";
}

export const FullWidthImageSection = ({
  backgroundImage,
  title,
  description,
  children,
  overlay = "gradient",
}: FullWidthImageSectionProps) => {
  const overlayClasses = {
    dark: "bg-background/80",
    gradient: "bg-gradient-to-t from-background via-background/60 to-background/40",
    light: "bg-background/50",
  };

  return (
    <section className="relative py-32 flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="absolute inset-0"
      >
        <img
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 ${overlayClasses[overlay]}`} />
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 py-32 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8"
        >
          {title}
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
        >
          {description}
        </motion.p>

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
};
