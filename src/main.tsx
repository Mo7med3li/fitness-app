import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Providers from "./components/providers/index.tsx";
import ProtectedRoute from "./components/common/ProtectedRoute/ProtectedRoute.tsx";
import "./i18n";

// pages
import LoginPage from "./app/auth/login/LoginPage.tsx";
import ForgetPasswordPage from "./app/auth/forget-password/ForgetPasswordPage.tsx";
import CreatePasswordPage from "./app/auth/Create-password/CreatePasswordPage.tsx";
import OtpPage from "./app/auth/otp/OtpPage.tsx";
import HomePAge from "./app/pages/home/page";
import About from "./app/pages/about/About.tsx";
import PagesLayout from "./app/pages/PagesLayout.tsx";
import KYC from "@/app/auth/KYC/page.tsx";
import AuthLayout from "./app/auth/layout.tsx";

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
        path: "/auth/kyc",
        element: <KYC />,
      },
      {
        path: "/auth/login",
        element: <LoginPage />,
      },
      {
        path: "/auth/forget-password",
        element: <ForgetPasswordPage />,
      },
      {
        path: "/auth/OTP",
        element: <OtpPage />,
      },
      {
        path: "/auth/create-password",
        element: <CreatePasswordPage />,
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
