// Government-Level Data Visualization Components
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/minerals-portal/components/ui/chart';
import { TrendingUp, TrendingDown, BarChart3 } from 'lucide-react';

interface ChartData {
  name: string;
  value: number;
  [key: string]: string | number;
}

interface DataVisualizationProps {
  data: ChartData[];
  type?: 'bar' | 'line' | 'pie';
  title: string;
  description?: string;
  dataKey?: string;
  color?: string;
  height?: number;
}

export const DataVisualization = ({
  data,
  type = 'bar',
  title,
  description,
  dataKey = 'value',
  color = 'hsl(var(--primary))',
  height = 300
}: DataVisualizationProps) => {
  const COLORS = ['hsl(var(--primary))', 'hsl(var(--amber-500))', 'hsl(var(--green-500))', 'hsl(var(--blue-500))', 'hsl(var(--purple-500))'];

  const chartConfig = {
    value: {
      label: title,
      color: color,
    },
  };

  return (
    <div className="p-8 rounded-2xl bg-gradient-to-br from-background via-secondary/20 to-background border border-border/50 hover:border-primary/50 transition-all hover:shadow-xl">
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <BarChart3 className="h-6 w-6 text-primary" />
          <h3 className="text-2xl font-display font-semibold text-foreground">{title}</h3>
        </div>
        {description && (
          <p className="text-sm font-body text-muted-foreground">{description}</p>
        )}
      </div>

      <div style={{ height: `${height}px` }}>
        {type === 'bar' && (
          <ChartContainer config={chartConfig}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.2} />
                <XAxis 
                  dataKey="name" 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar 
                  dataKey={dataKey} 
                  fill={color}
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        )}

        {type === 'line' && (
          <ChartContainer config={chartConfig}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.2} />
                <XAxis 
                  dataKey="name" 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line 
                  type="monotone" 
                  dataKey={dataKey} 
                  stroke={color}
                  strokeWidth={3}
                  dot={{ fill: color, r: 6 }}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        )}

        {type === 'pie' && (
          <ChartContainer config={chartConfig}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey={dataKey}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </ChartContainer>
        )}
      </div>
    </div>
  );
};

// Comparison Table Component
interface ComparisonRow {
  feature: string;
  values: (string | number)[];
}

interface ComparisonTableProps {
  title: string;
  headers: string[];
  rows: ComparisonRow[];
}

export const ComparisonTable = ({ title, headers, rows }: ComparisonTableProps) => {
  return (
    <div className="p-8 rounded-2xl bg-gradient-to-br from-background via-secondary/20 to-background border border-border/50">
      <h3 className="text-2xl font-display font-semibold text-foreground mb-6">{title}</h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border/50">
              <th className="text-left py-4 px-4 font-display font-semibold text-foreground">Feature</th>
              {headers.map((header, index) => (
                <th key={index} className="text-center py-4 px-4 font-display font-semibold text-foreground">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr 
                key={rowIndex} 
                className="border-b border-border/30 hover:bg-secondary/20 transition-colors"
              >
                <td className="py-4 px-4 font-body font-medium text-foreground">{row.feature}</td>
                {row.values.map((value, valueIndex) => (
                  <td key={valueIndex} className="py-4 px-4 text-center font-body text-muted-foreground">
                    {typeof value === 'number' ? value.toLocaleString() : value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
