import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useLocation } from "react-router-dom";
import { TranslationToggle } from "@/components/common/translation-toggle";

const PagesLayout = () => {
  // Pathname
  const { pathname } = useLocation();
  return (
    <main className="flex flex-col">
      {pathname !== "/" && <Navbar />}
      <div className="container">
        <Outlet />
      </div>
      <TranslationToggle />
      <Footer />
    </main>
  );
};
export default PagesLayout;
