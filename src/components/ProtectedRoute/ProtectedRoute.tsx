import { Navigate, Outlet } from "react-router-dom";
import { useAuthStatus } from "@/utilities/useAuthStatus";
import { useAuth } from "@/context/AuthContext";

export function ProtectedRoute() {
  const isLoggedIn = useAuthStatus();
  const { isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground text-sm">Loading...</p>
      </div>
    );
  }

  if (!isLoggedIn) {
    return <Navigate to="/signin" replace />;
  }

  return <Outlet />; // renders child routes if logged in
}
