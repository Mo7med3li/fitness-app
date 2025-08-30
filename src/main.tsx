import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePAge from "./app/pages/home/page";
import About from "./app/pages/about/About.tsx";
import Providers from "./components/providers/index.tsx";
import PagesLayout from "./app/pages/PagesLayout.tsx";
import AuthLayout from "./app/auth/AuthLayout.tsx";
import Login from "./app/auth/login/Login.tsx";
import ForgetPass from "./app/auth/forget-password/ForgetPass.tsx";
import OTP from "./app/auth/otp/OTP.tsx";
import CreatePass from "./app/auth/Create-password/CreatePass.tsx";
import ProtectedRoute from "./components/common/ProtectedRoute/ProtectedRoute.tsx";
import "./i18n";

const router = createBrowserRouter([
  {
    path: "",
    element: <PagesLayout />,
    children: [
      {
        path: "",
        element: (
          <ProtectedRoute>
            <HomePAge />
          </ProtectedRoute>
        ),
      },
      {
        path: "about",
        element: (
          <ProtectedRoute>
            <About />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "forget-password",
        element: <ForgetPass />,
      },
      {
        path: "OTP",
        element: <OTP />,
      },
      {
        path: "create-password",
        element: <CreatePass />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  </StrictMode>,
);
