import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useLocation } from "react-router-dom";

const PagesLayout = () => {
  // Pathname
  const { pathname } = useLocation();
  return (
    <main className="flex flex-col">
      {pathname !== "/" && pathname !== "/profile" && <Navbar />}
      <main>
        <Outlet />
      </main>
      {pathname !== "/profile" && <Footer />}
    </main>
  );
};
export default PagesLayout;
