import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useLocation } from "react-router-dom";
import ChatBot from "@/components/chatbot/Chatbot";

const PagesLayout = () => {
  // Pathname
  const { pathname } = useLocation();
  return (
    <main className="flex flex-col">
      {pathname !== "/" && pathname !== "/profile" && pathname !== "/change-password" && <Navbar />}
      <div>
        <Outlet />
      </div>
      {pathname !== "/profile" && pathname !== "/change-password" && <Footer />}
      <ChatBot />
    </main>
  );
};
export default PagesLayout;
