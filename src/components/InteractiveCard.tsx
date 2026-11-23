import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { useState } from "react";

interface InteractiveCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

export const InteractiveCard = ({ title, description, icon: Icon, index }: InteractiveCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative group cursor-pointer"
    >
      <motion.div
        className="relative p-8 rounded-2xl bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border border-border/50 overflow-hidden"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100"
          transition={{ duration: 0.5 }}
        />
        
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent opacity-0"
          animate={isHovered ? { opacity: [0, 0.5, 0] } : { opacity: 0 }}
          transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
        />
        
        <div className="relative z-10" style={{ transform: "translateZ(50px)" }}>
          <motion.div
            className="mb-6 p-4 rounded-xl bg-primary/10 inline-block"
            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 0.5 }}
          >
            <Icon className="w-8 h-8 text-primary" />
          </motion.div>
          
          <h3 className="text-xl font-semibold mb-3 text-foreground">
            {title}
          </h3>
          
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
        
        {/* Corner accent */}
        <motion.div
          className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full"
          animate={isHovered ? { scale: [1, 1.5, 1] } : { scale: 1 }}
          transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
        />
      </motion.div>
    </motion.div>
  );
};
