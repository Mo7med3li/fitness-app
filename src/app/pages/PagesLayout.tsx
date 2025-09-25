import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useLocation } from "react-router-dom";
import Chatbot from "@/components/chatbot/Chatbot";

const PagesLayout = () => {
  // Pathname
  const { pathname } = useLocation();
  return (
    <main className="flex flex-col">
      {pathname !== "/" && pathname !== "/profile" && <Navbar />}
      <div>
        <Outlet />
      </div>
      <Footer />
      <Chatbot />
    </main>
  );
};
export default PagesLayout;
