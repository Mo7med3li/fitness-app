import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="bg-hero-pattern bg-cover bg-center h-fit w-full min-h-screen">
      <div className="h-fit w-full bg-black/40 backdrop-blur-md flex items-center justify-center min-h-screen">
        <div className="container">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
