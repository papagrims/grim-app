import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BottomNav } from "@/components/BottomNav/BottomNav";
import { TopNav } from "@/components/TopNav/TopNav";
import { useIsMobile } from "@/hooks/use-mobile";
import { AuthProvider } from "@/context/AuthContext";
import Index from "./pages/Index";
import Shelves from "./pages/Bookshelf";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";

const queryClient = new QueryClient();

const AppContent = () => {
  const isMobile = useIsMobile();

  return (
    <div className="relative min-h-screen">
      {!isMobile && <TopNav />}

      <div
        className={`${!isMobile ? "max-w-7xl mx-auto" : ""} ${
          isMobile ? "pb-20" : "md:px-6 lg:px-8"
        }`}
      >
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/shelves" element={<Shelves />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/discover"
            element={
              <div
                className={`min-h-screen bg-background ${
                  isMobile ? "pb-20" : ""
                } flex items-center justify-center`}
              >
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
              <div
                className={`min-h-screen bg-background ${
                  isMobile ? "pb-20" : ""
                } flex items-center justify-center`}
              >
                <div className="text-center">
                  <h1 className="text-2xl font-bold mb-2">Add Manga</h1>
                  <p className="text-muted-foreground">Scan or Search</p>
                </div>
              </div>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      {isMobile && <BottomNav />}
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
