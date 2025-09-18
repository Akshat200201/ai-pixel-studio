import { Bell, Bug, UserPlus, Users, Trash2, FileX } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface NotificationItem {
  id: string;
  type: 'bug' | 'user' | 'subscription' | 'activity';
  message: string;
  time: string;
  icon: React.ReactNode;
  user?: {
    name: string;
    avatar?: string;
  };
}

const notifications: NotificationItem[] = [
  {
    id: '1',
    type: 'bug',
    message: 'You have a bug that needs to be fixed',
    time: 'Just now',
    icon: <Bug className="w-4 h-4 text-error" />
  },
  {
    id: '2',
    type: 'user',
    message: 'New user registered',
    time: '59 minutes ago',
    icon: <UserPlus className="w-4 h-4 text-success" />
  },
  {
    id: '3',
    type: 'bug',
    message: 'You have a bug that needs to be fixed',
    time: '12 hours ago',
    icon: <Bug className="w-4 h-4 text-error" />
  },
  {
    id: '4',
    type: 'subscription',
    message: 'Andi Lane subscribed to you',
    time: 'Today, 11:59 AM',
    icon: <Users className="w-4 h-4 text-info" />
  }
];

const activities = [
  {
    user: { name: 'Natali Craig', avatar: 'NC' },
    action: 'You have a bug that needs...',
    time: 'Just now'
  },
  {
    user: { name: 'Drew Cano', avatar: 'DC' },
    action: 'Released a new version',
    time: '59 minutes ago'
  },
  {
    user: { name: 'Orlando Diggs', avatar: 'OD' },
    action: 'Submitted a bug',
    time: '12 hours ago'
  },
  {
    user: { name: 'Andi Lane', avatar: 'AL' },
    action: 'Modified A data in Page X',
    time: 'Today, 11:59 AM'
  },
  {
    user: { name: 'Kate Morrison', avatar: 'KM' },
    action: 'Deleted a page in Project X',
    time: 'Feb 2, 2023'
  }
];

const contacts = [
  { name: 'Natali Craig', avatar: 'NC' },
  { name: 'Drew Cano', avatar: 'DC' },
  { name: 'Orlando Diggs', avatar: 'OD' },
  { name: 'Andi Lane', avatar: 'AL' },
  { name: 'Kate Morrison', avatar: 'KM' },
  { name: 'Koray Okumus', avatar: 'KO' }
];

export const NotificationPanel = () => {
  return (
    <div className="w-80 bg-background border-l border-border p-6 space-y-6 overflow-y-auto">
      {/* Notifications Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Notifications</h2>
        <Bell className="w-5 h-5 text-muted-foreground" />
      </div>

      {/* Notifications List */}
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div key={notification.id} className="flex items-start gap-3">
            <div className="flex-shrink-0 w-8 h-8 bg-muted rounded-full flex items-center justify-center">
              {notification.icon}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-foreground">{notification.message}</p>
              <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
            </div>
          </div>
        ))}
      </div>

      <Separator />

      {/* Activities */}
      <div>
        <h3 className="text-base font-medium mb-4">Activities</h3>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-start gap-3">
              <Avatar className="w-8 h-8">
                <AvatarFallback className="text-xs">
                  {activity.user.avatar}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-foreground">{activity.action}</p>
                <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Contacts */}
      <div>
        <h3 className="text-base font-medium mb-4">Contacts</h3>
        <div className="space-y-3">
          {contacts.map((contact, index) => (
            <div key={index} className="flex items-center gap-3">
              <Avatar className="w-8 h-8">
                <AvatarFallback className="text-xs">
                  {contact.avatar}
                </AvatarFallback>
              </Avatar>
              <span className="text-sm text-foreground">{contact.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};