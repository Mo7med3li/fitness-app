import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./app/layout.tsx";
import HomePage from "./app/home/page.tsx";
import "./i18n";
<<<<<<< HEAD
import AuthLayout from "./app/auth/layout.tsx";
import KYC from "@/app/auth/KYC/page.tsx";
=======
>>>>>>> faba581a15a2325f65ef80c74838ca9680454b3c
import Providers from "./components/providers/index.tsx";

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
    <Providers>
<<<<<<< HEAD
      <div className="">
        <RouterProvider router={router} />
      </div>
=======
      <RouterProvider router={router} />
>>>>>>> faba581a15a2325f65ef80c74838ca9680454b3c
    </Providers>
  </StrictMode>
);
