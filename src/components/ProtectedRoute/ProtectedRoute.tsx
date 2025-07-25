import { Navigate, Outlet } from "react-router-dom";
import { useAuthStatus } from "@/utilities/useAuthStatus";

export function ProtectedRoute() {
  const isLoggedIn = useAuthStatus();

  if (!isLoggedIn) {
    return <Navigate to="/signin" replace />;
  }

  return <Outlet />; // renders child routes if logged in
}
