import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

interface StatsBarProps {
  stats: Stat[];
  dark?: boolean;
}

export const StatsBar = ({ stats, dark = false }: StatsBarProps) => {
  return (
    <section className={`py-20 px-6 lg:px-12 ${dark ? 'bg-black' : 'bg-[hsl(var(--nerpa-dark-elevated))]'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <AnimatedNumber
                value={stat.value}
                suffix={stat.suffix}
              />
              <p className="text-sm md:text-base text-muted-foreground mt-2 uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AnimatedNumber = ({ value, suffix = "" }: { value: string; suffix?: string }) => {
  const [displayValue, setDisplayValue] = useState("0");
  
  useEffect(() => {
    // Extract numeric part
    const numericValue = value.replace(/[^0-9]/g, '');
    const target = parseInt(numericValue) || 0;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(current).toString() + suffix);
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, [value, suffix]);
  
  return (
    <h3 className="text-5xl md:text-6xl font-bold text-primary">
      {displayValue}
    </h3>
  );
};
