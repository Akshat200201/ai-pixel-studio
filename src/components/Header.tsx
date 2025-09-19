import { Search, Bell, Menu, Maximize2, RotateCcw, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

interface HeaderProps {
  onToggleSidebar: () => void;
  title: string;
  className?: string;
}

export const Header = ({ onToggleSidebar, title, className }: HeaderProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={cn(
      "h-14 border-b border-border bg-background flex items-center px-4 gap-4",
      className
    )}>
      <Button variant="ghost" size="sm" onClick={onToggleSidebar}>
        <Menu className="w-4 h-4" />
      </Button>

      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">Dashboards</span>
        <span className="text-sm text-muted-foreground">/</span>
        <span className="text-sm font-medium">{title}</span>
      </div>

      <div className="flex-1" />

      <div className="flex items-center gap-2">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search"
            className="w-80 pl-10 bg-background"
          />
          <kbd className="absolute right-3 top-1/2 transform -translate-y-1/2 px-2 py-1 text-xs bg-muted rounded border">
            ⌘/
          </kbd>
        </div>

        <Button variant="ghost" size="sm">
          <RotateCcw className="w-4 h-4" />
        </Button>

        <Button variant="ghost" size="sm">
          <Bell className="w-4 h-4" />
        </Button>

        <Button variant="ghost" size="sm" onClick={toggleTheme}>
          {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
        </Button>

        <Button variant="ghost" size="sm">
          <Maximize2 className="w-4 h-4" />
        </Button>

        <Avatar className="w-8 h-8">
          <AvatarImage src="/api/placeholder/32/32" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};