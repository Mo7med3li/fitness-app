import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  if (localStorage.getItem("userToken") !== null) {
    return <>{children}</>;
  } else {
    return <Navigate to="/auth/login" />;
  }
}
