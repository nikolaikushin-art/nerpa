// Enhanced Stat Card with Progress Bars, Charts, and Interactive Features
import { useState } from 'react';
import { TrendingUp, TrendingDown, ArrowUp, ArrowDown, Info } from 'lucide-react';
import { Progress } from '@/minerals-portal/components/ui/progress';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/minerals-portal/components/ui/tooltip';

interface EnhancedStatCardProps {
  value: string;
  label: string;
  description: string;
  trend?: number; // Percentage change
  progress?: number; // 0-100 for progress bar
  maxValue?: string; // Maximum value for context
  icon?: React.ReactNode;
  color?: 'primary' | 'amber' | 'green' | 'blue' | 'purple';
  index?: number;
}

export const EnhancedStatCard = ({ 
  value, 
  label, 
  description, 
  trend,
  progress,
  maxValue,
  icon,
  color = 'primary',
  index = 0
}: EnhancedStatCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const colorClasses = {
    primary: {
      bg: 'from-primary/20 to-primary/10',
      border: 'border-primary/20',
      text: 'text-primary',
      progress: 'bg-primary',
      hover: 'hover:border-primary/50'
    },
    amber: {
      bg: 'from-amber-500/20 to-amber-500/10',
      border: 'border-amber-500/20',
      text: 'text-amber-500',
      progress: 'bg-amber-500',
      hover: 'hover:border-amber-500/50'
    },
    green: {
      bg: 'from-green-500/20 to-green-500/10',
      border: 'border-green-500/20',
      text: 'text-green-500',
      progress: 'bg-green-500',
      hover: 'hover:border-green-500/50'
    },
    blue: {
      bg: 'from-blue-500/20 to-blue-500/10',
      border: 'border-blue-500/20',
      text: 'text-blue-500',
      progress: 'bg-blue-500',
      hover: 'hover:border-blue-500/50'
    },
    purple: {
      bg: 'from-purple-500/20 to-purple-500/10',
      border: 'border-purple-500/20',
      text: 'text-purple-500',
      progress: 'bg-purple-500',
      hover: 'hover:border-purple-500/50'
    }
  };

  const colors = colorClasses[color];

  const shadowColor = color === 'primary' ? 'primary' : color === 'amber' ? 'amber-500' : color === 'green' ? 'green-500' : color === 'blue' ? 'blue-500' : 'purple-500';
  
  return (
    <TooltipProvider>
      <div 
        className={`group relative p-8 rounded-2xl bg-gradient-to-br from-background via-background to-secondary/30 border ${colors.border} ${colors.hover} transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`}
        style={{
          boxShadow: isHovered ? `0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)` : undefined
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated gradient overlay */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
        
        {/* Icon */}
        <div className="relative mb-6 flex items-center justify-between">
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${colors.bg} border ${colors.border} group-hover:border-${color === 'primary' ? 'primary' : color}-500/40 transition-colors`}>
            <div className={colors.text}>
              {icon || <TrendingUp className="h-7 w-7" />}
            </div>
          </div>
          
          {/* Trend indicator */}
          {trend !== undefined && (
            <div className={`flex items-center gap-1 px-2 py-1 rounded-full ${trend >= 0 ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'}`}>
              {trend >= 0 ? (
                <ArrowUp className="h-4 w-4" />
              ) : (
                <ArrowDown className="h-4 w-4" />
              )}
              <span className="text-xs font-body font-semibold">{Math.abs(trend)}%</span>
            </div>
          )}
        </div>

        {/* Value with animation */}
        <div className="relative mb-3">
          <div className={`text-5xl md:text-6xl font-display font-bold bg-gradient-to-r ${colors.text} via-amber-400 ${colors.text} bg-clip-text text-transparent transition-all duration-300 ${isHovered ? 'scale-105' : ''}`}>
            {value}
          </div>
          {maxValue && (
            <div className="text-sm text-muted-foreground mt-1">
              of {maxValue} total
            </div>
          )}
        </div>

        {/* Label */}
        <div className="relative mb-3 flex items-center gap-2">
          <h3 className={`text-lg font-display font-semibold ${colors.text} group-hover:scale-105 transition-transform`}>
            {label}
          </h3>
          <Tooltip>
            <TooltipTrigger>
              <Info className={`h-4 w-4 ${colors.text} opacity-60 hover:opacity-100 transition-opacity`} />
            </TooltipTrigger>
            <TooltipContent>
              <p className="max-w-xs">{description}</p>
            </TooltipContent>
          </Tooltip>
        </div>

        {/* Progress Bar */}
        {progress !== undefined && (
          <div className="relative mb-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-muted-foreground">Progress</span>
              <span className={`text-xs font-body font-semibold ${colors.text}`}>{progress}%</span>
            </div>
            <Progress 
              value={progress} 
              className="h-2 bg-secondary/50"
            />
          </div>
        )}

        {/* Description */}
        <div className="relative">
          <p className="text-sm font-body text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>

        {/* Decorative corner accent */}
        <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${colors.bg} to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
        
        {/* Animated border glow */}
        <div className={`absolute inset-0 rounded-2xl border-2 ${colors.border} opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10 blur-sm`} />
      </div>
    </TooltipProvider>
  );
};
