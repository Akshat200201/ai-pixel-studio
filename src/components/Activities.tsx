import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const activities = [
  {
    user: { name: "You", avatar: "Y" },
    action: "created a project",
    project: "Landing Page",
    time: "2m",
    type: "created"
  },
  {
    user: { name: "Natali Craig", avatar: "NC" },
    action: "created a project", 
    project: "E-commerce Shop",
    time: "1h",
    type: "created"
  },
  {
    user: { name: "Kate Morrison", avatar: "KM" },
    action: "moved task",
    project: "Dashboard Design",
    time: "3h",
    type: "moved"
  },
  {
    user: { name: "Drew Cano", avatar: "DC" },
    action: "uploaded a file",
    project: "Client Project",
    time: "5h",
    type: "uploaded"
  }
];

export const Activities = () => {
  return (
    <Card className="h-fit animate-fade-in">
      <CardHeader className="pb-3">
        <CardTitle className="text-base font-medium">Activities</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start gap-3">
            <Avatar className="w-8 h-8">
              <AvatarImage src={`/api/placeholder/32/32`} />
              <AvatarFallback className="text-xs">{activity.user.avatar}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="text-sm">
                <span className="font-medium">{activity.user.name}</span>
                <span className="text-muted-foreground"> {activity.action} </span>
                <span className="font-medium">{activity.project}</span>
              </div>
              <div className="text-xs text-muted-foreground mt-1">{activity.time}</div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};