import { motion } from "framer-motion";
import { ReactNode } from "react";

interface LargeTextSectionProps {
  title: string;
  description?: string;
  children?: ReactNode;
  backgroundImage?: string;
  alignment?: "left" | "center" | "right";
}

export const LargeTextSection = ({ 
  title, 
  description, 
  children, 
  backgroundImage,
  alignment = "left" 
}: LargeTextSectionProps) => {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end"
  };

  return (
    <section className="relative py-24 flex items-center justify-center px-6 lg:px-12">
      {backgroundImage && (
        <>
          <div className="absolute inset-0">
            <img
              src={backgroundImage}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80"></div>
          </div>
        </>
      )}
      
      <div className={`relative z-10 max-w-7xl mx-auto w-full flex flex-col ${alignmentClasses[alignment]}`}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="max-w-5xl"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-10 tracking-tight leading-[1.1]">
            {title}
          </h2>
          
          {description && (
            <p className="text-xl md:text-2xl lg:text-3xl text-white/80 font-light leading-relaxed">
              {description}
            </p>
          )}
          
          {children && (
            <div className="mt-12">
              {children}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
