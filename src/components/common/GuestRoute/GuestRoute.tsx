import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

export default function GuestRoute({ children }: { children: ReactNode }) {
  const token = localStorage.getItem("userToken");

  if (token) {
    return <Navigate to="/" replace />;
  } else {
    return <>{children}</>;
  }
}
