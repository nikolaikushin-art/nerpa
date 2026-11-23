import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface SectorDetailSectionProps {
  title: string;
  subtitle: string;
  description: string;
  points: string[];
  icon: LucideIcon;
  backgroundImage?: string;
  imagePosition?: "left" | "right";
  stats?: {value: string;label: string;}[];
}

export const SectorDetailSection = ({
  title,
  subtitle,
  description,
  points,
  icon: Icon,
  backgroundImage,
  imagePosition = "right",
  stats
}: SectorDetailSectionProps) => {
  const content =
  <div className="flex-1 py-20 lg:py-32 px-6 lg:px-16">
      <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-2xl">
      
        <div className="flex items-center gap-4 mb-6">
          <div className="p-4 bg-primary/10 rounded-lg">
            <Icon className="w-8 h-8 text-primary" />
          </div>
          <span className="text-primary text-sm font-semibold tracking-[0.3em] uppercase">
            {subtitle}
          </span>
        </div>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
          {title}
        </h2>
        
        <p className="text-xl text-muted-foreground leading-relaxed mb-10">
          {description}
        </p>

        <ul className="space-y-4 mb-12">
          {points.map((point, index) =>
        <motion.li
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="flex items-start gap-4">
          
              <span className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
              <span className="text-muted-foreground">{point}</span>
            </motion.li>
        )}
        </ul>

        {stats &&
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) =>
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="text-center">
          
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
        )}
          </div>
      }
      </motion.div>
    </div>;


  const imageSection = backgroundImage &&
  <motion.div
    initial={{ opacity: 0, scale: 1.1 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1.2 }}
    viewport={{ once: true }}
    className="flex-1 relative min-h-[400px] lg:min-h-[700px]">
    
      <div className="absolute inset-0">
        


      
      
        
      </div>
    </motion.div>;


  return (
    <section className="relative">
      <div className={`flex flex-col lg:flex-row ${imagePosition === "left" ? "lg:flex-row-reverse" : ""}`}>
        {content}
        {imageSection}
      </div>
    </section>);

};