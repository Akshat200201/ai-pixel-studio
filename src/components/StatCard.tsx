import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  className?: string;
}

export const StatCard = ({ title, value, change, isPositive, className }: StatCardProps) => {
  return (
    <Card className={cn(
      "p-6 animate-fade-in hover:shadow-md transition-all duration-300",
      className
    )}>
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-card-foreground">{value}</div>
          <div className={cn(
            "flex items-center gap-1 text-sm font-medium",
            isPositive ? "text-success" : "text-error"
          )}>
            {isPositive ? (
              <TrendingUp className="h-4 w-4" />
            ) : (
              <TrendingDown className="h-4 w-4" />
            )}
            {change}
          </div>
        </div>
      </div>
    </Card>
  );
};