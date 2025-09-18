import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { revenueByLocation } from '@/data/mockData';
import { MapPin } from 'lucide-react';

export const RevenueByLocationCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Revenue by Location</CardTitle>
      </CardHeader>
      <CardContent>
        {/* World Map Placeholder with Visual */}
        <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full bg-gradient-to-r from-primary/20 via-transparent to-primary/20"></div>
          </div>
          <div className="text-center text-primary z-10">
            <MapPin className="w-8 h-8 mx-auto mb-2" />
            <p className="text-sm font-medium">Global Revenue Map</p>
            <p className="text-xs opacity-70">Interactive visualization</p>
          </div>
          {/* Decorative dots */}
          <div className="absolute top-8 left-12 w-2 h-2 bg-success rounded-full animate-pulse"></div>
          <div className="absolute top-16 right-16 w-2 h-2 bg-warning rounded-full animate-pulse delay-300"></div>
          <div className="absolute bottom-12 left-20 w-2 h-2 bg-info rounded-full animate-pulse delay-700"></div>
          <div className="absolute bottom-8 right-8 w-2 h-2 bg-error rounded-full animate-pulse delay-1000"></div>
        </div>
        
        {/* Location List */}
        <div className="space-y-3">
          {revenueByLocation.map((location, index) => (
            <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 transition-colors">
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${
                  index === 0 ? 'bg-success' : 
                  index === 1 ? 'bg-warning' :
                  index === 2 ? 'bg-info' : 'bg-error'
                }`}></div>
                <span className="text-sm text-foreground">{location.location}</span>
              </div>
              <span className="text-sm font-semibold">{location.value}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};