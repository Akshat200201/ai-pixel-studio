import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const contacts = [
  {
    name: "Natali Craig",
    avatar: "NC",
    status: "active"
  },
  {
    name: "Drew Cano", 
    avatar: "DC",
    status: "offline"
  },
  {
    name: "Orlando Diggs",
    avatar: "OD",
    status: "active"
  },
  {
    name: "Andi Lane",
    avatar: "AL",
    status: "active"
  },
  {
    name: "Kate Morrison",
    avatar: "KM",
    status: "offline"
  }
];

export const ContactsList = () => {
  return (
    <Card className="h-fit animate-fade-in">
      <CardHeader className="pb-3">
        <CardTitle className="text-base font-medium">Contacts</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {contacts.map((contact, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="relative">
              <Avatar className="w-8 h-8">
                <AvatarImage src={`/api/placeholder/32/32`} />
                <AvatarFallback className="text-xs">{contact.avatar}</AvatarFallback>
              </Avatar>
              <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-background ${
                contact.status === 'active' ? 'bg-success' : 'bg-muted-foreground'
              }`} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium truncate">{contact.name}</div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};