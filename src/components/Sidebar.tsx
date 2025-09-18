import { useState } from "react";
import { NavLink } from "react-router-dom";
import { 
  LayoutDashboard, 
  ShoppingCart, 
  FolderOpen, 
  GraduationCap,
  User,
  Settings,
  FileText,
  Users,
  BarChart3,
  MessageSquare,
  Archive,
  Star,
  Clock,
  Moon,
  Sun
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

const sidebarItems = [
  { title: "Overview", icon: LayoutDashboard, url: "/" },
  { title: "Projects", icon: FolderOpen, url: "/projects" },
];

const dashboardItems = [
  { title: "Default", icon: LayoutDashboard, url: "/", active: true },
  { title: "eCommerce", icon: ShoppingCart, url: "/ecommerce" },
  { title: "Projects", icon: FolderOpen, url: "/projects" },
  { title: "Online Courses", icon: GraduationCap, url: "/courses" },
];

const pageItems = [
  { title: "Orders", icon: ShoppingCart, url: "/orders" },
  { title: "User Profile", icon: User, url: "/profile" },
  { title: "Account", icon: Settings, url: "/account" },
  { title: "Corporate", icon: BarChart3, url: "/corporate" },
  { title: "Blog", icon: FileText, url: "/blog" },
  { title: "Social", icon: MessageSquare, url: "/social" },
];

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export const Sidebar = ({ collapsed, onToggle }: SidebarProps) => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className={cn(
      "h-screen bg-sidebar border-r border-sidebar-border transition-all duration-300 flex flex-col",
      collapsed ? "w-16" : "w-64"
    )}>
      {/* Header */}
      <div className="p-4 border-b border-sidebar-border">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">B</span>
          </div>
          {!collapsed && (
            <span className="font-semibold text-sidebar-primary">ByeWind</span>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {/* Favorites */}
        <div>
          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-2">
            <Star className="w-3 h-3" />
            {!collapsed && "Favorites"}
          </div>
          <nav className="space-y-1">
            {sidebarItems.map((item) => (
              <NavLink
                key={item.url}
                to={item.url}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                      : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  )
                }
              >
                <item.icon className="w-4 h-4" />
                {!collapsed && item.title}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Recently */}
        <div>
          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-2">
            <Clock className="w-3 h-3" />
            {!collapsed && "Recently"}
          </div>
        </div>

        {/* Dashboards */}
        <div>
          <h3 className="text-xs font-medium text-muted-foreground mb-2">
            {!collapsed && "Dashboards"}
          </h3>
          <nav className="space-y-1">
            {dashboardItems.map((item) => (
              <NavLink
                key={item.url}
                to={item.url}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    isActive || item.active
                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                      : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  )
                }
              >
                <item.icon className="w-4 h-4" />
                {!collapsed && item.title}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Pages */}
        <div>
          <h3 className="text-xs font-medium text-muted-foreground mb-2">
            {!collapsed && "Pages"}
          </h3>
          <nav className="space-y-1">
            {pageItems.map((item) => (
              <NavLink
                key={item.url}
                to={item.url}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                      : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  )
                }
              >
                <item.icon className="w-4 h-4" />
                {!collapsed && item.title}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-sidebar-border">
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleTheme}
          className="w-full justify-start gap-2"
        >
          {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          {!collapsed && (theme === 'light' ? 'Dark Mode' : 'Light Mode')}
        </Button>
      </div>
    </div>
  );
};