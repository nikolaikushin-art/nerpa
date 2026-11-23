// Saudi Vision 2040 Style Components - Interactive & Functional
import { useState, useEffect } from 'react';
import { CheckCircle2, Target, TrendingUp, Award, Calendar, BarChart3, ArrowRight, Play, Pause } from 'lucide-react';
import { Progress } from '@/minerals-portal/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/minerals-portal/components/ui/card';
import { Button } from '@/minerals-portal/components/ui/button';
import { useLanguage } from '@/minerals-portal/contexts/LanguageContext';

// Interactive Progress Tracker Component
interface ProgressTrackerProps {
  title: string;
  current: number;
  target: number;
  unit?: string;
  milestones?: { year: string; value: number; label: string }[];
  color?: 'primary' | 'amber' | 'green' | 'blue';
}

export const ProgressTracker = ({ title, current, target, unit = '', milestones = [], color = 'primary' }: ProgressTrackerProps) => {
  const [animatedValue, setAnimatedValue] = useState(0);
  const percentage = Math.min((current / target) * 100, 100);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = current / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      setAnimatedValue(Math.min(increment * step, current));
      if (step >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [current]);

  const colorClasses = {
    primary: 'bg-primary text-primary',
    amber: 'bg-amber-500 text-amber-500',
    green: 'bg-green-500 text-green-500',
    blue: 'bg-blue-500 text-blue-500',
  };

  return (
    <Card className="bg-gradient-to-br from-background via-secondary/10 to-background border border-border/50 shadow-xl rounded-2xl overflow-hidden">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-display font-semibold text-foreground">{title}</CardTitle>
          <div className={`px-3 py-1 rounded-full ${colorClasses[color]}/10 border ${colorClasses[color]}/20`}>
            <span className={`text-sm font-body font-bold ${colorClasses[color]}`}>{percentage.toFixed(1)}%</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <div className="flex items-baseline justify-between mb-2">
            <span className={`text-4xl font-display font-bold ${colorClasses[color]}`}>
              {animatedValue.toLocaleString()}{unit}
            </span>
            <span className="text-lg font-body text-muted-foreground">of {target.toLocaleString()}{unit}</span>
          </div>
          <Progress value={percentage} className={`h-3 [&>div]:bg-gradient-to-r ${colorClasses[color]} to-amber-400`} />
        </div>

        {milestones.length > 0 && (
          <div className="space-y-3 pt-4 border-t border-border/30">
            <h4 className="text-sm font-body font-semibold text-foreground uppercase tracking-wider">Milestones</h4>
            <div className="grid grid-cols-2 gap-3">
              {milestones.map((milestone, index) => {
                const milestonePercentage = (milestone.value / target) * 100;
                const isCompleted = current >= milestone.value;
                return (
                  <div key={index} className={`p-3 rounded-lg border ${isCompleted ? 'border-green-500/50 bg-green-500/5' : 'border-border/30 bg-secondary/10'}`}>
                    <div className="flex items-center gap-2 mb-1">
                      {isCompleted ? (
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                      ) : (
                        <Target className="h-4 w-4 text-muted-foreground" />
                      )}
                      <span className={`text-xs font-body font-semibold ${isCompleted ? 'text-green-500' : 'text-muted-foreground'}`}>
                        {milestone.year}
                      </span>
                    </div>
                    <div className="text-sm font-display font-bold text-foreground">{milestone.value.toLocaleString()}{unit}</div>
                    <div className="text-xs font-body text-muted-foreground">{milestone.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

// Interactive Timeline Component
interface TimelineItem {
  year: string;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'planned';
  progress?: number;
}

interface InteractiveTimelineProps {
  title: string;
  items: TimelineItem[];
  startYear?: string;
  endYear?: string;
}

export const InteractiveTimeline = ({ title, items, startYear = '2026', endYear = '2040' }: InteractiveTimelineProps) => {
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const years = Array.from({ length: parseInt(endYear) - parseInt(startYear) + 1 }, (_, i) => 
    (parseInt(startYear) + i).toString()
  );

  useEffect(() => {
    if (isPlaying && currentIndex < items.length - 1) {
      const timer = setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
        setSelectedYear(items[currentIndex + 1].year);
      }, 2000);
      return () => clearTimeout(timer);
    } else if (currentIndex >= items.length - 1) {
      setIsPlaying(false);
    }
  }, [isPlaying, currentIndex, items]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500 border-green-500';
      case 'in-progress': return 'bg-amber-500 border-amber-500';
      case 'planned': return 'bg-blue-500 border-blue-500';
      default: return 'bg-muted border-border';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle2 className="h-5 w-5" />;
      case 'in-progress': return <Play className="h-5 w-5" />;
      case 'planned': return <Target className="h-5 w-5" />;
      default: return <Calendar className="h-5 w-5" />;
    }
  };

  return (
    <Card className="bg-gradient-to-br from-background via-secondary/10 to-background border border-border/50 shadow-xl rounded-2xl overflow-hidden">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl font-display font-semibold text-foreground">{title}</CardTitle>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setIsPlaying(!isPlaying);
              if (!isPlaying) {
                setCurrentIndex(0);
                setSelectedYear(items[0].year);
              }
            }}
            className="font-body"
          >
            {isPlaying ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
            {isPlaying ? 'Pause' : 'Play'}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {/* Year Selector */}
        <div className="mb-8 overflow-x-auto pb-4">
          <div className="flex gap-2 min-w-max">
            {years.map((year) => {
              const item = items.find(i => i.year === year);
              const isSelected = selectedYear === year;
              const isActive = item !== undefined;
              
              return (
                <button
                  key={year}
                  onClick={() => {
                    setSelectedYear(year);
                    setIsPlaying(false);
                  }}
                  className={`px-4 py-2 rounded-lg font-body text-sm font-medium transition-all ${
                    isSelected
                      ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                      : isActive
                      ? 'bg-secondary/50 text-foreground hover:bg-secondary'
                      : 'bg-secondary/20 text-muted-foreground'
                  }`}
                >
                  {year}
                </button>
              );
            })}
          </div>
        </div>

        {/* Timeline Items */}
        <div className="space-y-6">
          {items
            .filter(item => !selectedYear || item.year === selectedYear)
            .map((item, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl border-2 ${getStatusColor(item.status)}/20 bg-gradient-to-br from-background via-secondary/10 to-background transition-all hover:shadow-lg`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${getStatusColor(item.status)}/10 border ${getStatusColor(item.status)}/30 flex-shrink-0`}>
                    {getStatusIcon(item.status)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-display font-semibold text-foreground">{item.title}</h3>
                      <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm font-body font-semibold text-primary">
                        {item.year}
                      </span>
                    </div>
                    <p className="font-body text-muted-foreground leading-relaxed mb-3">{item.description}</p>
                    {item.progress !== undefined && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs font-body text-muted-foreground">
                          <span>Progress</span>
                          <span>{item.progress}%</span>
                        </div>
                        <Progress value={item.progress} className="h-2" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </CardContent>
    </Card>
  );
};

// Vision Goals Card Component
interface VisionGoal {
  title: string;
  description: string;
  target: string;
  current: string;
  icon: React.ElementType;
  color?: 'primary' | 'amber' | 'green' | 'blue' | 'purple';
}

interface VisionGoalsProps {
  title: string;
  goals: VisionGoal[];
}

export const VisionGoals = ({ title, goals }: VisionGoalsProps) => {
  const { t } = useLanguage();
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-display font-light text-foreground mb-4">{title}</h2>
        <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto">
          Strategic objectives and milestones for Afghanistan's mineral sector transformation
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {goals.map((goal, index) => {
          const Icon = goal.icon;
          const colorClasses = {
            primary: 'from-primary/20 to-primary/10 border-primary/30 text-primary',
            amber: 'from-amber-500/20 to-amber-500/10 border-amber-500/30 text-amber-500',
            green: 'from-green-500/20 to-green-500/10 border-green-500/30 text-green-500',
            blue: 'from-blue-500/20 to-blue-500/10 border-blue-500/30 text-blue-500',
            purple: 'from-purple-500/20 to-purple-500/10 border-purple-500/30 text-purple-500',
          }[goal.color || 'primary'];

          return (
            <Card key={index} className="group relative overflow-hidden border border-border/50 bg-gradient-to-br from-background via-secondary/10 to-background hover:shadow-xl transition-all hover:-translate-y-1">
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${colorClasses} rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity`} />
              
              <CardHeader>
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${colorClasses} border mb-4`}>
                  <Icon className="h-7 w-7" />
                </div>
                <CardTitle className="text-xl font-display font-semibold text-foreground">{goal.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-body text-muted-foreground leading-relaxed">{goal.description}</p>
                
                <div className="pt-4 border-t border-border/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-body text-muted-foreground">Current</span>
                    <span className="text-lg font-display font-bold text-foreground">{goal.current}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-body text-muted-foreground">Target</span>
                    <span className="text-lg font-display font-bold text-primary">{goal.target}</span>
                  </div>
                </div>

                <Button variant="ghost" size="sm" className="w-full group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                  {t.vision2050?.learnMore || 'Learn More'}
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

// Achievement Badge Component
interface AchievementBadgeProps {
  title: string;
  description: string;
  icon: React.ElementType;
  achieved: boolean;
  year?: string;
}

export const AchievementBadge = ({ title, description, icon: Icon, achieved, year }: AchievementBadgeProps) => {
  return (
    <div className={`group relative p-6 rounded-xl border-2 transition-all ${
      achieved 
        ? 'border-green-500/50 bg-green-500/5 hover:border-green-500 hover:shadow-lg' 
        : 'border-border/30 bg-secondary/10 hover:border-primary/50'
    }`}>
      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-lg ${
          achieved 
            ? 'bg-green-500/20 border-green-500/30' 
            : 'bg-secondary/50 border-border/30'
        } border flex-shrink-0`}>
          {achieved ? (
            <CheckCircle2 className="h-6 w-6 text-green-500" />
          ) : (
            <Icon className="h-6 w-6 text-muted-foreground" />
          )}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className={`text-lg font-display font-semibold ${achieved ? 'text-green-500' : 'text-foreground'}`}>
              {title}
            </h3>
            {year && (
              <span className="px-2 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-body font-semibold text-primary">
                {year}
              </span>
            )}
          </div>
          <p className="font-body text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

// Real-time Statistics Counter
interface StatCounterProps {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  icon?: React.ElementType;
  color?: 'primary' | 'amber' | 'green' | 'blue';
}

export const StatCounter = ({ value, label, suffix = '', prefix = '', icon: Icon, color = 'primary' }: StatCounterProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`stat-${label}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [label]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      setCount(Math.min(increment * step, value));
      if (step >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  const colorClasses = {
    primary: 'text-primary bg-primary/10 border-primary/20',
    amber: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
    green: 'text-green-500 bg-green-500/10 border-green-500/20',
    blue: 'text-blue-500 bg-blue-500/10 border-blue-500/20',
  }[color];

  return (
    <div id={`stat-${label}`} className="text-center p-6 rounded-xl bg-gradient-to-br from-background via-secondary/10 to-background border border-border/50">
      {Icon && (
        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${colorClasses} border mb-4`}>
          <Icon className="h-6 w-6" />
        </div>
      )}
      <div className={`text-4xl font-display font-bold ${colorClasses.split(' ')[0]} mb-2`}>
        {prefix}{count.toLocaleString(undefined, { maximumFractionDigits: 0 })}{suffix}
      </div>
      <div className="text-sm font-body font-medium text-muted-foreground uppercase tracking-wider">{label}</div>
    </div>
  );
};
