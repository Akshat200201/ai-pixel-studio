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
        {/* World Map Visualization */}
        <div className="h-48 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
          {/* World Map SVG Background */}
          <div className="absolute inset-0 opacity-20">
            <svg viewBox="0 0 400 200" className="w-full h-full">
              {/* Simple world map paths */}
              <path d="M50,80 Q80,70 120,75 Q150,80 180,85 Q200,90 220,85 Q250,80 280,85 L300,90 L320,85 L340,80" 
                    stroke="#3B82F6" strokeWidth="2" fill="none" opacity="0.6"/>
              <path d="M60,100 Q90,95 130,100 Q160,105 190,110 Q220,115 250,110 L280,115 L310,110 L330,105" 
                    stroke="#3B82F6" strokeWidth="2" fill="none" opacity="0.6"/>
              <path d="M70,130 Q100,125 140,130 Q170,135 200,140 Q230,145 260,140 L290,145 L320,140 L340,135" 
                    stroke="#3B82F6" strokeWidth="2" fill="none" opacity="0.6"/>
            </svg>
          </div>
          
          {/* Location markers */}
          <div className="absolute top-12 left-16 w-3 h-3 bg-blue-500 rounded-full animate-pulse shadow-lg">
            <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-75"></div>
          </div>
          <div className="absolute top-20 right-20 w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-300 shadow-lg">
            <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-75"></div>
          </div>
          <div className="absolute bottom-16 left-24 w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-700 shadow-lg">
            <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-75"></div>
          </div>
          <div className="absolute bottom-12 right-12 w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-1000 shadow-lg">
            <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-75"></div>
          </div>
          
          {/* Center content */}
          <div className="text-center text-blue-600 z-10">
            <MapPin className="w-8 h-8 mx-auto mb-2" />
            <p className="text-sm font-medium">Global Revenue Map</p>
            <p className="text-xs opacity-70">Interactive visualization</p>
          </div>
        </div>
        
        {/* Location List */}
        <div className="space-y-3">
          {revenueByLocation.map((location, index) => (
            <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors border border-border/50">
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${
                  index === 0 ? 'bg-blue-500' : 
                  index === 1 ? 'bg-green-500' :
                  index === 2 ? 'bg-yellow-500' : 'bg-red-500'
                }`}></div>
                <span className="text-sm font-medium text-foreground">{location.location}</span>
              </div>
              <span className="text-sm font-bold text-foreground">{location.value}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};