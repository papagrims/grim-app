import { Home, BookOpen, User, Plus, Search } from "lucide-react";
import { NavLink } from "react-router-dom";

const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Search, label: "Discover", path: "/discover" },
  { icon: BookOpen, label: "Shelves", path: "/shelves" },
  { icon: User, label: "Profile", path: "/profile" },
];

export const BottomNav = () => {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 max-w-sm mx-auto">
      <div className="bg-background/90 backdrop-blur-xl border border-border rounded-2xl px-4 py-3 shadow-2xl">
        <div className="flex items-center justify-between">
          {navItems.map(({ icon: Icon, label, path }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `relative flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 ${
                  isActive
                    ? "bg-primary text-primary-foreground scale-105"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`
              }
            >
              <Icon size={18} />
              <span className="sr-only">{label}</span>
            </NavLink>
          ))}

          {/* Add Button */}
          <NavLink
            to="/add"
            className={({ isActive }) =>
              `relative flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 ${
                isActive
                  ? "bg-green-600 text-white scale-105 shadow-lg"
                  : "bg-green-500 text-white hover:bg-green-600 shadow-md"
              }`
            }
          >
            <Plus size={20} strokeWidth={2.5} />
            <span className="sr-only">Add</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
