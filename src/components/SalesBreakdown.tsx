import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const salesData = [
  { name: "Direct", value: 300.56, percentage: 45, color: "hsl(var(--chart-1))" },
  { name: "Affiliate", value: 135.18, percentage: 20, color: "hsl(var(--chart-2))" },
  { name: "Sponsored", value: 154.02, percentage: 23, color: "hsl(var(--chart-3))" },
  { name: "E-mail", value: 48.96, percentage: 12, color: "hsl(var(--chart-4))" }
];

export const SalesBreakdown = () => {
  return (
    <Card className="animate-fade-in">
      <CardHeader className="pb-3">
        <CardTitle className="text-base font-medium">Sales by Channel</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {salesData.map((item, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: item.color }}
                />
                <span className="font-medium">{item.name}</span>
              </div>
              <span className="text-muted-foreground">${item.value}</span>
            </div>
            <Progress 
              value={item.percentage} 
              className="h-2"
              style={{ 
                '--progress-color': item.color 
              } as React.CSSProperties}
            />
          </div>
        ))}
      </CardContent>
    </Card>
  );
};