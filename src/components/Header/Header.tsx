import { Settings, Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  title: string;
  subtitle?: string;
  showSettings?: boolean;
  showNotifications?: boolean;
  showSearch?: boolean;
}

export const Header = ({
  title,
  subtitle,
  showSettings = true,
  showNotifications = true,
  showSearch = false,
}: HeaderProps) => {
  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="flex items-center justify-between p-4">
        <div className="flex-1">
          <h1 className="text-xl font-bold gradient-text">{title}</h1>
          {subtitle && (
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          )}
        </div>

        <div className="flex items-center gap-2">
          {showSearch && (
            <Button variant="ghost" size="sm" className="rounded-xl">
              <Search className="w-5 h-5" />
            </Button>
          )}

          {showNotifications && (
            <Button variant="ghost" size="sm" className="rounded-xl relative">
              <Bell className="w-5 h-5" />
              {/* Notification indicator */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full border-2 border-background" />
            </Button>
          )}

          {showSettings && (
            <Button variant="ghost" size="sm" className="rounded-xl">
              <Settings className="w-5 h-5" />
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};
