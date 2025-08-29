import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./app/layout.tsx";
import HomePage from "./app/home/page.tsx";
import "./i18n";
import AuthLayout from "./app/auth/layout.tsx";
import KYC from "@/app/auth/KYC/page.tsx";

// Routes
const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/kyc",
        element: <KYC />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="bg-zinc-50 dark:bg-red-800">
      <RouterProvider router={router} />
    </div>
  </StrictMode>
);
