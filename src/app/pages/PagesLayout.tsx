import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const PagesLayout = () => {
  return (
    <main className="flex flex-col">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};
export default PagesLayout;
