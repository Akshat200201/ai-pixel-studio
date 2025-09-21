import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Users, ShoppingCart, DollarSign, TrendingUp as Growth } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  className?: string;
  highlighted?: boolean;
}

export const StatCard = ({ title, value, change, isPositive, className, highlighted = false }: StatCardProps) => {
  const getIcon = (title: string) => {
    switch (title) {
      case "Customers":
        return Users;
      case "Orders":
        return ShoppingCart;
      case "Revenue":
        return DollarSign;
      case "Growth":
        return Growth;
      default:
        return Users;
    }
  };

  const Icon = getIcon(title);

  return (
    <Card className={cn(
      "p-6 animate-fade-in hover:shadow-md transition-all duration-300 group",
      highlighted ? "bg-primary text-primary-foreground" : "",
      className
    )}>
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className={cn(
            "text-sm font-medium",
            highlighted ? "text-primary-foreground/80" : "text-muted-foreground"
          )}>{title}</p>
          <div className="flex items-center gap-2">
            <h3 className={cn(
              "text-2xl font-bold",
              highlighted ? "text-primary-foreground" : "text-card-foreground"
            )}>{value}</h3>
          </div>
          <div className={cn(
            "flex items-center gap-1 text-xs font-medium",
            highlighted 
              ? "text-primary-foreground/90" 
              : isPositive ? "text-success" : "text-error"
          )}>
            {isPositive ? (
              <TrendingUp className="h-3 w-3" />
            ) : (
              <TrendingDown className="h-3 w-3" />
            )}
            {change}
          </div>
        </div>
        <div className={cn(
          "p-2 rounded-lg transition-colors",
          highlighted 
            ? "bg-primary-foreground/20 group-hover:bg-primary-foreground/30" 
            : "bg-primary/10 group-hover:bg-primary/20"
        )}>
          <Icon className={cn(
            "h-5 w-5",
            highlighted ? "text-primary-foreground" : "text-primary"
          )} />
        </div>
      </div>
    </Card>
  );
};