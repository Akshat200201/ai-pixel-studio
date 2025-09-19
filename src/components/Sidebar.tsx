import { useState } from "react";
import { NavLink } from "react-router-dom";
import { 
  Home,
  Calendar,
  Users,
  Settings,
  ChevronDown,
  ChevronRight,
  Sun,
  Moon,
  User,
  Briefcase,
  BookOpen,
  MessageSquare,
  Building2,
  FileText,
  Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

// Define navigation items
const sidebarItems = [
  {
    name: "Overview",
    href: "/",
    icon: Home,
  },
  {
    name: "Projects", 
    href: "/projects",
    icon: Calendar,
  },
];

const dashboardItems = [
  {
    name: "Default",
    href: "/",
    icon: Settings,
  },
  {
    name: "eCommerce", 
    href: "/ecommerce",
    icon: Briefcase,
  },
  {
    name: "Projects",
    href: "/projects", 
    icon: Calendar,
  },
  {
    name: "Online Courses",
    href: "/courses",
    icon: BookOpen,
  },
];

const userProfileSubItems = [
  { name: "Overview", href: "/user-profile/overview" },
  { name: "Projects", href: "/user-profile/projects" },
  { name: "Campaigns", href: "/user-profile/campaigns" },
  { name: "Documents", href: "/user-profile/documents" },
  { name: "Followers", href: "/user-profile/followers" },
];

const pageItems = [
  {
    name: "User Profile",
    href: "/user-profile",
    icon: User,
    hasSubItems: true,
    subItems: userProfileSubItems,
  },
  {
    name: "Account",
    href: "/account", 
    icon: Settings,
  },
  {
    name: "Corporate",
    href: "/corporate",
    icon: Building2,
  },
  {
    name: "Blog",
    href: "/blog",
    icon: FileText,
  },
  {
    name: "Social",
    href: "/social",
    icon: Globe,
  },
];

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export const Sidebar = ({ collapsed, onToggle }: SidebarProps) => {
  const { theme, toggleTheme } = useTheme();
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    userProfile: false,
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

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
        {!collapsed && (
          <div>
            <h3 className="text-xs font-medium text-muted-foreground mb-2">
              Favorites
            </h3>
            <nav className="space-y-1">
              {sidebarItems.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
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
                  {item.name}
                </NavLink>
              ))}
            </nav>
          </div>
        )}

        {/* Recently */}
        {!collapsed && (
          <div>
            <div className="text-xs font-medium text-muted-foreground mb-2">
              Recently
            </div>
          </div>
        )}

        {/* Dashboards */}
        <div>
          {!collapsed && (
            <h3 className="text-xs font-medium text-muted-foreground mb-2">
              Dashboards
            </h3>
          )}
          <nav className="space-y-1">
            {dashboardItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
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
                {!collapsed && item.name}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Pages */}
        {!collapsed && (
          <div>
            <h3 className="text-xs font-medium text-muted-foreground mb-2">
              Pages
            </h3>
            <nav className="space-y-1">
              {pageItems.map((item) => (
                <div key={item.name}>
                  {item.hasSubItems ? (
                    <>
                      <button
                        onClick={() => toggleSection('userProfile')}
                        className="flex items-center justify-between w-full px-3 py-2 rounded-lg text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <item.icon className="w-4 h-4" />
                          {item.name}
                        </div>
                        {expandedSections.userProfile ? (
                          <ChevronDown className="w-4 h-4" />
                        ) : (
                          <ChevronRight className="w-4 h-4" />
                        )}
                      </button>
                      {expandedSections.userProfile && item.subItems && (
                        <div className="ml-6 mt-1 space-y-1">
                          {item.subItems.map((subItem) => (
                            <NavLink
                              key={subItem.name}
                              to={subItem.href}
                              className={({ isActive }) =>
                                cn(
                                  "block px-3 py-2 rounded-lg text-sm transition-colors",
                                  isActive
                                    ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                                    : "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                                )
                              }
                            >
                              {subItem.name}
                            </NavLink>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <NavLink
                      to={item.href}
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
                      {item.name}
                    </NavLink>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
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