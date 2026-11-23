// Reusable Stat Card Component for Government-Level Design
import { ReactNode } from 'react';
import { Factory, DollarSign, Users, Calendar, Award, TrendingUp, BarChart3, Target, Zap, Shield, Globe } from 'lucide-react';

interface StatCardProps {
  value: string;
  label: string;
  description: string;
  index?: number;
}

const getIcon = (label: string): ReactNode => {
  const labelLower = label.toLowerCase();
  if (labelLower.includes('ton') || labelLower.includes('reserve') || labelLower.includes('capacity')) return <Factory className="h-6 w-6" />;
  if (labelLower.includes('value') || labelLower.includes('revenue') || labelLower.includes('wage') || labelLower.includes('procurement')) return <DollarSign className="h-6 w-6" />;
  if (labelLower.includes('job') || labelLower.includes('employment') || labelLower.includes('person')) return <Users className="h-6 w-6" />;
  if (labelLower.includes('year') || labelLower.includes('target') || labelLower.includes('timeline')) return <Calendar className="h-6 w-6" />;
  if (labelLower.includes('grade') || labelLower.includes('recovery') || labelLower.includes('purity') || labelLower.includes('percent')) return <Award className="h-6 w-6" />;
  return <TrendingUp className="h-6 w-6" />;
};

export const StatCard = ({ value, label, description, index = 0 }: StatCardProps) => {
  return (
    <div 
      className="group relative p-8 rounded-2xl bg-gradient-to-br from-background via-background to-secondary/30 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Icon */}
      <div className="relative mb-6">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/20 group-hover:border-primary/40 transition-colors">
          <div className="text-primary">
            {getIcon(label)}
          </div>
        </div>
      </div>

      {/* Value */}
      <div className="relative mb-3">
        <div className="text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-primary via-amber-400 to-primary bg-clip-text text-transparent">
          {value}
        </div>
      </div>

      {/* Label */}
      <div className="relative mb-2">
        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
          {label}
        </h3>
      </div>

      {/* Description */}
      <div className="relative">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>

      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

export const StatsSection = ({ 
  stats, 
  title = "Comprehensive Resource Analysis",
  subtitle = "Detailed metrics and projections",
  sectionLabel = "Key Statistics & Metrics"
}: {
  stats: Array<{ value: string; label: string; description: string }>;
  title?: string;
  subtitle?: string;
  sectionLabel?: string;
}) => {
  return (
    <section className="py-32 px-8 md:px-16 lg:px-24 bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <BarChart3 className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">{sectionLabel}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-light text-foreground mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
