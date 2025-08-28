import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="bg-hero-pattern bg-cover bg-center h-screen">
      <div className="h-full w-full bg-black/40 backdrop-blur-md flex items-center justify-center">
        <div className="container">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
