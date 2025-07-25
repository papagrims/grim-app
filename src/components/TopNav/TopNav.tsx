import { Home, BookOpen, User, Plus, Search, Menu, LogIn } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useAuth } from "@/context/AuthContext";

const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Search, label: "Discover", path: "/discover" },
  { icon: BookOpen, label: "Shelves", path: "/shelves" },
  { icon: User, label: "Profile", path: "/profile" },
  { icon: Plus, label: "Add", path: "/add", special: true },
];

export const TopNav = ({ user }: any) => {
  const { signOut } = useAuth();

  return (
    <header className="hidden md:block sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
            <BookOpen className="h-5 w-5 text-primary-foreground" />
          </div>
          <h1 className="text-xl font-bold gradient-text">MangaTracker</h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          <nav className="flex items-center gap-1">
            {navItems.map(({ icon: Icon, label, path, special }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    special
                      ? isActive
                        ? "bg-green-600 text-white"
                        : "bg-green-500 text-white hover:bg-green-600"
                      : isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`
                }
              >
                <Icon size={18} />
                <span>{label}</span>
              </NavLink>
            ))}
          </nav>

          {/* Auth Buttons */}
          {user ? (
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                Hi, {user.first_name}
              </span>
              <Button variant="outline" size="sm" onClick={signOut}>
                Sign Out
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <NavLink to="/signin">
                <Button variant="outline" size="sm">
                  <LogIn className="w-4 h-4 mr-1" />
                  Sign In
                </Button>
              </NavLink>
              <NavLink to="/signup">
                <Button size="sm">Sign Up</Button>
              </NavLink>
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <div className="flex flex-col gap-4 mt-8">
              {navItems.map(({ icon: Icon, label, path, special }) => (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                      special
                        ? isActive
                          ? "bg-green-600 text-white"
                          : "bg-green-500 text-white hover:bg-green-600"
                        : isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`
                  }
                >
                  <Icon size={20} />
                  <span>{label}</span>
                </NavLink>
              ))}

              {/* Mobile Auth Section */}
              <div className="border-t pt-4 mt-4">
                {user ? (
                  <div className="space-y-3">
                    <div className="px-4 py-2">
                      <p className="text-sm font-medium">{user.first_name}</p>
                      <p className="text-xs text-muted-foreground">
                        {user.email}
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={signOut}
                    >
                      Sign Out
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <NavLink to="/signin" className="block">
                      <Button variant="outline" className="w-full">
                        <LogIn className="w-4 h-4 mr-2" />
                        Sign In
                      </Button>
                    </NavLink>
                    <NavLink to="/signup" className="block">
                      <Button className="w-full">Sign Up</Button>
                    </NavLink>
                  </div>
                )}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
