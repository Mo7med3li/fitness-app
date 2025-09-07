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
import GuestRoute from "./components/common/GuestRoute/GuestRoute.tsx";
import ClassessPage from "./app/pages/classes/ClassessPage.tsx";
import MsclesGroupPage from "./app/pages/musclesGroup/musclesGroupPage.tsx";

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
      {
        path: "classess",
        element: (
          <ProtectedRoute>
            <ClassessPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "musclesGroup/:id",
        element: (
          <ProtectedRoute>
            <MsclesGroupPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/kyc",
        element: (
          <GuestRoute>
            <KYC />
          </GuestRoute>
        ),
      },
      {
        path: "/auth/login",
        element: (
          <GuestRoute>
            <LoginPage />
          </GuestRoute>
        ),
      },
      {
        path: "/auth/forget-password",
        element: (
          <GuestRoute>
            <ForgetPasswordPage />
          </GuestRoute>
        ),
      },
      {
        path: "/auth/OTP",
        element: (
          <GuestRoute>
            <OtpPage />
          </GuestRoute>
        ),
      },
      {
        path: "/auth/create-password",
        element: (
          <GuestRoute>
            <CreatePasswordPage />
          </GuestRoute>
        ),
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
