import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./app/layout.tsx";
import HomePAge from "./app/home/page.tsx";
import AuthLayout from "./app/auth/layout.tsx";
import KYC from "./app/auth/KYC/page.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Home page layout */}
        <Route element={<RootLayout />}>
          <Route index element={<HomePAge />} />
        </Route>

        {/* Auth pages layout */}
        <Route element={<AuthLayout />}>
          <Route path="/auth/kyc" element={<KYC />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
