import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useLocation } from "react-router-dom";

const PagesLayout = () => {
  // Pathname
  const { pathname } = useLocation();
  return (
    <main className="flex flex-col">
      {pathname !== "/" && <Navbar />}
      <div>
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};
export default PagesLayout;
