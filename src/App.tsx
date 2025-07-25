import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { BottomNav } from "@/components/BottomNav/BottomNav";
import { TopNav } from "@/components/TopNav/TopNav";
import { useIsMobile } from "@/hooks/use-mobile";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import Index from "./pages/Index";
import Shelves from "./pages/Bookshelf";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";

const queryClient = new QueryClient();

const AppContent = () => {
  const isMobile = useIsMobile();
  const { user, isLoading } = useAuth();

  const location = useLocation();
  const pathname = location.pathname;

  const hideNav = pathname === "/signin" || pathname === "/signup";

  if (isLoading && !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="text-muted-foreground">Loading...</span>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      {!hideNav && <TopNav user={user} />}

      <div className={hideNav ? "pb-0" : "pb-20 md:pb-0"}>
        <Routes>
          {/* Public routes */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Protected routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Index user={user} />} />
            <Route path="/shelves" element={<Shelves />} />
            <Route path="/profile" element={<Profile user={user} />} />
            <Route
              path="/discover"
              element={
                <div className="min-h-screen bg-background pb-20 md:pb-0 flex items-center justify-center">
                  <div className="text-center">
                    <h1 className="text-2xl font-bold mb-2">Discover</h1>
                    <p className="text-muted-foreground">Coming Soon</p>
                  </div>
                </div>
              }
            />
            <Route
              path="/add"
              element={
                <div className="min-h-screen bg-background pb-20 md:pb-0 flex items-center justify-center">
                  <div className="text-center">
                    <h1 className="text-2xl font-bold mb-2">Add Manga</h1>
                    <p className="text-muted-foreground">Scan or Search</p>
                  </div>
                </div>
              }
            />
          </Route>

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      {isMobile && !hideNav && <BottomNav user={user} />}
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <AppContent />
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
