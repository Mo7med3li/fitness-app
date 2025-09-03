import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const token = localStorage.getItem("userToken");

  if (token) {
    return <>{children}</>;
  } else {
    return <Navigate to="/auth/login" replace />;
  }
}
