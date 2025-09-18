import { NavLink } from "react-router-dom";
import { Home, Flower2, Bed, User, PlayCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const BottomNavigation = () => {
  const navItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/meditate", icon: Flower2, label: "Meditate" },
    { path: "/breathe", icon: PlayCircle, label: "Breathe" },
    { path: "/sleep", icon: Bed, label: "Sleep" },
    { path: "/profile", icon: User, label: "Profile" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-md border-t border-border z-50">
      <div className="flex items-center justify-around py-2 px-4 max-w-md mx-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex flex-col items-center py-2 px-3 rounded-xl transition-calm min-w-0",
                isActive
                  ? "text-ocean bg-ocean/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )
            }
          >
            <item.icon className="h-5 w-5 mb-1" />
            <span className="text-xs font-medium truncate">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default BottomNavigation;